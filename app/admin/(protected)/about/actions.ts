'use server';

import { cookies } from 'next/headers';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/services/auth.service';
import { updateAboutSettings } from '@/lib/services/about.service';
import { aboutDefaults, type AboutSettings } from '@/lib/constants/about';

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
  if (session.role === 'Viewer') redirect('/admin/about');
  return session;
}

function parseJsonField<T>(formData: FormData, name: string, fallback: T): T {
  const raw = String(formData.get(name) ?? '').trim();
  if (!raw) return fallback;
  return JSON.parse(raw) as T;
}

export async function saveAboutAction(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const session = await requireEditor();

  try {
    const settings: AboutSettings = {
      hero: {
        title: String(formData.get('hero.title') ?? aboutDefaults.hero.title),
        subtitle: String(formData.get('hero.subtitle') ?? aboutDefaults.hero.subtitle),
        breadcrumbs: aboutDefaults.hero.breadcrumbs,
      },
      overview: {
        eyebrow: String(formData.get('overview.eyebrow') ?? aboutDefaults.overview.eyebrow),
        heading: String(formData.get('overview.heading') ?? aboutDefaults.overview.heading),
        paragraphs: parseJsonField(formData, 'overview.paragraphs', aboutDefaults.overview.paragraphs),
        highlights: parseJsonField(formData, 'overview.highlights', aboutDefaults.overview.highlights),
        image: String(formData.get('overview.image') ?? aboutDefaults.overview.image),
        imageAlt: String(formData.get('overview.imageAlt') ?? aboutDefaults.overview.imageAlt),
      },
      visionMission: {
        vision: {
          heading: String(formData.get('vision.heading') ?? aboutDefaults.visionMission.vision.heading),
          body: String(formData.get('vision.body') ?? aboutDefaults.visionMission.vision.body),
        },
        mission: {
          heading: String(formData.get('mission.heading') ?? aboutDefaults.visionMission.mission.heading),
          body: String(formData.get('mission.body') ?? aboutDefaults.visionMission.mission.body),
        },
      },
      mandates: {
        eyebrow: String(formData.get('mandates.eyebrow') ?? aboutDefaults.mandates.eyebrow),
        heading: String(formData.get('mandates.heading') ?? aboutDefaults.mandates.heading),
        description: String(formData.get('mandates.description') ?? aboutDefaults.mandates.description),
        items: parseJsonField(formData, 'mandates.items', aboutDefaults.mandates.items),
      },
      organization: {
        eyebrow: String(formData.get('organization.eyebrow') ?? aboutDefaults.organization.eyebrow),
        heading: String(formData.get('organization.heading') ?? aboutDefaults.organization.heading),
        description: String(formData.get('organization.description') ?? aboutDefaults.organization.description),
        mediaUrl: String(formData.get('organization.mediaUrl') ?? ''),
        note: String(formData.get('organization.note') ?? aboutDefaults.organization.note),
        structure: parseJsonField(formData, 'organization.structure', aboutDefaults.organization.structure),
      },
      team: {
        eyebrow: String(formData.get('team.eyebrow') ?? aboutDefaults.team.eyebrow),
        heading: String(formData.get('team.heading') ?? aboutDefaults.team.heading),
        description: String(formData.get('team.description') ?? aboutDefaults.team.description),
        members: parseJsonField(formData, 'team.members', aboutDefaults.team.members),
      },
      partners: {
        eyebrow: String(formData.get('partners.eyebrow') ?? aboutDefaults.partners.eyebrow),
        heading: String(formData.get('partners.heading') ?? aboutDefaults.partners.heading),
        description: String(formData.get('partners.description') ?? aboutDefaults.partners.description),
        items: parseJsonField(formData, 'partners.items', aboutDefaults.partners.items),
      },
      cta: {
        eyebrow: String(formData.get('cta.eyebrow') ?? aboutDefaults.cta.eyebrow),
        heading: String(formData.get('cta.heading') ?? aboutDefaults.cta.heading),
        body: String(formData.get('cta.body') ?? aboutDefaults.cta.body),
        primaryLabel: String(formData.get('cta.primaryLabel') ?? aboutDefaults.cta.primaryLabel),
        primaryHref: String(formData.get('cta.primaryHref') ?? aboutDefaults.cta.primaryHref),
        secondaryLabel: String(formData.get('cta.secondaryLabel') ?? aboutDefaults.cta.secondaryLabel),
        secondaryHref: String(formData.get('cta.secondaryHref') ?? aboutDefaults.cta.secondaryHref),
      },
    };

    await updateAboutSettings(settings, session.userId);
  } catch {
    return { error: 'Failed to save About Us content. Check JSON fields and try again.' };
  }

  revalidatePath('/about');
  revalidatePath('/admin/about');
  return { success: true };
}

