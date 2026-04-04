import { useInView } from '../hooks/useInView';
import HeroCanvas from '../components/HeroCanvas';

function PageHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-black overflow-hidden">
      <HeroCanvas />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white">
          Newsroom
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          The latest news, press releases, and milestones from across the ASG
          family of brands.
        </p>
      </div>
    </section>
  );
}

export default function Newsroom() {
  const s = useInView();

  return (
    <>
      <PageHero />
      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={s.ref}
            className={`text-center anim-hidden ${s.isVisible ? 'anim-visible' : ''}`}
          >
            <div className="bg-white rounded-2xl border border-gray-100 p-12 md:p-16">
              <div className="w-16 h-16 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-700">
                Nothing Posted Yet
              </h2>
              <p className="mt-4 text-gray-500 text-lg max-w-md mx-auto leading-relaxed">
                We're just getting started. News, press releases, and company updates will appear here soon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
