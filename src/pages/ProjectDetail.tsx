import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';
import { subsidiaries } from '../data/subsidiaries';
import { useInView } from '../hooks/useInView';

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-navy-700">
            Project Not Found
          </h1>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mt-6 text-red-500 font-bold"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const sub = subsidiaries.find((s) => s.id === project.subsidiaryId);
  const related = projects
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);
  const s1 = useInView();
  const s2 = useInView();

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" style={{ background: project.image }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {sub && (
              <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold text-white">
                {sub.name}
              </span>
            )}
            <span className="flex items-center gap-1.5 text-white/80 text-sm">
              <Calendar className="w-4 h-4" />
              {project.year}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white leading-tight">
            {project.title}
          </h1>
          <p className="mt-6 text-lg text-white/90 max-w-2xl leading-relaxed">
            {project.summary}
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-8 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl shadow-navy-700/10 p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {project.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-heading font-extrabold text-navy-700">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={s1.ref} className={`space-y-16 anim-hidden ${s1.isVisible ? 'anim-visible' : ''}`}>
            {/* Challenge */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                  <span className="text-red-500 font-heading font-extrabold">01</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-navy-700">
                  The Challenge
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg pl-[52px]">
                {project.challenge}
              </p>
            </div>

            {/* Approach */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                  <span className="text-blue-600 font-heading font-extrabold">02</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-navy-700">
                  Our Approach
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg pl-[52px]">
                {project.approach}
              </p>
            </div>

            {/* Results */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center">
                  <span className="text-emerald-600 font-heading font-extrabold">03</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-navy-700">
                  The Results
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg pl-[52px]">
                {project.results}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={s2.ref}
            className={`text-center mb-12 anim-hidden ${s2.isVisible ? 'anim-visible' : ''}`}
          >
            <h2 className="text-3xl font-heading font-extrabold text-navy-700">
              More Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {related.map((rp) => {
              const rSub = subsidiaries.find((s) => s.id === rp.subsidiaryId);
              return (
                <Link
                  key={rp.slug}
                  to={`/projects/${rp.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover"
                >
                  <div
                    className="h-40 relative"
                    style={{ background: rp.image }}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-heading font-bold text-navy-700 group-hover:text-red-500 transition-colors">
                      {rp.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">{rp.summary}</p>
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-red-500">
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
