'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { getSession } from '@/lib/services/auth.service';
import {
  createUser,
  updateUser,
  activateUser,
  deactivateUser,
  unlockUser,
  adminResetPassword,
} from '@/lib/services/users.service';
import { Role } from '@/generated/prisma';

// ─── Session guard helper ─────────────────────────────────────────────────────

async function requireSuperAdmin() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');
  if (session.role !== Role.Super_Admin) redirect('/admin');
  return session;
}

// ─── Create user ──────────────────────────────────────────────────────────────

const createSchema = z.object({
  fullName: z.string().trim().min(2, 'Full name required.'),
  email: z.string().trim().email('Invalid email.'),
  password: z.string().min(8, 'Password must be at least 8 characters.'),
  role: z.enum(['Super_Admin', 'Editor', 'Viewer']),
});

export interface ActionState {
  error?: string;
  fieldErrors?: Record<string, string[]>;
  success?: boolean;
}

export async function createUserAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireSuperAdmin();

  const raw = {
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    password: formData.get('password'),
    role: formData.get('role'),
  };

  const result = createSchema.safeParse(raw);
  if (!result.success) {
    return { fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]> };
  }

  try {
    await createUser({
      ...result.data,
      role: result.data.role as Role,
      createdById: session.userId,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : '';
    if (msg.includes('P2002') || msg.toLowerCase().includes('unique')) {
      return { fieldErrors: { email: ['A user with this email already exists.'] } };
    }
    return { error: 'Failed to create user. Please try again.' };
  }

  revalidatePath('/admin/users');
  redirect('/admin/users');
}

// ─── Update user ──────────────────────────────────────────────────────────────

const updateSchema = z.object({
  fullName: z.string().trim().min(2, 'Full name required.'),
  role: z.enum(['Super_Admin', 'Editor', 'Viewer']),
});

export async function updateUserAction(
  userId: string,
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireSuperAdmin();

  const raw = {
    fullName: formData.get('fullName'),
    role: formData.get('role'),
  };

  const result = updateSchema.safeParse(raw);
  if (!result.success) {
    return { fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]> };
  }

  try {
    await updateUser(userId, {
      fullName: result.data.fullName,
      role: result.data.role as Role,
    });
  } catch {
    return { error: 'Failed to update user. Please try again.' };
  }

  revalidatePath('/admin/users');
  redirect('/admin/users');
}

// ─── Toggle active ────────────────────────────────────────────────────────────

export async function toggleUserActiveAction(
  userId: string,
  activate: boolean,
): Promise<ActionState> {
  await requireSuperAdmin();

  try {
    if (activate) {
      await activateUser(userId);
    } else {
      await deactivateUser(userId);
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : '';
    if (msg === 'LAST_SUPER_ADMIN') {
      return { error: 'Cannot deactivate the last Super_Admin account.' };
    }
    return { error: 'Failed to update user status.' };
  }

  revalidatePath('/admin/users');
  return { success: true };
}

// ─── Unlock account ───────────────────────────────────────────────────────────

export async function unlockUserAction(userId: string): Promise<ActionState> {
  await requireSuperAdmin();

  try {
    await unlockUser(userId);
  } catch {
    return { error: 'Failed to unlock account.' };
  }

  revalidatePath('/admin/users');
  return { success: true };
}

// ─── Admin password reset ─────────────────────────────────────────────────────

const pwSchema = z.object({
  newPassword: z.string().min(8, 'Password must be at least 8 characters.'),
  confirmPassword: z.string(),
}).refine((d) => d.newPassword === d.confirmPassword, {
  message: 'Passwords do not match.',
  path: ['confirmPassword'],
});

export async function adminResetPasswordAction(
  userId: string,
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireSuperAdmin();

  const raw = {
    newPassword: formData.get('newPassword'),
    confirmPassword: formData.get('confirmPassword'),
  };

  const result = pwSchema.safeParse(raw);
  if (!result.success) {
    return { fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]> };
  }

  try {
    await adminResetPassword(userId, result.data.newPassword);
  } catch {
    return { error: 'Failed to reset password.' };
  }

  revalidatePath('/admin/users');
  return { success: true };
}
