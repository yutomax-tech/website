import { SectionWrapper } from '@/components/layout/section-wrapper';
import { statsContent } from '@/content/stats';

export function Stats() {
  return (
    <SectionWrapper id="stats" className="relative section-divider py-16 md:py-24">
      {/* Background glow behind stats */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[250px] bg-gradient-radial from-brand-600/10 via-transparent to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="glass-card reveal relative overflow-hidden rounded-3xl p-8 md:p-14">
        <div className="pointer-events-none absolute -top-24 left-1/4 h-64 w-64 rounded-full bg-brand-600/20 blur-[90px] animate-aurora" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 right-1/4 h-64 w-64 rounded-full bg-fuchsia-600/15 blur-[90px] animate-aurora-slow" aria-hidden="true" />
        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:divide-x lg:divide-white/[0.07]">
          {statsContent.items.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold font-mono tracking-tight text-aurora mb-2 drop-shadow-[0_0_24px_rgba(129,140,248,0.35)]">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-medium text-content-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
