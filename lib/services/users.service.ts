import bcrypt from 'bcryptjs';
import { prisma } from '../prisma';
import { Role } from '../../generated/prisma';

const BCRYPT_COST = 12;

export interface UserRow {
  id: string;
  fullName: string;
  email: string;
  role: Role;
  active: boolean;
  lockedAt: Date | null;
  createdAt: Date;
  createdById: string | null;
}

// ─── List ─────────────────────────────────────────────────────────────────────

export async function listUsers(): Promise<UserRow[]> {
  return prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
      active: true,
      lockedAt: true,
      createdAt: true,
      createdById: true,
    },
  });
}

// ─── Get one ──────────────────────────────────────────────────────────────────

export async function getUserById(id: string): Promise<UserRow | null> {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
      active: true,
      lockedAt: true,
      createdAt: true,
      createdById: true,
    },
  });
}

// ─── Create ───────────────────────────────────────────────────────────────────

export interface CreateUserData {
  fullName: string;
  email: string;
  password: string;
  role: Role;
  createdById: string;
}

export async function createUser(data: CreateUserData): Promise<UserRow> {
  const passwordHash = await bcrypt.hash(data.password, BCRYPT_COST);
  return prisma.user.create({
    data: {
      fullName: data.fullName.trim(),
      email: data.email.trim().toLowerCase(),
      passwordHash,
      role: data.role,
      createdById: data.createdById,
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
      active: true,
      lockedAt: true,
      createdAt: true,
      createdById: true,
    },
  });
}

// ─── Update ───────────────────────────────────────────────────────────────────

export interface UpdateUserData {
  fullName?: string;
  role?: Role;
}

export async function updateUser(
  id: string,
  data: UpdateUserData,
): Promise<UserRow> {
  return prisma.user.update({
    where: { id },
    data: {
      ...(data.fullName !== undefined ? { fullName: data.fullName.trim() } : {}),
      ...(data.role !== undefined ? { role: data.role } : {}),
    },
    select: {
      id: true,
      fullName: true,
      email: true,
      role: true,
      active: true,
      lockedAt: true,
      createdAt: true,
      createdById: true,
    },
  });
}

// ─── Activate / deactivate ────────────────────────────────────────────────────

/** Ensure the last Super_Admin cannot be deactivated. */
async function guardLastSuperAdmin(userId: string): Promise<void> {
  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (user?.role === Role.Super_Admin) {
    const count = await prisma.user.count({
      where: { role: Role.Super_Admin, active: true },
    });
    if (count <= 1) {
      throw new Error('LAST_SUPER_ADMIN');
    }
  }
}

export async function deactivateUser(userId: string): Promise<void> {
  await guardLastSuperAdmin(userId);
  await prisma.$transaction([
    prisma.session.deleteMany({ where: { userId } }),
    prisma.user.update({ where: { id: userId }, data: { active: false } }),
  ]);
}

export async function activateUser(userId: string): Promise<void> {
  await prisma.user.update({ where: { id: userId }, data: { active: true } });
}

// ─── Unlock ───────────────────────────────────────────────────────────────────

export async function unlockUser(userId: string): Promise<void> {
  await prisma.user.update({
    where: { id: userId },
    data: { lockedAt: null, failedAttempts: 0 },
  });
}

// ─── Admin-triggered password reset ──────────────────────────────────────────

export async function adminResetPassword(
  userId: string,
  newPassword: string,
): Promise<void> {
  const passwordHash = await bcrypt.hash(newPassword, BCRYPT_COST);
  await prisma.user.update({
    where: { id: userId },
    data: { passwordHash, failedAttempts: 0, lockedAt: null },
  });
  // Invalidate all sessions so user must log in with new password
  await prisma.session.deleteMany({ where: { userId } });
}

// ─── Count Super_Admins (for guard display in UI) ─────────────────────────────

export async function countActiveSuperAdmins(): Promise<number> {
  return prisma.user.count({
    where: { role: Role.Super_Admin, active: true },
  });
}
