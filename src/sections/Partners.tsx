import React from 'react';
import { useLucide } from '../hooks/useLucide';

// Prefer local assets under /partners/*.svg; fallback to local brands.svg symbols for those we couldn't fetch
type LogoItem =
  | { kind: 'img'; label: string; src: string; badge?: string }
  | { kind: 'symbol'; label: string; id: string; badge?: string };

const techs: LogoItem[] = [
  { kind: 'img', label: 'EVM', src: '/partners/ethereum.svg' },
  { kind: 'symbol', label: 'Hardhat', id: 'hardhat' },   // symbol fallback (download blocked)
  { kind: 'symbol', label: 'Uniswap', id: 'uniswap' },   // symbol fallback (download blocked)
  { kind: 'img', label: 'ETH', src: '/partners/eth.svg', badge: 'RPC' },
  { kind: 'img', label: 'Open Source', src: '/partners/opensourceinitiative.svg' },
  { kind: 'img', label: 'PM2', src: '/partners/pm2.svg' },
  { kind: 'img', label: 'Chainlink', src: '/partners/chainlink.svg' },
  { kind: 'img', label: 'Web3.js', src: '/partners/web3js.svg' },
  { kind: 'img', label: 'Docker', src: '/partners/docker.svg' },
  { kind: 'img', label: 'Redis', src: '/partners/redis.svg' },
  { kind: 'img', label: 'Node.js', src: '/partners/nodedotjs.svg' },
  { kind: 'img', label: 'MongoDB', src: '/partners/mongodb.svg' },
];

const Partners: React.FC = () => {
  useLucide();

  return (
    <section id="partners" aria-label="Trusted by" className="border-y border-exchange-600/50 bg-gradient-to-r from-exchange-900/50 via-exchange-800/50 to-exchange-900/50 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold text-primary-400 tracking-wider uppercase">Trusted by Innovators</h3>
          <p className="mt-2 text-3xl font-display font-bold text-gray-200">Built with Industry-Leading Technologies</p>
          <p className="mt-3 max-w-2xl mx-auto text-gray-400">We integrate with the most reliable tools and protocols in the blockchain ecosystem</p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {techs.map((t) => (
            <div key={t.label} className="flex flex-col items-center gap-3 p-5 rounded-2xl bg-exchange-800/40 hover:bg-exchange-800/60 transition-all duration-300 border border-exchange-700/50 hover:border-exchange-600/50 group">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-exchange-700/50 p-3 group-hover:bg-exchange-700/70 transition-colors duration-300 relative">
                {t.kind === 'img' ? (
                  <img src={t.src} alt={t.label} className="trusted-logo brand-img h-8 w-8" />
                ) : (
                  <svg className="trusted-logo h-8 w-8" role="img" aria-label={t.label} focusable="false">
                    <use href={`/partners/brands.svg#${t.id}`} />
                  </svg>
                )}
                {('badge' in t && t.badge) ? (
                  <span className="absolute -top-1 -right-1 rounded-full bg-primary-500 px-2 py-0.5 text-[10px] font-bold text-black">{t.badge}</span>
                ) : null}
              </div>
              <div className="text-sm font-medium text-gray-300">{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;