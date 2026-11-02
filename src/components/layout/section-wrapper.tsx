import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/container';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  container?: boolean;
  narrow?: boolean;
}

/**
 * SectionWrapper — consistent section spacing and optional container.
 * Every homepage section uses this wrapper for uniform vertical rhythm.
 */
export function SectionWrapper({
  children,
  id,
  className,
  container = true,
  narrow = false,
}: SectionWrapperProps) {
  const content = container ? (
    <Container narrow={narrow}>{children}</Container>
  ) : (
    children
  );

  return (
    <section id={id} className={cn('section-padding scroll-mt-20 relative isolate overflow-hidden', className)}>
      {/* Ambient aurora + faint grid shared by every section */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -left-40 top-[15%] h-[420px] w-[420px] rounded-full bg-brand-600/[0.12] blur-[120px] animate-aurora" />
        <div className="absolute -right-40 bottom-[10%] h-[380px] w-[380px] rounded-full bg-fuchsia-600/[0.08] blur-[120px] animate-aurora-slow" />
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent)]" />
      </div>
      {content}
    </section>
  );
}
