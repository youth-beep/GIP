import { Baby, Footprints, Sun } from 'lucide-react';
import { navigate } from '../utils/navigate';

const programs = [
  {
    name: 'Infants',
    ages: 'Ages 0–16 Months',
    href: '/programs/preschool',
    borderColor: 'border-secondary-pink',
    iconBg: 'bg-secondary-pink',
    icon: Baby,
    description: 'Loving, gentle care for our youngest campers',
    image: '/GanIzzyPreschoolRoom2.webp',
    bgHex: '#fff1f2',
  },
  {
    name: 'Toddlers',
    ages: 'Ages 16–36 Months',
    href: '/programs/toddlers',
    borderColor: 'border-secondary-blue',
    iconBg: 'bg-secondary-blue',
    icon: Footprints,
    description: 'Active, hands-on fun for curious toddlers',
    image: '/GanIzzyPreschoolRoom1.webp',
    bgHex: '#eff6ff',
  },
  {
    name: 'Extended Care',
    ages: 'All Ages',
    href: '/programs/extended-care',
    borderColor: 'border-secondary-yellow',
    iconBg: 'bg-secondary-yellow',
    iconColor: 'text-gray-800',
    icon: Sun,
    description: 'Before and after camp care options',
    image: '/extended-care.webp',
    bgHex: '#fffbeb',
  },
];

export default function AgePrograms() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-30 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest mb-3">
            Our Programs
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-5 leading-tight tracking-tight">
            Find the Perfect Fit for Your{' '}
            <span className="text-primary">Child's Age</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Each age group enjoys a program built just for them — with the right mix of fun, care, and growth.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6">
          {programs.map((program) => (
            <a
              key={program.name}
              href={program.href}
              onClick={(e) => { e.preventDefault(); navigate(program.href); }}
              className={`group relative rounded-2xl sm:rounded-3xl border-t-4 ${program.borderColor} shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 cursor-pointer overflow-hidden w-[calc(50%-8px)] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)] xl:w-[calc(25%-18px)] flex flex-col [&:hover_img]:scale-[1.06]`}
            >
              {/* Image */}
              <div className="relative h-52 sm:h-56 flex-shrink-0 overflow-hidden">
                <img
                  src={program.image}
                  alt={`${program.name} program at Camp Gan Israel`}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                  style={{ background: `linear-gradient(to top, ${program.bgHex}, transparent)` }}
                />
              </div>

              {/* Content */}
              <div className="flex-1 px-4 sm:px-5 pt-3 pb-5 sm:pb-6" style={{ backgroundColor: program.bgHex }}>
                <div className={`${program.iconBg} w-11 h-11 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <program.icon className={program.iconColor ?? 'text-white'} size={20} />
                </div>

                <h3 className="font-headline text-base sm:text-xl text-gray-900 mb-1.5 leading-tight">
                  {program.name}
                </h3>

                <span className="inline-flex items-center font-body font-bold text-primary text-xs mb-2.5 bg-primary/10 px-2.5 py-0.5 rounded-full ring-1 ring-primary/20">
                  {program.ages}
                </span>

                <p className="font-body text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {program.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
