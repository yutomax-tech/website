import type { Service } from '@/types/services';

export const services: Service[] = [
  {
    title: 'Custom Software Solutions',
    slug: 'custom-software',
    shortDescription:
      'End-to-end custom software built for your unique business requirements. Scalable, maintainable, and designed to grow with you.',
    longDescription:
      'We design and build custom software solutions from the ground up, tailored to your exact business processes and goals. Our engineering team delivers scalable architectures that evolve with your business.',
    icon: 'code',
    features: [
      'Requirements analysis & system design',
      'Scalable architecture',
      'Full-stack development',
      'Integration with existing systems',
      'Ongoing maintenance & support',
    ],
    technologies: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'AWS'],
    seo: {
      title: 'Custom Software Development',
      description:
        'YUTOMAX builds custom software solutions tailored to your business. Scalable, secure, and engineered for long-term growth.',
    },
  },
  {
    title: 'SaaS Products',
    slug: 'saas',
    shortDescription:
      'We build SaaS products from concept to launch — multi-tenant architectures, subscription billing, and scalable infrastructure.',
    longDescription:
      'From idea validation to production-ready SaaS platforms, we handle the full product lifecycle. Our team builds multi-tenant systems with subscription management, analytics, and scalable cloud infrastructure.',
    icon: 'cloud',
    features: [
      'Product strategy & roadmap',
      'Multi-tenant architecture',
      'Subscription & billing integration',
      'Analytics dashboards',
      'Scalable cloud infrastructure',
    ],
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Vercel'],
    seo: {
      title: 'SaaS Product Development',
      description:
        'YUTOMAX builds SaaS products from concept to launch. Multi-tenant, subscription-ready, and cloud-native.',
    },
  },
  {
    title: 'Web Applications',
    slug: 'web-applications',
    shortDescription:
      'Modern, responsive web applications built with cutting-edge technologies. Fast, accessible, and SEO-optimized.',
    longDescription:
      'We deliver high-performance web applications using modern frameworks and best practices. Every app is responsive, accessible, and optimized for search engines and Core Web Vitals.',
    icon: 'globe',
    features: [
      'Progressive Web Apps',
      'Server-side rendering',
      'Real-time features',
      'Accessibility compliance',
      'Performance optimization',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    seo: {
      title: 'Web Application Development',
      description:
        'YUTOMAX builds modern web applications — fast, accessible, and SEO-friendly. React, Next.js, and TypeScript expertise.',
    },
  },
  {
    title: 'Mobile Applications',
    slug: 'mobile-applications',
    shortDescription:
      'Cross-platform and native mobile applications for iOS and Android. Smooth UX and high performance.',
    longDescription:
      'We build mobile applications that feel native on every platform. Whether cross-platform or fully native, our apps are designed for smooth user experiences and reliable performance.',
    icon: 'smartphone',
    features: [
      'Cross-platform development',
      'Native iOS & Android',
      'Offline-first architecture',
      'Push notifications',
      'App Store optimization',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    seo: {
      title: 'Mobile App Development',
      description:
        'YUTOMAX builds cross-platform and native mobile apps for iOS and Android. Smooth UX, high performance.',
    },
  },
  {
    title: 'AI-Powered Solutions',
    slug: 'ai-solutions',
    shortDescription:
      'Intelligent systems powered by machine learning and AI. From data pipelines to production ML models.',
    longDescription:
      'We help businesses leverage AI and machine learning to automate processes, derive insights, and build intelligent products. From data pipelines to production-grade ML models and LLM integrations.',
    icon: 'brain',
    features: [
      'Machine learning pipelines',
      'LLM integration & fine-tuning',
      'Natural language processing',
      'Computer vision',
      'AI-powered automation',
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'],
    seo: {
      title: 'AI & Machine Learning Solutions',
      description:
        'YUTOMAX builds AI-powered solutions — ML pipelines, LLM integrations, and intelligent automation for your business.',
    },
  },
  {
    title: 'Domain-Specific Solutions',
    slug: 'domain-solutions',
    shortDescription:
      'Specialized software for specific industries and domains. Deep understanding of your business vertical.',
    longDescription:
      'We build software tailored to specific industry domains — healthcare, fintech, logistics, education, and more. Our team combines technical excellence with domain expertise to deliver solutions that truly fit.',
    icon: 'layers',
    features: [
      'Industry-specific workflows',
      'Regulatory compliance',
      'Legacy system modernization',
      'Domain-driven design',
      'Integration with industry tools',
    ],
    technologies: ['TypeScript', 'Python', 'PostgreSQL', 'Docker', 'Kubernetes'],
    seo: {
      title: 'Domain-Specific Software Solutions',
      description:
        'YUTOMAX builds industry-specific software — healthcare, fintech, logistics, and more. Deep domain expertise.',
    },
  },
];
