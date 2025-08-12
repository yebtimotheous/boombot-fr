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
    SOL: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=034',
    USDT: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=034',
    WETH: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=034',
    USDC: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=034',
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

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            AI-Powered Trading with <span className="text-primary-400">Human-Level</span> Risk Intelligence
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
          <div className="relative rounded-2xl border border-exchange-600 bg-exchange-800 shadow-xl overflow-hidden">
            <div className="bg-exchange-700/40 p-4 border-b border-exchange-600">
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg text-gray-100">Performance Overview</span>
                <span className="text-xs font-bold text-success-400 bg-success-500/10 px-2 py-1 rounded">LIVE</span>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl p-4 border border-exchange-700 bg-exchange-800">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-primary-500/10 mr-3">
                      <i data-lucide="trending-up" className="h-5 w-5 text-primary-400"></i>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Total Invested</div>
                      <div className="mt-1 font-mono text-lg font-bold text-primary-400">{formatEth(metrics?.totalInvested)}</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl p-4 border border-exchange-700 bg-exchange-800">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-info-500/10 mr-3">
                      <i data-lucide="dollar-sign" className="h-5 w-5 text-info-400"></i>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Current Value</div>
                      <div className="mt-1 font-mono text-lg font-bold text-info-400">{formatEth(metrics?.currentValue)}</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl p-4 border border-exchange-700 bg-exchange-800">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-success-500/10 mr-3">
                      <i data-lucide="bar-chart-2" className="h-5 w-5 text-success-500"></i>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">24h P&L</div>
                      <div className={`mt-1 font-mono text-lg font-bold ${pnlPct >= 0 ? 'text-success-500' : 'text-danger-500'}`}>
                        {formatPct(pnlPct)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl p-4 border border-exchange-700 bg-exchange-800">
                  <div className="flex items-center">
                    <div className="p-2 rounded-lg bg-warning-500/10 mr-3">
                      <i data-lucide="award" className="h-5 w-5 text-warning-400"></i>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium">Win Rate</div>
                      <div className="mt-1 font-mono text-lg font-bold text-warning-400">
                        {metrics?.successRate ? `${metrics.successRate}%` : '0%'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-5 border border-exchange-700 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-bold text-gray-200 flex items-center">
                    <i data-lucide="pie-chart" className="h-4 w-4 text-primary-400 mr-2"></i>
                    Portfolio Performance
                  </div>
                  <span className={`font-bold text-lg ${pnlPct >= 0 ? 'text-success-400' : 'text-danger-500'}`}>
                    {formatPct(pnlPct)}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Profit/Loss</span>
                    <span className="text-xs font-mono text-gray-300">{pnlPct >= 0 ? '+' : ''}{pnlPct.toFixed(2)}%</span>
                  </div>
                  <div className="w-full bg-exchange-700 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${pnlPct >= 0 ? 'bg-success-500' : 'bg-danger-500'}`}
                      style={{ width: `${Math.min(100, Math.max(0, Math.abs(pnlPct) * 3))}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-exchange-600 bg-exchange-800 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm font-bold text-gray-200 flex items-center">
                    <i data-lucide="trending-up" className="h-4 w-4 text-yellow-400 mr-2"></i>
                    Top Performers
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex -space-x-1">
                        <img
                          loading="lazy"
                          decoding="async"
                          className="inline-block h-8 w-8 rounded-full bg-exchange-700 object-contain"
                          src={baseLogo}
                          alt={`${baseSym || ''} logo`}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          className="inline-block h-8 w-8 rounded-full bg-exchange-700 object-contain"
                          src={quoteLogo}
                          alt={`${quoteSym || ''} logo`}
                        />
                      </div>
                      <div className="ml-2">
                        <div className="font-bold text-gray-100 text-sm">{pairName}</div>
                        <div className="text-xs text-gray-400">Uniswap V3</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-success-500 text-sm">+12.4%</div>
                      <div className="text-xs text-gray-400">24h</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-exchange-700 text-purple-400 font-bold text-xs">
                        WB
                      </div>
                      <div className="ml-2">
                        <div className="font-bold text-gray-100 text-sm">WBTC/ETH</div>
                        <div className="text-xs text-gray-400">SushiSwap</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-success-500 text-sm">+8.7%</div>
                      <div className="text-xs text-gray-400">24h</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-exchange-700 text-blue-400 font-bold text-xs">
                        L
                      </div>
                      <div className="ml-2">
                        <div className="font-bold text-gray-100 text-sm">LINK/USDT</div>
                        <div className="text-xs text-gray-400">Balancer</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono font-bold text-success-500 text-sm">+5.3%</div>
                      <div className="text-xs text-gray-400">24h</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 text-center">
                <div className="inline-flex items-center text-xs text-gray-500">
                  Updated recently • Real-time data
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-primary-500 to-info-500 text-black text-xs font-black px-4 py-2 rounded-lg shadow-lg">
            <i data-lucide="shield" className="inline h-3 w-3 mr-1" />
            SELF-CUSTODIAL
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;