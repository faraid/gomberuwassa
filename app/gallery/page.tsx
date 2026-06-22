import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import GalleryHero from '../components/gallery/GalleryHero';
import GalleryOverview from '../components/gallery/GalleryOverview';
import FeaturedGallery from '../components/gallery/FeaturedGallery';
import GalleryGrid from '../components/gallery/GalleryGrid';
import GalleryCategories from '../components/gallery/GalleryCategories';
import GalleryCTA from '../components/gallery/GalleryCTA';
import { listPublishedGalleryItems } from '@/lib/services/gallery.service';

export const metadata: Metadata = {
  title: 'Gallery | Gombe State RUWASA',
  description:
    'View photos from Gombe State RUWASA water supply projects, sanitation activities, stakeholder meetings, and community engagement programmes.',
};

export const revalidate = 60;

export default async function GalleryPage() {
  const items = await listPublishedGalleryItems();
  const categories = Array.from(new Set(items.map((item) => item.category)));
  const featured = items.filter((item) => item.featured).slice(0, 3);
  const featuredSection = featured.length > 0 ? featured : items.slice(0, 3);

  return (
    <div className="page-shell">
      <SiteHeader activePage="Gallery" />
      <main id="main-content">
        <GalleryHero />
        <GalleryOverview />
        <FeaturedGallery items={featuredSection} />
        <GalleryGrid items={items} />
        <GalleryCategories categories={categories} />
        <GalleryCTA />
      </main>
    </div>
  );
}
