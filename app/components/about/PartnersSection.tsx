import { Globe } from 'lucide-react';
import { aboutDefaults } from '@/lib/constants/about';

type PartnersData = typeof aboutDefaults.partners;

interface Props {
  data?: PartnersData;
}

export default function PartnersSection({ data = aboutDefaults.partners }: Props) {
  return (
    <section className="partners">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>

        <div className="partners-grid">
          {data.items.map((partner) => (
            <div className="partner-logo" key={partner.id}>
              <span className="partner-logo-icon" aria-hidden="true">
                <Globe size={18} strokeWidth={2} />
              </span>
              <span>{partner.shortName}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

