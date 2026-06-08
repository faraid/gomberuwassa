# Requirements Document

## Introduction

Phase 2 of the Gombe State RUWASA website introduces a full Content Management System (CMS) and Admin portal, enabling non-technical agency staff to manage all website content without modifying source code. Phase 1 delivered a static Next.js 15 frontend with hardcoded data files covering News, Projects, Gallery, Programs, and static pages. Phase 2 replaces those hardcoded data files with a database-backed system and provides a secure admin portal for create, read, update, and delete (CRUD) operations across all content types, along with user role management, a content workflow, and site-wide settings management.

The system is designed for a small Nigerian government team where editors are non-developers. Simplicity, reliability, and a clear publish workflow are the primary usability goals.

---

## Glossary

- **Admin_Portal**: The protected web application at `/admin/*` through which authorised staff manage all website content.
- **Super_Admin**: A user role with unrestricted access to all system functions including user management.
- **Editor**: A user role that can create, edit, and submit content for review but cannot publish or manage users.
- **Viewer**: A read-only user role that can view content and submissions but cannot modify anything.
- **Content_Item**: Any managed entity — news article, project, program, gallery item, or contact submission.
- **Auth_Service**: The module responsible for authentication, session management, and password reset.
- **Dashboard**: The landing page of the Admin_Portal, showing summary statistics and recent activity.
- **News_Manager**: The Admin_Portal module for managing news articles.
- **Project_Manager**: The Admin_Portal module for managing projects.
- **Gallery_Manager**: The Admin_Portal module for managing gallery albums and images.
- **Program_Manager**: The Admin_Portal module for managing programs.
- **Contact_Manager**: The Admin_Portal module for viewing contact form submissions and managing site-wide settings.
- **Workflow_Engine**: The module that enforces Draft → Review → Published content state transitions.
- **Audit_Log**: A system record of every create, update, delete, and publish action on a Content_Item.
- **Image_Store**: The storage service (local filesystem or object storage) that holds uploaded image files.
- **Slug**: A URL-safe string derived from a content title used to form public-facing page URLs.
- **LGA**: Local Government Area — an administrative subdivision of Gombe State.
- **WASH**: Water, Sanitation and Hygiene — the sector in which RUWASA operates.
- **Draft**: A content state indicating the item is not publicly visible and is still being edited.
- **Published**: A content state indicating the item is visible on the public website.
- **Scheduled**: A content state indicating the item will automatically transition to Published at a future date/time.
- **Session**: An authenticated user context maintained server-side with a secure cookie.

---

## Requirements

---

### Requirement 1: Admin Authentication

**User Story:** As an agency staff member, I want to securely log in to the Admin_Portal with my credentials, so that only authorised personnel can manage website content.

#### Acceptance Criteria

1. THE Auth_Service SHALL provide a login form that accepts an email address and a password.
2. WHEN a user submits valid credentials, THE Auth_Service SHALL create a server-side Session and redirect the user to the Dashboard.
3. WHEN a user submits invalid credentials, THE Auth_Service SHALL display an error message and SHALL NOT create a Session.
4. WHILE a valid Session exists, THE Admin_Portal SHALL allow the authenticated user to access permitted pages.
5. WHEN a user requests logout, THE Auth_Service SHALL invalidate the server-side Session and redirect the user to the login page.
6. WHEN a Session has been inactive for 60 minutes, THE Auth_Service SHALL invalidate the Session and require the user to log in again.
7. WHEN a user requests a password reset, THE Auth_Service SHALL send a reset link to the user's registered email address.
8. WHEN a user submits a valid password reset token, THE Auth_Service SHALL allow the user to set a new password and SHALL invalidate the token after a single use.
9. WHEN a password reset token is older than 24 hours, THE Auth_Service SHALL reject the token and display an expiry message.
10. IF five consecutive failed login attempts are made for the same account within 10 minutes, THEN THE Auth_Service SHALL lock the account and notify the Super_Admin by email.
11. THE Auth_Service SHALL store passwords as bcrypt hashes with a minimum cost factor of 12 and SHALL NOT store plaintext passwords.
12. THE Auth_Service SHALL enforce HTTPS for all authentication endpoints.

