import React from 'react';
import { useLucide } from '../hooks/useLucide';

const CTA: React.FC = () => {
  useLucide();

  return (
    <section className="border-t border-exchange-600/50 bg-gradient-to-r from-primary-500/10 via-info-500/10 to-success-500/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-16 md:flex-row md:gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-display text-2xl md:text-3xl font-semibold">Deploy with confidence</h3>
          <p className="mt-2 text-gray-300 max-w-md mx-auto md:mx-0">
            Start in simulation, promote to live when ready. Your capital, protected by design.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-primary-500 px-6 py-4 font-semibold text-black hover:bg-primary-400 transition-colors duration-300 shadow-lg hover:shadow-primary-500/25 min-w-[160px]"
          >
            Launch App
            <i data-lucide="arrow-right" className="ml-2 h-5 w-5" />
          </a>
          <a
            href="../WHITEPAPER.md"
            className="inline-flex items-center justify-center rounded-xl border border-exchange-600 bg-exchange-800 px-6 py-4 font-semibold text-gray-200 hover:bg-exchange-700/70 transition-colors duration-300 min-w-[160px]"
          >
            Read Whitepaper
            <i data-lucide="file-text" className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;