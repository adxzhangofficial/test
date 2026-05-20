import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, AlertCircle, X } from 'lucide-react';
import { subsidiaries } from '../data/subsidiaries';
import { useInView } from '../hooks/useInView';
import HeroCanvas from '../components/HeroCanvas';

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 3500);
    return () => clearTimeout(t);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in">
      <div className="flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl text-sm font-semibold bg-red-500 text-white">
        <AlertCircle className="w-5 h-5 shrink-0" />
        {message}
        <button onClick={onClose} className="ml-2 hover:opacity-70 transition-opacity">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

const filters = ['All', 'Active', 'Launching 2026', 'TBD'];

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-black overflow-hidden">
      <HeroCanvas />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white">
          Our Divisions
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          Nine specialized brands united by a shared commitment to
          excellence and service.
        </p>
      </div>
    </section>
  );
}

export default function Companies() {
  const [active, setActive] = useState('All');
  const [toast, setToast] = useState<string | null>(null);
  const closeToast = useCallback(() => setToast(null), []);
  const s = useInView();

  const filtered = subsidiaries.filter((sub) => {
    if (active === 'All') return true;
    if (active === 'Active') return sub.status === 'active';
    if (active === 'Launching 2026') return sub.status === 'launching-2026';
    if (active === 'TBD') return sub.status === 'tbd';
    return true;
  });

  return (
    <>
      <PageHero />
      {toast && <Toast message={toast} onClose={closeToast} />}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div
            ref={s.ref}
            className={`flex flex-wrap justify-center gap-3 mb-14 anim-hidden ${
              s.isVisible ? 'anim-visible' : ''
            }`}
          >
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 br-4 text-sm font-semibold transition-all ${
                  active === f
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((sub, i) => {
              const Icon = sub.icon;
              if (sub.id !== 'asm') {
                return (
                  <div key={sub.id} className="relative bg-white br-4 border border-gray-100 overflow-hidden" style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className="h-2 rounded-tl-2xl rounded-tr-2xl" style={{ background: i % 2 === 0 ? '#c11c2e' : '#083cb8' }} />
                    <div className="p-8 select-none pointer-events-none space-y-4">
                      <div className="h-12 w-32 bg-gray-200 rounded-lg" />
                      <div className="h-5 w-2/3 bg-gray-200 rounded" />
                      <div className="h-3 w-full bg-gray-100 rounded" />
                      <div className="h-3 w-5/6 bg-gray-100 rounded" />
                      <div className="h-3 w-4/6 bg-gray-100 rounded" />
                      <div className="h-8 w-24 bg-gray-100 rounded mt-2" />
                    </div>
                    <div className="absolute inset-0 backdrop-blur-[3px] bg-white/75 flex flex-col items-center justify-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                      </div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Coming Soon</p>
                    </div>
                  </div>
                );
              }
              return (
                <div
                  key={sub.id}
                  className={`group b-tl bg-white br-4 border border-gray-100 overflow-hidden card-hover anim-scale ${
                    s.isVisible ? 'anim-visible' : ''
                  }`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  {/* Color band */}
                  <div
                    className="h-2 rounded-tl-2xl rounded-tr-2xl"
                    style={{ background: i % 2 === 0 ? '#c11c2e' : '#083cb8' }}
                  />
                  <div className="p-8">
                    <div className="mb-5">
                      {sub.image
                        ? <img src={sub.image} alt={sub.name} style={{ height: '4rem', width: 'auto' }} className="object-contain" />
                        : (
                          <div className="px-4 py-2.5 br-4 border border-dashed border-gray-300" style={{ width: '30%' }}>
                            <span className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                              {sub.status === 'launching-2026' ? 'Launching — Not Yet Decided' : 'Yet TBD'}
                            </span>
                          </div>
                        )}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-navy-700 group-hover:text-red-500 transition-colors">
                      {sub.name}
                    </h3>
                    <p className="text-sm text-gray-400 font-medium mt-1">
                      {sub.industry} — Est. {sub.founded}
                    </p>
                    <p className="text-gray-500 text-sm mt-4 leading-relaxed line-clamp-3">
                      {sub.description}
                    </p>
                    {/* Highlights */}
                    <div className="mt-6 space-y-2">
                      {sub.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          {h}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center gap-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 br-4 text-xs font-semibold ${
                          sub.status === 'active'
                            ? 'bg-emerald-50 text-emerald-600'
                            : sub.status === 'launching-2026'
                            ? 'bg-amber-50 text-amber-600'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 br-4 ${
                            sub.status === 'active'
                              ? 'bg-emerald-500'
                              : sub.status === 'launching-2026'
                              ? 'bg-amber-500 animate-pulse'
                              : 'bg-gray-400'
                          }`}
                        />
                        {sub.status === 'active'
                          ? 'Active'
                          : sub.status === 'launching-2026'
                          ? '2026'
                          : 'TBD'}
                      </span>
                      {sub.url ? (
                        <a
                          href={sub.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                          style={{ color: sub.color }}
                        >
                          Visit Website <ArrowUpRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <button
                          onClick={() => setToast('Website not added yet — check back soon!')}
                          className="inline-flex items-center gap-1 text-sm font-semibold transition-colors cursor-pointer"
                          style={{ color: sub.color }}
                        >
                          Visit Website <ArrowUpRight className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
