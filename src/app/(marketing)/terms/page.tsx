import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'YUTOMAX terms of service and engineering engagement terms.',
};

export default function TermsPage() {
  return (
    <div className="py-24 md:py-32">
      <Container narrow>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-content-primary mb-6">
          Terms of Service
        </h1>
        <p className="text-sm font-mono text-content-tertiary mb-10">
          Last updated: September 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-6 text-content-secondary leading-relaxed">
          <p>
            Welcome to {siteConfig.name}. By accessing this website or engaging our custom software engineering services, you agree to comply with and be bound by the following terms and conditions.
          </p>

          <h2 className="text-xl font-bold text-content-primary pt-4">
            1. Scope of Services
          </h2>
          <p>
            YUTOMAX provides custom software development, system architecture consulting, and product engineering services governed by detailed Statements of Work (SOWs) and Master Services Agreements (MSAs) agreed upon with each client.
          </p>

          <h2 className="text-xl font-bold text-content-primary pt-4">
            2. Intellectual Property Ownership
          </h2>
          <p>
            Unless explicitly agreed otherwise in a signed Statement of Work, all custom code, system designs, documentation, and digital assets developed by YUTOMAX for a client become the exclusive property of the client upon full payment of agreed fees.
          </p>

          <h2 className="text-xl font-bold text-content-primary pt-4">
            3. Disclaimer & Warranties
          </h2>
          <p>
            Information provided on this marketing website is for informational purposes only. Specific warranties, service level agreements (SLAs), and maintenance commitments are defined in client-specific legal contracts.
          </p>

          <h2 className="text-xl font-bold text-content-primary pt-4">
            4. Inquiries
          </h2>
          <p>
            For legal and contract inquiries, please reach out to{' '}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-brand-400 underline underline-offset-4"
            >
              {siteConfig.contact.email}
            </a>.
          </p>
        </div>
      </Container>
    </div>
  );
}
