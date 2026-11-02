'use client';

import { useState, useEffect, useRef, useCallback, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ButtonLink } from '@/components/ui/button';
import { navItems, navCTA } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { Logo } from '@/components/common/logo';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  /** Shared with the desktop header so both highlight the same item. */
  isActive: (href: string) => boolean;
  isCtaActive: boolean;
}

const emptySubscribe = () => () => {};

/** Query all focusable elements inside a container */
function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  );
}

export function MobileNav({ isOpen, onClose, isActive, isCtaActive }: MobileNavProps) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    let raf1: number;
    let raf2: number;

    if (isOpen) {
      raf1 = requestAnimationFrame(() => {
        setShouldRender(true);
        raf2 = requestAnimationFrame(() => {
          setIsVisible(true);
        });
      });
    } else {
      raf1 = requestAnimationFrame(() => {
        setIsVisible(false);
      });
      timer = setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }

    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      clearTimeout(timer);
    };
  }, [isOpen]);

  // Focus the close button when drawer opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
    }
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Focus trap handler
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !navRef.current) return;

    const focusable = getFocusableElements(navRef.current);
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, []);

  if (!isMounted || !shouldRender) return null;

  return createPortal(
    <div
      className={cn(
        'fixed inset-0 z-[100] lg:hidden overflow-hidden transition-all duration-300',
        isVisible ? 'visible' : 'invisible pointer-events-none'
      )}
      aria-hidden={!isOpen}
    >
      {/* Backdrop overlay covering the left exposed area */}
      <div
        className={cn(
          'fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 touch-none',
          isVisible ? 'opacity-100' : 'opacity-0'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Right-side Drawer — sized only to what is required, never full screen */}
      <div
        ref={navRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        onKeyDown={handleKeyDown}
        className={cn(
          'fixed inset-y-0 right-0 z-10 w-72 max-w-[calc(100vw-3rem)] sm:w-80',
          'bg-surface-primary border-l border-surface-border shadow-2xl',
          'flex flex-col p-6 overflow-y-auto',
          'transition-transform duration-300 ease-smooth',
          isVisible ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-4 border-b border-surface-border">
          <Link
            href="/"
            onClick={onClose}
            aria-label={`${siteConfig.name} home`}
            className="flex items-center shrink-0 transition-opacity hover:opacity-80"
          >
            <Logo className="h-8" />
          </Link>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 -mr-2 min-w-[40px] min-h-[40px] rounded-lg flex items-center justify-center text-content-secondary hover:text-content-primary hover:bg-surface-secondary transition-colors"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col gap-1 py-4">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'text-base font-medium transition-colors py-2.5 px-3 rounded-lg block',
                  active
                    ? 'text-brand-400 bg-brand-500/10 font-semibold'
                    : 'text-content-secondary hover:text-content-primary hover:bg-surface-secondary/60'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Button & Contact Info at bottom */}
        <div className="mt-auto pt-4 border-t border-surface-border space-y-4">
          <div onClick={onClose}>
            <ButtonLink href={navCTA.href} size="md" active={isCtaActive} className="w-full justify-center">
              {navCTA.label}
            </ButtonLink>
          </div>

          <div className="text-center">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-xs font-mono text-content-tertiary hover:text-brand-300 transition-colors"
            >
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
