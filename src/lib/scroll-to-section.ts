/**
 * In-page section navigation helpers.
 *
 * `scrollToSection` positions a section relative to the *visible* area below
 * the sticky header (not the raw viewport):
 * - sections whose content fits are centred in that area;
 * - taller sections have their content start placed just under the header,
 *   so the heading is never hidden behind it or pushed down by section padding.
 */

/** Fired on `window` whenever an in-page section link is used. `detail` = section id. */
export const SECTION_NAV_EVENT = 'yutomax:section-nav';

const GAP_BELOW_HEADER = 24;

function getHeaderHeight(): number {
  return document.querySelector<HTMLElement>('header')?.offsetHeight ?? 0;
}

export function scrollToSection(id: string, behavior: ScrollBehavior = 'smooth'): boolean {
  const section = document.getElementById(id);
  if (!section) return false;

  const headerHeight = getHeaderHeight();
  const visibleHeight = window.innerHeight - headerHeight;

  const rect = section.getBoundingClientRect();
  const style = window.getComputedStyle(section);
  const paddingTop = parseFloat(style.paddingTop) || 0;
  const paddingBottom = parseFloat(style.paddingBottom) || 0;

  const contentTop = rect.top + window.scrollY + paddingTop;
  const contentHeight = rect.height - paddingTop - paddingBottom;

  const target =
    contentHeight + GAP_BELOW_HEADER * 2 <= visibleHeight
      ? contentTop - headerHeight - (visibleHeight - contentHeight) / 2
      : contentTop - headerHeight - GAP_BELOW_HEADER;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: Math.max(0, target), behavior: reduceMotion ? 'auto' : behavior });

  window.dispatchEvent(new CustomEvent<string>(SECTION_NAV_EVENT, { detail: id }));
  return true;
}
