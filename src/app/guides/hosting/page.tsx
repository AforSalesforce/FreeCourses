
import { Metadata } from 'next';
import Link from 'next/link';
import {
    Cloud,
    Github,
    Server,
    Globe,
    Zap,
    CheckCircle2,
    ArrowRight,
    Database
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Free Website Hosting Guide | OnlineFreeCourses',
    description: 'The ultimate guide to hosting your website for $0. Compare the best free platforms like Vercel, Netlify, and GitHub Pages.',
};

export default function HostingGuidePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/10 via-background to-background pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-500 mb-8 animate-fade-in-up">
                            <Cloud size={16} />
                            <span>Full Stack Hosting Guide</span>
                        </div>

                        <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                            Host Your Website <br />
                            <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">For Free Forever</span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                            You don't need a credit card to launch your project. Here represent the best platforms that offer generous free tiers for developers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Comparison Grid */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">Top Free Platforms</h2>

                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Vercel */}
                            <div className="bg-card border rounded-2xl p-8 hover:shadow-xl transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <svg width="120" height="120" viewBox="0 0 116 100" fill="currentColor">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0Z" />
                                    </svg>
                                </div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 bg-black text-white rounded-lg flex items-center justify-center">
                                        <svg width="24" height="24" viewBox="0 0 116 100" fill="white">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M57.5 0L115 100H0L57.5 0Z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Vercel</h3>
                                        <span className="text-sm text-muted-foreground">Best for Next.js & React</span>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                        <span>Zero-config deployments for Next.js</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                        <span>Automatic HTTPS & SSL</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                        <span>Fast global Edge Network</span>
                                    </div>
                                </div>
                                <Button className="w-full gap-2 group-hover:translate-x-1 transition-transform" asChild>
                                    <Link href="https://vercel.com/signup" target="_blank">
                                        Deploy on Vercel <ArrowRight size={16} />
                                    </Link>
                                </Button>
                            </div>

                            {/* Netlify */}
                            <div className="bg-card border rounded-2xl p-8 hover:shadow-xl transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Globe size={120} />
                                </div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 bg-[#00C7B7] text-white rounded-lg flex items-center justify-center">
                                        <Globe size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Netlify</h3>
                                        <span className="text-sm text-muted-foreground">Best for Static Sites</span>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                        <span>Drag & drop deployment</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                        <span>Powerful free serverless functions</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                        <span>Instant form handling</span>
                                    </div>
                                </div>
                                <Button variant="outline" className="w-full gap-2 group-hover:bg-accent" asChild>
                                    <Link href="https://www.netlify.com" target="_blank">
                                        Deploy on Netlify <ArrowRight size={16} />
                                    </Link>
                                </Button>
                            </div>

                            {/* GitHub Pages */}
                            <div className="bg-card border rounded-2xl p-8 hover:shadow-xl transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Github size={120} />
                                </div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 bg-gray-900 text-white rounded-lg flex items-center justify-center">
                                        <Github size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">GitHub Pages</h3>
                                        <span className="text-sm text-muted-foreground">Best for Simple Projects</span>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                        <span>Directly hosts from your repo</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                        <span>Completely free forever</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                        <span>Great for documentation & portfolios</span>
                                    </div>
                                </div>
                                <Button variant="outline" className="w-full gap-2 group-hover:bg-accent" asChild>
                                    <Link href="https://pages.github.com" target="_blank">
                                        Start with GitHub <ArrowRight size={16} />
                                    </Link>
                                </Button>
                            </div>

                            {/* Render */}
                            <div className="bg-card border rounded-2xl p-8 hover:shadow-xl transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Server size={120} />
                                </div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                                        <Server size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold">Render</h3>
                                        <span className="text-sm text-muted-foreground">Best for Full Stack</span>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                        <span>Free web services & databases</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                        <span>Supports Node, Python, Go, Rust</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <CheckCircle2 className="text-green-500 shrink-0 mt-1" size={18} />
                                        <span>Automatic deploys from Git</span>
                                    </div>
                                </div>
                                <Button variant="outline" className="w-full gap-2 group-hover:bg-accent" asChild>
                                    <Link href="https://render.com" target="_blank">
                                        Deploy on Render <ArrowRight size={16} />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Comparison Table */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-bold mb-8 text-center">At a Glance</h2>
                        <div className="border rounded-xl overflow-hidden">
                            <table className="w-full text-left bg-card">
                                <thead className="bg-muted">
                                    <tr>
                                        <th className="p-4 font-medium">Platform</th>
                                        <th className="p-4 font-medium hidden sm:table-cell">Best For</th>
                                        <th className="p-4 font-medium">Free Tier Limits</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    <tr>
                                        <td className="p-4 font-semibold">Vercel</td>
                                        <td className="p-4 text-muted-foreground hidden sm:table-cell">Next.js / Frontend</td>
                                        <td className="p-4 text-sm">Generous for hobby; commercial use requires Pro.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Netlify</td>
                                        <td className="p-4 text-muted-foreground hidden sm:table-cell">Static Sites</td>
                                        <td className="p-4 text-sm">100GB Bandwidth / month.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">GitHub</td>
                                        <td className="p-4 text-muted-foreground hidden sm:table-cell">Static / Docs</td>
                                        <td className="p-4 text-sm">Open source repos only (for free private use limits).</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Render</td>
                                        <td className="p-4 text-muted-foreground hidden sm:table-cell">Full Backend</td>
                                        <td className="p-4 text-sm">Free instance spins down after inactivity.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 text-center bg-muted/30">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Need more tools?</h2>
                    <Button size="lg" className="h-12 px-8 text-base" asChild>
                        <Link href="/resources">
                            View All Resources <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
