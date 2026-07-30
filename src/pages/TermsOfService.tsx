import { Shield } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const sections = [
  {
    number: '1',
    title: 'Enrollment & Payment',
    items: [
      'Registration is confirmed only upon completion of the online "Additional Info" form, receipt of payment and registration confirmation from our youth directors (besides the prompted email that is sent upon form submissions).',
      'Tuition must be paid in full or according to the agreed payment plan before the start of camp.',
      'Sibling & Full Program Discounts are applied after confirmation by our office and will be refunded to your original payment method or deducted from your balance.',
    ],
  },
  {
    number: '2',
    title: 'Cancellation & Refunds',
    items: [
      'Cancellations made before June 10 will receive a full refund, minus a $50 administrative fee.',
      'Cancellations after June 10 are non-refundable, except in cases of verified medical emergencies.',
      'Camp fees are non-refundable for absences, late arrivals, or early withdrawals.',
    ],
  },
  {
    number: '3',
    title: 'Health & Safety',
    items: [
      'All campers must submit updated health forms and emergency contact details before the first day.',
      'If your child is feeling unwell or has a contagious condition, please keep them home to protect others.',
      'In case of illness or injury during camp, we will contact the parent or guardian immediately.',
    ],
  },
  {
    number: '4',
    title: 'Behavior & Dismissal',
    items: [
      'We strive to create a warm, inclusive space. Campers are expected to show respect, kindness, and cooperation.',
      'Repeated behavioral issues or violations of safety policies may result in temporary or permanent dismissal without refund.',
      'Serious incidents (physical harm, bullying, etc.) will be addressed swiftly and responsibly.',
    ],
  },
  {
    number: '5',
    title: 'Personal Belongings',
    items: [
      'Camp is not responsible for any lost, damaged, or stolen items.',
      'Please label all belongings clearly. We recommend leaving valuables at home.',
      'A Lost & Found will be available throughout the summer.',
    ],
  },
  {
    number: '6',
    title: 'Photos & Media',
    items: [
      'We may photograph or video camp activities for promotional or parent updates.',
      'By enrolling, you grant permission to use these images unless you submit a written opt-out request.',
      'Media may appear on our website, newsletters, or social channels (no names are published without consent).',
    ],
  },
  {
    number: '7',
    title: 'Activities & Scheduling',
    items: [
      'Camp schedules, trips, and activities may change due to weather or unforeseen circumstances.',
      'We will do our best to notify parents of any significant changes in advance.',
      'Our pre-camp "Adventure Week" and themed weeks will be communicated with detailed updates.',
    ],
  },
  {
    number: '8',
    title: 'Communication',
    items: [
      'We use email, text, and WhatsApp for important updates, schedule changes, and daily highlights.',
      'Please ensure we have an up-to-date email and mobile number.',
      'Questions? Reach out to us anytime at Youth@chabadac.com.',
    ],
  },
  {
    number: '9',
    title: 'Liability Waiver',
    items: [
      'By enrolling, you acknowledge and accept the inherent risks of participation in physical and group activities.',
      'You release Camp Gan Izzy AC and its staff from liability for injuries, illnesses, or property damage, except in cases of gross negligence.',
    ],
  },
  {
    number: '10',
    title: 'Modifications',
    items: [
      'We reserve the right to update these terms or policies at any time. Changes will be posted to this page.',
    ],
  },
];

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-50 via-blue-50/30 to-white px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 font-body font-bold text-sm text-primary uppercase tracking-widest bg-white/90 px-5 py-2.5 rounded-full ring-2 ring-primary/25 shadow-sm">
                <Shield size={15} />
                Legal
              </span>
            </div>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4 tracking-tight leading-tight">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="font-body text-gray-500 text-sm mb-1">Last updated: May 20, 2025</p>
            <p className="font-body text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              Welcome to Gan Izzy AC! We're excited to have your family join us for an unforgettable summer. Please take a moment to review the following terms and policies to ensure a smooth, safe, and joyful camp experience for all.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto space-y-10">
            {sections.map((section) => (
              <div key={section.number} className="border-l-4 border-primary/20 pl-6 sm:pl-8">
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 ring-1 ring-primary/20 flex items-center justify-center font-body font-bold text-xs text-primary mt-0.5">
                    {section.number}
                  </span>
                  <h2 className="font-headline text-xl sm:text-2xl text-gray-900 leading-snug">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-2.5 ml-10">
                  {section.items.map((item, i) => (
                    <li key={i} className="font-body text-sm sm:text-base text-gray-600 leading-relaxed flex gap-2">
                      <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-primary/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-primary/5 ring-1 ring-primary/15 rounded-2xl px-6 py-6 mt-10">
              <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed text-center">
                Thank you for partnering with us to make this summer meaningful, safe, and joyful for every camper!
              </p>
            </div>

            <p className="font-body text-sm text-gray-400 text-center pt-2">
              Questions? Contact us at{' '}
              <a href="mailto:Youth@chabadac.com" className="text-primary hover:underline">
                Youth@chabadac.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
