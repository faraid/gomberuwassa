import type { Metadata } from "next";

export const siteConfig = {
  name: "Gombe State RUWASA",
  fullName: "Gombe State Rural Water Supply and Sanitation Agency",
  description:
    "Gombe State RUWASA delivers sustainable rural water supply, sanitation, hygiene promotion, and community water infrastructure services across Gombe State.",
  url: "https://ruwasa.gombe.gov.ng",
  ogImage: "/hero-water-facility.png",
};

export const siteRoutes = [
  {
    path: "/",
    title: "Gombe State RUWASA",
    description:
      "Official website of Gombe State RUWASA, providing sustainable rural water supply and sanitation services across communities in Gombe State.",
  },
  {
    path: "/about",
    title: "About RUWASA",
    description:
      "Learn about RUWASA, including the agency vision, mission, mandate, management team, and commitment to clean water and sanitation in rural Gombe State.",
  },
  {
    path: "/projects",
    title: "Projects",
    description:
      "Explore RUWASA water supply and sanitation infrastructure projects across all 11 LGAs of Gombe State, from solar boreholes to piped water schemes.",
  },
  {
    path: "/programs",
    title: "Programs",
    description:
      "Explore RUWASA programmes for rural water supply, sanitation and hygiene promotion, capacity building, and community engagement across Gombe State.",
  },
  {
    path: "/news",
    title: "News & Updates",
    description:
      "Read the latest news, project milestones, community updates, sanitation campaigns, and stakeholder announcements from Gombe State RUWASA.",
  },
  {
    path: "/gallery",
    title: "Gallery",
    description:
      "View photos from Gombe State RUWASA water supply projects, sanitation activities, stakeholder meetings, and community engagement programmes.",
  },
  {
    path: "/contact",
    title: "Contact RUWASA",
    description:
      "Contact Gombe State RUWASA for enquiries, community water reports, partnerships, office address, and official correspondence.",
  },
];

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(siteConfig.ogImage);

  return {
    title: {
      absolute: fullTitle,
    },
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_NG",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} rural water facility`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
    },
  };
}
