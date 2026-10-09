export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  overview: string;
  results: { metric: string; label: string }[];
  technologies: string[];
  architectureHighlights: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'telehealth-data-platform',
    title: 'High-Concurrency Telehealth & Medical Telemetry Platform',
    client: 'HealthPulse Systems',
    industry: 'Healthcare & MedTech',
    challenge:
      'The client faced frequent database locking, high latency during peak consultation hours, and needed strict HIPAA compliance for end-to-end telemetry ingestion.',
    solution:
      'Architected a distributed micro-service topology with isolated tenant data stores, WebRTC media relays, and an event-driven Kafka pipeline for medical biometric streams.',
    overview:
      'We engineered a next-generation telehealth system capable of processing 25,000 concurrent patient audio/video consultations with real-time vitals monitoring.',
    results: [
      { metric: '99.99%', label: 'Platform Uptime' },
      { metric: '38ms', label: 'P99 Latency' },
      { metric: '100%', label: 'HIPAA Audits Passed' },
      { metric: '4.8x', label: 'Throughput Increase' },
    ],
    technologies: ['Next.js', 'Go', 'PostgreSQL', 'WebRTC', 'AWS', 'Docker'],
    architectureHighlights: [
      'Zero-knowledge encryption for all patient PHI at rest and in transit',
      'Geographically distributed edge relays for ultra-low latency audio/video',
      'Automated disaster recovery with 60-second RTO and zero data loss',
    ],
  },
  {
    slug: 'fintech-clearing-engine',
    title: 'Sub-Millisecond Real-Time Clearing & Settlement Engine',
    client: 'Apex Clearing Solutions',
    industry: 'Financial Services & FinTech',
    challenge:
      'Legacy relational databases struggled to handle high-frequency ledger updates, causing settlement delays and reconciliation bottlenecks during market volatility.',
    solution:
      'Designed an in-memory double-entry accounting engine with Raft consensus, write-ahead logging (WAL), and asynchronous audit journal mirroring to immutable cold storage.',
    overview:
      'YUTOMAX built a high-throughput financial settlement system supporting algorithmic transaction validation, automated reconciliation, and multi-currency routing.',
    results: [
      { metric: '< 8ms', label: 'Average Execution Time' },
      { metric: '12M+', label: 'Daily Transactions' },
      { metric: '0', label: 'Discrepancy Rate' },
      { metric: '65%', label: 'Infra Cost Savings' },
    ],
    technologies: ['TypeScript', 'Rust', 'Redis', 'PostgreSQL', 'Kubernetes'],
    architectureHighlights: [
      'Deterministic state-machine replication guaranteeing strict order of execution',
      'Event-sourced double-entry ledger with instant cryptographic proof',
      'Real-time automated stress-testing against market volatility simulations',
    ],
  },
  {
    slug: 'autonomous-logistics-optimizer',
    title: 'Autonomous Multi-Hub Fleet Routing & Inventory Engine',
    client: 'Global Freight Dynamics',
    industry: 'Logistics & Supply Chain',
    challenge:
      'Manual dispatch and fragmented warehouse data resulted in empty fleet miles, routing conflicts, and delivery prediction errors of up to 4 hours.',
    solution:
      'Built an AI-assisted routing engine combining real-time telematics, geospatial clustering algorithms, and dynamic load-balancing across 18 regional distribution hubs.',
    overview:
      'Delivered an enterprise logistics optimization engine that predicts transit disruptions and recalibrates dispatch routes dynamically across thousands of active vehicles.',
    results: [
      { metric: '23%', label: 'Reduction in Fuel & Miles' },
      { metric: '94%', label: 'On-Time Accuracy' },
      { metric: '1.2s', label: 'Dynamic Re-route Time' },
      { metric: '$3.4M', label: 'Annual Operational Savings' },
    ],
    technologies: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'GIS', 'Docker'],
    architectureHighlights: [
      'Streaming telematics ingestion processing 50,000 GPS events per second',
      'Heuristic constraint solvers optimizing vehicle capacities and driver shifts',
      'Offline-capable driver companion mobile application with sync reconciliation',
    ],
  },
];
