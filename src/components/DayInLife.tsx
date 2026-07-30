import { useState } from 'react';
import {
  Baby, Music, Utensils, Moon, Sun, Star,
  Palette, Trees, Users, Clock,
} from 'lucide-react';

// Brand colors for 2 groups
const COLORS = ['#459afe', '#fe5f8d'];
// Light bg tints matching each color
const TINTS = ['#edf5ff', '#fff0f5'];

const ageGroups = [
  {
    name: 'Infants',
    range: '0–18 Months',
    schedule: [
      { time: '9:30 AM', activity: 'Welcome, Tummy Time & Gentle Play', icon: Baby },
      { time: '10:15 AM', activity: 'Morning Bottle/Feeding & Nap Time', icon: Moon },
      { time: '11:30 AM', activity: 'Sensory Play & Stroller Walks', icon: Trees },
      { time: '12:30 PM', activity: 'Lunch / Mid-Day Feeding', icon: Utensils },
      { time: '1:30 PM', activity: 'Afternoon Nap / Quiet Rest', icon: Moon },
      { time: '2:30 PM', activity: 'Wake Up, Music & Bubbles', icon: Music },
      { time: '3:00 PM', activity: 'Afternoon Feeding & Shabbat Party', icon: Star },
      { time: '3:30 PM', activity: 'Pickup', icon: Users },
    ],
  },
  {
    name: 'Toddlers',
    range: '18 Mo–2 Yrs',
    schedule: [
      { time: '9:30 AM', activity: 'Welcome & Free Play', icon: Sun },
      { time: '10:00 AM', activity: 'Morning Snack & Story Time', icon: Utensils },
      { time: '10:30 AM', activity: 'Circle Time & Music', icon: Music },
      { time: '11:15 AM', activity: 'Soft Play Zones & Messy Art', icon: Palette },
      { time: '12:00 PM', activity: 'Lunch Time', icon: Utensils },
      { time: '12:45 PM', activity: 'Nap Time / Quiet Rest', icon: Moon },
      { time: '2:30 PM', activity: 'Wake Up & Outdoor Toddler Playground', icon: Trees },
      { time: '3:00 PM', activity: 'Afternoon Snack & Shabbat Party', icon: Star },
      { time: '3:30 PM', activity: 'Pickup', icon: Users },
    ],
  },
];

export default function DayInLife() {
  const [selectedGroup, setSelectedGroup] = useState(0);
  const group = ageGroups[selectedGroup];
  const color = COLORS[selectedGroup];
  const tint = TINTS[selectedGroup];
  // Yellow tab needs dark text for readability
  const isDark = (hex: string) => hex === '#ffe700';

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden bg-white">
      {/* Subtle background blob that shifts with selected color */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.06] transition-colors duration-700"
          style={{ backgroundColor: color }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-3xl opacity-[0.06] transition-colors duration-700"
          style={{ backgroundColor: color }}
        />
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="font-body font-bold text-xs sm:text-sm text-primary uppercase tracking-widest mb-3">
            Daily Schedule
          </p>
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-gray-900 mb-4 sm:mb-5 leading-tight tracking-tight">
            What a Day in{' '}
            <span className="text-primary">Gan Izzy</span> Looks Like
          </h2>
          <p className="font-body text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Choose an age group to see how your child will experience a full, joy-filled day at camp.
          </p>
        </div>

        {/* Age group tabs */}
        <div role="tablist" aria-label="Age group schedule" className="flex flex-wrap gap-2 sm:gap-2.5 justify-center mb-8 sm:mb-10">
          {ageGroups.map((g, index) => {
            const c = COLORS[index];
            const active = selectedGroup === index;
            const darkText = isDark(c);
            return (
              <button
                key={g.name}
                role="tab"
                aria-selected={active}
                aria-controls={`schedule-panel-${index}`}
                id={`schedule-tab-${index}`}
                onClick={() => setSelectedGroup(index)}
                className="relative px-4 py-2 sm:px-5 rounded-full font-body font-bold text-sm transition-all duration-300 min-h-[44px]"
                style={
                  active
                    ? {
                        backgroundColor: c,
                        color: darkText ? '#1a1a1a' : '#ffffff',
                        boxShadow: `0 4px 14px ${c}55`,
                        transform: 'scale(1.06)',
                      }
                    : {
                        backgroundColor: '#f3f4f6',
                        color: '#6b7280',
                      }
                }
              >
                <span className="block leading-tight">{g.name}</span>
                <span
                  className="block text-[10px] font-normal"
                  style={{ opacity: active ? 0.75 : 0.6 }}
                >
                  {g.range}
                </span>
              </button>
            );
          })}
        </div>

        {/* Schedule card */}
        <div
          role="tabpanel"
          id={`schedule-panel-${selectedGroup}`}
          aria-labelledby={`schedule-tab-${selectedGroup}`}
          className="bg-white rounded-2xl sm:rounded-3xl ring-1 ring-gray-100 shadow-xl overflow-hidden"
        >
          {/* Card header */}
          <div
            className="px-5 py-4 sm:px-8 sm:py-5 flex items-center gap-3 transition-colors duration-500"
            style={{ backgroundColor: color }}
          >
            <Clock
              className="w-5 h-5 flex-shrink-0"
              style={{ color: isDark(color) ? '#1a1a1a' : 'rgba(255,255,255,0.85)' }}
            />
            <p
              className="font-headline text-lg sm:text-xl font-bold leading-tight"
              style={{ color: isDark(color) ? '#1a1a1a' : '#ffffff' }}
            >
              {group.name}{' '}
              <span className="font-normal opacity-75 text-base">— {group.range}</span>
            </p>
          </div>

          {/* Timeline */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="space-y-2 sm:space-y-3">
              {group.schedule.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.time}
                    className="flex items-center gap-3 sm:gap-4 group/row"
                  >
                    {/* Icon badge */}
                    <div
                      className="flex-shrink-0 w-11 h-11 sm:w-[48px] sm:h-[48px] rounded-xl flex items-center justify-center shadow-md group-hover/row:scale-110 transition-transform duration-200"
                      style={{ backgroundColor: color }}
                    >
                      <Icon
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        style={{ color: isDark(color) ? '#1a1a1a' : '#ffffff' }}
                      />
                    </div>

                    {/* Row content */}
                    <div
                      className="flex-1 flex flex-col sm:flex-row sm:items-center sm:gap-4 rounded-xl px-4 py-3 sm:py-3.5 ring-1 group-hover/row:shadow-md transition-shadow duration-200"
                      style={{
                        backgroundColor: tint,
                        borderColor: `${color}33`,
                        borderWidth: '1px',
                        borderStyle: 'solid',
                      }}
                    >
                      <span
                        className="font-body font-bold text-xs sm:text-sm whitespace-nowrap mb-0.5 sm:mb-0 sm:w-[90px] flex-shrink-0"
                        style={{ color }}
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
