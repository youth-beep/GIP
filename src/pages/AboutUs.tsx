import { ArrowRight, Sun, Wind, Waves, MapPin, Shield, Users, Music, Palette, Heart, Moon, Sparkles, Trees } from 'lucide-react';
import Navigation from '../components/Navigation';
import SafetyLogistics from '../components/SafetyLogistics';
import Reviews from '../components/Reviews';
import PhotoGallery from '../components/PhotoGallery';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import { openEnrollModal } from '../utils/enrollModal';
import { navigate } from '../utils/navigate';

// ─── Shared wave divider ──────────────────────────────────────────────────────
function WaveDivider({ fromClass, toClass }: { fromClass: string; toClass: string }) {
  return (
    <div className={`relative -mb-px overflow-hidden leading-none ${fromClass}`} aria-hidden="true">
      <svg
        viewBox="0 0 1440 56"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: '40px' }}
      >
        <path
          d="M0,28 C360,56 1080,0 1440,28 L1440,56 L0,56 Z"
          className={toClass}
        />
      </svg>
    </div>
  );
}

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function AboutHero() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50/80 via-orange-50/40 to-yellow-50/60 py-16 sm:py-24 lg:py-32 px-4 sm:px-8 lg:px-12">
        <div
          className="absolute top-0 right-0 w-[55%] h-full bg-gradient-to-bl from-primary/[0.04] via-secondary-pink/[0.06] to-transparent pointer-events-none"
          style={{ clipPath: 'polygon(30% 0, 100% 0, 100% 100%, 0% 100%)' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-tr from-secondary-blue/[0.06] to-transparent pointer-events-none"
          style={{ clipPath: 'polygon(0 30%, 80% 0, 100% 100%, 0% 100%)' }}
          aria-hidden="true"
        />

        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-16 -right-16 w-64 h-64 sm:w-80 sm:h-80 bg-secondary-pink/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 sm:w-96 sm:h-96 bg-secondary-blue/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-secondary-yellow/10 rounded-full blur-3xl animate-pulse-soft" />
          <div className="hidden sm:block absolute top-20 right-[15%] w-4 h-4 bg-primary/20 rounded-full animate-float" />
          <div className="hidden sm:block absolute top-40 left-[12%] w-3 h-3 bg-secondary-blue/30 rounded-full animate-float-slow" />
          <div className="hidden sm:block absolute bottom-28 right-[25%] w-5 h-5 bg-secondary-yellow/30 rounded-full animate-float" />
          <div className="hidden lg:block absolute top-24 left-[30%] w-2 h-2 bg-secondary-green/40 rounded-full animate-pulse-soft" />
        </div>
        <div className="absolute inset-0 bg-dots opacity-40 pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            {/* Text */}
            <div>
              <p
                className="inline-block font-body font-bold text-xs sm:text-sm text-primary/80 mb-4 sm:mb-6 uppercase tracking-widest bg-primary/5 px-4 py-1.5 rounded-full ring-1 ring-primary/10 animate-fade-in-up"
                style={{ animationDelay: '0ms', animationFillMode: 'both' }}
              >
                About Gan Izzy Preschool
              </p>

              <h1
                className="font-headline text-4xl sm:text-5xl lg:text-7xl xl:text-8xl text-gray-900 mb-5 sm:mb-7 leading-[0.95] tracking-tight animate-fade-in-up"
                style={{ animationDelay: '80ms', animationFillMode: 'both' }}
              >
                Where little ones{' '}
                <span className="text-gradient-primary">feel right at home.</span>
              </h1>

              <p
                className="font-body text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-lg leading-relaxed animate-fade-in-up"
                style={{ animationDelay: '160ms', animationFillMode: 'both' }}
              >
                Discover the mission, the people, and the love behind Gan Izzy Preschool — a nurturing Jewish early-childhood home for your child's first steps into learning and friendship.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up"
                style={{ animationDelay: '240ms', animationFillMode: 'both' }}
              >
                <button
                  onClick={openEnrollModal}
                  className="group btn-gradient-primary text-white px-8 py-4 sm:px-10 sm:py-4 rounded-full font-body font-bold text-base sm:text-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/25 inline-flex items-center justify-center gap-2 min-h-[52px]"
                >
                  Enroll My Child
                  <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => navigate('/contact')}
                  className="group bg-white text-gray-800 px-8 py-4 sm:px-10 sm:py-4 rounded-full font-body font-bold text-base sm:text-lg hover:bg-gray-50 hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-md ring-1 ring-gray-200 inline-flex items-center justify-center gap-2 min-h-[52px]"
                >
                  Schedule a Tour
                  <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Trust badges */}
              <div
                className="flex flex-wrap items-center gap-2 sm:gap-3 mt-7 sm:mt-10 animate-fade-in-up"
                style={{ animationDelay: '320ms', animationFillMode: 'both' }}
              >
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm ring-1 ring-gray-100">
                  <MapPin size={14} className="text-secondary-pink flex-shrink-0" />
                  <span className="font-body font-bold text-xs text-gray-700">Ventnor City, NJ</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm ring-1 ring-gray-100">
                  <Shield size={14} className="text-secondary-green flex-shrink-0" />
                  <span className="font-body font-bold text-xs text-gray-700">Safe & Secure Campus</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm ring-1 ring-gray-100">
                  <Users size={14} className="text-secondary-blue flex-shrink-0" />
                  <span className="font-body font-bold text-xs text-gray-700">Est. 2010</span>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div
              className="relative mt-4 lg:mt-0 animate-fade-in-up"
              style={{ animationDelay: '200ms', animationFillMode: 'both' }}
            >
              <div className="group relative rounded-3xl overflow-hidden aspect-[4/3] ring-1 ring-gray-200 shadow-2xl shadow-gray-900/10 hover:shadow-3xl transition-shadow duration-500">
                <img
                  src="/feel-at-home.webp"
                  alt="Gan Izzy Preschool — feel at home"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

            </div>

          </div>
        </div>
      </section>

      <WaveDivider fromClass="bg-orange-50/30" toClass="fill-white" />
    </>
  );
}

