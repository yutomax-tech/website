import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'YUTOMAX privacy policy and data governance practices.',
};

export default function PrivacyPage() {
  return (
    <div className="py-24 md:py-32">
      <Container narrow>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight heading-gradient mb-6">
          Privacy Policy
        </h1>
        <p className="text-sm font-mono text-content-tertiary mb-10">
          Last updated: September 2026
        </p>

        <div className="prose prose-invert max-w-none space-y-6 text-content-secondary leading-relaxed">
          <p>
            At {siteConfig.name}, we hold privacy, confidentiality, and data integrity to the highest standard. This Privacy Policy describes how we collect, use, and protect your information when interacting with our website and engineering consultation services.
          </p>

          <h2 className="text-xl font-bold text-content-primary pt-4">
            1. Information We Collect
          </h2>
          <p>
            We collect information you explicitly submit through our contact and project inquiry forms, such as your name, corporate email address, organization name, phone number, and project scope details.
          </p>

          <h2 className="text-xl font-bold text-content-primary pt-4">
            2. How We Use Your Information
          </h2>
          <p>
            Information provided is used strictly to evaluate project inquiries, prepare technical estimates, schedule discovery sessions, and communicate directly regarding your software engineering requirements. We never sell, lease, or distribute your information to third-party advertisers.
          </p>

          <h2 className="text-xl font-bold text-content-primary pt-4">
            3. Mutual Non-Disclosure & Confidentiality
          </h2>
          <p>
            All proprietary architecture details, code snippets, business plans, and intellectual property shared with YUTOMAX during technical discovery are governed by strict confidentiality obligations and standard mutual non-disclosure agreements (NDAs).
          </p>

          <h2 className="text-xl font-bold text-content-primary pt-4">
            4. Contact
          </h2>
          <p>
            If you have questions regarding our privacy practices or wish to request data deletion, contact us at{' '}
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
