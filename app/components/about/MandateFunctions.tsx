import {
  Droplet,
  Toilet,
  Users,
  GraduationCap,
  Wrench,
  Handshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface MandateItem {
  icon: LucideIcon;
  tone: "blue" | "green";
  title: string;
  body: string;
}

const defaultMandates: MandateItem[] = [
  {
    icon: Droplet,
    tone: "blue",
    title: "Rural Water Supply",
    body: "Planning, constructing, and maintaining safe and reliable water supply systems for rural communities across all eleven LGAs of Gombe State.",
  },
  {
    icon: Toilet,
    tone: "green",
    title: "Sanitation Services",
    body: "Promoting access to improved sanitation facilities and eliminating open defecation in rural areas through targeted community interventions.",
  },
  {
    icon: Users,
    tone: "blue",
    title: "Community Mobilization",
    body: "Engaging and empowering communities to take ownership of water and sanitation infrastructure, fostering local accountability and sustainability.",
  },
  {
    icon: GraduationCap,
    tone: "green",
    title: "Capacity Building",
    body: "Training water committees, technicians, and local staff to operate, maintain, and manage water facilities for long-term service delivery.",
  },
  {
    icon: Wrench,
    tone: "blue",
    title: "Infrastructure Maintenance",
    body: "Ensuring the functionality and longevity of water supply infrastructure through scheduled maintenance, rehabilitation, and emergency repairs.",
  },
  {
    icon: Handshake,
    tone: "green",
    title: "Stakeholder Coordination",
    body: "Coordinating with Federal, State, and international development partners to mobilize resources and align efforts for greater community impact.",
  },
];

interface Props {
  mandates?: MandateItem[];
}

export default function MandateFunctions({ mandates = defaultMandates }: Props) {
  return (
    <section className="mandate">
      <div className="wrap">
        <div className="section-header">
          <p className="eyebrow">OUR MANDATE</p>
          <h2>Key Functions &amp; Responsibilities</h2>
          <p>
            RUWASA is guided by a clear mandate to transform water and sanitation
            services across rural Gombe State through six core operational functions.
          </p>
        </div>

        <div className="mandate-grid">
          {mandates.map(({ icon: Icon, tone, title, body }) => (
            <article className="mandate-card" key={title}>
              <span className={`round-icon ${tone}`} aria-hidden="true">
                <Icon size={24} strokeWidth={2.25} />
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
