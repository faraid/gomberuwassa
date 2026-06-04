import { Droplet, MapPin, Users, Wrench } from "lucide-react";
import { projects } from "../../data/projects";

export interface ProjectsStatisticsData {
  facilitiesConstructed: number;
  communitiesServed: number;
  beneficiariesReached: number;
  activeProjects: number;
}

function computeStats(): ProjectsStatisticsData {
  const completed = projects.filter((p) => p.status === "completed");
  const active = projects.filter((p) => p.status === "ongoing");
  const totalBeneficiaries = completed.reduce((sum, p) => sum + p.beneficiaries, 0);
  const communities = new Set(projects.map((p) => p.community)).size;

  return {
    facilitiesConstructed: completed.length,
    communitiesServed: communities,
    beneficiariesReached: totalBeneficiaries,
    activeProjects: active.length,
  };
}

interface Props {
  data?: ProjectsStatisticsData;
}

export default function ProjectsStatistics({ data }: Props) {
  const stats = data ?? computeStats();

  const items = [
    {
      icon: Wrench,
      value: `${stats.facilitiesConstructed}+`,
      label: "Water Facilities Constructed",
    },
    {
      icon: MapPin,
      value: `${stats.communitiesServed}+`,
      label: "Communities Served",
    },
    {
      icon: Users,
      value: `${(stats.beneficiariesReached / 1000).toFixed(0)}k+`,
      label: "Beneficiaries Reached",
    },
    {
      icon: Droplet,
      value: `${stats.activeProjects}`,
      label: "Active Projects",
    },
  ];

  return (
    <section className="proj-statistics">
      <div className="wrap">
        <div className="proj-statistics-header">
          <p className="eyebrow proj-statistics-eyebrow">IMPACT IN NUMBERS</p>
          <h2>Measuring Our Progress</h2>
        </div>
        <div className="proj-stat-grid">
          {items.map(({ icon: Icon, value, label }) => (
            <article className="proj-stat-item" key={label}>
              <span className="proj-stat-icon" aria-hidden="true">
                <Icon size={44} strokeWidth={2} />
              </span>
              <div>
                <strong>{value}</strong>
                <p>{label}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
