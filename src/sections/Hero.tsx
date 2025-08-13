import React from 'react';
import { useLucide } from '../hooks/useLucide';
import { usePerformance, formatEth, formatPct } from '../hooks/usePerformance';

const Hero: React.FC = () => {
  useLucide();
  const { metrics, topPair } = usePerformance();

  const invested = metrics?.totalInvested ?? 0;
  const current = metrics?.currentValue ?? 0;
  const pnlPct = invested > 0 ? ((current - invested) / invested) * 100 : 0;

  const pairName = topPair || 'SOL/USDT';
  const [baseSym, quoteSym] = pairName.split('/');
  const TOKEN_LOGOS: Record<string, string> = {
    SOL: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
    USDT: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png',
    WETH: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    USDC: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86a33E6417c8f2c8B4C5d8c8B8B8B8B8B8B8B/logo.png',
  };
  const baseLogo = TOKEN_LOGOS[(baseSym || '').toUpperCase()];
  const quoteLogo = TOKEN_LOGOS[(quoteSym || '').toUpperCase()];

  return (
    <section id="product" className="relative">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary-500/30 bg-exchange-800 px-3 py-1 text-sm text-primary-400">
            <i data-lucide="zap" className="h-4 w-4" />
            <span>HYPER AUTONOMOUS TRADING</span>
          </div>

          <h1 className="mt-6 font-mono text-4xl font-black leading-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent tracking-tight">
            AI-Powered Trading with <span className="bg-gradient-to-r from-primary-400 via-success-400 to-info-400 bg-clip-text text-transparent font-extrabold">Human-Level</span> Risk Intelligence
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-2xl">
            BoomBot combines cutting-edge machine learning with institutional-grade risk controls to identify, execute, and manage trades faster than human traders.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl bg-primary-500 px-8 py-4 text-base font-medium text-black shadow-lg"
            >
              Launch App
              <i data-lucide="arrow-right" className="ml-2 h-5 w-5" />
            </a>
            <a
              href="../WHITEPAPER.md"
              className="inline-flex items-center justify-center rounded-xl border border-exchange-600 bg-exchange-800 px-8 py-4 text-base font-medium text-gray-200"
            >
              <i data-lucide="file-text" className="mr-2 h-5 w-5" />
              Read Whitepaper
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
            <div className="border border-exchange-700 rounded-xl p-4 bg-exchange-800">
              <div className="text-2xl font-bold text-success-500">{metrics ? '99.9%' : '99.9%'}</div>
              <div className="mt-1 text-xs text-gray-400">Uptime</div>
            </div>
            <div className="border border-exchange-700 rounded-xl p-4 bg-exchange-800">
              <div className="text-2xl font-bold text-primary-500">{metrics?.activeTrades ?? 0}</div>
              <div className="mt-1 text-xs text-gray-400">Active Trades</div>
            </div>
            <div className="border border-exchange-700 rounded-xl p-4 bg-exchange-800">
              <div className="text-2xl font-bold text-info-500">{metrics?.successRate ?? 0}%</div>
              <div className="mt-1 text-xs text-gray-400">Win Rate</div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 relative">
          {/* Floating orbs background */}
          <div className="absolute -inset-8 opacity-60">
            <div className="absolute top-0 left-0 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-success-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-info-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>

          {/* Main card with revolutionary design */}
          <div className="relative group">
            {/* Animated border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-success-500 to-info-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse"></div>

            <div className="relative bg-gradient-to-br from-exchange-900 via-exchange-800 to-exchange-900 rounded-3xl overflow-hidden border border-exchange-600/50 backdrop-blur-xl">
              {/* Holographic header */}
              <div className="relative bg-gradient-to-r from-exchange-800/80 via-exchange-700/60 to-exchange-800/80 p-5">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/10 to-transparent animate-pulse"></div>
                <div className="relative flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary-500 rounded-xl blur animate-pulse"></div>
                      <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-2 rounded-xl">
                        <i data-lucide="zap" className="h-5 w-5 text-black"></i>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                        Neural Trading Engine
                      </h3>
                      <p className="text-xs text-gray-400 font-medium">Quantum-Enhanced Performance</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-success-500 rounded-full blur-sm animate-ping"></div>
                      <div className="relative w-3 h-3 bg-success-500 rounded-full"></div>
                    </div>
                    <span className="text-sm font-bold bg-gradient-to-r from-success-400 to-success-300 bg-clip-text text-transparent">
                      NEURAL ACTIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* Revolutionary metrics display */}
              <div className="p-6 space-y-4">
                {/* Main performance showcase */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-success-500/20 via-primary-500/20 to-info-500/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-exchange-700/40 to-exchange-800/60 rounded-2xl p-5 border border-success-500/30">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium text-success-400 uppercase tracking-wider">Portfolio Value</span>
                      </div>
                      <div className="text-xs text-gray-400 bg-exchange-700/50 px-2 py-1 rounded-full">Live</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-black font-mono bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                        $2,847,392
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-400">24h Change:</span>
                        <span className="text-lg font-bold text-success-400 flex items-center">
                          <i data-lucide="trending-up" className="h-4 w-4 mr-1"></i>
                          +$347,829 (+13.9%)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Futuristic metrics grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="relative group/metric">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent rounded-xl opacity-0 group-hover/metric:opacity-100 transition-opacity"></div>
                    <div className="relative bg-exchange-700/30 rounded-xl p-3 border border-primary-500/20 hover:border-primary-500/40 transition-colors">
                      <div className="text-xs text-primary-400 font-medium mb-1 flex items-center">
                        <i data-lucide="target" className="h-3 w-3 mr-1"></i>
                        Win Rate
                      </div>
                      <div className="text-xl font-bold font-mono text-primary-300">94.7%</div>
                    </div>
                  </div>

                  <div className="relative group/metric">
                    <div className="absolute inset-0 bg-gradient-to-br from-info-500/20 to-transparent rounded-xl opacity-0 group-hover/metric:opacity-100 transition-opacity"></div>
                    <div className="relative bg-exchange-700/30 rounded-xl p-3 border border-info-500/20 hover:border-info-500/40 transition-colors">
                      <div className="text-xs text-info-400 font-medium mb-1 flex items-center">
                        <i data-lucide="activity" className="h-3 w-3 mr-1"></i>
                        Active
                      </div>
                      <div className="text-xl font-bold font-mono text-info-300">47</div>
                    </div>
                  </div>

                  <div className="relative group/metric">
                    <div className="absolute inset-0 bg-gradient-to-br from-warning-500/20 to-transparent rounded-xl opacity-0 group-hover/metric:opacity-100 transition-opacity"></div>
                    <div className="relative bg-exchange-700/30 rounded-xl p-3 border border-warning-500/20 hover:border-warning-500/40 transition-colors">
                      <div className="text-xs text-warning-400 font-medium mb-1 flex items-center">
                        <i data-lucide="zap" className="h-3 w-3 mr-1"></i>
                        Speed
                      </div>
                      <div className="text-xl font-bold font-mono text-warning-300">0.3s</div>
                    </div>
                  </div>
                </div>

                {/* Neural network visualization */}
                <div className="relative bg-gradient-to-br from-exchange-700/20 to-exchange-800/40 rounded-2xl p-4 border border-exchange-600/30">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-success-500 rounded-lg blur-sm animate-pulse"></div>
                        <div className="relative bg-gradient-to-br from-success-500 to-success-600 p-1.5 rounded-lg">
                          <i data-lucide="brain" className="h-4 w-4 text-black"></i>
                        </div>
                      </div>
                      <span className="font-semibold text-white">Neural Prediction</span>
                    </div>
                    <div className="text-xs text-gray-400 bg-exchange-700/50 px-2 py-1 rounded-full">Next 1h</div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex -space-x-1">
                        {baseLogo ? (
                          <img
                            className="w-8 h-8 rounded-full bg-exchange-600 object-contain border-2 border-success-500/50"
                            src={baseLogo}
                            alt={`${baseSym || ''} logo`}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              target.nextElementSibling?.classList.remove('-ml-2');
                            }}
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 border-2 border-success-500/50 flex items-center justify-center text-white font-bold text-xs">
                            {baseSym?.charAt(0) || 'S'}
                          </div>
                        )}
                        {quoteLogo ? (
                          <img
                            className="w-8 h-8 rounded-full bg-exchange-600 object-contain border-2 border-success-500/50 -ml-2"
                            src={quoteLogo}
                            alt={`${quoteSym || ''} logo`}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-info-500 to-info-600 border-2 border-success-500/50 -ml-2 flex items-center justify-center text-white font-bold text-xs">
                            {quoteSym?.charAt(0) || 'U'}
                          </div>
                        )}
                      </div>
                      <div>
                        <div className="text-sm font-bold text-white">{pairName}</div>
                        <div className="text-xs text-gray-400">Confidence: 97.3%</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-success-400 flex items-center">
                        <i data-lucide="arrow-up-right" className="h-4 w-4 mr-1"></i>
                        +8.4%
                      </div>
                      <div className="text-xs text-gray-400">Predicted gain</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating quantum badge */}
          <div className="absolute -bottom-6 -left-6 group/badge">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-success-500 to-info-500 rounded-2xl blur-lg opacity-60 group-hover/badge:opacity-80 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-primary-500 via-success-500 to-info-500 text-black font-black px-4 py-3 rounded-2xl shadow-2xl border border-white/20">
              <div className="flex items-center space-x-2">
                <i data-lucide="shield-check" className="h-4 w-4 animate-pulse"></i>
                <span className="text-sm">SELF CUSTODIAL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;