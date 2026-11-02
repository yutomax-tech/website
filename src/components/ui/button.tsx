import { forwardRef, type ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-brand text-white hover:bg-gradient-brand-hover active:scale-[0.98] active:brightness-90 ' +
    'shadow-[0_0_0_1px_rgba(129,140,248,0.35),0_8px_30px_-8px_rgba(99,102,241,0.7)] hover:shadow-[0_0_0_1px_rgba(165,180,252,0.55),0_12px_40px_-6px_rgba(99,102,241,0.9)]',
  secondary:
    'border border-white/10 bg-white/[0.03] backdrop-blur-md text-content-primary hover:bg-surface-elevated hover:border-brand-500/30 active:scale-[0.98] ' +
    // Pressed + "just clicked" (keeps focus) feedback
    'active:bg-brand-500/15 active:border-brand-400/60 active:text-brand-100 focus:bg-brand-500/10 focus:border-brand-400/60',
  ghost:
    'text-content-secondary hover:text-content-primary hover:bg-surface-elevated active:bg-brand-500/10 active:text-brand-200',
};

/** Persistent "current page" state, e.g. the Start a Project CTA while on /contact. */
const activeStyles: Record<ButtonVariant, string> = {
  primary: 'ring-2 ring-brand-300/70 ring-offset-2 ring-offset-surface-primary brightness-110',
  secondary: 'bg-brand-500/15 border-brand-400/60 text-brand-100',
  ghost: 'bg-brand-500/10 text-brand-200',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-body-sm',
  md: 'px-6 py-3 text-body',
  lg: 'px-8 py-4 text-body-lg',
};

function getButtonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
  active = false
) {
  return cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium',
    'transition-all duration-200 ease-smooth',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    variantStyles[variant],
    active && activeStyles[variant],
    sizeStyles[size],
    className
  );
}

/**
 * Button — primary UI primitive.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, disabled, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={getButtonClasses(variant, size, className)}
        {...props}
      >
        {isLoading ? (
          <>
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span>{children}</span>
          </>
        ) : (
          children
        )}
      </button>
    );
  }
);
Button.displayName = 'Button';

/**
 * ButtonLink — Link styled as a button.
 * Use this instead of wrapping <Link> inside <Button>.
 */
interface ButtonLinkProps {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Marks the link as the current page (adds aria-current + active styling). */
  active?: boolean;
  children: React.ReactNode;
}

export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  className,
  active = false,
  children,
}: ButtonLinkProps) {
  const isHash = href.startsWith('#');
  const classes = getButtonClasses(variant, size, className, active);
  const ariaCurrent = active ? ('page' as const) : undefined;

  if (isHash) {
    return (
      <a href={href} aria-current={ariaCurrent} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} aria-current={ariaCurrent} className={classes}>
      {children}
    </Link>
  );
}
