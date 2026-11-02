import { SectionWrapper } from '@/components/layout/section-wrapper';
import { CtaBanner } from '@/components/common/cta-banner';

export function ContactCTA() {
  return (
    <SectionWrapper id="contact-cta" className="relative section-divider pb-24 md:pb-32">
      <CtaBanner />
    </SectionWrapper>
  );
}
