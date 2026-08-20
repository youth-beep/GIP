import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FastFacts from './components/FastFacts';
import AgePrograms from './components/AgePrograms';
import CGIDifference from './components/CGIDifference';
import DayInLife from './components/DayInLife';
import Reviews from './components/Reviews';
import SafetyLogistics from './components/SafetyLogistics';
import PhotoGallery from './components/PhotoGallery';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-body">
      <Navigation />
      <main>
        <Hero />
        <FastFacts />
        <section id="programs">
          <AgePrograms />
        </section>
        <section id="about">
          <CGIDifference />
        </section>
        <DayInLife />
        <Reviews />
        <section id="rates">
          <SafetyLogistics />
        </section>
        <PhotoGallery />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
