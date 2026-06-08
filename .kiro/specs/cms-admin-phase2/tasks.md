# Implementation Plan: CMS Admin Portal – Phase 2

## Overview

Transforms the Gombe State RUWASA website from a static Next.js 15 application with hardcoded `app/data/*.ts` files into a fully database-backed system with a secure Admin Portal at `/admin/*`. The implementation is divided into six sequential waves; each wave must pass all tests before the next begins (Requirement 12.7).

**Stack:** Next.js 15, TypeScript, Tailwind CSS, Prisma, PostgreSQL  
**Testing:** Vitest + fast-check (property-based tests), Vitest integration tests against Docker Compose PostgreSQL

---

## Tasks

---

## Wave 1 — Database, Auth, Dashboard, User Management

- [ ] 1. Install dependencies and configure the development environment
  - Add `prisma`, `@prisma/client`, `bcryptjs`, `@types/bcryptjs`, `zod`, `nodemailer`, `@types/nodemailer`, `sharp`, `@types/sharp` to `package.json`
  - Add `vitest`, `@vitejs/plugin-react`, `fast-check`, `@vitest/coverage-v8` as dev dependencies
  - Create `vitest.config.ts` with `environment: 'node'` and path aliases matching `tsconfig.json`
  - Create `vitest.integration.config.ts` for integration tests pointing to a test database
  - Create `.env.example` documenting all required environment variables (`DATABASE_URL`, `SESSION_SECRET`, `IMAGE_STORE`, `SMTP_*`, `CRON_SECRET`, `S3_*`)
  - _Requirements: 10.1, 12.1_

- [ ] 2. Set up Prisma schema and database migrations
  - Create `prisma/schema.prisma` with all enums (`Role`, `ArticleStatus`, `ProjectStatus`, `ProgramStatus`, `Tone`) and all models as defined in the design: `User`, `Session`, `PasswordResetToken`, `NewsCategory`, `NewsTag`, `ArticleTag`, `NewsArticle`, `ProjectType`, `Project`, `GalleryCategory`, `GalleryItem`, `Program`, `ContactSubmission`, `SiteSetting`, `AuditLog`
  - Run `npx prisma migrate dev --name init` to generate the initial migration
  - Create `prisma/seed.ts` that seeds one Super_Admin user and the default news/project/gallery/program categories
  - Create `lib/prisma.ts` as the Prisma singleton with `verifyConnection()` that logs and exits on failure
  - Add a Prisma query extension (global middleware) that filters `deletedAt IS NULL` by default on all soft-delete models
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5, 10.6, 10.7, 10.8, 10.11_

