import { ArrowRight, Mail, Calendar } from 'lucide-react';
import { openEnrollModal } from '../utils/enrollModal';
import { navigate } from '../utils/navigate';

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-12 bg-gradient-to-br from-primary via-primary-dark to-primary">
      {/* Decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Large organic shape top-right */}
        <div
          className="absolute -top-20 -right-20 w-96 h-96 bg-white/5 rounded-full"
        />
        <div
          className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-white/[0.03] rounded-full"
        />
        {/* Floating accents */}
        <div className="hidden sm:block absolute top-20 left-[15%] w-3 h-3 bg-white/20 rounded-full animate-float" />
        <div className="hidden sm:block absolute bottom-32 right-[20%] w-4 h-4 bg-white/15 rounded-full animate-float-slow" />
        <div className="hidden lg:block absolute top-1/3 right-[10%] w-2 h-2 bg-white/25 rounded-full animate-pulse-soft" />
      </div>

      {/* Dot pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="inline-block font-body font-bold text-xs sm:text-sm text-white/80 uppercase tracking-widest mb-4 bg-white/10 px-4 py-1.5 rounded-full ring-1 ring-white/20">
          Ready to Join?
        </p>

        <h2 className="font-headline text-4xl sm:text-5xl lg:text-7xl text-white mb-5 sm:mb-7 leading-[0.95] tracking-tight">
          Your little one's
          <br />
          <span className="text-white/90">journey begins here</span>
        </h2>

        <p className="font-body text-base sm:text-lg lg:text-xl text-white/70 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
          Where timeless Jewish values and tender loving care grow side by side.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-md sm:max-w-none mx-auto">
          <button onClick={openEnrollModal} className="group bg-white text-primary px-8 py-4 sm:px-10 sm:py-5 rounded-full font-body font-bold text-base sm:text-lg hover:bg-gray-50 hover:shadow-2xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-black/10 flex items-center justify-center gap-3 min-h-[52px]">
            Enroll My Child
            <ArrowRight size={22} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>

          <button onClick={() => navigate('/contact')} className="group border-2 border-white/40 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-body font-bold text-base sm:text-lg hover:bg-white/10 hover:border-white/60 active:scale-[0.98] transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3 min-h-[52px]">
            <Calendar size={20} />
            Schedule a Tour
          </button>

          <a href="mailto:mushky@chabadac.com" className="border-2 border-white/40 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-full font-body font-bold text-base sm:text-lg hover:bg-white/10 hover:border-white/60 active:scale-[0.98] transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3 min-h-[52px]">
            <Mail size={20} />
            Email Us
          </a>
        </div>

        <p className="font-body text-xs sm:text-sm text-white/50 mt-8 sm:mt-10">
          Questions? Call us at 609-201-3521 or email mushky@chabadac.com
        </p>
      </div>
    </section>
  );
}
