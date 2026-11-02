import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { Icon } from '@/components/ui/icon';
import { JsonLd } from '@/components/seo/json-ld';
import { ContactForm } from '@/features/contact/components/contact-form';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Contact Us & Start Your Project',
  description:
    'Connect directly with the YUTOMAX engineering team. Get a detailed technical consultation and architecture estimate within 24 hours.',
};

export default function ContactPage() {
  return (
    <div className="py-24 md:py-32 relative overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact YUTOMAX',
          description: 'Get in touch with YUTOMAX for custom software engineering.',
          url: `${siteConfig.url}/contact`,
        }}
      />

      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-brand-600/15 via-brand-500/5 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container wide>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Assurance */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-4">
                <span>DIRECT ACCESS TO ENGINEERS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-content-primary mb-4">
                Let&apos;s Engineer Your Next Product
              </h1>
              <p className="text-body-lg text-content-secondary leading-relaxed">
                Whether you need a ground-up SaaS platform, an AI automation pipeline, or mission-critical custom software, we bring architecture expertise to your team.
              </p>
            </div>

            {/* Direct contact items */}
            <div className="space-y-4 pt-4 border-t border-surface-border">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-secondary/60 border border-surface-border">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                  <Icon name="mail" size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono text-content-tertiary">
                    Direct Email
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-semibold text-content-primary hover:text-brand-300 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-secondary/60 border border-surface-border">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Icon name="clock" size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono text-content-tertiary">
                    Response SLA
                  </div>
                  <div className="text-sm font-semibold text-content-primary">
                    Guaranteed within 24 business hours
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-secondary/60 border border-surface-border">
                <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <Icon name="shield-check" size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono text-content-tertiary">
                    IP & Confidentiality
                  </div>
                  <div className="text-sm font-semibold text-content-primary">
                    Mutual NDA signed prior to code audits
                  </div>
                </div>
              </div>
            </div>

            {/* Quote / Highlight */}
            <div className="p-6 rounded-2xl bg-surface-elevated/40 border border-surface-border/80">
              <p className="text-sm italic text-content-secondary leading-relaxed">
                &ldquo;YUTOMAX acts as an extension of our core technical leadership. Their architecture precision allowed us to ship on time without compromising scalability.&rdquo;
              </p>
              <div className="mt-3 text-xs font-mono text-brand-400">
                — Head of Engineering, Enterprise FinTech Client
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div id="project-form" className="lg:col-span-7 scroll-mt-24">
            <ContactForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
