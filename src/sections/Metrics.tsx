import React from 'react';
import { useLucide } from '../hooks/useLucide';
import { usePerformance, formatEth, formatPct } from '../hooks/usePerformance';

const clampPct = (n: number) => Math.max(0, Math.min(100, n));

const Metrics: React.FC = () => {
  useLucide();
  const { metrics, offline, lastUpdated } = usePerformance();

  const active = metrics?.activeTrades ?? 0;
  const invested = metrics?.totalInvested ?? 0;
  const current = metrics?.currentValue ?? 0;
  const success = metrics?.successRate ?? 0;

  const activeTradesPct = clampPct((active / 50) * 100);
  const investedPct = clampPct((invested / 100) * 100);
  const valuePct = clampPct((current / 100) * 100);
  const successPct = clampPct(success);

  const pnlPct = invested > 0 ? ((current - invested) / invested) * 100 : 0;

  return (
    <section id="metrics" className="border-t border-exchange-700/50 bg-gradient-to-b from-exchange-900/80 to-exchange-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-info-500/5 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-success-500/30 bg-success-500/10 px-4 py-1.5 text-sm text-success-400 mb-6">
            <i data-lucide="trending-up" className="h-4 w-4"></i>
            <span>LIVE PERFORMANCE METRICS</span>
          </div>
          <h2 className="font-display text-4xl font-bold md:text-5xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6">
            Real-Time Trading Performance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent, real-time metrics that demonstrate our consistent performance and risk management capabilities.
          </p>
        </div>
       {offline && (
         <div className="mt-2 flex justify-center">
           <div className="inline-flex items-center space-x-2 rounded-full border border-danger-500/30 bg-danger-500/10 px-3 py-1.5 text-sm text-danger-400">
             <i data-lucide="wifi-off" className="h-4 w-4"></i>
             <span>Backend unreachable — showing cached metrics</span>
           </div>
         </div>
       )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Active Trades */}
          <div className="metric-card bg-gradient-to-br from-exchange-800/60 to-exchange-900/80 border border-exchange-700/50 rounded-2xl p-6 backdrop-filter backdrop-blur-sm hover:border-primary-500/30 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-primary-500/10 group-hover:bg-primary-500/20 transition-colors">
                <i data-lucide="activity" className="h-6 w-6 text-primary-400"></i>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-400">Active Positions</div>
                <div className="text-xl font-bold text-primary-400">{active}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Utilization</span>
                <span className="text-gray-300 font-medium">{Math.round(activeTradesPct)}%</span>
              </div>
              <div className="w-full bg-exchange-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-primary-500 to-primary-400 h-2 rounded-full" style={{ width: `${activeTradesPct}%` }}></div>
              </div>
            </div>
          </div>

          {/* Total Invested */}
          <div className="metric-card bg-gradient-to-br from-exchange-800/60 to-exchange-900/80 border border-exchange-700/50 rounded-2xl p-6 backdrop-filter backdrop-blur-sm hover:border-info-500/30 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-info-500/10 group-hover:bg-info-500/20 transition-colors">
                <i data-lucide="trending-up" className="h-6 w-6 text-info-400"></i>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-400">Capital Deployed</div>
                <div className="text-xl font-bold text-info-400">{formatEth(invested)}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Growth</span>
                <span className="text-gray-300 font-medium">{formatPct(pnlPct)}</span>
              </div>
              <div className="w-full bg-exchange-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-info-500 to-info-400 h-2 rounded-full" style={{ width: `${investedPct}%` }}></div>
              </div>
            </div>
          </div>

          {/* Current Value */}
          <div className="metric-card bg-gradient-to-br from-exchange-800/60 to-exchange-900/80 border border-exchange-700/50 rounded-2xl p-6 backdrop-filter backdrop-blur-sm hover:border-success-500/30 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-success-500/10 group-hover:bg-success-500/20 transition-colors">
                <i data-lucide="dollar-sign" className="h-6 w-6 text-success-400"></i>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-400">Portfolio Value</div>
                <div className="text-xl font-bold text-success-400">{formatEth(current)}</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">P&L</span>
                <span className={`font-medium ${pnlPct >= 0 ? 'text-success-400' : 'text-danger-400'}`}>{formatPct(pnlPct)}</span>
              </div>
              <div className="w-full bg-exchange-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-success-500 to-success-400 h-2 rounded-full" style={{ width: `${valuePct}%` }}></div>
              </div>
            </div>
          </div>

          {/* Success Rate */}
          <div className="metric-card bg-gradient-to-br from-exchange-800/60 to-exchange-900/80 border border-exchange-700/50 rounded-2xl p-6 backdrop-filter backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors">
                <i data-lucide="target" className="h-6 w-6 text-purple-400"></i>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-400">Win Rate</div>
                <div className="text-xl font-bold text-purple-400">{Math.round(success)}%</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-400">Consistency</span>
                <span className="text-gray-300 font-medium">
                  {Math.round((success / 100) * 100)}/{100}
                </span>
              </div>
              <div className="w-full bg-exchange-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-purple-400 h-2 rounded-full" style={{ width: `${successPct}%` }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex items-center space-x-3 rounded-full bg-exchange-800/60 px-4 py-2 text-sm text-gray-300 border border-exchange-700/50">
            <i data-lucide="info" className="h-4 w-4 text-info-400"></i>
            <span>Numbers auto-populate when connected to the BoomBot backend</span>
            {lastUpdated && (
              <span className="text-gray-400">• Updated {Math.max(1, Math.round((Date.now() - lastUpdated) / 1000))}s ago</span>
            )}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-exchange-800/40 to-exchange-900/60 border border-exchange-700/50 rounded-xl p-5 backdrop-filter backdrop-blur-sm">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-primary-500/10 mr-4">
                <i data-lucide="zap" className="h-5 w-5 text-primary-400"></i>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-200">Ultra-Fast Execution</div>
                <div className="text-sm text-gray-400 mt-1">Sub-250ms average latency</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-exchange-800/40 to-exchange-900/60 border border-exchange-700/50 rounded-xl p-5 backdrop-filter backdrop-blur-sm">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-info-500/10 mr-4">
                <i data-lucide="shield" className="h-5 w-5 text-info-400"></i>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-200">Risk Management</div>
                <div className="text-sm text-gray-400 mt-1">99.7% risk mitigation rate</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-exchange-800/40 to-exchange-900/60 border border-exchange-700/50 rounded-xl p-5 backdrop-filter backdrop-blur-sm">
            <div className="flex items-center">
              <div className="p-2 rounded-lg bg-success-500/10 mr-4">
                <i data-lucide="bar-chart-3" className="h-5 w-5 text-success-400"></i>
              </div>
              <div>
                <div className="text-lg font-semibold text-gray-200">Proven Performance</div>
                <div className="text-sm text-gray-400 mt-1">Consistent alpha generation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;