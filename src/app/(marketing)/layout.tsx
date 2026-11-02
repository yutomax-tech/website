import { AuroraBackdrop } from '@/components/common/aurora-backdrop';

/**
 * Inner pages share the homepage hero's aurora backdrop behind their header area.
 */
export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate">
      <AuroraBackdrop className="bottom-auto h-[760px] [mask-image:linear-gradient(to_bottom,black_55%,transparent)]" />
      {children}
    </div>
  );
}
