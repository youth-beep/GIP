const BASE_URL = 'https://campganizzyac.com';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Camp Gan Izzy AC',
  alternateName: ['Camp Gan Israel AC', 'CGI AC', 'Gan Izzy AC'],
  url: BASE_URL,
  logo: `${BASE_URL}/CGI_Logo.png`,
  image: `${BASE_URL}/camp-photo.jpg`,
  description: 'Camp Gan Izzy AC is the premier Jewish summer day camp for children ages 0–14+ in Ventnor City, NJ. Unforgettable fun, Jewish values, and lifelong memories.',
  telephone: '+16092013521',
  email: 'mushky@chabadac.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6605 Atlantic Ave',
    addressLocality: 'Ventnor City',
    addressRegion: 'NJ',
    postalCode: '08406',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.3398,
    longitude: -74.4774,
  },
  sameAs: [
    'https://www.facebook.com/CampGanIzzyAC',
    'https://www.instagram.com/cgi_attheshore/',
  ],
};

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ChildCare', 'SportsActivityLocation'],
  name: 'Camp Gan Izzy AC',
  url: BASE_URL,
  logo: `${BASE_URL}/CGI_Logo.png`,
  image: `${BASE_URL}/camp-photo.jpg`,
  description: 'Jewish summer day camp for children ages 0–14+ in Ventnor City, NJ.',
  telephone: '+16092013521',
  email: 'mushky@chabadac.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '6605 Atlantic Ave',
    addressLocality: 'Ventnor City',
    addressRegion: 'NJ',
    postalCode: '08406',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.3398,
    longitude: -74.4774,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:30',
      closes: '17:30',
    },
  ],
  priceRange: '$$',
  servesCuisine: [],
  sameAs: [
    'https://www.facebook.com/CampGanIzzyAC',
    'https://www.instagram.com/cgi_attheshore/',
  ],
};

export const campEventSchema = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: 'Camp Gan Izzy AC — Summer 2026',
  description: 'Jewish summer day camp program for children ages 0–14+ in Ventnor City, NJ. Programs include Preschool, Mini Gan Izzy, Juniors, Seniors, Pioneers, and CIT.',
  startDate: '2026-06-29',
  endDate: '2026-08-21',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  location: {
    '@type': 'Place',
    name: 'Camp Gan Izzy AC Campus',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '6605 Atlantic Ave',
      addressLocality: 'Ventnor City',
      addressRegion: 'NJ',
      postalCode: '08406',
      addressCountry: 'US',
    },
  },
  organizer: {
    '@type': 'Organization',
    name: 'Camp Gan Izzy AC',
    url: BASE_URL,
  },
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'USD',
    lowPrice: '750',
    highPrice: '2200',
    offerCount: '7',
    url: `${BASE_URL}/dates-rates`,
  },
  image: `${BASE_URL}/camp-photo.jpg`,
};

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What ages does Camp Gan Izzy AC accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Camp Gan Izzy AC welcomes children ages 0 through 14+, with programs including Preschool (0–2), Mini Gan Izzy (3–4), Juniors (5–7), Seniors (8–10), Pioneers (11–13), and CIT (14+).',
      },
    },
    {
      '@type': 'Question',
      name: 'When is Summer 2026 camp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Camp Gan Izzy AC Summer 2026 runs from June 29 through August 21. An Adventure Week pre-camp session is also available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Camp Gan Izzy AC located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Camp Gan Izzy AC is located at 6605 Atlantic Ave, Ventnor City, NJ 08406, close to Atlantic City.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Camp Gan Izzy AC a Jewish camp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Camp Gan Izzy AC is a Chabad-affiliated Jewish summer day camp that weaves Jewish values, traditions, and culture into every day of camp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Camp Gan Izzy AC offer extended care?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Extended care with early drop-off and late pick-up is available for families who need flexible hours before and after the standard camp day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cancellation policy?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cancellations before June 10 receive a full refund minus a $50 administrative fee. Cancellations after June 10 are non-refundable except in verified medical emergencies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are sibling discounts available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Sibling discounts and full-program discounts are available and applied after confirmation by our office.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I register for Camp Gan Izzy AC?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Registration is completed online. Visit campganizzyac.com/register to fill out the enrollment form. Registration is confirmed upon completion of the Additional Info form and receipt of payment.',
      },
    },
  ],
};

export const breadcrumbSchema = (crumbs: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: c.url,
  })),
});

