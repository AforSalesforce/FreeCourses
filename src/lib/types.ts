// Course Types
export type Level = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export type Category =
    | 'Computer Science'
    | 'Web Development'
    | 'Mobile Development'
    | 'Data Science'
    | 'AI & Machine Learning'
    | 'Cloud Computing'
    | 'DevOps'
    | 'Cybersecurity'
    | 'Blockchain'
    | 'Design'
    | 'Game Development'
    | 'Database'
    | 'Programming'
    | 'Software Engineering'
    | 'Business'
    | 'Marketing'
    | 'Finance'
    | 'Personal Development'
    | 'Mathematics'
    | 'Science & Engineering';

export type Platform =
    | 'Coursera'
    | 'edX'
    | 'MIT OpenCourseWare'
    | 'Harvard Online'
    | 'Stanford Online'
    | 'YouTube'
    | 'freeCodeCamp'
    | 'Khan Academy'
    | 'Udacity'
    | 'Google Skillshop'
    | 'AWS Skill Builder'
    | 'Microsoft Learn'
    | 'GitHub'
    | 'Scrimba'
    | 'The Odin Project'
    | 'Codecademy'
    | 'University Direct'
    | 'Kaggle'
    | 'DataCamp'
    | 'Other';

export type CertificateType =
    | 'free'
    | 'paid'
    | 'audit-only'
    | 'none'
    | 'completion-badge';

export interface Course {
    id: string;
    title: string;
    description?: string;
    provider: string;
    platform?: Platform;
    thumbnail: string;
    duration: string;
    level: Level;
    category: Category;
    subcategory?: string;
    topics: string[];
    skills?: string[];
    prerequisites?: string[];
    rating: number;
    reviewCount?: number;
    views: string;
    enrollments?: string;
    sourceUrl: string;
    affiliateUrl?: string;
    certificateType?: CertificateType;
    language?: string;
    subtitles?: string[];
    isAudit: boolean;
    isFeatured?: boolean;
    isNew?: boolean;
    addedDate?: string;
    lastVerified?: string;
}

export interface LearningPath {
    id: string;
    title: string;
    slug: string;
    description: string;
    icon: string;
    duration: string;
    level: Level;
    courseCount: number;
    courses: string[]; // Course IDs
    skills: string[];
    careerOutcomes: string[];
    prerequisites?: string[];
    color: string;
}

export interface Resource {
    id: string;
    title: string;
    type: string;
    description: string;
    url: string;
    tags: string[];
    isFree?: boolean;
}

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    publishedAt: string;
    category: string;
    tags: string[];
    thumbnail?: string;
    readTime?: string;
}
