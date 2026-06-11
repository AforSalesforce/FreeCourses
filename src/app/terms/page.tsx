import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Terms of Service',
    description: 'Terms and conditions for using FreeCourseHub.',
    alternates: { canonical: '/terms' },
};

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <Link href="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                <ArrowLeft size={14} /> Back to home
            </Link>

            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Terms of Service</h1>
            <p className="text-muted-foreground mb-10">Last updated: June 2026</p>

            <div className="space-y-8">
                <section>
                    <h2 className="text-xl font-bold mb-3">1. What FreeCourseHub is</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        FreeCourseHub is a course aggregator and index. We discover, curate, and link to free online
                        courses hosted on third-party platforms. We do not host, create, or control any course content.
                        All content belongs to its respective provider.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3">2. Accuracy of course information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We verify each listed course at the time of addition and periodically thereafter. However,
                        course availability, pricing, and content can change without notice — providers may make
                        previously free courses paid at any time. Always confirm the access terms directly on the
                        provider&apos;s site before enrolling. The &ldquo;Verified&rdquo; date shown on each course
                        indicates the last time we confirmed it was free.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3">3. Editorial ratings</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Ratings shown on course cards and detail pages are editorial assessments by the FreeCourseHub
                        team — they are not aggregate user reviews. They reflect our opinion of course quality based
                        on content depth, provider reputation, and community standing.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3">4. Affiliate disclosure</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Some links may be affiliate links. We may earn a commission if you purchase a paid upgrade
                        through such a link. This does not increase the price you pay and does not influence our
                        editorial decisions about which free courses to feature.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3">5. Intellectual property</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Course titles, descriptions, and thumbnails belong to their respective owners. We reproduce
                        minimal descriptive information necessary to index and describe each course, consistent with
                        fair use and the providers&apos; interest in discoverability. If you are a course provider
                        and wish to update or remove your listing, contact us at{' '}
                        <a href="mailto:ghosharabinda919@gmail.com" className="text-primary hover:underline">
                            ghosharabinda919@gmail.com
                        </a>
                        .
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3">6. No warranties</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        FreeCourseHub is provided &ldquo;as is&rdquo; without warranty of any kind. We make no
                        guarantee that listed courses will remain free, available, or of a particular quality.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3">7. Contact</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Questions or concerns?{' '}
                        <a href="mailto:ghosharabinda919@gmail.com" className="text-primary hover:underline">
                            ghosharabinda919@gmail.com
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
}
