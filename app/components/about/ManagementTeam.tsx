import { User } from 'lucide-react';
import { aboutDefaults } from '@/lib/constants/about';

type TeamData = typeof aboutDefaults.team;

interface Props {
  data?: TeamData;
}

export default function ManagementTeam({ data = aboutDefaults.team }: Props) {
  return (
    <section className="team">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>

        <div className="team-grid">
          {data.members.map((member) => (
            <article className="team-card" key={member.id}>
              <div className="team-photo">
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

