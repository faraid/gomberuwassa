'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';
import { getSession } from '@/lib/services/auth.service';
import {
  createGalleryItem,
  updateGalleryItem,
  deleteGalleryItem,
  publishGalleryItem,
  unpublishGalleryItem,
} from '@/lib/services/gallery.service';

async function requireEditor() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');
  if (session.role === 'Viewer') redirect('/admin/gallery');
  return session;
}

export interface ActionState {
  error?: string;
  fieldErrors?: Record<string, string[]>;
  success?: boolean;
}

function normalizeSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const gallerySchema = z.object({
  title: z.string().trim().min(3, 'Title must be at least 3 characters.'),
  slug: z.string().trim().min(1, 'Slug is required.').transform(normalizeSlug).pipe(
    z.string().min(1, 'Slug is required.').regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Use lowercase letters, numbers, and hyphens.'),
  ),
  category: z.string().trim().min(2, 'Category is required.'),
  imageUrl: z.string().trim().min(1, 'Please upload or provide an image.'),
  caption: z.string().trim().max(400, 'Caption max 400 characters.').default(''),
  published: z.enum(['on', 'off']).default('off'),
  featured: z.enum(['on', 'off']).default('off'),
  displayOrder: z.coerce.number().int().min(0).default(0),
});

export async function createGalleryItemAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireEditor();

  const raw = {
    title: formData.get('title'),
    slug: formData.get('slug'),
    category: formData.get('category'),
    imageUrl: formData.get('imageUrl') || '/uploads/placeholder.png',
    caption: formData.get('caption') || '',
    published: formData.get('published') === 'on' ? 'on' : 'off',
    featured: formData.get('featured') === 'on' ? 'on' : 'off',
    displayOrder: formData.get('displayOrder') || '0',
  };

  const result = gallerySchema.safeParse(raw);
  if (!result.success) {
    return { fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]> };
  }

  try {
    await createGalleryItem({
      slug: result.data.slug,
      title: result.data.title,
      categoryName: result.data.category,
      imageUrl: result.data.imageUrl,
      caption: result.data.caption,
      published: result.data.published === 'on',
      featured: result.data.featured === 'on',
      displayOrder: result.data.displayOrder,
      userId: session.userId,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : '';
    if (message.includes('Unique constraint') && message.includes('slug')) {
      return { error: 'A gallery item with this slug already exists. Choose a different slug.' };
    }
    return { error: 'Failed to create gallery item.' };
  }

  revalidatePath('/admin/gallery');
  revalidatePath('/gallery');
  redirect('/admin/gallery');
}

export async function updateGalleryItemAction(
  itemId: string,
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireEditor();

  const raw = {
    title: formData.get('title'),
    slug: formData.get('slug'),
    category: formData.get('category'),
    imageUrl: formData.get('imageUrl') || '/uploads/placeholder.png',
    caption: formData.get('caption') || '',
    published: formData.get('published') === 'on' ? 'on' : 'off',
    featured: formData.get('featured') === 'on' ? 'on' : 'off',
    displayOrder: formData.get('displayOrder') || '0',
  };

  const result = gallerySchema.safeParse(raw);
  if (!result.success) {
    return { fieldErrors: result.error.flatten().fieldErrors as Record<string, string[]> };
  }

  try {
    await updateGalleryItem(itemId, {
      slug: result.data.slug,
      title: result.data.title,
      categoryName: result.data.category,
      imageUrl: result.data.imageUrl,
      caption: result.data.caption,
      published: result.data.published === 'on',
      featured: result.data.featured === 'on',
      displayOrder: result.data.displayOrder,
      userId: session.userId,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : '';
    if (message.includes('Unique constraint') && message.includes('slug')) {
      return { error: 'A gallery item with this slug already exists. Choose a different slug.' };
    }
    return { error: 'Failed to update gallery item.' };
  }

  revalidatePath('/admin/gallery');
  revalidatePath('/gallery');
  redirect('/admin/gallery');
}

export async function publishGalleryItemAction(itemId: string) {
  const session = await requireEditor();
  try {
    await publishGalleryItem(itemId, session.userId);
  } catch {
    return { error: 'Failed to publish gallery item.' };
  }
  revalidatePath('/admin/gallery');
  revalidatePath('/gallery');
  return { success: true };
}

export async function unpublishGalleryItemAction(itemId: string) {
  const session = await requireEditor();
  try {
    await unpublishGalleryItem(itemId, session.userId);
  } catch {
    return { error: 'Failed to unpublish gallery item.' };
  }
  revalidatePath('/admin/gallery');
  revalidatePath('/gallery');
  return { success: true };
}

export async function deleteGalleryItemAction(itemId: string) {
  const session = await requireEditor();
  try {
    await deleteGalleryItem(itemId, session.userId);
  } catch {
    return { error: 'Failed to delete gallery item.' };
  }
  revalidatePath('/admin/gallery');
  revalidatePath('/gallery');
  return { success: true };
}
