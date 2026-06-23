import { prisma } from '../prisma';

// ─── Hero ────────────────────────────────────────────────────────────────────

export interface HomepageHeroData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImageUrl: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText: string;
  secondaryBtnLink: string;
}

export async function getHomepageHero(): Promise<HomepageHeroData> {
  const hero = await prisma.homepageHero.findFirst();
  if (!hero) {
    return {
      id: '',
      title: 'Providing Sustainable Water & Sanitation Services',
      subtitle: 'for Rural Communities in Gombe State',
      description: 'We are committed to improving access to clean water, promoting sanitation and enhancing the quality of life in every rural community.',
      heroImageUrl: '/hero-water-facility.png',
      primaryBtnText: 'Learn More',
      primaryBtnLink: '/about',
      secondaryBtnText: 'Our Projects',
      secondaryBtnLink: '/projects',
    };
  }
  return hero;
}

export async function updateHomepageHero(
  data: Partial<HomepageHeroData>,
): Promise<HomepageHeroData> {
  const existing = await prisma.homepageHero.findFirst();
  if (existing) {
    return prisma.homepageHero.update({
      where: { id: existing.id },
      data: {
        ...(data.title !== undefined && { title: data.title }),
        ...(data.subtitle !== undefined && { subtitle: data.subtitle }),
        ...(data.description !== undefined && { description: data.description }),
        ...(data.heroImageUrl !== undefined && { heroImageUrl: data.heroImageUrl }),
        ...(data.primaryBtnText !== undefined && { primaryBtnText: data.primaryBtnText }),
        ...(data.primaryBtnLink !== undefined && { primaryBtnLink: data.primaryBtnLink }),
        ...(data.secondaryBtnText !== undefined && { secondaryBtnText: data.secondaryBtnText }),
        ...(data.secondaryBtnLink !== undefined && { secondaryBtnLink: data.secondaryBtnLink }),
      },
    });
  }
  return prisma.homepageHero.create({
    data: {
      title: data.title ?? 'Providing Sustainable Water & Sanitation Services',
      subtitle: data.subtitle ?? 'for Rural Communities in Gombe State',
      description: data.description ?? 'We are committed to improving access to clean water, promoting sanitation and enhancing the quality of life in every rural community.',
      heroImageUrl: data.heroImageUrl ?? '/hero-water-facility.png',
      primaryBtnText: data.primaryBtnText ?? 'Learn More',
      primaryBtnLink: data.primaryBtnLink ?? '/about',
      secondaryBtnText: data.secondaryBtnText ?? 'Our Projects',
      secondaryBtnLink: data.secondaryBtnLink ?? '/projects',
    },
  });
}

// ─── Value Cards ─────────────────────────────────────────────────────────────

export interface HomepageValueCardData {
  id: string;
  iconName: string;
  title: string;
  description: string;
  tone: string;
  displayOrder: number;
  active: boolean;
}

export async function getActiveValueCards(): Promise<HomepageValueCardData[]> {
  const cards = await prisma.homepageValueCard.findMany({
    where: { active: true },
    orderBy: { displayOrder: 'asc' },
  });
  if (cards.length > 0) return cards;
  // Defaults
  return [
    { id: 'def-1', iconName: 'Droplet', title: 'Clean Water', description: 'Expanding access to safe and reliable water supply.', tone: 'blue', displayOrder: 0, active: true },
    { id: 'def-2', iconName: 'Users', title: 'Healthy Communities', description: 'Promoting hygiene and sanitation for better health.', tone: 'green', displayOrder: 1, active: true },
    { id: 'def-3', iconName: 'Handshake', title: 'Sustainable Solutions', description: 'Implementing durable and community-driven solutions.', tone: 'blue', displayOrder: 2, active: true },
    { id: 'def-4', iconName: 'TrendingUp', title: 'Accountability', description: 'Transparent management and responsible service.', tone: 'green', displayOrder: 3, active: true },
    { id: 'def-5', iconName: 'Users', title: 'Community Focused', description: 'Working together with communities for lasting impact.', tone: 'blue', displayOrder: 4, active: true },
  ];
}

export async function getAllValueCards(): Promise<HomepageValueCardData[]> {
  return prisma.homepageValueCard.findMany({
    orderBy: { displayOrder: 'asc' },
  });
}

export async function createValueCard(data: {
  iconName: string;
  title: string;
  description: string;
  tone: string;
  displayOrder: number;
  active: boolean;
}) {
  return prisma.homepageValueCard.create({ data: { ...data, tone: data.tone as unknown as "blue" | "green" } });
}

