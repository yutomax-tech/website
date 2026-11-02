import Link from 'next/link';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { industries } from '@/config/industries';

export function Industries() {
  return (
    <SectionWrapper id="industries" className="relative section-divider">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-indigo-600/10 via-transparent to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
        <div className="eyebrow mb-4">
          <span>DOMAIN EXPERTISE</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight heading-gradient mb-5 pb-1">
          Specialized for Regulated & High-Growth Sectors
        </h2>
        <p className="text-body-lg text-content-secondary leading-relaxed">
          We combine domain literacy with software engineering rigor to navigate strict compliance, data sovereignty, and mission-critical workflows.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {industries.map((industry) => (
          <Link
            key={industry.slug}
            href={`/industries/${industry.slug}`}
            className="group block focus-visible:outline-none"
          >
            <Card className="h-full p-8 flex flex-col justify-between transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-xl icon-tile flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-brand-500/15 group-hover:border-brand-500/30 group-hover:text-brand-300 transition-all duration-300">
                  <Icon name={industry.icon} size={24} />
                </div>
                <h3 className="text-xl font-semibold text-content-primary mb-3 group-hover:text-brand-300 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-body-sm text-content-secondary leading-relaxed mb-6">
                  {industry.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm font-medium text-brand-400 group-hover:text-brand-300 transition-colors pt-4 border-t border-surface-border/50">
                <span>View vertical capabilities</span>
                <Icon
                  name="arrow-right"
                  size={16}
                  className="transform group-hover:translate-x-1 transition-transform duration-200"
                />
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
