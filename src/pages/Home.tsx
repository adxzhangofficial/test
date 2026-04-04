import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  TrendingUp,
  Users,
  Globe,
  Star,
  ChevronRight,
} from 'lucide-react';
import { subsidiaries } from '../data/subsidiaries';
import { useInView, useCounter } from '../hooks/useInView';

/* ── Hero ── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-8 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 br-4 text-red-600 text-sm font-medium mb-8">
              <Star className="w-4 h-4" />
              Powering 9 American Brands
            </div>
            <h1 className="text-4xl font-ct sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold text-navy-700 leading-[1.1]">
              Building a Smarter
              <span className="block text-red-500 mt-1">America's Future</span>
              <span className="block text-gray-500 text-3xl sm:text-4xl lg:text-5xl font-bold mt-3">
                One Service at a Time
              </span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed">
              American Service Group is a diversified holding company powering
              nine industry-leading brands across e-commerce, logistics,
              healthcare, technology, and beyond.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/companies"
                className="inline-flex items-center gap-2 px-8 py-4 bg-red-500 text-white font-bold br-5 hover:bg-red-600 transition-all shadow-xl text-lg"
              >
                Our Divisions
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-navy-700 text-white font-semibold br-5 hover:bg-navy-800 transition-all text-lg"
              >
                Our Story
              </Link>
            </div>
          </div>

          {/* Right — Image */}
          <div className="hidden lg:flex justify-center">
            <img
              src="/images/asg.png"
              alt="American Service Group"
              className="w-full max-w-lg xl:max-w-xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}

/* ── Vision & Values Banner ── */
function VisionBanner() {
  return (
    <section className="bg-black border-tb py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-red-500/10 text-red-400 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Powered by Innovation
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white leading-tight">
            Our Services Are <span className="text-red-500">AI-Empowered</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Every division across ASG is accelerated by artificial intelligence and modern technology — cutting delivery times, improving accuracy, and unlocking capabilities that weren't possible before.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8">
            <Star className="mx-auto w-10 h-10 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Bold Vision</h3>
            <p className="text-gray-400 text-sm leading-relaxed">We're shaping the future of American services with ambition, AI-driven insights, and forward-thinking strategy.</p>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8">
            <TrendingUp className="mx-auto w-10 h-10 text-green-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Relentless Innovation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">From logistics to healthcare, modern AI and automation speed up every operation — delivering faster, smarter results across all 9 brands.</p>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8">
            <Users className="mx-auto w-10 h-10 text-blue-300 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">People + Technology</h3>
            <p className="text-gray-400 text-sm leading-relaxed">We combine expert human teams with cutting-edge technology so our clients, partners, and communities always get the best of both.</p>
          </div>
        </div></div>
    </section>
  );
}

