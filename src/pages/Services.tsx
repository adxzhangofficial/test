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
  Package,
  Globe,
  Shield,
  BarChart3,
  Cloud,
  CreditCard,
  Wrench,
  Stethoscope,
  Brain,
  Lock,
  Palette,
  Warehouse,
  TrendingUp,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import HeroCanvas from '../components/HeroCanvas';

interface ServiceCategory {
  sector: string;
  color: string;
  icon: any;
  services: { name: string; desc: string; icon: any }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    sector: 'E-Commerce & Retail',
    color: '#2563eb',
    icon: ShoppingCart,
    services: [
      { name: 'Online Marketplace Operations', desc: 'End-to-end e-commerce platform management, product curation, and customer experience optimization.', icon: Globe },
      { name: 'Brand Partnerships', desc: 'Strategic partner onboarding, co-marketing campaigns, and exclusive product launches.', icon: Palette },
      { name: 'Customer Service Excellence', desc: '24/7 multi-channel customer support with AI-enhanced triage and under-60-second response times.', icon: Shield },
    ],
  },
  {
    sector: 'Animal Services',
    color: '#dc2626',
    icon: Heart,
    services: [
      { name: 'Service Animal Training', desc: 'Comprehensive ADA-compliant service animal training programs with certified behaviorists.', icon: Heart },
      { name: 'Therapy Animal Certification', desc: 'Standardized certification for therapy animals used in hospitals, schools, and assisted living.', icon: Stethoscope },
      { name: 'Handler Education', desc: 'Educational programs for handlers covering legal rights, public access etiquette, and animal wellness.', icon: Brain },
    ],
  },
  {
    sector: 'Logistics & Fulfillment',
    color: '#059669',
    icon: Truck,
    services: [
      { name: 'Warehousing & Fulfillment', desc: 'Multi-hub national warehousing with AI-powered inventory allocation and automated sortation.', icon: Warehouse },
      { name: 'Last-Mile Delivery', desc: 'Same-day and next-day delivery options with real-time tracking and delivery confirmation.', icon: Package },
      { name: 'Cold-Chain Logistics', desc: 'Temperature-controlled shipping for perishable goods, pharmaceuticals, and specialty products.', icon: Truck },
    ],
  },
  {
    sector: 'Real Estate & Properties',
    color: '#7c3aed',
    icon: Building2,
    services: [
      { name: 'Property Acquisition', desc: 'Data-driven commercial and residential property acquisition in high-growth markets.', icon: Building2 },
      { name: 'Smart Building Management', desc: 'IoT-enabled building operations with centralized monitoring, energy optimization, and predictive maintenance.', icon: Monitor },
      { name: 'Property Development', desc: 'Ground-up development and value-add repositioning of commercial properties.', icon: TrendingUp },
    ],
  },
  {
    sector: 'Healthcare',
    color: '#0891b2',
    icon: HeartPulse,
    services: [
      { name: 'Telehealth Platform', desc: 'HIPAA-compliant virtual consultations connecting patients with licensed physicians in minutes.', icon: HeartPulse },
      { name: 'Pharmacy Benefits', desc: 'Prescription management, generic alternatives, and mail-order pharmacy services.', icon: CreditCard },
      { name: 'Community Health Programs', desc: 'Local health education, screening events, and preventive care initiatives.', icon: Heart },
    ],
  },
  {
    sector: 'Technology',
    color: '#4f46e5',
    icon: Monitor,
    services: [
      { name: 'Cloud Infrastructure', desc: 'Multi-cloud architecture design, migration, and management for enterprise workloads.', icon: Cloud },
      { name: 'AI & Machine Learning', desc: 'Custom AI models, predictive analytics, and intelligent automation solutions.', icon: Brain },
      { name: 'Cybersecurity', desc: 'Zero-trust security implementation, penetration testing, and 24/7 SOC monitoring.', icon: Lock },
    ],
  },
  {
    sector: 'Finance & Investment',
    color: '#ca8a04',
    icon: DollarSign,
    services: [
      { name: 'Venture Capital', desc: 'Seed-to-Series-A investments in companies aligned with ASG division industries.', icon: TrendingUp },
      { name: 'Wealth Management', desc: 'Personalized financial planning, portfolio management, and retirement strategy.', icon: BarChart3 },
      { name: 'Business Insurance', desc: 'Tailored commercial insurance packages for SMBs and enterprise clients.', icon: Shield },
    ],
  },
  {
    sector: 'Automotive',
    color: '#ea580c',
    icon: Car,
    services: [
      { name: 'Online Car Buying', desc: 'Transparent online purchasing with home delivery, virtual inspections, and guaranteed pricing.', icon: Globe },
      { name: 'Certified Service Centers', desc: 'Factory-trained technicians, genuine parts, and warranty-backed maintenance programs.', icon: Wrench },
      { name: 'Fleet Management', desc: 'Corporate fleet acquisition, maintenance scheduling, and lifecycle management.', icon: Car },
    ],
  },
  {
    sector: 'Home Services',
    color: '#16a34a',
    icon: Home,
    services: [
      { name: 'Smart Home Installation', desc: 'Professional installation of smart locks, cameras, thermostats, lighting, and home automation systems.', icon: Monitor },
      { name: 'Home Renovation', desc: 'Kitchen, bathroom, and whole-home renovation projects managed by vetted professionals.', icon: Home },
      { name: 'Maintenance Programs', desc: 'Subscription-based home maintenance covering HVAC, plumbing, electrical, and appliance service.', icon: Wrench },
    ],
  },
];

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-black overflow-hidden">
      <HeroCanvas />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white">
          Our Services
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Comprehensive service offerings across nine industries, all powered by
          American Service Group.
        </p>
      </div>
    </section>
  );
}

function ServiceSector({ category, index }: { category: ServiceCategory; index: number }) {
  const s = useInView();
  const Icon = category.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      ref={s.ref}
      className={`py-16 ${isEven ? 'bg-white' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center gap-4 mb-10 anim-hidden ${s.isVisible ? 'anim-visible' : ''}`}>
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ background: `${category.color}15` }}
          >
            <Icon className="w-6 h-6" style={{ color: category.color }} />
          </div>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-navy-700">
            {category.sector}
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {category.services.map((svc, i) => {
            const SvcIcon = svc.icon;
            return (
              <div
                key={i}
                className={`bg-white rounded-2xl border border-gray-100 p-7 card-hover anim-hidden ${
                  s.isVisible ? 'anim-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: `${category.color}10` }}
                >
                  <SvcIcon className="w-5 h-5" style={{ color: category.color }} />
                </div>
                <h3 className="text-lg font-heading font-bold text-navy-700">
                  {svc.name}
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {svc.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <>
      <PageHero />
      <div>
        {serviceCategories.map((cat, i) => (
          <ServiceSector key={cat.sector} category={cat} index={i} />
        ))}
      </div>
    </>
  );
}
