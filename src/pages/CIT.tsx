import {
  ArrowRight, Clock, MapPin, Users, Star, Trophy,
  Heart, Compass, Zap, BookOpen, HandHeart,
  CalendarDays, DollarSign,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import SafetyLogistics from '../components/SafetyLogistics';
import Reviews from '../components/Reviews';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import { navigate } from '../utils/navigate';
import { openEnrollModal } from '../utils/enrollModal';

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function CITHero() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-28">
      <img
        src="/CIT.jpg"
        alt="CIT Program"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/45 to-black/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" aria-hidden="true" />

      <div className="absolute top-8 left-4 text-3xl sm:text-4xl select-none pointer-events-none opacity-70 sm:top-12 sm:left-10 animate-float" aria-hidden="true">⭐</div>
      <div className="absolute top-10 right-5 text-2xl sm:text-3xl select-none pointer-events-none opacity-60 sm:top-16 sm:right-12 animate-float-slow" aria-hidden="true">🤝</div>
      <div className="absolute bottom-10 right-6 text-3xl sm:text-4xl select-none pointer-events-none opacity-50 sm:bottom-16 sm:right-16 animate-float" aria-hidden="true">🏅</div>
      <div className="absolute bottom-12 left-5 text-2xl sm:text-3xl select-none pointer-events-none opacity-50 sm:bottom-20 sm:left-12 animate-float-slow" aria-hidden="true">💪</div>

      <div className="relative w-full max-w-5xl mx-auto text-center animate-fade-in-up">
        <div className="flex justify-center mb-5 sm:mb-7">
          <span className="inline-flex items-center gap-2 font-body font-bold text-sm text-white uppercase tracking-widest bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full ring-2 ring-white/30 shadow-md border border-white/25 min-h-[44px]">
            <Users size={16} className="flex-shrink-0" />
            Age 14
          </span>
        </div>

        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-5 sm:mb-7 leading-[0.95] tracking-tight">
          CIT
          <br />
          <span className="text-primary drop-shadow-lg">Program</span>
        </h1>

        <p className="font-body text-base sm:text-lg lg:text-xl text-white/85 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          Transition from camper to leader! The perfect stepping stone for teens to build leadership skills, earn volunteer hours, and still experience the magic of camp.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-10 sm:mb-14 max-w-sm mx-auto sm:max-w-none">
          <button
            onClick={openEnrollModal}
            className="group btn-gradient-primary text-white w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-4 rounded-full font-body font-bold text-base sm:text-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/30 flex items-center justify-center gap-2 min-h-[52px]"
          >
            Apply for CIT
            <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <a
            href="#overview"
            className="w-full sm:w-auto border-2 border-white/50 text-white px-8 py-4 sm:px-10 sm:py-4 rounded-full font-body font-bold text-base sm:text-lg hover:border-white hover:bg-white/10 active:scale-[0.98] transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 min-h-[52px]"
          >
            Learn More
          </a>
        </div>

        <div className="grid grid-cols-2 sm:flex sm:flex-wrap sm:justify-center gap-2 sm:gap-3 max-w-sm mx-auto sm:max-w-none">
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2.5 sm:px-4 sm:py-2.5 rounded-full shadow-sm ring-1 ring-white/25 border border-white/20 min-h-[44px]">
            <Clock size={15} className="text-white flex-shrink-0" />
            <span className="font-body font-bold text-xs sm:text-sm text-white leading-tight">9:30 AM – 3:30 PM</span>
          </div>
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2.5 sm:px-4 sm:py-2.5 rounded-full shadow-sm ring-1 ring-white/25 border border-white/20 min-h-[44px]">
            <MapPin size={15} className="text-white flex-shrink-0" />
            <span className="font-body font-bold text-xs sm:text-sm text-white leading-tight">Ventnor City Campus</span>
          </div>
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2.5 sm:px-4 sm:py-2.5 rounded-full shadow-sm ring-1 ring-white/25 border border-white/20 min-h-[44px]">
            <Trophy size={15} className="text-white flex-shrink-0" />
            <span className="font-body font-bold text-xs sm:text-sm text-white leading-tight">Volunteer Hours Earned</span>
          </div>
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-3 py-2.5 sm:px-4 sm:py-2.5 rounded-full shadow-sm ring-1 ring-white/25 border border-white/20 min-h-[44px]">
            <Star size={15} className="text-white flex-shrink-0" />
            <span className="font-body font-bold text-xs sm:text-sm text-white leading-tight">Summer 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 2. Fast Facts Bar ────────────────────────────────────────────────────────

function CITFastFacts() {
  const facts = [
    {
      icon: Users,
      label: 'Ages',
      value: '14 Years Old',
      accent: 'bg-secondary-blue/10',
      iconColor: 'text-secondary-blue',
      iconBg: 'bg-secondary-blue/15',
      ring: 'ring-secondary-blue/20',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: '9:30 AM – 3:30 PM',
      accent: 'bg-secondary-green/10',
      iconColor: 'text-secondary-green',
      iconBg: 'bg-secondary-green/15',
      ring: 'ring-secondary-green/20',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ventnor City Campus',
      accent: 'bg-secondary-pink/10',
      iconColor: 'text-secondary-pink',
      iconBg: 'bg-secondary-pink/15',
      ring: 'ring-secondary-pink/20',
    },
    {
      icon: ArrowRight,
      label: 'Pricing',
      value: 'View Full Rates & Dates',
      accent: 'bg-primary/10',
      iconColor: 'text-primary',
      iconBg: 'bg-primary/15',
      ring: 'ring-primary/20',
      isLink: true,
    },
  ];

  return (
    <section className="border-t border-gray-100 px-4 py-12 sm:px-8 sm:py-14 lg:px-12 lg:py-16 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-center font-body font-bold text-gray-400 uppercase tracking-widest text-xs mb-6">
          At a Glance
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {facts.map(({ icon: Icon, label, value, accent, iconColor, iconBg, ring, isLink }) => {
            const cardContent = (
              <div className="flex flex-col items-center text-center w-full gap-3">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${iconBg} ring-1 ${ring} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={20} className={iconColor} />
                </div>
                <div className="flex flex-col items-center">
                  <p className="font-body font-bold text-[10px] text-gray-400 uppercase tracking-widest mb-0.5">
                    {label}
                  </p>
                  <p className={`font-body font-bold text-sm sm:text-base ${isLink ? iconColor : 'text-gray-800'} leading-tight text-center ${isLink ? 'group-hover:underline decoration-current underline-offset-2' : ''}`}>
                    {value}
                  </p>
                </div>
              </div>
            );

            if (isLink) {
              return (
                <a
                  key={label}
                  href="/dates-rates"
                  onClick={(e) => { e.preventDefault(); navigate('/dates-rates'); }}
                  className={`group flex items-center justify-center ${accent} ring-1 ${ring} rounded-2xl px-4 py-5 sm:py-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
                >
                  {cardContent}
                </a>
              );
            }

            return (
              <div
                key={label}
                className={`group flex items-center justify-center ${accent} ring-1 ${ring} rounded-2xl px-4 py-5 sm:py-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── 3. Program Highlights ────────────────────────────────────────────────────

const highlights = [
  { icon: Trophy,     label: 'Real Leadership Training',                    color: 'text-primary',           bg: 'bg-primary/10',          iconBg: 'bg-primary/15',          ring: 'ring-primary/20' },
  { icon: HandHeart,  label: 'Hands-On Experience with Younger Campers',    color: 'text-secondary-pink',    bg: 'bg-secondary-pink/10',   iconBg: 'bg-secondary-pink/20',   ring: 'ring-secondary-pink/20' },
  { icon: BookOpen,   label: 'Volunteer & Community Service Hours',         color: 'text-secondary-blue',    bg: 'bg-secondary-blue/10',   iconBg: 'bg-secondary-blue/20',   ring: 'ring-secondary-blue/20' },
  { icon: Compass,    label: 'Special Teen Excursions',                     color: 'text-secondary-green',   bg: 'bg-secondary-green/10',  iconBg: 'bg-secondary-green/20',  ring: 'ring-secondary-green/20' },
  { icon: Zap,        label: 'Team Building',                               color: 'text-secondary-yellow',  bg: 'bg-secondary-yellow/10', iconBg: 'bg-secondary-yellow/20', ring: 'ring-secondary-yellow/20' },
];

function ProgramHighlights() {
  return (
    <section className="border-t border-gray-100 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
            <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest whitespace-nowrap">
              What You Get
            </p>
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-5 leading-tight tracking-tight">
            The Best of <span className="text-primary">Both Worlds</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            All the joy of camp, plus the pride of stepping into a leadership role.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {highlights.map(({ icon: Icon, label, color, bg, iconBg, ring }) => (
            <div
              key={label}
              className={`group flex items-center gap-3 ${bg} ring-1 ${ring} px-6 py-4 rounded-full shadow-sm hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02] transition-all duration-200 min-h-[44px]`}
            >
              <div className={`flex-shrink-0 w-9 h-9 rounded-full ${iconBg} ring-1 ${ring} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                <Icon size={16} className={color} />
              </div>
              <span className="font-body font-bold text-sm sm:text-base text-gray-800 whitespace-nowrap">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 4. CIT Experience Overview ──────────────────────────────────────────────

function CITExperience() {
  return (
    <section
      id="overview"
      className="relative border-t border-gray-100 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-28 bg-gray-50"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(243,39,48,0.03), transparent)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest mb-3">
          The CIT Experience
        </p>
        <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-8 sm:mb-10 leading-tight tracking-tight">
          A Summer That <span className="text-primary">Shapes Leaders</span>
        </h2>

        <div className="bg-white rounded-2xl sm:rounded-3xl px-6 py-8 sm:px-10 sm:py-10 ring-1 ring-gray-100 shadow-sm text-left relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary/60 via-primary/30 to-transparent rounded-l-3xl" aria-hidden="true" />

          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 w-11 h-11 rounded-2xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mt-0.5">
              <Heart size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-headline text-lg sm:text-xl text-gray-900 leading-snug">
                Counselor in Training Program
              </p>
              <p className="font-body text-sm text-gray-400 mt-0.5">For 14-Year-Olds</p>
            </div>
          </div>

          <p className="font-body text-base sm:text-lg text-gray-600 leading-relaxed">
            Our Counselor in Training (CIT) program is designed for 14-year-olds who are ready for more responsibility but still want to enjoy their summer! CITs spend part of their day assisting our lead counselors with the younger age groups — helping with crafts, sports, and camp spirit — and the rest of their day enjoying specialized teen activities, trips, and social time with their peers.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: HandHeart, label: 'Support younger campers', color: 'text-secondary-pink',   bg: 'bg-secondary-pink/10',   ring: 'ring-secondary-pink/20' },
              { icon: Compass,   label: 'Teen trips & activities',  color: 'text-secondary-green',  bg: 'bg-secondary-green/10',  ring: 'ring-secondary-green/20' },
              { icon: BookOpen,  label: 'Earn volunteer hours',     color: 'text-secondary-blue',   bg: 'bg-secondary-blue/10',   ring: 'ring-secondary-blue/20' },
            ].map(({ icon: Icon, label, color, bg, ring }) => (
              <div
                key={label}
                className={`flex items-center gap-3 ${bg} ring-1 ${ring} rounded-2xl px-4 py-3.5 min-h-[56px]`}
              >
                <div className={`flex-shrink-0 w-8 h-8 rounded-xl ${bg} ring-1 ${ring} flex items-center justify-center`}>
                  <Icon size={15} className={color} />
                </div>
                <span className="font-body font-bold text-sm text-gray-700 leading-snug">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <a
            href="/contact"
            onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
            className="group btn-gradient-primary text-white inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-bold text-base hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/30 min-h-[52px]"
          >
            Apply for CIT
            <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── 5. Rates Card ────────────────────────────────────────────────────

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
              Ready to Apply?
            </h3>
            <p className="font-body text-white/75 text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-8">
              View our full summer schedule, session dates, and tuition options for the CIT Program.
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

export default function CIT() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        <CITHero />
        <CITFastFacts />
        <ProgramHighlights />
        <CITExperience />
        <SafetyLogistics />
        <DatesRatesCard />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