export async function updateValueCard(id: string, data: {
  iconName?: string;
  title?: string;
  description?: string;
  tone?: string;
  displayOrder?: number;
  active?: boolean;
}) {
  const updateData: Record<string, unknown> = {};
  if (data.iconName !== undefined) updateData.iconName = data.iconName;
  if (data.title !== undefined) updateData.title = data.title;
  if (data.description !== undefined) updateData.description = data.description;
  if (data.tone !== undefined) updateData.tone = data.tone;
  if (data.displayOrder !== undefined) updateData.displayOrder = data.displayOrder;
  if (data.active !== undefined) updateData.active = data.active;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return prisma.homepageValueCard.update({ where: { id }, data: updateData as any });
}

export async function deleteValueCard(id: string) {
  return prisma.homepageValueCard.delete({ where: { id } });
}

// ─── Statistics ──────────────────────────────────────────────────────────────

export interface HomepageStatisticData {
  id: string;
  iconName: string;
  value: string;
  label: string;
  displayOrder: number;
  active: boolean;
}

export async function getActiveStatistics(): Promise<HomepageStatisticData[]> {
  const stats = await prisma.homepageStatistic.findMany({
    where: { active: true },
    orderBy: { displayOrder: 'asc' },
  });
  if (stats.length > 0) return stats;
  return [
    { id: 'def-s1', iconName: 'Droplet', value: '312+', label: 'Water Points Constructed', displayOrder: 0, active: true },
    { id: 'def-s2', iconName: 'Users', value: '245,000+', label: 'People with Improved Water Access', displayOrder: 1, active: true },
    { id: 'def-s3', iconName: 'MapPin', value: '114+', label: 'Communities Served', displayOrder: 2, active: true },
    { id: 'def-s4', iconName: 'Handshake', value: '25+', label: 'Partners & Donors', displayOrder: 3, active: true },
    { id: 'def-s5', iconName: 'Award', value: '100%', label: 'Commitment to Service Excellence', displayOrder: 4, active: true },
  ];
}

export async function getAllStatistics(): Promise<HomepageStatisticData[]> {
  return prisma.homepageStatistic.findMany({ orderBy: { displayOrder: 'asc' } });
}

export async function createStatistic(data: {
  iconName: string;
  value: string;
  label: string;
  displayOrder: number;
  active: boolean;
}) {
  return prisma.homepageStatistic.create({ data });
}

export async function updateStatistic(id: string, data: {
  iconName?: string;
  value?: string;
  label?: string;
  displayOrder?: number;
  active?: boolean;
}) {
  const updateData: Record<string, unknown> = {};
  if (data.iconName !== undefined) updateData.iconName = data.iconName;
  if (data.value !== undefined) updateData.value = data.value;
  if (data.label !== undefined) updateData.label = data.label;
  if (data.displayOrder !== undefined) updateData.displayOrder = data.displayOrder;
  if (data.active !== undefined) updateData.active = data.active;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return prisma.homepageStatistic.update({ where: { id }, data: updateData as any });
}

export async function deleteStatistic(id: string) {
  return prisma.homepageStatistic.delete({ where: { id } });
}

// ─── Featured Projects ───────────────────────────────────────────────────────

export interface HomepageFeaturedProjectData {
  id: string;
  projectId: string;
  displayOrder: number;
}

export async function getFeaturedProjectIds(): Promise<string[]> {
  const items = await prisma.homepageFeaturedProject.findMany({
    orderBy: { displayOrder: 'asc' },
    select: { projectId: true },
  });
  return items.map(i => i.projectId);
}

export async function setFeaturedProjects(projectIds: string[]) {
  // Delete existing and recreate
  await prisma.homepageFeaturedProject.deleteMany();
  if (projectIds.length === 0) return;
  await prisma.homepageFeaturedProject.createMany({
    data: projectIds.map((pid, i) => ({
      projectId: pid,
      displayOrder: i,
    })),
  });
}

// ─── Featured News ───────────────────────────────────────────────────────────

export interface HomepageFeaturedNewsData {
  id: string;
  articleId: string;
  displayOrder: number;
}

export async function getFeaturedNewsIds(): Promise<string[]> {
  const items = await prisma.homepageFeaturedNews.findMany({
    orderBy: { displayOrder: 'asc' },
    select: { articleId: true },
  });
  return items.map(i => i.articleId);
}

