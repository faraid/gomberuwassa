import { prisma } from '../prisma';
import { ArticleStatus } from '../../generated/prisma';
import { generateSlug } from '../validation/slugValidator';

export interface ArticleRow {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  status: ArticleStatus;
  featured: boolean;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  categoryId: string;
  category: { id: string; name: string };
  createdById: string;
  updatedById: string;
}

// ─── List ─────────────────────────────────────────────────────────────────────

export async function listArticles(): Promise<ArticleRow[]> {
  return prisma.newsArticle.findMany({
    where: { deletedAt: null },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt: true,
      status: true,
      featured: true,
      publishedAt: true,
      createdAt: true,
      updatedAt: true,
      categoryId: true,
      category: { select: { id: true, name: true } },
      createdById: true,
      updatedById: true,
    },
  });
}

// ─── Get one ──────────────────────────────────────────────────────────────────

export async function getArticleById(id: string) {
  return prisma.newsArticle.findFirst({
    where: { id, deletedAt: null },
    include: { category: true },
  });
}

// ─── Create ───────────────────────────────────────────────────────────────────

export interface CreateArticleData {
  title: string;
  excerpt: string;
  body: string;
  categoryId: string;
  featuredImageUrl: string;
  thumbnailUrl: string;
  featured: boolean;
  status: ArticleStatus;
  userId: string;
}

export async function createArticle(data: CreateArticleData) {
  const baseSlug = generateSlug(data.title);
  // Ensure slug uniqueness by appending a short timestamp suffix if needed
  let slug = baseSlug;
  const existing = await prisma.newsArticle.findUnique({ where: { slug } });
  if (existing) {
    slug = `${baseSlug}-${Date.now().toString(36)}`;
  }

  return prisma.newsArticle.create({
    data: {
      slug,
      title: data.title.trim(),
      excerpt: data.excerpt.trim(),
      body: data.body.trim(),
      categoryId: data.categoryId,
      featuredImageUrl: data.featuredImageUrl,
      thumbnailUrl: data.thumbnailUrl,
      status: data.status,
      featured: data.featured,
      publishedAt: data.status === ArticleStatus.published ? new Date() : null,
      createdById: data.userId,
      updatedById: data.userId,
    },
  });
}

// ─── Update ───────────────────────────────────────────────────────────────────

export interface UpdateArticleData {
  title?: string;
  excerpt?: string;
  body?: string;
  categoryId?: string;
  featuredImageUrl?: string;
  thumbnailUrl?: string;
  featured?: boolean;
  status?: ArticleStatus;
  userId: string;
}

export async function updateArticle(id: string, data: UpdateArticleData) {
  const { userId, status, ...rest } = data;
  return prisma.newsArticle.update({
    where: { id },
    data: {
      ...rest,
      ...(rest.title ? { title: rest.title.trim() } : {}),
      ...(rest.excerpt ? { excerpt: rest.excerpt.trim() } : {}),
      ...(rest.body ? { body: rest.body.trim() } : {}),
      ...(status !== undefined ? {
        status,
        publishedAt: status === ArticleStatus.published ? new Date() : undefined,
      } : {}),
      updatedById: userId,
    },
  });
}

// ─── Publish / Unpublish ──────────────────────────────────────────────────────

export async function publishArticle(id: string, userId: string) {
  return prisma.newsArticle.update({
    where: { id },
    data: {
      status: ArticleStatus.published,
      publishedAt: new Date(),
      updatedById: userId,
    },
  });
}

export async function unpublishArticle(id: string, userId: string) {
  return prisma.newsArticle.update({
    where: { id },
    data: {
      status: ArticleStatus.draft,
      publishedAt: null,
      updatedById: userId,
    },
  });
}

// ─── Soft delete ──────────────────────────────────────────────────────────────

export async function deleteArticle(id: string, userId: string) {
  return prisma.newsArticle.update({
    where: { id },
    data: {
      deletedAt: new Date(),
      status: ArticleStatus.deleted,
      updatedById: userId,
    },
  });
}

// ─── Categories ───────────────────────────────────────────────────────────────

export async function listCategories() {
  return prisma.newsCategory.findMany({ orderBy: { name: 'asc' } });
}

// ─── Public-facing queries (published only) ───────────────────────────────────

export interface PublicArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImageUrl: string;
  thumbnailUrl: string;
  featured: boolean;
  publishedAt: Date;
  category: { name: string };
}

export async function listPublishedArticles(): Promise<PublicArticle[]> {
  return prisma.newsArticle.findMany({
    where: { status: ArticleStatus.published, deletedAt: null },
    orderBy: { publishedAt: 'desc' },
    select: {
      id: true,
      slug: true,
      title: true,
      excerpt: true,
      featuredImageUrl: true,
      thumbnailUrl: true,
      featured: true,
      publishedAt: true,
      category: { select: { name: true } },
    },
  }) as Promise<PublicArticle[]>;
}

export interface NewsStats {
  publishedCount: number;
  categoryCount: number;
  featuredCount: number;
  latestYear: string;
}

export async function getNewsStats(): Promise<NewsStats> {
  const [publishedCount, categoryCount, featuredCount, latest] = await Promise.all([
    prisma.newsArticle.count({ where: { status: ArticleStatus.published, deletedAt: null } }),
    prisma.newsCategory.count(),
    prisma.newsArticle.count({ where: { status: ArticleStatus.published, featured: true, deletedAt: null } }),
    prisma.newsArticle.findFirst({
      where: { status: ArticleStatus.published, deletedAt: null },
      orderBy: { publishedAt: 'desc' },
      select: { publishedAt: true },
    }),
  ]);

  const latestYear = latest?.publishedAt
    ? new Date(latest.publishedAt).getFullYear().toString()
    : new Date().getFullYear().toString();

  return { publishedCount, categoryCount, featuredCount, latestYear };
}

