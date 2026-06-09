'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { getSession } from '@/lib/services/auth.service';
import {
  createProject,
  updateProject,
  deleteProject,
} from '@/lib/services/projects.service';

// ─── Session guard ────────────────────────────────────────────────────────────

async function requireEditor() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');
  if (session.role === 'Viewer') redirect('/admin/projects');
  return session;
}

// ─── Shared state type ────────────────────────────────────────────────────────

export interface ActionState {
  error?: string;
  fieldErrors?: Record<string, string[]>;
  success?: boolean;
}

// ─── Create project ───────────────────────────────────────────────────────────

const projectSchema = z.object({
  title: z.string().trim().min(3, 'Title must be at least 3 characters.'),
  lga: z.string().trim().min(1, 'Please select an LGA.'),
  community: z.string().trim().min(1, 'Community is required.'),
  typeId: z.string().trim().min(1, 'Please select a project type.'),
  status: z.enum(['planned', 'ongoing', 'completed']).default('planned'),
  year: z.coerce.number().int().min(2000, 'Year must be 2000 or later.').max(2100, 'Invalid year.'),
  progress: z.coerce.number().int().min(0).max(100).default(0),
  beneficiaries: z.coerce.number().int().min(0).default(0),
  description: z.string().trim().min(10, 'Description must be at least 10 characters.'),
  featuredImageUrl: z.string().trim().default('/uploads/placeholder.png'),
  thumbnailUrl: z.string().trim().default('/uploads/placeholder.png'),
  featured: z.enum(['on', 'off']).default('off'),
});

export async function createProjectAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireEditor();

  const raw = {
    title: formData.get('title'),
    lga: formData.get('lga'),
    community: formData.get('community'),
    typeId: formData.get('typeId'),
    status: formData.get('status') || 'planned',
    year: formData.get('year'),
    progress: formData.get('progress') || '0',
    beneficiaries: formData.get('beneficiaries') || '0',
    description: formData.get('description'),
    featuredImageUrl: formData.get('featuredImageUrl') || '/uploads/placeholder.png',
    thumbnailUrl: formData.get('thumbnailUrl') || '/uploads/placeholder.png',
    featured: formData.get('featured') === 'on' ? 'on' : 'off',
  };

  const result = projectSchema.safeParse(raw);
  if (!result.success) {
    return { fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]> };
  }

  try {
    await createProject({
      ...result.data,
      featured: result.data.featured === 'on',
      status: result.data.status as import('@/generated/prisma').ProjectStatus,
      userId: session.userId,
    });
  } catch {
    return { error: 'Failed to create project. Please try again.' };
  }

  revalidatePath('/admin/projects');
  revalidatePath('/projects');
  redirect('/admin/projects');
}

// ─── Update project ───────────────────────────────────────────────────────────

export async function updateProjectAction(
  projectId: string,
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireEditor();

  const raw = {
    title: formData.get('title'),
    lga: formData.get('lga'),
    community: formData.get('community'),
    typeId: formData.get('typeId'),
    status: formData.get('status') || 'planned',
    year: formData.get('year'),
    progress: formData.get('progress') || '0',
    beneficiaries: formData.get('beneficiaries') || '0',
    description: formData.get('description'),
    featuredImageUrl: formData.get('featuredImageUrl') || undefined,
    thumbnailUrl: formData.get('thumbnailUrl') || undefined,
    featured: formData.get('featured') === 'on' ? 'on' : 'off',
  };

  const result = projectSchema.safeParse(raw);
  if (!result.success) {
    return { fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]> };
  }

  try {
    await updateProject(projectId, {
      ...result.data,
      featured: result.data.featured === 'on',
      status: result.data.status as import('@/generated/prisma').ProjectStatus,
      userId: session.userId,
    });
  } catch {
    return { error: 'Failed to update project. Please try again.' };
  }

  revalidatePath('/admin/projects');
  revalidatePath('/projects');
  redirect('/admin/projects');
}

// ─── Delete (soft) ────────────────────────────────────────────────────────────

export async function deleteProjectAction(
  projectId: string,
): Promise<ActionState> {
  const session = await requireEditor();

  try {
    await deleteProject(projectId, session.userId);
  } catch {
    return { error: 'Failed to delete project.' };
  }

  revalidatePath('/admin/projects');
  revalidatePath('/projects');
  return { success: true };
}
