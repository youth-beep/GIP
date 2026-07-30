import { ArrowRight, ChevronDown, MapPin, Shield, Star } from 'lucide-react';
import { openEnrollModal } from '../utils/enrollModal';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gray-900 py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-12">
      {/* Background video */}
      <video
        src="/Hero-GIP-video.webm"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/camp-photo.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-5 sm:mb-7 leading-[0.95] tracking-tight">
          Where Little Ones
          <br />
          <span className="text-primary">Grow & Thrive</span>
        </h1>

        <p className="font-body text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
          A warm, nurturing Jewish preschool for infants and toddlers ages 0–2
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-10 sm:mb-12 max-w-md sm:max-w-none mx-auto">
          <button
            onClick={openEnrollModal}
            className="group btn-gradient-primary text-white px-8 py-4 sm:px-10 sm:py-4 rounded-full font-body font-bold text-base sm:text-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/25 flex items-center justify-center gap-2 min-h-[52px]"
          >
            Enroll My Child
            <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <a
            href="#programs"
            className="border-2 border-white/70 text-white px-8 py-4 sm:px-10 sm:py-4 rounded-full font-body font-bold text-base sm:text-lg hover:border-white hover:bg-white/20 active:scale-[0.98] transition-all duration-300 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-2 min-h-[52px]"
          >
            Explore Our Programs
          </a>
        </div>

        {/* Trust signal badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
          <div className="flex items-center gap-2 bg-black/55 backdrop-blur-sm px-4 py-2 rounded-full ring-1 ring-white/20">
            <Shield size={16} className="flex-shrink-0 text-secondary-green" />
            <span className="font-body font-medium text-xs sm:text-sm text-white/90">Safe & Nurturing</span>
          </div>
          <div className="flex items-center gap-2 bg-black/55 backdrop-blur-sm px-4 py-2 rounded-full ring-1 ring-white/20">
            <Star size={16} className="flex-shrink-0 text-secondary-yellow" />
            <span className="font-body font-medium text-xs sm:text-sm text-white/90">Ages 0-2</span>
          </div>
          <div className="flex items-center gap-2 bg-black/55 backdrop-blur-sm px-4 py-2 rounded-full ring-1 ring-white/20">
            <MapPin size={16} className="flex-shrink-0 text-secondary-pink" />
            <span className="font-body font-medium text-xs sm:text-sm text-white/90">CGI Campus</span>
          </div>
        </div>

        <p className="font-body text-xs sm:text-sm text-white/60 flex items-center justify-center gap-1.5">
          Want a closer look first? Keep scrolling — we'll show you everything
          <ChevronDown size={16} className="motion-safe:animate-bounce flex-shrink-0" />
        </p>
      </div>
    </section>
  );
}
