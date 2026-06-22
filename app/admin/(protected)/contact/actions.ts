'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';
import { getSession } from '@/lib/services/auth.service';
import { updateContactSettings, updateContactEnquiryStatus } from '@/lib/services/contact.service';
import { contactDefaults, type ContactSettings } from '@/lib/constants/contact';

export interface ActionState {
  error?: string;
  success?: boolean;
}

async function requireSession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');
  return session;
}

async function requireEditor() {
  const session = await requireSession();
  if (session.role === 'Viewer') redirect('/admin/contact');
  return session;
}

const contactSettingsSchema = z.object(
  Object.fromEntries(
    Object.keys(contactDefaults).map((key) => [key, z.string().trim()]),
  ) as Record<keyof ContactSettings, z.ZodString>,
);

export async function updateContactSettingsAction(
  _prev: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const session = await requireEditor();
  const raw = Object.fromEntries(
    Object.keys(contactDefaults).map((key) => [key, formData.get(key) ?? '']),
  );

  const result = contactSettingsSchema.safeParse(raw);
  if (!result.success) return { error: 'Please check the contact content and try again.' };

  try {
    await updateContactSettings(result.data, session.userId);
  } catch {
    return { error: 'Failed to save contact settings.' };
  }

  revalidatePath('/admin/contact');
  revalidatePath('/contact');
  return { success: true };
}

const statusSchema = z.enum(['New', 'In Progress', 'Closed']);

export async function updateContactEnquiryStatusAction(
  enquiryId: string,
  formData: FormData,
) {
  await requireEditor();
  const status = statusSchema.parse(formData.get('status'));
  await updateContactEnquiryStatus(enquiryId, status);
  revalidatePath('/admin/contact/enquiries');
}

