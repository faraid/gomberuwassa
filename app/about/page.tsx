import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import AboutHero from "../components/about/AboutHero";
import AgencyOverview from "../components/about/AgencyOverview";
import VisionMission from "../components/about/VisionMission";
import MandateFunctions from "../components/about/MandateFunctions";
import OrganizationStructure from "../components/about/OrganizationStructure";
import ManagementTeam from "../components/about/ManagementTeam";
import PartnersSection from "../components/about/PartnersSection";
import AboutCTA from "../components/about/AboutCTA";
import { createPageMetadata, siteRoutes } from "../lib/seo";

const route = siteRoutes.find((item) => item.path === "/about");

export const metadata: Metadata = createPageMetadata({
  title: route?.title ?? "About RUWASA",
  description:
    route?.description ??
    "Learn about RUWASA, including the agency vision, mission, mandate, management team, and commitment to clean water and sanitation in rural Gombe State.",
  path: "/about",
});

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
      <SiteFooter />
    </div>
  );
}
