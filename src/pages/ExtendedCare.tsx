import {
  ArrowRight, Clock, Users, Sun, Moon, Star, Sparkles, Shield, CalendarDays, DollarSign,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Reviews from '../components/Reviews';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import { navigate } from '../utils/navigate';
import { openEnrollModal } from '../utils/enrollModal';

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function ExtendedCareHero() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] flex items-center px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-28">
      <img
        src="/extanded-care.webp"
        alt="Extended Care"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/45 to-black/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" aria-hidden="true" />

      <div className="absolute top-8 left-4 text-3xl sm:text-4xl select-none pointer-events-none opacity-70 sm:top-12 sm:left-10 animate-float" aria-hidden="true">🌅</div>
      <div className="absolute top-10 right-5 text-2xl sm:text-3xl select-none pointer-events-none opacity-60 sm:top-16 sm:right-12 animate-float-slow" aria-hidden="true">🧩</div>
      <div className="absolute bottom-10 right-6 text-3xl sm:text-4xl select-none pointer-events-none opacity-50 sm:bottom-16 sm:right-16 animate-float" aria-hidden="true">📚</div>
      <div className="absolute bottom-12 left-5 text-2xl sm:text-3xl select-none pointer-events-none opacity-50 sm:bottom-20 sm:left-12 animate-float-slow" aria-hidden="true">🎨</div>

      <div className="relative w-full max-w-5xl mx-auto text-center animate-fade-in-up">
        <div className="flex justify-center mb-5 sm:mb-7">
          <span className="inline-flex items-center gap-2 font-body font-bold text-sm text-white uppercase tracking-widest bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full ring-2 ring-white/30 shadow-md border border-white/25 min-h-[44px]">
            <Shield size={16} className="flex-shrink-0" />
            All Camp Ages
          </span>
        </div>

        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-5 sm:mb-7 leading-[0.95] tracking-tight">
          Extended
          <br />
          <span className="text-primary drop-shadow-lg">Care</span>
        </h1>

        <p className="font-body text-base sm:text-lg lg:text-xl text-white/85 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          Flexible hours for busy parents. Safe, supervised, and relaxed fun before and after the main camp day.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-10 sm:mb-14 max-w-sm mx-auto sm:max-w-none">
          <a
            href="#pricing"
            className="group btn-gradient-primary text-white w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-4 rounded-full font-body font-bold text-base sm:text-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/30 flex items-center justify-center gap-2 min-h-[52px]"
          >
            Add Extended Care
            <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href="#pricing"
            className="w-full sm:w-auto border-2 border-white/50 text-white px-8 py-4 sm:px-10 sm:py-4 rounded-full font-body font-bold text-base sm:text-lg hover:border-white hover:bg-white/10 active:scale-[0.98] transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 min-h-[52px]"
          >
            View Pricing
          </a>
        </div>

        <div className="grid grid-cols-1 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 max-w-xs mx-auto sm:max-w-none">
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2.5 sm:px-4 sm:py-2.5 rounded-full shadow-sm ring-1 ring-white/25 border border-white/20 min-h-[44px]">
            <Sun size={15} className="text-white flex-shrink-0" />
            <span className="font-body font-bold text-xs sm:text-sm text-white leading-tight">Morning: 7:30 AM – 9:30 AM</span>
          </div>
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2.5 sm:px-4 sm:py-2.5 rounded-full shadow-sm ring-1 ring-white/25 border border-white/20 min-h-[44px]">
            <Moon size={15} className="text-white flex-shrink-0" />
            <span className="font-body font-bold text-xs sm:text-sm text-white leading-tight">Afternoon: 3:30 PM – 5:30 PM</span>
          </div>
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2.5 sm:px-4 sm:py-2.5 rounded-full shadow-sm ring-1 ring-white/25 border border-white/20 min-h-[44px]">
            <Users size={15} className="text-white flex-shrink-0" />
            <span className="font-body font-bold text-xs sm:text-sm text-white leading-tight">All Camp Ages Welcome</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Fast Facts Bar ────────────────────────────────────────────────────────

