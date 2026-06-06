export type GalleryCategory =
  | "Water Projects"
  | "Community Engagement"
  | "Sanitation & Hygiene"
  | "Stakeholder Meetings";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  location: string;
  date: string;
  image: string;
  description: string;
  featured?: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "gal-001",
    title: "Solar Borehole Facility",
    category: "Water Projects",
    location: "Dukku LGA",
    date: "2024",
    image: "/project-solar.png",
    description:
      "A solar-powered borehole facility improving access to clean water for rural households.",
    featured: true,
  },
  {
    id: "gal-002",
    title: "Community Water Supply Scheme",
    category: "Community Engagement",
    location: "Funakaye LGA",
    date: "2024",
    image: "/project-rural.png",
    description:
      "Community members participating in water supply activities and facility management.",
    featured: true,
  },
  {
    id: "gal-003",
    title: "Borehole and Overhead Tank",
    category: "Water Projects",
    location: "Billiri LGA",
    date: "2023",
    image: "/project-tank.png",
    description:
      "Completed water infrastructure supporting reliable clean water distribution.",
    featured: true,
  },
  {
    id: "gal-004",
    title: "Stakeholders Coordination Meeting",
    category: "Stakeholder Meetings",
    location: "Gombe State",
    date: "2024",
    image: "/news-meeting.png",
    description:
      "Agency and partner stakeholders reviewing sustainable rural WASH priorities.",
  },
  {
    id: "gal-005",
    title: "World Water Day Community Outreach",
    category: "Sanitation & Hygiene",
    location: "Gombe State",
    date: "2024",
    image: "/news-water-day.png",
    description:
      "Awareness activities promoting water conservation and hygiene practices.",
  },
  {
    id: "gal-006",
    title: "Water Facility Commissioning",
    category: "Water Projects",
    location: "Kwami LGA",
    date: "2024",
    image: "/news-commissioning.png",
    description:
      "Commissioning activity marking improved access to safe water for a rural community.",
  },
  {
    id: "gal-007",
    title: "Handwashing at Community Water Point",
    category: "Sanitation & Hygiene",
    location: "Rural Gombe",
    date: "2024",
    image: "/hero-water-facility.png",
    description:
      "Children practicing safe handwashing at a RUWASA-supported community facility.",
  },
  {
    id: "gal-008",
    title: "Partner Review Session",
    category: "Stakeholder Meetings",
    location: "Gombe State",
    date: "2023",
    image: "/news-meeting.png",
    description:
      "Coordination session for strengthening service delivery and partner alignment.",
  },
];

export const galleryCategories: GalleryCategory[] = [
  "Water Projects",
  "Community Engagement",
  "Sanitation & Hygiene",
  "Stakeholder Meetings",
];
