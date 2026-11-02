import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { CtaBanner } from '@/components/common/cta-banner';
import { Icon } from '@/components/ui/icon';
import { industries } from '@/config/industries';
import { siteConfig } from '@/config/site';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    return {
      title: 'Industry Not Found',
    };
  }

  return {
    title: industry.seo.title,
    description: industry.seo.description,
    openGraph: {
      title: `${industry.title} | ${siteConfig.name}`,
      description: industry.seo.description,
    },
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const verticalBenefits = [
    {
      title: 'Regulatory & Security Compliance',
      description:
        'Engineered to meet specific industry benchmarks, cryptographic standards, data residency, and audit log mandates.',
    },
    {
      title: 'Mission-Critical Reliability',
      description:
        'Architected with zero single points of failure, redundant services, and automated disaster recovery protocols.',
    },
    {
      title: 'Domain Workflow Automation',
      description:
        'Digitize complex human workflows, manual handoffs, and external legacy system dependencies seamlessly.',
    },
    {
      title: 'Real-Time Insights & Auditability',
      description:
        'Full observability across transactions and operational pipelines with granular telemetry and reporting.',
    },
  ];

  return (
    <div className="py-24 md:py-32 relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-radial from-brand-600/15 via-transparent to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container wide>
        {/* Back navigation */}
        <Link
          href="/#industries"
          className="inline-flex items-center gap-2 text-xs font-mono text-content-tertiary hover:text-brand-300 transition-colors mb-10 focus-visible:outline-none"
        >
          <Icon name="arrow-right" size={14} className="rotate-180" />
          <span>Back to All Industries</span>
        </Link>

        {/* Hero header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl icon-tile flex items-center justify-center">
              <Icon name={industry.icon} size={24} />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-elevated border border-surface-border text-xs font-mono text-brand-300">
              <span>VERTICAL EXPERTISE</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight heading-gradient mb-6">
            {industry.title}
          </h1>

          <p className="text-xl text-content-secondary leading-relaxed mb-6">
            {industry.description}
          </p>

          <p className="text-body text-content-tertiary leading-relaxed">
            From architecture planning to production launch, we help businesses in {industry.title} modernize legacy systems, automate high-value pipelines, and build resilient software systems.
          </p>
        </div>

        {/* Value Grid */}
        <div className="mb-20 md:mb-28">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-content-primary">
              What We Solve for {industry.title}
            </h2>
            <p className="text-sm text-content-secondary mt-1">
              Engineered to conquer industry-specific friction and regulatory hurdles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {verticalBenefits.map((benefit, idx) => (
              <Card
                key={idx}
                className="p-8 flex flex-col justify-start transition-all duration-300 hover:border-brand-500/40"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-brand-400 font-semibold bg-brand-500/10 px-2.5 py-1 rounded border border-brand-500/20">
                    Capability 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-content-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-body-sm text-content-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <CtaBanner
          headline={`Engineering tailored software for ${industry.title}?`}
          description="Schedule a technical discovery session with our architects to evaluate feasibility, compliance, and delivery timelines."
          primaryLabel="Discuss Your Industry Challenge"
          primaryHref="/contact#project-form"
        />
      </Container>
    </div>
  );
}
