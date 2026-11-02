import type { NavItem, NavCTA } from '@/types/navigation';

export const navItems: NavItem[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Technology', href: '/#technology' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/about' },
];

export const navCTA: NavCTA = {
  label: 'Start a Project',
  href: '/contact#project-form',
};
