import { prisma } from '../prisma';
import { ProjectStatus } from '../../generated/prisma';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface ProjectRow {
  id: string;
  title: string;
  lga: string;
  community: string;
  typeId: string;
  projectType: { id: string; name: string };
  status: ProjectStatus;
  year: number;
  progress: number;
  beneficiaries: number;
  description: string;
  featured: boolean;
  featuredImageUrl: string;
  thumbnailUrl: string;
  completionDate: Date | null;
  createdById: string;
  updatedById: string;
  createdAt: Date;
  updatedAt: Date;
}

// ─── List (admin) ─────────────────────────────────────────────────────────────

export async function listProjects(): Promise<ProjectRow[]> {
  return prisma.project.findMany({
    where: { deletedAt: null },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      title: true,
      lga: true,
      community: true,
      typeId: true,
      projectType: { select: { id: true, name: true } },
      status: true,
      year: true,
      progress: true,
      beneficiaries: true,
      description: true,
      featured: true,
      featuredImageUrl: true,
      thumbnailUrl: true,
      completionDate: true,
      createdById: true,
      updatedById: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

// ─── Get one ──────────────────────────────────────────────────────────────────

export async function getProjectById(id: string) {
  return prisma.project.findFirst({
    where: { id, deletedAt: null },
    include: { projectType: true },
  });
}

// ─── Create ───────────────────────────────────────────────────────────────────

export interface CreateProjectData {
  title: string;
  lga: string;
  community: string;
  typeId: string;
  status: ProjectStatus;
  year: number;
  progress: number;
  beneficiaries: number;
  description: string;
  featuredImageUrl: string;
  thumbnailUrl: string;
  featured: boolean;
  userId: string;
}

export async function createProject(data: CreateProjectData) {
  return prisma.project.create({
    data: {
      title: data.title.trim(),
      lga: data.lga.trim(),
      community: data.community.trim(),
      typeId: data.typeId,
      status: data.status,
      year: data.year,
      progress: data.progress,
      beneficiaries: data.beneficiaries,
      description: data.description.trim(),
      featuredImageUrl: data.featuredImageUrl,
      thumbnailUrl: data.thumbnailUrl,
      featured: data.featured,
      completionDate: data.status === 'completed' ? new Date() : null,
      createdById: data.userId,
      updatedById: data.userId,
    },
  });
}

// ─── Update ───────────────────────────────────────────────────────────────────

export interface UpdateProjectData {
  title?: string;
  lga?: string;
  community?: string;
  typeId?: string;
  status?: ProjectStatus;
  year?: number;
  progress?: number;
  beneficiaries?: number;
  description?: string;
  featuredImageUrl?: string;
  thumbnailUrl?: string;
  featured?: boolean;
  userId: string;
}

export async function updateProject(id: string, data: UpdateProjectData) {
  const { userId, ...rest } = data;

  const updateData: Record<string, unknown> = { updatedById: userId };

  if (rest.title !== undefined) updateData.title = rest.title.trim();
  if (rest.lga !== undefined) updateData.lga = rest.lga.trim();
  if (rest.community !== undefined) updateData.community = rest.community.trim();
  if (rest.typeId !== undefined) updateData.typeId = rest.typeId;
  if (rest.status !== undefined) {
    updateData.status = rest.status;
    if (rest.status === 'completed') {
      updateData.completionDate = new Date();
    }
  }
  if (rest.year !== undefined) updateData.year = rest.year;
  if (rest.progress !== undefined) updateData.progress = rest.progress;
  if (rest.beneficiaries !== undefined) updateData.beneficiaries = rest.beneficiaries;
  if (rest.description !== undefined) updateData.description = rest.description.trim();
  if (rest.featuredImageUrl !== undefined) updateData.featuredImageUrl = rest.featuredImageUrl;
  if (rest.thumbnailUrl !== undefined) updateData.thumbnailUrl = rest.thumbnailUrl;
  if (rest.featured !== undefined) updateData.featured = rest.featured;

  return prisma.project.update({
    where: { id },
    data: updateData,
  });
}

// ─── Soft delete ──────────────────────────────────────────────────────────────

export async function deleteProject(id: string, userId: string) {
  return prisma.project.update({
    where: { id },
    data: {
      deletedAt: new Date(),
      updatedById: userId,
    },
  });
}

// ─── Project Types ────────────────────────────────────────────────────────────

export async function listProjectTypes() {
  return prisma.projectType.findMany({ orderBy: { name: 'asc' } });
}

// ─── Public-facing queries ────────────────────────────────────────────────────

export interface PublicProject {
  id: string;
  title: string;
  lga: string;
  community: string;
  projectType: { name: string };
  status: ProjectStatus;
  year: number;
  progress: number;
  beneficiaries: number;
  description: string;
  featuredImageUrl: string;
  thumbnailUrl: string;
  featured: boolean;
}

export async function listPublishedProjects(): Promise<PublicProject[]> {
  return prisma.project.findMany({
    where: { deletedAt: null },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      title: true,
      lga: true,
      community: true,
      projectType: { select: { name: true } },
      status: true,
      year: true,
      progress: true,
      beneficiaries: true,
      description: true,
      featuredImageUrl: true,
      thumbnailUrl: true,
      featured: true,
    },
  }) as Promise<PublicProject[]>;
}

// ─── Stats ────────────────────────────────────────────────────────────────────

export interface ProjectStats {
  total: number;
  completed: number;
  ongoing: number;
  planned: number;
  communities: number;
}

export async function getProjectStats(): Promise<ProjectStats> {
  const [total, completed, ongoing, planned] = await Promise.all([
    prisma.project.count({ where: { deletedAt: null } }),
    prisma.project.count({ where: { status: 'completed', deletedAt: null } }),
    prisma.project.count({ where: { status: 'ongoing', deletedAt: null } }),
    prisma.project.count({ where: { status: 'planned', deletedAt: null } }),
  ]);

  const communitiesResult = await prisma.project.findMany({
    where: { deletedAt: null },
    select: { community: true },
    distinct: ['community'],
  });

  return {
    total,
    completed,
    ongoing,
    planned,
    communities: communitiesResult.length,
  };
}

// ─── Distinct values for filters ──────────────────────────────────────────────

export async function listLGAs(): Promise<string[]> {
  const result = await prisma.project.findMany({
    where: { deletedAt: null },
    select: { lga: true },
    distinct: ['lga'],
    orderBy: { lga: 'asc' },
  });
  return result.map((r) => r.lga);
}

export async function listYears(): Promise<number[]> {
  const result = await prisma.project.findMany({
    where: { deletedAt: null },
    select: { year: true },
    distinct: ['year'],
    orderBy: { year: 'desc' },
  });
  return result.map((r) => r.year);
}