- [ ] 3. Implement validation pure functions
  - [ ] 3.1 Create `lib/validation/slugValidator.ts` exporting `validateSlug(input: string): ValidationResult` and `generateSlug(title: string): string`
    - `validateSlug` returns pass if and only if input matches `^[a-z0-9]+(?:-[a-z0-9]+)*$`
    - `generateSlug` lowercases, strips non-alphanumeric (except spaces), trims, replaces spaces with hyphens, collapses multiple hyphens
    - _Requirements: 4.3, 11.3, 11.10_

  - [ ]* 3.2 Write property tests for slug validator and generator
    - **Property 4: Slug generator always produces pattern-conforming output**
    - **Validates: Requirements 4.3** — for any non-empty title string (Unicode, numbers, punctuation, mixed case), `generateSlug()` must return a string matching `^[a-z0-9]+(?:-[a-z0-9]+)*$`
    - **Property 10: Slug validator accepts only pattern-conforming strings**
    - **Validates: Requirements 11.3** — for any string, `validateSlug()` must pass if and only if it matches `^[a-z0-9]+(?:-[a-z0-9]+)*$`
    - Use `fc.string({ minLength: 1 })` for P4 and both `fc.string()` and `fc.stringMatching(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)` for P10
    - _Requirements: 4.3, 11.3_

  - [ ] 3.3 Create `lib/validation/progressValidator.ts` exporting `validateProgress(value: number): ValidationResult`
    - Returns pass if and only if value is an integer in `[0, 100]`; rejects non-integers and out-of-range values
    - _Requirements: 5.7, 11.5, 11.10_

  - [ ]* 3.4 Write property tests for progress validator
    - **Property 7: Progress validator accepts exactly [0, 100] and rejects all others**
    - **Validates: Requirements 5.7, 11.5** — for any integer `n`, `validateProgress(n)` must pass if and only if `0 ≤ n ≤ 100`; all non-integers and out-of-range values must fail
    - Use `fc.integer()` for full integer space coverage
    - _Requirements: 5.7, 11.5_

  - [ ] 3.5 Create `lib/validation/phoneValidator.ts` exporting `validateNigerianPhone(value: string): ValidationResult`
    - Returns pass if and only if the string is exactly 11 digits starting with `'0'`
    - _Requirements: 8.6, 11.7, 11.10_

  - [ ]* 3.6 Write property tests for phone validator
    - **Property 9: Nigerian phone number validator correctness**
    - **Validates: Requirements 8.6, 11.7** — any 11-char digit string starting with `'0'` must pass; all others must fail
    - Use `fc.string()` for arbitrary inputs and `fc.stringMatching(/^0\d{10}$/)` for valid inputs
    - _Requirements: 8.6, 11.7_

  - [ ] 3.7 Create `lib/validation/emailValidator.ts` exporting `validateEmail(value: string): ValidationResult`
    - Validates RFC 5321 email syntax using Zod's `z.string().email()`
    - _Requirements: 8.6, 11.6_

  - [ ] 3.8 Create `lib/validation/htmlSanitizer.ts` exporting `sanitizeHtml(input: string): string`
    - Allow only: `p`, `br`, `strong`, `em`, `ul`, `ol`, `li`, `a`, `h2`, `h3`, `blockquote`
    - Strip all other tags, event handler attributes (`on*`), and `javascript:` URIs
    - Use a library such as `isomorphic-dompurify` or `sanitize-html` with an explicit allowlist
    - _Requirements: 4.14, 11.8_

  - [ ]* 3.9 Write property tests for HTML sanitizer
    - **Property 11: HTML sanitizer removes disallowed tags and preserves allowed ones**
    - **Validates: Requirements 11.8** — for any HTML string, output must contain no disallowed tags, `<script>`, `<style>`, event attributes, or `javascript:` URIs; allowed tags must be preserved
    - Use `fc.string()` with injected `<script>` and event-handler payloads
    - _Requirements: 4.14, 11.8_

  - [ ]* 3.10 Write property tests for whitespace trimming invariant
    - **Property 12: Whitespace trimming invariant**
    - **Validates: Requirements 11.9** — for any user-submitted string value, the value stored after a successful API write must equal `input.trim()`
    - Test against the Zod schemas' preprocessing step (`.trim()`) using `fc.string()` with prepended/appended whitespace
    - _Requirements: 11.9_

- [ ] 4. Implement the Auth Service and session infrastructure
  - [ ] 4.1 Create `lib/auth.ts` with `getSession(req)`, `setSessionCookie(res, sessionId)`, and `clearSessionCookie(res)` helpers
    - Cookie must be `HttpOnly; Secure; SameSite=Lax` with a random 256-bit session ID
    - _Requirements: 1.2, 1.5, 10.9_

  - [ ] 4.2 Create `lib/services/auth.service.ts` implementing the `AuthService` interface
    - `login()`: look up user by email, `bcrypt.compare()` with cost ≥ 12, call `recordFailedAttempt()` on failure, create `Session` row on success
    - `logout()`: delete session row by ID
    - `getSession()`: query session by ID, check `expiresAt > NOW()`
    - `touchSession()`: update `lastSeen` to slide the 60-minute idle window
    - `createUser()`: hash password with bcrypt cost 12, insert `User` row
    - `requestPasswordReset()`: generate 256-bit random token, store SHA-256 hash, email plain token link (24 h expiry)
    - `resetPassword()`: validate token hash, check expiry and `usedAt IS NULL`, update password hash, mark token used
    - `recordFailedAttempt()`: increment `failedAttempts`; at 5 set `lockedAt`, email all Super_Admin accounts
    - `deactivateUser()`: set `active = false`, delete all sessions for that user
    - _Requirements: 1.1–1.12, 3.8_

  - [ ]* 4.3 Write property tests for Auth Service
    - **Property 1: Invalid credentials never produce a session**
    - **Validates: Requirements 1.3** — for any (email, password) pair not matching a valid active account, `login()` must return an error and must NOT create a session row
    - Use `fc.emailAddress()` and `fc.string()` as arbitraries; mock Prisma with in-memory store
    - **Property 2: Account lockout triggers after five consecutive failures**
    - **Validates: Requirements 1.10** — for any valid account, after five consecutive failures within 10 minutes the sixth attempt must return a "locked" error regardless of credentials
    - Use `fc.integer({ min: 5, max: 20 })` for attempt counts
    - _Requirements: 1.3, 1.10_

  - [ ] 4.4 Create API route handlers for authentication
    - `app/api/auth/login/route.ts` — POST: validate body with Zod, call `authService.login()`, set session cookie, return 200 or 401
    - `app/api/auth/logout/route.ts` — POST: call `authService.logout()`, clear cookie, return 200
    - `app/api/auth/me/route.ts` — GET: return current user from session or 401
    - `app/api/auth/password-reset/request/route.ts` — POST: call `requestPasswordReset()`
    - `app/api/auth/password-reset/confirm/route.ts` — POST: call `resetPassword()`
    - Wrap all handlers with `withErrorHandler` HOF
    - _Requirements: 1.1–1.9, 1.12_

