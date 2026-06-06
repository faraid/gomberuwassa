import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectStats from "../components/projects/ProjectStats";
import ProjectsClient from "../components/projects/ProjectsClient";
import ProjectMapPlaceholder from "../components/projects/ProjectMapPlaceholder";
import ProjectsStatistics from "../components/projects/ProjectsStatistics";
import ProjectsCTA from "../components/projects/ProjectsCTA";
import { createPageMetadata, siteRoutes } from "../lib/seo";

const route = siteRoutes.find((item) => item.path === "/projects");

export const metadata: Metadata = createPageMetadata({
  title: route?.title ?? "Projects",
  description:
    route?.description ??
    "Explore RUWASA water supply and sanitation infrastructure projects across all 11 LGAs of Gombe State, from solar boreholes to piped water schemes.",
  path: "/projects",
});

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
      <SiteFooter />
    </div>
  );
}
