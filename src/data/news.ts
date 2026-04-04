export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: 'Press Release' | 'Company News' | 'Milestone' | 'Industry';
  subsidiaryId?: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 'asg-ventures-launch',
    title: 'ASG Launches $50M Venture Fund to Back American Innovation',
    excerpt:
      'American Service Finance establishes ASG Ventures, a $50 million fund targeting early-stage companies in pet-tech, health-tech, logistics, and sustainable services.',
    content: '',
    date: '2026-03-15',
    category: 'Press Release',
    subsidiaryId: 'asf',
  },
  {
    id: 'ash-telehealth-expansion',
    title: 'American Service Health Expands Telehealth to 12 States',
    excerpt:
      "Following a successful pilot in 5 states, ASH's telehealth platform is now live in 12 states with plans for nationwide coverage by Q4 2026.",
    content: '',
    date: '2026-02-28',
    category: 'Company News',
    subsidiaryId: 'ash',
  },
  {
    id: 'asg-9-subsidiaries',
    title: 'American Service Group Reaches 9 Subsidiary Milestone',
    excerpt:
      'With the announcement of American Service Home and American Service Auto, ASG now operates a family of nine industry-spanning companies.',
    content: '',
    date: '2026-01-20',
    category: 'Milestone',
  },
  {
    id: 'ast-cloud-migration',
    title: 'ASG Completes Full Cloud Migration, Cuts Infrastructure Costs 40%',
    excerpt:
      'American Service Tech successfully migrated all ASG systems to a multi-cloud architecture, achieving 99.99% uptime and significant cost savings.',
    content: '',
    date: '2026-01-10',
    category: 'Company News',
    subsidiaryId: 'ast',
  },
  {
    id: 'asl-fifth-hub',
    title: 'American Service Logistics Opens Fifth Fulfillment Hub in Los Angeles',
    excerpt:
      "The new West Coast hub completes ASL's national network, enabling same-day dispatch for 94% of US orders.",
    content: '',
    date: '2025-11-05',
    category: 'Press Release',
    subsidiaryId: 'asl',
  },
  {
    id: 'asm-5000-products',
    title: 'American Service Marketplace Surpasses 5,000 Products',
    excerpt:
      "ASM's curated pet marketplace hits a milestone with 5,000+ premium products from 200+ brand partners, serving customers in all 50 states.",
    content: '',
    date: '2025-09-18',
    category: 'Milestone',
    subsidiaryId: 'asm',
  },
  {
    id: 'asp-smart-building',
    title: 'ASG Properties Acquires 12-Building Smart Portfolio',
    excerpt:
      'American Service Properties completes acquisition and IoT retrofit of a 12-property commercial portfolio across 6 states.',
    content: '',
    date: '2025-07-22',
    category: 'Press Release',
    subsidiaryId: 'asp',
  },
  {
    id: 'asa-1200-certifications',
    title: 'American Service Animals Certifies 1,200th Service Team',
    excerpt:
      "ASA's nationally recognized certification program reaches a significant milestone, with service animal teams active in 38 states.",
    content: '',
    date: '2025-05-10',
    category: 'Milestone',
    subsidiaryId: 'asa',
  },
];