- [ ] 5. Implement Next.js middleware for session validation and RBAC
  - Create `middleware.ts` at the project root
  - On every `/admin/*` and `/api/*` (except `/api/auth/login`) request: read `sid` cookie, query sessions table, validate `expiresAt`, call `touchSession()`, attach `x-user-id` and `x-user-role` headers
  - Implement the `ROUTE_ROLE_MAP` for Super_Admin-only routes (`/admin/users`, `/admin/settings`, `/admin/audit`, and their API equivalents)
  - Redirect unauthenticated requests to `/admin/login`; return 401 for unauthenticated API requests; return 403 for role violations
  - _Requirements: 1.4, 1.6, 3.1–3.5_

  - [ ]* 5.1 Write property tests for RBAC middleware
    - **Property 3: Role-based access control — forbidden for all unauthorized roles**
    - **Validates: Requirements 3.5** — for any protected route and any role not listed as permitted, the middleware must return HTTP 403; must hold for all (route, role) combinations
    - Use `fc.constantFrom(...protectedRoutes)` and `fc.constantFrom('Editor', 'Viewer')` for unauthorised roles
    - _Requirements: 3.5_

- [ ] 6. Build the Login page and Admin Portal shell
  - Create `app/admin/login/page.tsx` — client form with email + password inputs, calling `POST /api/auth/login`; show error messages on failure
  - Create `app/admin/layout.tsx` — session guard (redirect to login if unauthenticated), persistent sidebar with navigation items, top bar with user name/role and logout button
  - Create `app/admin/page.tsx` — Dashboard Server Component running parallel Prisma queries for summary counts (published news, project counts by status, gallery items, unread contacts)
  - Display five most recently modified Content_Items with title, type, state, and last-modified date
  - Conditionally render User Management link for Super_Admin role
  - _Requirements: 2.1–2.6_

- [ ] 7. Implement User Management (Super_Admin only)
  - Create `lib/services/users.service.ts` with `listUsers()`, `createUser()`, `updateUser()`, `deactivateUser()`
  - Create API route handlers:
    - `app/api/users/route.ts` — GET (paginated list), POST (create user)
    - `app/api/users/[id]/route.ts` — GET, PUT (update role/name), DELETE (deactivate)
  - Create `app/admin/users/page.tsx` — Server Component table listing all users with name, email, role, status, created date
  - Create `app/admin/users/new/page.tsx` and `app/admin/users/[id]/edit/page.tsx` — forms requiring full name, email, role, temporary password
  - Enforce: at least one Super_Admin must remain; deactivation invalidates active sessions; creation records `createdById`
  - _Requirements: 3.2, 3.6–3.10_

- [ ] 8. Checkpoint — Wave 1 complete
  - Ensure all unit tests and property-based tests pass: `npx vitest --run`
  - Verify middleware redirects unauthenticated requests, enforces RBAC, and slides the session timer
  - Verify bcrypt cost factor ≥ 12 and HttpOnly session cookie are set correctly
  - Ask the user if questions arise before proceeding to Wave 2.

---

## Wave 2 — News Manager

