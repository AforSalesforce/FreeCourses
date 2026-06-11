'use client';

import { useQueryState, parseAsArrayOf, parseAsString } from 'nuqs';
import { Course } from '@/lib/types';
import { CourseCard } from './CourseCard';
import { Sparkles, TrendingUp, Clock } from 'lucide-react';
import { useState } from 'react';

interface CourseGridProps {
    initialCourses: Course[];
}

type SortOption = 'relevance' | 'rating' | 'newest';

export function CourseGrid({ initialCourses }: CourseGridProps) {
    const [sortBy, setSortBy] = useState<SortOption>('relevance');

    // URL state for filters
    const [selectedCategories] = useQueryState('categories', parseAsArrayOf(parseAsString).withDefault([]));
    const [selectedProviders] = useQueryState('providers', parseAsArrayOf(parseAsString).withDefault([]));
    const [selectedLevels] = useQueryState('levels', parseAsArrayOf(parseAsString).withDefault([]));
    const [selectedCerts] = useQueryState('certs', parseAsArrayOf(parseAsString).withDefault([]));
    const [selectedAccess] = useQueryState('access', parseAsArrayOf(parseAsString).withDefault([]));
    const [searchQuery] = useQueryState('q', parseAsString.withDefault(''));

    // Client-side filtering
    const filteredCourses = initialCourses.filter((course) => {
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category);
        const matchesProvider = selectedProviders.length === 0 ||
            selectedProviders.some(p => course.provider.toLowerCase().includes(p.toLowerCase()));
        const matchesLevel = selectedLevels.length === 0 || selectedLevels.includes(course.level);
        const matchesCert = selectedCerts.length === 0 ||
            (course.certificateType && selectedCerts.includes(course.certificateType));
        const matchesAccess = selectedAccess.length === 0 || (
            (selectedAccess.includes('fully-free') && !course.isAudit) ||
            (selectedAccess.includes('audit') && course.isAudit)
        );

        const matchesSearch = searchQuery === '' ||
            course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.topics.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
            course.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.category.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesProvider && matchesLevel && matchesCert && matchesAccess && matchesSearch;
    });

    // Sorting
    const sortedCourses = [...filteredCourses].sort((a, b) => {
        switch (sortBy) {
            case 'rating':
                return b.rating - a.rating;
            case 'newest':
                return (a.isNew ? -1 : 1) - (b.isNew ? -1 : 1);
            default:
                // Featured first, then by rating
                if (a.isFeatured && !b.isFeatured) return -1;
                if (!a.isFeatured && b.isFeatured) return 1;
                return b.rating - a.rating;
        }
    });

    const listKey = `${selectedCategories.join(',')}-${selectedProviders.join(',')}-${selectedLevels.join(',')}-${selectedCerts.join(',')}-${selectedAccess.join(',')}-${sortBy}`;

    return (
        <div className="w-full min-w-0">
            {/* Header with count and sort */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                    {sortedCourses.length} {sortedCourses.length === 1 ? 'Course' : 'Courses'}
                    {selectedCategories.length > 0 && (
                        <span className="text-muted-foreground font-normal text-base ml-2">
                            in {selectedCategories.slice(0, 2).join(', ')}
                            {selectedCategories.length > 2 && ` +${selectedCategories.length - 2}`}
                        </span>
                    )}
                </h2>

                {/* Sort buttons */}
                <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground hidden sm:inline">Sort:</span>
                    <div className="flex rounded-lg border border-border overflow-hidden">
                        <button
                            onClick={() => setSortBy('relevance')}
                            className={`px-3 py-1.5 text-xs font-medium transition-colors ${sortBy === 'relevance'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-background hover:bg-muted'
                                }`}
                        >
                            <TrendingUp size={12} className="inline mr-1" />
                            Popular
                        </button>
                        <button
                            onClick={() => setSortBy('rating')}
                            className={`px-3 py-1.5 text-xs font-medium transition-colors border-l border-border ${sortBy === 'rating'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-background hover:bg-muted'
                                }`}
                        >
                            ⭐ Rating
                        </button>
                        <button
                            onClick={() => setSortBy('newest')}
                            className={`px-3 py-1.5 text-xs font-medium transition-colors border-l border-border ${sortBy === 'newest'
                                    ? 'bg-primary text-primary-foreground'
                                    : 'bg-background hover:bg-muted'
                                }`}
                        >
                            <Clock size={12} className="inline mr-1" />
                            New
                        </button>
                    </div>
                </div>
            </div>

            {sortedCourses.length > 0 ? (
                <div key={listKey} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {sortedCourses.map((course, index) => (
                        <div
                            key={course.id}
                            style={{ animationDelay: `${Math.min(index * 30, 300)}ms` }}
                            className="animate-fade-in fill-mode-forwards opacity-0"
                        >
                            <CourseCard {...course} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-16 sm:py-20 text-center border rounded-xl border-dashed bg-muted/30">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                        <Sparkles className="text-muted-foreground w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">No courses found</h3>
                    <p className="text-muted-foreground max-w-sm text-sm sm:text-base px-4">
                        Try adjusting your filters or search query to find what you're looking for.
                    </p>
                </div>
            )}
        </div>
    );
}
