export interface Course {
    id: string;
    title: string;
    provider: string;
    thumbnail: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    category: string;
    topics: string[];
    rating: number;
    views: string;
    sourceUrl: string;
    affiliateUrl?: string;
    isAudit: boolean;
}
