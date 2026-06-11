import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description: 'How FreeCourseHub collects and uses your information.',
    alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <Link href="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
                <ArrowLeft size={14} /> Back to home
            </Link>

            <h1 className="text-3xl font-extrabold tracking-tight mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground mb-10">Last updated: June 2026</p>

            <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
                <section>
                    <h2 className="text-xl font-bold mb-3">1. Information we collect</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        FreeCourseHub is a course discovery site. We do not require account creation. The only data
                        stored on your device is your saved (favorited) course IDs and your daily learning streak
                        counter, both held in your browser&apos;s <code>localStorage</code>. This data never leaves
                        your device and is not transmitted to our servers.
                    </p>
                    <p className="text-muted-foreground leading-relaxed mt-3">
                        If you subscribe to our newsletter, we collect your email address for the sole purpose of
                        sending you curated course updates. We use a third-party email provider and will never sell
                        your address.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3">2. Analytics</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We use privacy-friendly analytics (Vercel Analytics) to understand aggregate traffic patterns —
                        page views and referral sources. This does not use cookies and does not track you across
                        websites. No personally identifiable information is collected.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3">3. Affiliate links</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Some outbound links to course providers may be affiliate links. If you enroll in a paid
                        upgrade through such a link, we may earn a small commission at no extra cost to you. Affiliate
                        relationships do not influence which courses we feature — all listed courses are genuinely free
                        to access (fully or via audit).
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3">4. Third-party sites</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        FreeCourseHub links to external course providers (Coursera, edX, freeCodeCamp, etc.). We are
                        not responsible for the privacy practices of those sites. Please review their respective
                        privacy policies before enrolling.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3">5. Cookies</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        We do not set any tracking cookies. Our analytics provider does not use cookies. Your
                        browser&apos;s <code>localStorage</code> (used for favorites and streak) is not a cookie and
                        is not accessible to third parties.
                    </p>
                </section>

                <section>
                    <h2 className="text-xl font-bold mb-3">6. Contact</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Questions about this policy? Email us at{' '}
                        <a href="mailto:ghosharabinda919@gmail.com" className="text-primary hover:underline">
                            ghosharabinda919@gmail.com
                        </a>
                        .
                    </p>
                </section>
            </div>
        </div>
    );
}
