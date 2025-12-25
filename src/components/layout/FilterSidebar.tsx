
'use client';

import { useQueryState, parseAsArrayOf, parseAsString } from 'nuqs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const CATEGORIES = ['Computer Science', 'Web Development', 'AI & Data Science', 'Design', 'Cloud Computing', 'Programming'];
const PROVIDERS = ['YouTube', 'Coursera', 'University', 'Udemy', 'EdX'];
const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

export function FilterSidebar() {
    const [selectedCategories, setSelectedCategories] = useQueryState('categories', parseAsArrayOf(parseAsString).withDefault([]));
    const [selectedProviders, setSelectedProviders] = useQueryState('providers', parseAsArrayOf(parseAsString).withDefault([]));
    const [selectedLevels, setSelectedLevels] = useQueryState('levels', parseAsArrayOf(parseAsString).withDefault([]));

    const toggleFilter = (
        current: string[],
        setFn: (value: string[] | null) => void,
        value: string
    ) => {
        if (current.includes(value)) {
            const next = current.filter((i) => i !== value);
            setFn(next.length > 0 ? next : null);
        } else {
            setFn([...current, value]);
        }
    };

    const clearAll = () => {
        setSelectedCategories(null);
        setSelectedProviders(null);
        setSelectedLevels(null);
    };

    const hasActiveFilters = selectedCategories.length > 0 || selectedProviders.length > 0 || selectedLevels.length > 0;

    return (
        <aside className="w-full md:w-64 shrink-0 space-y-8 pr-6">
            <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">Filters</h3>
                {hasActiveFilters && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearAll}
                        className="h-8 px-2 text-xs text-muted-foreground hover:text-destructive"
                    >
                        Clear <X size={12} className="ml-1" />
                    </Button>
                )}
            </div>

            {/* Categories */}
            <div className="space-y-3">
                <h4 className="text-sm font-medium text-muted-foreground">Category</h4>
                <div className="space-y-2">
                    {CATEGORIES.map((category) => (
                        <label key={category} className="flex items-center gap-2 text-sm cursor-pointer group">
                            <div
                                className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedCategories.includes(category)
                                        ? 'bg-primary border-primary'
                                        : 'border-muted-foreground/30 group-hover:border-primary/50'
                                    }`}
                            >
                                {selectedCategories.includes(category) && <div className="w-2 h-2 bg-primary-foreground rounded-sm" />}
                            </div>
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={selectedCategories.includes(category)}
                                onChange={() => toggleFilter(selectedCategories, setSelectedCategories, category)}
                            />
                            <span className={`transition-colors ${selectedCategories.includes(category) ? 'text-foreground font-medium' : 'text-muted-foreground group-hover:text-foreground'}`}>
                                {category}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Providers */}
            <div className="space-y-3">
                <h4 className="text-sm font-medium text-muted-foreground">Provider</h4>
                <div className="flex flex-wrap gap-2">
                    {PROVIDERS.map((provider) => (
                        <Badge
                            key={provider}
                            variant={selectedProviders.includes(provider) ? 'default' : 'outline'}
                            className="cursor-pointer transition-all hover:opacity-80"
                            onClick={() => toggleFilter(selectedProviders, setSelectedProviders, provider)}
                        >
                            {provider}
                        </Badge>
                    ))}
                </div>
            </div>

            {/* Levels */}
            <div className="space-y-3">
                <h4 className="text-sm font-medium text-muted-foreground">Level</h4>
                <div className="space-y-2">
                    {LEVELS.map((level) => (
                        <label key={level} className="flex items-center gap-2 text-sm cursor-pointer group">
                            <div
                                className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${selectedLevels.includes(level)
                                        ? 'bg-primary border-primary'
                                        : 'border-muted-foreground/30 group-hover:border-primary/50'
                                    }`}
                            >
                                {selectedLevels.includes(level) && <div className="w-2 h-2 bg-primary-foreground rounded-full" />}
                            </div>
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={selectedLevels.includes(level)}
                                onChange={() => toggleFilter(selectedLevels, setSelectedLevels, level)}
                            />
                            <span className={`transition-colors ${selectedLevels.includes(level) ? 'text-foreground font-medium' : 'text-muted-foreground group-hover:text-foreground'}`}>
                                {level}
                            </span>
                        </label>
                    ))}
                </div>
            </div>
        </aside>
    );
}
