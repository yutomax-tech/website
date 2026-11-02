import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';
import { processSteps } from '@/config/process';

export function Process() {
  return (
    <SectionWrapper id="process" className="relative section-divider">
      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
        <div className="eyebrow mb-4">
          <span>OUR PROCESS</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight heading-gradient mb-5 pb-1">
          Disciplined Engineering, Iterative Delivery
        </h2>
        <p className="text-body-lg text-content-secondary leading-relaxed">
          We minimize uncertainty and technical debt through structured phases, frequent releases, and transparent architectural decisions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {processSteps.map((step) => (
          <Card
            key={step.step}
            className="p-6 md:p-7 flex flex-col justify-between relative transition-all duration-300"
          >
            <div>
              {/* Step indicator */}
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-2xl font-bold text-brand-400/90">
                  0{step.step}
                </span>
                <div className="w-9 h-9 rounded-lg icon-tile flex items-center justify-center">
                  <Icon name={step.icon} size={18} />
                </div>
              </div>

              <h3 className="text-lg font-semibold text-content-primary mb-3">
                {step.title}
              </h3>

              <p className="text-body-sm text-content-secondary leading-relaxed">
                {step.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.07] text-[11px] font-mono text-content-tertiary">
              Phase 0{step.step} Deliverable
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
