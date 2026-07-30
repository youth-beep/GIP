import {
  ArrowRight, Clock, MapPin, Users, Sparkles, Palette,
  Star, Sun, Waves, Wand2, Wheat, Gamepad2, Moon,
  CalendarDays, DollarSign, Utensils, Trees, Music,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import SafetyLogistics from '../components/SafetyLogistics';
import Reviews from '../components/Reviews';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import { navigate } from '../utils/navigate';
import { openEnrollModal } from '../utils/enrollModal';

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function MiniHero() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-28">
      <img
        src="/Mini-Gan-Izzy.jpg"
        alt="Mini Gan Izzy"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/45 to-black/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-dots opacity-10 pointer-events-none" aria-hidden="true" />

      <div className="absolute top-8 left-4 text-3xl sm:text-4xl select-none pointer-events-none opacity-70 sm:top-12 sm:left-10 animate-float" aria-hidden="true">🎨</div>
      <div className="absolute top-10 right-5 text-2xl sm:text-3xl select-none pointer-events-none opacity-60 sm:top-16 sm:right-12 animate-float-slow" aria-hidden="true">🌊</div>
      <div className="absolute bottom-10 right-6 text-3xl sm:text-4xl select-none pointer-events-none opacity-50 sm:bottom-16 sm:right-16 animate-float" aria-hidden="true">🎪</div>
      <div className="absolute bottom-12 left-5 text-2xl sm:text-3xl select-none pointer-events-none opacity-50 sm:bottom-20 sm:left-12 animate-float-slow" aria-hidden="true">⚽</div>

      <div className="relative w-full max-w-5xl mx-auto text-center animate-fade-in-up">
        <div className="flex justify-center mb-5 sm:mb-7">
          <span className="inline-flex items-center gap-2 font-body font-bold text-sm text-white uppercase tracking-widest bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full ring-2 ring-white/30 shadow-md border border-white/25 min-h-[44px]">
            <Users size={16} className="flex-shrink-0" />
            Ages 3–4 Years
          </span>
        </div>

        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-5 sm:mb-7 leading-[0.95] tracking-tight">
          Mini Gan Izzy
          <br />
          <span className="text-primary drop-shadow-lg">Ages 3–4</span>
        </h1>

        <p className="font-body text-base sm:text-lg lg:text-xl text-white/85 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          Where curiosity meets summer magic! A balanced, active, and deeply nurturing camp experience perfectly paced for our energetic preschoolers.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-10 sm:mb-14 max-w-sm mx-auto sm:max-w-none">
          <button
            onClick={openEnrollModal}
            className="group btn-gradient-primary text-white w-full sm:w-auto px-8 py-4 sm:px-10 sm:py-4 rounded-full font-body font-bold text-base sm:text-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/30 flex items-center justify-center gap-2 min-h-[52px]"
          >
            Enroll My Child
            <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <a
            href="#schedule"
            className="w-full sm:w-auto border-2 border-white/50 text-white px-8 py-4 sm:px-10 sm:py-4 rounded-full font-body font-bold text-base sm:text-lg hover:border-white hover:bg-white/10 active:scale-[0.98] transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2 min-h-[52px]"
          >
            See Daily Schedule
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
            <Waves size={15} className="text-white flex-shrink-0" />
            <span className="font-body font-bold text-xs sm:text-sm text-white leading-tight">Local Pool Included</span>
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

function MiniFastFacts() {
  const facts = [
    {
      icon: Users,
      label: 'Ages',
      value: '3–4 Years',
      accent: 'bg-secondary-pink/10',
      iconColor: 'text-secondary-pink',
      iconBg: 'bg-secondary-pink/15',
      ring: 'ring-secondary-pink/20',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: '9:30 AM – 3:30 PM',
      accent: 'bg-secondary-blue/10',
      iconColor: 'text-secondary-blue',
      iconBg: 'bg-secondary-blue/15',
      ring: 'ring-secondary-blue/20',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ventnor City Campus & Local Pool',
      accent: 'bg-secondary-green/10',
      iconColor: 'text-secondary-green',
      iconBg: 'bg-secondary-green/15',
      ring: 'ring-secondary-green/20',
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
  { icon: Waves,    label: 'Mini Waterslides',       color: 'text-secondary-blue',   bg: 'bg-secondary-blue/10',   iconBg: 'bg-secondary-blue/20',   ring: 'ring-secondary-blue/20' },
  { icon: Sparkles, label: 'Splash Pad Fun',          color: 'text-secondary-blue',   bg: 'bg-secondary-blue/10',   iconBg: 'bg-secondary-blue/20',   ring: 'ring-secondary-blue/20' },
  { icon: Wand2,    label: 'Live Magic Shows',        color: 'text-secondary-pink',   bg: 'bg-secondary-pink/10',   iconBg: 'bg-secondary-pink/20',   ring: 'ring-secondary-pink/20' },
  { icon: Wheat,    label: 'Challah Braiding',        color: 'text-secondary-yellow', bg: 'bg-secondary-yellow/10', iconBg: 'bg-secondary-yellow/20', ring: 'ring-secondary-yellow/20' },
  { icon: Palette,  label: 'Creative Arts & Crafts',  color: 'text-secondary-green',  bg: 'bg-secondary-green/10',  iconBg: 'bg-secondary-green/20',  ring: 'ring-secondary-green/20' },
  { icon: Gamepad2, label: 'Outdoor Sports & Games',  color: 'text-primary',          bg: 'bg-primary/10',          iconBg: 'bg-primary/15',          ring: 'ring-primary/20' },
  { icon: Moon,     label: 'Daily Quiet Time',        color: 'text-secondary-blue',   bg: 'bg-secondary-blue/10',   iconBg: 'bg-secondary-blue/20',   ring: 'ring-secondary-blue/20' },
  { icon: Sun,      label: 'Shabbat Parties',         color: 'text-secondary-yellow', bg: 'bg-secondary-yellow/10', iconBg: 'bg-secondary-yellow/20', ring: 'ring-secondary-yellow/20' },
];

function ProgramHighlights() {
  return (
    <section className="border-t border-gray-100 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
            <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest whitespace-nowrap">
              Program Highlights
            </p>
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-5 leading-tight tracking-tight">
            What to <span className="text-primary">Expect</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Every day is packed with adventure, creativity, and joyful connections built just for 3 and 4 year olds.
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

// ─── 4. Day in the Life ───────────────────────────────────────────────────────

const COLOR = '#ffe700';
const TINT = '#fffde6';

const schedule = [
  { time: '9:30 AM',  activity: 'Morning Circle & Songs',              icon: Music },
  { time: '10:15 AM', activity: 'Kiddy Pool',                          icon: Waves },
  { time: '11:30 AM', activity: 'Change and Lunch',                    icon: Utensils },
  { time: '12:15 PM', activity: 'Nap / Story Time',                    icon: Moon },
  { time: '1:30 PM',  activity: 'Arts & Crafts',                       icon: Palette },
  { time: '2:15 PM',  activity: 'Playground & Games',                  icon: Trees },
  { time: '3:00 PM',  activity: 'Afternoon Snack & Dismissal Prep',    icon: Utensils },
  { time: '3:30 PM',  activity: 'Pickup',                              icon: Users },
];

function DayInLife() {
  return (
    <section
      id="schedule"
      className="relative border-t border-gray-100 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-28 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.06]" style={{ backgroundColor: COLOR }} />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.06]" style={{ backgroundColor: COLOR }} />
      </div>

      <div className="relative max-w-2xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest mb-3">
            Daily Schedule
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-5 leading-tight tracking-tight">
            A Sneak Peek at{' '}
            <span className="text-primary">Their Day</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            A joyful, perfectly paced day built for curious and energetic 3 and 4 year olds.
          </p>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl ring-1 ring-gray-100 shadow-xl overflow-hidden">
          <div className="px-5 py-4 sm:px-8 sm:py-5 flex items-center gap-3" style={{ backgroundColor: COLOR }}>
            <Clock className="w-5 h-5 flex-shrink-0 text-gray-800/80" />
            <p className="font-headline text-lg sm:text-xl font-bold leading-tight text-gray-900">
              Mini Gan Izzy <span className="font-normal opacity-70 text-base">— Ages 3–4</span>
            </p>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-2 sm:space-y-3">
              {schedule.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.time} className="flex items-center gap-3 sm:gap-4 group/row">
                    <div
                      className="flex-shrink-0 w-11 h-11 sm:w-[48px] sm:h-[48px] rounded-xl flex items-center justify-center shadow-md group-hover/row:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: COLOR }}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
                    </div>
                    <div
                      className="flex-1 flex flex-col sm:flex-row sm:items-center sm:gap-4 rounded-xl px-4 py-3 sm:py-3.5 group-hover/row:shadow-md transition-shadow duration-200"
                      style={{ backgroundColor: TINT, borderColor: `${COLOR}55`, borderWidth: '1px', borderStyle: 'solid' }}
                    >
                      <span
                        className="font-body font-bold text-xs sm:text-sm whitespace-nowrap mb-0.5 sm:mb-0 sm:w-[90px] flex-shrink-0 text-gray-700"
                      >
                        {item.time}
                      </span>
                      <span className="font-body text-sm sm:text-base text-gray-800 font-semibold leading-snug">
                        {item.activity}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
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
              Ready to Register?
            </h3>
            <p className="font-body text-white/75 text-base sm:text-lg max-w-md mx-auto leading-relaxed mb-8">
              View our full summer schedule, session dates, and tuition options for Mini Gan Izzy.
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

export default function MiniGanIzzy() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        <MiniHero />
        <MiniFastFacts />
        <ProgramHighlights />
        <DayInLife />
        <SafetyLogistics />
        <DatesRatesCard />
        <Reviews />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
