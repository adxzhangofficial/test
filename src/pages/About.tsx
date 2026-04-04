import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Heart,
  Award,
  Lightbulb,
  Handshake,
  ArrowRight,
} from 'lucide-react';
import { useInView } from '../hooks/useInView';
import HeroCanvas from '../components/HeroCanvas';

/* ── Page Hero (reused on all inner pages) ── */
function PageHero({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-black overflow-hidden">
      <HeroCanvas />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white">
          {title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

/* ── Timeline ── */
function Timeline() {
  const s = useInView();
  const events = [
    { year: '2026', title: 'ASG Founded', desc: 'American Service Group is established alongside its flagship brand, American Service Marketplace, launching as a premium pet e-commerce platform.' },
    { year: '2026', title: 'Service Animals Division', desc: 'American Service Animals launches nationwide, creating the gold standard for service animal training and certification programs.' },
    { year: '2026', title: 'Rapid Expansion', desc: 'Three new divisions launch: American Service Logistics, American Service Properties, and the beginnings of our tech division.' },
    { year: '2027', title: 'Innovation Year', desc: 'ASG Health, ASG Tech, and ASG Finance go live. The group reaches 9 divisions and establishes a venture fund.' },
    { year: '2028+', title: 'Future Vision', desc: 'American Service Auto and American Service Home prepare for launch. ASG targets $500M in combined revenue across all divisions.' },
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={s.ref}
          className={`text-center mb-16 anim-hidden ${s.isVisible ? 'anim-visible' : ''}`}
        >
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-700 mt-3">
            The ASG Timeline
          </h2>
        </div>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
          <div className="space-y-12">
            {events.map((ev, i) => (
              <div
                key={i}
                className={`relative flex items-start gap-8 md:gap-12 anim-hidden ${
                  s.isVisible ? 'anim-visible' : ''
                } ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-white shadow -translate-x-1/2 mt-1.5 z-10" />
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:text-right md:pr-4' : 'md:text-left md:pl-4'}`}>
                  <span className="text-red-500 font-heading font-extrabold text-lg">{ev.year}</span>
                  <h3 className="text-xl font-heading font-bold text-navy-700 mt-1">{ev.title}</h3>
                  <p className="text-gray-500 mt-2 leading-relaxed">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Vision / Mission / Values ── */
function VisionMission() {
  const s = useInView();
  const cards = [
    {
      icon: Eye,
      title: 'Our Vision',
      text: "To be America's most trusted and diversified service conglomerate — a family of brands that raises the bar in every industry we enter.",
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Target,
      title: 'Our Mission',
      text: 'To build, operate, and invest in service-driven businesses that solve real problems, create lasting value, and empower American communities.',
      color: 'bg-red-50 text-red-500',
    },
    {
      icon: Heart,
      title: 'Our Purpose',
      text: 'To prove that brands built on integrity, innovation, and genuine service can outperform — and outlast — everyone else.',
      color: 'bg-emerald-50 text-emerald-600',
    },
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={s.ref}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map(({ icon: Icon, title, text, color }, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border border-gray-100 p-10 text-center card-hover anim-hidden ${
                s.isVisible ? 'anim-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 ${color}`}>
                <Icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-navy-700">{title}</h3>
              <p className="text-gray-500 mt-4 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Core Values ── */
function CoreValues() {
  const s = useInView();
  const values = [
    { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards in everything we do, from product quality to customer interactions.' },
    { icon: Lightbulb, title: 'Innovation', desc: 'We embrace new technologies and creative solutions to stay ahead of industry trends and deliver better outcomes.' },
    { icon: Handshake, title: 'Integrity', desc: 'We operate with complete transparency, ethical governance, and an unwavering commitment to doing the right thing.' },
    { icon: Heart, title: 'Service', desc: 'Service is in our name and our DNA. We exist to serve our customers, employees, and communities with distinction.' },
  ];
  return (
    <section className="py-24 lg:py-32 bg-black relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={s.ref}
          className={`text-center mb-16 anim-hidden ${s.isVisible ? 'anim-visible' : ''}`}
        >
          <span className="text-red-400 font-semibold text-sm uppercase tracking-wider">
            What We Stand For
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white mt-3">
            Core Values
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={i}
              className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center card-hover anim-hidden ${
                s.isVisible ? 'anim-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-red-500/20 flex items-center justify-center mb-5">
                <Icon className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-lg font-heading font-bold text-white">{title}</h3>
              <p className="text-gray-300 text-sm mt-3 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Leadership Philosophy ── */
function LeadershipPhilosophy() {
  const s = useInView();
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={s.ref}
          className={`grid lg:grid-cols-2 gap-16 items-center anim-hidden ${
            s.isVisible ? 'anim-visible' : ''
          }`}
        >
          <div>
            <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
              Leadership Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-700 mt-3 leading-tight">
              Empowering Leaders <br />at Every Level
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed text-lg">
              At ASG, we believe the best organizations are led by empowered teams, not
              directive hierarchies. Each division has its own CEO, leadership
              team, and P&L — operating with the agility of a startup and the
              resources of a conglomerate.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              The parent company provides strategic direction, shared
              infrastructure, capital allocation, and cross-division synergies.
              The result is a portfolio of brands that are simultaneously
              independent and interconnected.
            </p>
            <Link
              to="/team"
              className="inline-flex items-center gap-2 mt-8 text-red-500 font-bold hover:text-red-600 transition-colors group"
            >
              Meet Our Leaders
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="bg-gradient-to-br from-navy-700 to-navy-900 rounded-3xl p-10 lg:p-14 text-white">
            <blockquote className="text-xl lg:text-2xl font-heading italic leading-relaxed text-gray-200">
              "Our goal isn't to build one great company! it's to build a
              platform that helps dozens of great brands thrive."
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-heading font-bold text-lg">
                
              </div>
              <div>
                <div className="font-heading font-bold">SOHAIL A.</div>
                <div className="text-gray-400 text-sm">Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Page ── */
export default function About() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="The story behind America's most ambitious service conglomerate."
      />
      <VisionMission />
      <Timeline />
      <CoreValues />
      <LeadershipPhilosophy />
    </>
  );
}
