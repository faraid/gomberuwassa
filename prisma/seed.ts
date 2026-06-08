import 'dotenv/config';
import { PrismaClient, Role } from '../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import bcrypt from 'bcryptjs';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  // Seed Super Admin
  const passwordHash = await bcrypt.hash('Admin@123!', 12);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@ruwasa.go.ng' },
    update: {},
    create: {
      fullName: 'System Administrator',
      email: 'admin@ruwasa.go.ng',
      passwordHash,
      role: Role.Super_Admin,
      active: true,
    },
  });

  console.log('Seeded Super Admin:', admin.email);

  // News Categories
  const newsCategories = [
    'Agency Updates',
    'Water Supply',
    'Sanitation & Hygiene',
    'Community Engagement',
    'Partnerships',
  ];

  for (const name of newsCategories) {
    await prisma.newsCategory.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log('Seeded news categories:', newsCategories.length);

  // Project Types
  const projectTypes = [
    'Borehole',
    'Solar Borehole',
    'Piped Water',
    'Sanitation',
    'Overhead Tank',
  ];

  for (const name of projectTypes) {
    await prisma.projectType.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log('Seeded project types:', projectTypes.length);

  // Gallery Categories
  const galleryCategories = [
    'Water Projects',
    'Community Engagement',
    'Sanitation & Hygiene',
    'Stakeholder Meetings',
  ];

  for (const name of galleryCategories) {
    await prisma.galleryCategory.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log('Seeded gallery categories:', galleryCategories.length);

  // Default Site Settings
  const siteSettings = [
    { key: 'phone_primary', value: '08012345678' },
    { key: 'phone_secondary', value: '08012345679' },
    { key: 'email_primary', value: 'info@ruwasa.go.ng' },
    {
      key: 'office_address',
      value: 'RUWASA Headquarters, Gombe, Gombe State, Nigeria',
    },
    {
      key: 'facebook_url',
      value: 'https://facebook.com/gomberuwasa',
    },
    {
      key: 'twitter_url',
      value: 'https://twitter.com/gomberuwasa',
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

  console.log('Seeded site settings:', siteSettings.length);
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