import { MetadataRoute } from 'next';
import { blogs } from '@/lib/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ovelah.com';

  const staticRoutes = [
    '',
    '/platform',
    '/product',
    '/solutions',
    '/solutions/job-management',
    '/solutions/quotation-billing',
    '/industries',
    '/industries/engineering-maintenance',
    '/industries/hvac-electrical',
    '/industries/facility-management',
    '/industries/construction',
    '/customers',
    '/clients/infinity-engineering-solutions',
    '/about',
    '/contact',
    '/pricing',
    '/security',
    '/privacy',
    '/terms',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blog/${blog.slug}`,
    lastModified: new Date(blog.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}