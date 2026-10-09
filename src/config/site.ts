import type { SocialLink } from '@/types/navigation';

export const siteConfig = {
  name: 'YUTOMAX',
  tagline: 'Custom Software & Product Engineering',
  description:
    'We engineer premium custom software solutions, SaaS products, and AI-powered systems that scale with your business.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://yutomax.com',

  contact: {
    email: 'yutomaxsolutions@gmail.com',
  },

  socialLinks: [
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/yutomax', icon: 'linkedin' },
    { platform: 'Instagram', url: 'https://instagram.com/yutomaxsolutions', icon: 'instagram' },
    { platform: 'YouTube', url: 'https://youtube.com/@yutomaxsolutions', icon: 'youtube' },
    { platform: 'X', url: 'https://x.com/yutomaxdev', icon: 'x' },
  ] satisfies SocialLink[],

  legal: {
    copyright: `© ${new Date().getFullYear()} YUTOMAX. All rights reserved.`,
    privacyUrl: '/privacy',
    termsUrl: '/terms',
  },
} as const;
