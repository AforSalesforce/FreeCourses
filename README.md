# FreeCourseHub - Premium Online Course Aggregator

FreeCourseHub is a modern, high-performance course aggregator built with Next.js 15, designed to solve the "paradox of choice" in online education. It aggregates, filters, and curates free courses from providers like Coursera, Harvard, and YouTube, presenting them in a premium, distraction-free interface.

**Live Demo:** [https://onlinefreecourses.vercel.app](https://onlinefreecourses.vercel.app)

## 🚀 Features & Architecture

This project was executed in three strategic phases to ensure scalability, SEO dominance, and user retention.

### Phase 1: Foundation & Technical SEO
*   **Next.js App Router**: Utilizing the latest React Server Components architecture.
*   **Incremental Static Regeneration (ISR)**: Pages like `/` and `/categories` revalidate every hour (`revalidate = 3600`), ensuring 100/100 Core Web Vitals while keeping data fresh.
*   **Programmatic SEO (pSEO)**:
    *   Dynamic Routes: `/courses/[category]` generates landing pages for every category (e.g., Computer Science, Design).
    *   Automated Metadata: Dynamic `title` and `canonical` tags for every generated page.
*   **Schema.org Structured Data**: Automatic injection of `ItemList` and `Course` JSON-LD to trigger Rich Snippets in Google Search.
*   **Performance**: `next/image` with explicit `sizes` logic to minimize LCP (Largest Contentful Paint).

### Phase 2: Growth & Monetization
*   **Monetization Logic**: Centralized type definition supporting `affiliateUrl`. The UI preferentially renders affiliate links over direct source links when available.
*   **Long-Tail pSEO**: Deep directory structure `/courses/[category]/[topic]` (e.g., `/courses/Computer Science/Python`) to capture high-intent search traffic.
    *   Built using `generateStaticParams` to pre-render 38+ unique topic paths at build time.
*   **Content Hub (Blog)**: A fully functional markdown-based blog system (`/blog`) with Schema markup to build topical authority.

### Phase 3: Community & Retention
*   **Gamification**: A client-side "Daily Streak" counter in the Navbar, using `localStorage` to boost user stickiness without requiring login.
*   **User Favorites**: "Save to Favorites" functionality allows users to curate their own lists immediately.
*   **Lead Capture**: High-conversion Newsletter component with "roadmap" lead magnet logic.
*   **Premium UI**: Integrated `shadcn/ui` (Tooltip, Badge, Card) and `lucide-react` for a polished, trustworthy aesthetic.

## 🛠 Tech Stack

*   **Framework**: Next.js 16 (App Router, Turbopack)
*   **Styling**: Tailwind CSS v4, CSS Variables
*   **Icons**: Lucide React
*   **State Management**: Nuqs (URL-based state management for shareable filters)
*   **Components**: Shadcn/UI (Radix Primitives)
*   **Deployment**: Vercel (Edge Network)

## 📂 Project Structure

```bash
src/
├── app/
│   ├── blog/               # Blog system (Index & Individual Posts)
│   ├── categories/         # Category browse page
│   ├── courses/            # Programmatic SEO Routes
│   │   └── [category]/     # Level 2: Category Pages
│   │       └── [topic]/    # Level 3: Topic Pages
│   ├── layout.tsx          # Root layout with Navbar & Nuqs adapter
│   └── page.tsx            # Homepage with Hero, Grid, & Newsletter
├── components/
│   ├── course/             # CourseCard, CourseGrid
│   ├── features/           # StreakCounter, NewsletterSection
│   ├── layout/             # Navbar, FilterSidebar
│   └── ui/                 # Reusable UI atoms (Button, Badge, etc.)
├── lib/
│   ├── data.ts             # Static database of courses
│   ├── blog-data.ts        # Static database of blog posts
│   └── user-utils.ts       # LocalStorage logic for streaks/favorites
```

## 🏃‍♂️ Getting Started

1.  **Clone the repository**
    ```bash
    git clone https://github.com/AforSalesforce/FreeCourses.git
    cd FreeCourses
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run development server**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view the app.

4.  **Build for production**
    ```bash
    npm run build
    ```
    This will generate the static HTML for all programmatic routes.

## 📈 SEO Strategy implemented

*   **Silo Architecture**: Homepage -> Categories -> Topics.
*   **JSON-LD**: Validated `Course`, `ItemList`, and `BlogPosting` schemas on all relevant pages.
*   **Semantic HTML**: Proper `h1` > `h2` hierarchy and accessible landmarks.

## 🔮 Future Roadmap

*   [ ] **Auth**: Integrate NextAuth.js for cross-device syncing of favorites.
*   [ ] **API**: Replace static data with a CMS (Sanity or Strapi).
*   [ ] **AI Search**: Implement semantic vector search for "natural language" course discovery.
