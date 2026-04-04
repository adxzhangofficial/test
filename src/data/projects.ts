export interface Project {
  slug: string;
  title: string;
  subsidiary: string;
  subsidiaryId: string;
  category: string;
  image: string;
  summary: string;
  challenge: string;
  approach: string;
  results: string;
  stats: { label: string; value: string }[];
  year: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: 'asm-nationwide-launch',
    title: 'ASM Nationwide E-Commerce Launch',
    subsidiary: 'American Service Marketplace',
    subsidiaryId: 'asm',
    category: 'E-Commerce',
    image: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
    summary:
      'Launched a full-scale pet e-commerce platform serving all 50 states with 5,000+ products, integrated payments, and same-day fulfillment.',
    challenge:
      'The pet industry lacked a unified, premium online marketplace. Existing platforms were fragmented, offered inconsistent quality, and provided poor customer experiences. We needed to build a platform from scratch that could scale nationally.',
    approach:
      'We developed a modern, full-stack platform with React and Node.js, integrated Stripe for payments, built a custom fulfillment engine, and established partnerships with 200+ premium pet brands. A rigorous QA process ensured every product met our quality standards.',
    results:
      'Within 18 months of launch, ASM became a recognized name in the pet e-commerce space. Our customer satisfaction scores consistently exceed 4.7/5, and our repeat purchase rate is among the highest in the industry.',
    stats: [
      { label: 'Products Listed', value: '5,000+' },
      { label: 'States Served', value: '50' },
      { label: 'Brand Partners', value: '200+' },
      { label: 'Customer Rating', value: '4.7/5' },
    ],
    year: '2026',
    featured: true,
  },
  {
    slug: 'asa-certification-program',
    title: 'National Service Animal Certification Program',
    subsidiary: 'American Service Animals',
    subsidiaryId: 'asa',
    category: 'Animal Services',
    image: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
    summary:
      'Designed and deployed a nationally recognized service animal training and certification program in partnership with 50+ veterinary clinics.',
    challenge:
      'The service animal industry was plagued by fraudulent certifications and inconsistent standards. Handlers and businesses needed a trustworthy, ADA-compliant certification process backed by qualified professionals.',
    approach:
      'We assembled a board of veterinary behaviorists, consulted with ADA attorneys, and built a three-tier certification system: basic obedience, public access, and specialized task training. Each tier has clear benchmarks and requires in-person evaluation.',
    results:
      "The program has certified over 1,200 service animal teams across 38 states, with a 96% pass rate for teams completing the full program. We've become a trusted resource for businesses seeking ADA compliance guidance.",
    stats: [
      { label: 'Teams Certified', value: '1,200+' },
      { label: 'Partner Clinics', value: '50+' },
      { label: 'States Active', value: '38' },
      { label: 'Program Pass Rate', value: '96%' },
    ],
    year: '2024',
    featured: true,
  },
  {
    slug: 'asl-fulfillment-network',
    title: 'Multi-Hub Fulfillment Network Buildout',
    subsidiary: 'American Service Logistics',
    subsidiaryId: 'asl',
    category: 'Logistics',
    image: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
    summary:
      'Built a 5-hub national fulfillment network enabling same-day dispatch for 85% of US orders.',
    challenge:
      'Rising customer expectations for fast delivery times clashed with the reality of centralized fulfillment. Shipping from a single hub meant 3–5 day delivery for most of the country, leading to cart abandonment and negative reviews.',
    approach:
      'We strategically placed fulfillment centers in New Jersey, Atlanta, Dallas, Denver, and Los Angeles. Each hub uses AI-powered inventory allocation to ensure optimal stock levels. Automated sortation systems process orders within 90 minutes of placement.',
    results:
      'Average delivery time dropped from 4.2 days to 1.8 days. Same-day dispatch rate increased to 94%. Customer satisfaction scores improved by 23% and return-related logistics costs fell by 31%.',
    stats: [
      { label: 'Fulfillment Hubs', value: '5' },
      { label: 'Avg. Delivery', value: '1.8 Days' },
      { label: 'Same-Day Dispatch', value: '94%' },
      { label: 'Cost Reduction', value: '31%' },
    ],
    year: '2025',
    featured: true,
  },
  {
    slug: 'asp-smart-building',
    title: 'Smart Building Portfolio Acquisition',
    subsidiary: 'American Service Properties',
    subsidiaryId: 'asp',
    category: 'Real Estate',
    image: 'linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)',
    summary:
      'Acquired and retrofitted a 12-property commercial portfolio with IoT-enabled building management systems.',
    challenge:
      'Commercial properties in mid-tier markets were underperforming due to outdated infrastructure and rising energy costs. Building owners faced tenant churn and compressed margins without the capital to modernize.',
    approach:
      'We acquired 12 commercial properties across 6 states, implemented smart HVAC, lighting, and security systems connected to a centralized IoT platform, and repositioned the properties with modern amenities including EV charging and co-working spaces.',
    results:
      'Occupancy rates increased from 72% to 95%. Energy costs decreased by 28% on average. Property values appreciated 18% within the first year post-retrofit, and tenant retention improved to 89%.',
    stats: [
      { label: 'Properties', value: '12' },
      { label: 'Occupancy Rate', value: '95%' },
      { label: 'Energy Savings', value: '28%' },
      { label: 'Value Growth', value: '18%' },
    ],
    year: '2025',
    featured: true,
  },
  {
    slug: 'ast-cloud-migration',
    title: 'Enterprise Cloud Migration Initiative',
    subsidiary: 'American Service Tech',
    subsidiaryId: 'ast',
    category: 'Technology',
    image: 'linear-gradient(135deg, #4f46e5 0%, #4338ca 100%)',
    summary:
      "Migrated ASG's entire internal infrastructure to a multi-cloud architecture, reducing costs by 40% and improving uptime to 99.99%.",
    challenge:
      'Our growing subsidiary network ran on disparate on-premise systems with inconsistent security policies, manual deployments, and frequent downtime. We needed a unified, scalable infrastructure.',
    approach:
      'We designed a multi-cloud strategy using AWS and Azure, containerized all applications with Kubernetes, implemented CI/CD pipelines, and established zero-trust security. A phased migration ensured zero downtime during the transition.',
    results:
      'Infrastructure costs dropped 40%. Deployment frequency increased from monthly to daily. System uptime reached 99.99% and mean time to recovery dropped from 4 hours to 12 minutes.',
    stats: [
      { label: 'Cost Reduction', value: '40%' },
      { label: 'Uptime', value: '99.99%' },
      { label: 'Deploy Frequency', value: 'Daily' },
      { label: 'Recovery Time', value: '12 min' },
    ],
    year: '2026',
    featured: true,
  },
  {
    slug: 'ash-telehealth-platform',
    title: 'Telehealth Platform Launch',
    subsidiary: 'American Service Health',
    subsidiaryId: 'ash',
    category: 'Healthcare',
    image: 'linear-gradient(135deg, #0891b2 0%, #0e7490 100%)',
    summary:
      'Built and launched a HIPAA-compliant telehealth platform connecting patients with licensed physicians in under 15 minutes.',
    challenge:
      'Rural and underserved communities faced long wait times and limited access to healthcare providers. Traditional telehealth solutions were expensive and difficult for patients to navigate.',
    approach:
      'We developed a patient-first platform with an intuitive interface, integrated electronic prescriptions, and built an AI triage system that routes patients to the right specialist. All data is encrypted end-to-end and HIPAA-compliant.',
    results:
      'Launched in 12 states with plans to expand nationwide. Average wait time is 8 minutes. Patient satisfaction scores average 4.8/5, and 62% of patients report avoiding an unnecessary ER visit.',
    stats: [
      { label: 'States Live', value: '12' },
      { label: 'Avg. Wait Time', value: '8 min' },
      { label: 'Patient Satisfaction', value: '4.8/5' },
      { label: 'ER Visits Avoided', value: '62%' },
    ],
    year: '2026',
    featured: true,
  },
  {
    slug: 'asf-venture-fund',
    title: 'ASG Ventures — $50M Innovation Fund',
    subsidiary: 'American Service Finance',
    subsidiaryId: 'asf',
    category: 'Finance',
    image: 'linear-gradient(135deg, #ca8a04 0%, #a16207 100%)',
    summary:
      'Established a $50M venture fund to invest in early-stage companies aligned with ASG subsidiary industries.',
    challenge:
      "Promising startups in pet-tech, health-tech, and logistics-tech struggled to find investors who understood their industries. Generic VC firms couldn't provide the domain expertise these companies needed.",
    approach:
      "We launched ASG Ventures with a focus on Seed-to-Series-A investments. Each portfolio company receives not just capital, but access to ASG's operational expertise, customer base, and distribution channels across our 9 subsidiaries.",
    results:
      'Funded 14 startups across 5 verticals in the first year. Three portfolio companies have already achieved profitability. Combined portfolio revenue exceeds $35M annualized.',
    stats: [
      { label: 'Fund Size', value: '$50M' },
      { label: 'Portfolio Companies', value: '14' },
      { label: 'Profitable', value: '3' },
      { label: 'Portfolio Revenue', value: '$35M+' },
    ],
    year: '2026',
    featured: false,
  },
  {
    slug: 'ashome-smart-installation',
    title: 'Smart Home Installation Network',
    subsidiary: 'American Service Home',
    subsidiaryId: 'ashome',
    category: 'Home Services',
    image: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
    summary:
      'Piloting a vetted-professional network for smart home installations in 5 major metro areas.',
    challenge:
      'Homeowners wanting smart home upgrades faced unreliable contractors, inconsistent pricing, and no quality guarantees. The fragmented home services market made finding trusted professionals difficult.',
    approach:
      'We built a platform that vets professionals through background checks, skills testing, and customer reviews. Transparent pricing is set before work begins. All installations come with a 2-year workmanship guarantee.',
    results:
      'Pilot program in 5 metros has onboarded 320 certified professionals. Average job completion rating is 4.9/5. Customer acquisition cost is 60% below industry average due to word-of-mouth referrals.',
    stats: [
      { label: 'Metro Areas', value: '5' },
      { label: 'Certified Pros', value: '320' },
      { label: 'Job Rating', value: '4.9/5' },
      { label: 'CAC vs Industry', value: '-60%' },
    ],
    year: '2027',
    featured: false,
  },
];
