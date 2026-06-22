'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { getSession } from '@/lib/services/auth.service';
import {
  createProgram,
  updateProgram,
  deleteProgram,
  publishProgram,
  unpublishProgram,
} from '@/lib/services/programs.service';

// ─── Session guard ────────────────────────────────────────────────────────────

async function requireEditor() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');
  if (session.role === 'Viewer') redirect('/admin/programs');
  return session;
}

// ─── Shared state type ────────────────────────────────────────────────────────

export interface ActionState {
  error?: string;
  fieldErrors?: Record<string, string[]>;
  success?: boolean;
}

// ─── Schema ───────────────────────────────────────────────────────────────────

const programSchema = z.object({
  title: z.string().trim().min(3, 'Title must be at least 3 characters.'),
  slug: z.string().trim().min(1, 'Slug is required.'),
  category: z.string().trim().min(1, 'Category is required.'),
  status: z.enum(['active', 'expanding', 'planned']).default('active'),
  iconName: z.string().trim().default('FileText'),
  tone: z.enum(['blue', 'green']).default('blue'),
  summary: z.string().trim().min(10, 'Summary must be at least 10 characters.'),
  description: z.string().trim().default(''),
  beneficiaries: z.string().trim().default(''),
  coverage: z.string().trim().default(''),
  leadUnit: z.string().trim().default(''),
  featuredImageUrl: z.string().trim().default('/uploads/placeholder.png'),
  bannerImageUrl: z.string().trim().default(''),
  displayOrder: z.coerce.number().int().min(0).default(0),
  published: z.enum(['on', 'off']).default('off'),
  featured: z.enum(['on', 'off']).default('off'),
});

// ─── Create ───────────────────────────────────────────────────────────────────

export async function createProgramAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireEditor();

  const raw = {
    title: formData.get('title'),
    slug: formData.get('slug'),
    category: formData.get('category'),
    status: formData.get('status') || 'active',
    iconName: formData.get('iconName') || 'FileText',
    tone: formData.get('tone') || 'blue',
    summary: formData.get('summary'),
    description: formData.get('description') || '',
    beneficiaries: formData.get('beneficiaries') || '',
    coverage: formData.get('coverage') || '',
    leadUnit: formData.get('leadUnit') || '',
    featuredImageUrl: formData.get('featuredImageUrl') || '/uploads/placeholder.png',
    bannerImageUrl: formData.get('bannerImageUrl') || '',
    displayOrder: formData.get('displayOrder') || '0',
    published: formData.get('published') === 'on' ? 'on' : 'off',
    featured: formData.get('featured') === 'on' ? 'on' : 'off',
  };

  const result = programSchema.safeParse(raw);
  if (!result.success) {
    return { fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]> };
  }

  try {
    await createProgram({
      ...result.data,
      status: result.data.status as import('@/generated/prisma').ProgramStatus,
      tone: result.data.tone as import('@/generated/prisma').Tone,
      published: result.data.published === 'on',
      featured: result.data.featured === 'on',
      userId: session.userId,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Failed to create program.';
    if (message.includes('Unique constraint') && message.includes('slug')) {
      return { error: 'A program with this slug already exists. Choose a different slug.' };
    }
    return { error: 'Failed to create program.' };
  }

  revalidatePath('/admin/programs');
  revalidatePath('/programs');
  redirect('/admin/programs');
}

// ─── Update ───────────────────────────────────────────────────────────────────

export async function updateProgramAction(
  programId: string,
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireEditor();

  const raw = {
    title: formData.get('title'),
    slug: formData.get('slug'),
    category: formData.get('category'),
    status: formData.get('status') || 'active',
    iconName: formData.get('iconName') || 'FileText',
    tone: formData.get('tone') || 'blue',
    summary: formData.get('summary'),
    description: formData.get('description') || '',
    beneficiaries: formData.get('beneficiaries') || '',
    coverage: formData.get('coverage') || '',
    leadUnit: formData.get('leadUnit') || '',
    featuredImageUrl: formData.get('featuredImageUrl') || '/uploads/placeholder.png',
    bannerImageUrl: formData.get('bannerImageUrl') || '',
    displayOrder: formData.get('displayOrder') || '0',
    published: formData.get('published') === 'on' ? 'on' : 'off',
    featured: formData.get('featured') === 'on' ? 'on' : 'off',
  };

  const result = programSchema.safeParse(raw);
  if (!result.success) {
    return { fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]> };
  }

  try {
    await updateProgram(programId, {
      ...result.data,
      status: result.data.status as import('@/generated/prisma').ProgramStatus,
      tone: result.data.tone as import('@/generated/prisma').Tone,
      published: result.data.published === 'on',
      featured: result.data.featured === 'on',
      userId: session.userId,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : '';
    if (message.includes('Unique constraint') && message.includes('slug')) {
      return { error: 'A program with this slug already exists. Choose a different slug.' };
    }
    return { error: 'Failed to update program.' };
  }

  revalidatePath('/admin/programs');
  revalidatePath('/programs');
  redirect('/admin/programs');
}

// ─── Publish ──────────────────────────────────────────────────────────────────

export async function publishProgramAction(programId: string) {
  const session = await requireEditor();
  try {
    await publishProgram(programId, session.userId);
  } catch {
    return { error: 'Failed to publish program.' };
  }
  revalidatePath('/admin/programs');
  revalidatePath('/programs');
  return { success: true };
}

// ─── Unpublish ────────────────────────────────────────────────────────────────

export async function unpublishProgramAction(programId: string) {
  const session = await requireEditor();
  try {
    await unpublishProgram(programId, session.userId);
  } catch {
    return { error: 'Failed to unpublish program.' };
  }
  revalidatePath('/admin/programs');
  revalidatePath('/programs');
  return { success: true };
}

// ─── Delete (soft) ────────────────────────────────────────────────────────────

export async function deleteProgramAction(programId: string) {
  const session = await requireEditor();
  try {
    await deleteProgram(programId, session.userId);
  } catch {
    return { error: 'Failed to delete program.' };
  }
  revalidatePath('/admin/programs');
  revalidatePath('/programs');
  return { success: true };
}
