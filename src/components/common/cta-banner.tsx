
import { ButtonLink } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { ctaContent } from '@/content/cta';
import { cn } from '@/lib/utils';

interface CtaBannerProps {
  className?: string;
  headline?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBanner({
  className,
  headline = ctaContent.headline,
  description = ctaContent.description,
  primaryLabel = ctaContent.primaryCTA.label,
  primaryHref = ctaContent.primaryCTA.href,
  secondaryLabel = ctaContent.secondaryCTA.label,
  secondaryHref = ctaContent.secondaryCTA.href,
}: CtaBannerProps) {
  return (
    <div
      className={cn(
        'glass-card reveal relative overflow-hidden rounded-2xl md:rounded-3xl p-8 md:p-16 text-center',
        'shadow-[0_40px_120px_-40px_rgba(99,102,241,0.55)]',
        className
      )}
    >
      {/* Aurora blobs */}
      <div className="pointer-events-none absolute -left-24 -bottom-32 h-80 w-80 rounded-full bg-fuchsia-600/20 blur-[100px] animate-aurora" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/15 blur-[100px] animate-aurora-slow" aria-hidden="true" />

      {/* Background ambient radial glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-brand-500/20 via-brand-600/5 to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="eyebrow mb-6">
          <Icon name="sparkles" size={14} className="text-brand-400" />
          <span>Product Engineering & Architecture</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight heading-gradient mb-5 pb-1">
          {headline}
        </h2>

        <p className="text-body md:text-body-lg text-content-secondary max-w-xl mx-auto mb-8">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ButtonLink
            href={primaryHref}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            <span>{primaryLabel}</span>
            <Icon name="arrow-right" size={16} />
          </ButtonLink>

          {secondaryLabel && secondaryHref && (
            <ButtonLink
              href={secondaryHref}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <span>{secondaryLabel}</span>
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  );
}
