export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-Time' | 'Part-Time' | 'Contract' | 'Remote';
  subsidiary: string;
  description: string;
  requirements: string[];
  posted: string;
}

export const jobListings: JobListing[] = [
  {
    id: 'sr-fullstack-engineer',
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'Remote (US)',
    type: 'Full-Time',
    subsidiary: 'American Service Tech',
    description:
      "Build and scale web applications across the ASG platform. You'll work with React, Node.js, and cloud infrastructure to deliver features used by millions.",
    requirements: [
      '5+ years full-stack experience (React, Node.js, TypeScript)',
      'Experience with cloud platforms (AWS/Azure/GCP)',
      'Strong understanding of CI/CD and DevOps practices',
      'Excellent communication and collaborative mindset',
    ],
    posted: '2026-03-25',
  },
  {
    id: 'product-manager',
    title: 'Product Manager — E-Commerce',
    department: 'Product',
    location: 'New York, NY',
    type: 'Full-Time',
    subsidiary: 'American Service Marketplace',
    description:
      "Own the product roadmap for ASM's e-commerce platform. Drive strategy, prioritize features, and collaborate with engineering, design, and marketing teams.",
    requirements: [
      '3+ years product management in e-commerce or marketplace',
      'Experience with A/B testing and data-driven decision making',
      'Strong analytical skills and SQL proficiency',
      'Track record of shipping products that grow revenue',
    ],
    posted: '2026-03-20',
  },
  {
    id: 'logistics-coordinator',
    title: 'Logistics Operations Coordinator',
    department: 'Operations',
    location: 'Dallas, TX',
    type: 'Full-Time',
    subsidiary: 'American Service Logistics',
    description:
      'Coordinate daily fulfillment operations at our Dallas hub. Manage inventory flow, carrier relationships, and ensure on-time delivery targets are met.',
    requirements: [
      '2+ years logistics or supply chain experience',
      'Experience with warehouse management systems (WMS)',
      'Strong organizational and problem-solving skills',
      'Ability to thrive in a fast-paced environment',
    ],
    posted: '2026-03-18',
  },
  {
    id: 'marketing-director',
    title: 'Director of Digital Marketing',
    department: 'Marketing',
    location: 'Remote (US)',
    type: 'Full-Time',
    subsidiary: 'American Service Group',
    description:
      'Lead digital marketing strategy across the ASG family of companies. Manage brand campaigns, SEO/SEM, social media, and content marketing for all subsidiaries.',
    requirements: [
      '8+ years digital marketing experience',
      'Experience managing multi-brand marketing portfolios',
      'Proficient in analytics tools (GA4, SEMrush, HubSpot)',
      'Proven track record of scaling customer acquisition',
    ],
    posted: '2026-03-10',
  },
  {
    id: 'veterinary-consultant',
    title: 'Veterinary Behavior Consultant',
    department: 'Animal Services',
    location: 'Multiple Locations',
    type: 'Contract',
    subsidiary: 'American Service Animals',
    description:
      'Provide expert guidance on service animal training protocols and certification evaluations at ASA partner clinics.',
    requirements: [
      'DVM or PhD in Animal Behavior',
      'Board certification in veterinary behaviorism (preferred)',
      'Experience with service animal evaluation',
      'Willingness to travel to partner clinic locations',
    ],
    posted: '2026-03-05',
  },
  {
    id: 'financial-analyst',
    title: 'Financial Analyst — Venture Fund',
    department: 'Finance',
    location: 'New York, NY',
    type: 'Full-Time',
    subsidiary: 'American Service Finance',
    description:
      'Analyze investment opportunities for ASG Ventures. Conduct due diligence, build financial models, and support portfolio company monitoring.',
    requirements: [
      '2+ years in venture capital, private equity, or investment banking',
      'Strong financial modeling and valuation skills',
      'Experience with startup evaluation and due diligence',
      'CFA or MBA preferred',
    ],
    posted: '2026-02-28',
  },
];
