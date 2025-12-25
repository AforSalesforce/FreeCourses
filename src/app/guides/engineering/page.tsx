
import { Metadata } from 'next';
import Link from 'next/link';
import {
    GraduationCap,
    BookOpen,
    Wrench,
    Code,
    Unlock,
    CheckCircle2,
    ArrowRight,
    School,
    MonitorPlay,
    Hammer
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
    title: 'Ivy League Engineering for Free | OnlineFreeCourses',
    description: 'A comprehensive guide to getting a top-tier engineering education for $0 using audits and open courseware.',
};

export default function EngineeringGuidePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/10 via-background to-background pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-500 mb-8 animate-fade-in-up">
                            <GraduationCap size={16} />
                            <span>The Strategic Guide</span>
                        </div>

                        <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
                            Get an Ivy League <br />
                            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Engineering Degree for $0</span>
                        </h1>

                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                            Don't waste time on random tutorials. Here is the exact roadmap to a rigorous, world-class technical education without the debt.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 1: The Gold Mine */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-600">
                                <School size={24} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold">1. The "Gold Mine" Sources</h2>
                                <p className="text-muted-foreground">Stop watching random tutorials. Learn to think like an engineer.</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="group bg-card border rounded-2xl p-8 hover:shadow-xl transition-all hover:border-orange-500/50">
                                <div className="h-12 w-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-xl mb-6">M</div>
                                <h3 className="text-xl font-bold mb-3">MIT OpenCourseWare</h3>
                                <p className="text-muted-foreground mb-6">The holy grail. Get the exact same syllabi, lecture notes, and assignments as students paying $60k/year.</p>
                                <Link href="https://ocw.mit.edu" target="_blank" className="text-sm font-semibold text-orange-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Visit MIT OCW <ArrowRight size={16} />
                                </Link>
                            </div>

                            <div className="group bg-card border rounded-2xl p-8 hover:shadow-xl transition-all hover:border-blue-500/50">
                                <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl mb-6">N</div>
                                <h3 className="text-xl font-bold mb-3">NPTEL (India)</h3>
                                <p className="text-muted-foreground mb-6">Unrivaled for technical depth. Dense, mathematical lectures from IIT professors. Highly respected globally.</p>
                                <Link href="https://nptel.ac.in" target="_blank" className="text-sm font-semibold text-blue-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Visit NPTEL <ArrowRight size={16} />
                                </Link>
                            </div>

                            <div className="group bg-card border rounded-2xl p-8 hover:shadow-xl transition-all hover:border-green-500/50">
                                <div className="h-12 w-12 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-xl mb-6">E</div>
                                <h3 className="text-xl font-bold mb-3">Engineer4Free</h3>
                                <p className="text-muted-foreground mb-6">Specialized for Civil, Mech, and Electrical. Breaks down complex topics like Structural Analysis into digestable parts.</p>
                                <Link href="https://www.engineer4free.com" target="_blank" className="text-sm font-semibold text-green-600 flex items-center gap-2 group-hover:gap-3 transition-all">
                                    Visit Engineer4Free <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: The Audit Loophole */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600">
                                <Unlock size={24} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold">2. Exploiting the "Audit" Loophole</h2>
                                <p className="text-muted-foreground">Platforms like Coursera and edX look expensive. They aren't.</p>
                            </div>
                        </div>

                        <div className="bg-card border rounded-3xl overflow-hidden shadow-sm">
                            <div className="grid md:grid-cols-2">
                                <div className="p-8 md:p-12 space-y-8">
                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold flex items-center gap-3">
                                            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm">1</span>
                                            Don't Click "Enroll"
                                        </h3>
                                        <p className="text-muted-foreground pl-11">
                                            When you find a top-tier course (e.g., Stanford Robotics), ignore the big paid button.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold flex items-center gap-3">
                                            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm">2</span>
                                            Find the "Audit" Link
                                        </h3>
                                        <p className="text-muted-foreground pl-11">
                                            Look for tiny text saying "Audit this course". This gives you access to all videos and readings for $0.
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="text-xl font-bold flex items-center gap-3">
                                            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground text-sm">3</span>
                                            Need a Certificate?
                                        </h3>
                                        <p className="text-muted-foreground pl-11">
                                            Use the "Financial Aid" link. They approve ~90% of genuine applications from low-income students.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-primary/5 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="bg-background rounded-xl p-6 shadow-lg border relative">
                                        <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold animate-bounce">
                                            Free Access!
                                        </div>
                                        <div className="space-y-4">
                                            <div className="h-4 bg-muted rounded w-3/4"></div>
                                            <div className="h-4 bg-muted rounded w-1/2"></div>
                                            <div className="mt-6 flex gap-3">
                                                <div className="h-10 bg-primary/20 rounded w-full flex items-center justify-center text-sm font-medium text-primary/50 cursor-not-allowed">Enroll ($$$)</div>
                                                <div className="h-10 bg-green-500 text-white rounded w-full flex items-center justify-center text-sm font-bold shadow-green-500/20 shadow-lg cursor-pointer transform hover:scale-105 transition-all">Audit (Free)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-6 text-sm text-center text-muted-foreground italic">
                                        "In engineering, the portfolio (what you built) matters more than the paper."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Tech Stack & Tools */}
            <section className="py-20 bg-blue-950 text-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold mb-12 text-center">3. High-Quality Resource Checklist</h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Textbooks */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                                <BookOpen className="h-8 w-8 text-blue-300 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Textbooks</h3>
                                <p className="text-blue-100 text-sm mb-4">Never pay $200 for Calculus.</p>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 size={16} className="mt-0.5 text-green-400 shrink-0" />
                                        <span>Open Textbook Library (Peer-reviewed)</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 size={16} className="mt-0.5 text-green-400 shrink-0" />
                                        <span>LibGen (For older editions)</span>
                                    </div>
                                </div>
                            </div>

                            {/* Software */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                                <MonitorPlay className="h-8 w-8 text-purple-300 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Software</h3>
                                <p className="text-blue-100 text-sm mb-4">Pro tools for students.</p>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 size={16} className="mt-0.5 text-green-400 shrink-0" />
                                        <span>Autodesk Student (AutoCAD, Fusion 360)</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 size={16} className="mt-0.5 text-green-400 shrink-0" />
                                        <span>MATLAB Student License</span>
                                    </div>
                                </div>
                            </div>

                            {/* Projects */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
                                <Hammer className="h-8 w-8 text-orange-300 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Real Engineering</h3>
                                <p className="text-blue-100 text-sm mb-4">Where the real work happens.</p>
                                <div className="space-y-3">
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 size={16} className="mt-0.5 text-green-400 shrink-0" />
                                        <span>GitHub (Open Source)</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-sm">
                                        <CheckCircle2 size={16} className="mt-0.5 text-green-400 shrink-0" />
                                        <span>StackOverflow</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer CTA */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Ready to start your journey?</h2>
                    <Button size="lg" className="h-12 px-8 text-base" asChild>
                        <Link href="/">
                            Explore Free Courses <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
