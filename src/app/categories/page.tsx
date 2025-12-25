
import { courses, courseCategories } from '@/lib/data';
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen } from 'lucide-react';

export const revalidate = 3600;

export default function CategoriesPage() {
    const categoriesWithCounts = courseCategories.map(category => {
        const count = courses.filter(c => c.category === category).length;
        // Get top 3 topics for this category
        const topics = Array.from(new Set(courses.filter(c => c.category === category).flatMap(c => c.topics))).slice(0, 3);
        return { name: category, count, topics };
    });

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-2">Start Learning by Category</h1>
            <p className="text-muted-foreground mb-10 text-lg">Browse our comprehensive collection of free courses across various disciplines.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoriesWithCounts.map((category) => (
                    <Link key={category.name} href={`/?categories=${encodeURIComponent(category.name)}`}>
                        <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg group cursor-pointer bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div className="p-2 rounded-lg bg-primary/10 text-primary mb-2 group-hover:scale-110 transition-transform">
                                        <BookOpen size={24} />
                                    </div>
                                    <Badge variant="secondary">{category.count} Courses</Badge>
                                </div>
                                <CardTitle className="text-xl group-hover:text-primary transition-colors">{category.name}</CardTitle>
                                <CardDescription>
                                    Master {category.name} with free resources from top providers.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {category.topics.map(topic => (
                                        <span key={topic} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ItemList',
                        itemListElement: categoriesWithCounts.map((category, index) => ({
                            '@type': 'ListItem',
                            position: index + 1,
                            name: category.name,
                            url: `https://onlinefreecourses.vercel.app/?categories=${encodeURIComponent(category.name)}`
                        })),
                    }),
                }}
            />
        </div >
    );
}
