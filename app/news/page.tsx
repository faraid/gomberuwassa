import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import NewsHero from "../components/news/NewsHero";
import NewsOverview from "../components/news/NewsOverview";
import FeaturedNews from "../components/news/FeaturedNews";
import NewsGrid from "../components/news/NewsGrid";
import NewsCategories from "../components/news/NewsCategories";
import NewsCTA from "../components/news/NewsCTA";

export const metadata: Metadata = {
  title: "News & Updates | Gombe State RUWASA",
  description:
    "Read the latest news, project milestones, community updates, sanitation campaigns, and stakeholder announcements from Gombe State RUWASA.",
};

export default function NewsPage() {
  return (
    <div className="page-shell">
      <SiteHeader activePage="News & Updates" />
      <main id="main-content">
        <NewsHero />
        <NewsOverview />
        <FeaturedNews />
        <NewsGrid />
        <NewsCategories />
        <NewsCTA />
      </main>
    </div>
  );
}
