'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { courses } from '@/lib/data';
import { getFavorites } from '@/lib/user-utils';
import { CourseCard } from '@/components/course/CourseCard';
import { Button } from '@/components/ui/button';
import { Heart, ArrowRight } from 'lucide-react';
import { Course } from '@/lib/types';

export default function FavoritesPage() {
    const [favoriteCourses, setFavoriteCourses] = useState<Course[] | null>(null);

    useEffect(() => {
        const ids = getFavorites();
        setFavoriteCourses(courses.filter((c) => ids.includes(c.id)));
    }, []);

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="mb-8">
                <h1 className="text-3xl font-extrabold tracking-tight flex items-center gap-3 mb-2">
                    <Heart className="fill-red-500 text-red-500" size={28} />
                    My Courses
                </h1>
                <p className="text-muted-foreground">
                    Courses you&apos;ve saved. Stored on this device — sign-in sync coming soon.
                </p>
            </div>

            {favoriteCourses === null ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-80 bg-muted animate-pulse rounded-xl" />
                    ))}
                </div>
            ) : favoriteCourses.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteCourses.map((course) => (
                        <CourseCard key={course.id} {...course} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center border rounded-xl border-dashed bg-muted/30">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                        <Heart className="text-muted-foreground" size={28} />
                    </div>
                    <h2 className="text-xl font-bold mb-2">No saved courses yet</h2>
                    <p className="text-muted-foreground max-w-sm mb-6">
                        Tap the heart on any course card to save it here for later.
                    </p>
                    <Button asChild>
                        <Link href="/">
                            Browse Courses <ArrowRight size={14} className="ml-2" />
                        </Link>
                    </Button>
                </div>
            )}
        </div>
    );
}
