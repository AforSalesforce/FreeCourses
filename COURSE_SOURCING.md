# Course Sourcing Architecture — How to Find Every Free Course Online

*The goal: a repeatable pipeline that discovers, verifies, and ingests free courses at scale — not a one-time list. Class Central indexes ~250k courses from ~1,500 providers this way; you can start with the same architecture at small scale.*

---

## 1. The source taxonomy (where free courses actually live)

### Tier 1 — Official APIs & structured feeds (highest quality, automate first)

| Source | Access method | Notes |
|---|---|---|
| **edX** | Course Catalog / Discovery REST API (`api.edx.org`, JSON) | Requires API credentials; filter `availability` + audit track. The richest official MOOC API. |
| **Coursera** | Developer platform (dev.coursera.com, App Platform in beta) + affiliate feed via Impact/Awin | Affiliate program gives a product catalog feed — courses + your monetization in one. |
| **Udemy** | Affiliate API | Filter `price=price-free`. Free Udemy courses churn constantly — recheck weekly. |
| **YouTube** | Data API v3 (`search.list`, `playlists.list`, `playlistItems.list`) | Query "full course" + topic, filter by duration >1hr, sort by viewCount. 10k units/day quota is plenty for weekly runs. Whitelist proven channels (freeCodeCamp, Traversy, MIT OCW, Stanford, CrashCourse) and ingest their playlists wholesale. |
| **Microsoft Learn** | Public catalog API (learn.microsoft.com/api/catalog) | Entire catalog, free, JSON, no auth. |
| **MIT OpenCourseWare** | Sitemap + JSON-LD per course page; bulk data dumps | Everything is CC-licensed — friendliest source there is. |
| **freeCodeCamp / The Odin Project** | Open-source curriculum on GitHub | Parse the repo structure; it IS the catalog. |
| **Khan Academy, Kaggle Learn, Google Skillshop, AWS Skill Builder** | Sitemaps + structured pages | Small, stable catalogs — scrape once, recheck monthly. |
| **Swayam (India), FutureLearn, OpenLearn (OU UK), France Université Numérique** | Sitemaps/feeds | Huge non-US catalogs most aggregators ignore — differentiation opportunity, especially for your Indian student audience. |

### Tier 2 — Structured-data scraping (the universal trick)

Most course providers mark up every course page with **schema.org `Course` JSON-LD** so Google can show course rich results. That means:

1. Fetch the provider's `sitemap.xml` → get every course URL.
2. Fetch each page, extract the `<script type="application/ld+json">` block.
3. You get title, description, provider, `isAccessibleForFree`, rating — **already in a standard schema**, no per-site parser needed.

One generic "JSON-LD extractor" adapter covers hundreds of university and provider sites. This is the single highest-leverage component to build. Respect `robots.txt` and ToS; prefer providers that allow it (universities and OCW sites almost always do).

### Tier 3 — Community discovery (finds what APIs miss)

- **GitHub awesome lists**: `awesome-courses`, `free-programming-books`, `free-certifications`, `cs-video-courses`. Parse the markdown via GitHub API; diff weekly for new entries.
- **Reddit**: r/FreeCourses, r/learnprogramming, r/UdemyFreebies via Reddit JSON API (`/r/X/new.json`). High noise, great for catching limited-time free offers.
- **Hacker News**: Algolia HN API, query "free course". Surfaces new university releases the day they launch.
- **University news pages / Class Central's reports**: monitor as discovery signals (read, don't scrape a competitor's database).

### Tier 4 — Human-in-the-loop

- **User submissions**: a `/submit` form on the site → review queue. Your users become your crawlers.
- **Editorial curation**: you, approving everything above before it goes live. At your scale, *every course should pass a human gate* — quality is your only moat vs. Class Central's quantity.

---

## 2. The pipeline architecture