// ─── 2. Program Highlights ────────────────────────────────────────────────────

const highlights = [
  { icon: Sparkles, label: 'Sensory Play & Bubbles', color: 'text-secondary-blue', bg: 'bg-secondary-blue/10', iconBg: 'bg-secondary-blue/20', ring: 'ring-secondary-blue/20' },
  { icon: Music, label: 'Music & Movement', color: 'text-secondary-pink', bg: 'bg-secondary-pink/10', iconBg: 'bg-secondary-pink/20', ring: 'ring-secondary-pink/20' },
  { icon: Palette, label: 'Messy Art Projects', color: 'text-secondary-yellow', bg: 'bg-secondary-yellow/10', iconBg: 'bg-secondary-yellow/20', ring: 'ring-secondary-yellow/20' },
  { icon: Heart, label: '1-on-1 Loving Care', color: 'text-primary', bg: 'bg-primary/10', iconBg: 'bg-primary/15', ring: 'ring-primary/20' },
  { icon: Trees, label: 'Outdoor Discovery', color: 'text-secondary-green', bg: 'bg-secondary-green/10', iconBg: 'bg-secondary-green/20', ring: 'ring-secondary-green/20' },
  { icon: Moon, label: 'Gentle Nap Routines', color: 'text-secondary-blue', bg: 'bg-secondary-blue/10', iconBg: 'bg-secondary-blue/20', ring: 'ring-secondary-blue/20' },
  { icon: Sun, label: 'Joyful Shabbat Parties', color: 'text-secondary-yellow', bg: 'bg-secondary-yellow/10', iconBg: 'bg-secondary-yellow/20', ring: 'ring-secondary-yellow/20' },
];

