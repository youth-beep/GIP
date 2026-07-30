import { ClipboardList, ArrowRight, Sparkles, CheckCircle, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import AgePrograms from '../components/AgePrograms';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import { openEnrollModal } from '../utils/enrollModal';

// ─── Hero ─────────────────────────────────────────────────────────────────────

function RegistrationHero() {
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex items-center bg-gradient-to-br from-slate-50 via-red-50/30 to-orange-50/40 px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(243,39,48,0.06), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-primary/[0.07] via-secondary-yellow/[0.04] to-transparent pointer-events-none"
        style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 5% 100%)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-56 h-56 sm:w-80 sm:h-80 bg-primary/[0.08] rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-yellow/[0.08] rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-[8%] w-3 h-3 bg-secondary-yellow/60 rounded-full hidden sm:block animate-float-slow" />
        <div className="absolute top-1/3 right-[10%] w-4 h-4 bg-primary/25 rounded-full hidden sm:block animate-float" />
        <div className="absolute bottom-1/3 right-[22%] w-5 h-5 bg-secondary-blue/30 rounded-full hidden sm:block animate-float-slow" />
      </div>
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative w-full max-w-3xl mx-auto text-center animate-fade-in-up">
        <div className="flex justify-center mb-5 sm:mb-7">
          <span className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary uppercase tracking-widest bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full ring-2 ring-primary/25 shadow-md border border-white/60 min-h-[44px]">
            <ClipboardList size={16} className="flex-shrink-0" />
            Summer 2026 Enrollment
          </span>
        </div>

        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl text-gray-900 mb-5 sm:mb-7 leading-[0.95] tracking-tight">
          Register Your{' '}
          <span className="text-gradient-primary" style={{ textShadow: '0 2px 20px rgba(243,39,48,0.15)' }}>
            Camper
          </span>
        </h1>

        <p className="font-body text-base sm:text-lg lg:text-xl text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          Secure your child's spot at Camp Gan Israel at the Shore for an unforgettable summer of fun, friendship, and Jewish pride.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={openEnrollModal}
            className="group btn-gradient-primary text-white inline-flex items-center gap-2 px-10 py-4 rounded-full font-body font-bold text-base sm:text-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/30 min-h-[52px]"
          >
            <Sparkles size={18} className="opacity-90" />
            Enroll Now
            <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <a
            href="#programs"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-bold text-base sm:text-lg text-gray-700 border-2 border-gray-200 hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-[0.98] transition-all duration-300 min-h-[52px] bg-white/80"
          >
            View Programs
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Why Enroll strip ─────────────────────────────────────────────────────────

const perks = [
  'Ages 0–14 served across 8 programs',
  'Extended care & flexible scheduling',
  'Certified staff & secured campus',
  'Rich Jewish culture & values',
  'Swimming, sports, arts & trips',
  'Scholarships & early bird pricing',
];

function WhyEnroll() {
  return (
    <section className="bg-white border-y border-gray-100 py-12 sm:py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8 sm:mb-10">
          <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest mb-2">Why Gan Izzy</p>
          <h2 className="font-headline text-3xl sm:text-4xl text-gray-900 leading-tight tracking-tight">
            Everything Your Child Needs for an{' '}
            <span className="text-primary">Incredible Summer</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {perks.map((perk) => (
            <div key={perk} className="flex items-center gap-3 bg-gray-50 rounded-2xl px-5 py-4 ring-1 ring-gray-100">
              <CheckCircle size={18} className="flex-shrink-0 text-secondary-green" />
              <span className="font-body text-sm sm:text-base text-gray-700 font-medium">{perk}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA banner between sections ──────────────────────────────────────────────

function MidCTA() {
  return (
    <section className="bg-gradient-to-r from-primary via-primary-dark to-primary py-12 sm:py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div>
          <p className="font-body font-bold text-xs text-white/60 uppercase tracking-widest mb-1">Ready to secure a spot?</p>
          <h3 className="font-headline text-2xl sm:text-3xl text-white leading-tight">
            Enrollment is open — spots fill fast!
          </h3>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
          <button
            onClick={openEnrollModal}
            className="group bg-white text-primary px-8 py-3.5 rounded-full font-body font-bold text-sm sm:text-base hover:bg-gray-50 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-black/10 flex items-center justify-center gap-2 min-h-[48px]"
          >
            <Sparkles size={16} />
            Enroll Now
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <a
            href="tel:6092013521"
            className="border-2 border-white/40 text-white px-6 py-3.5 rounded-full font-body font-bold text-sm sm:text-base hover:bg-white/10 hover:border-white/60 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
          >
            <Phone size={15} />
            609-201-3521
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Contact strip ────────────────────────────────────────────────────────────

function ContactStrip() {
  return (
    <section className="bg-gray-50 border-t border-gray-100 py-10 sm:py-14 px-4 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-body font-bold text-xs text-primary uppercase tracking-widest mb-3">Have Questions?</p>
        <h3 className="font-headline text-2xl sm:text-3xl text-gray-900 mb-2 leading-tight">We're here to help</h3>
        <p className="font-body text-sm sm:text-base text-gray-500 mb-7 leading-relaxed">
          Our team is happy to walk you through programs, pricing, and anything else you need to make the right choice for your family.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="tel:6092013521"
            className="flex items-center gap-2 font-body font-semibold text-sm sm:text-base text-gray-700 bg-white border border-gray-200 hover:border-primary hover:text-primary hover:bg-primary/5 px-6 py-3 rounded-full transition-all duration-200 shadow-sm min-h-[44px]"
          >
            <Phone size={15} />
            609-201-3521
          </a>
          <a
            href="mailto:mushky@chabadac.com"
            className="flex items-center gap-2 font-body font-semibold text-sm sm:text-base text-gray-700 bg-white border border-gray-200 hover:border-primary hover:text-primary hover:bg-primary/5 px-6 py-3 rounded-full transition-all duration-200 shadow-sm min-h-[44px]"
          >
            <Mail size={15} />
            mushky@chabadac.com
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Registration() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        <RegistrationHero />
        <WhyEnroll />
        <div id="programs">
          <AgePrograms />
        </div>
        <MidCTA />
        <Reviews />
        <ContactStrip />
      </main>
      <Footer />
    </div>
  );
}