- [ ] 9. Implement the News Service and API routes
  - [ ] 9.1 Create `lib/services/news.service.ts` with `listArticles()`, `getArticle()`, `createArticle()`, `updateArticle()`, `softDeleteArticle()`, and `enforeFeaturedLimit()` (unfeaturing the oldest when a 4th is added)
    - `createArticle()` must auto-generate a slug via `generateSlug()` and validate uniqueness; call `sanitizeHtml()` on body field; trim all string fields
    - `enforeFeaturedLimit()` must ensure `featured = true AND status = 'published'` count never exceeds 3
    - _Requirements: 4.1–4.14_

  - [ ]* 9.2 Write property tests for featured news count invariant
    - **Property 5: Featured news count invariant — count never exceeds 3**
    - **Validates: Requirements 4.8** — for any sequence of feature/unfeature operations, the count of `featured = true AND status = published` articles must never exceed 3; when a 4th is added the oldest is automatically unfeatured
    - Use `fc.array(fc.boolean(), { minLength: 1, maxLength: 20 })` to generate operation sequences; run against in-memory article state
    - _Requirements: 4.8_

  - [ ] 9.3 Create Zod schemas in `lib/validation/schemas/news.schema.ts` for create and update payloads
    - Title (required), categoryId (required), excerpt (max 300 chars), body (sanitized), slug (override optional), featuredImageUrl, thumbnailUrl, status, featured, scheduledAt, tags
    - Apply `.trim()` preprocessing to all string fields
    - _Requirements: 4.2, 11.1, 11.9_

  - [ ] 9.4 Create API route handlers for news
    - `app/api/news/route.ts` — GET (paginated, supports `?status=&category=&search=&page=`), POST (create, Editor+)
    - `app/api/news/[id]/route.ts` — GET, PUT (update, Editor+), DELETE (soft-delete, Editor+)
    - `app/api/news/[id]/workflow/route.ts` — POST (state transition; Super_Admin for approve/reject/schedule; Editor for submit-to-review)
    - _Requirements: 4.1–4.14, 9.1–9.5_

- [ ] 10. Implement the Image Upload service and API route
  - Create `lib/services/image.service.ts` with `LocalAdapter` and `S3Adapter` implementing `ImageAdapter`
  - `ImageService.upload()` uses Sharp to decode, optionally resize (gallery: max 1920 px; news: as-is), generate WebP thumbnail (max 400 px), save via adapter, return `{ originalUrl, optimisedUrl, thumbnailUrl }`
  - `LocalAdapter.save()` writes to `public/uploads/{uuid}.ext`; `S3Adapter.save()` calls PutObject
  - Select adapter at startup based on `process.env.IMAGE_STORE`
  - Create `app/api/upload/route.ts` — POST multipart/form-data; validate MIME type and size; call `ImageService.upload()`; news limit 5 MB, gallery 10 MB
  - _Requirements: 4.7, 6.2, 10.10_

- [ ] 11. Implement the Workflow Engine
  - Create `lib/services/workflow.service.ts` with `transition()` enforcing `VALID_TRANSITIONS` map and `processScheduled()` for cron execution
  - `transition()` must write an `AuditLog` entry with `previousState` and `newState` on every call
  - `processScheduled()` queries `status = 'scheduled' AND scheduledAt <= NOW()` and transitions each to `published`
  - Create `app/api/internal/cron/route.ts` — GET secured by `CRON_SECRET` header; calls `processScheduled()`
  - _Requirements: 4.10, 9.1–9.7_

- [ ] 12. Implement the Audit Service
  - Create `lib/services/audit.service.ts` with `log(entry)` (insert only) and `query(filters)` (read only)
  - `AuditLog` records must never be deleted or updated; no `DELETE` or `UPDATE` route handlers exist for audit records
  - _Requirements: 9.7, 9.10_

  - [ ]* 12.1 Write property tests for audit log completeness and immutability
    - **Property 13: Audit log entry completeness**
    - **Validates: Requirements 9.7** — for any content action (create, update, state transition, delete), the produced `AuditLog` entry must have non-null `contentType`, `contentId`, `action`, `actorId`, `createdAt`, and must include `previousState` and `newState` fields
    - Use `fc.constantFrom(...contentTypes)` and `fc.constantFrom('create', 'update', 'delete', 'transition')` as arbitraries; mock Prisma insert
    - **Property 14: Audit log is immutable for all user roles**
    - **Validates: Requirements 9.10** — for any role (Super_Admin, Editor, Viewer), any attempt to delete or modify an AuditLog record must be rejected with HTTP 403 or 405
    - Use `fc.constantFrom('Super_Admin', 'Editor', 'Viewer')` as arbitrary
    - _Requirements: 9.7, 9.10_

