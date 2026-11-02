import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { TechBadge } from '@/components/common/tech-badge';
import { CtaBanner } from '@/components/common/cta-banner';
import { Icon } from '@/components/ui/icon';
import { caseStudies } from '@/config/case-studies';
import { siteConfig } from '@/config/site';
import { JsonLd } from '@/components/seo/json-ld';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: `${study.title} | Case Study`,
    description: study.overview,
    openGraph: {
      title: `${study.title} | ${siteConfig.name}`,
      description: study.overview,
    },
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="py-24 md:py-32 relative overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: study.title,
          description: study.overview,
          url: `${siteConfig.url}/case-studies/${study.slug}`,
          creator: {
            '@type': 'Organization',
            name: siteConfig.name,
            url: siteConfig.url,
          },
        }}
      />
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-radial from-brand-600/15 via-transparent to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container wide>
        {/* Back navigation */}
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-xs font-mono text-content-tertiary hover:text-brand-300 transition-colors mb-10 focus-visible:outline-none"
        >
          <Icon name="arrow-right" size={14} className="rotate-180" />
          <span>Back to All Case Studies</span>
        </Link>

        {/* Hero header */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="font-mono text-xs text-brand-400 font-semibold bg-brand-500/10 px-2.5 py-1 rounded border border-brand-500/20">
              {study.industry}
            </span>
            <span className="text-xs text-content-tertiary font-mono">
              Client: {study.client}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-content-primary mb-6">
            {study.title}
          </h1>

          <p className="text-xl text-content-secondary leading-relaxed mb-8">
            {study.overview}
          </p>

          <div className="flex flex-wrap gap-2">
            {study.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} size="md" />
            ))}
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {study.results.map((result) => (
            <Card key={result.label} className="p-6 text-center">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white mb-2">
                {result.metric}
              </div>
              <div className="text-xs sm:text-sm text-content-secondary font-medium">
                {result.label}
              </div>
            </Card>
          ))}
        </div>

        {/* Challenge vs Solution deep dive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <Card className="p-8 border-rose-500/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-400 flex items-center justify-center font-mono font-bold text-xs">
                !
              </div>
              <h2 className="text-xl font-bold text-content-primary">
                The Engineering Challenge
              </h2>
            </div>
            <p className="text-body text-content-secondary leading-relaxed">
              {study.challenge}
            </p>
          </Card>

          <Card className="p-8 border-brand-500/30">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center">
                <Icon name="check" size={16} />
              </div>
              <h2 className="text-xl font-bold text-content-primary">
                The Architectural Solution
              </h2>
            </div>
            <p className="text-body text-content-secondary leading-relaxed">
              {study.solution}
            </p>
          </Card>
        </div>

        {/* Architecture Highlights */}
        <div className="mb-20 md:mb-28">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-content-primary">
              Key Architectural Decisions & Highlights
            </h2>
            <p className="text-sm text-content-secondary mt-1">
              Engineered with zero technical debt and high resiliency guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {study.architectureHighlights.map((highlight, idx) => (
              <Card key={idx} className="p-6">
                <span className="font-mono text-xs text-brand-400 font-semibold bg-brand-500/10 px-2.5 py-0.5 rounded border border-brand-500/20 inline-block mb-3">
                  Design Decision 0{idx + 1}
                </span>
                <p className="text-body-sm text-content-secondary leading-relaxed">
                  {highlight}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <CtaBanner
          headline="Looking to achieve similar engineering outcomes?"
          description="Speak with our technical leads to architect a custom solution for your platform."
          primaryLabel="Start Your Project"
          primaryHref="/contact#project-form"
        />
      </Container>
    </div>
  );
}
