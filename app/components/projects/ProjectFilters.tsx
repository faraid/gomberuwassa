'use client';

export interface FilterState {
  status: string;
  lga: string;
  type: string;
  year: number | '';
}

interface Props {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  resultCount: number;
  allLgas: string[];
  allTypes: string[];
  allYears: number[];
}

export default function ProjectFilters({ filters, onChange, resultCount, allLgas, allTypes, allYears }: Props) {
  function update<K extends keyof FilterState>(key: K, value: FilterState[K]) {
    onChange({ ...filters, [key]: value });
  }

  function reset() {
    onChange({ status: '', lga: '', type: '', year: '' });
  }

  const hasActiveFilter =
    filters.status !== '' ||
    filters.lga !== '' ||
    filters.type !== '' ||
    filters.year !== '';

  return (
    <section className="projects-filter" aria-label="Filter projects">
      <div className="wrap filter-row">
        <span className="filter-label">Filter by:</span>

        <select
          className="filter-select"
          value={filters.status}
          onChange={(e) => update('status', e.target.value)}
          aria-label="Filter by status"
        >
          <option value="">All Statuses</option>
          <option value="ongoing">Ongoing</option>
          <option value="completed">Completed</option>
          <option value="planned">Planned</option>
        </select>

        <select
          className="filter-select"
          value={filters.lga}
          onChange={(e) => update('lga', e.target.value)}
          aria-label="Filter by LGA"
        >
          <option value="">All LGAs</option>
          {allLgas.map((lga) => (
            <option key={lga} value={lga}>{lga}</option>
          ))}
        </select>

        <select
          className="filter-select"
          value={filters.type}
          onChange={(e) => update('type', e.target.value)}
          aria-label="Filter by project type"
        >
          <option value="">All Types</option>
          {allTypes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <select
          className="filter-select"
          value={filters.year}
          onChange={(e) =>
            update('year', e.target.value === '' ? '' : Number(e.target.value))
          }
          aria-label="Filter by year"
        >
          <option value="">All Years</option>
          {allYears.map((y) => (
            <option key={y} value={y}>{y}</option>
          ))}
        </select>

        <span className="filter-count" aria-live="polite">
          {resultCount} project{resultCount !== 1 ? 's' : ''}
        </span>

        {hasActiveFilter && (
          <button className="filter-reset-btn" onClick={reset} type="button">
            Clear filters ×
          </button>
        )}
      </div>
    </section>
  );
}
