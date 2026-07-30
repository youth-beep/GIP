import { Heart, Smile } from 'lucide-react';

const differences = [
  {
    icon: Heart,
    iconImg: null,
    title: 'Warm Care',
    description: 'A safe, home-like space for your child.',
    image: '/warm-care.webp',
    gradient: 'from-black/60 via-black/20 to-transparent',
    iconBg: 'bg-rose-500',
    iconColor: 'text-white',
    tag: 'Community',
  },
  {
    icon: null,
    iconImg: '/magen-david.png',
    title: 'Jewish Values',
    description: 'Traditions through songs and sensory play.',
    image: '/jewish-values.webp',
    gradient: 'from-black/60 via-black/20 to-transparent',
    iconBg: 'bg-sky-500',
    iconColor: 'text-white',
    tag: 'Identity',
  },
  {
    icon: Smile,
    iconImg: null,
    title: 'Play & Growth',
    description: 'Hands-on play built for infants and toddlers.',
    image: '/play-growth.webp',
    gradient: 'from-black/60 via-black/20 to-transparent',
    iconBg: 'bg-amber-400',
    iconColor: 'text-gray-900',
    tag: 'Summer',
  },
];

export default function CGIDifference() {
  const [left, topRight, bottomRight] = differences;

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-25 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest mb-3">
            The CGI Difference
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-5 leading-tight tracking-tight">
            What Makes Gan Izzy...{' '}
            <span className="text-primary">Gan Izzy</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Where early learning meets loving care.
          </p>
        </div>

        {/* Collage grid — connected, same layout on all screen sizes */}
        <div className="flex flex-row h-[340px] sm:h-[520px] lg:h-[580px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl gap-1">

          {/* LEFT — large card */}
          <CollageCard
            item={left}
            className="h-full flex-1"
            roundedClass="rounded-none rounded-l-2xl sm:rounded-l-3xl"
          />

          {/* RIGHT — two stacked */}
          <div className="flex flex-col w-[42%] gap-1">
            <CollageCard
              item={topRight}
              className="flex-1"
              roundedClass="rounded-none rounded-tr-2xl sm:rounded-tr-3xl"
            />
            <CollageCard
              item={bottomRight}
              className="flex-1"
              roundedClass="rounded-none rounded-br-2xl sm:rounded-br-3xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

interface CollageCardProps {
  item: typeof differences[number];
  className?: string;
  roundedClass?: string;
}

function CollageCard({ item, className = '', roundedClass = '' }: CollageCardProps) {
  return (
    <div className={`group relative overflow-hidden ${roundedClass} ${className}`}>
      {/* Photo */}
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      {/* Dark vignette from bottom */}
      <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient}`} />

      {/* Tag */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 hidden sm:block">
        <span className="inline-block bg-black/30 backdrop-blur-sm text-white text-xs font-body font-semibold tracking-widest uppercase px-3 py-1 rounded-full ring-1 ring-white/20">
          {item.tag}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-3 sm:p-5 lg:p-6">
        <div className={`${item.iconBg} w-7 h-7 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center mb-2 sm:mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
          {item.iconImg
            ? <img src={item.iconImg} alt="" className="w-3.5 h-3.5 sm:w-4 sm:h-4 object-contain" />
            : item.icon && <item.icon className={`${item.iconColor} w-3.5 h-3.5 sm:w-4 sm:h-4`} />
          }
        </div>
        <h3 className="font-headline text-sm sm:text-2xl lg:text-3xl text-white leading-tight mb-0.5 sm:mb-1 drop-shadow-md">
          {item.title}
        </h3>
        <p className="font-body text-[10px] sm:text-sm text-white/80 leading-relaxed drop-shadow hidden sm:block">
          {item.description}
        </p>
      </div>
    </div>
  );
}
