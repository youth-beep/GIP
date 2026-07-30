import { Lock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const sections = [
  {
    number: '1',
    title: 'Information We Collect',
    items: [
      'Registration information: full name, date of birth, address, and emergency contact details for each camper.',
      'Parent/guardian information: name, email address, phone number, and billing address.',
      'Health information: medical history, allergies, medications, and immunization records as required for camp participation.',
      'Payment information: processed securely through our payment provider; we do not store full credit card numbers.',
      'Photos and videos taken during camp activities, as described in our Terms of Service.',
    ],
  },
  {
    number: '2',
    title: 'How We Use Your Information',
    items: [
      'To enroll and manage your child\'s participation in camp programs.',
      'To communicate important updates, schedule changes, and camp highlights.',
      'To process payments and apply applicable discounts.',
      'To ensure the health and safety of all campers and staff.',
      'To improve our programs and services.',
      'We do not sell, rent, or trade your personal information to third parties.',
    ],
  },
  {
    number: '3',
    title: 'How We Share Your Information',
    items: [
      'With camp staff who need it to care for your child (counselors, health staff, directors).',
      'With service providers who help us operate (payment processors, communication platforms) under strict confidentiality agreements.',
      'With emergency services or medical professionals in the event of a health emergency.',
      'When required by law or to protect the safety of campers and staff.',
    ],
  },
  {
    number: '4',
    title: 'Data Security',
    items: [
      'We use industry-standard security measures to protect your personal information.',
      'Access to sensitive data is restricted to authorized personnel only.',
      'Health and payment data is stored using encrypted, secure systems.',
      'While we take reasonable precautions, no system is 100% secure. Please contact us immediately if you suspect any unauthorized use of your information.',
    ],
  },
  {
    number: '5',
    title: 'Children\'s Privacy',
    items: [
      'We collect information about minors only as part of the camp registration process.',
      'All data relating to children under 13 is collected with the knowledge and consent of a parent or guardian.',
      'We do not publish the names of minors alongside any photos or videos without explicit parental consent.',
    ],
  },
  {
    number: '6',
    title: 'Photos & Media',
    items: [
      'Photos and videos may be used on our website, social media, or newsletters to share the camp experience.',
      'No child\'s full name is published alongside images without written parental consent.',
      'You may opt out of media use at any time by submitting a written request to our office.',
    ],
  },
  {
    number: '7',
    title: 'Data Retention',
    items: [
      'We retain registration and health records for the duration required by applicable law and best practices for youth organizations.',
      'Payment records are retained as required for accounting and legal purposes.',
      'You may request deletion of your personal data at any time, subject to legal retention requirements.',
    ],
  },
  {
    number: '8',
    title: 'Your Rights',
    items: [
      'You have the right to access, correct, or request deletion of your personal information.',
      'You may opt out of non-essential communications at any time.',
      'To exercise any of these rights, contact us at Youth@chabadac.com.',
    ],
  },
  {
    number: '9',
    title: 'Third-Party Links',
    items: [
      'Our website may contain links to third-party sites (e.g., social media). We are not responsible for their privacy practices.',
      'We encourage you to review the privacy policies of any external sites you visit.',
    ],
  },
  {
    number: '10',
    title: 'Updates to This Policy',
    items: [
      'We may update this Privacy Policy from time to time. Changes will be posted to this page with a revised "Last Updated" date.',
      'Continued use of our services after changes constitutes acceptance of the updated policy.',
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative bg-gradient-to-br from-slate-50 via-teal-50/30 to-white px-4 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center gap-2 font-body font-bold text-sm text-secondary-blue uppercase tracking-widest bg-white/90 px-5 py-2.5 rounded-full ring-2 ring-secondary-blue/25 shadow-sm">
                <Lock size={15} />
                Legal
              </span>
            </div>
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4 tracking-tight leading-tight">
              Privacy <span className="text-secondary-blue">Policy</span>
            </h1>
            <p className="font-body text-gray-500 text-sm mb-1">Last updated: May 20, 2025</p>
            <p className="font-body text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
              At Gan Izzy AC, we take the privacy of your family seriously. This policy explains what information we collect, how we use it, and how we protect it.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="px-4 py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-3xl mx-auto space-y-10">
            {sections.map((section) => (
              <div key={section.number} className="border-l-4 border-secondary-blue/20 pl-6 sm:pl-8">
                <div className="flex items-start gap-3 mb-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-secondary-blue/10 ring-1 ring-secondary-blue/20 flex items-center justify-center font-body font-bold text-xs text-secondary-blue mt-0.5">
                    {section.number}
                  </span>
                  <h2 className="font-headline text-xl sm:text-2xl text-gray-900 leading-snug">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-2.5 ml-10">
                  {section.items.map((item, i) => (
                    <li key={i} className="font-body text-sm sm:text-base text-gray-600 leading-relaxed flex gap-2">
                      <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full bg-secondary-blue/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-secondary-blue/5 ring-1 ring-secondary-blue/15 rounded-2xl px-6 py-6 mt-10">
              <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed text-center">
                We are committed to maintaining the trust you place in us. Your family's privacy matters to us.
              </p>
            </div>

            <p className="font-body text-sm text-gray-400 text-center pt-2">
              Questions? Contact us at{' '}
              <a href="mailto:Youth@chabadac.com" className="text-secondary-blue hover:underline">
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
