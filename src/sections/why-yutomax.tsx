import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { whyYutomaxContent } from '@/content/why-yutomax';

export function WhyYutomax() {
  return (
    <SectionWrapper id="why-yutomax" className="relative border-t border-surface-border/40">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-radial from-brand-600/10 via-transparent to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-4">
          <span>THE YUTOMAX ADVANTAGE</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-content-primary mb-5">
          {whyYutomaxContent.headline}
        </h2>
        <p className="text-body-lg text-content-secondary leading-relaxed">
          {whyYutomaxContent.subheadline}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {whyYutomaxContent.values.map((val) => (
          <Card
            key={val.title}
            className="p-8 flex flex-col justify-start transition-all duration-300 hover:border-brand-500/40 hover:shadow-card-hover"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mb-6">
              <Icon name={val.icon} size={24} />
            </div>
            <h3 className="text-xl font-semibold text-content-primary mb-3">
              {val.title}
            </h3>
            <p className="text-body-sm text-content-secondary leading-relaxed">
              {val.description}
            </p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
