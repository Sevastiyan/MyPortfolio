This repository is a personal Next.js (App Router) portfolio built with TypeScript, Tailwind CSS and a small set of React components and hooks. The goal of these instructions is to help an automated coding agent make safe, useful edits quickly and consistently.

## Portfolio Owner: Sevastiyan Tsvetkov

**Role**: Senior AI Engineer | Full-Stack Developer
**Location**: Seoul, South Korea
**Contact**: sevastiyan.tsv@gmail.com | [LinkedIn](https://linkedin.com/in/sevastiyan) | [GitHub](https://github.com/Sevastiyan)

**Professional Summary**: AI and full-stack engineer bridging machine learning with scalable software. Experienced in real-time analytics, signal processing, and human-centric data systems for health and posture applications.

**Current Employment**:

- **Neurabody** (Aug 2024 – Present): Senior AI Engineer - Led cross-device posture detection with MediaPipe BlazePose, AWS WebRTC, Lambda, and DynamoDB
- **Wethm Co., Ltd.** (Dec 2021 – Aug 2024): Full-Stack Developer - Built IoT sleep analytics platform, optimized TensorFlow inference (70% cost reduction)
- **FlexoSense Pte. Ltd.** (May 2019 – Nov 2021): Data Analyst/AI Engineer - Developed smart insole gait analysis systems for clinical and industrial use

**Key Skills**: Python, JavaScript/TypeScript, Kotlin, Java | TensorFlow, Scikit-learn | AWS (Lambda, S3, DynamoDB, SageMaker, Kinesis) | DynamoDB, MongoDB, PostgreSQL

**Education**:

- MSc Medialogy (Software Development) - Aalborg University, Copenhagen (2016-2018)
- BEng Global Business Engineering - VIA University College, Denmark (2009-2014)

**Key Projects** (use these as reference for portfolio content):

1. **Gait Analysis Algorithm** (FlexoSense, Ongoing): Sensor-fusion algorithm for research-grade gait analysis using smart insoles, validated against CAREN gold-standard
2. **Real-Time Pose Detection Platform** (Neurabody, 2024): Serverless AWS pipeline with MediaPipe BlazePose, WebRTC streaming, Lambda microservices
3. **Sleep Analytics Cloud Infrastructure** (Wethm, 2023): End-to-end IoT backend with 70% cost optimization through TensorFlow edge inference
4. **IoT Patient Activity Monitoring** (FlexoSense, 2021): MOH-funded hospital pilot with 96% ML accuracy for remote patient mobility tracking
5. **Industrial Safety System** (FlexoSense, 2020): Real-time incident detection with 98% accuracy deployed under Keppel safety programs

When updating portfolio content (projects, about, skills, timeline), reference the above professional background for accuracy. Maintain technical depth while keeping descriptions accessible.

---

## Technical Guidelines

Key pointers (short and actionable):

- Project entry points and structure:

  - App root: `src/app/layout.tsx` (ThemeProvider usage and global fonts). Edit here for global layout and providers.
  - Main page: `src/app/page.tsx` renders the portfolio sections and imports `src/components/*` components.
  - Components live in `src/components/` (e.g. `navigation.tsx`, `hero-section.tsx`, `interactive-timeline.tsx`). Follow existing component patterns when adding UI.

- Build and dev commands (use exactly):

  - Development: `npm run dev` (uses `next dev --turbopack`)
  - Build: `npm run build` (uses `next build --turbopack`)
  - Lint/format: `npm run lint` / `npm run format` (uses Biome)

- Styling and UI conventions:

  - Tailwind classes are used directly in JSX. Keep utility-first style and prefer existing design tokens (e.g. `bg-primary`, `glass`, `text-pretty`).
  - Reuse UI primitives under `src/components/ui/` (e.g. `button.tsx`, `card.tsx`, `badge.tsx`, `timeline-item.tsx`) instead of creating ad-hoc UI elements.

- Client vs Server components:

  - This repo uses the Next.js App Router. Files with `'use client'` at the top are client components (interactive hooks, state, window usage). Keep SSR-safe code (no window, no DOM APIs) in server components.
  - Common examples: `src/app/page.tsx` is a client component (has 'use client'); `src/app/layout.tsx` is a server component that wraps a client-side `ThemeProvider`.

- Data and integrations:

  - Supabase client is initialized in `src/lib/supabase.ts`. Environment variables required: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
  - Contact submissions are sent via `useContactForm` (see `src/hooks/useContactForm.ts`) which inserts into a `contact_submissions` table. Do not change table names without updating the DB schema.

- Patterns and small conventions to follow:

  - TypeScript strictness: files are typed but permissive in places; prefer explicit prop/interface types when adding new components.
  - Hooks follow the pattern: return an object with status flags (isLoading/isSubmitting, error, success). Example: `useContactForm` and `useDownloadCV`.
  - Navigation uses scrolling to element IDs. Section IDs: `home`, `about`, `projects`, `skills`, `timeline`, `contact`. Use these IDs when adding or renaming sections.
  - CSS classnames use design tokens and variants (e.g. `bg-primary/10`, `glass`, `rounded-2xl`). Mirror existing naming to preserve visual coherence.

- Safety and tests for automated edits:

  - Prefer non-breaking UI changes. If modifying interactive behavior, run dev locally and confirm no runtime errors.
  - When adding new dependencies, update `package.json` and prefer lightweight, well-known packages. Add types if needed (`@types/...`).

- Examples to reference when making edits:

  - Add a new section: copy structure from `src/components/about-section.tsx` and add an ID matching the navigation (e.g. `id="new-section"`) then update `src/components/navigation.tsx` navItems if you want it in the nav.
  - Add a Supabase-backed feature: follow `src/hooks/useContactForm.ts` + `src/lib/supabase.ts` usage pattern. Validate env var checks are present.
  - Add a client-only interactive component: put `'use client'` at the top and follow the `InteractiveTimeline` component structure (state, handlers, small child UI primitives).

- Files to inspect first for context when assigned a change:
  - `package.json` (scripts, deps)
  - `src/app/layout.tsx` (global providers)
  - `src/app/page.tsx` (main composition)
  - `src/lib/supabase.ts` and `src/hooks/useContactForm.ts` (data integration)
  - `src/components/navigation.tsx` and `src/components/ui/*` (routing, UI primitives)

If anything is unclear or you need more specific rules (naming, linting exceptions, or deploy steps), open an issue describing the requested change and link to the files you examined.

Please ask for clarifying examples if you plan to: add new dependencies, change runtime env expectations, or alter database table names.
