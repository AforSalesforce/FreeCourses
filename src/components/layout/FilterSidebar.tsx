'use client';

import { useState } from 'react';
import { useQueryState, parseAsArrayOf, parseAsString } from 'nuqs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X, Filter, ChevronDown, ChevronUp, Award } from 'lucide-react';

const CATEGORIES = [
    'Computer Science',
    'Web Development',
    'AI & Machine Learning',
    'Data Science',
    'Cloud Computing',
    'Programming',
    'DevOps',
    'Design',
    'Mobile Development',
    'Cybersecurity',
    'Database',
    'Software Engineering',
    'Business',
    'Mathematics'
];
const PROVIDERS = ['Coursera', 'edX', 'YouTube', 'freeCodeCamp', 'MIT', 'Harvard', 'Google', 'Microsoft', 'AWS', 'Kaggle'];
const LEVELS = ['Beginner', 'Intermediate', 'Advanced', 'All Levels'];

const CERTIFICATE_OPTIONS = [
    { value: 'free', label: 'Free Certificate', description: 'Verified certificate at no cost' },
    { value: 'completion-badge', label: 'Completion Badge', description: 'Digital badge on completion' },
    { value: 'audit-only', label: 'Free Audit', description: 'Content free, certificate paid' },
    { value: 'none', label: 'No Certificate', description: 'Self-study, no credential' },
];

const ACCESS_OPTIONS = [
    { value: 'fully-free', label: '100% Free', description: 'No payment required for any content' },
    { value: 'audit', label: 'Audit Free', description: 'Free to audit; certificate is paid' },
];

