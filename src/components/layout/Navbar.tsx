'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useQueryState, parseAsString } from 'nuqs';
import { Search, Menu, X, GraduationCap, BookOpen, Compass, FileText, Home, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StreakCounter } from '@/components/features/StreakCounter';

export function Navbar() {
    const [searchQuery, setSearchQuery] = useQueryState('q', parseAsString.withDefault('').withOptions({ shallow: true, history: 'replace' }));
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { href: '/categories', label: 'Categories', icon: Compass },
        { href: '/paths', label: 'Learning Paths', icon: BookOpen },
        { href: '/resources', label: 'Resources', icon: FileText },
        { href: '/blog', label: 'Blog', icon: FileText },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4 gap-2">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80 shrink-0">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                        <GraduationCap size={18} />
                    </div>
                    <span className="text-lg sm:text-xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent hidden xs:inline">
                        FreeCourseHub
                    </span>
                </Link>

                {/* Desktop Search */}
                <div className="hidden md:flex flex-1 items-center justify-center max-w-md mx-4 lg:mx-8">
                    <div className="relative w-full group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value || null)}
                            className="h-10 w-full rounded-full border border-input bg-secondary/50 px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 transition-all hover:bg-secondary hover:border-primary/50"
                        />
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2">
                    <nav className="flex items-center gap-4 lg:gap-6 text-sm font-medium mr-2 lg:mr-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                    <Button
                        variant="default"
                        size="sm"
                        className="hidden lg:inline-flex bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                        asChild
                    >
                        <Link href="/favorites">
                            <Heart size={14} className="mr-1.5" /> My Courses
                        </Link>
                    </Button>
                    <StreakCounter />
                </div>

                {/* Mobile Actions */}
                <div className="flex md:hidden items-center gap-2">
                    <StreakCounter />
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-9 w-9"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </Button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-fade-in">
                    {/* Mobile Search */}
                    <div className="p-4 border-b border-border">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                            <input
                                type="text"
                                placeholder="Search courses..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value || null)}
                                className="h-10 w-full rounded-lg border border-input bg-secondary/50 px-10 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            />
                        </div>
                    </div>

                    {/* Mobile Nav Links */}
                    <nav className="p-2">
                        <Link
                            href="/"
                            className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <Home size={18} className="text-muted-foreground" />
                            <span className="font-medium">Home</span>
                        </Link>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <link.icon size={18} className="text-muted-foreground" />
                                <span className="font-medium">{link.label}</span>
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Favorites */}
                    <div className="p-4 border-t border-border">
                        <Button className="w-full" asChild>
                            <Link href="/favorites" onClick={() => setIsMobileMenuOpen(false)}>
                                <Heart size={14} className="mr-1.5" /> My Courses
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    );
}
