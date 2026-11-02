'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { navItems, navCTA } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Logo } from '@/components/common/logo';
import { useActiveSection } from '@/hooks/use-active-section';
import { MobileNav } from './mobile-nav';

/** Homepage section ids targeted by `/#…` nav items. */
const SECTION_IDS = navItems
  .filter((item) => item.href.startsWith('/#'))
  .map((item) => item.href.slice(2));

const CTA_PATHNAME = navCTA.href.split('#')[0];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const activeSection = useActiveSection(SECTION_IDS, isHome);
  const isCtaActive = pathname === CTA_PATHNAME;

  /** Section links follow scroll position on the homepage; page links match the route. */
  const isActive = useCallback(
    (href: string): boolean => {
      if (href.startsWith('/#')) return isHome && activeSection === href.slice(2);
      return pathname === href || pathname.startsWith(`${href}/`);
    },
    [isHome, activeSection, pathname]
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-border bg-surface-primary/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-18" aria-label="Main navigation">
          <Link
            href="/"
            aria-label={`${siteConfig.name} home`}
            className="flex items-center shrink-0 transition-opacity hover:opacity-80"
          >
            <Logo className="h-8 lg:h-9" />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative py-1 text-body-sm font-medium transition-colors duration-200',
                    'after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-brand-400',
                    'after:origin-center after:transition-transform after:duration-300',
                    active
                      ? 'text-brand-300 after:scale-x-100'
                      : 'text-content-secondary hover:text-content-primary after:scale-x-0 active:text-brand-300'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <ButtonLink href={navCTA.href} size="sm" active={isCtaActive}>
              {navCTA.label}
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-content-secondary hover:text-content-primary transition-colors"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>
      </Container>
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        isActive={isActive}
        isCtaActive={isCtaActive}
      />
    </header>
  );
}