- [ ] 13. Build the News Manager UI
  - Create `app/admin/news/page.tsx` — paginated table (Server Component for initial data) with title, category, status badge, featured flag, published date; Client Component wrapper for search input and status filter
  - Create `app/admin/news/new/page.tsx` — article create form with `react-hook-form` + Zod resolver; title, category select, excerpt textarea (300-char counter), rich-text body, image upload widget, slug field (auto-filled, overridable), featured toggle, tag input with suggestions, publish date picker
  - Create `app/admin/news/[id]/edit/page.tsx` — pre-populated edit form; workflow action buttons (Submit for Review, Approve, Reject, Schedule, Unpublish) shown based on current status and user role
  - Create `app/admin/news/[id]/page.tsx` — article detail view showing full content and per-item Audit_Log history in reverse chronological order
  - _Requirements: 4.1–4.14, 9.8_

- [ ] 14. Checkpoint — Wave 2 complete
  - Run `npx vitest --run` — all unit and property tests must pass
  - Verify the news create/edit/delete/publish/schedule flows end-to-end in the browser
  - Verify the featured-news cap, slug uniqueness, and XSS sanitization with integration tests
  - Ask the user if questions arise before proceeding to Wave 3.

---

## Wave 3 — Projects Manager

- [ ] 15. Implement the Projects Service and API routes
  - [ ] 15.1 Create `lib/services/projects.service.ts` with `listProjects()`, `getProject()`, `createProject()`, `updateProject()`, `softDeleteProject()`
    - `updateProject()` must enforce status→progress rules: `completed` forces `progress = 100`, `planned` forces `progress = 0`
    - `updateProject()` must require `completionDate` when status is set to `completed`
    - `enforeFeaturedLimit()` variant for projects: max 3 featured projects at any time
    - All string fields must be trimmed; log all writes to `AuditLog`
    - _Requirements: 5.1–5.11_

  - [ ]* 15.2 Write property tests for project status–progress coupling
    - **Property 6: Project status determines progress boundary**
    - **Validates: Requirements 5.5, 5.6** — setting status to `'completed'` must result in `progress === 100`; setting status to `'planned'` must result in `progress === 0`, regardless of prior progress value
    - Use `fc.constantFrom('completed', 'planned')` and `fc.integer({ min: 0, max: 100 })` as arbitraries; apply against the service's update logic
    - _Requirements: 5.5, 5.6_

  - [ ] 15.3 Create Zod schemas in `lib/validation/schemas/project.schema.ts`
    - Title, lga (enum of 11 Gombe LGAs), community, typeId, status, year, progress (validated by `validateProgress`), beneficiaries, description, featuredImageUrl, thumbnailUrl, featured, completionDate (required when status = completed)
    - Apply `.trim()` to all string fields; apply `validateProgress` as a Zod refinement
    - _Requirements: 5.2, 11.1, 11.5, 11.9_

  - [ ] 15.4 Create API route handlers for projects
    - `app/api/projects/route.ts` — GET (paginated, `?lga=&type=&status=&year=&page=`), POST
    - `app/api/projects/[id]/route.ts` — GET, PUT, DELETE (soft)
    - `app/api/projects/[id]/audit/route.ts` — GET per-item audit history
    - _Requirements: 5.1–5.11_

- [ ] 16. Build the Projects Manager UI
  - Create `app/admin/projects/page.tsx` — filterable table with LGA, type, status, year filter controls (Client Component); columns: title, LGA, type, status, progress bar, year
  - Create `app/admin/projects/new/page.tsx` and `app/admin/projects/[id]/edit/page.tsx` — forms with LGA dropdown (11 Gombe LGAs), project type select, status select, progress input (0–100, disabled for completed/planned), beneficiaries input, description textarea, image upload, featured toggle, completion date picker (required when completed)
  - Create `app/admin/projects/[id]/page.tsx` — project detail with per-item Audit_Log
  - _Requirements: 5.1–5.11, 9.8_

- [ ] 17. Checkpoint — Wave 3 complete
  - Run `npx vitest --run` — all tests must pass
  - Verify progress auto-set rules (completed→100, planned→0) and featured cap with integration tests
  - Ask the user if questions arise before proceeding to Wave 4.

---

## Wave 4 — Gallery Manager + Programs Manager

