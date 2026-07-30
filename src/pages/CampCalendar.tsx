import { Calendar, ArrowRight, Download, ZoomIn } from 'lucide-react';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

const calendars = [
  {
    title: 'Mini Gan Izzy Calendar 2026-2027',
    subtitle: 'Ages 0 – 4',
    image: '/2026_Mini_Gan_Izzy_Calendar.png',
    download: 'https://drive.google.com/file/d/1X89CU3qCjmsZdEJuUlcVFe5mMXiMWPid/view?usp=sharing',
    accent: 'bg-secondary-yellow/8',
    ring: 'ring-secondary-yellow/30',
    badge: 'bg-secondary-yellow/20 text-amber-700 ring-secondary-yellow/30',
    btnColor: 'bg-amber-500 hover:bg-amber-500/90 shadow-amber-400/20',
  },
  {
    title: 'Gan Izzy Calendar 2026-2027',
    subtitle: 'Ages 5 – 13',
    image: '/2026_Gan_Izzy_Calendar.png',
    download: 'https://drive.google.com/file/d/1X89CU3qCjmsZdEJuUlcVFe5mMXiMWPid/view?usp=sharing',
    accent: 'bg-secondary-blue/8',
    ring: 'ring-secondary-blue/20',
    badge: 'bg-secondary-blue/10 text-secondary-blue ring-secondary-blue/20',
    btnColor: 'bg-secondary-blue hover:bg-secondary-blue/90 shadow-secondary-blue/20',
  },
];

function LightboxModal({ src, title, onClose }: { src: string; title: string; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-3">
          <span className="font-body font-bold text-white text-sm">{title}</span>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white text-2xl leading-none transition-colors"
            aria-label="Close"
          >
            ×
          </button>
        </div>
        <img
          src={src}
          alt={title}
          className="w-full h-full object-contain rounded-2xl shadow-2xl max-h-[80vh]"
        />
      </div>
    </div>
  );
}

function CalendarHero() {
  return (
    <section className="relative overflow-hidden min-h-[42vh] flex items-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-sky-50/50 px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(59,176,255,0.07), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-secondary-blue/10 via-primary/[0.02] to-transparent pointer-events-none"
        style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 5% 100%)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-16 -right-16 w-64 h-64 bg-secondary-blue/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-secondary-yellow/[0.08] rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-[8%] w-3 h-3 bg-secondary-blue/50 rounded-full hidden sm:block animate-float-slow" />
        <div className="absolute top-1/4 right-[12%] w-4 h-4 bg-secondary-yellow/50 rounded-full hidden sm:block animate-float" />
        <div className="absolute bottom-1/3 right-[20%] w-3 h-3 bg-secondary-green/40 rounded-full hidden sm:block animate-float-slow" />
      </div>

      <div className="relative w-full max-w-3xl mx-auto text-center animate-fade-in-up">
        <div className="flex justify-center mb-5 sm:mb-7">
          <span className="inline-flex items-center gap-2 font-body font-bold text-sm text-secondary-blue uppercase tracking-widest bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full ring-2 ring-secondary-blue/25 shadow-md border border-white/60 min-h-[44px]">
            <Calendar size={16} className="flex-shrink-0" />
            Summer 2026-2027
          </span>
        </div>

        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 mb-5 sm:mb-7 leading-[0.95] tracking-tight">
          Camp{' '}
          <span className="text-secondary-blue" style={{ textShadow: '0 2px 20px rgba(59,176,255,0.2)' }}>
            Calendar
          </span>
        </h1>

        <p className="font-body text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-xl mx-auto leading-relaxed px-2">
          Stay on top of every trip, theme day, and special event all summer long.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#calendars"
            className="group btn-gradient-primary text-white inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-bold text-base hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/25 min-h-[48px]"
          >
            View Calendars
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="https://drive.google.com/file/d/1X89CU3qCjmsZdEJuUlcVFe5mMXiMWPid/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-body font-bold text-sm text-gray-600 bg-white ring-1 ring-gray-200 hover:ring-gray-300 hover:text-gray-900 hover:shadow-sm active:scale-[0.98] transition-all duration-200 min-h-[48px]"
          >
            <Download size={16} className="text-gray-400 group-hover:text-gray-600 transition-colors" />
            Download
          </a>
        </div>
      </div>
    </section>
  );
}

function CalendarImages() {
  const [lightbox, setLightbox] = useState<{ src: string; title: string } | null>(null);

  return (
    <section id="calendars" className="bg-white px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
            <p className="font-body font-bold text-xs sm:text-sm text-secondary-blue uppercase tracking-widest whitespace-nowrap">
              2026-2027 Schedule
            </p>
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight tracking-tight">
            Full Summer <span className="text-secondary-blue">Schedules</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mt-4">
            June 29 – August 21, 2026-2027. Click any calendar to view it full size.
          </p>
        </div>

        <div className="flex flex-col gap-12 lg:gap-16 max-w-4xl mx-auto">
          {calendars.map((cal) => (
            <div
              key={cal.title}
              className={`group relative flex flex-col ${cal.accent} ring-1 ${cal.ring} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
            >
              {/* Card header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100/80">
                <div>
                  <h3 className="font-headline text-xl sm:text-2xl text-gray-900 leading-snug">{cal.title}</h3>
                  <span className={`inline-flex items-center mt-1 font-body font-semibold text-xs px-3 py-1 rounded-full ring-1 ${cal.badge}`}>
                    {cal.subtitle}
                  </span>
                </div>
                <a
                  href={cal.download}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full font-body font-bold text-xs text-white ${cal.btnColor} shadow-md hover:scale-[1.05] active:scale-[0.97] transition-all duration-200`}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download size={13} />
                  Download
                </a>
              </div>

              {/* Image */}
              <button
                className="relative w-full overflow-hidden cursor-zoom-in bg-white"
                onClick={() => setLightbox({ src: cal.image, title: cal.title })}
                aria-label={`View ${cal.title} full size`}
              >
                <img
                  src={cal.image}
                  alt={cal.title}
                  className="w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                {/* Zoom overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors duration-300">
                  <span className="flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-700 font-body font-bold text-sm px-4 py-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <ZoomIn size={15} />
                    View Full Size
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <LightboxModal src={lightbox.src} title={lightbox.title} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}

export default function CampCalendar() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        <CalendarHero />
        <CalendarImages />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
