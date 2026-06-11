# FreeCourseHub — Master Roadmap

*Supersedes IMPROVEMENT_PLAN.md and COURSE_SOURCING.md. Audit: June 2026 · Next.js 16, React 19, Tailwind 4, TS.*

## Thesis

A course aggregator wins on exactly three things, in this order:

1. **Catalog** — more verified free courses than anyone curates by hand (the sourcing pipeline).
2. **SEO traffic** — every course is an indexable landing page that ranks for "free X course" queries.
3. **Retention** — accounts, progress, and email give people a reason to return instead of going straight to Coursera.

Catalog feeds SEO (more pages), SEO feeds retention (more signups), retention feeds monetization. Build in that order. Quality verification — not volume — is the moat: Class Central has 250k courses; nobody shows "✓ verified this month" per course.

## Where the product stands

Polished discovery UI, 45 hardcoded courses, client-side filtering (nuqs), localStorage favorites/streaks, no backend, no analytics. ✅ Already shipped this session: course detail pages with JSON-LD, sitemap/robots, OG metadata, footer, favorites page, fixed dead CTAs.

## North-star metrics (weekly)

Verified courses in catalog · indexed pages · organic sessions · outbound course clicks (the job-to-be-done) · returning-visitor rate · email subscribers.

---

## Phase 1 — Production readiness (weeks 1–2)

Finish the trust and measurement basics:

- **Analytics** (Vercel Analytics or Plausible) + outbound-click tracking. You cannot grow what you don't measure.
- **Error boundary, `not-found.tsx`**, Sentry.
- **Honest data**: ratings/views are hand-entered. Relabel as editorial picks ("Our rating") until real signal exists — fake-looking aggregate ratings in JSON-LD risk a Google rich-results penalty.
- **Real thumbnails**: replace generic Unsplash images with provider logos or generated OG-style cards. Current images say "template."
- **Privacy policy + terms pages** (required later for affiliate/AdSense anyway).
- **CI**: GitHub Actions — typecheck, lint, build on every PR.
- Set `NEXT_PUBLIC_SITE_URL`, submit sitemap to Google Search Console.

## Phase 2 — The sourcing pipeline (weeks 3–6) ← the core bet

Replace the hand-edited `data.ts` with an automated ingest pipeline. Architecture:

```
DISCOVER → NORMALIZE (Zod) → DEDUPE → ENRICH (LLM) → VERIFY → PUBLISH (JSON via PR) → MONITOR (monthly re-check)
```

**Data layer first.** Move courses to `src/data/courses/*.json`, one file per course, Zod-validated at build time. Site stays static and free to host. (Postgres/Supabase only when accounts land in Phase 3.)

**Source adapters, in build order:**

1. *Week 3*: Generic **sitemap → schema.org `Course` JSON-LD extractor** — most providers mark up course pages for Google, so one adapter covers hundreds of university/OCW sites. Plus Microsoft Learn catalog API (no auth) and freeCodeCamp/Odin Project GitHub curriculum parsing. ~500 courses immediately.
2. *Week 4*: **YouTube Data API** adapter — whitelisted channels (freeCodeCamp, MIT OCW, Stanford, Traversy), playlists >1hr. **Verification jobs** as GitHub Actions: link-alive check + free-ness check (pages silently go paid, especially Udemy/Coursera).
3. *Week 5*: **edX Catalog API** (apply for credentials) + **Coursera/Udemy affiliate feeds** — sourcing and monetization in one application. Include Swayam/FutureLearn/OpenLearn sitemaps: huge non-US catalogs competitors ignore, and your Indian student audience's home turf.
4. *Week 6*: Community discovery — GitHub awesome-list differ, Reddit (`/new.json`) and HN (Algolia API) watchers → review queue. `/submit` form so users become crawlers.

**Rules baked in:** every course passes a human review gate (a PR is the queue); `lastVerified` shown on site; auto-prune after two failed checks; respect robots.txt, 1 req/sec, identified UA; index metadata, never mirror content.

**Free-ness tiers as first-class filters** (your editorial identity): fully-free-with-certificate (gold) / fully free / audit-free / exclude limited-time coupons. "Free certificate only" is the highest-intent search in this niche — the `certificateType` field already models it.

**Search scaling:** current client-side substring filter is fine to ~200 courses; add Fuse.js after, Pagefind/Algolia past ~2k. Pagination/virtualization past ~100 per grid. Implement the ⌘K palette the navbar already advertises, or remove the hint.

## Phase 3 — Retention & accounts (weeks 7–10)

- **Auth**: Supabase Auth or NextAuth, Google sign-in only. Migrate localStorage favorites + streaks to the account on first login (the favorites page already promises "sync coming soon").
- **Progress tracking**: mark started/completed per course; % completion per learning path. The retention hook.
- **Email**: wire the newsletter to Resend/Buttondown. The weekly "5 new verified free courses" digest writes itself from the pipeline's output — pipeline and retention compound here.
- **Votes/reviews**: simple upvotes replace hand-entered ratings with real signal and add UGC for SEO.

## Phase 4 — Monetization (after ~10k visits/mo)

In order of fit: (1) **affiliate links** — `affiliateUrl` field exists, Coursera/DataCamp/Udacity programs, "free audit → paid certificate" converts; (2) **email sponsorships** at >2–3k subscribers; (3) **premium curation** — paid structured "$0 Degree" cohorts/roadmaps; (4) display ads last, they cheapen an education brand. Phase 1's privacy/terms pages are prerequisites.

## Engineering hygiene (ongoing)

Playwright smoke tests (home → filter → detail → outbound), Lighthouse budget in CI (cap the per-card fade-in animations hurting LCP), strict CSP headers, error monitoring.

## What NOT to build yet

Native app, course hosting/video player, forums, deeper gamification, multi-language UI. Each is a quarter of work that moves neither catalog, SEO, nor retention at current scale.

---

## Sequence at a glance

| Weeks | Focus | Outcome |
|---|---|---|
| 1–2 | Production basics | Measurable, trustworthy, indexed |
| 3–6 | Sourcing pipeline | 500→2,000+ verified courses, auto-maintained |
| 7–10 | Accounts + email | Returning users, owned audience |
| 10+ | Monetization | Affiliate revenue funds curation |
