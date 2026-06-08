# Design Document: CMS Admin Portal – Phase 2

## Overview

Phase 2 transforms the Gombe State RUWASA website from a static Next.js application with hardcoded `app/data/*.ts` files into a fully database-backed system with a secure Admin Portal at `/admin/*`. The public-facing site remains unchanged in appearance; the CMS layer sits entirely behind authentication and replaces the static data layer transparently.

The design follows a monolithic Next.js 15 deployment model: the public website, the Admin Portal UI, and the REST API all live in the same Next.js application and share a single deployment. This avoids operational complexity and aligns with the small team's capability.

### Key design decisions

- **Single Next.js app** — no separate backend service. API Route Handlers in `app/api/*` serve the admin frontend. Public pages move from static imports to `fetch`/Prisma calls at request time or via ISR.
- **Prisma + PostgreSQL** — type-safe queries, migration tooling, and schema-as-code for a TypeScript codebase.
- **Server-side sessions** — JWT-less approach using a `sessions` table and an `HttpOnly` cookie, avoiding client-side token exposure.
- **Zod validation everywhere** — all API inputs validated before any DB write; validation schemas are pure functions, enabling property-based testing.
- **Soft-delete by convention** — all content tables include `deleted_at`; Prisma queries filter `deleted_at IS NULL` by default via a global query extension.
- **Image pipeline** — local `public/uploads/` in development; environment-variable-driven S3-compatible adapter in production. Sharp handles resizing.

