import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Lift + gradient-border glow on hover (also when inside a hovered `.group` link). */
  hover?: boolean;
  /** Fade/slide in as the card scrolls into view. */
  reveal?: boolean;
}

/**
 * Card — glass surface with a gradient hairline border (see `.glass-card` in globals.css).
 */
export function Card({ children, className, hover = true, reveal = true }: CardProps) {
  return (
    <div
      className={cn(
        'glass-card rounded-2xl p-6 sm:p-8',
        hover && 'glass-card-hover',
        reveal && 'reveal',
        className
      )}
    >
      {children}
    </div>
  );
}
