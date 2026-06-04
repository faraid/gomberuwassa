import { Globe } from "lucide-react";

export interface Partner {
  id: string;
  name: string;
  shortName: string;
  category: string;
  /** Path to logo image — omit to show branded placeholder until asset is available */
  logo?: string;
}

const defaultPartners: Partner[] = [
  {
    id: "world-bank",
    name: "World Bank",
    shortName: "World Bank",
    category: "Development Finance",
  },
  {
    id: "unicef",
    name: "United Nations Children's Fund",
    shortName: "UNICEF",
    category: "UN Agency",
  },
  {
    id: "federal-ministry",
    name: "Federal Ministry of Water Resources",
    shortName: "Fed. Min. Water",
    category: "Federal Government",
  },
  {
    id: "gombe-state",
    name: "Gombe State Government",
    shortName: "Gombe State Govt.",
    category: "State Government",
  },
  {
    id: "usaid",
    name: "United States Agency for International Development",
    shortName: "USAID",
    category: "Development Partner",
  },
];

interface Props {
  partners?: Partner[];
}

export default function PartnersSection({ partners = defaultPartners }: Props) {
  return (
    <section className="partners">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">WORKING TOGETHER</p>
          <h2>Our Partners &amp; Stakeholders</h2>
          <p>
            RUWASA collaborates with international organisations, government agencies,
            and development partners to maximise impact for rural communities.
          </p>
        </div>

        <div className="partners-grid">
          {partners.map((partner) => (
            <div className="partner-logo" key={partner.id}>
              {/* Replace the icon below with <Image> once logo assets are available */}
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
