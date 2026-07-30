import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { navigate } from '../utils/navigate';
import { openEnrollModal } from '../utils/enrollModal';

const programLinks = [
  { href: '/programs/preschool', label: 'Infants (0–16 Months)' },
  { href: '/programs/toddlers', label: 'Toddlers (16–36 Months)' },
  { href: '/programs/extended-care', label: 'Extended Care' },
];

const parentLinks = [
  // Calendar hidden for now — will return as 2026-2027 season
  // { href: '/calendar', label: 'Camp Calendars 2026-2027' },
  { href: 'https://drive.google.com/file/d/1saydFni2WAAskhCZ02SqnOEz6NNU29Gs/view?usp=sharing', label: 'Preschool Welcome Packet', external: true },
  { href: '/gallery', label: 'Photo Galleries' },
  { href: 'https://docs.google.com/document/d/0B6Wc_tLSkDlqbzBNZkF5M3o2Qlk/edit?usp=sharing&ouid=103594364197910165170&resourcekey=0-OA-h7VmOBMM-x9GfTQrhJw&rtpof=true&sd=true', label: 'Frankel/Schwartz Scholarship Fund', external: true },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [parentsOpen, setParentsOpen] = useState(false);
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false);
  const [mobileParentsOpen, setMobileParentsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const stickyWrapperRef = useRef<HTMLDivElement>(null);
  const [drawerTop, setDrawerTop] = useState(83);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateDrawerTop = () => {
      if (stickyWrapperRef.current) {
        setDrawerTop(stickyWrapperRef.current.getBoundingClientRect().bottom);
      }
    };
    updateDrawerTop();
    window.addEventListener('scroll', updateDrawerTop, { passive: true });
    window.addEventListener('resize', updateDrawerTop);
    return () => {
      window.removeEventListener('scroll', updateDrawerTop);
      window.removeEventListener('resize', updateDrawerTop);
    };
  }, []);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileProgramsOpen(false);
    setMobileParentsOpen(false);
  };

  const navLinkClass =
    'relative font-body font-semibold text-gray-700 hover:text-primary transition-colors duration-200 text-sm lg:text-base after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-primary after:rounded-full after:transition-all after:duration-300 hover:after:w-full';

  const dropdownItemClass =
    'block px-5 py-2.5 font-body text-sm text-gray-600 hover:bg-primary/5 hover:text-primary hover:pl-6 transition-all duration-150';

  return (
    <div ref={stickyWrapperRef} className="sticky top-0 z-50">
      <nav
        aria-label="Main navigation"
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-gray-900/5'
            : 'bg-white/80 backdrop-blur-sm shadow-sm'
        }`}
      >
        <div className="h-[3px] w-full bg-gradient-to-r from-primary via-secondary-yellow to-secondary-blue" />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Logo */}
            <a
              href="/"
              className="flex items-center flex-shrink-0"
              onClick={(e) => { e.preventDefault(); navigate('/'); }}
            >
              <img src="/GanIzzyPreschoolLogo.webp" alt="Camp Gan Israel" className="h-16 md:h-[4.375rem] lg:h-20 w-auto" />
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
              <a
                href="/about"
                className={navLinkClass}
                onClick={(e) => { e.preventDefault(); navigate('/about'); }}
              >
                About Us
              </a>

              {/* Programs dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProgramsOpen(true)}
                onMouseLeave={() => setProgramsOpen(false)}
              >
                <button
                  className={`${navLinkClass} flex items-center gap-1`}
                  aria-expanded={programsOpen}
                  aria-haspopup="true"
                  onFocus={() => setProgramsOpen(true)}
                  onBlur={(e) => { if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) setProgramsOpen(false); }}
                  onKeyDown={(e) => { if (e.key === 'Escape') setProgramsOpen(false); }}
                >
                  Our Programs
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    programsOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div role="menu" className="w-64 bg-white rounded-2xl shadow-xl shadow-gray-900/10 ring-1 ring-gray-100 py-2 overflow-hidden">
                    {programLinks.map((item) => (
                      <a
                        key={item.href + item.label}
                        href={item.href}
                        role="menuitem"
                        onClick={(e) => { e.preventDefault(); setProgramsOpen(false); navigate(item.href); }}
                        onBlur={(e) => { if (!e.currentTarget.closest('.relative')?.contains(e.relatedTarget as Node)) setProgramsOpen(false); }}
                        className={dropdownItemClass}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Parents dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setParentsOpen(true)}
                onMouseLeave={() => setParentsOpen(false)}
              >
                <button
                  className={`${navLinkClass} flex items-center gap-1`}
                  aria-expanded={parentsOpen}
                  aria-haspopup="true"
                  onFocus={() => setParentsOpen(true)}
                  onBlur={(e) => { if (!e.currentTarget.parentElement?.contains(e.relatedTarget as Node)) setParentsOpen(false); }}
                  onKeyDown={(e) => { if (e.key === 'Escape') setParentsOpen(false); }}
                >
                  Parents
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${parentsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                    parentsOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div role="menu" className="w-72 bg-white rounded-2xl shadow-xl shadow-gray-900/10 ring-1 ring-gray-100 py-2 overflow-hidden">
                    {parentLinks.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        role="menuitem"
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        onClick={(e) => { if (!item.external) { e.preventDefault(); setParentsOpen(false); navigate(item.href); } else { setParentsOpen(false); } }}
                        onBlur={(e) => { if (!e.currentTarget.closest('.relative')?.contains(e.relatedTarget as Node)) setParentsOpen(false); }}
                        className={dropdownItemClass}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="/dates-rates"
                className={navLinkClass}
                onClick={(e) => { e.preventDefault(); navigate('/dates-rates'); }}
              >
                Rates
              </a>

              <a
                href="/contact"
                className={navLinkClass}
                onClick={(e) => { e.preventDefault(); navigate('/contact'); }}
              >
                Contact
              </a>

              <button onClick={openEnrollModal} className="btn-gradient-primary text-white px-6 py-2.5 lg:px-7 lg:py-3 rounded-full font-body font-bold text-sm lg:text-base shadow-lg shadow-primary/20 flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200">
                <Sparkles size={16} className="opacity-90" />
                Enroll Now
              </button>
            </div>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-xl text-gray-700 hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ top: drawerTop }}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <div
        className={`fixed left-0 right-0 z-40 bg-white shadow-2xl md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          mobileOpen ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
        style={{ top: drawerTop }}
      >
        <div className="px-4 py-5 space-y-1 overflow-y-auto max-h-[80vh]">
          <a
            href="/about"
            onClick={(e) => { e.preventDefault(); closeMobile(); navigate('/about'); }}
            className="block px-4 py-3.5 rounded-xl font-body font-semibold text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-150"
          >
            About Us
          </a>

          <div className="h-px bg-gray-100 mx-4" />

          {/* Mobile programs accordion */}
          <div>
            <button
              onClick={() => setMobileProgramsOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-body font-semibold text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-150"
            >
              Our Programs
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 text-gray-400 ${mobileProgramsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileProgramsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pl-4 pb-2 space-y-0.5">
                {programLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); closeMobile(); navigate(item.href); }}
                    className="block px-4 py-2.5 rounded-xl font-body text-sm text-gray-500 hover:bg-primary/5 hover:text-primary transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-100 mx-4" />

          {/* Mobile parents accordion */}
          <div>
            <button
              onClick={() => setMobileParentsOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-4 py-3.5 rounded-xl font-body font-semibold text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-150"
            >
              Parents
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 text-gray-400 ${mobileParentsOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                mobileParentsOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pl-4 pb-2 space-y-0.5">
                {parentLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    onClick={(e) => { if (!item.external) { e.preventDefault(); closeMobile(); navigate(item.href); } else { closeMobile(); } }}
                    className="block px-4 py-2.5 rounded-xl font-body text-sm text-gray-500 hover:bg-primary/5 hover:text-primary transition-colors duration-150"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="h-px bg-gray-100 mx-4" />

          <a
            href="/dates-rates"
            onClick={(e) => { e.preventDefault(); closeMobile(); navigate('/dates-rates'); }}
            className="block px-4 py-3.5 rounded-xl font-body font-semibold text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-150"
          >
            Rates
          </a>

          <div className="h-px bg-gray-100 mx-4" />

          <a
            href="/contact"
            onClick={(e) => { e.preventDefault(); closeMobile(); navigate('/contact'); }}
            className="block px-4 py-3.5 rounded-xl font-body font-semibold text-gray-700 hover:bg-primary/5 hover:text-primary transition-colors duration-150"
          >
            Contact
          </a>

          <div className="pt-4 pb-2">
            <button
              onClick={() => { closeMobile(); openEnrollModal(); }}
              className="w-full btn-gradient-primary text-white py-4 rounded-2xl font-body font-bold text-base active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              <Sparkles size={18} />
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