export function injectSchema(schema: object, id: string) {
  const existing = document.getElementById(id);
  if (existing) existing.remove();
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.text = JSON.stringify(schema);
  document.head.appendChild(script);
}

export function injectGlobalSchemas() {
  injectSchema(organizationSchema, 'schema-organization');
  injectSchema(localBusinessSchema, 'schema-localbusiness');
  injectSchema(faqSchema, 'schema-faq');
}

export function injectPageSchema(path: string) {
  const existing = document.getElementById('schema-page');
  if (existing) existing.remove();
  const existingBc = document.getElementById('schema-breadcrumb');
  if (existingBc) existingBc.remove();

  const BASE = 'https://campganizzyac.com';

  if (path === '/' || path === '') {
    injectSchema(campEventSchema, 'schema-page');
    injectSchema(breadcrumbSchema([{ name: 'Home', url: BASE }]), 'schema-breadcrumb');
    return;
  }

  const crumbs = [{ name: 'Home', url: BASE }];

  const programMap: Record<string, { name: string; age: string; description: string }> = {
    '/programs/preschool': { name: 'Gan Izzy Infants', age: '0–1', description: 'Nurturing, gentle Jewish summer program for infants ages 0–16 months.' },
    '/programs/toddlers': { name: 'Gan Izzy Toddlers', age: '1–3', description: 'Active, hands-on Jewish summer program for toddlers ages 16–36 months.' },
    '/programs/mini': { name: 'Mini Gan Izzy', age: '3–4', description: 'Fun, age-appropriate Jewish summer camp for children ages 3–4.' },
    '/programs/juniors': { name: 'Gan Izzy Juniors', age: '5–7', description: 'High-energy Jewish day camp for kids ages 5–7.' },
    '/programs/seniors': { name: 'Gan Izzy Seniors', age: '8–10', description: 'Adventure-focused Jewish summer camp for kids ages 8–10.' },
    '/programs/pioneers': { name: 'Gan Izzy Pioneers', age: '11–13', description: 'Premium Jewish teen summer camp for ages 11–13.' },
    '/programs/cit': { name: 'CIT Program', age: '14+', description: 'Counselor in Training leadership program for teens age 14+.' },
    '/programs/extended-care': { name: 'Extended Care', age: '0–14+', description: 'Before and after camp extended care for busy families.' },
  };

  if (programMap[path]) {
    const prog = programMap[path];
    crumbs.push({ name: 'Programs', url: `${BASE}/#programs` });
    crumbs.push({ name: prog.name, url: `${BASE}${path}` });
    injectSchema({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: `${prog.name} — Camp Gan Izzy AC Summer 2026`,
      description: prog.description,
      startDate: '2026-06-29',
      endDate: '2026-08-21',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      typicalAgeRange: prog.age,
      location: {
        '@type': 'Place',
        name: 'Camp Gan Izzy AC Campus',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '6605 Atlantic Ave',
          addressLocality: 'Ventnor City',
          addressRegion: 'NJ',
          postalCode: '08406',
          addressCountry: 'US',
        },
      },
      organizer: { '@type': 'Organization', name: 'Camp Gan Izzy AC', url: BASE },
      offers: { '@type': 'Offer', priceCurrency: 'USD', url: `${BASE}/dates-rates` },
    }, 'schema-page');
  } else if (path === '/about') {
    crumbs.push({ name: 'About Us', url: `${BASE}/about` });
  } else if (path === '/contact') {
    crumbs.push({ name: 'Contact Us', url: `${BASE}/contact` });
  } else if (path === '/dates-rates') {
    crumbs.push({ name: 'Rates', url: `${BASE}/dates-rates` });
  } else if (path === '/register') {
    crumbs.push({ name: 'Register', url: `${BASE}/register` });
  } else if (path === '/parents') {
    crumbs.push({ name: 'Parent Resources', url: `${BASE}/parents` });
  } else if (path === '/gallery') {
    crumbs.push({ name: 'Photo Gallery', url: `${BASE}/gallery` });
  } else if (path === '/terms') {
    crumbs.push({ name: 'Terms of Service', url: `${BASE}/terms` });
  } else if (path === '/privacy') {
    crumbs.push({ name: 'Privacy Policy', url: `${BASE}/privacy` });
  }

  injectSchema(breadcrumbSchema(crumbs), 'schema-breadcrumb');
}
