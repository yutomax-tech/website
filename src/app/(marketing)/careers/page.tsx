import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { ButtonLink } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Careers at YUTOMAX — Senior Engineering Roles',
  description:
    'Join our product engineering team. We build mission-critical custom software and distributed systems.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function CareersPage() {
  const roles = [
    {
      title: 'Principal Distributed Systems Architect',
      type: 'Full-time / Remote',
      location: 'Global (Any Timezone)',
      description:
        'Lead architectural evaluations, high-throughput database topology designs, and distributed consensus implementations for client platforms.',
    },
    {
      title: 'Senior Full-Stack Engineer (React / Next.js / Node.js)',
      type: 'Full-time / Remote',
      location: 'Global (Any Timezone)',
      description:
        'Engineer high-performance client applications, component design systems, and resilient serverless micro-services with TypeScript.',
    },
    {
      title: 'AI / ML Solutions Engineer',
      type: 'Full-time / Remote',
      location: 'Global (Any Timezone)',
      description:
        'Design and deploy production-grade LLM workflows, data ingestion pipelines, vector databases, and custom model inference layers.',
    },
  ];

  return (
    <div className="py-24 md:py-32 relative overflow-hidden">
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-radial from-brand-600/15 via-transparent to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container wide>
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-4">
            <span>CAREERS AT YUTOMAX</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-content-primary mb-6">
            Build Systems That Matter
          </h1>

          <p className="text-xl text-content-secondary leading-relaxed mb-6">
            We are a team of senior engineers and product architects. We believe in autonomous execution, zero red tape, high technical standards, and deep respect for developer craftsmanship.
          </p>
        </div>

        <div className="space-y-6 mb-20">
          {roles.map((role) => (
            <Card
              key={role.title}
              className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-all duration-300 hover:border-brand-500/40"
            >
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono text-xs text-brand-400 font-semibold bg-brand-500/10 px-2.5 py-0.5 rounded border border-brand-500/20">
                    {role.type}
                  </span>
                  <span className="text-xs text-content-tertiary font-mono">
                    {role.location}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-content-primary mb-2">
                  {role.title}
                </h2>
                <p className="text-body-sm text-content-secondary">
                  {role.description}
                </p>
              </div>

              <ButtonLink
                href={`mailto:${siteConfig.contact.email}?subject=Application for ${role.title}`}
                variant="secondary"
                size="md"
                className="shrink-0"
              >
                <span>Apply via Email</span>
                <Icon name="arrow-right" size={16} />
              </ButtonLink>
            </Card>
          ))}
        </div>

        <div className="rounded-2xl border border-surface-border bg-surface-secondary/60 p-8 text-center max-w-xl mx-auto">
          <h3 className="text-xl font-bold text-content-primary mb-2">
            Don&apos;t see your exact role?
          </h3>
          <p className="text-sm text-content-secondary mb-6">
            We are always eager to connect with extraordinary software engineers and systems architects. Send us your GitHub and past technical work.
          </p>
          <ButtonLink
            href={`mailto:${siteConfig.contact.email}?subject=General Engineering Inquiry`}
            variant="ghost"
          >
            <span>Reach out directly</span>
            <Icon name="mail" size={16} />
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
