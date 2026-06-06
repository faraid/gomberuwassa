import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import ProgramsHero from "../components/programs/ProgramsHero";
import ProgramsOverview from "../components/programs/ProgramsOverview";
import ProgramPillars from "../components/programs/ProgramPillars";
import ProgramsList from "../components/programs/ProgramsList";
import ProgramsProcess from "../components/programs/ProgramsProcess";
import ProgramsCTA from "../components/programs/ProgramsCTA";
import { createPageMetadata, siteRoutes } from "../lib/seo";

const route = siteRoutes.find((item) => item.path === "/programs");

export const metadata: Metadata = createPageMetadata({
  title: route?.title ?? "Programs",
  description:
    route?.description ??
    "Explore RUWASA programmes for rural water supply, sanitation and hygiene promotion, capacity building, and community engagement across Gombe State.",
  path: "/programs",
});

export default function ProgramsPage() {
  return (
    <div className="page-shell">
      <SiteHeader activePage="Programs" />
      <main id="main-content">
        <ProgramsHero />
        <ProgramsOverview />
        <ProgramPillars />
        <ProgramsList />
        <ProgramsProcess />
        <ProgramsCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
