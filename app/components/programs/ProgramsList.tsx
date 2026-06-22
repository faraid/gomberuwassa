import {
  Droplet, GraduationCap, Handshake, Megaphone, ShieldCheck, Toilet, Users, Wrench, FileText,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { PublicProgram } from '@/lib/services/programs.service';

const ICON_MAP: Record<string, LucideIcon> = {
  Droplet, Toilet, GraduationCap, Users,
  ShieldCheck, Handshake, Megaphone, Wrench, FileText,
};

const STATUS_LABEL: Record<string, string> = {
  active: 'Active',
  expanding: 'Expanding',
  planned: 'Planned',
};

interface Props {
  programs: PublicProgram[];
}

export default function ProgramsList({ programs }: Props) {
  return (
    <section className="program-list-section">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>Core RUWASA Programs</h2>
          <p>
            These programme areas organize RUWASA&apos;s field delivery,
            stakeholder coordination, and community support work across Gombe State.
          </p>
        </div>

        <div className="program-list-grid">
          {programs.map((program) => {
            const Icon = ICON_MAP[program.iconName] || FileText;
            return (
              <article className="program-detail-card" key={program.id}>
                <div className="program-detail-head">
                  <span className={`program-detail-icon ${program.tone}`} aria-hidden="true">
                    <Icon size={30} strokeWidth={2.35} />
                  </span>
                  <div>
                    <span className="program-category">{program.category}</span>
                    <h3>{program.title}</h3>
                  </div>
                  <b className={`program-status status-${program.status}`}>{STATUS_LABEL[program.status]}</b>
                </div>
                <p className="program-summary">{program.summary}</p>
                {program.description && (
                  <p className="program-description">{program.description}</p>
                )}
                <dl className="program-meta">
                  {program.beneficiaries && (
                    <div>
                      <dt>Beneficiaries</dt>
                      <dd>{program.beneficiaries}</dd>
                    </div>
                  )}
                  {program.coverage && (
                    <div>
                      <dt>Coverage</dt>
                      <dd>{program.coverage}</dd>
                    </div>
                  )}
                  {program.leadUnit && (
                    <div>
                      <dt>Lead Unit</dt>
                      <dd>{program.leadUnit}</dd>
                    </div>
                  )}
                </dl>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