- [ ] 18. Implement the Gallery Service and API routes
  - [ ] 18.1 Create `lib/services/gallery.service.ts` with `listItems()`, `getItem()`, `createItem()`, `updateItem()`, `softDeleteItem()` (also removes image files via `ImageService.delete()`), `reorderItems()` (atomic transaction), `bulkDelete()`, `bulkReassignCategory()`
    - `reorderItems()` writes all `{ id, displayOrder }` pairs in a single Prisma transaction
    - `softDeleteItem()` must call `imageService.delete([imageUrl, optimisedUrl, thumbnailUrl])`
    - Featured limit: max 6 simultaneously featured gallery items
    - _Requirements: 6.1–6.9_

  - [ ]* 18.2 Write property tests for gallery reorder round-trip
    - **Property 8: Gallery item reorder persistence round-trip**
    - **Validates: Requirements 6.5** — for any list of gallery items and any permutation of their `displayOrder` values, after persisting the new order via `reorderItems()` and re-reading from the DB, items must be returned in the exact submitted order
    - Use `fc.array(fc.uuid(), { minLength: 1 })` to generate item IDs and `fc.shuffledSubarray()` for permutations; mock Prisma transaction
    - _Requirements: 6.5_

  - [ ] 18.3 Create Zod schema in `lib/validation/schemas/gallery.schema.ts` and API route handlers
    - `app/api/gallery/route.ts` — GET (`?category=&page=`), POST
    - `app/api/gallery/[id]/route.ts` — GET, PUT, DELETE
    - `app/api/gallery/reorder/route.ts` — POST (array of `{ id, displayOrder }`)
    - Handle bulk actions in `app/api/gallery/bulk/route.ts` for delete and category reassignment
    - _Requirements: 6.1–6.9_

- [ ] 19. Build the Gallery Manager UI
  - Create `app/admin/gallery/page.tsx` — grid view grouped by category, showing thumbnail, title, category, featured flag; Client Component for search and category filter
  - Create `app/admin/gallery/new/page.tsx` and `app/admin/gallery/[id]/edit/page.tsx` — form with title, category select, location, year, description, image upload
  - Implement drag-and-drop reordering within category using `@dnd-kit/core`; on drag-end POST to `/api/gallery/reorder`
  - Implement bulk selection checkboxes with batch delete (showing selected count + confirmation) and batch category reassignment
  - _Requirements: 6.1–6.9_

- [ ] 20. Implement the Programs Service and API routes
  - [ ] 20.1 Create `lib/services/programs.service.ts` with `listPrograms()`, `getProgram()`, `createProgram()`, `updateProgram()`, `deleteProgram()` (hard delete — programs table has no `deletedAt`), `reorderPrograms()`
    - Validate that `objectives` is a non-empty array of non-empty strings
    - `reorderPrograms()` writes in a single Prisma transaction
    - _Requirements: 7.1–7.8_

  - [ ] 20.2 Create Zod schema in `lib/validation/schemas/program.schema.ts` and API route handlers
    - Schema: title, category, status (`active | expanding | planned`), iconName (from Lucide set), tone (`blue | green`), summary (max 500 chars), objectives (array, min 1, each non-empty after trim), beneficiaries, coverage, leadUnit, bannerImageUrl (optional)
    - `app/api/programs/route.ts` — GET, POST
    - `app/api/programs/[id]/route.ts` — GET, PUT, DELETE
    - `app/api/programs/reorder/route.ts` — POST
    - _Requirements: 7.1–7.8_

- [ ] 21. Build the Programs Manager UI
  - Create `app/admin/programs/page.tsx` — list view with title, category, status badge, icon preview; Server Component for data
  - Create `app/admin/programs/new/page.tsx` and `app/admin/programs/[id]/edit/page.tsx` — form with title, category input, status select, icon selector (grid of Lucide icons), tone radio (`blue | green`), summary textarea (500-char counter), objectives list (add/remove dynamic rows, each validated non-empty), beneficiaries, coverage, lead unit, optional banner image upload
  - Implement drag-and-drop reordering using `@dnd-kit/core`; on drag-end POST to `/api/programs/reorder`
  - _Requirements: 7.1–7.8_

- [ ] 22. Checkpoint — Wave 4 complete
  - Run `npx vitest --run` — all tests must pass
  - Verify gallery reorder persistence and bulk delete confirmation flow with integration tests
  - Ask the user if questions arise before proceeding to Wave 5.

---

## Wave 5 — Contact Manager, Site Settings, Full Workflow Engine, System Audit Log

