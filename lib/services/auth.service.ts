import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { prisma } from '../prisma';
import { sendMail } from '../email/mailer';
import { Role } from '../../generated/prisma';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SessionPayload {
  sessionId: string;
  userId: string;
  role: Role;
  fullName: string;
  email: string;
}

export interface LoginResult {
  ok: true;
  session: SessionPayload;
}

export interface LoginError {
  ok: false;
  code:
    | 'INVALID_CREDENTIALS'
    | 'ACCOUNT_LOCKED'
    | 'ACCOUNT_INACTIVE';
  message: string;
}

export interface CreateUserInput {
  fullName: string;
  email: string;
  password: string;
  role: Role;
  createdById?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const BCRYPT_COST = 12;
/** Session idle timeout: 60 minutes */
const SESSION_TTL_MS = 60 * 60 * 1000;
/** Password reset token validity: 24 hours */
const RESET_TOKEN_TTL_MS = 24 * 60 * 60 * 1000;
/** Max consecutive failures before lockout */
const MAX_FAILED_ATTEMPTS = 5;
/** Lockout observation window: 10 minutes */
const LOCKOUT_WINDOW_MS = 10 * 60 * 1000;

// ─── In-process failure tracking (keyed by lowercase email) ──────────────────
// Maps email → array of failure timestamps within the current window.
// Sufficient for a small single-instance deployment; swap for Redis if scaling.

const failureLog = new Map<string, number[]>();

function recentFailures(email: string): number {
  const key = email.toLowerCase();
  const now = Date.now();
  const timestamps = (failureLog.get(key) ?? []).filter(
    (t) => now - t < LOCKOUT_WINDOW_MS,
  );
  failureLog.set(key, timestamps);
  return timestamps.length;
}

function recordFailure(email: string): void {
  const key = email.toLowerCase();
  const timestamps = failureLog.get(key) ?? [];
  timestamps.push(Date.now());
  failureLog.set(key, timestamps);
}

function clearFailures(email: string): void {
  failureLog.delete(email.toLowerCase());
}

// ─── Auth Service ─────────────────────────────────────────────────────────────

/**
 * Attempt to log in with email + password.
 * Returns a SessionPayload on success, or an error descriptor on failure.
 */
export async function login(
  email: string,
  password: string,
): Promise<LoginResult | LoginError> {
  const user = await prisma.user.findUnique({ where: { email } });

  // Unknown email — still record a failure to prevent user enumeration timing
  if (!user) {
    recordFailure(email);
    return { ok: false, code: 'INVALID_CREDENTIALS', message: 'Invalid email or password.' };
  }

  // Locked account check (DB-side lock set by recordFailedAttempt)
  if (user.lockedAt) {
    return { ok: false, code: 'ACCOUNT_LOCKED', message: 'Account is locked. Contact your administrator.' };
  }

  // In-process window check (rate limit before DB write)
  if (recentFailures(email) >= MAX_FAILED_ATTEMPTS) {
    return { ok: false, code: 'ACCOUNT_LOCKED', message: 'Account is locked. Contact your administrator.' };
  }

  if (!user.active) {
    return { ok: false, code: 'ACCOUNT_INACTIVE', message: 'Account has been deactivated.' };
  }

  const passwordMatch = await bcrypt.compare(password, user.passwordHash);

  if (!passwordMatch) {
    recordFailure(email);
    await recordFailedAttempt(user.id, email);
    return { ok: false, code: 'INVALID_CREDENTIALS', message: 'Invalid email or password.' };
  }

  // Successful login — reset counters
  clearFailures(email);
  await prisma.user.update({
    where: { id: user.id },
    data: { failedAttempts: 0, lockedAt: null },
  });

  // Create session (sliding 60-min window from now)
  const session = await prisma.session.create({
    data: {
      userId: user.id,
      expiresAt: new Date(Date.now() + SESSION_TTL_MS),
    },
  });

  return {
    ok: true,
    session: {
      sessionId: session.id,
      userId: user.id,
      role: user.role,
      fullName: user.fullName,
      email: user.email,
    },
  };
}

/**
 * Delete a session row (logout).
 */
export async function logout(sessionId: string): Promise<void> {
  await prisma.session.deleteMany({ where: { id: sessionId } });
}

/**
 * Look up a valid (non-expired) session and return its payload.
 * Returns null if the session does not exist or is expired.
 */
export async function getSession(
  sessionId: string,
): Promise<SessionPayload | null> {
  const session = await prisma.session.findFirst({
    where: {
      id: sessionId,
      expiresAt: { gt: new Date() },
    },
    include: { user: true },
  });

  if (!session || !session.user.active) return null;

  // Enforce 60-min idle window based on lastSeen
  const idleMs = Date.now() - session.lastSeen.getTime();
  if (idleMs > SESSION_TTL_MS) {
    await prisma.session.deleteMany({ where: { id: sessionId } });
    return null;
  }

  return {
    sessionId: session.id,
    userId: session.userId,
    role: session.user.role,
    fullName: session.user.fullName,
    email: session.user.email,
  };
}

/**
 * Slide the session's idle window by updating lastSeen to now.
 */
export async function touchSession(sessionId: string): Promise<void> {
  await prisma.session.updateMany({
    where: { id: sessionId },
    data: { lastSeen: new Date() },
  });
}

/**
 * Create a new user with a bcrypt-hashed password.
 */
export async function createUser(input: CreateUserInput) {
  const passwordHash = await bcrypt.hash(input.password, BCRYPT_COST);
  return prisma.user.create({
    data: {
      fullName: input.fullName.trim(),
      email: input.email.trim().toLowerCase(),
      passwordHash,
      role: input.role,
      createdById: input.createdById ?? null,
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
      active: true,
      createdAt: true,
    },
  });
}

/**
 * Generate a password reset token, store its SHA-256 hash, and email the
 * plain token link to the user. Silently succeeds for unknown emails to
 * prevent user enumeration.
 */
export async function requestPasswordReset(email: string): Promise<void> {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return; // silent — don't leak whether the address exists

  // 256-bit random token
  const plainToken = crypto.randomBytes(32).toString('hex');
  const tokenHash = crypto
    .createHash('sha256')
    .update(plainToken)
    .digest('hex');

  await prisma.passwordResetToken.create({
    data: {
      userId: user.id,
      tokenHash,
      expiresAt: new Date(Date.now() + RESET_TOKEN_TTL_MS),
    },
  });

  const resetUrl = `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}/admin/reset-password?token=${plainToken}`;

  await sendMail({
    to: user.email,
    subject: 'RUWASA CMS — Password Reset',
    text: `You requested a password reset.\n\nClick the link below to set a new password (valid for 24 hours):\n\n${resetUrl}\n\nIf you did not request this, ignore this email.`,
    html: `<p>You requested a password reset.</p><p><a href="${resetUrl}">Reset your password</a> (valid for 24 hours).</p><p>If you did not request this, ignore this email.</p>`,
  });
}

/**
 * Validate a reset token and update the user's password.
 */
export async function resetPassword(
  plainToken: string,
  newPassword: string,
): Promise<{ ok: true } | { ok: false; code: 'INVALID_TOKEN' | 'EXPIRED_TOKEN'; message: string }> {
  const tokenHash = crypto
    .createHash('sha256')
    .update(plainToken)
    .digest('hex');

  const record = await prisma.passwordResetToken.findUnique({
    where: { tokenHash },
  });

  if (!record) {
    return { ok: false, code: 'INVALID_TOKEN', message: 'Reset token is invalid.' };
  }

  if (record.usedAt) {
    return { ok: false, code: 'INVALID_TOKEN', message: 'Reset token has already been used.' };
  }

  if (record.expiresAt < new Date()) {
    return { ok: false, code: 'EXPIRED_TOKEN', message: 'Reset token has expired. Please request a new one.' };
  }

  const passwordHash = await bcrypt.hash(newPassword, BCRYPT_COST);

  await prisma.$transaction([
    prisma.user.update({
      where: { id: record.userId },
      data: { passwordHash, failedAttempts: 0, lockedAt: null },
    }),
    prisma.passwordResetToken.update({
      where: { id: record.id },
      data: { usedAt: new Date() },
    }),
  ]);

  return { ok: true };
}

/**
 * Increment failed login attempts for a user and lock the account at 5
 * consecutive failures. Notifies all Super_Admins by email on lockout.
 */
export async function recordFailedAttempt(
  userId: string,
  email: string,
): Promise<void> {
  const user = await prisma.user.update({
    where: { id: userId },
    data: { failedAttempts: { increment: 1 } },
  });

  if (user.failedAttempts >= MAX_FAILED_ATTEMPTS && !user.lockedAt) {
    await prisma.user.update({
      where: { id: userId },
      data: { lockedAt: new Date() },
    });

    // Notify all Super_Admins
    const admins = await prisma.user.findMany({
      where: { role: Role.Super_Admin, active: true },
      select: { email: true },
    });

    const adminEmails = admins.map((a) => a.email);
    if (adminEmails.length > 0) {
      await sendMail({
        to: adminEmails,
        subject: 'RUWASA CMS — Account Locked',
        text: `The account for ${email} has been locked after ${MAX_FAILED_ATTEMPTS} consecutive failed login attempts. Please review and unlock the account if necessary.`,
      });
    }
  }
}

/**
 * Deactivate a user account and invalidate all their active sessions.
 */
export async function deactivateUser(userId: string): Promise<void> {
  await prisma.$transaction([
    prisma.session.deleteMany({ where: { userId } }),
    prisma.user.update({
      where: { id: userId },
      data: { active: false },
    }),
  ]);
}
