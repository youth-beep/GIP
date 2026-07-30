import { ArrowRight, Home } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { navigate } from '../utils/navigate';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white font-body flex flex-col">
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-lg mx-auto">
          <p className="font-headline text-[8rem] leading-none text-primary/15 select-none mb-0">404</p>
          <h1 className="font-headline text-3xl sm:text-4xl text-gray-900 mb-4 -mt-4">
            Page Not Found
          </h1>
          <p className="font-body text-gray-500 text-base sm:text-lg mb-10 leading-relaxed">
            Looks like this page wandered off to the lake. Let's get you back to camp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate('/')}
              className="btn-gradient-primary text-white px-8 py-3.5 rounded-full font-body font-bold text-base flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.03] active:scale-[0.98] transition-transform duration-200"
            >
              <Home size={18} />
              Back to Home
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-body font-bold text-base flex items-center justify-center gap-2 hover:border-primary hover:text-primary transition-colors duration-200"
            >
              Contact Us
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
