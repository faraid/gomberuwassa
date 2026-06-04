import { Building2 } from "lucide-react";

export interface AgencyOverviewData {
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  highlights: Array<{ value: string; label: string }>;
  /** Path to overview image — swap in when asset is available */
  image?: string;
  imageAlt?: string;
}

const defaultData: AgencyOverviewData = {
  eyebrow: "WHO WE ARE",
  heading: "Dedicated to Delivering Clean Water & Sanitation to All",
  paragraphs: [
    "The Gombe State Rural Water Supply and Sanitation Agency (RUWASA) is a government parastatal established to plan, develop, operate, and maintain rural water supply and sanitation facilities across Gombe State.",
    "RUWASA works in close collaboration with rural communities, local government authorities, development partners, and the Federal Government to ensure that every rural household has access to safe, affordable, and reliable water and sanitation services.",
    "Through community-driven approaches, the Agency empowers local water and sanitation committees to manage and sustain infrastructure, building long-term resilience and ownership in every community we serve.",
  ],
  highlights: [
    { value: "2007", label: "Year Established" },
    { value: "11", label: "LGAs Covered" },
    { value: "500+", label: "Staff Members" },
  ],
  image: "/about-overview.png",
  imageAlt: "RUWASA field engineers at a rural water facility in Gombe State",
};

export default function AgencyOverview({ data = defaultData }: { data?: AgencyOverviewData }) {
  return (
    <section className="agency-overview">
      <div className="wrap overview-grid">
        <div className="overview-copy">
          <p className="eyebrow">{data.eyebrow}</p>
          <h2>{data.heading}</h2>
          {data.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          <div className="overview-highlights">
            {data.highlights.map((h) => (
              <div className="overview-highlight" key={h.label}>
                <strong>{h.value}</strong>
                <span>{h.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Replace the placeholder div with <Image> once the asset is ready */}
        <div className="overview-photo" aria-hidden="true">
          <div className="overview-photo-placeholder">
            <Building2 size={80} strokeWidth={1.1} />
          </div>
        </div>
      </div>
    </section>
  );
}
