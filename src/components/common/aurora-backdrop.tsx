import { cn } from '@/lib/utils';

interface AuroraBackdropProps {
  className?: string;
}

/**
 * AuroraBackdrop — the site's signature background: drifting colour blobs,
 * a top spotlight, an edge-faded grid and a fade into the page below.
 * Place inside a `relative isolate` parent; it sits behind content (-z-10).
 */
export function AuroraBackdrop({ className }: AuroraBackdropProps) {
  return (
    <div className={cn('pointer-events-none absolute inset-0 -z-10 overflow-hidden', className)} aria-hidden="true">
      <div className="absolute -top-48 left-[8%] h-[560px] w-[560px] rounded-full bg-brand-600/25 blur-[120px] animate-aurora" />
      <div className="absolute top-[10%] right-[-6%] h-[520px] w-[520px] rounded-full bg-fuchsia-600/15 blur-[130px] animate-aurora-slow" />
      <div className="absolute bottom-[-20%] left-[35%] h-[440px] w-[440px] rounded-full bg-cyan-500/10 blur-[120px] animate-aurora" />

      <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(129,140,248,0.22),transparent_65%)]" />

      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />
    </div>
  );
}
