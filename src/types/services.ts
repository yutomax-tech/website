import type { PageSEO } from './seo';

/**
 * A YUTOMAX service offering.
 */
export interface Service {
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  features: string[];
  technologies: string[];
  seo: PageSEO;
}

/**
 * An industry vertical YUTOMAX serves.
 */
export interface Industry {
  title: string;
  slug: string;
  description: string;
  icon: string;
  seo: PageSEO;
}

/**
 * A technology or capability.
 */
export interface Technology {
  name: string;
  icon?: string;
}

/**
 * A grouped technology category.
 */
export interface TechnologyCategory {
  category: string;
  items: Technology[];
}

/**
 * A process step in "How We Work".
 */
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}
