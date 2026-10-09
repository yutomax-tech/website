import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { TechBadge } from '@/components/common/tech-badge';
import { CtaBanner } from '@/components/common/cta-banner';
import { Icon } from '@/components/ui/icon';
import { caseStudies } from '@/config/case-studies';

export const metadata: Metadata = {
  title: 'Engineering Case Studies & System Architecture',
  description:
    'Explore how YUTOMAX designs, architects, and builds mission-critical software, SaaS platforms, and distributed systems for modern businesses.',
};

export default function CaseStudiesPage() {
  return (
    <div className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-brand-600/15 via-brand-500/5 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container wide>
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-4">
            <span>PROVEN RESULTS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-content-primary mb-5">
            Architecture in Practice
          </h1>
          <p className="text-xl text-content-secondary leading-relaxed">
            Real systems engineered for high concurrency, strict compliance, and measurable business impact. Here is how we turn complex technical requirements into resilient software.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-10 md:space-y-12 mb-20 md:mb-28">
          {caseStudies.map((study) => (
            <Card
              key={study.slug}
              className="p-8 md:p-12 transition-all duration-300 hover:border-brand-500/40 hover:shadow-card-hover"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-xs text-brand-400 font-semibold bg-brand-500/10 px-2.5 py-0.5 rounded border border-brand-500/20">
                      {study.industry}
                    </span>
                    <span className="text-xs text-content-tertiary font-mono">
                      Client: {study.client}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold text-content-primary mb-4 hover:text-brand-300 transition-colors">
                    <Link href={`/case-studies/${study.slug}`}>
                      {study.title}
                    </Link>
                  </h2>

                  <p className="text-body text-content-secondary mb-6 leading-relaxed">
                    {study.overview}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 rounded-xl bg-surface-elevated/40 border border-surface-border">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-content-tertiary mb-1">
                        Challenge:
                      </p>
                      <p className="text-xs text-content-secondary leading-relaxed">
                        {study.challenge}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-brand-400 mb-1">
                        Engineered Solution:
                      </p>
                      <p className="text-xs text-content-secondary leading-relaxed">
                        {study.solution}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {study.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} size="sm" />
                    ))}
                  </div>

                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors focus-visible:outline-none"
                  >
                    <span>Read full technical deep-dive</span>
                    <Icon name="arrow-right" size={16} />
                  </Link>
                </div>

                {/* Metrics Column */}
                <div className="lg:col-span-4 grid grid-cols-2 gap-4 p-6 rounded-2xl bg-surface-elevated/80 border border-surface-border">
                  {study.results.map((result) => (
                    <div key={result.label} className="text-center p-3">
                      <div className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-white mb-1">
                        {result.metric}
                      </div>
                      <div className="text-xs text-content-secondary font-medium">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <CtaBanner
          headline="Have an ambitious technical initiative?"
          description="Schedule a technical architecture review with our principal software architects."
          primaryLabel="Start Your Project"
          primaryHref="/contact"
        />
      </Container>
    </div>
  );
}
