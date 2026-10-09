import type { SiteMetadata } from '@/types/seo';

export const seoConfig: SiteMetadata = {
  siteName: 'YUTOMAX',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://yutomax.com',
  defaultTitle: 'YUTOMAX — Custom Software & Product Engineering',
  defaultDescription:
    'YUTOMAX builds premium custom software solutions, SaaS products, web & mobile applications, and AI-powered systems. We engineer software that scales.',
  ogImage: '/images/og-default.png',
  twitterHandle: '@yutomaxdev',
};
