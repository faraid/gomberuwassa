-- Gallery CMS fields
ALTER TABLE "gallery_items" ADD COLUMN "slug" TEXT;
UPDATE "gallery_items" SET "slug" = "id" WHERE "slug" IS NULL;
ALTER TABLE "gallery_items" ALTER COLUMN "slug" SET NOT NULL;

ALTER TABLE "gallery_items" ADD COLUMN "caption" TEXT NOT NULL DEFAULT '';
ALTER TABLE "gallery_items" ADD COLUMN "published" BOOLEAN NOT NULL DEFAULT false;

ALTER TABLE "gallery_items" ALTER COLUMN "location" SET DEFAULT '';
ALTER TABLE "gallery_items" ALTER COLUMN "year" SET DEFAULT 2024;
ALTER TABLE "gallery_items" ALTER COLUMN "description" SET DEFAULT '';
ALTER TABLE "gallery_items" ALTER COLUMN "imageUrl" SET DEFAULT '/uploads/placeholder.png';
ALTER TABLE "gallery_items" ALTER COLUMN "optimisedUrl" SET DEFAULT '';
ALTER TABLE "gallery_items" ALTER COLUMN "thumbnailUrl" SET DEFAULT '';
ALTER TABLE "gallery_items" ALTER COLUMN "displayOrder" SET DEFAULT 0;

CREATE UNIQUE INDEX "gallery_items_slug_key" ON "gallery_items"("slug");
