import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import AboutHero from "../components/about/AboutHero";
import AgencyOverview from "../components/about/AgencyOverview";
import VisionMission from "../components/about/VisionMission";
import MandateFunctions from "../components/about/MandateFunctions";
import OrganizationStructure from "../components/about/OrganizationStructure";
import ManagementTeam from "../components/about/ManagementTeam";
import PartnersSection from "../components/about/PartnersSection";
import AboutCTA from "../components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About RUWASA | Gombe State Rural Water Supply and Sanitation Agency",
  description:
    "Learn about RUWASA — our vision, mission, mandate, management team, and commitment to delivering clean water and sanitation services across rural Gombe State.",
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <SiteHeader activePage="About Us" />
      <main id="main-content">
        <AboutHero />
        <AgencyOverview />
        <VisionMission />
        <MandateFunctions />
        <OrganizationStructure />
        <ManagementTeam />
        <PartnersSection />
        <AboutCTA />
      </main>
    </div>
  );
}
