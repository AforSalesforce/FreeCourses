
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, CheckCircle2, Sparkles } from 'lucide-react';

export function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5 -z-10" />
            <div className="absolute top-0 right-0 p-12 opacity-10 text-primary">
                <Sparkles size={180} />
            </div>

            <div className="container mx-auto px-4 text-center">
                <div className="max-w-2xl mx-auto bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-xl backdrop-blur-sm">
                    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary mb-6">
                        <Mail size={12} />
                        <span>Weekly Digest</span>
                    </div>

                    <h2 className="text-3xl font-bold mb-4">Get the "2025 Learning Roadmap"</h2>
                    <p className="text-muted-foreground mb-8">
                        Join 25,000+ learners. Get a weekly digest of the best new free courses, hidden gems, and career advice. Plus, get our PDF roadmap for free.
                    </p>

                    {status === 'success' ? (
                        <div className="flex flex-col items-center gap-2 text-green-600 animate-fade-in">
                            <CheckCircle2 size={48} />
                            <p className="font-semibold">You're in! Check your inbox for the roadmap.</p>
                            <Button variant="link" onClick={() => setStatus('idle')} className="text-sm text-green-700">
                                Register another email
                            </Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                required
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                            <Button type="submit" disabled={status === 'loading'} className="min-w-[120px]">
                                {status === 'loading' ? 'Joining...' : 'Join Free'}
                            </Button>
                        </form>
                    )}

                    <p className="text-xs text-muted-foreground mt-4">
                        No spam. Unsubscribe at any time.
                    </p>
                </div>
            </div>
        </section>
    );
}
