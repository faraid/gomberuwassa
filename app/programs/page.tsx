import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import ProgramsHero from '../components/programs/ProgramsHero';
import ProgramsOverview from '../components/programs/ProgramsOverview';
import ProgramPillars from '../components/programs/ProgramPillars';
import ProgramsList from '../components/programs/ProgramsList';
import ProgramsProcess from '../components/programs/ProgramsProcess';
import ProgramsCTA from '../components/programs/ProgramsCTA';
import { listPublishedPrograms } from '@/lib/services/programs.service';

export const metadata: Metadata = {
  title: 'Programs | Gombe State RUWASA',
  description:
    "Explore RUWASA programmes for rural water supply, sanitation and hygiene promotion, capacity building, and community engagement across Gombe State.",
};

export const revalidate = 60;

export default async function ProgramsPage() {
  const programs = await listPublishedPrograms();

  return (
    <div className="page-shell">
      <SiteHeader activePage="Programs" />
      <main id="main-content">
        <ProgramsHero />
        <ProgramsOverview count={programs.length} />
        <ProgramPillars />
        <ProgramsList programs={programs} />
        <ProgramsProcess />
        <ProgramsCTA />
      </main>
    </div>
  );
}
