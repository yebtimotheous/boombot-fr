import React from 'react';
import { useLucide } from '../hooks/useLucide';
import { usePerformance, formatEth, formatPct } from '../hooks/usePerformance';

const Hero: React.FC = () => {
  useLucide();
  const { metrics, topPair } = usePerformance();

  const invested = metrics?.totalInvested ?? 0;
  const current = metrics?.currentValue ?? 0;
  const pnlPct = invested > 0 ? ((current - invested) / invested) * 100 : 0;

  // Pair logo handling: prefer actual token logos, default to SOL/USDT
  const pairName = topPair || 'SOL/USDT';
  const [baseSym, quoteSym] = pairName.split('/');
  const TOKEN_LOGOS: Record<string, string> = {
    SOL: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=034',
    USDT: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=034',
    WETH: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=034',
    USDC: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=034',
  };
  const baseLogo = TOKEN_LOGOS[(baseSym || '').toUpperCase()];
  const quoteLogo = TOKEN_LOGOS[(quoteSym || '').toUpperCase()];

  return (
    <section id="product" className="relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-info-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28 relative z-10">
        {/* Left copy */}
        <div className="order-2 md:order-1 reveal">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary-500/40 bg-primary-500/15 px-4 py-2 text-sm font-medium text-primary-300 backdrop-blur-sm">
            <i data-lucide="zap" className="h-4 w-4" />
            <span>HYPER AUTONOMOUS TRADING</span>
          </div>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            AI-Powered Trading with <span className="text-primary-400">Human-Level</span> Risk Intelligence
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            BoomBot combines cutting-edge machine learning with institutional-grade risk controls to identify, execute, and manage trades faster than human traders.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-primary-500 to-primary-400 px-8 py-4 text-base font-medium text-black shadow-lg shadow-primary-500/30 hover:from-primary-400 hover:to-primary-300 hover:shadow-primary-500/40 transition-all group"
            >
              Launch App
              <i data-lucide="arrow-right" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="../WHITEPAPER.md"
              className="inline-flex items-center justify-center rounded-xl border border-exchange-600 bg-exchange-800/60 px-8 py-4 text-base font-medium text-gray-200 hover:bg-exchange-700/70 hover:border-exchange-500 transition-all group"
            >
              <i data-lucide="file-text" className="mr-2 h-5 w-5" />
              Read Whitepaper
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            <div className="bg-gradient-to-br from-exchange-800/60 to-exchange-900/80 border border-exchange-700/50 rounded-xl p-4 backdrop-filter backdrop-blur-sm">
              <div className="text-2xl font-bold text-success-500 shimmer">{metrics ? '99.9%' : '99.9%'}</div>
              <div className="mt-1 text-xs text-gray-400">Uptime</div>
            </div>
            <div className="bg-gradient-to-br from-exchange-800/60 to-exchange-900/80 border border-exchange-700/50 rounded-xl p-4 backdrop-filter backdrop-blur-sm">
              <div className="text-2xl font-bold text-primary-500 shimmer">{metrics?.activeTrades ?? 0}</div>
              <div className="mt-1 text-xs text-gray-400">Active Trades</div>
            </div>
            <div className="bg-gradient-to-br from-exchange-800/60 to-exchange-900/80 border border-exchange-700/50 rounded-xl p-4 backdrop-filter backdrop-blur-sm">
              <div className="text-2xl font-bold text-info-500 shimmer">{metrics?.successRate ?? 0}%</div>
              <div className="mt-1 text-xs text-gray-400">Win Rate</div>
            </div>
          </div>

          <div className="mt-8 flex items-center space-x-4">
            <div className="flex -space-x-2">
              <img loading="lazy" decoding="async" className="inline-block h-8 w-8 rounded-full ring-2 ring-exchange-900" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" alt="" />
              <img loading="lazy" decoding="async" className="inline-block h-8 w-8 rounded-full ring-2 ring-exchange-900" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" alt="" />
              <img loading="lazy" decoding="async" className="inline-block h-8 w-8 rounded-full ring-2 ring-exchange-900" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=100&h=100&q=80" alt="" />
            </div>
            <div className="text-sm text-gray-400">
              <span className="text-gray-300 font-medium">200+</span> institutional traders trust BoomBot
            </div>
          </div>
        </div>

        {/* Right dashboard card */}
        <div className="order-1 md:order-2 relative reveal">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary-500/10 to-info-500/10 blur-xl opacity-70"></div>
          <div className="relative dashboard-card rounded-2xl border border-exchange-600 bg-exchange-800/80 shadow-2xl backdrop-blur-lg">
            <div className="flex items-center justify-between border-b border-exchange-600 px-6 py-4">
              <div className="flex items-center space-x-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-success-500"></span>
                </span>
                <span className="font-medium text-gray-200">Trading Bot Live</span>
              </div>
              <div className="text-xs font-medium text-success-400 bg-success-500/10 px-2 py-1 rounded">
                <i data-lucide="activity" className="inline h-3 w-3 mr-1" />
                REAL-TIME
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-exchange-700/50 to-exchange-800/50 rounded-xl p-4 border border-exchange-700">
                  <div className="text-xs text-gray-400 font-medium">Total Invested</div>
                  <div className="mt-2 font-mono text-xl font-bold text-primary-400 shimmer">{formatEth(metrics?.totalInvested)}</div>
                </div>
                <div className="bg-gradient-to-br from-exchange-700/50 to-exchange-800/50 rounded-xl p-4 border border-exchange-700">
                  <div className="text-xs text-gray-400 font-medium">Current Value</div>
                  <div className="mt-2 font-mono text-xl font-bold text-info-400 shimmer">{formatEth(metrics?.currentValue)}</div>
                </div>
                <div className="bg-gradient-to-br from-exchange-700/50 to-exchange-800/50 rounded-xl p-4 border border-exchange-700">
                  <div className="text-xs text-gray-400 font-medium">24h P&L</div>
                  <div className={`mt-2 font-mono text-xl font-bold shimmer ${pnlPct >= 0 ? 'text-success-500' : 'text-danger-500'}`}>
                    {formatPct(pnlPct)}
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-exchange-600 bg-exchange-800/50 p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-gray-300">Top Performing Pair</div>
                  <div className="text-xs font-medium text-success-400 bg-success-500/10 px-2 py-1 rounded">+12.4%</div>
                </div>
                <div className="mt-3 flex items-center">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      <img
                        loading="lazy"
                        decoding="async"
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-exchange-900 bg-exchange-700 object-contain"
                        src={baseLogo}
                        alt={`${baseSym || ''} logo`}
                      />
                      <img
                        loading="lazy"
                        decoding="async"
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-exchange-900 bg-exchange-700 object-contain"
                        src={quoteLogo}
                        alt={`${quoteSym || ''} logo`}
                      />
                    </div>
                    <div className="ml-2">
                      <div className="font-medium text-gray-200">{pairName}</div>
                      <div className="text-xs text-gray-400">Uniswap V3</div>
                    </div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="font-mono text-success-500">+$1,248.72</div>
                    <div className="text-xs text-gray-400">24h gain</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-300 font-medium">Portfolio Performance</span>
                  <span className={`font-medium ${pnlPct >= 0 ? 'text-success-400' : 'text-danger-400'}`}>{formatPct(pnlPct)}</span>
                </div>
                <div className="w-full bg-exchange-700 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-primary-500 to-success-500 h-2.5 rounded-full" style={{ width: `${Math.min(100, Math.max(0, pnlPct + 50))}%` }} />
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>1M</span>
                  <span>3M</span>
                  <span>6M</span>
                  <span>1Y</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary-500 to-primary-400 text-black text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
            <i data-lucide="shield" className="inline h-3 w-3 mr-1" />
            Self-Custodial
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;