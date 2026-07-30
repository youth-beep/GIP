import { Calendar, Clock, MapPin, DollarSign } from 'lucide-react';
import { navigate } from '../utils/navigate';

const facts = [
  {
    icon: Calendar,
    value: 'Year-Round',
    label: 'School Year 2026-2027',
    color: 'text-secondary-blue',
    bg: 'bg-secondary-blue/10',
    ring: 'ring-secondary-blue/20',
  },
  {
    icon: Clock,
    value: '7:30 AM – 5:30 PM',
    label: 'Extended care available',
    color: 'text-secondary-green',
    bg: 'bg-secondary-green/10',
    ring: 'ring-secondary-green/20',
  },
  {
    icon: MapPin,
    value: 'CGI Campus',
    label: 'Safe location',
    color: 'text-secondary-pink',
    bg: 'bg-secondary-pink/10',
    ring: 'ring-secondary-pink/20',
  },
  {
    icon: DollarSign,
    value: 'View Rates',
    label: 'Flexible options',
    color: 'text-primary',
    bg: 'bg-primary/10',
    ring: 'ring-primary/20',
    isLink: true,
  },
];

export default function FastFacts() {
  return (
    <section className="relative py-10 sm:py-14 lg:py-16 px-4 sm:px-8 lg:px-12 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Decorative accent glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-20 left-1/4 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 w-60 h-60 bg-secondary-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="group text-center flex flex-col items-center"
            >
              <div
                className={`${fact.bg} w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 ring-1 ${fact.ring} group-hover:scale-110 transition-transform duration-300`}
              >
                <fact.icon className={`${fact.color} w-6 h-6 sm:w-7 sm:h-7`} />
              </div>

              {fact.isLink ? (
                <a
                  href="/dates-rates"
                  onClick={(e) => { e.preventDefault(); navigate('/dates-rates'); }}
                  className="font-headline text-xl sm:text-2xl lg:text-3xl text-white mb-1 hover:text-primary transition-colors duration-200 underline decoration-primary/30 underline-offset-4 hover:decoration-primary/60"
                >
                  {fact.value}
                </a>
              ) : (
                <p className="font-headline text-xl sm:text-2xl lg:text-3xl text-white mb-1 leading-tight">
                  {fact.value}
                </p>
              )}

              <p className="font-body text-xs sm:text-sm text-gray-400">
                {fact.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
