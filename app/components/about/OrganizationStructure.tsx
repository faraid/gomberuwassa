import { Info } from "lucide-react";

interface OrgNode {
  title: string;
  subtitle?: string;
  isTop?: boolean;
}

interface OrgTier {
  label: string;
  nodes: OrgNode[];
}

/**
 * CMS-ready structure: replace `defaultStructure` with data fetched from your CMS.
 * When a full organogram SVG/image is available, swap the chart markup below
 * for an <Image> inside `.org-image-container`.
 */
const defaultStructure: OrgTier[] = [
  {
    label: "Executive",
    nodes: [
      { title: "General Manager", subtitle: "Chief Executive Officer", isTop: true },
    ],
  },
  {
    label: "Directors",
    nodes: [
      { title: "Director, Technical Services" },
      { title: "Director, Operations" },
      { title: "Director, Finance & Admin" },
      { title: "Director, Planning & M&E" },
    ],
  },
  {
    label: "Department Heads",
    nodes: [
      { title: "Head, Water Supply" },
      { title: "Head, Sanitation" },
      { title: "Head, Community Dev." },
      { title: "Head, HR & Admin" },
      { title: "Head, Procurement" },
      { title: "Head, ICT & Data" },
    ],
  },
  {
    label: "Units",
    nodes: [
      { title: "Field Operations Unit" },
      { title: "Quality Assurance Unit" },
      { title: "Monitoring & Evaluation Unit" },
      { title: "Finance & Accounts Unit" },
    ],
  },
];

interface Props {
  structure?: OrgTier[];
}

export default function OrganizationStructure({ structure = defaultStructure }: Props) {
  return (
    <section className="org-structure">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">LEADERSHIP</p>
          <h2>Organisational Structure</h2>
          <p>
            RUWASA is managed by a professional team structured to ensure efficient
            service delivery across all departments and field operations.
          </p>
        </div>

        {/* Chart — replace contents with organogram image when available */}
        <div className="org-chart" role="img" aria-label="RUWASA organisational structure">
          {structure.map((tier, tierIndex) => (
            <div key={tier.label} className="org-tier-group">
              <p className="org-tier-label">{tier.label}</p>
              <div className="org-tier">
                {tier.nodes.map((node) => (
                  <div
                    key={node.title}
                    className={`org-node-box${node.isTop ? " tier-top" : ""}`}
                  >
                    <strong>{node.title}</strong>
                    {node.subtitle && <em>{node.subtitle}</em>}
                  </div>
                ))}
              </div>
              {tierIndex < structure.length - 1 && (
                <div className="org-connector" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <p className="org-future-note">
          <Info size={16} />
          A full interactive organogram will be integrated in a future update.
        </p>
      </div>
    </section>
  );
}