- [ ] 23. Implement the Contact Service and API routes
  - Create `lib/services/contact.service.ts` with `listSubmissions()`, `getSubmission()` (marks as read on retrieval), `deleteSubmission()` (soft-delete), `exportCsv()` (returns CSV string with name, email, subject, message, received date)
  - `exportCsv()` is accessible only to Super_Admin
  - Unread count query returns the count of `read = false AND deletedAt IS NULL` rows for the navigation badge
  - _Requirements: 8.1–8.4_

  - Create API route handlers:
    - `app/api/contact/route.ts` — GET (paginated, `?read=&page=`), includes unread count in response meta
    - `app/api/contact/[id]/route.ts` — GET (marks as read), DELETE
    - `app/api/contact/export/route.ts` — GET (Super_Admin only), returns `text/csv`
  - _Requirements: 8.1–8.4_

- [ ] 24. Implement the Site Settings service and API routes
  - Create `lib/services/settings.service.ts` with `getSettings()` and `updateSettings(key, value, actorId)`
  - `updateSettings()` validates: phone numbers via `validateNigerianPhone()`, email via `validateEmail()`, social media links as `z.string().url().startsWith('https://')`
  - Create `app/api/settings/route.ts` — GET (authenticated), PUT (Super_Admin only, validates all fields before saving)
  - _Requirements: 8.5–8.7_

- [ ] 25. Build the Contact Manager and Site Settings UI
  - Create `app/admin/contact/page.tsx` — paginated submissions list (Server Component) with sender name, email, subject, received date, read/unread badge; Client Component for read filter
  - Create `app/admin/contact/[id]/page.tsx` — submission detail showing full message; displays marked-as-read automatically
  - Add "Export CSV" button visible only to Super_Admin that triggers download from `/api/contact/export`
  - Create `app/admin/settings/page.tsx` (Super_Admin only) — settings form with phone fields, email field, address textarea, social media link inputs; client-side and server-side validation errors displayed per-field
  - Update admin sidebar to show unread contact badge (count fetched server-side on each layout render)
  - _Requirements: 8.1–8.8_

- [ ] 26. Wire up the full Workflow Engine and system Audit Log
  - Ensure `workflow.service.ts` `transition()` enforces all rows in the `VALID_TRANSITIONS` map and all role-permission rules from the design table
  - Verify email notifications: Editor → submits article → Super_Admin receives email; account locked → Super_Admin receives email
  - Create `app/admin/audit/page.tsx` (Super_Admin only) — system-wide Audit_Log view with filter controls: date range pickers, user dropdown, content type select, action type select; paginated table showing all fields
  - Create `app/api/audit/route.ts` — GET (Super_Admin only), supports `?from=&to=&actorId=&contentType=&action=&page=`
  - Add per-item audit history to `app/admin/projects/[id]/page.tsx`, `app/admin/gallery/[id]/page.tsx`, `app/admin/programs/[id]/page.tsx` (news already done in Wave 2)
  - _Requirements: 9.1–9.10_

- [ ] 27. Checkpoint — Wave 5 complete
  - Run `npx vitest --run` — all tests must pass
  - Verify workflow transitions, email notifications, CSV export, and audit log immutability with integration tests
  - Ask the user if questions arise before proceeding to Wave 6.

---

## Wave 6 — Public Data Layer Migration, E2E Tests, Production Config

- [ ] 28. Replace hardcoded data files with database-driven API calls
  - [ ] 28.1 Create public-facing API routes for read-only content
    - `app/api/public/news/route.ts` — returns published, non-deleted news articles (for public `/news` page)
    - `app/api/public/news/[slug]/route.ts` — returns a single published article by slug
    - `app/api/public/projects/route.ts` — returns all non-deleted projects
    - `app/api/public/gallery/route.ts` — returns all non-deleted gallery items ordered by `displayOrder`
    - `app/api/public/programs/route.ts` — returns all programs ordered by `displayOrder`
    - `app/api/public/settings/route.ts` — returns public site settings (phone, email, address, social links)
    - _Requirements: 8.7, 12.6_

  - [ ] 28.2 Update `app/news/page.tsx` to fetch data from `/api/public/news` (or direct Prisma call in RSC) instead of `app/data/news.ts`
    - Use `fetch` with `{ next: { revalidate: 60 } }` ISR strategy or direct Prisma in RSC
    - _Requirements: 12.6_

  - [ ] 28.3 Update `app/projects/page.tsx` to fetch from the database instead of `app/data/projects.ts`
    - _Requirements: 12.6_

  - [ ] 28.4 Update `app/gallery/page.tsx` to fetch from the database instead of `app/data/gallery.ts`
    - _Requirements: 12.6_

  - [ ] 28.5 Update `app/programs/page.tsx` to fetch from the database instead of `app/data/programs.ts`
    - _Requirements: 12.6_

  - [ ] 28.6 Update `app/page.tsx` (Home) and all components reading from `app/data/*.ts` to use database-driven data
    - Update `FeaturedNews`, `FeaturedProjects`, `FeaturedGallery` components to query the DB or call the public API
    - _Requirements: 12.6_

  - [ ] 28.7 Update `app/contact/page.tsx` `ContactFormSection` to POST submissions to a new `app/api/public/contact/route.ts` route that persists to `contact_submissions`
    - _Requirements: 12.6_

