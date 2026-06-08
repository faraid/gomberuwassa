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
      status: ArticleStatus.draft,
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
  userId: string;
}

export async function updateArticle(id: string, data: UpdateArticleData) {
  const { userId, ...rest } = data;
  return prisma.newsArticle.update({
    where: { id },
    data: {
      ...rest,
      ...(rest.title ? { title: rest.title.trim() } : {}),
      ...(rest.excerpt ? { excerpt: rest.excerpt.trim() } : {}),
      ...(rest.body ? { body: rest.body.trim() } : {}),
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