function ProgramHighlights() {
  return (
    <section className="border-t border-gray-100 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
            <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest whitespace-nowrap">
              Our Approach
            </p>
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-5 leading-tight tracking-tight">
            Learning Through{' '}
            <span className="text-primary">Play & Wonder</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Every day at Gan Izzy Preschool is thoughtfully designed to nurture your child's curiosity, confidence, and joyful connection to Jewish values.
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

// ─── 3. Meet the Staff ───────────────────────────────────────────────────────

const staff = [
  {
    name: 'Jess',
    role: 'Lead Teacher',
    room: 'Room 1 — Infants',
    image: '/jess.png',
    roomColor: 'bg-secondary-blue/10 text-secondary-blue ring-secondary-blue/20',
    accent: 'border-secondary-blue',
  },
  {
    name: 'Karly',
    role: 'Assistant Teacher',
    room: 'Room 1 — Infants',
    image: '/karly.png',
    roomColor: 'bg-secondary-blue/10 text-secondary-blue ring-secondary-blue/20',
    accent: 'border-secondary-blue',
  },
  {
    name: 'Valerie',
    role: 'Lead Teacher',
    room: 'Room 2 — Toddlers',
    image: '/valerie.png',
    roomColor: 'bg-secondary-pink/10 text-secondary-pink ring-secondary-pink/20',
    accent: 'border-secondary-pink',
  },
  {
    name: 'Alex',
    role: 'Assistant Teacher',
    room: 'Room 2 — Toddlers',
    image: '/alex.png',
    roomColor: 'bg-secondary-pink/10 text-secondary-pink ring-secondary-pink/20',
    accent: 'border-secondary-pink',
  },
  {
    name: 'Rabbi Avrohom',
    role: 'Head of Operations',
    room: null,
    image: '/rabbi-avrohom.png',
    roomColor: '',
    accent: 'border-secondary-green',
  },
  {
    name: 'Mendy & Mushky',
    role: 'Preschool Directors',
    room: null,
    image: '/mendy-mushky.png',
    roomColor: '',
    accent: 'border-primary',
  },
];

function MeetTheStaff() {
  return (
    <section className="border-t border-gray-100 px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 bg-gradient-to-b from-[#fffef7] to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
            <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest whitespace-nowrap">
              Our Team
            </p>
            <span className="flex-1 max-w-[80px] sm:max-w-[120px] h-px bg-gray-200" />
          </div>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 leading-tight tracking-tight">
            Meet Our{' '}
            <span className="text-primary">Caring Staff</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Warm, caring, and passionate — every member of our team is dedicated to making your child feel loved from day one.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {staff.map((member) => (
            <div
              key={member.name}
              className={`group relative bg-white rounded-2xl border-t-4 ${member.accent} ring-1 ring-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col`}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>

              <div className="px-3 pt-2.5 pb-4 flex flex-col gap-1">
                {member.room && (
                  <span className={`self-start font-body font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full ring-1 ${member.roomColor}`}>
                    {member.room}
                  </span>
                )}
                <h3 className="font-headline text-sm sm:text-base text-gray-900 leading-tight mt-0.5">
                  {member.name}
                </h3>
                <span className="font-body font-bold text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 5. Campus & Location ─────────────────────────────────────────────────────

const facilityPhotos = [
  {
    label: 'Campus by Chabad at the Shore',
    sublabel: 'Our beautiful home base',
    icon: Sun,
    url: '/preschool-campus.webp',
  },
  {
    label: 'Outdoor Courtyard',
    sublabel: 'Creative spaces for every child',
    icon: Wind,
    url: '/outdoors.webp',
  },
  {
    label: 'Shore Location',
    sublabel: 'Minutes from the Atlantic',
    icon: Waves,
    url: '/shore-location.jpg',
  },
];

function CampusLocation() {
  const [featuredPhoto, ...otherPhotos] = facilityPhotos;
  const FeaturedIcon = featuredPhoto.icon;

  return (
    <>
      <section className="relative py-12 sm:py-20 lg:py-28 px-4 sm:px-8 lg:px-12 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-20 right-0 w-80 h-80 bg-secondary-blue/[0.05] rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-yellow/[0.05] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest mb-3">
              Our Home
            </p>
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-3 sm:mb-5 leading-tight tracking-tight">
              Our Beautiful Campus at the{' '}
              <span className="text-primary">Chabad Chai Center</span>
            </h2>
            <p className="font-body text-sm sm:text-base lg:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Located in the heart of Ventnor City, just minutes from the beach. A secure, vibrant environment designed for joyful early learning.
            </p>
          </div>

          {/* Mobile: stacked full-width cards */}
          <div className="flex flex-col gap-3 sm:hidden mb-8">
            <div className="group relative w-full aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-lg">
              <img
                src={featuredPhoto.url}
                alt={featuredPhoto.label}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 ring-1 ring-white/30">
                    <FeaturedIcon className="text-white w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="font-headline text-sm text-white leading-tight">{featuredPhoto.label}</p>
                    <p className="font-body text-xs text-white/70">{featuredPhoto.sublabel}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {otherPhotos.map((photo) => (
                <div key={photo.label} className="group relative aspect-square rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-md">
                  <img
                    src={photo.url}
                    alt={photo.label}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 ring-1 ring-white/30">
                        <photo.icon className="text-white w-3 h-3" />
                      </div>
                      <p className="font-headline text-xs text-white leading-tight">{photo.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet: 3-col equal row */}
          <div className="hidden sm:grid lg:hidden grid-cols-3 gap-4 mb-10">
            {facilityPhotos.map((photo) => (
              <div key={photo.label} className="group relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                <img
                  src={photo.url}
                  alt={photo.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 ring-1 ring-white/30">
                      <photo.icon className="text-white w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-headline text-sm text-white leading-tight">{photo.label}</p>
                      <p className="font-body text-xs text-white/70">{photo.sublabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: hero mosaic */}
          <div className="hidden lg:grid grid-cols-3 grid-rows-2 gap-4 h-[560px] mb-14">
            <div className="group relative col-span-2 row-span-2 rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-xl hover:shadow-2xl hover:scale-[1.01] transition-all duration-500 cursor-pointer">
              <img
                src={featuredPhoto.url}
                alt={featuredPhoto.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 ring-1 ring-white/30">
                    <FeaturedIcon className="text-white w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-headline text-xl text-white leading-tight drop-shadow-sm">{featuredPhoto.label}</p>
                    <p className="font-body text-sm text-white/70">{featuredPhoto.sublabel}</p>
                  </div>
                </div>
              </div>
            </div>
            {otherPhotos.map((photo) => (
              <div key={photo.label} className="group relative col-span-1 row-span-1 rounded-3xl overflow-hidden ring-1 ring-black/5 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 cursor-pointer">
                <img
                  src={photo.url}
                  alt={photo.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 ring-1 ring-white/30">
                      <photo.icon className="text-white w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-headline text-base text-white leading-tight drop-shadow-sm">{photo.label}</p>
                      <p className="font-body text-xs text-white/70">{photo.sublabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <WaveDivider fromClass="bg-white" toClass="fill-amber-50/50" />
    </>
  );
}

// ─── 6. Safety & Logistics wrapper ───────────────────────────────────────────

function SafetyWrapper() {
  return (
    <>
      <div className="bg-amber-50/50">
        <SafetyLogistics />
      </div>
      <WaveDivider fromClass="bg-amber-50/50" toClass="fill-white" />
    </>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function AboutUs() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        <AboutHero />
        <ProgramHighlights />
        <MeetTheStaff />
        <CampusLocation />
        <SafetyWrapper />
        <Reviews />
        <PhotoGallery />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default AboutUs;
