'use server';

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { getSession } from '@/lib/services/auth.service';
import {
  updateHomepageHero,
  createValueCard,
  updateValueCard,
  deleteValueCard,
  createStatistic,
  updateStatistic,
  deleteStatistic,
  setFeaturedProjects,
  setFeaturedNews,
  createProgram,
  updateHomepageProgram,
  deleteHomepageProgram,
  updateSiteSettings,
} from '@/lib/services/homepage.service';

interface ActionState {
  error?: string;
  success?: boolean;
}

async function requireEditor() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');
  if (session.role === 'Viewer') redirect('/admin');
  return session;
}

// ─── Hero ────────────────────────────────────────────────────────────────────

export async function saveHeroAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireEditor();
  try {
    await updateHomepageHero({
      title: formData.get('title') as string,
      subtitle: formData.get('subtitle') as string,
      description: formData.get('description') as string,
      heroImageUrl: formData.get('heroImageUrl') as string || '/hero-water-facility.png',
      primaryBtnText: formData.get('primaryBtnText') as string,
      primaryBtnLink: formData.get('primaryBtnLink') as string,
      secondaryBtnText: formData.get('secondaryBtnText') as string,
      secondaryBtnLink: formData.get('secondaryBtnLink') as string,
    });
  } catch {
    return { error: 'Failed to save hero section.' };
  }
  revalidatePath('/');
  revalidatePath('/admin/homepage');
  return { success: true };
}

// ─── Value Cards ─────────────────────────────────────────────────────────────

export async function saveValueCardAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireEditor();
  const id = formData.get('id') as string;
  const data = {
    iconName: formData.get('iconName') as string,
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    tone: formData.get('tone') as string || 'blue',
    displayOrder: parseInt(formData.get('displayOrder') as string) || 0,
    active: formData.get('active') === 'on',
  };
  try {
    if (id) {
      await updateValueCard(id, data);
    } else {
      await createValueCard(data);
    }
  } catch {
    return { error: 'Failed to save value card.' };
  }
  revalidatePath('/');
  revalidatePath('/admin/homepage');
  return { success: true };
}

export async function deleteValueCardAction(id: string): Promise<ActionState> {
  await requireEditor();
  try { await deleteValueCard(id); } catch { return { error: 'Failed to delete.' }; }
  revalidatePath('/');
  revalidatePath('/admin/homepage');
  return { success: true };
}

// ─── Statistics ──────────────────────────────────────────────────────────────

export async function saveStatisticAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireEditor();
  const id = formData.get('id') as string;
  const data = {
    iconName: formData.get('iconName') as string,
    value: formData.get('value') as string,
    label: formData.get('label') as string,
    displayOrder: parseInt(formData.get('displayOrder') as string) || 0,
    active: formData.get('active') === 'on',
  };
  try {
    if (id) {
      await updateStatistic(id, data);
    } else {
      await createStatistic(data);
    }
  } catch {
    return { error: 'Failed to save statistic.' };
  }
  revalidatePath('/');
  revalidatePath('/admin/homepage');
  return { success: true };
}

export async function deleteStatisticAction(id: string): Promise<ActionState> {
  await requireEditor();
  try { await deleteStatistic(id); } catch { return { error: 'Failed to delete.' }; }
  revalidatePath('/');
  revalidatePath('/admin/homepage');
  return { success: true };
}

// ─── Featured Projects ────────────────────────────────────────────────────────

export async function setFeaturedProjectsAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireEditor();
  const projectIds = formData.getAll('projectIds') as string[];
  try {
    await setFeaturedProjects(projectIds);
  } catch {
    return { error: 'Failed to save featured projects.' };
  }
  revalidatePath('/');
  revalidatePath('/admin/homepage');
  return { success: true };
}

// ─── Featured News ────────────────────────────────────────────────────────────

export async function setFeaturedNewsAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireEditor();
  const articleIds = formData.getAll('articleIds') as string[];
  try {
    await setFeaturedNews(articleIds);
  } catch {
    return { error: 'Failed to save featured news.' };
  }
  revalidatePath('/');
  revalidatePath('/admin/homepage');
  return { success: true };
}

// ─── Programs ────────────────────────────────────────────────────────────────

export async function saveHomepageProgramAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireEditor();
  const id = formData.get('id') as string;
  const data = {
    title: formData.get('title') as string,
    description: formData.get('description') as string,
    iconName: formData.get('iconName') as string,
    tone: formData.get('tone') as string || 'blue',
    linkUrl: formData.get('linkUrl') as string || '/programs',
    displayOrder: parseInt(formData.get('displayOrder') as string) || 0,
    active: formData.get('active') === 'on',
  };
  try {
    if (id) {
      await updateHomepageProgram(id, data);
    } else {
      await createProgram(data);
    }
  } catch {
    return { error: 'Failed to save program.' };
  }
  revalidatePath('/');
  revalidatePath('/admin/homepage');
  return { success: true };
}

export async function deleteHomepageProgramAction(id: string): Promise<ActionState> {
  await requireEditor();
  try { await deleteHomepageProgram(id); } catch { return { error: 'Failed to delete.' }; }
  revalidatePath('/');
  revalidatePath('/admin/homepage');
  return { success: true };
}

// ─── Settings ────────────────────────────────────────────────────────────────

export async function saveSiteSettingsAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireEditor();
  try {
    await updateSiteSettings({
      logo_url: (formData.get('logo_url') as string) || '/brand-logo.png',
      phone_primary: formData.get('phone_primary') as string,
      email_primary: formData.get('email_primary') as string,
      office_address: formData.get('office_address') as string,
      facebook_url: formData.get('facebook_url') as string,
      twitter_url: formData.get('twitter_url') as string,
      instagram_url: formData.get('instagram_url') as string,
      linkedin_url: formData.get('linkedin_url') as string,
      youtube_url: formData.get('youtube_url') as string,
      footer_text: formData.get('footer_text') as string,
    });
  } catch {
    return { error: 'Failed to save settings.' };
  }
  revalidatePath('/');
  revalidatePath('/admin/homepage');
  return { success: true };
}
