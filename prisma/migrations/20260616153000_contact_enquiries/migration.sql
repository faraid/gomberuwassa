-- Contact enquiry CMS fields
ALTER TABLE "contact_submissions" ADD COLUMN "phone" TEXT NOT NULL DEFAULT '';
ALTER TABLE "contact_submissions" ADD COLUMN "enquiryType" TEXT NOT NULL DEFAULT 'General enquiry';
ALTER TABLE "contact_submissions" ADD COLUMN "status" TEXT NOT NULL DEFAULT 'New';
ALTER TABLE "contact_submissions" ADD COLUMN "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

UPDATE "contact_submissions"
SET "enquiryType" = COALESCE(NULLIF("subject", ''), 'General enquiry')
WHERE "enquiryType" = 'General enquiry';
