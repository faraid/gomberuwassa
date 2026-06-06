import {
  Droplet,
  GraduationCap,
  Handshake,
  Megaphone,
  ShieldCheck,
  Toilet,
  Users,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProgramCategory =
  | "Water Supply"
  | "Sanitation & Hygiene"
  | "Capacity Building"
  | "Community Engagement";

export type ProgramStatus = "active" | "expanding" | "planned";

export interface Program {
  id: string;
  title: string;
  category: ProgramCategory;
  status: ProgramStatus;
  icon: LucideIcon;
  tone: "blue" | "green";
  summary: string;
  objectives: string[];
  beneficiaries: string;
  coverage: string;
  leadUnit: string;
}

export const programs: Program[] = [
  {
    id: "water-supply",
    title: "Rural Water Supply",
    category: "Water Supply",
    status: "active",
    icon: Droplet,
    tone: "blue",
    summary:
      "Expanding reliable access to clean and safe water through boreholes, solar-powered systems, reticulation networks, and rehabilitation of existing schemes.",
    objectives: [
      "Construct new water points in underserved rural communities.",
      "Rehabilitate non-functional boreholes and water schemes.",
      "Promote sustainable operation and maintenance systems.",
    ],
    beneficiaries: "Rural households, schools, health facilities",
    coverage: "All 11 LGAs",
    leadUnit: "Water Supply & Engineering",
  },
  {
    id: "sanitation-hygiene",
    title: "Sanitation & Hygiene Promotion",
    category: "Sanitation & Hygiene",
    status: "active",
    icon: Toilet,
    tone: "green",
    summary:
      "Improving sanitation outcomes through hygiene awareness, household sanitation adoption, institutional facilities, and open-defecation-free community support.",
    objectives: [
      "Promote safe sanitation and handwashing practices.",
      "Support communities to eliminate open defecation.",
      "Strengthen hygiene education in schools and public facilities.",
    ],
    beneficiaries: "Households, schools, markets, public institutions",
    coverage: "Priority rural communities",
    leadUnit: "Sanitation & Hygiene",
  },
  {
    id: "capacity-building",
    title: "Capacity Building",
    category: "Capacity Building",
    status: "expanding",
    icon: GraduationCap,
    tone: "blue",
    summary:
      "Building the skills of community structures, water committees, artisans, and local government stakeholders for lasting service delivery.",
    objectives: [
      "Train water user committees and community volunteers.",
      "Support local technicians for maintenance and repairs.",
      "Improve monitoring, reporting, and accountability practices.",
    ],
    beneficiaries: "WASHCOMs, local technicians, LGA WASH staff",
    coverage: "Statewide support programme",
    leadUnit: "Community Development",
  },
  {
    id: "community-engagement",
    title: "Community Engagement",
    category: "Community Engagement",
    status: "active",
    icon: Users,
    tone: "green",
    summary:
      "Ensuring rural communities participate in planning, implementation, monitoring, and protection of water and sanitation investments.",
    objectives: [
      "Facilitate community needs assessment and project prioritization.",
      "Promote local ownership of WASH infrastructure.",
      "Strengthen feedback channels between communities and RUWASA.",
    ],
    beneficiaries: "Traditional leaders, women groups, youth groups",
    coverage: "Project host communities",
    leadUnit: "Social Mobilization",
  },
];

export const programPillars = [
  {
    icon: ShieldCheck,
    tone: "blue" as const,
    title: "Sustainability",
    body: "Programmes are designed around long-term functionality, maintenance, and community ownership.",
  },
  {
    icon: Handshake,
    tone: "green" as const,
    title: "Partnership",
    body: "RUWASA works with communities, LGAs, government agencies, and development partners.",
  },
  {
    icon: Megaphone,
    tone: "blue" as const,
    title: "Awareness",
    body: "Behaviour change communication supports better sanitation, hygiene, and water management.",
  },
  {
    icon: Wrench,
    tone: "green" as const,
    title: "Maintenance",
    body: "Training and repair systems help keep water facilities functional after commissioning.",
  },
];
