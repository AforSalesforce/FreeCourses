import type { MetadataRoute } from 'next';
import { courses, courseCategories } from '@/lib/data';
import { blogPosts } from '@/lib/blog-data';
import { siteUrl } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        '',
        '/categories',
        '/paths',
        '/resources',
        '/blog',
        '/guides/engineering',
        '/guides/hosting',
        '/favorites',
    ].map((path) => ({
        url: `${siteUrl}${path}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.7,
    }));

    const courseRoutes: MetadataRoute.Sitemap = courses.map((course) => ({
        url: `${siteUrl}/course/${course.id}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    const categoryRoutes: MetadataRoute.Sitemap = courseCategories.map((category) => ({
        url: `${siteUrl}/courses/${encodeURIComponent(category)}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.6,
    }));

    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.5,
    }));

    return [...staticRoutes, ...courseRoutes, ...categoryRoutes, ...blogRoutes];
}