---

### Requirement 2: Admin Dashboard

**User Story:** As an admin user, I want to see a clear dashboard when I log in, so that I can quickly understand current content status and access any management area.

#### Acceptance Criteria

1. WHEN an authenticated user navigates to `/admin`, THE Dashboard SHALL display summary counts for: total published news articles, total projects by status (ongoing, completed, planned), total gallery items, and unread contact submissions.
2. THE Dashboard SHALL display the five most recently modified Content_Items across all types, showing title, type, state (Draft/Published), and last-modified date.
3. THE Dashboard SHALL provide navigation links to all management modules: News_Manager, Project_Manager, Gallery_Manager, Program_Manager, and Contact_Manager.
4. THE Dashboard SHALL display the currently logged-in user's name and role.
5. WHERE the authenticated user's role is Super_Admin, THE Dashboard SHALL display a link to the User Management section.
6. WHEN a Dashboard summary count is clicked, THE Dashboard SHALL navigate to the corresponding management module filtered to that content type or status.

---

### Requirement 3: User Roles and Permissions

**User Story:** As a Super_Admin, I want to assign roles to staff members, so that each person has only the access level appropriate to their responsibilities.

#### Acceptance Criteria

1. THE Admin_Portal SHALL enforce three roles: Super_Admin, Editor, and Viewer.
2. THE Super_Admin role SHALL have full access to all Admin_Portal functions including user creation, role assignment, deletion, and all content operations.
3. THE Editor role SHALL have access to create, edit, and submit Content_Items for review, and SHALL NOT have access to user management or the Site Settings panel.
4. THE Viewer role SHALL have read-only access to all Content_Items and contact submissions and SHALL NOT be able to create, edit, delete, or publish any item.
5. WHEN an authenticated user attempts to access a page or action that exceeds their role's permissions, THE Admin_Portal SHALL return a 403 Forbidden response and display an access-denied message.
6. WHEN a Super_Admin creates a new user, THE Admin_Portal SHALL require: full name, email address, role assignment, and a temporary password.
7. WHEN a Super_Admin updates a user's role, THE Admin_Portal SHALL apply the new permissions to all subsequent requests from that user's Session.
8. WHEN a Super_Admin deactivates a user account, THE Auth_Service SHALL invalidate any active Sessions for that account and prevent future logins.
9. THE Super_Admin role SHALL ensure at least one Super_Admin account exists at all times; THE Admin_Portal SHALL prevent deletion of the last Super_Admin account.
10. FOR ALL user records, THE Admin_Portal SHALL record the creating Super_Admin's identity and the creation timestamp.

---

### Requirement 4: News Management

**User Story:** As an Editor, I want to create, edit, and manage news articles with categories and images, so that the public website always reflects current agency news.

#### Acceptance Criteria

