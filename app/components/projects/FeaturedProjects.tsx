import Image from "next/image";
import { MapPin } from "lucide-react";
import type { Project } from "../../data/projects";

const STATUS_LABEL: Record<string, string> = {
  completed: "Completed",
  ongoing: "In Progress",
  planned: "Planned",
};

interface Props {
  projects: Project[];
}

export default function FeaturedProjects({ projects }: Props) {
  if (projects.length === 0) return null;

  return (
    <section className="featured-projects">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">FEATURED PROJECTS</p>
          <h2>Highlighted Water Infrastructure Projects</h2>
          <p>
            Key projects delivering clean water and sanitation services to communities
            across Gombe State.
          </p>
        </div>

        <div className="featured-grid">
          {projects.map((project) => (
            <article className="featured-card" key={project.id}>
              <div className="featured-card-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 940px) 100vw, 50vw"
                />
                <span className={`status-badge featured-badge status-${project.status}`}>
                  {STATUS_LABEL[project.status]}
                </span>
              </div>
              <div className="featured-card-body">
                <p className="place">
                  <MapPin size={13} />
                  {project.community}, {project.lga} LGA
                </p>
                <h3>{project.title}</h3>
                <p className="featured-desc">{project.description}</p>
                <div className="featured-footer">
                  <div className="featured-progress">
                    <div className="featured-progress-labels">
                      <span>{project.type}</span>
                      <strong>{project.progress}% Complete</strong>
                    </div>
                    <span className="meter">
                      <i className={`meter-fill-${project.status}`} style={{ width: `${project.progress}%` }} />
                    </span>
                  </div>
                  <div className="featured-meta">
                    <span className="featured-meta-item">
                      <strong>{project.beneficiaries.toLocaleString()}</strong> beneficiaries
                    </span>
                    <span className="featured-meta-item">
                      <strong>{project.year}</strong>
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
