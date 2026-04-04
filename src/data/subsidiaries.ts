import {
  ShoppingCart,
  Heart,
  Truck,
  Building2,
  HeartPulse,
  Monitor,
  DollarSign,
  Car,
  Home,
} from 'lucide-react';

export interface Subsidiary {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  industry: string;
  icon: any;
  image?: string;
  color: string;
  gradient: string;
  url?: string;
  founded: string;
  status: 'active' | 'launching-2026' | 'tbd';
  highlights: string[];
}

export const subsidiaries: Subsidiary[] = [
  {
    id: 'asm',
    name: 'American Service Marketplace',
    shortName: 'ASM',
    tagline: 'Premium Pet E-Commerce',
    image: '/images/American-Service-Marketplace-1.png',
    description:
      'The flagship online marketplace offering premium pet products, supplies, and accessories. From nutrition to grooming, ASM serves pet families across all 50 states with curated, high-quality products and exceptional customer service.',
    industry: 'E-Commerce',
    icon: ShoppingCart,
    color: '#2563eb',
    gradient: 'from-blue-600 to-blue-800',
    url: '/',
    founded: '2026',
    status: 'active',
    highlights: ['5,000+ Products', '50-State Delivery', '24/7 Customer Support'],
  },
  {
    id: 'asa',
    name: 'American Service Animals',
    shortName: 'ASA',
    tagline: 'Service & Therapy Animal Programs',
    image: '/images/American-Service-Animals-1-1.png',
    description:
      'Providing comprehensive service animal training, therapy animal certification, and emotional support animal programs. We partner with veterinary professionals to ensure the highest standards of animal welfare and handler support.',
    industry: 'Animal Services',
    icon: Heart,
    color: '#dc2626',
    gradient: 'from-red-500 to-red-700',
    founded: '2026',
    status: 'launching-2026',
    highlights: ['Certified Trainers', 'ADA-Compliant Programs', 'Nationwide Network'],
  },
  {
    id: 'asl',
    name: 'American Service Logistics',
    shortName: 'ASL',
    tagline: 'Smarter Shipping & Fulfillment',
    image: '/images/American-Servie-Logistics.png',
    description:
      'End-to-end logistics solutions including warehousing, last-mile delivery, and cold-chain fulfillment. Purpose-built for e-commerce businesses requiring speed, accuracy, and transparency in every shipment.',
    industry: 'Logistics',
    icon: Truck,
    color: '#059669',
    gradient: 'from-emerald-500 to-emerald-700',
    founded: '2027',
    status: 'tbd',
    highlights: ['Same-Day Fulfillment', '99.8% Accuracy', 'Real-Time Tracking'],
  },
  {
    id: 'ast',
    name: 'American Service Tech',
    shortName: 'AST',
    tagline: 'IT Solutions & Digital Transformation',
    description:
      'Enterprise IT solutions including cloud infrastructure, cybersecurity, AI/ML consulting, and custom software development. We help businesses modernize their technology stack and accelerate digital transformation.',
    industry: 'Technology',
    icon: Monitor,
    color: '#4f46e5',
    gradient: 'from-indigo-500 to-indigo-700',
    founded: '2027',
    status: 'tbd',
    highlights: ['Cloud & DevOps', 'AI/ML Solutions', 'Cybersecurity'],
  },
  {
    id: 'asp',
    name: 'American Service Properties',
    shortName: 'ASP',
    tagline: 'Real Estate & Property Management',
    image: '/images/American-Service-Properties.png',
    description:
      'Full-service real estate acquisition, development, and property management across commercial and residential sectors. We leverage data-driven analysis to identify high-value opportunities in growing markets.',
    industry: 'Real Estate',
    icon: Building2,
    color: '#7c3aed',
    gradient: 'from-violet-500 to-violet-700',
    founded: '2025',
    status: 'tbd',
    highlights: ['Commercial & Residential', 'Smart Building Tech', 'Property Management'],
  },
  {
    id: 'ash',
    name: 'American Service Health',
    shortName: 'ASH',
    tagline: 'Healthcare Solutions for Modern America',
    image: '/images/American-Service-Health-1.png',
    description:
      'Delivering accessible healthcare services through telehealth platforms, pharmacy benefits management, and community health centers. We focus on reducing costs while improving patient outcomes.',
    industry: 'Healthcare',
    icon: HeartPulse,
    color: '#0891b2',
    gradient: 'from-cyan-500 to-cyan-700',
    founded: '2026',
    status: 'tbd',
    highlights: ['Telehealth Platform', 'Pharmacy Benefits', 'Community Health'],
  },
  {
    id: 'asf',
    name: 'American Service Finance',
    shortName: 'ASF',
    tagline: 'Financial Advisory & Insurance',
    description:
      'Comprehensive financial services including wealth management, business insurance, merchant banking, and venture capital. We provide tailored financial strategies for individuals and enterprises.',
    industry: 'Finance',
    icon: DollarSign,
    color: '#ca8a04',
    gradient: 'from-yellow-500 to-yellow-700',
    founded: '2026',
    status: 'tbd',
    highlights: ['Wealth Management', 'Business Insurance', 'Venture Capital'],
  },
  {
    id: 'asauto',
    name: 'American Service Auto',
    shortName: 'AS Auto',
    tagline: 'Automotive Sales & Service',
    description:
      'A modern approach to automotive retail combining online car buying with certified service centers. We offer transparent pricing, home delivery, and warranty-backed maintenance programs.',
    industry: 'Automotive',
    icon: Car,
    color: '#ea580c',
    gradient: 'from-orange-500 to-orange-700',
    founded: '2027',
    status: 'tbd',
    highlights: ['Online Buying', 'Certified Service', 'Home Delivery'],
  },
  {
    id: 'ashome',
    name: 'American Service Home',
    shortName: 'AS Home',
    tagline: 'Home Improvement & Maintenance',
    description:
      'On-demand home improvement services from trusted, vetted professionals. From renovations and repairs to smart home installations, we make home improvement reliable and hassle-free.',
    industry: 'Home Services',
    icon: Home,
    color: '#16a34a',
    gradient: 'from-green-500 to-green-700',
    founded: '2027',
    status: 'tbd',
    highlights: ['Vetted Professionals', 'Smart Home Solutions', 'Guaranteed Work'],
  },
];
