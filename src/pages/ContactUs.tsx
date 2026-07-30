import { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight, Copy, Check, Calendar } from 'lucide-react';
import Navigation from '../components/Navigation';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

// ─── 1. Hero ──────────────────────────────────────────────────────────────────

function ContactHero() {
  return (
    <section className="relative overflow-hidden min-h-[55vh] flex items-center bg-gradient-to-br from-slate-50 via-blue-50/40 to-teal-50/60 px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(14,165,233,0.08), transparent)' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-0 right-0 w-3/4 h-full bg-gradient-to-bl from-secondary-blue/10 via-primary/[0.03] to-transparent pointer-events-none"
        style={{ clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 5% 100%)' }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 -right-20 w-56 h-56 sm:w-80 sm:h-80 bg-secondary-blue/[0.12] rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-green/[0.08] rounded-full blur-3xl" />
        <div className="absolute top-1/4 left-[8%] w-3 h-3 bg-secondary-yellow/60 rounded-full hidden sm:block animate-float-slow" />
        <div className="absolute top-1/3 right-[10%] w-4 h-4 bg-primary/25 rounded-full hidden sm:block animate-float" />
        <div className="absolute bottom-1/3 right-[22%] w-5 h-5 bg-secondary-blue/30 rounded-full hidden sm:block animate-float-slow" />
      </div>
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative w-full max-w-3xl mx-auto text-center animate-fade-in-up">
        <div className="flex justify-center mb-5 sm:mb-7">
          <span className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary uppercase tracking-widest bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full ring-2 ring-primary/25 shadow-md border border-white/60 min-h-[44px]">
            <Calendar size={16} className="flex-shrink-0" />
            Come See For Yourself
          </span>
        </div>

        <h1 className="font-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 mb-5 sm:mb-7 leading-[0.95] tracking-tight">
          Schedule a{' '}
          <span className="text-gradient-primary" style={{ textShadow: '0 2px 20px rgba(243,39,48,0.15)' }}>
            Tour
          </span>
        </h1>

        <p className="font-body text-base sm:text-lg lg:text-xl text-gray-600 mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          The best way to experience Gan Izzy Preschool is in person. Come meet our warm staff, see our classrooms, and feel the love that fills every corner. Call or email us below to schedule your personal tour — we'd love to show you around.
        </p>

        <a
          href="#contact-info"
          className="group btn-gradient-primary text-white inline-flex items-center gap-2 px-8 py-4 sm:px-10 sm:py-4 rounded-full font-body font-bold text-base sm:text-lg hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-lg shadow-primary/30 min-h-[52px]"
        >
          Get in Touch
          <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}

// ─── 2. Contact Info ──────────────────────────────────────────────────────────

const EMAIL = 'mushky@chabadac.com';

function ContactInfo() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select text
    }
  };

  const cards = [
    {
      icon: MapPin,
      label: 'Location',
      value: '21 S Troy Ave',
      sub: 'Ventnor City, NJ 08406',
      accent: 'bg-secondary-pink/10',
      iconColor: 'text-secondary-pink',
      iconBg: 'bg-secondary-pink/15',
      ring: 'ring-secondary-pink/20',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '609-201-3521',
      sub: 'Mon – Fri, 9 AM – 5 PM',
      accent: 'bg-secondary-blue/10',
      iconColor: 'text-secondary-blue',
      iconBg: 'bg-secondary-blue/15',
      ring: 'ring-secondary-blue/20',
    },
  ];

  return (
    <section id="contact-info" className="border-t border-gray-100 px-4 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-center font-body font-bold text-gray-400 uppercase tracking-widest text-xs mb-10">
          Find Us
        </p>

        {/* Email hero card */}
        <div className="bg-gradient-to-br from-primary/5 via-white to-secondary-blue/5 ring-1 ring-primary/15 rounded-3xl px-8 py-10 sm:px-12 sm:py-12 mb-8 shadow-sm text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center mx-auto mb-5 shadow-sm">
            <Mail size={26} className="text-primary" />
          </div>
          <p className="font-body font-bold text-xs text-gray-400 uppercase tracking-widest mb-2">Email Us</p>
          <p className="font-body text-gray-500 text-sm mb-5 max-w-xs mx-auto leading-relaxed">
            Send us a message and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="font-headline text-xl sm:text-2xl text-gray-900 hover:text-primary transition-colors duration-200"
            >
              {EMAIL}
            </a>
            <button
              onClick={copyEmail}
              aria-label="Copy email address"
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-body font-bold text-sm transition-all duration-200 ${
                copied
                  ? 'bg-secondary-green/15 text-secondary-green ring-1 ring-secondary-green/30'
                  : 'bg-gray-100 text-gray-500 hover:bg-primary/10 hover:text-primary ring-1 ring-gray-200'
              }`}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {/* Location & phone cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {cards.map(({ icon: Icon, label, value, sub, accent, iconColor, iconBg, ring }) => (
            <div
              key={label}
              className={`group flex flex-col items-center text-center ${accent} ring-1 ${ring} rounded-3xl px-6 py-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200`}
            >
              <div className={`w-14 h-14 rounded-2xl ${iconBg} ring-1 ${ring} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                <Icon size={22} className={iconColor} />
              </div>
              <p className="font-body font-bold text-[10px] text-gray-400 uppercase tracking-widest mb-1">
                {label}
              </p>
              <p className="font-body font-bold text-base text-gray-800 leading-snug mb-1">
                {value}
              </p>
              <p className="font-body text-sm text-gray-500 leading-snug">
                {sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── 3. Map ───────────────────────────────────────────────────────────────────

function MapSection() {
  return (
    <section className="border-t border-gray-100 px-4 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl overflow-hidden ring-1 ring-gray-200 shadow-sm" style={{ height: '420px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3085.902803873878!2d-74.4841356!3d39.3357876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0ed62a9cc9ffd%3A0x6dfb1dfe6c6b8745!2sCamp%20Gan%20Israel%20at%20the%20Shore!5e0!3m2!1sen!2sus!4v1778565799521!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Camp Gan Israel at the Shore - Google Maps"
          />
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        <ContactHero />
        <ContactInfo />
        <MapSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
