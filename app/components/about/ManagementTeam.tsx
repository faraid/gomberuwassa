import { User } from "lucide-react";

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  /** Absolute path to photo asset — omit to show placeholder until asset is available */
  photo?: string;
}

const defaultTeam: TeamMember[] = [
  {
    id: "gm",
    name: "Engr. Musa Ibrahim",
    position: "General Manager",
    bio: "A seasoned water resources engineer with over 20 years of experience in rural water supply and sanitation management across northern Nigeria.",
  },
  {
    id: "technical",
    name: "Engr. Aisha Bello",
    position: "Director, Technical Services",
    bio: "Expert in water infrastructure development and field operations, leading the Agency's technical projects and borehole construction programmes.",
  },
  {
    id: "operations",
    name: "Mallam Yakubu Danjuma",
    position: "Director, Operations",
    bio: "Experienced operations manager responsible for coordinating field teams, community engagement, and ensuring service continuity across all LGAs.",
  },
  {
    id: "finance",
    name: "Mrs. Fatima Garba",
    position: "Director, Finance & Admin",
    bio: "Certified public accountant with expertise in government financial management, budget planning, and institutional administration.",
  },
];

interface Props {
  team?: TeamMember[];
}

export default function ManagementTeam({ team = defaultTeam }: Props) {
  return (
    <section className="team">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">OUR PEOPLE</p>
          <h2>Management Team</h2>
          <p>
            Our leadership team brings decades of combined expertise in water
            resources engineering, public administration, and community development.
          </p>
        </div>

        <div className="team-grid">
          {team.map((member) => (
            <article className="team-card" key={member.id}>
              <div className="team-photo">
                {/* Swap the placeholder below for <Image> once photo assets are available */}
                <div className="team-photo-placeholder" aria-hidden="true">
                  <User size={64} strokeWidth={1.2} />
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <span className="position">{member.position}</span>
                <p>{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
