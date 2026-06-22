import { contactDefaults, contactSettingKeys, type ContactSettings, type ContactSettingKey } from '../constants/contact';
import { prisma } from '../prisma';

export const CONTACT_SETTING_PREFIX = 'contact.';

export async function getContactSettings(): Promise<ContactSettings> {
  const rows = await prisma.siteSetting.findMany({
    where: { key: { in: contactSettingKeys.map((key) => `${CONTACT_SETTING_PREFIX}${key}`) } },
    select: { key: true, value: true },
  });

  const settings: ContactSettings = { ...contactDefaults };
  for (const row of rows) {
    const key = row.key.replace(CONTACT_SETTING_PREFIX, '') as ContactSettingKey;
    if (key in settings) settings[key] = row.value;
  }
  return settings;
}

export async function updateContactSettings(values: Partial<ContactSettings>, userId: string) {
  const entries = contactSettingKeys.map((key) => ({
    key: `${CONTACT_SETTING_PREFIX}${key}`,
    value: values[key] ?? contactDefaults[key],
  }));

  await prisma.$transaction(
    entries.map((entry) => prisma.siteSetting.upsert({
      where: { key: entry.key },
      create: { key: entry.key, value: entry.value, updatedById: userId },
      update: { value: entry.value, updatedById: userId },
    })),
  );
}
export interface CreateContactSubmissionData {
  name: string;
  phone: string;
  email: string;
  enquiryType: string;
  message: string;
}

export async function createContactSubmission(data: CreateContactSubmissionData) {
  return prisma.contactSubmission.create({
    data: {
      name: data.name.trim(),
      phone: data.phone.trim(),
      email: data.email.trim(),
      subject: data.enquiryType.trim(),
      enquiryType: data.enquiryType.trim(),
      message: data.message.trim(),
      status: 'New',
    },
  });
}

export async function listContactEnquiries() {
  return prisma.contactSubmission.findMany({
    where: { deletedAt: null },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      phone: true,
      email: true,
      enquiryType: true,
      message: true,
      status: true,
      createdAt: true,
    },
  });
}

export async function updateContactEnquiryStatus(id: string, status: string) {
  return prisma.contactSubmission.update({
    where: { id },
    data: {
      status,
      read: status !== 'New',
    },
  });
}

