import { z } from 'zod/v4';

/**
 * Contact form validation schema.
 * Used for CLIENT-SIDE validation only (UX feedback).
 * The backend performs its own authoritative validation.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  company: z.string().max(100, 'Company name is too long').optional(),
  email: z.email('Please enter a valid email address'),
  phone: z.string().max(20, 'Phone number is too long').optional(),
  service: z.enum([
    'custom-software',
    'saas',
    'web-app',
    'mobile-app',
    'ai-solutions',
    'domain-solutions',
    'other',
  ], { error: 'Please select the service you are interested in' }),
  projectType: z.string().max(100).optional(),
  budget: z
    .enum(['<25k', '25k-50k', '50k-100k', '100k+', 'not-sure'])
    .optional(),
  description: z
    .string()
    .min(10, 'Please describe your project briefly (at least 10 characters)')
    .max(2000, 'Description is too long (max 2000 characters)'),
  timeline: z
    .enum(['asap', '1-3-months', '3-6-months', '6-months+', 'flexible'])
    .optional(),
  honeypot: z.string().max(0, 'Invalid submission').optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
