import { Phone, Mail, MapPin } from 'lucide-react';
import { navigate } from '../utils/navigate';

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel');
  if (isExternal) {
    return (
      <a href={href} className="font-body text-sm text-gray-400 hover:text-white hover:pl-1 transition-all duration-200 block">
        {children}
      </a>
    );
  }
  return (
    <a
      href={href}
      onClick={(e) => { e.preventDefault(); navigate(href); }}
      className="font-body text-sm text-gray-400 hover:text-white hover:pl-1 transition-all duration-200 block"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-secondary-yellow to-secondary-blue" />

      <div className="pt-14 sm:pt-16 pb-10 sm:pb-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* ── Main grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 mb-12 sm:mb-14">

            {/* Column 1 — Camp Info */}
            <div>
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); navigate('/'); }}
                className="inline-block mb-4"
              >
                <img src="/GanIzzyPreschoolLogo.webp" alt="Gan Izzy" className="h-12 sm:h-14 w-auto opacity-90" />
              </a>
              <p className="font-body text-sm text-gray-400 leading-relaxed mb-5">
                More than a summer camp.<br />A summer family.
              </p>

              {/* Contact */}
              <div className="space-y-2.5 mb-6">
                <a href="tel:+16092013521" className="flex items-center gap-2.5 group">
                  <Phone size={13} className="text-primary/70 flex-shrink-0 group-hover:text-primary transition-colors duration-200" />
                  <span className="font-body text-sm text-gray-400 group-hover:text-white transition-colors duration-200">609-201-3521</span>
                </a>
                <a href="mailto:mushky@chabadac.com" className="flex items-center gap-2.5 group">
                  <Mail size={13} className="text-primary/70 flex-shrink-0 group-hover:text-primary transition-colors duration-200" />
                  <span className="font-body text-sm text-gray-400 group-hover:text-white transition-colors duration-200">mushky@chabadac.com</span>
                </a>
                <div className="flex items-start gap-2.5">
                  <MapPin size={13} className="text-primary/70 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-sm text-gray-400 leading-snug">6605 Atlantic Ave,<br />Ventnor City, NJ 08406</span>
                </div>
              </div>

              {/* Social links hidden for now */}
            </div>

            {/* Column 2 — Quick Links */}
            <div>
              <h4 className="font-body font-bold text-xs uppercase tracking-widest text-gray-300 mb-5">Quick Links</h4>
              <ul className="space-y-3">
                <li><FooterLink href="/">Home</FooterLink></li>
                <li><FooterLink href="/about">About Us</FooterLink></li>
                <li><FooterLink href="/dates-rates">Rates</FooterLink></li>
                <li><FooterLink href="/contact">Contact Us</FooterLink></li>
              </ul>
            </div>

            {/* Column 3 — Our Programs */}
            <div>
              <h4 className="font-body font-bold text-xs uppercase tracking-widest text-gray-300 mb-5">Our Programs</h4>
              <ul className="space-y-3">
                <li><FooterLink href="/programs/preschool">Gan Izzy Preschool</FooterLink></li>
                <li><FooterLink href="/programs/extended-care">Extended Care</FooterLink></li>
              </ul>
            </div>

            {/* Column 4 — Parent Resources */}
            <div>
              <h4 className="font-body font-bold text-xs uppercase tracking-widest text-gray-300 mb-5">Parent Resources</h4>
              <ul className="space-y-3">
                <li><FooterLink href="/parents">Parent Resources</FooterLink></li>
                {/* Calendar hidden for now — will return as 2026-2027 season */}
                {/* <li><FooterLink href="/calendar">Camp Calendars 2026-2027</FooterLink></li> */}
                <li><FooterLink href="/gallery">Photo Galleries</FooterLink></li>
                <li><FooterLink href="https://docs.google.com/document/d/0B6Wc_tLSkDlqbzBNZkF5M3o2Qlk/edit?usp=sharing&ouid=103594364197910165170&resourcekey=0-OA-h7VmOBMM-x9GfTQrhJw&rtpof=true&sd=true">Scholarships</FooterLink></li>
              </ul>
            </div>

          </div>

          {/* ── Bottom bar ── */}
          <div className="border-t border-gray-800 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-xs text-gray-500">
              &copy; 2026 Gan Izzy. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="/privacy"
                onClick={(e) => { e.preventDefault(); navigate('/privacy'); }}
                className="font-body text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <span className="text-gray-700 text-xs">|</span>
              <a
                href="/terms"
                onClick={(e) => { e.preventDefault(); navigate('/terms'); }}
                className="font-body text-xs text-gray-500 hover:text-gray-300 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
