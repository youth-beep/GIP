import { StrictMode, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import AboutUs from './pages/AboutUs.tsx';
import GanIzzyPreschool from './pages/GanIzzyPreschool.tsx';
import Toddlers from './pages/Toddlers.tsx';
import MiniGanIzzy from './pages/MiniGanIzzy.tsx';
import Juniors from './pages/Juniors.tsx';
import Seniors from './pages/Seniors.tsx';
import Pioneers from './pages/Pioneers.tsx';
import LIT from './pages/LIT.tsx';
import CIT from './pages/CIT.tsx';
import ExtendedCare from './pages/ExtendedCare.tsx';
import ContactUs from './pages/ContactUs.tsx';
import ParentResources from './pages/ParentResources.tsx';
import CampCalendar from './pages/CampCalendar.tsx';
import DatesRates from './pages/DatesRates.tsx';
import PhotoGalleryPage from './pages/PhotoGalleryPage.tsx';
import Registration from './pages/Registration.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import NotFound from './pages/NotFound.tsx';
import { applySEO } from './utils/seo.ts';
import { injectGlobalSchemas, injectPageSchema } from './utils/structuredData.ts';
import './index.css';

injectGlobalSchemas();

function Root() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    applySEO(path);
    injectPageSchema(path);
  }, [path]);

  useEffect(() => {
    const onPop = () => {
      setPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (
    path === '/templates/articlecco_cdo/aid/6784160/jewish/CAMP-REGISTRATION-2026.htm' ||
    path === '/templates/section_cdo/aid/6893858/jewish/about-camp.htm'
  ) {
    window.history.replaceState(null, '', '/');
    return <App />;
  }

  let page: React.ReactNode;
  if (path === '/about') page = <AboutUs />;
  else if (path === '/programs/preschool') page = <GanIzzyPreschool />;
  else if (path === '/programs/toddlers') page = <Toddlers />;
  else if (path === '/programs/mini') page = <MiniGanIzzy />;
  else if (path === '/programs/juniors') page = <Juniors />;
  else if (path === '/programs/seniors') page = <Seniors />;
  else if (path === '/programs/pioneers') page = <Pioneers />;
  else if (path === '/programs/lit') page = <LIT />;
  else if (path === '/programs/cit') page = <CIT />;
  else if (path === '/programs/extended-care') page = <ExtendedCare />;
  else if (path === '/contact') page = <ContactUs />;
  else if (path === '/parents') page = <ParentResources />;
  else if (path === '/calendar') page = <CampCalendar />;
  else if (path === '/gallery') page = <PhotoGalleryPage />;
  else if (path === '/dates-rates') page = <DatesRates />;
  else if (path === '/register') page = <Registration />;
  else if (path === '/terms') page = <TermsOfService />;
  else if (path === '/privacy') page = <PrivacyPolicy />;
  else if (path === '/') page = <App />;
  else page = <NotFound />;

  return (
    <>
      {page}
    </>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
