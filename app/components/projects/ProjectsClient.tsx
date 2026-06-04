"use client";

import { useState, useMemo } from "react";
import { projects } from "../../data/projects";
import ProjectFilters from "./ProjectFilters";
import FeaturedProjects from "./FeaturedProjects";
import ProjectsGrid from "./ProjectsGrid";
import type { FilterState } from "./ProjectFilters";

const initialFilters: FilterState = { status: "", lga: "", type: "", year: "" };

export default function ProjectsClient() {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (filters.status && p.status !== filters.status) return false;
      if (filters.lga && p.lga !== filters.lga) return false;
      if (filters.type && p.type !== filters.type) return false;
      if (filters.year && p.year !== filters.year) return false;
      return true;
    });
  }, [filters]);

  const isFiltered =
    filters.status !== "" ||
    filters.lga !== "" ||
    filters.type !== "" ||
    filters.year !== "";

  const featured = isFiltered ? [] : projects.filter((p) => p.featured);

  return (
    <>
      <ProjectFilters
        filters={filters}
        onChange={setFilters}
        resultCount={filtered.length}
      />
      {!isFiltered && <FeaturedProjects projects={featured} />}
      <ProjectsGrid projects={filtered} />
    </>
  );
}