1. THE News_Manager SHALL display a paginated list of all news articles showing title, category, publication date, status (Draft/Review/Scheduled/Published), and featured flag.
2. WHEN a user creates a news article, THE News_Manager SHALL require: title, category, excerpt (max 300 characters), body content, and at least one image upload.
3. THE News_Manager SHALL auto-generate a URL Slug from the article title and SHALL allow the user to manually override the Slug before first publication.
4. WHEN a Slug is saved, THE News_Manager SHALL validate that the Slug is unique across all news articles and SHALL reject duplicates with an explanatory error message.
5. THE News_Manager SHALL support the following categories: "Agency Updates", "Water Supply", "Sanitation & Hygiene", "Community Engagement", "Partnerships", and SHALL allow a Super_Admin to add new categories.
6. THE News_Manager SHALL support tagging articles with free-text tags and SHALL display a tag-completion suggestion based on previously used tags.
7. WHEN an image is uploaded for a news article, THE Image_Store SHALL accept JPEG, PNG, and WebP formats up to 5 MB per file, generate a thumbnail, and store both the original and thumbnail.
8. THE News_Manager SHALL allow a user to mark an article as "featured", and SHALL enforce a maximum of 3 simultaneously featured news articles by automatically unfeaturing the oldest when a fourth is added.
9. WHEN a user saves an article without publishing, THE News_Manager SHALL save it as a Draft.
10. WHEN a user sets a future publish date on an article, THE Workflow_Engine SHALL transition the article state to Scheduled and SHALL automatically transition it to Published at the specified date and time.
11. WHEN a published article is edited, THE News_Manager SHALL save changes immediately to the live record and SHALL record the edit in the Audit_Log.
12. WHEN a user deletes a news article, THE News_Manager SHALL require confirmation and SHALL soft-delete the record, retaining it in the database and excluding it from public display.
13. THE News_Manager SHALL provide a search field that filters the article list by title keyword in real time.
14. FOR ALL news article title and excerpt fields, THE News_Manager SHALL sanitise HTML input to prevent cross-site scripting (XSS) before storage.

---

### Requirement 5: Projects Management

**User Story:** As an Editor, I want to create and update project records with location, status, and progress information, so that the public projects page accurately reflects RUWASA's field work.

#### Acceptance Criteria

1. THE Project_Manager SHALL display a filterable list of all projects showing title, LGA, type, status, progress percentage, and year.
2. WHEN a user creates a project record, THE Project_Manager SHALL require: title, LGA (selected from the 11 Gombe LGAs), community name, project type, status, year, progress percentage (0–100), beneficiary count, description, and at least one image.
3. THE Project_Manager SHALL support the following project types: "Borehole", "Solar Borehole", "Piped Water", "Sanitation", "Overhead Tank", and SHALL allow a Super_Admin to add new types.
4. THE Project_Manager SHALL support the following statuses: "ongoing", "completed", "planned".
5. WHEN a project status is set to "completed", THE Project_Manager SHALL automatically set the progress percentage to 100 and SHALL require a completion date.
6. WHEN a project status is set to "planned", THE Project_Manager SHALL automatically set the progress percentage to 0.
7. WHEN a progress percentage is submitted, THE Project_Manager SHALL validate that the value is an integer in the range 0 to 100 inclusive; IF the value is outside this range, THEN THE Project_Manager SHALL reject the submission with an error message.
8. THE Project_Manager SHALL allow a user to mark a project as "featured", and SHALL enforce a maximum of 3 simultaneously featured projects.
9. THE Project_Manager SHALL provide filter controls for: LGA, project type, status, and year, applying all active filters simultaneously.
10. WHEN a project record is deleted, THE Project_Manager SHALL require confirmation and SHALL soft-delete the record.
11. FOR ALL project records, THE Project_Manager SHALL record the user who last modified the record and the modification timestamp in the Audit_Log.

---

### Requirement 6: Gallery Management

**User Story:** As an Editor, I want to upload and organise images into albums, so that the public gallery page showcases RUWASA's work visually.

#### Acceptance Criteria

1. THE Gallery_Manager SHALL display a grid of all gallery items grouped by album/category, showing thumbnail, title, category, and featured flag.
2. WHEN a user uploads a gallery image, THE Image_Store SHALL accept JPEG, PNG, and WebP files up to 10 MB each, generate a web-optimised version (max dimension 1920 px) and a thumbnail (max dimension 400 px), and retain the original.
3. WHEN a gallery item is created, THE Gallery_Manager SHALL require: title, category, location, year, image, and description.
4. THE Gallery_Manager SHALL support the following categories: "Water Projects", "Community Engagement", "Sanitation & Hygiene", "Stakeholder Meetings", and SHALL allow a Super_Admin to add new categories.
5. THE Gallery_Manager SHALL allow users to reorder gallery items within a category by drag-and-drop or explicit position input, and THE Gallery_Manager SHALL persist the display order in the database.
6. THE Gallery_Manager SHALL allow a user to mark an item as "featured", with a maximum of 6 simultaneously featured gallery items.
7. WHEN a gallery item is deleted, THE Gallery_Manager SHALL require confirmation, SHALL soft-delete the database record, and SHALL remove the associated image files from the Image_Store.
8. THE Gallery_Manager SHALL support bulk selection of multiple items for batch deletion or batch category reassignment.
9. WHEN a bulk delete is requested, THE Gallery_Manager SHALL display the count of selected items and require explicit confirmation before proceeding.

