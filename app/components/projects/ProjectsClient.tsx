'use client';

import { useState, useMemo } from 'react';
import ProjectFilters from './ProjectFilters';
import FeaturedProjects from './FeaturedProjects';
import ProjectsGrid from './ProjectsGrid';
import type { FilterState } from './ProjectFilters';
import type { PublicProject } from '@/lib/services/projects.service';

interface Props {
  projects: PublicProject[];
  allLgas: string[];
  allTypes: string[];
  allYears: number[];
}

const initialFilters: FilterState = { status: '', lga: '', type: '', year: '' };

export default function ProjectsClient({ projects, allLgas, allTypes, allYears }: Props) {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (filters.status && p.status !== filters.status) return false;
      if (filters.lga && p.lga !== filters.lga) return false;
      if (filters.type && p.projectType.name !== filters.type) return false;
      if (filters.year && p.year !== filters.year) return false;
      return true;
    });
  }, [filters, projects]);

  const isFiltered =
    filters.status !== '' ||
    filters.lga !== '' ||
    filters.type !== '' ||
    filters.year !== '';

  const featured = isFiltered ? [] : projects.filter((p) => p.featured);

  return (
    <>
      <ProjectFilters
        filters={filters}
        onChange={setFilters}
        resultCount={filtered.length}
        allLgas={allLgas}
        allTypes={allTypes}
        allYears={allYears}
      />
      {!isFiltered && <FeaturedProjects projects={featured} />}
      <ProjectsGrid projects={filtered} />
    </>
  );
}
