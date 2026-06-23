import {
  Droplet,
  Toilet,
  Users,
  GraduationCap,
  Wrench,
  Handshake,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { aboutDefaults } from '@/lib/constants/about';

type MandateData = typeof aboutDefaults.mandates;

const iconMap: Record<string, LucideIcon> = {
  Droplet,
  Toilet,
  Users,
  GraduationCap,
  Wrench,
  Handshake,
};

interface Props {
  data?: MandateData;
}

export default function MandateFunctions({ data = aboutDefaults.mandates }: Props) {
  return (
    <section className="mandate">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>

        <div className="mandate-grid">
          {data.items.map(({ iconName, tone, title, body }) => {
            const Icon = iconMap[iconName] ?? Droplet;

            return (
              <article className="mandate-card" key={title}>
                <span className={`round-icon ${tone}`} aria-hidden="true">
                  <Icon size={24} strokeWidth={2.25} />
                </span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

