import type { SocialLink } from '@/types/navigation';

export const siteConfig = {
  name: 'YUTOMAX',
  tagline: 'Custom Software & Product Engineering',
  description:
    'We engineer premium custom software solutions, SaaS products, and AI-powered systems that scale with your business.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yutomax.com',

  contact: {
    email:  'sales@yutomax.com',
  },

  socialLinks: [
    { platform: 'LinkedIn', url: 'https://www.LinkedIn.com/company/yutomax', icon: 'linkedin' },
    { platform: 'Instagram', url: 'https://www.instagram.com/yutomax.tech', icon: 'instagram' },
    { platform: 'YouTube', url: 'https://youtube.com/@yutomax_tech', icon: 'youtube' },
    { platform: 'X', url: 'https://x.com/yutomax_tech', icon: 'x' },
  ] satisfies SocialLink[],

  legal: {
    copyright: `© ${new Date().getFullYear()} YUTOMAX. All rights reserved.`,
    privacyUrl: '/privacy',
    termsUrl: '/terms',
  },
} as const;
