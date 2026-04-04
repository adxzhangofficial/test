import { Linkedin, Mail } from 'lucide-react';
import { teamMembers } from '../data/team';
import { useInView } from '../hooks/useInView';
import HeroCanvas from '../components/HeroCanvas';

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-black overflow-hidden">
      <HeroCanvas />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white">
          Leadership Team
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Meet the experienced leaders driving American Service Group's vision
          across nine industries.
        </p>
      </div>
    </section>
  );
}

function ExecutiveTeam() {
  const s = useInView();
  const executives = teamMembers.filter((m) => m.featured);

  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={s.ref}
          className={`text-center mb-16 anim-hidden ${s.isVisible ? 'anim-visible' : ''}`}
        >
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
            Executive Team
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-700 mt-3">
            C-Suite Leadership
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {executives.map((member, i) => (
            <div
              key={member.id}
              className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover anim-hidden ${
                s.isVisible ? 'anim-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Avatar */}
              <div
                className="h-64 flex items-center justify-center relative"
                style={{
                  background: `linear-gradient(135deg, ${member.color}20 0%, ${member.color}40 100%)`,
                }}
              >
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center text-4xl font-heading font-extrabold text-white shadow-xl"
                  style={{ background: member.color }}
                >
                  {member.initials}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-navy-700/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-heading font-bold text-navy-700">
                  {member.name}
                </h3>
                <p className="text-red-500 text-sm font-semibold mt-1">
                  {member.title}
                </p>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipTeam() {
  const s = useInView();
  const leaders = teamMembers.filter((m) => !m.featured);

  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={s.ref}
          className={`text-center mb-16 anim-hidden ${s.isVisible ? 'anim-visible' : ''}`}
        >
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">
            Senior Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-700 mt-3">
            Vice Presidents & Counsel
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((member, i) => (
            <div
              key={member.id}
              className={`group bg-white rounded-2xl border border-gray-100 p-8 text-center card-hover anim-hidden ${
                s.isVisible ? 'anim-visible' : ''
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-2xl font-heading font-extrabold text-white shadow-lg"
                style={{ background: member.color }}
              >
                {member.initials}
              </div>
              <h3 className="text-lg font-heading font-bold text-navy-700 mt-5">
                {member.name}
              </h3>
              <p className="text-red-500 text-sm font-semibold mt-1">
                {member.title}
              </p>
              <p className="text-gray-400 text-xs mt-0.5">{member.department}</p>
              <p className="text-gray-500 text-sm mt-4 leading-relaxed line-clamp-4">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JoinCTA() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-navy-700">
          Want to Join Our Team?
        </h2>
        <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
          We're always looking for talented, driven individuals who share our
          passion for service and innovation.
        </p>
        <a
          href="/careers"
          className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-red-500 text-white font-bold rounded-xl hover:bg-red-600 transition-colors shadow-lg shadow-red-500/25 text-lg"
        >
          View Open Positions
        </a>
      </div>
    </section>
  );
}

export default function Team() {
  return (
    <>
      <PageHero />
      <ExecutiveTeam />
      <LeadershipTeam />
      <JoinCTA />
    </>
  );
}