function ExtendedCareFastFacts() {
  const facts = [
    {
      icon: Users,
      label: 'Eligible Ages',
      value: 'All Camp Ages',
      accent: 'bg-secondary-green/10',
      iconColor: 'text-secondary-green',
      iconBg: 'bg-secondary-green/15',
      ring: 'ring-secondary-green/20',
    },
    {
      icon: Sun,
      label: 'Morning Care',
      value: '7:30 AM – 9:30 AM',
      accent: 'bg-secondary-yellow/10',
      iconColor: 'text-secondary-yellow',
      iconBg: 'bg-secondary-yellow/15',
      ring: 'ring-secondary-yellow/20',
    },
    {
      icon: Moon,
      label: 'Afternoon Care',
      value: '3:30 PM – 5:30 PM',
      accent: 'bg-secondary-blue/10',
      iconColor: 'text-secondary-blue',
      iconBg: 'bg-secondary-blue/15',
      ring: 'ring-secondary-blue/20',
    },
  ];

  return (
    <section className="border-t border-gray-100 px-4 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-center font-body font-bold text-gray-400 uppercase tracking-widest text-xs mb-6">
          At a Glance
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {facts.map(({ icon: Icon, label, value, accent, iconColor, iconBg, ring }) => (
            <div
              key={label}
              className={`group flex items-center justify-center ${accent} ring-1 ${ring} rounded-2xl px-4 py-5 sm:py-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
            >
              <div className="flex flex-col items-center text-center w-full gap-3">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${iconBg} ring-1 ${ring} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={20} className={iconColor} />
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-body font-bold text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">
                    {label}
                  </p>
                  <p className="font-body font-bold text-sm sm:text-base text-gray-800 leading-tight text-center">
                    {value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. Pricing Cards ────────────────────────────────────────────────────────

const plans = [
  {
    icon: Sun,
    label: 'Mornings Only',
    time: '7:30 AM – 9:30 AM',
    price: '$20',
    unit: '/ day',
    description: 'A gentle start to the day with quiet games and free play before the regular camp schedule begins.',
    accent: 'bg-secondary-yellow/10',
    iconColor: 'text-secondary-yellow',
    iconBg: 'bg-secondary-yellow/15',
    ring: 'ring-secondary-yellow/25',
    priceColor: 'text-gray-900',
    badge: null,
  },
  {
    icon: Moon,
    label: 'Afternoons Only',
    time: '3:30 PM – 5:30 PM',
    price: '$20',
    unit: '/ day',
    description: 'Wind down after a busy camp day with relaxed activities, crafts, and supervision until you get off work.',
    accent: 'bg-secondary-blue/10',
    iconColor: 'text-secondary-blue',
    iconBg: 'bg-secondary-blue/15',
    ring: 'ring-secondary-blue/25',
    priceColor: 'text-gray-900',
    badge: null,
  },
  {
    icon: Sparkles,
    label: 'Full Extended Care',
    time: '7:30 AM – 5:30 PM',
    price: '$35',
    unit: '/ day',
    description: 'Complete coverage from 7:30 AM to 5:30 PM to perfectly accommodate your full workday.',
    accent: 'bg-primary/[0.06]',
    iconColor: 'text-primary',
    iconBg: 'bg-primary/[0.12]',
    ring: 'ring-primary/20',
    priceColor: 'text-primary',
    badge: 'Best Value',
  },
];

function PricingCards() {
  return (
    <section id="pricing" className="border-t border-gray-100 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-28 bg-gradient-to-b from-white via-gray-50/40 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
            <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest whitespace-nowrap">
              Pricing & Options
            </p>
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-5 leading-tight tracking-tight">
            Choose What <span className="text-primary">Works for You</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Pick the plan that fits your schedule. All options include a safe, supervised environment with caring staff.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {plans.map(({ icon: Icon, label, time, price, unit, description, accent, iconColor, iconBg, ring, priceColor, badge }) => (
            <div
              key={label}
              className={`group relative flex flex-col ${accent} ring-1 ${ring} rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden`}
            >
              {badge && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 bg-primary text-white font-body font-bold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm shadow-primary/30">
                    <Star size={10} className="fill-white" />
                    {badge}
                  </span>
                </div>
              )}

              <div className={`w-12 h-12 rounded-2xl ${iconBg} ring-1 ${ring} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200 shadow-sm`}>
                <Icon size={22} className={iconColor} />
              </div>

              <h3 className="font-headline text-xl sm:text-2xl text-gray-900 mb-1.5 leading-tight">
                {label}
              </h3>

              <div className="flex items-center gap-1.5 mb-4">
                <Clock size={13} className="text-gray-400 flex-shrink-0" />
                <span className="font-body text-sm text-gray-500 font-semibold">{time}</span>
              </div>

              <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed mb-6 flex-1">
                {description}
              </p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className={`font-headline text-4xl sm:text-5xl ${priceColor} leading-none`}>{price}</span>
                <span className="font-body text-sm text-gray-400 font-semibold">{unit}</span>
              </div>

              <button
                onClick={openEnrollModal}
                className={`group/btn w-full flex items-center justify-center gap-2 font-body font-bold text-sm py-3.5 rounded-full transition-all duration-200 min-h-[48px] ${
                  badge
                    ? 'btn-gradient-primary text-white shadow-md shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]'
                    : 'border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary hover:bg-primary/5 bg-white/70'
                }`}
              >
                Enroll Now
                <ArrowRight size={15} className="transition-transform duration-200 group-hover/btn:translate-x-0.5" />
              </button>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-sm text-gray-400 mt-6 sm:mt-8">
          Extended care can be added to any camp program. Contact us to customize your schedule.
        </p>
      </div>
    </section>
  );
}

// ─── 4. Rates Card ────────────────────────────────────────────────────

function DatesRatesCard() {
  return (
    <section className="px-4 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-16 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary rounded-3xl px-8 py-10 sm:px-12 sm:py-12 shadow-xl shadow-primary/20 text-center">
          <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)', backgroundSize: '24px 24px' }} aria-hidden="true" />
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 rounded-full" aria-hidden="true" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/[0.03] rounded-full" aria-hidden="true" />
          <div className="relative">
            <div className="flex justify-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-2xl bg-white/20 ring-1 ring-white/30 flex items-center justify-center">
                <CalendarDays size={20} className="text-white" />
              </div>
              <div className="w-11 h-11 rounded-2xl bg-white/20 ring-1 ring-white/30 flex items-center justify-center">
                <DollarSign size={20} className="text-white" />
              </div>
            </div>
            <h3 className="font-headline text-2xl sm:text-3xl lg:text-4xl text-white mb-3 leading-tight tracking-tight">
              Ready to Register?
            </h3>
            <p className="font-body text-white/75 text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-8">
              View our full summer schedule, session dates, and all enrollment details.
            </p>
            <a
              href="/dates-rates"
              onClick={(e) => { e.preventDefault(); navigate('/dates-rates'); }}
              className="group inline-flex items-center gap-2 bg-white text-primary font-body font-bold text-base px-8 py-4 rounded-full hover:bg-gray-50 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-black/10 min-h-[52px]"
            >
              View Rates
              <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ExtendedCare() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        <ExtendedCareHero />
        <ExtendedCareFastFacts />
        <PricingCards />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
