import {
  Heart,
  GraduationCap,
  DollarSign,
  Coffee,
  Globe,
  Zap,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import HeroCanvas from '../components/HeroCanvas';

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-black overflow-hidden">
      <HeroCanvas />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white">
          Careers at ASG
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Join a family of brands that's shaping the future of American service.
        </p>
      </div>
    </section>
  );
}

function CultureSection() {
  const s = useInView();
  const perks = [
    { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive medical, dental, and vision coverage for you and your family.' },
    { icon: DollarSign, title: 'Competitive Pay', desc: 'Market-leading compensation with performance bonuses and equity options.' },
    { icon: GraduationCap, title: 'Learning Budget', desc: 'Dedicated professional development funds for courses, certifications, and industry conferences to sharpen your edge.' },
    { icon: Coffee, title: 'Flexible Work', desc: 'Remote-first culture with flexible hours and unlimited PTO policies.' },
    { icon: Globe, title: 'Impact at Scale', desc: 'Work on products used by millions across nine different industries.' },
    { icon: Zap, title: 'Growth Opportunity', desc: 'Move between divisions, explore new roles, and fast-track your career.' },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={s.ref}
          className={`text-center mb-16 anim-hidden ${s.isVisible ? 'anim-visible' : ''}`}
        >
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
            Why Join ASG
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-700 mt-3">
            Built for Builders
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            We're building nine brands across nine industries. If you thrive
            on challenge, ownership, and impact — you belong here.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border border-gray-100 p-7 card-hover anim-hidden ${
                s.isVisible ? 'anim-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-red-500" />
              </div>
              <h3 className="text-lg font-heading font-bold text-navy-700">{title}</h3>
              <p className="text-gray-500 text-sm mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JobListings() {
  const s = useInView();

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={s.ref}
          className={`text-center mb-16 anim-hidden ${s.isVisible ? 'anim-visible' : ''}`}
        >
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
            Careers
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-700 mt-3">
            No Openings Yet
          </h2>
          <p className="mt-4 text-gray-500">
            We're still building our team structure. Check back soon — exciting roles are on the way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Careers() {
  return (
    <>
      <PageHero />
      <CultureSection />
      <JobListings />
    </>
  );
}
