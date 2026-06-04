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

export default function ProjectsGrid({ projects }: Props) {
  if (projects.length === 0) {
    return (
      <section className="proj-grid-section">
        <div className="wrap">
          <div className="section-header">
            <p className="eyebrow">ALL PROJECTS</p>
            <h2>Project Portfolio</h2>
          </div>
          <div className="proj-empty">
            <p>No projects match your current filters. <button className="proj-empty-link" type="button">Clear filters</button> to see all projects.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="proj-grid-section">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">ALL PROJECTS</p>
          <h2>Project Portfolio</h2>
          <p>
            A complete overview of RUWASA water and sanitation projects across Gombe State.
          </p>
        </div>

        <div className="proj-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="card-image">
                <Image src={project.image} fill sizes="320px" alt={project.title} />
                <b className={project.status === "completed" ? "done" : project.status === "planned" ? "planned-badge" : ""}>
                  {STATUS_LABEL[project.status]}
                </b>
              </div>
              <div className="card-body">
                <p className="place">
                  <MapPin size={13} />
                  {project.community}, {project.lga}
                </p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <strong>{project.progress}% Complete</strong>
                <span className="meter">
                  <i style={{ width: `${project.progress}%` }} />
                </span>
                <a className="button button-primary proj-card-btn" href={`/projects/${project.id}`}>
                  View Details →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
