export interface TeamMember {
  id: string;
  name: string;
  title: string;
  department: string;
  bio: string;
  initials: string;
  color: string;
  linkedin?: string;
  featured: boolean;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'sohail-ahmed',
    name: 'SOHAIL A.',
    title: 'Founder',
    department: 'Executive',
    bio: 'I founded American Service Group with a vision to build an interconnected family of service-driven brands. With knowledge in enterprise across multiple industries, I bring strategic vision and operational discipline to every ASG venture.',
    initials: 'SA',
    color: '#1B2A4A',
    featured: true,
  },
  {
    id: 'sarah-mitchell',
    name: 'SARAH M.',
    title: 'Chief Operating Officer',
    department: 'Executive',
    bio: 'Sarah oversees daily operations across all nine subsidiaries. Previously VP of Operations at a Fortune 500 logistics firm, she specializes in scaling operations while maintaining quality and culture.',
    initials: 'SM',
    color: '#C41E3A',
    featured: true,
  },
  {
    id: 'robert-chen',
    name: 'ROBERT C.',
    title: 'Chief Financial Officer',
    department: 'Executive',
    bio: "Robert manages ASG's financial strategy, fundraising, and M&A activity. A Harvard MBA with 15 years in corporate finance and private equity, he has overseen over $200M in transactions.",
    initials: 'RC',
    color: '#ca8a04',
    featured: true,
  },
  {
    id: 'david-park',
    name: 'David Park',
    title: 'Chief Technology Officer',
    department: 'Executive',
    bio: 'David leads technology strategy and engineering across all ASG companies. A Stanford CS graduate and former lead architect at a major cloud provider, he drives innovation in AI, infrastructure, and product engineering.',
    initials: 'DP',
    color: '#4f46e5',
    featured: true,
  },
  {
    id: 'maria-santos',
    name: 'Maria Santos',
    title: 'VP of Operations',
    department: 'Operations',
    bio: 'Maria leads operational excellence initiatives across subsidiaries, focusing on process optimization, supply chain management, and quality assurance. She has a track record of reducing operational costs by 30%+ at scale.',
    initials: 'MS',
    color: '#059669',
    featured: false,
  },
  {
    id: 'emily-thompson',
    name: 'Emily Thompson',
    title: 'VP of Marketing',
    department: 'Marketing',
    bio: 'Emily drives brand strategy and customer acquisition for all ASG companies. With experience leading marketing at high-growth startups, she blends data-driven tactics with creative storytelling.',
    initials: 'ET',
    color: '#0891b2',
    featured: false,
  },
  {
    id: 'michael-johnson',
    name: 'Michael Johnson',
    title: 'VP of Business Development',
    department: 'Business Development',
    bio: 'Michael identifies and executes strategic partnerships, joint ventures, and expansion opportunities. His network spans Fortune 500 companies, government agencies, and emerging startups.',
    initials: 'MJ',
    color: '#ea580c',
    featured: false,
  },
  {
    id: 'amanda-foster',
    name: 'Amanda Foster',
    title: 'General Counsel',
    department: 'Legal',
    bio: "Amanda leads ASG's legal, compliance, and regulatory affairs. A former partner at a top-20 law firm, she specializes in corporate governance, M&A, and regulatory compliance across multiple industries.",
    initials: 'AF',
    color: '#7c3aed',
    featured: false,
  },
];
