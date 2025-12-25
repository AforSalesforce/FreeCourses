
import Link from 'next/link';
import { blogPosts, BlogPost } from '@/lib/blog-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Calendar, User } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Free EdTech Blog | Career Advice & Course Reviews',
    description: 'Insights on free education, AI upskilling, and career development.',
};

export default function BlogIndexPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-4xl font-bold mb-4">The Free Learning Blog</h1>
                <p className="text-muted-foreground text-lg">
                    Tips, strategies, and reviews to help you navigate the world of online education.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                        <Card className="h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all hover:-translate-y-1">
                            <div className="relative aspect-video w-full overflow-hidden">
                                <Image
                                    src={post.coverImage}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-background/90 text-foreground hover:bg-background/100 backdrop-blur-sm shadow-sm">
                                        {post.category}
                                    </Badge>
                                </div>
                            </div>
                            <CardHeader>
                                <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                                    {post.title}
                                </CardTitle>
                                <CardDescription className="line-clamp-3 mt-2">
                                    {post.excerpt}
                                </CardDescription>
                            </CardHeader>
                            <CardContent />
                            <CardFooter className="flex items-center justify-between text-xs text-muted-foreground border-t bg-muted/20 p-4">
                                <div className="flex items-center gap-1">
                                    <User size={12} />
                                    {post.author}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Calendar size={12} />
                                    {post.date}
                                </div>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
}
