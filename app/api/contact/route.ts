import { NextRequest } from 'next/server';
import { z } from 'zod';
import { created, withErrorHandler } from '@/lib/api';
import { createContactSubmission } from '@/lib/services/contact.service';

const contactSubmissionSchema = z.object({
  name: z.string().trim().min(2, 'Full name is required.'),
  phone: z.string().trim().min(5, 'Phone number is required.'),
  email: z.string().trim().email('Invalid email address.').optional().or(z.literal('')),
  enquiryType: z.string().trim().min(1, 'Enquiry type is required.'),
  message: z.string().trim().min(10, 'Message must be at least 10 characters.'),
});

export const POST = withErrorHandler(async (req: NextRequest) => {
  const body = await req.json();
  const data = contactSubmissionSchema.parse(body);
  const submission = await createContactSubmission({
    name: data.name,
    phone: data.phone,
    email: data.email ?? '',
    enquiryType: data.enquiryType,
    message: data.message,
  });

  return created({ id: submission.id });
});