---

### Requirement 7: Programs Management

**User Story:** As an Editor, I want to update program descriptions and objectives, so that the public programs page reflects the agency's current programmatic work.

#### Acceptance Criteria

1. THE Program_Manager SHALL display a list of all programs showing title, category, status, and icon.
2. WHEN a user creates or edits a program, THE Program_Manager SHALL require: title, category, status, summary (max 500 characters), objectives (a list of at least one item), beneficiaries description, coverage description, and lead unit.
3. THE Program_Manager SHALL support the following statuses: "active", "expanding", "planned".
4. THE Program_Manager SHALL provide an icon selector allowing the user to choose from a predefined set of icons drawn from the Lucide React icon library.
5. THE Program_Manager SHALL allow optional upload of a banner or illustration image for each program using the same Image_Store constraints as gallery uploads.
6. THE Program_Manager SHALL allow the user to assign a display colour tone ("blue" or "green") to each program.
7. WHEN a program's objectives list is submitted, THE Program_Manager SHALL validate that each objective is a non-empty string and SHALL reject blank objective entries.
8. THE Program_Manager SHALL support reordering of programs by drag-and-drop or position input, and SHALL persist the display order.

---

### Requirement 8: Contact Submissions and Site Settings

**User Story:** As an Editor or Super_Admin, I want to view contact form submissions and manage site-wide settings, so that the agency can respond to public enquiries and keep contact information current.

#### Acceptance Criteria

1. THE Contact_Manager SHALL display a paginated list of all contact form submissions showing sender name, email, subject, received date, and read/unread status.
2. WHEN a user opens a submission, THE Contact_Manager SHALL mark it as read and display: sender name, email, subject, message body, and received timestamp.
3. THE Contact_Manager SHALL allow a user to delete a submission after confirmation, with a soft-delete preserving the record.
4. THE Contact_Manager SHALL allow a Super_Admin to export contact submissions to a CSV file containing: name, email, subject, message, and received date.
5. WHERE the authenticated user's role is Super_Admin, THE Contact_Manager SHALL provide a Site Settings panel with editable fields for: main phone number, secondary phone number, primary email address, physical office address, and social media links (Facebook, Twitter/X).
6. WHEN site settings are saved, THE Admin_Portal SHALL validate that phone numbers match a Nigerian phone number pattern (starting with 0 and containing 11 digits), that email addresses are valid, and that social media links are valid HTTPS URLs; IF any field fails validation, THEN THE Admin_Portal SHALL reject the save and highlight the invalid fields.
7. WHEN site settings are saved successfully, THE Admin_Portal SHALL update the values used by the public-facing website without requiring a code deployment.
8. THE Contact_Manager SHALL display an unread submission count badge in the Admin_Portal navigation, updated on each page load.

---

### Requirement 9: Content Workflow

**User Story:** As a member of the content team, I want a clear review and publish workflow, so that content is checked before going live and we have a record of all changes.

#### Acceptance Criteria