- [ ] 29. Write integration tests for Wave 6 public data layer
  - [ ]* 29.1 Write integration tests for the news public data pipeline
    - Seed articles with various statuses; verify only `published` and non-deleted articles are returned
    - Verify ISR revalidation is configured (check `revalidate` value or `cache: 'no-store'` for real-time)
    - _Requirements: 12.6, 12.7_

  - [ ]* 29.2 Write integration tests for contact form submission
    - POST to `/api/public/contact`; verify row created in `contact_submissions` with `read = false`
    - _Requirements: 12.6_

  - [ ]* 29.3 Write integration tests for site settings public visibility
    - Update a setting via admin API; verify it is reflected in the public settings endpoint without redeployment
    - _Requirements: 8.7_

- [ ] 30. Production deployment configuration
  - Add `IMAGE_STORE=s3` environment variable documentation and validate S3 adapter end-to-end in staging
  - Create `docker-compose.yml` for local development with a PostgreSQL container and environment variable defaults
  - Create `docker-compose.test.yml` for the integration test database
  - Add `npx prisma migrate deploy` to the production startup script / CI pipeline
  - Add `CRON_SECRET` to production environment and configure Vercel Cron (or equivalent) to call `GET /api/internal/cron` every minute
  - Update `next.config.ts` to configure `images.remotePatterns` for the S3 bucket domain
  - _Requirements: 10.10, 12.6_

- [ ] 31. Final checkpoint — Wave 6 complete, all systems go
  - Run `npx vitest --run` — all unit and property-based tests must pass
  - Run integration test suite against Docker Compose database: `npx vitest --run --config vitest.integration.config.ts`
  - Run `npx tsc --noEmit` — zero TypeScript errors
  - Run `npx next build` — production build succeeds with no errors
  - Verify that all 14 correctness properties have passing tests
  - Ask the user if any final questions or adjustments are needed.

---

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP, but all 14 correctness properties should be covered before production
- Each wave has a checkpoint task that must pass before proceeding to the next wave (Requirement 12.7)
- Property tests use `fast-check` and run via `npx vitest --run` (no DB required for pure-function properties)
- Integration tests require Docker Compose PostgreSQL; run with `npx vitest --run --config vitest.integration.config.ts`
- The `withErrorHandler` HOF must wrap all Route Handlers to ensure consistent error response envelopes
- Soft-delete is enforced globally via Prisma query extension — always filter `deletedAt IS NULL`
- The Prisma singleton in `lib/prisma.ts` verifies the DB connection on startup and exits on failure
- Wave 1 ships a fully secured admin portal; content managers cannot break the public site until Wave 6

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1", "2"] },
    { "id": 1, "tasks": ["3.1", "3.3", "3.5", "3.7", "3.8"] },
    { "id": 2, "tasks": ["3.2", "3.4", "3.6", "3.9", "3.10", "4.1"] },
    { "id": 3, "tasks": ["4.2"] },
    { "id": 4, "tasks": ["4.3", "4.4", "5"] },
    { "id": 5, "tasks": ["5.1", "6", "7"] },
    { "id": 6, "tasks": ["9.1", "10"] },
    { "id": 7, "tasks": ["9.2", "9.3", "11", "12"] },
    { "id": 8, "tasks": ["9.4", "12.1", "13"] },
    { "id": 9, "tasks": ["15.1", "15.3"] },
    { "id": 10, "tasks": ["15.2", "15.4", "16"] },
    { "id": 11, "tasks": ["18.1", "20.1"] },
    { "id": 12, "tasks": ["18.2", "18.3", "19", "20.2"] },
    { "id": 13, "tasks": ["21", "23", "24"] },
    { "id": 14, "tasks": ["25", "26"] },
    { "id": 15, "tasks": ["28.1"] },
    { "id": 16, "tasks": ["28.2", "28.3", "28.4", "28.5", "28.6", "28.7"] },
    { "id": 17, "tasks": ["29.1", "29.2", "29.3", "30"] }
  ]
}
```
