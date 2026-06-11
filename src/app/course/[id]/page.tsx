import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { courses } from '@/lib/data';
import { siteUrl } from '@/lib/site';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CourseCard } from '@/components/course/CourseCard';
import {
    ExternalLink,
    Clock,
    Star,
    Eye,
    BarChart,
    Award,
    BookOpen,
    CheckCircle2,
    ArrowLeft,
    ShieldCheck,
} from 'lucide-react';

export const revalidate = 3600;

export async function generateStaticParams() {
    return courses.map((course) => ({ id: course.id }));
}

type Props = {
    params: Promise<{ id: string }>;
};

const certificateLabels: Record<string, string> = {
    'free': 'Free certificate included',
    'paid': 'Certificate available (paid)',
    'audit-only': 'Free to audit, certificate requires payment',
    'none': 'No certificate offered',
    'completion-badge': 'Completion badge included',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const course = courses.find((c) => c.id === id);
    if (!course) return {};

    const description =
        course.description ||
        `Learn ${course.title} for free from ${course.provider}. ${course.level} level, ${course.duration}.`;

    return {
        title: `${course.title} — Free Course by ${course.provider}`,
        description,
        alternates: {
            canonical: `/course/${course.id}`,
        },
        openGraph: {
            title: course.title,
            description,
            images: [course.thumbnail],
            url: `${siteUrl}/course/${course.id}`,
        },
    };
}

export default async function CoursePage({ params }: Props) {
    const { id } = await params;
    const course = courses.find((c) => c.id === id);
    if (!course) return notFound();

    const relatedCourses = courses
        .filter((c) => c.id !== course.id && c.category === course.category)
        .slice(0, 3);

    const certificateLabel = course.certificateType
        ? certificateLabels[course.certificateType]
        : null;

    return (
        <div className="container mx-auto px-4 py-10">
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
                    <ArrowLeft size={14} /> All Courses
                </Link>
                <span>/</span>
                <Link
                    href={`/courses/${encodeURIComponent(course.category)}`}
                    className="hover:text-foreground transition-colors"
                >
                    {course.category}
                </Link>
            </nav>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main content */}
                <div className="lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        <Badge variant="secondary">{course.category}</Badge>
                        <Badge variant="outline">{course.level}</Badge>
                        {course.isAudit ? (
                            <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-0">
                                Audit Free
                            </Badge>
                        ) : (
                            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-0">
                                100% Free
                            </Badge>
                        )}
                        {course.lastVerified && (
                            <Badge variant="outline" className="text-emerald-600 border-emerald-200 dark:border-emerald-800 dark:text-emerald-400 flex items-center gap-1">
                                <ShieldCheck size={12} />
                                Verified {new Date(course.lastVerified).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
                            </Badge>
                        )}
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
                        {course.title}
                    </h1>
                    <p className="text-lg text-muted-foreground mb-6">
                        by <span className="font-semibold text-foreground">{course.provider}</span>
                        {course.platform && <> on {course.platform}</>}
                    </p>

                    <div className="relative aspect-video w-full overflow-hidden rounded-xl border mb-8 bg-muted">
                        <Image
                            src={course.thumbnail}
                            alt={course.title}
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 66vw"
                            className="object-cover"
                        />
                    </div>

                    {course.description && (
                        <section className="mb-8">
                            <h2 className="text-xl font-bold mb-3">About this course</h2>
                            <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                        </section>
                    )}

                    <section className="mb-8">
                        <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
                            <BookOpen size={20} /> What you&apos;ll learn
                        </h2>
                        <div className="flex flex-wrap gap-2">
                            {course.topics.map((topic) => (
                                <Badge key={topic} variant="secondary" className="text-sm py-1 px-3">
                                    {topic}
                                </Badge>
                            ))}
                        </div>
                    </section>

                    {course.skills && course.skills.length > 0 && (
                        <section className="mb-8">
                            <h2 className="text-xl font-bold mb-3">Skills you&apos;ll gain</h2>
                            <ul className="space-y-2">
                                {course.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-muted-foreground">
                                        <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {course.prerequisites && course.prerequisites.length > 0 && (
                        <section className="mb-8">
                            <h2 className="text-xl font-bold mb-3">Prerequisites</h2>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                {course.prerequisites.map((p) => (
                                    <li key={p}>{p}</li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-1">
                    <div className="sticky top-24 rounded-xl border bg-card p-6 shadow-sm">
                        <div className="space-y-4 mb-6">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground flex items-center gap-2">
                                    <Star size={16} className="fill-yellow-400 text-yellow-400" /> Our rating
                                </span>
                                <span className="font-semibold">{course.rating} / 5</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground flex items-center gap-2">
                                    <Clock size={16} /> Duration
                                </span>
                                <span className="font-semibold">{course.duration}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground flex items-center gap-2">
                                    <BarChart size={16} /> Level
                                </span>
                                <span className="font-semibold">{course.level}</span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-muted-foreground flex items-center gap-2">
                                    <Eye size={16} /> Learners
                                </span>
                                <span className="font-semibold">{course.views}</span>
                            </div>
                            {certificateLabel && (
                                <div className="flex items-start gap-2 text-sm pt-2 border-t">
                                    <Award size={16} className="text-primary shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground">{certificateLabel}</span>
                                </div>
                            )}
                        </div>

                        <Button asChild size="lg" className="w-full text-base shadow-lg shadow-primary/20">
                            <a
                                href={course.affiliateUrl || course.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Start Learning Free <ExternalLink size={16} className="ml-2" />
                            </a>
                        </Button>
                        <p className="text-xs text-muted-foreground text-center mt-3">
                            Opens on {course.platform || course.provider}
                        </p>
                    </div>
                </aside>
            </div>

            {/* Related courses */}
            {relatedCourses.length > 0 && (
                <section className="mt-16">
                    <h2 className="text-2xl font-bold mb-6">
                        More {course.category} courses
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedCourses.map((related) => (
                            <CourseCard key={related.id} {...related} />
                        ))}
                    </div>
                </section>
            )}

            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Course',
                        name: course.title,
                        description:
                            course.description ||
                            `Learn ${course.title} from ${course.provider}.`,
                        provider: {
                            '@type': 'Organization',
                            name: course.provider,
                        },
                        url: `${siteUrl}/course/${course.id}`,
                        image: course.thumbnail,
                        isAccessibleForFree: true,
                        educationalLevel: course.level,
                        about: course.topics,
                    }),
                }}
            />
        </div>
    );
}