1. THE Workflow_Engine SHALL enforce the following states for news articles: Draft → Review → Published, with the additional Scheduled state as a parallel path from Review.
2. WHEN an Editor submits a Draft article for review, THE Workflow_Engine SHALL transition the article to Review state and SHALL notify the Super_Admin by email.
3. WHEN a Super_Admin approves a Review article, THE Workflow_Engine SHALL transition the article to Published state and SHALL make it visible on the public website.
4. WHEN a Super_Admin rejects a Review article, THE Workflow_Engine SHALL transition the article back to Draft state and SHALL record the rejection reason in the Audit_Log.
5. WHEN a Super_Admin sets a publish date on a Review article, THE Workflow_Engine SHALL transition the article to Scheduled state and SHALL automatically publish it at the specified date and time.
6. WHEN a published article is unpublished, THE Workflow_Engine SHALL transition it to Draft state and SHALL remove it from public display immediately.
7. THE Audit_Log SHALL record the following fields for every state transition and content modification: Content_Item identifier, content type, action performed, actor (user identity), previous state, new state, and ISO 8601 timestamp.
8. THE Admin_Portal SHALL display the Audit_Log for each Content_Item on its detail page, showing the full history of changes in reverse chronological order.
9. WHERE the authenticated user's role is Super_Admin, THE Admin_Portal SHALL provide access to a system-wide Audit_Log view with filter controls for: date range, user, content type, and action.
10. THE Audit_Log SHALL be read-only; no user role SHALL be permitted to delete or modify audit records.

---

### Requirement 10: Database Schema and Architecture

**User Story:** As the development team, I want a clear database schema and architecture recommendation, so that Phase 2 is built on a sound technical foundation that the project's Next.js 15 stack can use efficiently.

#### Acceptance Criteria

1. THE Admin_Portal SHALL use PostgreSQL as the primary relational database, accessed through the Prisma ORM, to provide type-safe queries compatible with the existing TypeScript codebase.
2. THE Admin_Portal SHALL implement the following core database tables: `users`, `sessions`, `news_articles`, `news_categories`, `news_tags`, `article_tags` (join table), `projects`, `project_types`, `gallery_items`, `gallery_categories`, `programs`, `site_settings`, `contact_submissions`, and `audit_logs`.
3. THE `news_articles` table SHALL include the following columns: `id` (UUID), `slug` (unique text), `title`, `category_id` (foreign key), `excerpt`, `body`, `featured_image_url`, `thumbnail_url`, `status` (enum: draft, review, scheduled, published, deleted), `featured` (boolean), `scheduled_at` (nullable timestamp), `published_at` (nullable timestamp), `created_by` (foreign key to users), `updated_by` (foreign key to users), `created_at`, `updated_at`, `deleted_at` (nullable, for soft-delete).
4. THE `projects` table SHALL include the following columns: `id` (UUID), `title`, `lga`, `community`, `type_id` (foreign key), `status` (enum: planned, ongoing, completed), `year` (integer), `progress` (integer 0–100), `beneficiaries` (integer), `description`, `featured_image_url`, `thumbnail_url`, `featured` (boolean), `completion_date` (nullable date), `created_by`, `updated_by`, `created_at`, `updated_at`, `deleted_at` (nullable).
5. THE `gallery_items` table SHALL include the following columns: `id` (UUID), `title`, `category_id` (foreign key), `location`, `year` (integer), `description`, `image_url`, `optimised_url`, `thumbnail_url`, `featured` (boolean), `display_order` (integer), `created_by`, `updated_by`, `created_at`, `updated_at`, `deleted_at` (nullable).
6. THE `programs` table SHALL include the following columns: `id` (UUID), `title`, `category`, `status` (enum: active, expanding, planned), `icon_name` (text), `tone` (enum: blue, green), `summary`, `objectives` (JSON array of strings), `beneficiaries`, `coverage`, `lead_unit`, `banner_image_url` (nullable), `display_order` (integer), `created_by`, `updated_by`, `created_at`, `updated_at`.
7. THE `site_settings` table SHALL store key-value pairs where each row contains: `key` (unique text), `value` (text), `updated_by`, and `updated_at`.
8. THE `audit_logs` table SHALL include: `id` (UUID), `content_type`, `content_id`, `action`, `actor_id` (foreign key to users), `previous_state` (nullable JSON), `new_state` (nullable JSON), `created_at`.
9. THE Admin_Portal SHALL use Next.js API Routes (Route Handlers in `app/api/*`) to expose a RESTful JSON API consumed by the Admin_Portal frontend, keeping the existing public Next.js pages and API on the same deployment.
10. THE Image_Store SHALL use the local `public/uploads/` directory for development and SHALL be configurable to use an S3-compatible object storage service (such as AWS S3 or Cloudflare R2) via environment variables for production deployments.
11. WHEN the application starts, THE Admin_Portal SHALL verify the database connection and SHALL log a clear error and exit if the connection cannot be established.