export async function setFeaturedNews(articleIds: string[]) {
  await prisma.homepageFeaturedNews.deleteMany();
  if (articleIds.length === 0) return;
  await prisma.homepageFeaturedNews.createMany({
    data: articleIds.map((aid, i) => ({
      articleId: aid,
      displayOrder: i,
    })),
  });
}

// ─── Programs ────────────────────────────────────────────────────────────────

export interface HomepageProgramData {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tone: string;
  linkUrl: string;
  displayOrder: number;
  active: boolean;
}

export async function getActivePrograms(): Promise<HomepageProgramData[]> {
  const programs = await prisma.homepageProgram.findMany({
    where: { active: true },
    orderBy: { displayOrder: 'asc' },
  });
  if (programs.length > 0) return programs;
  return [
    { id: 'def-p1', iconName: 'Wrench', title: 'Water Supply', description: 'Expanding access to clean and safe water in rural areas.', tone: 'blue', linkUrl: '/programs', displayOrder: 0, active: true },
    { id: 'def-p2', iconName: 'Toilet', title: 'Sanitation & Hygiene', description: 'Promoting sanitation and hygiene for healthier communities.', tone: 'green', linkUrl: '/programs', displayOrder: 1, active: true },
    { id: 'def-p3', iconName: 'Users', title: 'Capacity Building', description: 'Building local capacity for sustainable water and sanitation services.', tone: 'blue', linkUrl: '/programs', displayOrder: 2, active: true },
    { id: 'def-p4', iconName: 'Sprout', title: 'Community Engagement', description: 'Engaging communities in planning and managing water resources.', tone: 'blue', linkUrl: '/programs', displayOrder: 3, active: true },
  ];
}

export async function getAllPrograms(): Promise<HomepageProgramData[]> {
  return prisma.homepageProgram.findMany({ orderBy: { displayOrder: 'asc' } });
}

export async function createProgram(data: {
  title: string;
  description: string;
  iconName: string;
  tone: string;
  linkUrl: string;
  displayOrder: number;
  active: boolean;
}) {
  return prisma.homepageProgram.create({ data: { ...data, tone: data.tone as unknown as "blue" | "green" } });
}

export async function updateHomepageProgram(id: string, data: {
  title?: string;
  description?: string;
  iconName?: string;
  tone?: string;
  linkUrl?: string;
  displayOrder?: number;
  active?: boolean;
}) {
  const updateData: Record<string, unknown> = {};
  if (data.title !== undefined) updateData.title = data.title;
  if (data.description !== undefined) updateData.description = data.description;
  if (data.iconName !== undefined) updateData.iconName = data.iconName;
  if (data.tone !== undefined) updateData.tone = data.tone;
  if (data.linkUrl !== undefined) updateData.linkUrl = data.linkUrl;
  if (data.displayOrder !== undefined) updateData.displayOrder = data.displayOrder;
  if (data.active !== undefined) updateData.active = data.active;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return prisma.homepageProgram.update({ where: { id }, data: updateData as any });
}

export async function deleteHomepageProgram(id: string) {
  return prisma.homepageProgram.delete({ where: { id } });
}

// ─── Site Settings shortcuts ─────────────────────────────────────────────────

export interface SiteSettingsData {
  logo: string;
  phone: string;
  email: string;
  address: string;
  facebook: string;
  twitter: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  footerText: string;
}

export async function getSiteSettings(): Promise<SiteSettingsData> {
  const keys = await prisma.siteSetting.findMany({
    where: { key: { in: ['phone_primary', 'email_primary', 'office_address', 'facebook_url', 'twitter_url', 'instagram_url', 'linkedin_url', 'youtube_url', 'footer_text', 'logo_url'] } },
  });
  const map = Object.fromEntries(keys.map(s => [s.key, s.value]));
  return {
    logo: map['logo_url'] || '/brand-logo.png',
    phone: map['phone_primary'] || '0813 269 6321',
    email: map['email_primary'] || 'info@ruwasa.gombe.gov.ng',
    address: map['office_address'] || 'RUWASA Headquarters, Gombe, Gombe State, Nigeria',
    facebook: map['facebook_url'] || '',
    twitter: map['twitter_url'] || '',
    instagram: map['instagram_url'] || '',
    linkedin: map['linkedin_url'] || '',
    youtube: map['youtube_url'] || '',
    footerText: map['footer_text'] || 'Gombe State RUWASA. All rights reserved.',
  };
}

export async function updateSiteSettings(data: Record<string, string>) {
  for (const [key, value] of Object.entries(data)) {
    await prisma.siteSetting.upsert({
      where: { key },
      update: { value },
      create: { key, value, updatedById: '' },
    });
  }
}
