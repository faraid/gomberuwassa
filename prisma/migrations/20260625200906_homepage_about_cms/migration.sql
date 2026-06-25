/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `programs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `programs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "contact_submissions" ALTER COLUMN "updatedAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "programs" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "description" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "featured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "featuredImageUrl" TEXT,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "slug" TEXT NOT NULL,
ALTER COLUMN "displayOrder" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "homepage_hero" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT 'Providing Sustainable Water & Sanitation Services',
    "subtitle" TEXT NOT NULL DEFAULT 'for Rural Communities in Gombe State',
    "description" TEXT NOT NULL DEFAULT 'We are committed to improving access to clean water, promoting sanitation and enhancing the quality of life in every rural community.',
    "heroImageUrl" TEXT NOT NULL DEFAULT '/hero-water-facility.png',
    "primaryBtnText" TEXT NOT NULL DEFAULT 'Learn More',
    "primaryBtnLink" TEXT NOT NULL DEFAULT '/about',
    "secondaryBtnText" TEXT NOT NULL DEFAULT 'Our Projects',
    "secondaryBtnLink" TEXT NOT NULL DEFAULT '/projects',
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "homepage_hero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "homepage_value_cards" (
    "id" TEXT NOT NULL,
    "iconName" TEXT NOT NULL DEFAULT 'Droplet',
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tone" "Tone" NOT NULL DEFAULT 'blue',
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "homepage_value_cards_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "homepage_statistics" (
    "id" TEXT NOT NULL,
    "iconName" TEXT NOT NULL DEFAULT 'Droplet',
    "value" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "homepage_statistics_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "homepage_featured_projects" (
    "id" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "homepage_featured_projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "homepage_featured_news" (
    "id" TEXT NOT NULL,
    "articleId" TEXT NOT NULL,
    "displayOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "homepage_featured_news_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "homepage_programs" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "iconName" TEXT NOT NULL DEFAULT 'Wrench',
    "tone" "Tone" NOT NULL DEFAULT 'blue',
    "linkUrl" TEXT NOT NULL DEFAULT '/programs',
    "displayOrder" INTEGER NOT NULL DEFAULT 0,
    "active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "homepage_programs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "homepage_featured_projects_projectId_key" ON "homepage_featured_projects"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "homepage_featured_news_articleId_key" ON "homepage_featured_news"("articleId");

-- CreateIndex
CREATE UNIQUE INDEX "programs_slug_key" ON "programs"("slug");

-- AddForeignKey
ALTER TABLE "homepage_featured_projects" ADD CONSTRAINT "homepage_featured_projects_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "homepage_featured_news" ADD CONSTRAINT "homepage_featured_news_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "news_articles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
