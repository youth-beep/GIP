export interface PageSEO {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const BASE_URL = 'https://campganizzyac.com';
const OG_IMAGE = `${BASE_URL}/CGI_Logo.png`;

export const SEO_CONFIG: Record<string, PageSEO> = {
  '/': {
    title: 'Camp Gan Izzy AC | Jewish Summer Day Camp | Ventnor City, NJ',
    description: 'Camp Gan Izzy AC is the premier Jewish summer day camp in Ventnor City, NJ for children ages 0–14+. Fun, friendship, and timeless Jewish values. Enrolling now for Summer 2026.',
    canonical: BASE_URL,
    ogImage: OG_IMAGE,
  },
  '/about': {
    title: 'About Us | Camp Gan Izzy AC | Ventnor City, NJ',
    description: 'Meet the dedicated directors and staff behind Camp Gan Izzy AC. Learn about our Jewish values, safe campus, and 20+ years of creating unforgettable summer memories.',
    canonical: `${BASE_URL}/about`,
    ogImage: OG_IMAGE,
  },
  '/programs/preschool': {
    title: 'Gan Izzy Infants (Ages 0–16 Months) | Jewish Baby Summer Camp | NJ',
    description: 'Our Gan Izzy Infants program offers a nurturing, gentle Jewish summer experience for babies ages 0–16 months in Ventnor City, NJ. Safe, loving care and sensory play.',
    canonical: `${BASE_URL}/programs/preschool`,
    ogImage: OG_IMAGE,
  },
  '/programs/toddlers': {
    title: 'Gan Izzy Toddlers (Ages 16–36 Months) | Jewish Toddler Summer Camp | NJ',
    description: 'Our Gan Izzy Toddlers program offers an active, hands-on Jewish summer experience for toddlers ages 16–36 months in Ventnor City, NJ. Fun, friends, and Jewish values.',
    canonical: `${BASE_URL}/programs/toddlers`,
    ogImage: OG_IMAGE,
  },
  '/programs/mini': {
    title: 'Mini Gan Izzy (Ages 3–4) | Jewish Preschool Summer Camp | NJ',
    description: 'Mini Gan Izzy is a fun, age-appropriate Jewish summer camp program for children ages 3–4. Songs, crafts, friends, and Jewish values in Ventnor City, NJ.',
    canonical: `${BASE_URL}/programs/mini`,
    ogImage: OG_IMAGE,
  },
  '/programs/juniors': {
    title: 'Gan Izzy Juniors (Ages 5–7) | Kids Summer Day Camp | Ventnor, NJ',
    description: 'Gan Izzy Juniors is a high-energy Jewish summer day camp for kids ages 5–7. Sports, arts, swimming, and Jewish culture in Ventnor City, NJ.',
    canonical: `${BASE_URL}/programs/juniors`,
    ogImage: OG_IMAGE,
  },
  '/programs/seniors': {
    title: 'Gan Izzy Seniors (Ages 8–10) | Adventure Summer Camp | NJ',
    description: "Gan Izzy Seniors gives kids ages 8–10 an action-packed summer of adventure, Jewish learning, and leadership. Located in Ventnor City, NJ.",
    canonical: `${BASE_URL}/programs/seniors`,
    ogImage: OG_IMAGE,
  },
  '/programs/pioneers': {
    title: 'Gan Izzy Pioneers (Ages 11–13) | Teen Summer Camp | Ventnor, NJ',
    description: 'Gan Izzy Pioneers is a premium Jewish teen summer camp for ages 11–13. Leadership, trips, challenges, and lifelong friendships in Ventnor City, NJ.',
    canonical: `${BASE_URL}/programs/pioneers`,
    ogImage: OG_IMAGE,
  },
  '/programs/cit': {
    title: 'CIT Leadership Program (Age 14+) | Camp Gan Izzy AC | NJ',
    description: 'The CIT (Counselor in Training) program at Camp Gan Izzy AC develops real leadership skills for teens age 14+. Apply now for Summer 2026 in Ventnor City, NJ.',
    canonical: `${BASE_URL}/programs/cit`,
    ogImage: OG_IMAGE,
  },
  '/programs/extended-care': {
    title: 'Extended Care | Before & After Camp Hours | Gan Izzy AC | NJ',
    description: 'Camp Gan Izzy AC offers flexible extended care hours for busy families. Early drop-off and late pick-up available in Ventnor City, NJ.',
    canonical: `${BASE_URL}/programs/extended-care`,
    ogImage: OG_IMAGE,
  },
  '/dates-rates': {
    title: 'Camp Dates & Tuition 2026 | Scholarships & Discounts | Gan Izzy AC',
    description: 'View Summer 2026 camp dates, tuition rates, sibling discounts, and scholarship info for Camp Gan Izzy AC in Ventnor City, NJ. June 29 – August 21.',
    canonical: `${BASE_URL}/dates-rates`,
    ogImage: OG_IMAGE,
  },
  '/contact': {
    title: 'Contact Camp Gan Izzy AC | Ventnor City, NJ | 609-201-3521',
    description: 'Get in touch with Camp Gan Izzy AC. Visit us at 21 S Troy Ave, Ventnor City, NJ 08406, call 609-201-3521, or email mushky@chabadac.com.',
    canonical: `${BASE_URL}/contact`,
    ogImage: OG_IMAGE,
  },
  '/register': {
    title: 'Register for Camp 2026 | Enroll at Camp Gan Izzy AC | NJ',
    description: 'Enroll your child at Camp Gan Izzy AC for Summer 2026. Complete the online registration form for our Jewish summer day camp in Ventnor City, NJ.',
    canonical: `${BASE_URL}/register`,
    ogImage: OG_IMAGE,
  },
  '/parents': {
    title: 'Parent Resources | Camp Gan Izzy AC | Ventnor City, NJ',
    description: 'Access parent resources for Camp Gan Izzy AC: calendars, handbooks, health forms, photo galleries, and more. Your child\'s best summer starts here.',
    canonical: `${BASE_URL}/parents`,
    ogImage: OG_IMAGE,
  },
  '/gallery': {
    title: 'Photo Gallery | Camp Gan Izzy AC | Summer Memories',
    description: 'Browse photos from Camp Gan Izzy AC summer programs. See the fun, friendships, and Jewish values in action at our Ventnor City, NJ campus.',
    canonical: `${BASE_URL}/gallery`,
    ogImage: OG_IMAGE,
  },
  '/terms': {
    title: 'Terms of Service | Camp Gan Izzy AC',
    description: 'Read the Terms of Service for Camp Gan Izzy AC, including enrollment, refund policies, health requirements, and liability information.',
    canonical: `${BASE_URL}/terms`,
    ogImage: OG_IMAGE,
  },
  '/privacy': {
    title: 'Privacy Policy | Camp Gan Izzy AC',
    description: "Camp Gan Izzy AC's privacy policy explains how we collect, use, and protect your family's personal information.",
    canonical: `${BASE_URL}/privacy`,
    ogImage: OG_IMAGE,
  },
};

export function applySEO(path: string) {
  const seo = SEO_CONFIG[path] ?? SEO_CONFIG['/'];

  document.title = seo.title;

  setMeta('name', 'description', seo.description);
  setMeta('property', 'og:title', seo.title);
  setMeta('property', 'og:description', seo.description);
  setMeta('property', 'og:url', seo.canonical);
  setMeta('property', 'og:image', seo.ogImage ?? '');
  setMeta('name', 'twitter:title', seo.title);
  setMeta('name', 'twitter:description', seo.description);
  setMeta('name', 'twitter:image', seo.ogImage ?? '');

  let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.appendChild(canonical);
  }
  canonical.href = seo.canonical;
}

function setMeta(attrKey: string, attrVal: string, content: string) {
  let el = document.querySelector<HTMLMetaElement>(`meta[${attrKey}="${attrVal}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrKey, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}
