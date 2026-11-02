'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { scrollToSection } from '@/lib/scroll-to-section';

/** Returns the target section id if `anchor` points at a section on the current page. */
function getSamePageSectionId(anchor: HTMLAnchorElement): string | null {
  if (anchor.target && anchor.target !== '_self') return null;
  if (anchor.hasAttribute('download')) return null;

  const url = new URL(anchor.href, window.location.href);
  if (url.origin !== window.location.origin) return null;
  if (url.pathname !== window.location.pathname || !url.hash) return null;

  const id = decodeURIComponent(url.hash.slice(1));
  return document.getElementById(id) ? id : null;
}

/**
 * SectionScrollManager — renders nothing.
 * Makes every in-page section link (`#services`, `/#process`, `/contact#project-form`…)
 * use the header-aware `scrollToSection`, both for clicks on the same page and
 * when arriving on a page with a hash (from another page or via back/forward).
 */
export function SectionScrollManager() {
  const pathname = usePathname();

  // Same-page section links. Capture phase runs before Next's <Link> handler,
  // which skips its own navigation when the event is defaultPrevented.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const anchor = (e.target as Element | null)?.closest?.('a[href]');
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const id = getSamePageSectionId(anchor);
      if (!id) return;

      e.preventDefault();
      if (window.location.hash !== `#${id}`) {
        window.history.pushState(null, '', `#${id}`);
      }
      scrollToSection(id);
    };

    const onPopState = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id) scrollToSection(id);
    };

    window.addEventListener('click', onClick, true);
    window.addEventListener('popstate', onPopState);
    return () => {
      window.removeEventListener('click', onClick, true);
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  // Arriving on a page with a hash: correct the browser's default anchor jump.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const frame = requestAnimationFrame(() => scrollToSection(id, 'auto'));
    return () => cancelAnimationFrame(frame);
  }, [pathname]);

  return null;
}
