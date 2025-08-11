import React, { useEffect } from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Liquidity from './sections/Liquidity';
import Partners from './sections/Partners';
import Features from './sections/Features';
import HowItWorks from './sections/HowItWorks';
import Metrics from './sections/Metrics';
import Pricing from './sections/Pricing';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import { useLucide } from './hooks/useLucide';
import { useReveal } from './hooks/useReveal';
import './styles/index.css';

function App(): JSX.Element {
  useLucide();
  useReveal();

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="h-full bg-exchange-900 text-white antialiased relative overflow-hidden bg-grid">
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
        <Metrics />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;