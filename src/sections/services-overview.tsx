import { SectionWrapper } from '@/components/layout/section-wrapper';
import { ServiceCard } from '@/components/common/service-card';
import { services } from '@/config/services';

export function ServicesOverview() {
  return (
    <SectionWrapper id="services" className="relative">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-brand-600/10 via-transparent to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
        <div className="eyebrow mb-4">
          <span>OUR SERVICES</span>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight heading-gradient mb-5 pb-1">
          Engineered for Resilience & Scale
        </h2>
        <p className="text-body-lg text-content-secondary leading-relaxed">
          From full-stack custom software to production-ready SaaS and AI-driven systems, we engineer bespoke technology foundations designed for your specific business goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>
    </SectionWrapper>
  );
}