```
        ┌─ DISCOVER ─┐   ┌─ NORMALIZE ─┐   ┌── VERIFY ──┐   ┌─ PUBLISH ─┐
        │ API adapters│   │ map → Course│   │ link alive? │   │ courses/  │
sources →│ JSON-LD    │ → │ schema (Zod)│ → │ still free? │ → │ *.json in │→ site
        │ crawler    │   │ dedupe      │   │ human review│   │ git (PR)  │
        │ RSS/GitHub │   │ enrich      │   │             │   │           │
        └────────────┘   └─────────────┘   └─────────────┘   └───────────┘
                                ↑                                  │
                                └────────── MONITOR (re-verify monthly, prune dead) ──┘
```

**Each stage, concretely:**

1. **Discover** — one adapter per source type (`adapters/edx.ts`, `adapters/youtube.ts`, `adapters/jsonld.ts`, `adapters/github-awesome.ts`). Each emits raw candidate records. Run on a schedule (GitHub Actions cron, weekly).

2. **Normalize** — map every candidate to your existing `Course` type, validated with Zod. Reject anything missing title/url/provider.

3. **Dedupe** — canonicalize URLs (strip UTM/tracking params), then fuzzy-match titles (e.g. trigram similarity) within the same provider. The same course appears on edX, the university site, and three awesome-lists.

4. **Enrich** — auto-classify `category`, `level`, and `topics` from the description (an LLM call per new course is cheap and accurate), detect `certificateType` from page text ("free certificate", "audit", "verified certificate $49").

5. **Verify** — the step everyone skips and the reason aggregators rot:
   - HTTP check: URL returns 200, doesn't redirect to a paywall/404.
   - **Free-ness check**: page still contains free/audit markers. "Free" courses silently become paid constantly (especially Udemy/Coursera).
   - Human gate: new courses land in a review queue (a JSON file in a PR is enough) — you approve/reject.

6. **Publish** — approved courses written to `src/data/courses/*.json` (one file per course, validated at build time), merged via PR. Site rebuilds. No database needed until you pass ~2–3k courses.

7. **Monitor** — monthly re-verification of every published course; auto-flag failures, prune after two consecutive failures. Track `lastVerified` per course and show it on the site ("✓ verified Jan 2026") — that's a trust feature competitors don't have.

---

## 3. Definition discipline: what counts as "free"?

Decide and encode this now — it's your editorial identity:

- **Fully free + free certificate** (freeCodeCamp, Kaggle, Microsoft Learn) — gold tier.
- **Fully free, no certificate** (OCW, YouTube, Odin Project).
- **Free to audit** (Coursera/edX — content free, certificate paid).
- **Free-for-a-limited-time** (Udemy coupons) — recommend excluding or separating clearly; they churn and erode trust.

Your `certificateType` field already models this. Make the tier a first-class filter on the site — "free certificate only" is one of the highest-intent searches in this niche.

---

## 4. Build order (pragmatic)

1. **Week 1**: Generic JSON-LD/sitemap adapter + Microsoft Learn API (no auth) + freeCodeCamp/Odin GitHub parsing. ~500+ courses immediately.
2. **Week 2**: YouTube Data API adapter with whitelisted channels. Link-checker + free-ness verifier as a GitHub Action.
3. **Week 3**: edX API (apply for credentials) + Coursera/Udemy affiliate feeds (apply for affiliate accounts — sourcing and monetization together).
4. **Week 4**: GitHub awesome-list differ + Reddit/HN watchers feeding a review queue. User submission form.
5. **Ongoing**: monthly re-verification cron; LLM enrichment for categorization.

## 5. Rules of the road

- Respect `robots.txt`, rate-limit (1 req/sec), identify your bot with a UA string and contact email.
- Prefer APIs and feeds over scraping; prefer scraping metadata over copying content (you link out — that's fair use territory and providers generally *want* the traffic).
- Never republish course content itself; you're an index, not a mirror.
- Affiliate disclosure on every page with affiliate links (footer already has it).
