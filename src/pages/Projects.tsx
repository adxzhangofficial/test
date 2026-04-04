import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import { projects } from '../data/projects';
import { subsidiaries } from '../data/subsidiaries';
import { useInView } from '../hooks/useInView';
import HeroCanvas from '../components/HeroCanvas';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-black overflow-hidden">
      <HeroCanvas />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white">
          Our Projects
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Real results from real work. Explore the initiatives driving growth
          across the ASG family.
        </p>
      </div>
    </section>
  );
}

export default function Projects() {
  const [active, setActive] = useState('All');
  const s = useInView();

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero />
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div
            ref={s.ref}
            className={`flex flex-wrap justify-center gap-3 mb-14 anim-hidden ${
              s.isVisible ? 'anim-visible' : ''
            }`}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  active === cat
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((project, i) => {
              const sub = subsidiaries.find((s) => s.id === project.subsidiaryId);
              return (
                <Link
                  key={project.slug}
                  to={`/projects/${project.slug}`}
                  className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover anim-hidden ${
                    s.isVisible ? 'anim-visible' : ''
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Image area */}
                  <div
                    className="h-56 relative flex items-end p-6"
                    style={{ background: project.image }}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                        <Calendar className="w-3 h-3" />
                        {project.year}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-3">
                      {sub && (
                        <span
                          className="text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{
                            background: `${sub.color}15`,
                            color: sub.color,
                          }}
                        >
                          {sub.shortName}
                        </span>
                      )}
                      <span className="text-xs text-gray-400">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-heading font-bold text-navy-700 group-hover:text-red-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                    {/* Quick stats */}
                    <div className="grid grid-cols-4 gap-3 mt-6 pt-6 border-t border-gray-100">
                      {project.stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                          <div className="text-sm font-heading font-bold text-navy-700">
                            {stat.value}
                          </div>
                          <div className="text-[10px] text-gray-400 mt-0.5 leading-tight">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-red-500 group-hover:text-red-600">
                      View Case Study
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
