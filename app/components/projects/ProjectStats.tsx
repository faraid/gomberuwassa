import { projects } from "../../data/projects";

export interface ProjectStatsData {
  total: number;
  completed: number;
  ongoing: number;
  communities: number;
}

function computeStats(): ProjectStatsData {
  return {
    total: projects.length,
    completed: projects.filter((p) => p.status === "completed").length,
    ongoing: projects.filter((p) => p.status === "ongoing").length,
    communities: new Set(projects.map((p) => p.community)).size,
  };
}

interface Props {
  data?: ProjectStatsData;
}

export default function ProjectStats({ data }: Props) {
  const stats = data ?? computeStats();

  const items = [
    { value: stats.total, label: "Total Projects" },
    { value: stats.completed, label: "Completed Projects" },
    { value: stats.ongoing, label: "Ongoing Projects" },
    { value: stats.communities, label: "Communities Served" },
  ];

  return (
    <section className="projects-overview" aria-label="Projects overview">
      <div className="wrap proj-overview-grid">
        {items.map((item) => (
          <div className="proj-overview-stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
