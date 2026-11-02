import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { TechBadge } from '@/components/common/tech-badge';
import type { Service } from '@/types/services';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <Card
      className={cn(
        'group relative flex flex-col justify-between p-7 md:p-8 transition-all duration-300',
        '',
        className
      )}
    >
      {/* Top accent glow on hover */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-400/60 transition-all duration-500" />

      <div>
        {/* Icon & Title */}
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 rounded-xl icon-tile flex items-center justify-center shrink-0 group-hover:bg-brand-500/20 group-hover:text-brand-300 group-hover:scale-105 transition-all duration-300">
            <Icon name={service.icon} size={24} />
          </div>
          <h3 className="text-xl font-semibold text-content-primary group-hover:text-brand-300 transition-colors">
            {service.title}
          </h3>
        </div>

        {/* Short description */}
        <p className="text-body-sm text-content-secondary leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Feature bullets */}
        <div className="mb-6 space-y-2 border-t border-surface-border/60 pt-5">
          <p className="text-xs font-mono font-medium text-content-tertiary uppercase tracking-wider mb-3">
            Core Capabilities
          </p>
          <ul className="space-y-2">
            {service.features.slice(0, 4).map((feature, idx) => (
              <li
                key={idx}
                className="flex items-start text-xs text-content-secondary gap-2.5"
              >
                <span className="text-brand-400 shrink-0 mt-0.5">
                  <Icon name="check" size={14} />
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-surface-border/60 mb-6">
          {service.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech} name={tech} size="sm" />
          ))}
          {service.technologies.length > 4 && (
            <span className="text-xs text-content-tertiary self-center px-1 font-mono">
              +{service.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Link / CTA */}
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-brand-400 group-hover:text-brand-300 transition-colors focus-visible:outline-none focus-visible:underline"
        >
          <span>Explore architecture & details</span>
          <Icon
            name="arrow-right"
            size={16}
            className="transform group-hover:translate-x-1 transition-transform duration-200"
          />
        </Link>
      </div>
    </Card>
  );
}
