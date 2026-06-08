'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { getSession } from '@/lib/services/auth.service';
import {
  createArticle,
  updateArticle,
  publishArticle,
  unpublishArticle,
  deleteArticle,
} from '@/lib/services/news.service';

// ─── Session guard (Editor or Super_Admin) ────────────────────────────────────

async function requireEditor() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');
  if (session.role === 'Viewer') redirect('/admin/news');
  return session;
}

async function requireSuperAdmin() {
  const session = await requireEditor();
  if (session.role !== 'Super_Admin') redirect('/admin/news');
  return session;
}

// ─── Shared state type ────────────────────────────────────────────────────────

export interface ActionState {
  error?: string;
  fieldErrors?: Record<string, string[]>;
  success?: boolean;
}

// ─── Create article ───────────────────────────────────────────────────────────

const articleSchema = z.object({
  title: z.string().trim().min(3, 'Title must be at least 3 characters.'),
  excerpt: z.string().trim().min(10, 'Excerpt must be at least 10 characters.').max(300, 'Excerpt max 300 characters.'),
  body: z.string().trim().min(10, 'Body content is required.'),
  categoryId: z.string().trim().min(1, 'Please select a category.'),
  featuredImageUrl: z.string().trim().default('/uploads/placeholder.png'),
  thumbnailUrl: z.string().trim().default('/uploads/placeholder.png'),
  status: z.enum(['draft', 'published']).default('draft'),
  featured: z.enum(['on', 'off']).default('off'),
});

export async function createArticleAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireEditor();

  // Only Super_Admin can publish directly
  const rawStatus = session.role === 'Super_Admin'
    ? (formData.get('status') ?? 'draft')
    : 'draft';

  const raw = {
    title: formData.get('title'),
    excerpt: formData.get('excerpt'),
    body: formData.get('body'),
    categoryId: formData.get('categoryId'),
    featuredImageUrl: formData.get('featuredImageUrl') || '/uploads/placeholder.png',
    thumbnailUrl: formData.get('thumbnailUrl') || '/uploads/placeholder.png',
    status: rawStatus,
    featured: formData.get('featured') === 'on' ? 'on' : 'off',
  };

  const result = articleSchema.safeParse(raw);
  if (!result.success) {
    return { fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]> };
  }

  try {
    await createArticle({
      ...result.data,
      featured: result.data.featured === 'on',
      status: result.data.status as import('@/generated/prisma').ArticleStatus,
      userId: session.userId,
    });
  } catch {
    return { error: 'Failed to create article. Please try again.' };
  }

  revalidatePath('/admin/news');
  revalidatePath('/news');
  redirect('/admin/news');
}

// ─── Update article ───────────────────────────────────────────────────────────

export async function updateArticleAction(
  articleId: string,
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireEditor();

  const rawStatus = session.role === 'Super_Admin'
    ? (formData.get('status') ?? 'draft')
    : undefined;

  const raw = {
    title: formData.get('title'),
    excerpt: formData.get('excerpt'),
    body: formData.get('body'),
    categoryId: formData.get('categoryId'),
    featuredImageUrl: formData.get('featuredImageUrl') || undefined,
    thumbnailUrl: formData.get('thumbnailUrl') || undefined,
    status: rawStatus ?? 'draft',
    featured: formData.get('featured') === 'on' ? 'on' : 'off',
  };

  const result = articleSchema.safeParse(raw);
  if (!result.success) {
    return { fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]> };
  }

  try {
    await updateArticle(articleId, {
      ...result.data,
      featured: result.data.featured === 'on',
      status: rawStatus !== undefined
        ? result.data.status as import('@/generated/prisma').ArticleStatus
        : undefined,
      userId: session.userId,
    });
  } catch {
    return { error: 'Failed to update article. Please try again.' };
  }

  revalidatePath('/admin/news');
  revalidatePath('/news');
  redirect('/admin/news');
}

// ─── Publish ──────────────────────────────────────────────────────────────────

export async function publishArticleAction(
  articleId: string,
): Promise<ActionState> {
  const session = await requireSuperAdmin();

  try {
    await publishArticle(articleId, session.userId);
  } catch {
    return { error: 'Failed to publish article.' };
  }

  revalidatePath('/admin/news');
  revalidatePath('/news');
  return { success: true };
}

// ─── Unpublish ────────────────────────────────────────────────────────────────

export async function unpublishArticleAction(
  articleId: string,
): Promise<ActionState> {
  const session = await requireSuperAdmin();

  try {
    await unpublishArticle(articleId, session.userId);
  } catch {
    return { error: 'Failed to unpublish article.' };
  }

  revalidatePath('/admin/news');
  revalidatePath('/news');
  return { success: true };
}

// ─── Delete (soft) ────────────────────────────────────────────────────────────

export async function deleteArticleAction(
  articleId: string,
): Promise<ActionState> {
  const session = await requireEditor();

  try {
    await deleteArticle(articleId, session.userId);
  } catch {
    return { error: 'Failed to delete article.' };
  }

  revalidatePath('/admin/news');
  return { success: true };
}
