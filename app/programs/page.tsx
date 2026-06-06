import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import ProgramsHero from "../components/programs/ProgramsHero";
import ProgramsOverview from "../components/programs/ProgramsOverview";
import ProgramPillars from "../components/programs/ProgramPillars";
import ProgramsList from "../components/programs/ProgramsList";
import ProgramsProcess from "../components/programs/ProgramsProcess";
import ProgramsCTA from "../components/programs/ProgramsCTA";

export const metadata: Metadata = {
  title: "Programs | Gombe State RUWASA",
  description:
    "Explore RUWASA programmes for rural water supply, sanitation and hygiene promotion, capacity building, and community engagement across Gombe State.",
};

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
