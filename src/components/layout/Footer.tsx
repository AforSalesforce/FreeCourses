import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-border bg-muted/30 mt-auto">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-3">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                <GraduationCap size={16} />
                            </div>
                            <span className="font-bold">FreeCourseHub</span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Curated free courses from top universities and creators. No paywalls, just learning.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-sm">Explore</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/categories" className="hover:text-foreground transition-colors">Categories</Link></li>
                            <li><Link href="/paths" className="hover:text-foreground transition-colors">Learning Paths</Link></li>
                            <li><Link href="/resources" className="hover:text-foreground transition-colors">Resources</Link></li>
                            <li><Link href="/favorites" className="hover:text-foreground transition-colors">My Favorites</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-sm">Guides</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/guides/engineering" className="hover:text-foreground transition-colors">The $0 Engineering Degree</Link></li>
                            <li><Link href="/guides/hosting" className="hover:text-foreground transition-colors">Free Hosting Guide</Link></li>
                            <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-3 text-sm">About</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="mailto:ghosharabinda919@gmail.com" className="hover:text-foreground transition-colors">Contact</a>
                            </li>
                            <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
                    <p>© {new Date().getFullYear()} FreeCourseHub. All course content belongs to its respective providers.</p>
                    <p>We may earn from affiliate links at no cost to you.</p>
                </div>
            </div>
        </footer>
    );
}
