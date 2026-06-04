import { Eye, Target } from "lucide-react";

export interface VisionMissionData {
  vision: { heading: string; body: string };
  mission: { heading: string; body: string };
}

const defaultData: VisionMissionData = {
  vision: {
    heading: "Our Vision",
    body: "A Gombe State where every rural community enjoys universal, equitable, and sustainable access to safe water and adequate sanitation services — contributing to the health, dignity, and prosperity of all residents.",
  },
  mission: {
    heading: "Our Mission",
    body: "To plan, develop, operate, and maintain rural water supply and sanitation infrastructure through community participation, innovative technology, and strategic partnerships — ensuring safe and reliable water services for all rural communities in Gombe State.",
  },
};

export default function VisionMission({ data = defaultData }: { data?: VisionMissionData }) {
  return (
    <section className="vision-mission">
      <div className="wrap">
        <div className="vm-grid">
          <article className="vm-card">
            <span className="vm-icon blue" aria-hidden="true">
              <Eye size={28} strokeWidth={2.2} />
            </span>
            <h3>{data.vision.heading}</h3>
            <p>{data.vision.body}</p>
          </article>

          <article className="vm-card">
            <span className="vm-icon green" aria-hidden="true">
              <Target size={28} strokeWidth={2.2} />
            </span>
            <h3>{data.mission.heading}</h3>
            <p>{data.mission.body}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
