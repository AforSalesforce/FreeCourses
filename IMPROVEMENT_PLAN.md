# FreeCourseHub — Improvement & Production-Readiness Plan

*Audit date: June 2026 · Stack: Next.js 16, React 19, Tailwind 4, TypeScript*

## Where the product stands

A polished course-discovery UI with 45 hardcoded courses, client-side filtering via URL state (nuqs), localStorage favorites/streaks, hardcoded blog, and two static guides. No backend, no auth, no course detail pages, no analytics. Good bones — the gap is between "nice demo" and "product people return to."

## The strategic problem to solve

Course aggregators live or die on two things: **SEO traffic** (people Google "free python course with certificate") and **retention** (a reason to come back instead of going straight to Coursera). Right now the site captures neither: every course links straight out with no detail page (nothing for Google to index, no page to rank), and favorites/streaks are device-local with no account (nothing to return to). Everything below serves those two levers.

---

## Phase 1 — Production readiness (week 1–2)

**SEO foundation.** Add `sitemap.ts` and `robots.ts` (App Router conventions). Per-page metadata with Open Graph + Twitter cards, canonical URLs, and a `metadataBase`. The homepage JSON-LD exists but a single ItemList of 45 courses won't rank — individual pages will.

**Course detail pages (`/course/[id]`).** The single highest-leverage change. Each becomes an indexable landing page: full description, syllabus topics, prerequisites, certificate info, "related courses," per-course `Course` JSON-LD, and the outbound link. 45 courses → 45 ranking opportunities; at 500 courses this is the entire SEO engine.

**Fix trust-breaking UX.** The hero "Explore Courses" button does nothing; the Sign In button fires a `window.alert`. Dead controls kill credibility instantly. Wire the CTA to the course grid, and replace Sign In with either real auth or remove it until ready. Add a footer (about, contact, privacy policy, terms — also needed for AdSense approval later).

**Surface favorites.** Users can heart courses but can never see them again. Add a `/favorites` page reading from localStorage. Cheap win, completes an existing loop.

**Honest data.** Ratings (4.9) and views (6M+) are hand-entered. Either source them or relabel as editorial picks ("Our rating"). Fake-looking aggregate ratings in JSON-LD risk a Google rich-results penalty.

**Operational basics.** Error boundary + `not-found.tsx`, Vercel Analytics or Plausible (you cannot grow what you don't measure), a link-checker script for the 45 outbound URLs (dead links are an aggregator's #1 quality decay), and replace generic Unsplash thumbnails with provider logos or generated OG-style cards — current images say "template."

## Phase 2 — Data layer & scale (week 3–6)

**Move courses out of `data.ts`.** At 45 courses a TS file is fine; at 500 it's unmaintainable and blocks contributions. Options in order of pragmatism: (1) JSON/MDX files + build-time validation with Zod — keeps the site static and free to host; (2) Supabase/Postgres when you need user accounts anyway; (3) a headless CMS if non-developers will curate. Recommend (1) now, (2) when auth lands.

**Search that scales.** Current filtering ships all courses to the client and does substring matching. Fine to 200 courses; beyond that, add Fuse.js fuzzy search client-side, or Pagefind/Algolia later. Also: the ⌘K hint in the navbar does nothing — implement the command palette or remove the hint.

**Course freshness pipeline.** "Full Stack Open 2024" is labeled stale in 2026. Add `addedDate`/`lastVerified` to every course and a monthly verification script (HTTP-check each sourceUrl, flag 404s/redirects).

**Pagination or virtualization** on the grid once the catalog grows past ~100.

## Phase 3 — Retention & accounts (week 6–10)

**Auth** (Supabase Auth or NextAuth — Google sign-in only, zero friction). Migrate favorites + streaks from localStorage to the account on first login.

**Progress tracking.** "Mark as started / completed" per course. This is the retention hook: a learner with 3 in-progress courses comes back. Pairs with learning paths — show % completion per path.

**Email.** The newsletter section presumably collects nothing real. Wire to Resend/Buttondown. Weekly "5 new free courses" digest is the cheapest retention channel an aggregator has.

**Reviews/votes.** Even simple upvotes give real signal to replace hand-entered ratings, and user-generated content for SEO.

## Phase 4 — Monetization (after traffic, ~10k visits/mo)

In order of fit: (1) **Affiliate links** — the `affiliateUrl` field already exists; Coursera/DataCamp/Udacity run programs; "free audit, paid certificate" upsells convert; (2) **Email sponsorships** once the list is >2–3k; (3) **Premium curation** — paid "$0 Degree" structured cohorts or notion-style roadmaps; (4) display ads last — they cheapen an education brand. Note: monetizing requires the privacy policy/terms pages from Phase 1.

## Engineering hygiene (ongoing)

CI on GitHub Actions (typecheck + lint + build + link-check), Playwright smoke tests for the critical paths (home → filter → detail → outbound), error monitoring (Sentry), strict CSP headers, and Lighthouse budget in CI (the animation-delay fade-ins on every card hurt LCP — cap or remove for first viewport).

## What NOT to build yet

Native mobile app, course hosting/video player, forums, gamification beyond the streak, multi-language. Each is a quarter of work that doesn't move SEO or retention until the catalog and traffic exist.

## North-star metrics

Weekly: indexed pages, organic sessions, outbound course clicks (the "job to be done"), email subscribers, returning-visitor rate. If outbound clicks per session and returning-visitor rate both climb, everything else follows.

---

*Implemented in this session: sitemap, robots, enhanced metadata, footer, course detail pages, working hero CTA, favorites page, Sign In cleanup.*
