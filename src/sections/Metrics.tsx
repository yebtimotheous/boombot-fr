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
    <section id="metrics" className="border-t border-exchange-700 bg-exchange-900">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 rounded-full border border-success-500/30 bg-exchange-800 px-4 py-1.5 text-sm text-success-400 mb-5">
            <i data-lucide="trending-up" className="h-4 w-4"></i>
            <span>LIVE PERFORMANCE METRICS</span>
          </div>
          <h2 className="font-display text-4xl font-bold md:text-5xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-4">
            Real-Time Trading Performance
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Crisp, high-signal metrics with zero visual noise. Fully static to ensure maximum rendering performance.
          </p>
        </div>

        {offline && (
          <div className="mt-2 flex justify-center mb-8">
            <div className="inline-flex items-center space-x-2 rounded-full border border-danger-500/30 bg-exchange-800 px-3 py-1.5 text-sm text-danger-400">
              <i data-lucide="wifi-off" className="h-4 w-4"></i>
              <span>Backend unreachable — showing cached metrics</span>
            </div>
          </div>
        )}

        {/* Primary stats grid (no hover, no transitions, no blurs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Active Positions */}
          <div className="rounded-2xl border border-exchange-700 bg-exchange-800 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-primary-500/10 mr-3">
                  <i data-lucide="activity" className="h-6 w-6 text-primary-400"></i>
                </div>
                <div className="text-sm text-gray-400">Active Positions</div>
              </div>
              <div className="text-2xl font-bold text-primary-400">{active}</div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1 text-gray-400">
                <span>Utilization</span>
                <span className="text-gray-300 font-medium">{Math.round(activeTradesPct)}%</span>
              </div>
              <div className="w-full bg-exchange-700 rounded-full h-2" aria-hidden="true">
                <div className="bg-primary-500 h-2 rounded-full" style={{ width: `${activeTradesPct}%` }} />
              </div>
            </div>
          </div>

          {/* Capital Deployed */}
          <div className="rounded-2xl border border-exchange-700 bg-exchange-800 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-info-500/10 mr-3">
                  <i data-lucide="trending-up" className="h-6 w-6 text-info-400"></i>
                </div>
                <div className="text-sm text-gray-400">Capital Deployed</div>
              </div>
              <div className="text-2xl font-bold text-info-400 font-mono">{formatEth(invested)}</div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1 text-gray-400">
                <span>Growth</span>
                <span className="text-gray-300 font-medium">{formatPct(pnlPct)}</span>
              </div>
              <div className="w-full bg-exchange-700 rounded-full h-2" aria-hidden="true">
                <div className="bg-info-500 h-2 rounded-full" style={{ width: `${investedPct}%` }} />
              </div>
            </div>
          </div>

          {/* Portfolio Value */}
          <div className="rounded-2xl border border-exchange-700 bg-exchange-800 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-success-500/10 mr-3">
                  <i data-lucide="dollar-sign" className="h-6 w-6 text-success-400"></i>
                </div>
                <div className="text-sm text-gray-400">Portfolio Value</div>
              </div>
              <div className="text-2xl font-bold text-success-400 font-mono">{formatEth(current)}</div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1 text-gray-400">
                <span>P&L</span>
                <span className={`font-medium ${pnlPct >= 0 ? 'text-success-400' : 'text-danger-500'}`}>{formatPct(pnlPct)}</span>
              </div>
              <div className="w-full bg-exchange-700 rounded-full h-2" aria-hidden="true">
                <div className="h-2 rounded-full" style={{ width: `${valuePct}%`, backgroundColor: pnlPct >= 0 ? '#02c076' : '#f84960' }} />
              </div>
            </div>
          </div>

          {/* Win Rate */}
          <div className="rounded-2xl border border-exchange-700 bg-exchange-800 p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="p-2 rounded-lg bg-primary-500/10 mr-3">
                  <i data-lucide="target" className="h-6 w-6 text-primary-400"></i>
                </div>
                <div className="text-sm text-gray-400">Win Rate</div>
              </div>
              <div className="text-2xl font-bold text-primary-400">{Math.round(success)}%</div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1 text-gray-400">
                <span>Consistency</span>
                <span className="text-gray-300 font-medium">{Math.round((success / 100) * 100)}/{100}</span>
              </div>
              <div className="w-full bg-exchange-700 rounded-full h-2" aria-hidden="true">
                <div className="bg-primary-500 h-2 rounded-full" style={{ width: `${successPct}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Detail panel: P&L focus, static bar only */}
        <div className="mt-10 rounded-2xl border border-exchange-700 bg-exchange-800 p-6">
          <div className="flex items-center justify-between mb-4">
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
              />
            </div>
          </div>
        </div>

        {/* Info strip */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center space-x-3 rounded-full bg-exchange-800 px-4 py-2 text-sm text-gray-300 border border-exchange-700">
            <i data-lucide="info" className="h-4 w-4 text-info-400"></i>
            <span>Numbers auto-populate when connected to the BoomBot backend</span>
            {lastUpdated && (
              <span className="text-gray-400">• Updated {Math.max(1, Math.round((Date.now() - lastUpdated) / 1000))}s ago</span>
            )}
          </div>
        </div>

        {/* Simple highlights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-exchange-700 rounded-xl p-5 bg-exchange-800">
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

          <div className="border border-exchange-700 rounded-xl p-5 bg-exchange-800">
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

          <div className="border border-exchange-700 rounded-xl p-5 bg-exchange-800">
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