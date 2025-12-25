
'use client';

import Link from 'next/link';
import { useQueryState, parseAsString } from 'nuqs';
import { Search, Menu, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StreakCounter } from '@/components/features/StreakCounter';

export function Navbar() {
    const [searchQuery, setSearchQuery] = useQueryState('q', parseAsString.withDefault('').withOptions({ shallow: true, history: 'replace' }));

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <GraduationCap size={20} />
                        </div>
                        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                            FreeCourseHub
                        </span>
                    </Link>
                </div>

                <div className="hidden md:flex flex-1 items-center justify-center max-w-md mx-8">
                    <div className="relative w-full group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search for courses..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value || null)}
                            className="h-10 w-full rounded-full border border-input bg-secondary/50 px-10 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all hover:bg-secondary hover:border-primary/50"
                        />
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                            <span className="text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5">⌘K</span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium mr-4">
                        <Link href="/categories" className="text-muted-foreground hover:text-foreground transition-colors">
                            Categories
                        </Link>
                        <Link href="/paths" className="text-muted-foreground hover:text-foreground transition-colors">
                            Learning Paths
                        </Link>
                        <Link href="/resources" className="text-muted-foreground hover:text-foreground transition-colors">
                            Resources
                        </Link>
                        <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                            Blog
                        </Link>
                    </nav>
                    <Button
                        variant="default"
                        size="sm"
                        className="hidden md:inline-flex bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                        onClick={() => window.alert("Student Portal coming soon! Stay tuned.")}
                    >
                        Sign In
                    </Button>
                    <StreakCounter />
                </div>
            </div>
        </header>
    );
}
