import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { TechBadge } from '@/components/common/tech-badge';
import { CtaBanner } from '@/components/common/cta-banner';
import { Icon } from '@/components/ui/icon';
import { JsonLd } from '@/components/seo/json-ld';
import { services } from '@/config/services';
import { siteConfig } from '@/config/site';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: service.seo.title,
    description: service.seo.description,
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.seo.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="py-24 md:py-32 relative overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.shortDescription,
          provider: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
          },
        }}
      />

      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-radial from-brand-600/15 via-transparent to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container wide>
        {/* Back navigation */}
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 text-xs font-mono text-content-tertiary hover:text-brand-300 transition-colors mb-10 focus-visible:outline-none"
        >
          <Icon name="arrow-right" size={14} className="rotate-180" />
          <span>Back to All Services</span>
        </Link>

        {/* Hero header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl icon-tile flex items-center justify-center">
              <Icon name={service.icon} size={24} />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-surface-border text-xs font-mono text-brand-300">
              <span>SPECIALIZED ENGINEERING</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight heading-gradient mb-6">
            {service.title}
          </h1>

          <p className="text-xl text-content-secondary leading-relaxed mb-8">
            {service.longDescription}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {service.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} size="md" />
            ))}
          </div>
        </div>

        {/* Deliverables / Capabilities Grid */}
        <div className="mb-20 md:mb-28">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-content-primary">
              Core Architectural Pillars & Deliverables
            </h2>
            <p className="text-sm text-content-secondary mt-1">
              Every system we deliver includes production-ready guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, idx) => (
              <Card
                key={idx}
                className="p-6 flex flex-col justify-start transition-all duration-300 hover:border-brand-500/40"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-7 h-7 rounded-lg icon-tile flex items-center justify-center shrink-0">
                    <Icon name="check" size={16} />
                  </div>
                  <span className="font-mono text-xs text-content-tertiary">
                    Pillar 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-content-primary mb-2">
                  {feature}
                </h3>
                <p className="text-body-sm text-content-secondary">
                  Built to modern engineering standards with comprehensive documentation, unit and integration coverage, and CI/CD automation.
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <CtaBanner
          headline={`Ready to build your ${service.title.toLowerCase()}?`}
          description="Speak with our engineering leads to review your requirements, design the architecture, and establish a clear delivery timeline."
          primaryLabel="Schedule Architecture Consultation"
          primaryHref="/contact#project-form"
        />
      </Container>
    </div>
  );
}
