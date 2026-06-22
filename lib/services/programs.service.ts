import { prisma } from '../prisma';
import { ProgramStatus, Tone } from '../../generated/prisma';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ProgramRow {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: ProgramStatus;
  iconName: string;
  tone: Tone;
  summary: string;
  description: string;
  beneficiaries: string;
  coverage: string;
  leadUnit: string;
  featuredImageUrl: string | null;
  bannerImageUrl: string | null;
  displayOrder: number;
  published: boolean;
  featured: boolean;
  createdById: string;
  updatedById: string;
  createdAt: Date;
  updatedAt: Date;
}

// ─── List (admin) ─────────────────────────────────────────────────────────────

export async function listPrograms(): Promise<ProgramRow[]> {
  return prisma.program.findMany({
    where: { deletedAt: null },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      slug: true,
      title: true,
      category: true,
      status: true,
      iconName: true,
      tone: true,
      summary: true,
      description: true,
      beneficiaries: true,
      coverage: true,
      leadUnit: true,
      featuredImageUrl: true,
      bannerImageUrl: true,
      displayOrder: true,
      published: true,
      featured: true,
      createdById: true,
      updatedById: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

// ─── Get one ──────────────────────────────────────────────────────────────────

export async function getProgramBySlug(slug: string) {
  return prisma.program.findFirst({
    where: { slug, deletedAt: null },
  });
}

export async function getProgramById(id: string) {
  return prisma.program.findFirst({
    where: { id, deletedAt: null },
  });
}

// ─── Create ───────────────────────────────────────────────────────────────────

export interface CreateProgramData {
  slug: string;
  title: string;
  category: string;
  status: ProgramStatus;
  iconName: string;
  tone: Tone;
  summary: string;
  description: string;
  beneficiaries: string;
  coverage: string;
  leadUnit: string;
  featuredImageUrl: string;
  bannerImageUrl: string;
  displayOrder: number;
  published: boolean;
  featured: boolean;
  userId: string;
}

export async function createProgram(data: CreateProgramData) {
  return prisma.program.create({
    data: {
      slug: data.slug,
      title: data.title.trim(),
      category: data.category,
      status: data.status,
      iconName: data.iconName,
      tone: data.tone,
      summary: data.summary.trim(),
      description: data.description.trim(),
      objectives: [],
      beneficiaries: data.beneficiaries,
      coverage: data.coverage,
      leadUnit: data.leadUnit,
      featuredImageUrl: data.featuredImageUrl,
      bannerImageUrl: data.bannerImageUrl,
      displayOrder: data.displayOrder,
      published: data.published,
      featured: data.featured,
      createdById: data.userId,
      updatedById: data.userId,
    },
  });
}

// ─── Update ───────────────────────────────────────────────────────────────────

export interface UpdateProgramData {
  slug?: string;
  title?: string;
  category?: string;
  status?: ProgramStatus;
  iconName?: string;
  tone?: Tone;
  summary?: string;
  description?: string;
  beneficiaries?: string;
  coverage?: string;
  leadUnit?: string;
  featuredImageUrl?: string;
  bannerImageUrl?: string;
  displayOrder?: number;
  published?: boolean;
  featured?: boolean;
  userId: string;
}

export async function updateProgram(id: string, data: UpdateProgramData) {
  const { userId, ...rest } = data;
  const updateData: Record<string, unknown> = { updatedById: userId };

  if (rest.slug !== undefined) updateData.slug = rest.slug;
  if (rest.title !== undefined) updateData.title = rest.title.trim();
  if (rest.category !== undefined) updateData.category = rest.category;
  if (rest.status !== undefined) updateData.status = rest.status;
  if (rest.iconName !== undefined) updateData.iconName = rest.iconName;
  if (rest.tone !== undefined) updateData.tone = rest.tone;
  if (rest.summary !== undefined) updateData.summary = rest.summary.trim();
  if (rest.description !== undefined) updateData.description = rest.description.trim();
  if (rest.beneficiaries !== undefined) updateData.beneficiaries = rest.beneficiaries;
  if (rest.coverage !== undefined) updateData.coverage = rest.coverage;
  if (rest.leadUnit !== undefined) updateData.leadUnit = rest.leadUnit;
  if (rest.featuredImageUrl !== undefined) updateData.featuredImageUrl = rest.featuredImageUrl;
  if (rest.bannerImageUrl !== undefined) updateData.bannerImageUrl = rest.bannerImageUrl;
  if (rest.displayOrder !== undefined) updateData.displayOrder = rest.displayOrder;
  if (rest.published !== undefined) updateData.published = rest.published;
  if (rest.featured !== undefined) updateData.featured = rest.featured;

  return prisma.program.update({
    where: { id },
    data: updateData,
  });
}

// ─── Soft delete ──────────────────────────────────────────────────────────────

export async function deleteProgram(id: string, userId: string) {
  return prisma.program.update({
    where: { id },
    data: { deletedAt: new Date(), updatedById: userId },
  });
}

// ─── Publish / Unpublish ──────────────────────────────────────────────────────

export async function publishProgram(id: string, userId: string) {
  return prisma.program.update({
    where: { id },
    data: { published: true, updatedById: userId },
  });
}

export async function unpublishProgram(id: string, userId: string) {
  return prisma.program.update({
    where: { id },
    data: { published: false, updatedById: userId },
  });
}

// ─── Public-facing ────────────────────────────────────────────────────────────

export interface PublicProgram {
  id: string;
  slug: string;
  title: string;
  category: string;
  status: ProgramStatus;
  iconName: string;
  tone: Tone;
  summary: string;
  description: string;
  beneficiaries: string;
  coverage: string;
  leadUnit: string;
  featuredImageUrl: string | null;
  bannerImageUrl: string | null;
  displayOrder: number;
  featured: boolean;
}

export async function listPublishedPrograms(): Promise<PublicProgram[]> {
  return prisma.program.findMany({
    where: { deletedAt: null, published: true },
    orderBy: [{ displayOrder: 'asc' }, { createdAt: 'desc' }],
    select: {
      id: true,
      slug: true,
      title: true,
      category: true,
      status: true,
      iconName: true,
      tone: true,
      summary: true,
      description: true,
      beneficiaries: true,
      coverage: true,
      leadUnit: true,
      featuredImageUrl: true,
      bannerImageUrl: true,
      displayOrder: true,
      featured: true,
    },
  });
}
