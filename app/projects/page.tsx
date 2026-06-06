import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectStats from "../components/projects/ProjectStats";
import ProjectsClient from "../components/projects/ProjectsClient";
import ProjectMapPlaceholder from "../components/projects/ProjectMapPlaceholder";
import ProjectsStatistics from "../components/projects/ProjectsStatistics";
import ProjectsCTA from "../components/projects/ProjectsCTA";

export const metadata: Metadata = {
  title: "Projects | Gombe State RUWASA",
  description:
    "Explore RUWASA's water supply and sanitation infrastructure projects across all 11 LGAs of Gombe State — from solar boreholes to piped water schemes and sanitation facilities.",
};

export default function ProjectsPage() {
  return (
    <div className="page-shell">
      <SiteHeader activePage="Projects" />
      <main id="main-content">
        <ProjectsHero />
        <ProjectStats />
        <ProjectsClient />
        <ProjectMapPlaceholder />
        <ProjectsStatistics />
        <ProjectsCTA />
      </main>
    </div>
  );
}
