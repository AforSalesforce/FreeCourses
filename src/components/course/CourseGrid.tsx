
'use client';

import { useQueryState, parseAsArrayOf, parseAsString } from 'nuqs';
import { Course } from '@/lib/types';
import { CourseCard } from './CourseCard';
import { Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

interface CourseGridProps {
    initialCourses: Course[];
}

export function CourseGrid({ initialCourses }: CourseGridProps) {
    // We use the same hooks as the sidebar to read the state
    const [selectedCategories] = useQueryState('categories', parseAsArrayOf(parseAsString).withDefault([]));
    const [selectedProviders] = useQueryState('providers', parseAsArrayOf(parseAsString).withDefault([]));
    const [selectedLevels] = useQueryState('levels', parseAsArrayOf(parseAsString).withDefault([]));
    const [searchQuery] = useQueryState('q', parseAsString.withDefault(''));

    // Client-side filtering
    const filteredCourses = initialCourses.filter((course) => {
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
        const matchesProvider = selectedProviders.length === 0 || selectedProviders.includes(course.provider);
        // Note: URL might encode specific characters, usually nuqs handles this matching well if strings are exact
        const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level);

        const matchesSearch = searchQuery === '' ||
            course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

        return matchesCategory && matchesProvider && matchesLevel && matchesSearch;
    });

    // Animation key for forcing re-render of animations when list changes significantly
    const listKey = `${selectedCategories.join(',')}-${selectedProviders.join(',')}-${selectedLevels.join(',')}`;

    return (
        <div>
            <div className="mb-6 flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-tight">
                    {filteredCourses.length} {filteredCourses.length === 1 ? 'Course' : 'Courses'}
                    {selectedCategories.length > 0 && ` in ${selectedCategories.join(', ')}`}
                </h2>
                <div className="text-sm text-muted-foreground">
                    Sorted by <span className="font-medium text-foreground">Relevance</span>
                </div>
            </div>

            {filteredCourses.length > 0 ? (
                <div key={listKey} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCourses.map((course, index) => (
                        <div
                            key={course.id}
                            style={{ animationDelay: `${index * 50}ms` }}
                            className="animate-fade-in fill-mode-forwards opacity-0"
                        >
                            <CourseCard {...course} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center border rounded-xl border-dashed bg-muted/30">
                    <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                        <Sparkles className="text-muted-foreground w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">No courses found</h3>
                    <p className="text-muted-foreground max-w-sm">
                        Try adjusting your filters to find what you're looking for.
                    </p>
                </div>
            )}
        </div>
    );
}
