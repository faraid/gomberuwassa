import "dotenv/config";
import { PrismaClient, Role, Tone } from "../generated/prisma";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  // Seed Super Admin
  const passwordHash = await bcrypt.hash("Admin@123!", 12);

  const admin = await prisma.user.upsert({
    where: { email: "admin@ruwasa.go.ng" },
    update: {},
    create: {
      fullName: "System Administrator",
      email: "admin@ruwasa.go.ng",
      passwordHash,
      role: Role.Super_Admin,
      active: true,
    },
  });

  console.log("Seeded Super Admin:", admin.email);

  // News Categories
  const newsCategories = [
    "Agency Updates",
    "Water Supply",
    "Sanitation & Hygiene",
    "Community Engagement",
    "Partnerships",
  ];

  for (const name of newsCategories) {
    await prisma.newsCategory.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log("Seeded news categories:", newsCategories.length);

  // Project Types
  const projectTypes = [
    "Borehole",
    "Solar Borehole",
    "Piped Water",
    "Sanitation",
    "Overhead Tank",
  ];

  for (const name of projectTypes) {
    await prisma.projectType.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log("Seeded project types:", projectTypes.length);

  // Gallery Categories
  const galleryCategories = [
    "Water Projects",
    "Community Engagement",
    "Sanitation & Hygiene",
    "Stakeholder Meetings",
  ];

  for (const name of galleryCategories) {
    await prisma.galleryCategory.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log("Seeded gallery categories:", galleryCategories.length);

  // Default Site Settings
  const siteSettings = [
    { key: "phone_primary", value: "0813 269 6321" },
    { key: "phone_secondary", value: "08012345679" },
    { key: "email_primary", value: "info@ruwasa.gombe.gov.ng" },
    {
      key: "office_address",
      value: "RUWASA Headquarters, Gombe, Gombe State, Nigeria",
    },
    {
      key: "facebook_url",
      value: "https://facebook.com/gomberuwasa",
    },
    {
      key: "twitter_url",
      value: "https://twitter.com/gomberuwasa",
    },
    {
      key: "footer_text",
      value: "Gombe State RUWASA. All rights reserved.",
    },
  ];

  for (const setting of siteSettings) {
    await prisma.siteSetting.upsert({
      where: { key: setting.key },
      update: {},
      create: {
        key: setting.key,
        value: setting.value,
        updatedById: admin.id,
      },
    });
  }

  console.log("Seeded site settings:", siteSettings.length);

  // ─── Homepage Default Seed Data ──────────────────────────────────────────

  // Hero (only create if none exists)
  const existingHero = await prisma.homepageHero.findFirst();
  if (!existingHero) {
    await prisma.homepageHero.create({
      data: {
        title: "Providing Sustainable Water & Sanitation Services",
        subtitle: "for Rural Communities in Gombe State",
        description:
          "We are committed to improving access to clean water, promoting sanitation and enhancing the quality of life in every rural community.",
        heroImageUrl: "/hero-water-facility.png",
        primaryBtnText: "Learn More",
        primaryBtnLink: "/about",
        secondaryBtnText: "Our Projects",
        secondaryBtnLink: "/projects",
      },
    });
    console.log("Seeded homepage hero");
  }

  // Value Cards
  const existingCards = await prisma.homepageValueCard.count();
  if (existingCards === 0) {
    const valueCards = [
      { iconName: "Droplet", title: "Clean Water", description: "Expanding access to safe and reliable water supply.", tone: Tone.blue, displayOrder: 0 },
      { iconName: "Users", title: "Healthy Communities", description: "Promoting hygiene and sanitation for better health.", tone: Tone.green, displayOrder: 1 },
      { iconName: "Handshake", title: "Sustainable Solutions", description: "Implementing durable and community-driven solutions.", tone: Tone.blue, displayOrder: 2 },
      { iconName: "TrendingUp", title: "Accountability", description: "Transparent management and responsible service.", tone: Tone.green, displayOrder: 3 },
      { iconName: "Users", title: "Community Focused", description: "Working together with communities for lasting impact.", tone: Tone.blue, displayOrder: 4 },
    ];
    for (const card of valueCards) {
      await prisma.homepageValueCard.create({ data: { ...card, active: true } });
    }
    console.log("Seeded homepage value cards:", valueCards.length);
  }

  // Statistics
  const existingStats = await prisma.homepageStatistic.count();
  if (existingStats === 0) {
    const statistics = [
      { iconName: "Droplet", value: "312+", label: "Water Points Constructed", displayOrder: 0 },
      { iconName: "Users", value: "245,000+", label: "People with Improved Water Access", displayOrder: 1 },
      { iconName: "MapPin", value: "114+", label: "Communities Served", displayOrder: 2 },
      { iconName: "Handshake", value: "25+", label: "Partners & Donors", displayOrder: 3 },
      { iconName: "Award", value: "100%", label: "Commitment to Service Excellence", displayOrder: 4 },
    ];
    for (const stat of statistics) {
      await prisma.homepageStatistic.create({ data: { ...stat, active: true } });
    }
    console.log("Seeded homepage statistics:", statistics.length);
  }

  // Programs
  const existingPrograms = await prisma.homepageProgram.count();
  if (existingPrograms === 0) {
    const programs = [
      { iconName: "Wrench", title: "Water Supply", description: "Expanding access to clean and safe water in rural areas.", tone: Tone.blue, linkUrl: "/programs", displayOrder: 0 },
      { iconName: "Toilet", title: "Sanitation & Hygiene", description: "Promoting sanitation and hygiene for healthier communities.", tone: Tone.green, linkUrl: "/programs", displayOrder: 1 },
      { iconName: "Users", title: "Capacity Building", description: "Building local capacity for sustainable water and sanitation services.", tone: Tone.blue, linkUrl: "/programs", displayOrder: 2 },
      { iconName: "Sprout", title: "Community Engagement", description: "Engaging communities in planning and managing water resources.", tone: Tone.blue, linkUrl: "/programs", displayOrder: 3 },
    ];
    for (const prog of programs) {
      await prisma.homepageProgram.create({ data: { ...prog, active: true } });
    }
    console.log("Seeded homepage programs:", programs.length);
  }

  console.log("Seed complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
