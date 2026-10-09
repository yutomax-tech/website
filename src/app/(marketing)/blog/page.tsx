import type { Metadata } from 'next';

import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';

import { Icon } from '@/components/ui/icon';

export const metadata: Metadata = {
  title: 'Engineering Blog & Architectural Insights | YUTOMAX',
  description:
    'Technical deep-dives on distributed systems, Next.js architecture, database optimization, and high-concurrency software engineering.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function BlogPage() {
  const articles = [
    {
      title: 'Architecting Next.js 16 Applications for Zero Frontend-Database Coupling',
      slug: 'architecting-nextjs-16-frontend-backend-boundary',
      date: 'September 2026',
      readTime: '7 min read',
      tag: 'Architecture',
      description:
        'Why separating your client UI from direct database access with a typed API service layer ensures long-term maintainability, auditability, and team scalability.',
    },
    {
      title: 'Designing Double-Entry Ledgers for High-Frequency FinTech Applications',
      slug: 'double-entry-ledgers-high-frequency-fintech',
      date: 'August 2026',
      readTime: '11 min read',
      tag: 'FinTech',
      description:
        'A practical architectural guide to avoiding transaction race conditions, achieving sub-10ms reconciliation, and ensuring immutable audit logs.',
    },
    {
      title: 'Real-Time WebRTC Media Relays and HIPAA Telemetry Ingestion',
      slug: 'webrtc-media-relays-hipaa-telemetry',
      date: 'July 2026',
      readTime: '9 min read',
      tag: 'MedTech',
      description:
        'How we built a fault-tolerant medical video and sensor stream architecture with zero-knowledge encryption and sub-50ms peer-to-peer latency.',
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
            <span>ENGINEERING LOGS</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-content-primary mb-6">
            Architectural Insights & Technical Notes
          </h1>

          <p className="text-xl text-content-secondary leading-relaxed">
            Written by our principal engineers. Unfiltered notes on system design, distributed consensus, web performance, and production reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {articles.map((article) => (
            <Card
              key={article.slug}
              className="p-8 flex flex-col justify-between transition-all duration-300 hover:border-brand-500/40 hover:shadow-card-hover"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-content-tertiary mb-4">
                  <span className="text-brand-400 font-semibold bg-brand-500/10 px-2 py-0.5 rounded border border-brand-500/20">
                    {article.tag}
                  </span>
                  <span>{article.date}</span>
                </div>

                <h2 className="text-xl font-bold text-content-primary mb-3 hover:text-brand-300 transition-colors">
                  {article.title}
                </h2>

                <p className="text-body-sm text-content-secondary leading-relaxed mb-6">
                  {article.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-surface-border/50 text-xs font-mono text-content-tertiary">
                <span>{article.readTime}</span>
                <span className="text-brand-400 flex items-center gap-1 font-sans font-medium text-xs">
                  Read article <Icon name="arrow-right" size={14} />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
