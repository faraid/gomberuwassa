export type NewsCategory =
  | "Agency Updates"
  | "Water Supply"
  | "Sanitation & Hygiene"
  | "Community Engagement"
  | "Partnerships";

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  category: NewsCategory;
  date: string;
  image: string;
  excerpt: string;
  body: string;
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "news-001",
    slug: "stakeholders-meeting-sustainable-water-services",
    title: "RUWASA Holds Stakeholders Meeting on Sustainable Water Services",
    category: "Agency Updates",
    date: "May 15, 2024",
    image: "/news-meeting.png",
    excerpt:
      "The meeting focused on strengthening partnership and improving service delivery across the state.",
    body:
      "Gombe State RUWASA convened stakeholders from government, local communities, and development partners to review ongoing rural water supply priorities and strengthen coordination for sustainable service delivery.",
    featured: true,
  },
  {
    id: "news-002",
    slug: "world-water-day-2024-water-conservation",
    title: "World Water Day 2024: RUWASA Promotes Water Conservation in Gombe",
    category: "Community Engagement",
    date: "March 22, 2024",
    image: "/news-water-day.png",
    excerpt:
      "Community sensitization and awareness campaign held across several LGAs to promote water conservation.",
    body:
      "RUWASA marked World Water Day with public awareness activities focused on household water conservation, protection of community water points, and responsible management of rural water infrastructure.",
    featured: true,
  },
  {
    id: "news-003",
    slug: "commissioning-water-facility-kwami-community",
    title: "Commissioning of Water Facility in Kwami Community",
    category: "Water Supply",
    date: "Feb 10, 2024",
    image: "/news-commissioning.png",
    excerpt:
      "A new water facility commissioned to improve access to clean and safe water in the community.",
    body:
      "The newly commissioned facility will support households in Kwami with improved access to safe water, reducing travel time and strengthening local water security.",
    featured: true,
  },
  {
    id: "news-004",
    slug: "hygiene-promotion-schools-rural-gombe",
    title: "RUWASA Expands Hygiene Promotion Activities in Rural Schools",
    category: "Sanitation & Hygiene",
    date: "Jan 24, 2024",
    image: "/news-water-day.png",
    excerpt:
      "School-based hygiene sessions are helping pupils adopt safe handwashing and sanitation practices.",
    body:
      "RUWASA teams are working with teachers and school health clubs to reinforce handwashing, safe sanitation use, and protection of water points in rural school environments.",
  },
  {
    id: "news-005",
    slug: "development-partners-review-rural-wash-support",
    title: "Development Partners Review Rural WASH Support with RUWASA",
    category: "Partnerships",
    date: "Dec 12, 2023",
    image: "/news-meeting.png",
    excerpt:
      "Partner coordination sessions reviewed priorities for expanding WASH services across underserved LGAs.",
    body:
      "The engagement reviewed implementation priorities, community needs, and opportunities for partner support to improve rural water supply and sanitation outcomes.",
  },
  {
    id: "news-006",
    slug: "water-committee-training-maintenance",
    title: "Community Water Committees Receive Maintenance Training",
    category: "Community Engagement",
    date: "Nov 18, 2023",
    image: "/news-commissioning.png",
    excerpt:
      "Water committee members received practical guidance on monitoring, reporting, and basic facility care.",
    body:
      "The training strengthened local capacity for facility protection, early fault reporting, and community-led management of water infrastructure.",
  },
];

export const newsCategories: NewsCategory[] = [
  "Agency Updates",
  "Water Supply",
  "Sanitation & Hygiene",
  "Community Engagement",
  "Partnerships",
];
