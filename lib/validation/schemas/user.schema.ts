import { z } from 'zod';

export const ROLES = ['Super_Admin', 'Editor', 'Viewer'] as const;

export const createUserSchema = z.object({
  fullName: z.string().trim().min(2, 'Full name must be at least 2 characters.'),
  email: z.string().trim().email('Invalid email address.'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .max(128, 'Password must be at most 128 characters.'),
  role: z.enum(ROLES, { error: 'Role must be Super_Admin, Editor, or Viewer.' }),
});

export const updateUserSchema = z.object({
  fullName: z.string().trim().min(2, 'Full name must be at least 2 characters.').optional(),
  role: z.enum(ROLES, { error: 'Role must be Super_Admin, Editor, or Viewer.' }).optional(),
});

export const resetPasswordSchema = z.object({
  newPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .max(128, 'Password must be at most 128 characters.'),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
