'use client';

import { useEffect, useRef, useState } from 'react';
import { SECTION_NAV_EVENT } from '@/lib/scroll-to-section';

/** How long scroll-spy stays paused after a nav click, while the smooth scroll runs. */
const CLICK_LOCK_MS = 1000;

/**
 * Scroll-spy: returns the id of the section currently in view (or null).
 *
 * - A section becomes active once its top passes ~40% down the viewport.
 * - At the very bottom of the page the last section is active.
 * - When a section link is clicked (SECTION_NAV_EVENT) that section is
 *   highlighted immediately and scroll updates are paused until the smooth
 *   scroll finishes, so the highlight doesn't flicker through other sections.
 */
export function useActiveSection(ids: readonly string[], enabled: boolean): string | null {
  const [active, setActive] = useState<string | null>(null);
  const lockUntil = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    let frame = 0;

    const compute = () => {
      frame = 0;
      if (Date.now() < lockUntil.current) return;

      const threshold = window.innerHeight * 0.4;
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (atBottom || el.getBoundingClientRect().top <= threshold) current = id;
      }
      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(compute);
    };

    const onSectionNav = (e: Event) => {
      const id = (e as CustomEvent<string>).detail;
      if (!ids.includes(id)) return;
      lockUntil.current = Date.now() + CLICK_LOCK_MS;
      setActive(id);
    };

    const onScrollEnd = () => {
      lockUntil.current = 0;
      schedule();
    };

    schedule();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('scrollend', onScrollEnd);
    window.addEventListener(SECTION_NAV_EVENT, onSectionNav);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('scrollend', onScrollEnd);
      window.removeEventListener(SECTION_NAV_EVENT, onSectionNav);
    };
  }, [ids, enabled]);

  return enabled ? active : null;
}