---

### Requirement 11: Data Validation and Integrity

**User Story:** As a developer, I want all data submitted to the API to be validated before persistence, so that the database contains only well-formed, consistent records.

#### Acceptance Criteria

1. THE Admin_Portal SHALL validate all incoming API payloads using a schema validation library (Zod) before any database write operation.
2. WHEN a validation error occurs, THE Admin_Portal SHALL return an HTTP 422 response with a JSON body listing each invalid field and a human-readable error message.
3. THE Slug_Validator SHALL accept only strings matching the pattern `^[a-z0-9]+(?:-[a-z0-9]+)*$` (lowercase alphanumeric with hyphens, no leading or trailing hyphens).
4. FOR ALL Slug values, THE Admin_Portal SHALL enforce uniqueness within the same content type namespace and SHALL return a 409 Conflict response if a duplicate Slug is submitted.
5. THE Progress_Validator SHALL accept only integer values in the inclusive range [0, 100]; IF a value outside this range is submitted, THEN THE Admin_Portal SHALL return an HTTP 422 response.
6. THE Email_Validator SHALL validate email addresses against RFC 5321 syntax rules before storage.
7. THE Phone_Validator SHALL validate Nigerian phone numbers as exactly 11 digits starting with 0 (e.g., 08012345678).
8. WHEN a body field accepts rich text, THE Admin_Portal SHALL sanitise the HTML to allow only a safe subset of tags (p, br, strong, em, ul, ol, li, a, h2, h3, blockquote) and SHALL strip all other tags and attributes before storage.
9. FOR ALL user-submitted string fields, THE Admin_Portal SHALL trim leading and trailing whitespace before storage.
10. THE Progress_Validator and THE Slug_Validator SHALL be implemented as pure functions with no side effects, enabling property-based testing across arbitrary input values.

---

### Requirement 12: Implementation Waves

**User Story:** As the project team, I want the Phase 2 work divided into logical delivery milestones, so that value is delivered incrementally and each wave can be tested before the next begins.

#### Acceptance Criteria

1. THE implementation plan SHALL define Wave 1 as: database setup (PostgreSQL + Prisma schema), Auth_Service (login, session, logout, password reset), Dashboard skeleton, and User Management for Super_Admin — delivering a working, secured admin portal with no content management capability.
2. THE implementation plan SHALL define Wave 2 as: News_Manager full CRUD including image upload, category management, draft/publish workflow, featured flag, and Audit_Log for news — delivering the highest-priority content management capability first.
3. THE implementation plan SHALL define Wave 3 as: Project_Manager full CRUD including image upload, LGA and type filters, progress tracking, featured flag, and Audit_Log for projects.
4. THE implementation plan SHALL define Wave 4 as: Gallery_Manager full CRUD including bulk upload, album ordering, and Image_Store integration; Program_Manager full CRUD including icon selector, objectives list, and ordering.
5. THE implementation plan SHALL define Wave 5 as: Contact_Manager (submission inbox, CSV export), Site Settings panel, full Workflow_Engine (Draft → Review → Published with Scheduled state), system-wide Audit_Log view, and content scheduling.
6. THE implementation plan SHALL define Wave 6 as: replacement of all hardcoded `app/data/*.ts` files with database-driven API calls across the public-facing pages (Home, About, Projects, Programs, News, Gallery, Contact), end-to-end testing, and production deployment configuration.
7. WHEN each wave is completed, THE Admin_Portal SHALL pass all unit tests, integration tests, and property-based validation tests for the features delivered in that wave before the next wave begins.
