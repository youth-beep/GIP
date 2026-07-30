import {
  ArrowRight, Calendar, Clock, DollarSign, Tag, Gift,
  Heart, Star, ExternalLink, CheckCircle, Sparkles, Users, Percent,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import { navigate } from '../utils/navigate';
import { openEnrollModal } from '../utils/enrollModal';

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function DatesRatesHero() {
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex items-center bg-gradient-to-br from-slate-50 via-yellow-50/40 to-orange-50/50 px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,231,0,0.10), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-secondary-yellow/10 via-primary/[0.03] to-transparent pointer-events-none"
        style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 5% 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-gradient-to-tr from-secondary-green/[0.06] to-transparent pointer-events-none"
        style={{ clipPath: 'polygon(0 25%, 85% 0, 100% 100%, 0 100%)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-56 h-56 sm:w-80 sm:h-80 bg-secondary-yellow/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-blue/[0.07] rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-[8%] w-3 h-3 bg-secondary-yellow/70 rounded-full hidden sm:block animate-float-slow" />
        <div className="absolute top-1/3 right-[10%] w-4 h-4 bg-primary/25 rounded-full hidden sm:block animate-float" />
        <div className="absolute bottom-1/3 right-[22%] w-5 h-5 bg-secondary-green/30 rounded-full hidden sm:block animate-float-slow" />
        <div className="absolute bottom-1/4 left-[18%] w-3 h-3 bg-secondary-pink/30 rounded-full hidden sm:block animate-float" />
      </div>
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="absolute top-8 left-4 text-3xl sm:text-4xl select-none pointer-events-none opacity-70 sm:top-12 sm:left-10 animate-float" aria-hidden="true">📅</div>
      <div className="absolute top-10 right-5 text-2xl sm:text-3xl select-none pointer-events-none opacity-60 sm:top-16 sm:right-12 animate-float-slow" aria-hidden="true">💰</div>
      <div className="absolute bottom-10 right-6 text-3xl sm:text-4xl select-none pointer-events-none opacity-50 sm:bottom-16 sm:right-16 animate-float" aria-hidden="true">⭐</div>
      <div className="absolute bottom-12 left-5 text-2xl sm:text-3xl select-none pointer-events-none opacity-50 sm:bottom-20 sm:left-12 animate-float-slow" aria-hidden="true">🎒</div>

      <div className="relative w-full max-w-4xl mx-auto text-center animate-fade-in-up">
        <div className="flex justify-center mb-5 sm:mb-7">
          <span className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary uppercase tracking-widest bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full ring-2 ring-primary/25 shadow-md border border-white/60 min-h-[44px]">
            <Calendar size={16} className="flex-shrink-0" />
            Summer 2026
          </span>
        </div>

        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 mb-5 sm:mb-7 leading-[0.95] tracking-tight">
          <span className="text-gradient-primary" style={{ textShadow: '0 2px 20px rgba(243,39,48,0.15)' }}>
            Rates
          </span>{' '}
          2026
        </h1>

        <p className="font-body text-base sm:text-lg lg:text-xl text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          Everything you need to plan a magical summer. Scholarships and early bird discounts are available!
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-sm mx-auto sm:max-w-none">
          <button
            onClick={openEnrollModal}
            className="group btn-gradient-primary text-white w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-4 rounded-full font-body font-bold text-base sm:text-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/30 flex items-center justify-center gap-2 min-h-[52px]"
          >
            <Sparkles size={18} className="opacity-90" />
            Enroll Now
          </button>
          <a
            href="#pricing"
            className="w-full sm:w-auto border-2 border-gray-200 text-gray-700 px-8 py-4 sm:px-10 sm:py-4 rounded-full font-body font-bold text-base sm:text-lg hover:border-primary hover:text-primary hover:bg-primary/5 active:scale-[0.98] transition-all duration-300 bg-white/80 backdrop-blur-sm flex items-center justify-center gap-2 min-h-[52px] shadow-sm"
          >
            View Rates
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Pricing ───────────────────────────────────────────────────────────────

interface PlanRow {
  label: string;
  price: string;
  hours: string;
  tbd?: boolean;
}

interface DayOption {
  title: string;
  days: string;
  accent: string;
  iconBg: string;
  iconColor: string;
  ring: string;
  headerBg: string;
  badge?: string;
  fullDay: PlanRow[];
  halfDay: PlanRow[];
}

const dayOptions: DayOption[] = [
  {
    title: '5 Days',
    days: 'Monday – Friday',
    accent: 'bg-primary/[0.04]',
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
    ring: 'ring-primary/20',
    headerBg: 'bg-primary/[0.06]',
    badge: 'Best Value',
    fullDay: [
      { label: 'Standard', price: '$1,100', hours: '9:30 AM – 3:30 PM' },
      { label: 'Before Care', price: '$1,290', hours: '7:30 AM – 3:30 PM' },
      { label: 'After Care', price: '$1,290', hours: '9:30 AM – 4:30 PM' },
      { label: 'Before & After Care', price: '$1,390', hours: '7:30 AM – 4:30 PM' },
      { label: 'Extended After Care', price: '$1,390', hours: '9:30 AM – 5:30 PM' },
      { label: 'Full Care', price: '$1,460', hours: '7:30 AM – 5:30 PM' },
    ],
    halfDay: [
      { label: 'Standard', price: '$805', hours: '9:30 AM – 12:00 PM' },
      { label: 'Before Care', price: '$995', hours: '7:30 AM – 12:00 PM' },
    ],
  },
  {
    title: '3 Days',
    days: 'Mon, Wed & Fri',
    accent: 'bg-secondary-blue/[0.04]',
    iconBg: 'bg-secondary-blue/15',
    iconColor: 'text-secondary-blue',
    ring: 'ring-secondary-blue/20',
    headerBg: 'bg-secondary-blue/[0.06]',
    fullDay: [
      { label: 'Standard', price: '$880', hours: '9:30 AM – 3:30 PM' },
      { label: 'Before Care', price: '$990', hours: '7:30 AM – 3:30 PM' },
      { label: 'After Care', price: '$990', hours: '9:30 AM – 4:30 PM' },
      { label: 'Before & After Care', price: '$1,045', hours: '7:30 AM – 4:30 PM' },
      { label: 'Extended After Care', price: '$1,045', hours: '9:30 AM – 5:30 PM' },
      { label: 'Full Care', price: '$1,100', hours: '7:30 AM – 5:30 PM' },
    ],
    halfDay: [
      { label: 'Standard', price: '$600', hours: '9:30 AM – 12:00 PM' },
      { label: 'Before Care', price: '$710', hours: '7:30 AM – 12:00 PM' },
    ],
  },
  {
    title: '2 Days',
    days: 'Tuesday & Thursday',
    accent: 'bg-secondary-green/[0.04]',
    iconBg: 'bg-secondary-green/15',
    iconColor: 'text-secondary-green',
    ring: 'ring-secondary-green/20',
    headerBg: 'bg-secondary-green/[0.06]',
    fullDay: [
      { label: 'Standard', price: '$750', hours: '9:30 AM – 3:30 PM' },
      { label: 'Before Care', price: '$830', hours: '7:30 AM – 3:30 PM' },
      { label: 'After Care', price: '$830', hours: '9:30 AM – 4:30 PM' },
      { label: 'Before & After Care', price: '$875', hours: '7:30 AM – 4:30 PM' },
      { label: 'Extended After Care', price: '$875', hours: '9:30 AM – 5:30 PM' },
      { label: 'Full Care', price: '$900', hours: '7:30 AM – 5:30 PM' },
    ],
    halfDay: [
      { label: 'Standard', price: '$525', hours: '9:30 AM – 12:00 PM' },
      { label: 'Before Care', price: '$625', hours: '7:30 AM – 12:00 PM' },
    ],
  },
];

function PlanRowItem({ row }: { row: PlanRow }) {
  const { label, price, hours, tbd } = row;
  return (
    <div
      className={`flex items-start justify-between gap-3 py-2.5 px-3.5 rounded-xl transition-colors duration-150 ${
        tbd
          ? 'bg-amber-50 ring-1 ring-amber-200/60'
          : 'bg-white/60 ring-1 ring-gray-100 hover:bg-white/90'
      }`}
    >
      <div className="flex-1 min-w-0">
        <p
          className={`font-body font-bold text-sm leading-snug ${
            tbd ? 'text-amber-700' : 'text-gray-700'
          }`}
        >
          {label}
          {tbd && (
            <span className="ml-2 inline-flex items-center font-body font-bold text-[10px] text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded-full uppercase tracking-wider">
              Pending
            </span>
          )}
        </p>
        <p className="font-body text-xs text-gray-400 mt-0.5 leading-snug">{hours}</p>
      </div>
      <div className="flex-shrink-0 text-right whitespace-nowrap">
        <span
          className={`font-body font-bold text-base ${
            tbd ? 'text-amber-600' : 'text-gray-900'
          }`}
        >
          {price}
        </span>
        {!tbd && <span className="font-body text-xs font-normal text-gray-400">/yr</span>}
      </div>
    </div>
  );
}

function PricingCard({ option }: { option: DayOption }) {
  const { title, days, accent, iconBg, iconColor, ring, headerBg, badge, fullDay, halfDay } = option;
  return (
    <div
      className={`relative flex flex-col ${accent} ring-1 ${ring} rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300`}
    >
      {badge && (
        <div className="absolute top-4 right-4 z-10">
          <span className="inline-flex items-center gap-1 font-body font-bold text-xs text-white bg-primary px-3 py-1 rounded-full shadow-sm">
            <Sparkles size={11} className="opacity-90" />
            {badge}
          </span>
        </div>
      )}

      <div className={`${headerBg} px-6 py-6 sm:px-8 sm:py-7`}>
        <div
          className={`w-12 h-12 rounded-2xl ${iconBg} ring-1 ${ring} flex items-center justify-center mb-4 shadow-sm`}
        >
          <Users size={20} className={iconColor} />
        </div>
        <h3 className="font-headline text-2xl sm:text-3xl text-gray-900 leading-tight mb-1">
          {title}
        </h3>
        <p className="font-body text-sm text-gray-500">{days}</p>
      </div>

      <div className="flex flex-col flex-1 px-6 py-5 sm:px-8 sm:py-6 gap-5">
        <div>
          <p className="font-body font-bold text-xs text-gray-400 uppercase tracking-widest mb-3">
            Full-Day Plans
          </p>
          <div className="space-y-2.5">
            {fullDay.map((row) => (
              <PlanRowItem key={row.label} row={row} />
            ))}
          </div>
        </div>

        <div>
          <p className="font-body font-bold text-xs text-gray-400 uppercase tracking-widest mb-3">
            Half-Day Plans
          </p>
          <div className="space-y-2.5">
            {halfDay.map((row) => (
              <PlanRowItem key={row.label} row={row} />
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 sm:px-8 sm:pb-7">
        <button
          onClick={openEnrollModal}
          className="group w-full btn-gradient-primary text-white py-3.5 rounded-full font-body font-bold text-base hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/25 flex items-center justify-center gap-2 min-h-[48px]"
        >
          Enroll Now
          <ArrowRight
            size={17}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-gray-100 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 bg-gradient-to-b from-gray-50/60 via-white to-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
            <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest whitespace-nowrap">
              Tuition
            </p>
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight tracking-tight mb-3">
            Flexible <span className="text-primary">Tuition Plans</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            Choose the schedule that fits your family — 2, 3, or 5 days a week with full-day and half-day options. All prices are annual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {dayOptions.map((option) => (
            <PricingCard key={option.title} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. Discounts & Financial Aid ─────────────────────────────────────────────

const discounts = [
  {
    icon: Tag,
    label: 'Early Bird Discount',
    value: '$100 off',
    detail: 'Expires February 5th · 4-week minimum',
    accent: 'bg-secondary-blue/10',
    iconBg: 'bg-secondary-blue/15',
    iconColor: 'text-secondary-blue',
    ring: 'ring-secondary-blue/20',
    dot: 'bg-secondary-blue',
  },
  {
    icon: Gift,
    label: 'Refer a New Family',
    value: '$100 off',
    detail: '4-week minimum · Both families save',
    accent: 'bg-secondary-green/10',
    iconBg: 'bg-secondary-green/15',
    iconColor: 'text-secondary-green',
    ring: 'ring-secondary-green/20',
    dot: 'bg-secondary-green',
  },
  {
    icon: Percent,
    label: 'Siblings Discount',
    value: '5% off',
    detail: 'Applied per additional sibling enrolled',
    accent: 'bg-secondary-pink/10',
    iconBg: 'bg-secondary-pink/15',
    iconColor: 'text-secondary-pink',
    ring: 'ring-secondary-pink/20',
    dot: 'bg-secondary-pink',
  },
];

const scholarships = [
  {
    name: 'Rutgers Women Center',
    icon: Star,
  },
  {
    name: 'Chabad at the Shore Scholarship',
    icon: Heart,
    note: 'Contact us to apply',
  },
];

function DiscountsAid() {
  return (
    <section className="border-t border-gray-100 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 bg-gradient-to-b from-white to-gray-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
            <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest whitespace-nowrap">
              Save More
            </p>
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight tracking-tight mb-3">
            Discounts &amp; <span className="text-primary">Financial Aid</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            We're committed to making camp accessible for every family.
          </p>
        </div>

        {/* Discounts grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
          {discounts.map(({ icon: Icon, label, value, detail, accent, iconBg, iconColor, ring, dot }) => (
            <div
              key={label}
              className={`relative group flex flex-col ${accent} ring-1 ${ring} rounded-3xl px-6 py-6 sm:py-7 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 overflow-hidden`}
            >
              <div className={`absolute top-0 left-6 right-6 h-[3px] ${dot} rounded-full opacity-40`} aria-hidden="true" />
              <div className={`w-12 h-12 rounded-2xl ${iconBg} ring-1 ${ring} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                <Icon size={20} className={iconColor} />
              </div>
              <p className="font-body font-bold text-xs text-gray-400 uppercase tracking-widest mb-1">{label}</p>
              <p className="font-headline text-3xl text-gray-900 mb-2 leading-none">{value}</p>
              <p className="font-body text-xs sm:text-sm text-gray-500 leading-relaxed">{detail}</p>
            </div>
          ))}
        </div>

        {/* Vouchers & Scholarships */}
        <div className="bg-white ring-1 ring-gray-100 rounded-3xl px-6 py-7 sm:px-8 sm:py-8 shadow-sm">
          <div className="flex items-start gap-4 mb-5">
            <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
              <DollarSign size={18} className="text-primary" />
            </div>
            <div>
              <h3 className="font-headline text-xl sm:text-2xl text-gray-900 leading-snug">
                Vouchers &amp; Scholarships Accepted
              </h3>
              <p className="font-body text-sm text-gray-500 mt-0.5">
                We believe every child deserves a Jewish summer.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {scholarships.map(({ name, icon: Icon, note }) => (
              <div
                key={name}
                className="flex items-center gap-3 bg-primary/5 ring-1 ring-primary/15 rounded-2xl px-4 py-3.5"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center">
                  <Icon size={14} className="text-primary" />
                </div>
                <div>
                  <p className="font-body font-bold text-sm text-gray-800 leading-snug">{name}</p>
                  {note && <p className="font-body text-xs text-gray-400 mt-0.5">{note}</p>}
                </div>
                <CheckCircle size={15} className="text-primary ml-auto flex-shrink-0 opacity-70" />
              </div>
            ))}
          </div>

          <p className="font-body text-xs text-gray-400 mt-5 text-center leading-relaxed">
            For scholarship inquiries, please{' '}
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              className="text-primary font-bold underline underline-offset-2 hover:text-primary-dark"
            >
              contact us
            </a>{' '}
            directly.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DatesRates() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        <DatesRatesHero />
        <Pricing />
        <DiscountsAid />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
