
import { blogPosts } from '@/lib/blog-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Metadata } from 'next';

export const revalidate = 3600;

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

type Props = {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: `${post.title} | FreeCourseHub Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.coverImage],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return notFound();
    }

    return (
        <article className="min-h-screen pb-20">
            {/* Header / Hero */}
            <div className="relative h-[400px] w-full bg-muted">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover opacity-60"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 z-10">
                    <div className="container mx-auto">
                        <Link href="/blog">
                            <Button variant="outline" size="sm" className="mb-6 backdrop-blur-md bg-background/30 border-white/20 text-white hover:bg-white/20">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                            </Button>
                        </Link>

                        <div className="flex items-center gap-2 mb-4">
                            <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl shadow-black/50 drop-shadow-lg">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <User size={16} />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} />
                                {post.date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 mt-12">
                <div className="max-w-3xl mx-auto">
                    <div
                        className="prose prose-lg dark:prose-invert prose-headings:font-bold prose-a:text-primary prose-img:rounded-xl"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />

                    <hr className="my-12 border-border" />

                    <div className="bg-muted/50 rounded-2xl p-8 text-center">
                        <h3 className="text-xl font-bold mb-2">Ready to start learning?</h3>
                        <p className="text-muted-foreground mb-6">Explore our curated collection of {post.category === 'Career Advice' ? 'courses' : 'resources'} mentioned in this article.</p>
                        <Button size="lg" asChild>
                            <Link href="/">Browse Courses</Link>
                        </Button>
                    </div>
                </div>
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.title,
                        image: post.coverImage,
                        author: {
                            '@type': 'Person',
                            name: post.author,
                        },
                        publisher: {
                            '@type': 'Organization',
                            name: 'FreeCourseHub',
                            logo: {
                                '@type': 'ImageObject',
                                url: 'https://onlinefreecourses.vercel.app/logo.png', // Placeholder
                            },
                        },
                        datePublished: post.date,
                        description: post.excerpt,
                    }),
                }}
            />
        </article>
    );
}
