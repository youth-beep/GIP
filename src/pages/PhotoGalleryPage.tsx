import Navigation from '../components/Navigation';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function PhotoGalleryPage() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        <section className="relative overflow-hidden min-h-[40vh] flex items-center bg-gradient-to-br from-slate-50 via-pink-50/30 to-orange-50/40 px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(243,39,48,0.06), transparent)' }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" aria-hidden="true" />
          <div className="relative w-full max-w-3xl mx-auto text-center">
            <p className="inline-block font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full ring-1 ring-primary/10 mb-4 sm:mb-6">
              Summer Memories
            </p>
            <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 mb-5 sm:mb-7 leading-[0.95] tracking-tight">
              Photo{' '}
              <span className="text-primary">Gallery</span>
            </h1>
            <p className="font-body text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              A glimpse into the magic of every summer at Gan Izzy.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="elfsight-app-b3818165-a718-4a26-90b1-201628d17495" data-elfsight-app-lazy></div>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
