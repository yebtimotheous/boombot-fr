import React, { useEffect, useState } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Liquidity from './sections/Liquidity';
import Partners from './sections/Partners';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import Pricing from './sections/Pricing';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import Preloader from './components/Preloader';
import { useLucide } from './hooks/useLucide';
import { useReveal } from './hooks/useReveal';
import './styles/index.css';

function App(): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  
  useLucide();
  useReveal();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      {/* Main App Content */}
      <div className={`h-full bg-exchange-900 text-white antialiased relative overflow-hidden bg-grid transition-opacity duration-1000 ${
        isLoading ? 'opacity-0' : 'opacity-100'
      }`}>
        {/* Decorative background (animated orbs) */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div id="bg-orb-1" className="orb orb-1 absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-primary-500/10 blur-3xl" />
          <div id="bg-orb-2" className="orb orb-2 absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-info-500/10 blur-3xl" />
        </div>

        <Navbar />

        {/* Sections */}
        <main>
          <Hero />
          <Liquidity />
          <Partners />
          <Features />
          <HowItWorks />
          <Pricing />
          <CTA />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;