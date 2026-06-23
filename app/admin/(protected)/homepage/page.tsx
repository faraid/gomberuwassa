import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getSession } from '@/lib/services/auth.service';
import {
  getHomepageHero,
  getAllValueCards,
  getAllStatistics,
  getFeaturedProjectIds,
  getFeaturedNewsIds,
  getAllPrograms,
  getSiteSettings,
} from '@/lib/services/homepage.service';
import { listProjects } from '@/lib/services/projects.service';
import { listArticles } from '@/lib/services/news.service';
import { HomepageHeroEditor } from './HeroEditor';
import { ValueCardsEditor } from './ValueCardsEditor';
import { StatisticsEditor } from './StatisticsEditor';
import { FeaturedProjectsEditor } from './FeaturedProjectsEditor';
import { FeaturedNewsEditor } from './FeaturedNewsEditor';
import { ProgramsEditor } from './ProgramsEditor';
import { SiteSettingsEditor } from './SiteSettingsEditor';

export default async function AdminHomepagePage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');

  const [hero, valueCards, statistics, featuredProjectIds, featuredNewsIds, programs, settings, projects, newsArticles] = await Promise.all([
    getHomepageHero(),
    getAllValueCards(),
    getAllStatistics(),
    getFeaturedProjectIds(),
    getFeaturedNewsIds(),
    getAllPrograms(),
    getSiteSettings(),
    listProjects(),
    listArticles(),
  ]);

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Homepage Editor</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage all content sections displayed on the public homepage.
        </p>
      </div>

      <div className="space-y-10">
        <HomepageHeroEditor hero={hero} />
        <ValueCardsEditor cards={valueCards} />
        <FeaturedProjectsEditor projects={projects} featuredIds={featuredProjectIds} />
        <FeaturedNewsEditor articles={newsArticles} featuredIds={featuredNewsIds} />
        <ProgramsEditor programs={programs} />
        <StatisticsEditor stats={statistics} />
        <SiteSettingsEditor settings={settings} />
      </div>
    </div>
  );
}
