import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import ProjectsHero from '../components/projects/ProjectsHero';
import ProjectStats from '../components/projects/ProjectStats';
import ProjectsClient from '../components/projects/ProjectsClient';
import ProjectMapPlaceholder from '../components/projects/ProjectMapPlaceholder';
import ProjectsStatistics from '../components/projects/ProjectsStatistics';
import ProjectsCTA from '../components/projects/ProjectsCTA';
import {
  listPublishedProjects,
  getProjectStats,
  listProjectTypes,
  listLGAs,
  listYears,
} from '@/lib/services/projects.service';

export const metadata: Metadata = {
  title: 'Projects | Gombe State RUWASA',
  description:
    "Explore RUWASA's water supply and sanitation infrastructure projects across all 11 LGAs of Gombe State — from solar boreholes to piped water schemes and sanitation facilities.",
};

// Revalidate every 60 seconds so newly added projects appear quickly
export const revalidate = 60;

export default async function ProjectsPage() {
  const [projects, stats, projectTypes, allLgas, allYears] = await Promise.all([
    listPublishedProjects(),
    getProjectStats(),
    listProjectTypes(),
    listLGAs(),
    listYears(),
  ]);

  return (
    <div className="page-shell">
      <SiteHeader activePage="Projects" />
      <main id="main-content">
        <ProjectsHero />
        <ProjectStats data={{
          total: stats.total,
          completed: stats.completed,
          ongoing: stats.ongoing,
          communities: stats.communities,
        }} />
        <ProjectsClient
          projects={projects}
          allLgas={allLgas}
          allTypes={projectTypes.map((t) => t.name)}
          allYears={allYears}
        />
        <ProjectMapPlaceholder />
        <ProjectsStatistics data={{
          facilitiesConstructed: stats.completed,
          communitiesServed: stats.communities,
          beneficiariesReached: projects.reduce((sum, p) => sum + p.beneficiaries, 0),
          activeProjects: stats.ongoing,
        }} />
        <ProjectsCTA />
      </main>
    </div>
  );
}
