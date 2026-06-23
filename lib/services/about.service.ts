import { aboutDefaults, type AboutSettings } from '../constants/about';
import { prisma } from '../prisma';

const ABOUT_CONTENT_KEY = 'about.content';

function mergeAboutSettings(value: unknown): AboutSettings {
  if (!value || typeof value !== 'object') return aboutDefaults;
  const data = value as Partial<AboutSettings>;
  return {
    ...aboutDefaults,
    ...data,
    hero: { ...aboutDefaults.hero, ...data.hero },
    overview: { ...aboutDefaults.overview, ...data.overview },
    visionMission: {
      ...aboutDefaults.visionMission,
      ...data.visionMission,
      vision: { ...aboutDefaults.visionMission.vision, ...data.visionMission?.vision },
      mission: { ...aboutDefaults.visionMission.mission, ...data.visionMission?.mission },
    },
    mandates: { ...aboutDefaults.mandates, ...data.mandates },
    organization: { ...aboutDefaults.organization, ...data.organization },
    team: { ...aboutDefaults.team, ...data.team },
    partners: { ...aboutDefaults.partners, ...data.partners },
    cta: { ...aboutDefaults.cta, ...data.cta },
  };
}

export async function getAboutSettings(): Promise<AboutSettings> {
  const row = await prisma.siteSetting.findUnique({ where: { key: ABOUT_CONTENT_KEY } });
  if (!row?.value) return aboutDefaults;

  try {
    return mergeAboutSettings(JSON.parse(row.value));
  } catch {
    return aboutDefaults;
  }
}

export async function updateAboutSettings(settings: AboutSettings, userId: string) {
  return prisma.siteSetting.upsert({
    where: { key: ABOUT_CONTENT_KEY },
    create: {
      key: ABOUT_CONTENT_KEY,
      value: JSON.stringify(settings),
      updatedById: userId,
    },
    update: {
      value: JSON.stringify(settings),
      updatedById: userId,
    },
  });
}

