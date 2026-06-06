import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import GalleryHero from "../components/gallery/GalleryHero";
import GalleryOverview from "../components/gallery/GalleryOverview";
import FeaturedGallery from "../components/gallery/FeaturedGallery";
import GalleryGrid from "../components/gallery/GalleryGrid";
import GalleryCategories from "../components/gallery/GalleryCategories";
import GalleryCTA from "../components/gallery/GalleryCTA";

export const metadata: Metadata = {
  title: "Gallery | Gombe State RUWASA",
  description:
    "View photos from Gombe State RUWASA water supply projects, sanitation activities, stakeholder meetings, and community engagement programmes.",
};

export default function GalleryPage() {
  return (
    <div className="page-shell">
      <SiteHeader activePage="Gallery" />
      <main id="main-content">
        <GalleryHero />
        <GalleryOverview />
        <FeaturedGallery />
        <GalleryGrid />
        <GalleryCategories />
        <GalleryCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
