import { Shield, Heart, Users, Award } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    title: 'Chabad at the Shore Campus',
    description: 'A welcoming, secure facility designed for little ones',
    color: 'bg-secondary-blue',
    softBg: 'bg-secondary-blue/5',
    lightCircle: 'bg-secondary-blue/10',
    ringColor: 'ring-secondary-blue/15',
    image: '/campus.webp',
  },
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Trained staff & medical protocols in place',
    color: 'bg-secondary-pink',
    softBg: 'bg-secondary-pink/5',
    lightCircle: 'bg-secondary-pink/10',
    ringColor: 'ring-secondary-pink/15',
    image: '/health.jpg',
  },
  {
    icon: Users,
    title: 'Vetted Team',
    description: 'Background-checked, experienced counselors',
    color: 'bg-secondary-green',
    softBg: 'bg-secondary-green/5',
    lightCircle: 'bg-secondary-green/10',
    ringColor: 'ring-secondary-green/15',
    image: '/vatted-team.webp',
  },
  {
    icon: Award,
    title: 'Exceptional Care',
    description: 'Small ratios, big attention to every child',
    color: 'bg-secondary-yellow',
    iconColor: 'text-gray-800',
    softBg: 'bg-secondary-yellow/5',
    lightCircle: 'bg-secondary-yellow/10',
    ringColor: 'ring-secondary-yellow/15',
    image: '/extanded-care.webp',
  },
];

export default function SafetyLogistics({ imageOverrides }: { imageOverrides?: Record<string, string> } = {}) {
  const resolvedBadges = badges.map((b) => ({
    ...b,
    image: imageOverrides?.[b.title] ?? b.image,
  }));
  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest mb-3">
            Safety & Trust
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-5 leading-tight tracking-tight">
            Safe, Secure, and Ready for{' '}
            <span className="text-primary">Your Child</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know, at a glance.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {resolvedBadges.map((badge) => (
            badge.image ? (
              <div
                key={badge.title}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden ring-1 ring-black/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
                style={{ minHeight: '280px' }}
              >
                {/* Background image */}
                <img
                  src={badge.image}
                  alt={badge.title}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />

                {/* Icon badge — top-left */}
                <div className="absolute top-4 left-4 z-10">
                  <div className={`${badge.color} w-10 h-10 rounded-full flex items-center justify-center shadow-lg`}>
                    <badge.icon className={`${badge.iconColor ?? 'text-white'} w-5 h-5`} />
                  </div>
                </div>

                {/* Content — bottom */}
                <div className="relative z-10 flex flex-col items-center justify-end h-full p-4 sm:p-6" style={{ minHeight: '280px' }}>
                  <h3 className="font-headline text-lg sm:text-xl lg:text-2xl text-white mb-1 sm:mb-2 drop-shadow">
                    {badge.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-white/85 leading-relaxed drop-shadow">
                    {badge.description}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={badge.title}
                className={`group ${badge.softBg} rounded-2xl sm:rounded-3xl p-4 sm:p-7 lg:p-8 ring-1 ${badge.ringColor} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center`}
              >
                {/* Layered circle icon */}
                <div className={`${badge.lightCircle} w-20 h-20 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center mb-5 sm:mb-6 mx-auto group-hover:scale-105 transition-transform duration-300`}>
                  <div className={`${badge.color} w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-md`}>
                    <badge.icon className={`${badge.iconColor ?? 'text-white'} w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8`} />
                  </div>
                </div>

                <h3 className="font-headline text-lg sm:text-xl lg:text-2xl text-gray-900 mb-2 sm:mb-3">
                  {badge.title}
                </h3>

                <p className="font-body text-sm sm:text-base text-gray-500 leading-relaxed">
                  {badge.description}
                </p>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
