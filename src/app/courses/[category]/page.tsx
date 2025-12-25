
import { courses, courseCategories } from '@/lib/data';
import { CourseGrid } from '@/components/course/CourseGrid';
import { FilterSidebar } from '@/components/layout/FilterSidebar';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const revalidate = 3600;

export async function generateStaticParams() {
    return courseCategories.map((category) => ({
        category: category,
    }));
}

type Props = {
    params: Promise<{ category: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);

    return {
        title: `${decodedCategory} Courses | FreeCourseHub`,
        description: `Explore the best free ${decodedCategory} courses from top universities and providers. Get certified for free.`,
        alternates: {
            canonical: `/courses/${category}`,
        },
    };
}

export default async function CategoryPage({ params }: Props) {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);

    // Validate category
    if (!courseCategories.includes(decodedCategory)) {
        return notFound();
    }

    const categoryCourses = courses.filter(c => c.category === decodedCategory);

    return (
        <div className="container mx-auto px-4 pb-20 pt-8">
            <h1 className="text-4xl font-bold mb-8 capitalize">{decodedCategory} Courses</h1>

            <div className="flex flex-col md:flex-row gap-8">
                <Suspense fallback={<div className="w-64 shrink-0 h-screen bg-muted animate-pulse" />}>
                    <FilterSidebar />
                </Suspense>

                <div className="flex-1">
                    <Suspense fallback={<div className="w-full h-64 bg-muted animate-pulse rounded-xl" />}>
                        <CourseGrid initialCourses={categoryCourses} />
                    </Suspense>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ItemList',
                        itemListElement: categoryCourses.map((course, index) => ({
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