---

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    Next.js 15 Application                        │
│                                                                 │
│  ┌──────────────┐    ┌─────────────────────────────────────┐   │
│  │ Public Pages │    │          Admin Portal                │   │
│  │  /           │    │  /admin/*  (RSC + Client Components) │   │
│  │  /news       │    │                                      │   │
│  │  /projects   │    │  ┌──────────┐  ┌───────────────┐    │   │
│  │  /gallery    │    │  │  Auth    │  │  Content      │    │   │
│  │  /programs   │    │  │  Guards  │  │  Managers     │    │   │
│  │  /contact    │    │  └──────────┘  └───────────────┘    │   │
│  └──────┬───────┘    └──────────────────────┬──────────────┘   │
│         │                                   │                   │
│         └──────────────┬────────────────────┘                  │
│                        │                                        │
│  ┌─────────────────────▼──────────────────────────────────┐    │
│  │              app/api/*  (Route Handlers)                │    │
│  │                                                        │    │
│  │  /api/auth/*   /api/news/*   /api/projects/*           │    │
│  │  /api/gallery/*  /api/programs/*  /api/contact/*       │    │
│  │  /api/users/*  /api/settings/*  /api/audit/*           │    │
│  │  /api/upload                                           │    │
│  └─────────────────────┬──────────────────────────────────┘    │
│                        │                                        │
│  ┌─────────────────────▼──────────────────────────────────┐    │
│  │               Service Layer  (lib/services/*)           │    │
│  │                                                        │    │
│  │  AuthService  ContentService  ImageService             │    │
│  │  WorkflowEngine  AuditService  SettingsService         │    │
│  └─────────────────────┬──────────────────────────────────┘    │
│                        │                                        │
│  ┌─────────────────────▼──────────────────────────────────┐    │
│  │               Prisma Client  (lib/prisma.ts)            │    │
│  └─────────────────────┬──────────────────────────────────┘    │
│                        │                                        │
└────────────────────────┼────────────────────────────────────────┘
                         │
           ┌─────────────▼─────────────┐
           │   PostgreSQL Database      │
           └───────────────────────────┘
                         
           ┌───────────────────────────┐
           │   Image Store             │
           │   Dev:  public/uploads/   │
           │   Prod: S3-compatible     │
           └───────────────────────────┘
```

### Directory layout additions

```
app/
  admin/                        ← Admin Portal (protected layout)
    layout.tsx                  ← session guard, sidebar, nav
    page.tsx                    ← Dashboard
    news/
    projects/
    gallery/
    programs/
    contact/
    settings/
    users/
    audit/
  api/
    auth/
      login/route.ts
      logout/route.ts
      me/route.ts
      password-reset/route.ts
    news/
      route.ts                  ← GET list, POST create
      [id]/route.ts             ← GET, PUT, DELETE
      [id]/workflow/route.ts    ← POST state transitions
    projects/route.ts  [id]/route.ts
    gallery/route.ts   [id]/route.ts
    programs/route.ts  [id]/route.ts
    contact/route.ts   [id]/route.ts
    users/route.ts     [id]/route.ts
    settings/route.ts
    audit/route.ts
    upload/route.ts

lib/
  prisma.ts                     ← Prisma singleton
  auth.ts                       ← session helpers
  services/
    auth.service.ts
    news.service.ts
    projects.service.ts
    gallery.service.ts
    programs.service.ts
    contact.service.ts
    workflow.service.ts
    audit.service.ts
    image.service.ts
    settings.service.ts
  validation/
    slugValidator.ts            ← pure function
    progressValidator.ts        ← pure function
    phoneValidator.ts           ← pure function
    htmlSanitizer.ts            ← pure function
    emailValidator.ts           ← pure function
    schemas/                    ← Zod schemas per content type
  email/
    mailer.ts                   ← nodemailer / SMTP adapter

prisma/
  schema.prisma
  migrations/
  seed.ts

public/
  uploads/                      ← dev image store

__tests__/
  unit/
  property/                     ← PBT suites
  integration/
```

---

## Components and Interfaces

### Middleware — `middleware.ts`

A Next.js middleware runs on every `/admin/*` and `/api/*` request. It reads the session cookie, validates the session against the `sessions` table, attaches the user object to request headers (`x-user-id`, `x-user-role`), and redirects unauthenticated users to `/admin/login`. Role-based access is enforced at both the middleware level (coarse-grained) and within individual Route Handlers (fine-grained).

```typescript
// Coarse-grained role matrix used by middleware
const ROUTE_ROLE_MAP: Record<string, Role[]> = {
  '/admin/users':    ['Super_Admin'],
  '/admin/settings': ['Super_Admin'],
  '/admin/audit':    ['Super_Admin'],
  '/api/users':      ['Super_Admin'],
  '/api/settings':   ['Super_Admin'],
};
```

### Auth Service — `lib/services/auth.service.ts`

Responsible for credential verification, session lifecycle, password hashing, rate-limiting, and password reset tokens.

```typescript
interface AuthService {
  login(email: string, password: string): Promise<SessionToken | AuthError>;
  logout(sessionId: string): Promise<void>;
  getSession(sessionId: string): Promise<Session | null>;
  touchSession(sessionId: string): Promise<void>;            // resets 60-min idle timer
  createUser(data: CreateUserInput): Promise<User>;
  requestPasswordReset(email: string): Promise<void>;
  resetPassword(token: string, newPassword: string): Promise<void>;
  recordFailedAttempt(email: string): Promise<void>;         // triggers lockout at 5
  deactivateUser(userId: string): Promise<void>;
}
```

The session cookie is `HttpOnly; Secure; SameSite=Lax` with a random 256-bit session ID stored in the `sessions` table. No JWT is used.

### Workflow Engine — `lib/services/workflow.service.ts`

Enforces valid state transitions and emits audit log entries on every transition.

```typescript
type ArticleStatus = 'draft' | 'review' | 'scheduled' | 'published' | 'deleted';

const VALID_TRANSITIONS: Record<ArticleStatus, ArticleStatus[]> = {
  draft:     ['review', 'deleted'],
  review:    ['draft', 'published', 'scheduled'],
  scheduled: ['published', 'draft'],
  published: ['draft'],
  deleted:   [],
};

interface WorkflowService {
  transition(
    articleId: string,
    targetState: ArticleStatus,
    actor: User,
    options?: { scheduledAt?: Date; rejectionReason?: string }
  ): Promise<NewsArticle>;
  
  processScheduled(): Promise<void>; // called by cron/timer
}
```

### Image Service — `lib/services/image.service.ts`

Abstracts over local filesystem and S3-compatible storage via an adapter pattern.

```typescript
interface ImageAdapter {
  save(filename: string, buffer: Buffer): Promise<string>;   // returns public URL
  delete(url: string): Promise<void>;
}

interface ImageService {
  upload(file: File, options: UploadOptions): Promise<ImageResult>;
  // options.maxDimension, options.thumbnailDimension, options.maxBytes
  // Returns: { originalUrl, optimisedUrl, thumbnailUrl }
  delete(urls: string[]): Promise<void>;
}
```

Sharp is used for resizing and format conversion. The adapter is selected at startup based on `IMAGE_STORE` environment variable (`local` | `s3`).

### Audit Service — `lib/services/audit.service.ts`

```typescript
interface AuditService {
  log(entry: AuditEntry): Promise<void>;
  query(filters: AuditFilters): Promise<PaginatedResult<AuditEntry>>;
  // Audit records are never deleted or updated — only insert and select
}
```

### Validation Pure Functions — `lib/validation/*.ts`

All validators are stateless pure functions exported individually, making them directly importable in property-based tests.

```typescript
// slugValidator.ts
export function validateSlug(input: string): ValidationResult;
export function generateSlug(title: string): string;

// progressValidator.ts
export function validateProgress(value: number): ValidationResult;

// phoneValidator.ts
export function validateNigerianPhone(value: string): ValidationResult;

// htmlSanitizer.ts
export function sanitizeHtml(input: string): string;

// emailValidator.ts
export function validateEmail(value: string): ValidationResult;
```

---

## Data Models

### Prisma Schema

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ─── Enums ───────────────────────────────────────────────────────────────────

enum Role {
  Super_Admin
  Editor
  Viewer
}

enum ArticleStatus {
  draft
  review
  scheduled
  published
  deleted
}

enum ProjectStatus {
  planned
  ongoing
  completed
}

enum ProgramStatus {
  active
  expanding
  planned
}

enum Tone {
  blue
  green
}

// ─── Users & Sessions ────────────────────────────────────────────────────────

model User {
  id               String    @id @default(uuid())
  fullName         String
  email            String    @unique
  passwordHash     String
  role             Role
  active           Boolean   @default(true)
  failedAttempts   Int       @default(0)
  lockedAt         DateTime?
  createdById      String?
  createdAt        DateTime  @default(now())
  updatedAt        DateTime  @updatedAt

  createdBy        User?     @relation("CreatedByRelation", fields: [createdById], references: [id])
  createdUsers     User[]    @relation("CreatedByRelation")
  sessions         Session[]
  auditLogs        AuditLog[]
}

model Session {
  id        String   @id @default(uuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  expiresAt DateTime
  createdAt DateTime @default(now())
  lastSeen  DateTime @default(now())
}

model PasswordResetToken {
  id        String   @id @default(uuid())
  userId    String
  tokenHash String   @unique
  usedAt    DateTime?
  expiresAt DateTime
  createdAt DateTime @default(now())
}

// ─── News ─────────────────────────────────────────────────────────────────────

model NewsCategory {
  id       String         @id @default(uuid())
  name     String         @unique
  articles NewsArticle[]
}

model NewsTag {
  id       String        @id @default(uuid())
  name     String        @unique
  articles ArticleTag[]
}

model ArticleTag {
  articleId String
  tagId     String
  article   NewsArticle @relation(fields: [articleId], references: [id])
  tag       NewsTag     @relation(fields: [tagId], references: [id])
  @@id([articleId, tagId])
}

model NewsArticle {
  id               String        @id @default(uuid())
  slug             String        @unique
  title            String
  categoryId       String
  category         NewsCategory  @relation(fields: [categoryId], references: [id])
  excerpt          String
  body             String
  featuredImageUrl String
  thumbnailUrl     String
  status           ArticleStatus @default(draft)
  featured         Boolean       @default(false)
  scheduledAt      DateTime?
  publishedAt      DateTime?
  createdById      String
  updatedById      String
  createdAt        DateTime      @default(now())
  updatedAt        DateTime      @updatedAt
  deletedAt        DateTime?

  tags             ArticleTag[]
}

// ─── Projects ────────────────────────────────────────────────────────────────

model ProjectType {
  id       String    @id @default(uuid())
  name     String    @unique
  projects Project[]
}

model Project {
  id               String        @id @default(uuid())
  title            String
  lga              String
  community        String
  typeId           String
  projectType      ProjectType   @relation(fields: [typeId], references: [id])
  status           ProjectStatus @default(planned)
  year             Int
  progress         Int           @default(0)
  beneficiaries    Int
  description      String
  featuredImageUrl String
  thumbnailUrl     String
  featured         Boolean       @default(false)
  completionDate   DateTime?
  createdById      String
  updatedById      String
  createdAt        DateTime      @default(now())
  updatedAt        DateTime      @updatedAt
  deletedAt        DateTime?
}

// ─── Gallery ──────────────────────────────────────────────────────────────────

model GalleryCategory {
  id    String        @id @default(uuid())
  name  String        @unique
  items GalleryItem[]
}

model GalleryItem {
  id           String          @id @default(uuid())
  title        String
  categoryId   String
  category     GalleryCategory @relation(fields: [categoryId], references: [id])
  location     String
  year         Int
  description  String
  imageUrl     String
  optimisedUrl String
  thumbnailUrl String
  featured     Boolean         @default(false)
  displayOrder Int
  createdById  String
  updatedById  String
  createdAt    DateTime        @default(now())
  updatedAt    DateTime        @updatedAt
  deletedAt    DateTime?
}

// ─── Programs ────────────────────────────────────────────────────────────────

model Program {
  id             String        @id @default(uuid())
  title          String
  category       String
  status         ProgramStatus @default(active)
  iconName       String
  tone           Tone          @default(blue)
  summary        String
  objectives     Json          // string[]
  beneficiaries  String
  coverage       String
  leadUnit       String
  bannerImageUrl String?
  displayOrder   Int
  createdById    String
  updatedById    String
  createdAt      DateTime      @default(now())
  updatedAt      DateTime      @updatedAt
}

// ─── Contact ──────────────────────────────────────────────────────────────────

model ContactSubmission {
  id          String   @id @default(uuid())
  name        String
  email       String
  subject     String
  message     String
  read        Boolean  @default(false)
  createdAt   DateTime @default(now())
  deletedAt   DateTime?
}

// ─── Site Settings ───────────────────────────────────────────────────────────

model SiteSetting {
  key       String   @id
  value     String
  updatedById String
  updatedAt DateTime @updatedAt
}

// ─── Audit Log ───────────────────────────────────────────────────────────────

model AuditLog {
  id            String   @id @default(uuid())
  contentType   String
  contentId     String
  action        String
  actorId       String
  actor         User     @relation(fields: [actorId], references: [id])
  previousState Json?
  newState      Json?
  createdAt     DateTime @default(now())
}
```

---

## API Route Structure

All API routes follow REST conventions. Every route handler validates the session cookie, enforces role permissions, validates the payload with Zod, calls the appropriate service, and returns a typed JSON response.

### Response envelope

```typescript
// Success
{ "data": <payload>, "meta"?: { "page": 1, "pageSize": 20, "total": 145 } }

// Error
{ "error": { "code": "VALIDATION_ERROR", "message": "...", "fields"?: { "slug": "already taken" } } }
```

### HTTP status conventions

| Situation | Status |
|---|---|
| Successful read | 200 |
| Successful create | 201 |
| Validation failure | 422 |
| Duplicate slug / conflict | 409 |
| Unauthenticated | 401 |
| Forbidden (role) | 403 |
| Not found | 404 |
| Server error | 500 |

### Route inventory

```
Auth
  POST   /api/auth/login
  POST   /api/auth/logout
  GET    /api/auth/me
  POST   /api/auth/password-reset/request
  POST   /api/auth/password-reset/confirm

Users (Super_Admin only)
  GET    /api/users                    list + pagination
  POST   /api/users                    create
  GET    /api/users/[id]
  PUT    /api/users/[id]
  DELETE /api/users/[id]               deactivate (soft)

News
  GET    /api/news                     list, supports ?status=&category=&search=&page=
  POST   /api/news                     create (Editor+)
  GET    /api/news/[id]
  PUT    /api/news/[id]                update (Editor+)
  DELETE /api/news/[id]                soft-delete (Editor+)
  POST   /api/news/[id]/workflow       state transition (Super_Admin for approve/reject/schedule)

Projects
  GET    /api/projects                 list, supports ?lga=&type=&status=&year=&page=
  POST   /api/projects
  GET    /api/projects/[id]
  PUT    /api/projects/[id]
  DELETE /api/projects/[id]

Gallery
  GET    /api/gallery                  list, supports ?category=&page=
  POST   /api/gallery
  GET    /api/gallery/[id]
  PUT    /api/gallery/[id]
  DELETE /api/gallery/[id]
  POST   /api/gallery/reorder          bulk display_order update

Programs
  GET    /api/programs
  POST   /api/programs
  GET    /api/programs/[id]
  PUT    /api/programs/[id]
  DELETE /api/programs/[id]
  POST   /api/programs/reorder

Contact
  GET    /api/contact                  list, supports ?read=&page=
  GET    /api/contact/[id]
  DELETE /api/contact/[id]
  GET    /api/contact/export           CSV download (Super_Admin)

Settings
  GET    /api/settings                 (authenticated)
  PUT    /api/settings                 (Super_Admin)

Audit
  GET    /api/audit                    system-wide log (Super_Admin)
  GET    /api/news/[id]/audit          per-item log
  GET    /api/projects/[id]/audit
  (similar for other content types)

Upload
  POST   /api/upload                   multipart/form-data; returns { originalUrl, optimisedUrl, thumbnailUrl }
```

---

## Authentication and Session Design

### Login flow

```
Client                    Route Handler             DB
  │  POST /api/auth/login   │                        │
  │  { email, password }   │                        │
  ├───────────────────────►│                        │
  │                        │── findUser(email) ────►│
  │                        │◄── user record ────────│
  │                        │                        │
  │                        │  bcrypt.compare()      │
  │                        │  (cost ≥ 12)           │
  │                        │                        │
  │                        │── recordAttempt() ────►│
  │                        │  (reset on success,    │
  │                        │   increment on fail)   │
  │                        │                        │
  │                        │── createSession() ────►│
  │◄── Set-Cookie: sid=... │                        │
  │    HttpOnly;Secure     │                        │
```

### Session validation (middleware)

Every request to `/admin/*` or `/api/*` (except `/api/auth/login`) runs through `middleware.ts`:

1. Read `sid` cookie
2. `SELECT * FROM sessions WHERE id = $sid AND expires_at > NOW()`
3. If missing or expired → 401/redirect
4. `UPDATE sessions SET last_seen = NOW()` (sliding 60-min window)
5. If `last_seen` + 60 min < NOW() → delete session, 401
6. Attach user role to request header

### Password reset flow

1. `POST /api/auth/password-reset/request` — generates a random 256-bit token, stores its SHA-256 hash in `password_reset_tokens`, emails the plain token link to the user (24-hour expiry).
2. `POST /api/auth/password-reset/confirm` — accepts token + new password, validates token hash, checks expiry and `used_at IS NULL`, hashes new password, saves, marks token as used.

### Rate limiting and lockout

Implemented in `AuthService.recordFailedAttempt()`:
- Increments `users.failed_attempts` and stores timestamp in memory (Redis if available, otherwise in-process LRU cache keyed by email) to check the 10-minute window.
- At 5 failures: sets `users.locked_at = NOW()`, sends email to all Super_Admin accounts.
- On successful login: resets `users.failed_attempts = 0`, clears `locked_at`.

---

## Image Upload Pipeline

```
Client uploads file
  │
  ▼
POST /api/upload
  │  Validate: mime type (image/jpeg, image/png, image/webp)
  │  Validate: file size ≤ maxBytes (5 MB news, 10 MB gallery)
  │
  ▼
ImageService.upload(file, options)
  │
  ├── Sharp: decode input buffer
  │
  ├── Generate original (save as-is for news; save as-is for gallery)
  │
  ├── Generate optimised (gallery only):
  │   resize to max 1920px on longest side, convert to WebP
  │
  ├── Generate thumbnail:
  │   resize to max 400px on longest side, convert to WebP
  │
  ├── Generate filename: {uuid}.{ext} / {uuid}-opt.webp / {uuid}-thumb.webp
  │
  ▼
ImageAdapter.save(filename, buffer)
  │
  ├── LOCAL:  write to public/uploads/{filename}
  │           return URL: /uploads/{filename}
  │
  └── S3:     PutObject to configured bucket
              return URL: https://{bucket}.{endpoint}/{filename}
  │
  ▼
Return { originalUrl, optimisedUrl, thumbnailUrl }
```

The adapter is selected once at cold-start based on `process.env.IMAGE_STORE`:

```typescript
// lib/services/image.service.ts
const adapter: ImageAdapter =
  process.env.IMAGE_STORE === 's3'
    ? new S3Adapter({
        endpoint: process.env.S3_ENDPOINT!,
        bucket:   process.env.S3_BUCKET!,
        region:   process.env.S3_REGION!,
        accessKey: process.env.S3_ACCESS_KEY!,
        secretKey: process.env.S3_SECRET_KEY!,
      })
    : new LocalAdapter({ uploadDir: path.join(process.cwd(), 'public/uploads') });
```

---

## Content Workflow Engine Design

### State machine

```
              ┌─────────┐
              │  Draft  │◄──────────────────────────┐
              └────┬────┘                           │
                   │  Editor submits                │ Super_Admin rejects
                   ▼                               │
              ┌─────────┐                          │
              │ Review  │──────────────────────────┘
              └────┬────┘
                   │  Super_Admin approves  │ Super_Admin schedules
                   ▼                       ▼
            ┌───────────┐          ┌───────────┐
            │ Published │          │ Scheduled │
            └─────┬─────┘          └─────┬─────┘
                  │ Unpublish            │ scheduledAt reached (cron)
                  ▼                     ▼
              ┌─────────┐         ┌───────────┐
              │  Draft  │         │ Published │
              └─────────┘         └───────────┘
```

### Scheduled publishing

A lightweight cron job runs every minute (via `setInterval` in a Next.js Route Handler warmed by a cron service, or via Vercel Cron / GitHub Actions ping):

```typescript
// app/api/internal/cron/route.ts  (secured by CRON_SECRET header)
export async function GET() {
  await workflowService.processScheduled();
  // SELECT * FROM news_articles WHERE status='scheduled' AND scheduled_at <= NOW()
  // For each: transition to 'published', log audit entry
  return Response.json({ processed: count });
}
```

### Workflow transitions and permissions

| From | To | Allowed roles |
|---|---|---|
| draft | review | Editor, Super_Admin |
| review | published | Super_Admin |
| review | scheduled | Super_Admin |
| review | draft | Super_Admin |
| scheduled | published | System (cron) |
| scheduled | draft | Super_Admin |
| published | draft | Super_Admin |
| any | deleted | Super_Admin |

Every transition writes an `AuditLog` entry with `previousState` = old status, `newState` = new status.

---

## Admin Portal UI Structure

The admin portal uses a protected layout at `app/admin/layout.tsx` that renders a persistent sidebar and top navigation. All admin pages are React Server Components where possible, with Client Components only for interactive elements (forms, drag-and-drop, real-time search).

### Navigation structure

```
Sidebar
  ├── Dashboard          /admin
  ├── News               /admin/news
  ├── Projects           /admin/projects
  ├── Gallery            /admin/gallery
  ├── Programs           /admin/programs
  ├── Contact    [badge] /admin/contact
  ├── ── Super_Admin only ──
  ├── Users              /admin/users
  ├── Site Settings      /admin/settings
  └── Audit Log          /admin/audit
```

### Page patterns

**List pages** (News, Projects, Gallery, Programs, Contact):
- Server-rendered table/grid fetching data via Prisma directly in the RSC
- Client Component wrapper for search/filter controls (controlled inputs calling `/api/*`)
- Pagination with query-string state
- Action buttons (Edit, Delete, Publish) invoke Route Handlers via `fetch`; page revalidates via `router.refresh()`

**Detail/Edit pages**:
- Server Component loads existing record
- Client-side form (`react-hook-form`) with Zod resolver for client-side validation mirroring server-side schemas
- `FormData` / JSON `fetch` to the appropriate Route Handler on submit
- Toast notifications (sonner or similar) for success/error feedback

**Dashboard**:
- Server Component that runs parallel Prisma queries for each summary count
- Renders static summary cards, recent activity list
- No client-side polling; refresh on navigation

### Drag-and-drop ordering

Gallery and Programs use the `@dnd-kit/core` library for drag-and-drop reordering. On drag-end, the client sends a `POST /api/gallery/reorder` or `POST /api/programs/reorder` with the full ordered array of `{ id, displayOrder }` pairs. The server writes all updates in a single Prisma transaction.

---

## Correctness Properties

### Property 1: Invalid credentials never produce a session

*For any* (email, password) pair that does not match a valid active account in the database, the `AuthService.login()` function must return an error result and must not create a session record.

**Validates: Requirements 1.3**

---

### Property 2: Account lockout triggers after five consecutive failures

*For any* valid user account, after exactly five consecutive failed login attempts within a 10-minute window, the sixth attempt must return a "locked" error regardless of whether the submitted credentials are correct.

**Validates: Requirements 1.10**

---

### Property 3: Role-based access control — forbidden for all unauthorized roles

*For any* protected Admin Portal route and *for any* user role that is not listed as permitted for that route, the middleware must return HTTP 403. This must hold for all (route, role) combinations, not just specific examples.

**Validates: Requirements 3.5**

---

### Property 4: Slug generator always produces pattern-conforming output

*For any* non-empty article title string (including titles with Unicode characters, numbers, punctuation, and mixed case), the `generateSlug()` function must return a string that matches `^[a-z0-9]+(?:-[a-z0-9]+)*$` — i.e., lowercase alphanumeric segments separated by single hyphens, no leading or trailing hyphens.

**Validates: Requirements 4.3**

---

### Property 5: Featured news count invariant — count never exceeds 3

*For any* sequence of feature/unfeature operations applied to a set of news articles, the count of articles with `featured = true` and `status = published` must never exceed 3 at any point. When a fourth article is featured, the oldest featured article must be automatically unfeatured.

**Validates: Requirements 4.8**

---

### Property 6: Project status determines progress boundary

*For any* project record, (a) setting `status` to `"completed"` must result in `progress === 100` regardless of the prior progress value, and (b) setting `status` to `"planned"` must result in `progress === 0` regardless of the prior progress value.

**Validates: Requirements 5.5, 5.6**

---

### Property 7: Progress validator accepts exactly [0, 100] and rejects all others

*For any* integer value `n`, `validateProgress(n)` must return a passing result if and only if `0 ≤ n ≤ 100`. For all integers outside this range, it must return a failing result. For all non-integer inputs, it must return a failing result.

**Validates: Requirements 5.7, 11.5**

---

### Property 8: Gallery item reorder persistence round-trip

*For any* list of gallery items within a category and *for any* permutation of their `displayOrder` values, after persisting the new order via the reorder API and re-reading the items from the database, the items must be returned in the exact order submitted.

**Validates: Requirements 6.5**

---

### Property 9: Nigerian phone number validator correctness

*For any* string that is exactly 11 characters long and starts with `'0'` and contains only digits, `validateNigerianPhone()` must return a passing result. *For any* string that does NOT satisfy all three conditions, it must return a failing result.

**Validates: Requirements 8.6, 11.7**

---

### Property 10: Slug validator accepts only pattern-conforming strings

*For any* string, `validateSlug()` must return a passing result if and only if the string matches `^[a-z0-9]+(?:-[a-z0-9]+)*$`. Strings with uppercase letters, leading/trailing hyphens, consecutive hyphens, spaces, or special characters must all be rejected.

**Validates: Requirements 11.3**

---

### Property 11: HTML sanitizer removes disallowed tags and preserves allowed ones

*For any* HTML string, `sanitizeHtml()` must produce output that (a) contains no disallowed HTML tags or attributes, and (b) preserves all content within the allowed tag set (`p`, `br`, `strong`, `em`, `ul`, `ol`, `li`, `a`, `h2`, `h3`, `blockquote`). No `<script>`, `<style>`, event handler attributes, or `javascript:` URIs may appear in the output.

**Validates: Requirements 11.8**

---

### Property 12: Whitespace trimming invariant

*For any* user-submitted string field value, the value stored in the database after a successful API write must equal `input.trim()` — i.e., all leading and trailing whitespace must be removed, regardless of how much whitespace is present.

**Validates: Requirements 11.9**

---

### Property 13: Audit log entry completeness

*For any* content action (create, update, state transition, delete) performed through the API, the `AuditLog` entry produced must contain non-null values for all required fields: `contentType`, `contentId`, `action`, `actorId`, `createdAt`, and must contain valid JSON for `previousState` and `newState` (both may be `null` for create and hard-delete respectively, but must be present as fields).

**Validates: Requirements 9.7**

---

### Property 14: Audit log is immutable for all user roles

*For any* user with any role (Super_Admin, Editor, or Viewer), any attempt to delete or modify an audit log record via the API must be rejected with HTTP 403 or 405. There is no route or service method that permits mutation of `AuditLog` records.

**Validates: Requirements 9.10**

---

## Error Handling

### API-level error handling

Every Route Handler is wrapped in a `withErrorHandler` higher-order function that catches unhandled exceptions and returns a consistent `{ error: { code, message } }` JSON response:

```typescript
export function withErrorHandler(
  handler: (req: Request, ctx: RouteContext) => Promise<Response>
) {
  return async (req: Request, ctx: RouteContext): Promise<Response> => {
    try {
      return await handler(req, ctx);
    } catch (err) {
      if (err instanceof ZodError) {
        return Response.json(
          { error: { code: 'VALIDATION_ERROR', fields: err.flatten().fieldErrors } },
          { status: 422 }
        );
      }
      if (err instanceof PrismaClientKnownRequestError && err.code === 'P2002') {
        return Response.json(
          { error: { code: 'CONFLICT', message: 'Duplicate value for unique field' } },
          { status: 409 }
        );
      }
      console.error(err);
      return Response.json(
        { error: { code: 'INTERNAL_ERROR', message: 'An unexpected error occurred' } },
        { status: 500 }
      );
    }
  };
}
```

### Database connection failure

Prisma client is instantiated as a singleton in `lib/prisma.ts`. On first import the connection is tested; if it fails the error is logged and the process exits (per Requirement 10.11):

```typescript
// lib/prisma.ts
const prisma = new PrismaClient();

async function verifyConnection() {
  try {
    await prisma.$queryRaw`SELECT 1`;
  } catch (err) {
    console.error('FATAL: Database connection failed', err);
    process.exit(1);
  }
}

if (process.env.NODE_ENV !== 'test') {
  verifyConnection();
}

export default prisma;
```

### Image upload errors

- File exceeds size limit → 422 with `{ code: 'FILE_TOO_LARGE' }`
- Unsupported MIME type → 422 with `{ code: 'UNSUPPORTED_FILE_TYPE' }`
- Storage write failure (disk full, S3 error) → 500, original error logged server-side only

### Workflow transition errors

Attempting an invalid state transition (e.g., `published → review`) returns 422 with `{ code: 'INVALID_TRANSITION', message: 'Cannot transition from published to review' }`.

### Email delivery failures

Email sending (password reset, lockout notification) is non-blocking. Failures are logged but do not cause the primary operation to fail. A dead-letter queue or retry mechanism can be added in a later wave.

---

## Testing Strategy

### Overview

Testing uses the **dual approach**: example-based unit/integration tests for concrete scenarios and property-based tests for universal correctness guarantees.

**Test runner:** Vitest (zero-config with Next.js + TypeScript)  
**PBT library:** fast-check (TypeScript-native, runs in Vitest)  
**Integration tests:** Vitest + `@prisma/client` against a test PostgreSQL database (Docker Compose)  
**HTTP-level tests:** `node:test` or Vitest with `msw` (Mock Service Worker) for API route handlers

### Unit tests (example-based)

Focus areas:
- Specific login/logout flows (correct credentials, wrong password, locked account)
- Workflow transitions: each valid and invalid transition path
- Featured count enforcement with concrete sequences
- Scheduled publishing logic with mock dates
- CSV export format correctness
- Dashboard summary counts with seeded data
- Image adapter: local write/delete, mock S3 write/delete

### Property-based tests — `__tests__/property/`

A property is a characteristic or behavior that should hold true across all valid executions of a system — a formal statement about what the software is supposed to do. Property-based tests use **fast-check** (TypeScript-native PBT library). Each property test runs a minimum of 100 iterations.

Each property from the Correctness Properties section is implemented as a single fast-check `fc.assert(fc.property(...))` test running ≥ 100 iterations.

Tag format for each test: `// Feature: cms-admin-phase2, Property {N}: {property_title}`

Targeted properties and the fast-check arbitraries used:

| Property | fast-check arbitrary |
|---|---|
| P1 — invalid credentials no session | `fc.emailAddress()`, `fc.string()` |
| P2 — lockout after 5 failures | `fc.integer({ min: 5, max: 20 })` for attempt count |
| P3 — RBAC forbidden | `fc.constantFrom(...routes)`, `fc.constantFrom(...roles)` |
| P4 — slug generator output | `fc.string({ minLength: 1 })` |
| P5 — featured count invariant | `fc.array(fc.boolean(), { minLength: 1, maxLength: 20 })` |
| P6 — project status→progress | `fc.constantFrom('completed', 'planned')`, `fc.integer({ min: 0, max: 100 })` |
| P7 — progress validator | `fc.integer()` (full integer space) |
| P8 — gallery reorder round-trip | `fc.array(fc.uuid(), { minLength: 1 })` + `fc.shuffledSubarray(...)` |
| P9 — phone validator | `fc.string()` (arbitrary) + `fc.stringMatching(/^0\d{10}$/)` (valid) |
| P10 — slug validator | `fc.string()` (arbitrary) + `fc.stringMatching(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)` (valid) |
| P11 — HTML sanitizer | `fc.string()` with injected script/event tags |
| P12 — whitespace trimming | `fc.string()` with `fc.string()` prepended/appended whitespace |
| P13 — audit log completeness | `fc.constantFrom(...contentTypes)`, `fc.constantFrom(...actions)` |
| P14 — audit log immutability | `fc.constantFrom('Super_Admin', 'Editor', 'Viewer')` |

### Integration tests

Run against a Docker Compose PostgreSQL instance with the test schema migrated via `prisma migrate deploy`:
- Full login → session → API request → DB state cycle
- Slug uniqueness constraint (create two articles with same slug)
- Soft-delete: deleted items not returned in list queries
- Scheduled publish: advance mock clock, verify cron processes item
- CSV export: verify structure and encoding of output

### Wave-by-wave testing requirement

Per Requirement 12.7, each wave must pass all its tests before the next wave begins. The CI pipeline runs `vitest --run` (unit + property) and the integration test suite in sequence.

### Running tests

```bash
# Unit + property tests (no DB required)
npx vitest --run

# Integration tests (requires Docker Compose)
docker compose up -d postgres
npx prisma migrate deploy
npx vitest --run --config vitest.integration.config.ts

# Type checking
npx tsc --noEmit
```
