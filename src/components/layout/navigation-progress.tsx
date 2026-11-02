'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type Phase = 'idle' | 'start' | 'loading' | 'done';

/** Gives up and hides the bar if a navigation never completes. */
const SAFETY_TIMEOUT_MS = 15000;

/** True when clicking `anchor` will trigger a client-side route change. */
function isRouteChange(anchor: HTMLAnchorElement): boolean {
  if (anchor.target && anchor.target !== '_self') return false;
  if (anchor.hasAttribute('download')) return false;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return false;
  return url.pathname !== window.location.pathname || url.search !== window.location.search;
}

/**
 * NavigationProgress — thin brand-coloured bar at the top of the viewport
 * shown while moving between pages.
 */
export function NavigationProgress() {
  const pathname = usePathname();
  const [phase, setPhase] = useState<Phase>('idle');

  // Start on internal link clicks that change the route.
  useEffect(() => {
    let raf1 = 0;
    let raf2 = 0;
    let safety: ReturnType<typeof setTimeout> | undefined;

    const onClick = (e: MouseEvent) => {
      // Don't check defaultPrevented: Next's <Link> always prevents the native
      // navigation to do its own client-side routing.
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as Element | null)?.closest?.('a[href]');
      if (!(anchor instanceof HTMLAnchorElement) || !isRouteChange(anchor)) return;

      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(safety);

      setPhase('start');
      // Two frames so the bar paints at 0% before animating its width.
      raf1 = requestAnimationFrame(() => {
        raf2 = requestAnimationFrame(() => setPhase('loading'));
      });
      safety = setTimeout(() => setPhase('done'), SAFETY_TIMEOUT_MS);
    };

    window.addEventListener('click', onClick, true);
    return () => {
      window.removeEventListener('click', onClick, true);
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(safety);
    };
  }, []);

  // Complete when the new route has rendered.
  useEffect(() => {
    const frame = requestAnimationFrame(() =>
      setPhase((p) => (p === 'start' || p === 'loading' ? 'done' : p))
    );
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  // Reset after the fade-out.
  useEffect(() => {
    if (phase !== 'done') return;
    const timer = setTimeout(() => setPhase('idle'), 400);
    return () => clearTimeout(timer);
  }, [phase]);

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[200] h-[3px]"
      role="progressbar"
      aria-label="Page loading"
      aria-hidden={phase === 'idle'}
    >
      <div
        className={cn(
          'h-full bg-gradient-to-r from-brand-500 via-brand-400 to-indigo-300 shadow-[0_0_12px_rgba(129,140,248,0.8)]',
          phase === 'idle' && 'w-0 opacity-0',
          phase === 'start' && 'w-0 opacity-100',
          phase === 'loading' && 'w-[85%] opacity-100 transition-[width] duration-[6000ms] ease-out',
          phase === 'done' &&
            'w-full opacity-0 transition-[width,opacity] duration-300 ease-out [transition-delay:0ms,150ms]'
        )}
      />
    </div>
  );
}
