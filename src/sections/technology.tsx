import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card } from '@/components/ui/card';
import { TechBadge } from '@/components/common/tech-badge';
import { technologies } from '@/config/technologies';
import { Icon } from '@/components/ui/icon';

export function Technology() {
  const categoryIcons: Record<string, string> = {
    Frontend: 'globe',
    Backend: 'code',
    Database: 'layers',
    'Cloud & DevOps': 'cloud',
    'AI & Data': 'brain',
  };

  return (
    <SectionWrapper id="technology" className="relative section-divider">
      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
        <div className="eyebrow mb-4">
          <span>ENGINEERING STACK</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight heading-gradient mb-5 pb-1">
          Proven, Scalable, Production-Grade
        </h2>
        <p className="text-body-lg text-content-secondary leading-relaxed">
          We build with enterprise-grade stacks selected for reliability, developer velocity, runtime performance, and zero vendor lock-in.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {technologies.map((category) => (
          <Card
            key={category.category}
            className="p-7 md:p-8 flex flex-col justify-between transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg icon-tile flex items-center justify-center">
                  <Icon
                    name={categoryIcons[category.category] || 'code'}
                    size={20}
                  />
                </div>
                <h3 className="text-lg font-semibold text-content-primary">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {category.items.map((tech) => (
                  <TechBadge key={tech.name} name={tech.name} size="md" />
                ))}
              </div>
            </div>

            <div className="text-xs font-mono text-content-tertiary pt-4 border-t border-surface-border/50 flex items-center justify-between">
              <span>{category.items.length} core tools</span>
              <span className="text-brand-400/80">Production-Verified</span>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
