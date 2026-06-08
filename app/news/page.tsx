import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import NewsHero from '../components/news/NewsHero';
import NewsOverview from '../components/news/NewsOverview';
import FeaturedNews from '../components/news/FeaturedNews';
import NewsGrid from '../components/news/NewsGrid';
import NewsCategories from '../components/news/NewsCategories';
import NewsCTA from '../components/news/NewsCTA';
import {
  listPublishedArticles,
  getNewsStats,
  listCategories,
} from '@/lib/services/news.service';

export const metadata: Metadata = {
  title: 'News & Updates | Gombe State RUWASA',
  description:
    'Read the latest news, project milestones, community updates, sanitation campaigns, and stakeholder announcements from Gombe State RUWASA.',
};

// Revalidate every 60 seconds so newly published articles appear quickly
export const revalidate = 60;

export default async function NewsPage() {
  const [articles, stats, categories] = await Promise.all([
    listPublishedArticles(),
    getNewsStats(),
    listCategories(),
  ]);

  // Featured articles first (up to 3), then fill with latest published if not enough
  const featured = articles.filter((a) => a.featured).slice(0, 3);
  const featuredSection =
    featured.length > 0
      ? featured
      : articles.slice(0, 3);

  return (
    <div className="page-shell">
      <SiteHeader activePage="News & Updates" />
      <main id="main-content">
        <NewsHero />
        <NewsOverview stats={stats} />
        <FeaturedNews articles={featuredSection} />
        <NewsGrid articles={articles} />
        <NewsCategories categories={categories} />
        <NewsCTA />
      </main>
    </div>
  );
}
