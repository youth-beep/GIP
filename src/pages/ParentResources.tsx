import React from 'react';
import { Calendar, BookOpen, Camera, Heart, ArrowRight, ExternalLink, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import { navigate } from '../utils/navigate';

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function ParentResourcesHero() {
  return (
    <section className="relative overflow-hidden min-h-[55vh] flex items-center bg-gradient-to-br from-slate-50 via-orange-50/30 to-yellow-50/50 px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,231,0,0.08), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-secondary-yellow/10 via-primary/[0.03] to-transparent pointer-events-none"
        style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 5% 100%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-1/2 h-2/3 bg-gradient-to-tr from-secondary-blue/[0.05] to-transparent pointer-events-none"
        style={{ clipPath: 'polygon(0 25%, 85% 0, 100% 100%, 0 100%)' }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-56 h-56 sm:w-80 sm:h-80 bg-secondary-yellow/15 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-blue/[0.07] rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-[8%] w-3 h-3 bg-secondary-yellow/70 rounded-full hidden sm:block animate-float-slow" />
        <div className="absolute top-1/3 right-[10%] w-4 h-4 bg-primary/25 rounded-full hidden sm:block animate-float" />
        <div className="absolute bottom-1/3 right-[22%] w-5 h-5 bg-secondary-green/30 rounded-full hidden sm:block animate-float-slow" />
        <div className="absolute bottom-1/4 left-[18%] w-3 h-3 bg-secondary-pink/40 rounded-full hidden sm:block animate-float" />
      </div>
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="absolute top-8 left-4 text-3xl sm:text-4xl select-none pointer-events-none opacity-70 sm:top-12 sm:left-10 animate-float" aria-hidden="true">📅</div>
      <div className="absolute top-10 right-5 text-2xl sm:text-3xl select-none pointer-events-none opacity-60 sm:top-16 sm:right-12 animate-float-slow" aria-hidden="true">📚</div>
      <div className="absolute bottom-10 right-6 text-3xl sm:text-4xl select-none pointer-events-none opacity-50 sm:bottom-16 sm:right-16 animate-float" aria-hidden="true">📸</div>
      <div className="absolute bottom-12 left-5 text-2xl sm:text-3xl select-none pointer-events-none opacity-50 sm:bottom-20 sm:left-12 animate-float-slow" aria-hidden="true">💛</div>

      <div className="relative w-full max-w-3xl mx-auto text-center animate-fade-in-up">
        <div className="flex justify-center mb-5 sm:mb-7">
          <span className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary uppercase tracking-widest bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full ring-2 ring-primary/25 shadow-md border border-white/60 min-h-[44px]">
            <BookOpen size={16} className="flex-shrink-0" />
            For Families
          </span>
        </div>

        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 mb-5 sm:mb-7 leading-[0.95] tracking-tight">
          Parent{' '}
          <span
            className="text-gradient-primary"
            style={{ textShadow: '0 2px 20px rgba(243,39,48,0.15)' }}
          >
            Resources
          </span>
        </h1>

        <p className="font-body text-base sm:text-lg lg:text-xl text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          Everything you need to stay informed and get ready for an amazing summer at Gan Izzy!
        </p>

        <a
          href="#resources-grid"
          className="group btn-gradient-primary text-white inline-flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-4 rounded-full font-body font-bold text-base sm:text-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/30 min-h-[52px]"
        >
          Explore Resources
          <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}

// ─── 2. Resources Grid ────────────────────────────────────────────────────────

interface Resource {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonLabel: string;
  href?: string;
  external?: boolean;
  comingSoon?: boolean;
  accent: string;
  iconBg: string;
  iconColor: string;
  ring: string;
  btnRing: string;
  btnText: string;
  btnHover: string;
  dot: string;
}

const resources: Resource[] = [
  {
    icon: Calendar,
    title: 'Camp Calendars 2026',
    description:
      'View and download our daily schedules, trip days, and special dress-up themes.',
    buttonLabel: 'View Calendar',
    href: '/calendar',
    external: false,
    comingSoon: false,
    accent: 'bg-secondary-blue/10',
    iconBg: 'bg-secondary-blue/15',
    iconColor: 'text-secondary-blue',
    ring: 'ring-secondary-blue/20',
    btnRing: 'ring-secondary-blue/30',
    btnText: 'text-secondary-blue',
    btnHover: 'hover:bg-secondary-blue/10',
    dot: 'bg-secondary-blue',
  },
  {
    icon: BookOpen,
    title: 'Parents Handbook',
    description:
      'All the important details in one place: packing lists, camp policies, drop-off/pick-up procedures, and more.',
    buttonLabel: 'Download Handbook',
    href: 'https://drive.google.com/file/d/1IZMko00A-MfhhWuOV2dZh6gy7igurIB-/view?usp=sharing',
    external: true,
    accent: 'bg-secondary-green/10',
    iconBg: 'bg-secondary-green/15',
    iconColor: 'text-secondary-green',
    ring: 'ring-secondary-green/20',
    btnRing: 'ring-secondary-green/30',
    btnText: 'text-secondary-green',
    btnHover: 'hover:bg-secondary-green/10',
    dot: 'bg-secondary-green',
  },
  {
    icon: Camera,
    title: 'Photo Galleries',
    description:
      'Catch a glimpse of the summer magic! We update our secure photo galleries weekly so you never miss a smile.',
    buttonLabel: 'View Photos',
    href: '/gallery',
    accent: 'bg-secondary-pink/10',
    iconBg: 'bg-secondary-pink/15',
    iconColor: 'text-secondary-pink',
    ring: 'ring-secondary-pink/20',
    btnRing: 'ring-secondary-pink/30',
    btnText: 'text-secondary-pink',
    btnHover: 'hover:bg-secondary-pink/10',
    dot: 'bg-secondary-pink',
  },
  {
    icon: BookOpen,
    title: 'Preschool Welcome Packet',
    description:
      'Everything preschool families need to know before the first day — routines, what to bring, and how to prepare your little one for Gan Izzy.',
    buttonLabel: 'View Packet',
    href: '/parents',
    external: false,
    accent: 'bg-secondary-yellow/10',
    iconBg: 'bg-secondary-yellow/20',
    iconColor: 'text-amber-600',
    ring: 'ring-secondary-yellow/30',
    btnRing: 'ring-amber-400/40',
    btnText: 'text-amber-700',
    btnHover: 'hover:bg-secondary-yellow/20',
    dot: 'bg-secondary-yellow',
  },
  {
    icon: Heart,
    title: 'Frankel/Schwartz Scholarship Fund',
    description:
      'We believe every child deserves a Jewish summer. Fill out the form below to apply for financial assistance.',
    buttonLabel: 'Apply Now',
    href: 'https://docs.google.com/document/d/0B6Wc_tLSkDlqbzBNZkF5M3o2Qlk/edit?usp=sharing&ouid=103594364197910165170&resourcekey=0-OA-h7VmOBMM-x9GfTQrhJw&rtpof=true&sd=true',
    external: true,
    accent: 'bg-primary/10',
    iconBg: 'bg-primary/15',
    iconColor: 'text-primary',
    ring: 'ring-primary/20',
    btnRing: 'ring-primary/30',
    btnText: 'text-primary',
    btnHover: 'hover:bg-primary/10',
    dot: 'bg-primary',
  },
];

function ResourcesGrid() {
  return (
    <section
      id="resources-grid"
      className="border-t border-gray-100 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24 bg-gradient-to-b from-white via-gray-50/40 to-white"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
            <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest whitespace-nowrap">
              Everything You Need
            </p>
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight tracking-tight">
            All in <span className="text-primary">One Place</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-xl mx-auto leading-relaxed mt-4">
            Quick access to the tools and documents that make camp life easy for the whole family.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {resources.map(({
            icon: Icon, title, description, buttonLabel, href, external, comingSoon,
            accent, iconBg, iconColor, ring, btnRing, btnText, btnHover, dot,
          }) => (
            <div
              key={title}
              className={`group relative flex flex-col ${accent} ring-1 ${ring} rounded-3xl px-6 py-7 sm:px-8 sm:py-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
            >
              <div className={`absolute top-0 left-6 right-6 h-[3px] ${dot} rounded-full opacity-40`} aria-hidden="true" />

              <div className="flex items-start gap-4 mb-4">
                <div className={`flex-shrink-0 w-[52px] h-[52px] rounded-2xl ${iconBg} ring-1 ${ring} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={22} className={iconColor} />
                </div>
                <div className="pt-1">
                  <h3 className="font-headline text-xl sm:text-2xl text-gray-900 leading-snug">
                    {title}
                  </h3>
                </div>
              </div>

              <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed mb-6 flex-1">
                {description}
              </p>

              <div>
                {comingSoon ? (
                  <span className={`inline-flex items-center gap-2 font-body font-bold text-sm ${btnText} bg-white/60 ring-1 ${btnRing} px-5 py-2.5 rounded-full opacity-60 cursor-not-allowed min-h-[40px]`}>
                    <Clock size={14} />
                    {buttonLabel}
                  </span>
                ) : external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 font-body font-bold text-sm ${btnText} bg-white/80 ring-1 ${btnRing} ${btnHover} px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-sm active:scale-[0.97] min-h-[40px] backdrop-blur-sm`}
                  >
                    <ExternalLink size={14} />
                    {buttonLabel}
                  </a>
                ) : (
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); navigate(href!); }}
                    className={`inline-flex items-center gap-2 font-body font-bold text-sm ${btnText} bg-white/80 ring-1 ${btnRing} ${btnHover} px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-sm active:scale-[0.97] min-h-[40px] backdrop-blur-sm`}
                  >
                    <ExternalLink size={14} />
                    {buttonLabel}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ParentResources() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        <ParentResourcesHero />
        <ResourcesGrid />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
