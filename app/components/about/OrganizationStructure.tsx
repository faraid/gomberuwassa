import Image from 'next/image';
import { Info } from 'lucide-react';
import { aboutDefaults } from '@/lib/constants/about';

type OrganizationData = typeof aboutDefaults.organization;
type OrgNode = { title: string; subtitle?: string; isTop?: boolean };

interface Props {
  data?: OrganizationData;
}

export default function OrganizationStructure({ data = aboutDefaults.organization }: Props) {
  const mediaUrl = data.mediaUrl ?? '';
  const isPdf = mediaUrl.toLowerCase().endsWith('.pdf');

  return (
    <section className="org-structure">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2>{data.heading}</h2>
          <p>{data.description}</p>
        </div>

        {mediaUrl && !isPdf ? (
          <div className="org-chart" role="img" aria-label="RUWASA organisational structure">
            <Image src={mediaUrl} alt="RUWASA organisational structure" width={1100} height={620} className="w-full h-auto" />
          </div>
        ) : mediaUrl && isPdf ? (
          <div className="org-chart" role="img" aria-label="RUWASA organisational structure">
            <a className="button button-primary" href={mediaUrl} target="_blank" rel="noreferrer">
              View Organisational Structure PDF
            </a>
          </div>
        ) : (
          <div className="org-chart" role="img" aria-label="RUWASA organisational structure">
            {data.structure.map((tier, tierIndex) => (
              <div key={tier.label} className="org-tier-group">
                <p className="org-tier-label">{tier.label}</p>
                <div className="org-tier">
                  {(tier.nodes as OrgNode[]).map((node) => (
                    <div
                      key={node.title}
                      className={`org-node-box${node.isTop ? ' tier-top' : ''}`}
                    >
                      <strong>{node.title}</strong>
                      {node.subtitle && <em>{node.subtitle}</em>}
                    </div>
                  ))}
                </div>
                {tierIndex < data.structure.length - 1 && (
                  <div className="org-connector" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        )}

        <p className="org-future-note">
          <Info size={16} />
          {data.note}
        </p>
      </div>
    </section>
  );
}



