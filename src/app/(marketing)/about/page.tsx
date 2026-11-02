import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { CtaBanner } from '@/components/common/cta-banner';
import { Icon } from '@/components/ui/icon';
import { JsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'About YUTOMAX — Software & Product Engineering',
  description:
    'YUTOMAX is a custom software and product engineering company. We engineer resilient, scalable software systems with zero technical debt.',
};

export default function AboutPage() {
  const principles = [
    {
      title: 'Architectural Durability',
      description:
        'We build systems designed to withstand 5 to 10 years of business evolution. Every schema, boundary, and dependency is scrutinized for long-term viability.',
      icon: 'blocks',
    },
    {
      title: 'Performance as a Feature',
      description:
        'Latency directly impacts conversion and operational overhead. We profile memory, audit queries, and optimize bundle sizes down to the kilobyte.',
      icon: 'zap',
    },
    {
      title: 'Complete IP Transparency',
      description:
        'You own 100% of your source code, infrastructure declarations, and data pipelines from day one. No hidden dependencies, no proprietary runtime lock-in.',
      icon: 'shield',
    },
    {
      title: 'Senior-Led Engineering',
      description:
        'We do not bait-and-switch with junior contractors. You collaborate directly with principal architects and senior engineers who have shipped at scale.',
      icon: 'users',
    },
  ];

  return (
    <div className="py-24 md:py-32 relative overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About YUTOMAX',
          description: 'YUTOMAX is a custom software and product engineering company.',
          url: `${siteConfig.url}/about`,
          mainEntity: {
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
        {/* Hero header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="eyebrow mb-4">
            <span>ABOUT YUTOMAX</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight heading-gradient mb-6">
            We Build Software Systems That Stand the Test of Scale
          </h1>

          <p className="text-xl text-content-secondary leading-relaxed mb-6">
            YUTOMAX is a custom software and product engineering company. We partner with ambitious leaders to engineer mission-critical applications, SaaS platforms, and intelligent automation systems.
          </p>

          <p className="text-body text-content-tertiary leading-relaxed">
            Founded on the conviction that high-growth businesses deserve better than generic agency code templates or sluggish legacy outsourcing, we bring pure product-engineering craftsmanship to every engagement.
          </p>
        </div>

        {/* Core Principles */}
        <div className="mb-20 md:mb-28">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-content-primary">
              Our Core Engineering Tenets
            </h2>
            <p className="text-sm text-content-secondary mt-1">
              The fundamental standards that govern every line of code we ship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p, idx) => (
              <Card
                key={idx}
                className="p-8 flex flex-col justify-start transition-all duration-300 hover:border-brand-500/40"
              >
                <div className="w-10 h-10 rounded-xl icon-tile flex items-center justify-center mb-5">
                  <Icon name={p.icon} size={20} />
                </div>
                <h3 className="text-xl font-semibold text-content-primary mb-2">
                  {p.title}
                </h3>
                <p className="text-body-sm text-content-secondary leading-relaxed">
                  {p.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Architecture Philosophy Banner */}
        <div className="rounded-3xl border border-surface-border bg-surface-secondary/70 p-8 md:p-12 mb-20 md:mb-28 backdrop-blur-md">
          <div className="max-w-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-content-primary mb-4">
              The Product-Engineering Difference
            </h2>
            <p className="text-body text-content-secondary leading-relaxed mb-4">
              Traditional agencies focus on delivering a static deliverable to check a contract requirement. Product engineers focus on whether the software drives user retention, handles transaction spikes, and can be maintained effortlessly by your in-house teams.
            </p>
            <p className="text-body text-content-secondary leading-relaxed">
              We operate as your dedicated engineering core — establishing clean CI/CD pipelines, automated testing, and comprehensive technical documentation from Day 1.
            </p>
          </div>
        </div>

        {/* CTA */}
        <CtaBanner
          headline="Ready to build your next engineering milestone?"
          description="Schedule a technical architecture discussion with our leadership team."
          primaryLabel="Start Your Project"
          primaryHref="/contact#project-form"
        />
      </Container>
    </div>
  );
}
