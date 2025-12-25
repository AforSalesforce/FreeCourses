
import { courses, courseCategories, courseTopics } from '@/lib/data';
import { CourseGrid } from '@/components/course/CourseGrid';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const revalidate = 3600;

export async function generateStaticParams() {
    const params = [];

    // We need to generate all valid category/topic combinations
    for (const category of courseCategories) {
        // Get all topics that exist in this category
        const categoryCourses = courses.filter(c => c.category === category);
        const topics = Array.from(new Set(categoryCourses.flatMap(c => c.topics)));

        for (const topic of topics) {
            params.push({
                category: category,
                topic: topic,
            });
        }
    }

    return params;
}

type Props = {
    params: Promise<{ category: string; topic: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { category, topic } = await params;
    const decodedCategory = decodeURIComponent(category);
    const decodedTopic = decodeURIComponent(topic);

    return {
        title: `Free ${decodedTopic} Courses | ${decodedCategory} | FreeCourseHub`,
        description: `Master ${decodedTopic} with our curated list of free courses in ${decodedCategory}. Top rated tutorials and certifications.`,
        alternates: {
            canonical: `/courses/${category}/${topic}`,
        },
    };
}

export default async function TopicPage({ params }: Props) {
    const { category, topic } = await params;
    const decodedCategory = decodeURIComponent(category);
    const decodedTopic = decodeURIComponent(topic);

    // Validate
    if (!courseCategories.includes(decodedCategory)) {
        return notFound();
    }

    // Find courses that match BOTH category and topic (case insensitive check for topic usually safer, but we use exact match from data for now)
    const topicCourses = courses.filter(c =>
        c.category === decodedCategory &&
        c.topics.includes(decodedTopic)
    );

    if (topicCourses.length === 0) {
        return notFound();
    }

    return (
        <div className="container mx-auto px-4 pb-20 pt-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium text-muted-foreground mb-4">
                    {decodedCategory}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Best Free <span className="text-primary">{decodedTopic}</span> Courses
                </h1>
                <p className="text-xl text-muted-foreground">
                    Curated learning path to master {decodedTopic} in 2025.
                </p>
            </div>

            <div className="max-w-6xl mx-auto">
                <Suspense fallback={<div className="w-full h-64 bg-muted animate-pulse rounded-xl" />}>
                    <CourseGrid initialCourses={topicCourses} />
                </Suspense>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ItemList',
                        itemListElement: topicCourses.map((course, index) => ({
                            '@type': 'ListItem',
                            position: index + 1,
                            item: {
                                '@type': 'Course',
                                name: course.title,
                                description: `Learn ${course.title}. Topics: ${course.topics.join(', ')}.`,
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
