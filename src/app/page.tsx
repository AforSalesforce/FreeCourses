
import { Suspense } from 'react';
import Link from 'next/link';
import { courses } from '@/lib/data';
import { CourseGrid } from '@/components/course/CourseGrid';
import { FilterSidebar } from '@/components/layout/FilterSidebar';
import { Button } from '@/components/ui/button';
import { NewsletterSection } from '@/components/features/NewsletterSection';
import { ArrowRight, Sparkles, GraduationCap, Cloud } from 'lucide-react';

export const revalidate = 3600;

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background pointer-events-none" />

        <div className="container relative mx-auto px-4 text-center z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6 animate-fade-in-up">
            <Sparkles size={14} />
            <span>Premium Quality, Zero Cost</span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl mb-6 max-w-4xl mx-auto leading-tight">
            Master New Skills with the Best <br />
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Free Online Courses</span>
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Curated from top universities and creators. No paywalls, no hidden fees. Just pure learning.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all hover:scale-105">
              Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm hover:bg-background/80" asChild>
              <Link href="/guides/engineering">
                The $0 Degree Guide
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Guides */}
      <section className="py-12 bg-muted/30 border-y">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Strategic Guides</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/guides/engineering" className="group relative overflow-hidden rounded-2xl border bg-card p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <GraduationCap size={100} />
              </div>
              <div className="relative z-10 flex gap-4 items-start">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">The $0 Engineering Degree</h3>
                  <p className="text-muted-foreground mb-4">Complete roadmap to an Ivy League-level education using free audits and open courseware.</p>
                  <span className="text-sm font-semibold text-blue-600 flex items-center gap-1">Read Guide <ArrowRight size={14} /></span>
                </div>
              </div>
            </Link>

            <Link href="/guides/hosting" className="group relative overflow-hidden rounded-2xl border bg-card p-6 hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Cloud size={100} />
              </div>
              <div className="relative z-10 flex gap-4 items-start">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                  <Cloud size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors">Free Hosting Guide</h3>
                  <p className="text-muted-foreground mb-4">Launch your portfolio for free. Comparison of Vercel, Netlify, and GitHub Pages.</p>
                  <span className="text-sm font-semibold text-purple-600 flex items-center gap-1">Read Guide <ArrowRight size={14} /></span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20 pt-16">
        <div className="flex flex-col md:flex-row gap-8">
          <Suspense fallback={<div className="w-64 shrink-0 h-screen bg-muted animate-pulse" />}>
            <FilterSidebar />
          </Suspense>

          <div className="flex-1">
            <Suspense fallback={<div className="w-full h-64 bg-muted animate-pulse rounded-xl" />}>
              <CourseGrid initialCourses={courses} />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <NewsletterSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: courses.map((course, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Course',
                name: course.title,
                description: `Learn ${course.title} from ${course.provider}. Level: ${course.level}.`,
                provider: {
                  '@type': 'Organization',
                  name: course.provider,
                },
                url: course.sourceUrl,
                image: course.thumbnail,
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: course.rating,
                },
              },
            })),
          }),
        }}
      />
    </div>
  );
}
