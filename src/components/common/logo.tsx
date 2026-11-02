import Image from 'next/image';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

/**
 * Brand logo variants (white artwork on transparent, for the dark theme).
 * - `compact`: mark + wordmark — header / mobile nav.
 * - `full`: mark + wordmark + "The Next Shift in Tech" tagline — footer.
 */
const variants = {
  compact: { src: '/brand/yutomax-logo-white.png', width: 1527, height: 261 },
  full: { src: '/brand/yutomax-logo-horizontal-white.png', width: 1639, height: 368 },
} as const;

interface LogoProps {
  variant?: keyof typeof variants;
  className?: string;
}

export function Logo({ variant = 'compact', className }: LogoProps) {
  const { src, width, height } = variants[variant];
  return (
    <Image
      src={src}
      alt={siteConfig.name}
      width={width}
      height={height}
      className={cn('h-auto w-auto select-none', className)}
      draggable={false}
    />
  );
}
