export type ProjectStatus = "completed" | "ongoing" | "planned";
export type ProjectType =
  | "Borehole"
  | "Solar Borehole"
  | "Piped Water"
  | "Sanitation"
  | "Overhead Tank";

export interface Project {
  id: string;
  title: string;
  lga: string;
  community: string;
  type: ProjectType;
  status: ProjectStatus;
  year: number;
  progress: number;
  description: string;
  image: string;
  featured?: boolean;
  beneficiaries: number;
}

export const ALL_LGAS = [
  "Gombe",
  "Funakaye",
  "Dukku",
  "Billiri",
  "Kwami",
  "Shomgom",
  "Nafada",
  "Balanga",
  "Akko",
  "Yamaltu/Deba",
  "Kaltungo",
];

export const ALL_TYPES: ProjectType[] = [
  "Borehole",
  "Solar Borehole",
  "Piped Water",
  "Sanitation",
  "Overhead Tank",
];

export const ALL_YEARS = [2024, 2023, 2022, 2021];

export const projects: Project[] = [
  {
    id: "prj-001",
    title: "Solar Borehole Scheme",
    lga: "Dukku",
    community: "Dukku Township",
    type: "Solar Borehole",
    status: "ongoing",
    year: 2024,
    progress: 75,
    description:
      "Construction of solar-powered borehole to provide clean water to over 3,500 residents of Dukku community, eliminating the need for fuel-powered pumping.",
    image: "/project-solar.png",
    featured: true,
    beneficiaries: 3500,
  },
  {
    id: "prj-002",
    title: "Rural Water Supply Scheme",
    lga: "Funakaye",
    community: "Ashaka Community",
    type: "Piped Water",
    status: "ongoing",
    year: 2024,
    progress: 60,
    description:
      "Provision of sustainable piped water supply connecting three rural communities in Funakaye LGA and reducing waterborne disease incidence.",
    image: "/project-rural.png",
    featured: true,
    beneficiaries: 6200,
  },
  {
    id: "prj-003",
    title: "Borehole & Overhead Tank",
    lga: "Billiri",
    community: "Billiri Community",
    type: "Overhead Tank",
    status: "completed",
    year: 2023,
    progress: 100,
    description:
      "Successfully delivered clean water facility including a 50,000 litre overhead tank with gravity-fed reticulation serving the community.",
    image: "/project-tank.png",
    featured: false,
    beneficiaries: 4800,
  },
  {
    id: "prj-004",
    title: "Hand-Pump Borehole Installation",
    lga: "Kwami",
    community: "Kwami Central",
    type: "Borehole",
    status: "completed",
    year: 2023,
    progress: 100,
    description:
      "Installation of five hand-pump boreholes providing clean water access to rural households and reducing daily walking distance for women and children.",
    image: "/project-solar.png",
    beneficiaries: 2200,
  },
  {
    id: "prj-005",
    title: "Community Sanitation Facility",
    lga: "Gombe",
    community: "Nasarawo Quarters",
    type: "Sanitation",
    status: "ongoing",
    year: 2024,
    progress: 45,
    description:
      "Construction of improved sanitation facilities and hygiene promotion programme targeting 1,200 households to eliminate open defecation.",
    image: "/project-rural.png",
    beneficiaries: 5500,
  },
  {
    id: "prj-006",
    title: "Piped Water Extension Scheme",
    lga: "Akko",
    community: "Kumo Township",
    type: "Piped Water",
    status: "planned",
    year: 2024,
    progress: 0,
    description:
      "Planned extension of the existing piped water network to cover 8 additional wards in Akko LGA, reaching previously unserved communities.",
    image: "/project-tank.png",
    beneficiaries: 9000,
  },
  {
    id: "prj-007",
    title: "Rehabilitation of Water Scheme",
    lga: "Nafada",
    community: "Nafada Town",
    type: "Piped Water",
    status: "completed",
    year: 2022,
    progress: 100,
    description:
      "Full rehabilitation and expansion of the Nafada water supply scheme to restore reliable service to 7,000 residents following infrastructure degradation.",
    image: "/project-solar.png",
    beneficiaries: 7000,
  },
  {
    id: "prj-008",
    title: "Solar Mini-Grid Water System",
    lga: "Balanga",
    community: "Balanga Community",
    type: "Solar Borehole",
    status: "ongoing",
    year: 2024,
    progress: 30,
    description:
      "Installation of a solar-powered mini-grid water distribution system serving 12 rural settlements with clean and reliable daily water supply.",
    image: "/project-rural.png",
    beneficiaries: 4100,
  },
  {
    id: "prj-009",
    title: "Overhead Water Tank Construction",
    lga: "Shomgom",
    community: "Shomgom LGA HQ",
    type: "Overhead Tank",
    status: "completed",
    year: 2022,
    progress: 100,
    description:
      "Construction of a 100,000 litre reinforced concrete overhead water tank to serve the LGA headquarters and surrounding communities.",
    image: "/project-tank.png",
    beneficiaries: 3800,
  },
];
