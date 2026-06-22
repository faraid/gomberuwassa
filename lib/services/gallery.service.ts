import { Prisma } from '../../generated/prisma';
import { prisma } from '../prisma';

export interface GalleryRow {
  id: string;
  slug: string;
  title: string;
  categoryId: string;
  category: { id: string; name: string };
  caption: string;
  imageUrl: string;
  published: boolean;
  featured: boolean;
  displayOrder: number;
  createdById: string;
  updatedById: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GalleryCategoryOption {
  id: string;
  name: string;
}

export async function listGalleryItems(): Promise<GalleryRow[]> {
  return prisma.galleryItem.findMany({
    where: { deletedAt: null },
    orderBy: [{ displayOrder: 'asc' }, { createdAt: 'desc' }],
    select: {
      id: true,
      slug: true,
      title: true,
      categoryId: true,
      category: { select: { id: true, name: true } },
      caption: true,
      imageUrl: true,
      published: true,
      featured: true,
      displayOrder: true,
      createdById: true,
      updatedById: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export async function listGalleryCategories(): Promise<GalleryCategoryOption[]> {
  return prisma.galleryCategory.findMany({
    orderBy: { name: 'asc' },
    select: { id: true, name: true },
  });
}

export async function getGalleryItemById(id: string) {
  return prisma.galleryItem.findFirst({
    where: { id, deletedAt: null },
    include: { category: true },
  });
}

export interface CreateGalleryItemData {
  slug: string;
  title: string;
  categoryName: string;
  caption: string;
  imageUrl: string;
  published: boolean;
  featured: boolean;
  displayOrder: number;
  userId: string;
}

export async function createGalleryItem(data: CreateGalleryItemData) {
  return prisma.galleryItem.create({
    data: {
      slug: data.slug,
      title: data.title.trim(),
      category: {
        connectOrCreate: {
          where: { name: data.categoryName },
          create: { name: data.categoryName },
        },
      },
      caption: data.caption.trim(),
      description: data.caption.trim(),
      imageUrl: data.imageUrl,
      optimisedUrl: data.imageUrl,
      thumbnailUrl: data.imageUrl,
      published: data.published,
      featured: data.featured,
      displayOrder: data.displayOrder,
      createdById: data.userId,
      updatedById: data.userId,
    },
  });
}

export interface UpdateGalleryItemData {
  slug?: string;
  title?: string;
  categoryName?: string;
  caption?: string;
  imageUrl?: string;
  published?: boolean;
  featured?: boolean;
  displayOrder?: number;
  userId: string;
}

export async function updateGalleryItem(id: string, data: UpdateGalleryItemData) {
  const { userId, categoryName, ...rest } = data;
  const updateData: Record<string, unknown> = { updatedById: userId };

  if (rest.slug !== undefined) updateData.slug = rest.slug;
  if (rest.title !== undefined) updateData.title = rest.title.trim();
  if (rest.caption !== undefined) {
    updateData.caption = rest.caption.trim();
    updateData.description = rest.caption.trim();
  }
  if (rest.imageUrl !== undefined) {
    updateData.imageUrl = rest.imageUrl;
    updateData.optimisedUrl = rest.imageUrl;
    updateData.thumbnailUrl = rest.imageUrl;
  }
  if (rest.published !== undefined) updateData.published = rest.published;
  if (rest.featured !== undefined) updateData.featured = rest.featured;
  if (rest.displayOrder !== undefined) updateData.displayOrder = rest.displayOrder;
  if (categoryName !== undefined) {
    updateData.category = {
      connectOrCreate: {
        where: { name: categoryName },
        create: { name: categoryName },
      },
    };
  }

  return prisma.galleryItem.update({
    where: { id },
    data: updateData,
  });
}

export async function deleteGalleryItem(id: string, userId: string) {
  return prisma.galleryItem.update({
    where: { id },
    data: { deletedAt: new Date(), updatedById: userId },
  });
}

export async function publishGalleryItem(id: string, userId: string) {
  return prisma.galleryItem.update({
    where: { id },
    data: { published: true, updatedById: userId },
  });
}

export async function unpublishGalleryItem(id: string, userId: string) {
  return prisma.galleryItem.update({
    where: { id },
    data: { published: false, updatedById: userId },
  });
}

export interface PublicGalleryItem {
  id: string;
  slug: string;
  title: string;
  category: string;
  caption: string;
  imageUrl: string;
  featured: boolean;
  displayOrder: number;
}

function isMissingGalleryColumnError(error: unknown) {
  return error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2022';
}

async function hasGalleryCmsColumns() {
  const rows = await prisma.$queryRaw<Array<{ column_name: string }>>`
    SELECT column_name::text AS column_name
    FROM information_schema.columns
    WHERE table_schema = 'public'
      AND table_name = 'gallery_items'
      AND column_name IN ('slug', 'caption', 'published')
  `;
  return rows.length === 3;
}

export async function listPublishedGalleryItems(): Promise<PublicGalleryItem[]> {
  try {
    if (!(await hasGalleryCmsColumns())) return [];
    const items = await prisma.galleryItem.findMany({
      where: { deletedAt: null, published: true },
      orderBy: [{ featured: 'desc' }, { displayOrder: 'asc' }, { createdAt: 'desc' }],
      select: {
        id: true,
        slug: true,
        title: true,
        caption: true,
        imageUrl: true,
        featured: true,
        displayOrder: true,
        category: { select: { name: true } },
      },
    });

    return items.map((item) => ({
      id: item.id,
      slug: item.slug,
      title: item.title,
      category: item.category.name,
      caption: item.caption,
      imageUrl: item.imageUrl,
      featured: item.featured,
      displayOrder: item.displayOrder,
    }));
  } catch (error) {
    if (isMissingGalleryColumnError(error)) return [];
    throw error;
  }
}