/* ── About Preview ── */
function AboutPreview() {
  const s = useInView();
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={s.ref}
          className={`grid lg:grid-cols-2 gap-16 items-center anim-hidden ${
            s.isVisible ? 'anim-visible' : ''
          }`}
        >
          <div>
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy-700 mt-3 leading-tight">
              America's Most Ambitious
              <br />
              Service Conglomerate
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              Founded with a belief that service-driven businesses can transform
              industries, American Service Group has grown from a single
              e-commerce venture into a family of nine brands spanning the
              sectors that matter most to American consumers.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Each division operates independently with its own leadership
              team, while benefiting from shared infrastructure, capital, and the
              collective expertise of the ASG network.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-red-500 font-bold hover:text-red-600 transition-colors group"
            >
              Learn Our Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                <div className="text-3xl font-heading font-extrabold text-navy-700">2026</div>
                <p className="text-gray-500 text-sm mt-1">Year Founded</p>
              </div>
              <div className="bg-red-500 rounded-2xl p-6 shadow-lg card-hover">
                <div className="text-3xl font-heading font-extrabold text-white">9</div>
                <p className="text-red-100 text-sm mt-1">Divisions</p>
              </div>
            </div>
            <div className="space-y-4 mt-8">
              <div className="bg-navy-700 rounded-2xl p-6 shadow-lg card-hover">
                <div className="text-3xl font-heading font-extrabold text-white">50</div>
                <p className="text-gray-300 text-sm mt-1">States Covered</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                <div className="text-3xl font-heading font-extrabold text-red-500">∞</div>
                <p className="text-gray-500 text-sm mt-1">Growth Potential</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Subsidiaries Grid ── */
function SubsidiaryGrid() {
  const s = useInView();
  const featured = subsidiaries;
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={s.ref}
          className={`text-center mb-16 anim-hidden ${s.isVisible ? 'anim-visible' : ''}`}
        >
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy-700 mt-3">
            Our Family of Brands
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Nine specialized brands, one unified vision: delivering
            extraordinary service to Americans everywhere.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((sub, i) => {
            const Icon = sub.icon;
            if (i >= 4) {
              return (
                <div key={sub.id} className="relative bg-white rounded-2xl border border-gray-100 p-8 overflow-hidden" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="select-none pointer-events-none space-y-3">
                    <div className="h-10 w-28 bg-gray-200 rounded-lg" />
                    <div className="h-5 w-2/3 bg-gray-200 rounded" />
                    <div className="h-3 w-full bg-gray-100 rounded" />
                    <div className="h-3 w-5/6 bg-gray-100 rounded" />
                    <div className="h-3 w-4/6 bg-gray-100 rounded" />
                  </div>
                  <div className="absolute inset-0 backdrop-blur-[3px] bg-white/75 rounded-2xl flex flex-col items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                    </div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Coming Soon</p>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={sub.id}
                to="/companies"
                className={`group bg-white rounded-2xl border border-gray-100 p-8 card-hover anim-hidden ${
                  s.isVisible ? 'anim-visible' : ''
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {sub.image
                  ? <img src={sub.image} alt={sub.name} className="h-16 w-auto object-contain mb-5" />
                  : (
                    <div className="mb-5 px-4 py-2.5 br-4 border border-dashed border-gray-300 block w-full">
                      <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                        {sub.status === 'launching-2026' ? 'Launching — Not Yet Decided' : 'Yet TBD'}
                      </span>
                    </div>
                  )}
                <h3 className="text-xl font-heading font-bold text-navy-700 group-hover:text-red-500 transition-colors">
                  {sub.name}
                </h3>
                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {sub.tagline}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium" style={{ color: sub.color }}>
                  {sub.status === 'active' ? (
                    <>
                      <span className="w-2 h-2 rounded-full bg-current" />
                      Active
                    </>
                  ) : (
                    <>
                      <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                      {sub.status === 'launching-2026' ? 'Launching 2026' : 'Launching 2027'}
                    </>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/companies"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-700 text-white font-bold br-5 hover:bg-navy-800 transition-colors shadow-lg"
          >
            View All 9 Divisions
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Why Choose Us ── */
function WhyChooseUs() {
  const s = useInView();
  const features = [
    {
      icon: Shield,
      title: 'Trusted & Transparent',
      desc: 'Every division operates with full transparency, ethical governance, and a commitment to exceeding customer expectations.',
      stat: '100%',
      statLabel: 'Compliance Rate',
    },
    {
      icon: TrendingUp,
      title: 'Growth-Driven',
      desc: 'We invest in scalable businesses with long-term potential, backed by data-driven strategies and operational excellence.',
      stat: '3x',
      statLabel: 'Avg. Growth Rate',
    },
    {
      icon: Users,
      title: 'People First',
      desc: 'Our growing team is the foundation of our success. We invest in talent, culture, and continuous development.',
      stat: '96%',
      statLabel: 'Employee Retention',
    },
    {
      icon: Globe,
      title: 'Nationwide Reach',
      desc: 'From coast to coast, ASG divisions serve customers in all 50 states through integrated physical and digital channels.',
      stat: '50',
      statLabel: 'States Covered',
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={s.ref}
          className={`mb-20 anim-hidden ${s.isVisible ? 'anim-visible' : ''}`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[2px] bg-red-500" />
            <span className="text-red-500 font-semibold text-sm uppercase tracking-widest">
              Why ASG
            </span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight">
              Why America
              <br />
              <span className="text-red-500">Trusts Us</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed lg:text-right">
              We build companies that last. Every decision is guided by
              integrity, innovation, and an unwavering focus on the people we
              serve.
            </p>
          </div>
        </div>

        {/* Feature cards — 2x2 grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {features.map(({ icon: Icon, title, desc, stat, statLabel }, i) => (
            <div
              key={i}
              className={`group relative bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 lg:p-10 hover:bg-white/[0.06] transition-all duration-300 anim-hidden ${
                s.isVisible ? 'anim-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 br-5 bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-red-500" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-heading font-extrabold text-white">{stat}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{statLabel}</div>
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-red-500/0 via-red-500/50 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why ASG ── */
function WhyASG() {
  const s = useInView();
  const pillars = [
    {
      icon: Shield,
      color: '#1B2A4A',
      title: 'Proven Reliability',
      body: 'Every ASG subsidiary is built on rigorous operational standards — delivering consistent results across industries, every single day.',
    },
    {
      icon: TrendingUp,
      color: '#E53E3E',
      title: 'Scalable Growth',
      body: 'Our shared infrastructure lets each company scale faster than competitors, from local markets to a full 50-state footprint.',
    },
    {
      icon: Globe,
      color: '#2F855A',
      title: 'Nationwide Reach',
      body: 'With operations spanning all 50 states, ASG connects businesses and consumers across every corner of America.',
    },
    {
      icon: Users,
      color: '#D69E2E',
      title: 'Expert Teams',
      body: 'Hundreds of industry specialists work across our portfolio — bringing deep domain knowledge and a culture of excellence.',
    },
    {
      icon: Star,
      color: '#6B46C1',
      title: 'Diverse Portfolio',
      body: 'Nine companies. One holding group. We reduce risk through diversification while maximizing opportunity across booming sectors.',
    },
    {
      icon: ArrowUpRight,
      color: '#2B6CB0',
      title: 'Built to Last',
      body: 'We invest in long-term value — not short-term gains. Our subsidiaries are built to lead their industries for decades to come.',
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={s.ref}
          className={`flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6 anim-hidden ${s.isVisible ? 'anim-visible' : ''}`}
        >
          <div>
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
              Why Choose ASG
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy-700 mt-3 leading-tight">
              The ASG<br />Advantage
            </h2>
          </div>
          <p className="text-gray-500 text-lg max-w-md lg:text-right leading-relaxed">
            What sets American Service Group apart from every other holding company in America.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map(({ icon: Icon, color, title, body }, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 anim-hidden ${
                s.isVisible ? 'anim-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: color }}
              />
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ background: `${color}12` }}
              >
                <Icon className="w-7 h-7" style={{ color }} />
              </div>
              <h3 className="text-lg font-heading font-bold text-navy-700 mb-3 group-hover:text-red-500 transition-colors">
                {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
              <div
                className="mt-6 w-8 h-0.5 rounded-full"
                style={{ background: `${color}60` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function Home() {
  return (
    <>
      <Hero />
      <VisionBanner />
      <AboutPreview />
      <SubsidiaryGrid />
      <WhyChooseUs />
      <WhyASG />
    </>
  );
}