export function FilterSidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useQueryState('categories', parseAsArrayOf(parseAsString).withDefault([]));
    const [selectedProviders, setSelectedProviders] = useQueryState('providers', parseAsArrayOf(parseAsString).withDefault([]));
    const [selectedLevels, setSelectedLevels] = useQueryState('levels', parseAsArrayOf(parseAsString).withDefault([]));
    const [selectedCerts, setSelectedCerts] = useQueryState('certs', parseAsArrayOf(parseAsString).withDefault([]));
    const [selectedAccess, setSelectedAccess] = useQueryState('access', parseAsArrayOf(parseAsString).withDefault([]));

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
        setSelectedCerts(null);
        setSelectedAccess(null);
    };

    const hasActiveFilters =
        selectedCategories.length > 0 ||
        selectedProviders.length > 0 ||
        selectedLevels.length > 0 ||
        selectedCerts.length > 0 ||
        selectedAccess.length > 0;

    const activeFilterCount =
        selectedCategories.length +
        selectedProviders.length +
        selectedLevels.length +
        selectedCerts.length +
        selectedAccess.length;

    return (
        <>
            {/* Mobile Filter Toggle Button */}
            <div className="md:hidden w-full mb-4">
                <Button
                    variant="outline"
                    className="w-full justify-between"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="flex items-center gap-2">
                        <Filter size={16} />
                        Filters
                        {activeFilterCount > 0 && (
                            <Badge variant="default" className="ml-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                                {activeFilterCount}
                            </Badge>
                        )}
                    </span>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </Button>
            </div>

            {/* Filter Content */}
            <aside className={`w-full md:w-64 shrink-0 space-y-6 ${isOpen ? 'block' : 'hidden md:block'} md:pr-6`}>
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-foreground">Filters</h3>
                    {hasActiveFilters && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={clearAll}
                            className="h-8 px-2 text-xs text-muted-foreground hover:text-destructive"
                        >
                            Clear all <X size={12} className="ml-1" />
                        </Button>
                    )}
                </div>

                {/* Certificate Type — shown first, it's the highest-intent filter */}
                <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground flex items-center gap-1.5">
                        <Award size={13} /> Certificate
                    </h4>
                    <div className="space-y-2">
                        {CERTIFICATE_OPTIONS.map((opt) => (
                            <label key={opt.value} className="flex items-start gap-2 text-sm cursor-pointer group">
                                <div
                                    className={`w-4 h-4 mt-0.5 rounded border flex items-center justify-center transition-colors shrink-0 ${
                                        selectedCerts.includes(opt.value)
                                            ? 'bg-primary border-primary'
                                            : 'border-muted-foreground/30 group-hover:border-primary/50'
                                    }`}
                                    onClick={() => toggleFilter(selectedCerts, setSelectedCerts, opt.value)}
                                >
                                    {selectedCerts.includes(opt.value) && <div className="w-2 h-2 bg-primary-foreground rounded-sm" />}
                                </div>
                                <div className="flex flex-col" onClick={() => toggleFilter(selectedCerts, setSelectedCerts, opt.value)}>
                                    <span className={`transition-colors ${selectedCerts.includes(opt.value) ? 'text-foreground font-medium' : 'text-muted-foreground group-hover:text-foreground'}`}>
                                        {opt.label}
                                    </span>
                                    <span className="text-[11px] text-muted-foreground/70">{opt.description}</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Access Type */}
                <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground">Access</h4>
                    <div className="space-y-2">
                        {ACCESS_OPTIONS.map((opt) => (
                            <label key={opt.value} className="flex items-start gap-2 text-sm cursor-pointer group">
                                <div
                                    className={`w-4 h-4 mt-0.5 rounded-full border flex items-center justify-center transition-colors shrink-0 ${
                                        selectedAccess.includes(opt.value)
                                            ? 'bg-primary border-primary'
                                            : 'border-muted-foreground/30 group-hover:border-primary/50'
                                    }`}
                                    onClick={() => toggleFilter(selectedAccess, setSelectedAccess, opt.value)}
                                >
                                    {selectedAccess.includes(opt.value) && <div className="w-2 h-2 bg-primary-foreground rounded-full" />}
                                </div>
                                <div className="flex flex-col" onClick={() => toggleFilter(selectedAccess, setSelectedAccess, opt.value)}>
                                    <span className={`transition-colors ${selectedAccess.includes(opt.value) ? 'text-foreground font-medium' : 'text-muted-foreground group-hover:text-foreground'}`}>
                                        {opt.label}
                                    </span>
                                    <span className="text-[11px] text-muted-foreground/70">{opt.description}</span>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Categories */}
                <div className="space-y-3">
                    <h4 className="text-sm font-medium text-muted-foreground">Category</h4>
                    <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                        {CATEGORIES.map((category) => (
                            <label key={category} className="flex items-center gap-2 text-sm cursor-pointer group">
                                <div
                                    className={`w-4 h-4 rounded border flex items-center justify-center transition-colors shrink-0 ${selectedCategories.includes(category)
                                            ? 'bg-primary border-primary'
                                            : 'border-muted-foreground/30 group-hover:border-primary/50'
                                        }`}
                                    onClick={() => toggleFilter(selectedCategories, setSelectedCategories, category)}
                                >
                                    {selectedCategories.includes(category) && <div className="w-2 h-2 bg-primary-foreground rounded-sm" />}
                                </div>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => toggleFilter(selectedCategories, setSelectedCategories, category)}
                                />
                                <span
                                    className={`transition-colors truncate ${selectedCategories.includes(category) ? 'text-foreground font-medium' : 'text-muted-foreground group-hover:text-foreground'}`}
                                    onClick={() => toggleFilter(selectedCategories, setSelectedCategories, category)}
                                >
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
                                className="cursor-pointer transition-all hover:opacity-80 text-xs"
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
                                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors shrink-0 ${selectedLevels.includes(level)
                                            ? 'bg-primary border-primary'
                                            : 'border-muted-foreground/30 group-hover:border-primary/50'
                                        }`}
                                    onClick={() => toggleFilter(selectedLevels, setSelectedLevels, level)}
                                >
                                    {selectedLevels.includes(level) && <div className="w-2 h-2 bg-primary-foreground rounded-full" />}
                                </div>
                                <input
                                    type="checkbox"
                                    className="hidden"
                                    checked={selectedLevels.includes(level)}
                                    onChange={() => toggleFilter(selectedLevels, setSelectedLevels, level)}
                                />
                                <span
                                    className={`transition-colors ${selectedLevels.includes(level) ? 'text-foreground font-medium' : 'text-muted-foreground group-hover:text-foreground'}`}
                                    onClick={() => toggleFilter(selectedLevels, setSelectedLevels, level)}
                                >
                                    {level}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
}
