import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import AboutHero from '../components/about/AboutHero';
import AgencyOverview from '../components/about/AgencyOverview';
import VisionMission from '../components/about/VisionMission';
import MandateFunctions from '../components/about/MandateFunctions';
import OrganizationStructure from '../components/about/OrganizationStructure';
import ManagementTeam from '../components/about/ManagementTeam';
import PartnersSection from '../components/about/PartnersSection';
import AboutCTA from '../components/about/AboutCTA';
import { getAboutSettings } from '@/lib/services/about.service';

export const metadata: Metadata = {
  title: 'About RUWASA | Gombe State Rural Water Supply and Sanitation Agency',
  description:
    'Learn about RUWASA — our vision, mission, mandate, management team, and commitment to delivering clean water and sanitation services across rural Gombe State.',
};

export const revalidate = 60;

export default async function AboutPage() {
  const settings = await getAboutSettings();

  return (
    <div className="page-shell">
      <SiteHeader activePage="About Us" />
      <main id="main-content">
        <AboutHero data={settings.hero} />
        <AgencyOverview data={settings.overview} />
        <VisionMission data={settings.visionMission} />
        <MandateFunctions data={settings.mandates} />
        <OrganizationStructure data={settings.organization} />
        <ManagementTeam data={settings.team} />
        <PartnersSection data={settings.partners} />
        <AboutCTA data={settings.cta} />
      </main>
    </div>
  );
}

