import React, { useState, useEffect } from 'react';
import { usePerformance, formatEth, formatPct } from '../hooks/usePerformance';

const clampPct = (n: number) => Math.max(0, Math.min(100, n));

const Metrics: React.FC = () => {
  const { metrics, offline, lastUpdated } = usePerformance();
  const [pulseNodes, setPulseNodes] = useState<number[]>([]);

  const active = metrics?.activeTrades ?? 12;
  const invested = metrics?.totalInvested ?? 45.7;
  const current = metrics?.currentValue ?? 52.3;
  const success = metrics?.successRate ?? 87.4;

  const activeTradesPct = clampPct((active / 50) * 100);
  const investedPct = clampPct((invested / 100) * 100);
  const valuePct = clampPct((current / 100) * 100);
  const successPct = clampPct(success);

  const pnlPct = invested > 0 ? ((current - invested) / invested) * 100 : 14.4;

  // Animate neural network nodes
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseNodes(prev => {
        const newNodes = [...prev];
        // Add random node
        if (Math.random() > 0.7) {
          newNodes.push(Date.now());
        }
        // Remove old nodes
        return newNodes.filter(node => Date.now() - node < 3000);
      });
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="metrics" className="relative overflow-hidden bg-gradient-to-b from-black via-exchange-900 to-exchange-800">
      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          {/* Connection Lines */}
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Animated connection paths */}
          <path d="M100,200 Q300,100 500,200 T900,200" stroke="url(#connectionGradient)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="4s" repeatCount="indefinite" />
          </path>
          <path d="M200,400 Q400,300 600,400 T1000,400" stroke="url(#connectionGradient)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-dasharray" values="1000,0;0,1000;1000,0" dur="5s" repeatCount="indefinite" />
          </path>
          <path d="M150,600 Q350,500 550,600 T950,600" stroke="url(#connectionGradient)" strokeWidth="2" fill="none">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,0;0,1000" dur="6s" repeatCount="indefinite" />
          </path>

          {/* Neural Nodes */}
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              cx={100 + (i * 90)}
              cy={200 + Math.sin(i) * 100}
              r={pulseNodes.includes(i) ? "8" : "4"}
              fill={pulseNodes.includes(i) ? "#06b6d4" : "#374151"}
              opacity={pulseNodes.includes(i) ? "1" : "0.6"}
            >
              <animate attributeName="r" values="4;8;4" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            </circle>
          ))}
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">

        {/* Header - Matching other components */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-success-500/30 bg-exchange-800 px-4 py-1.5 text-sm text-success-400 mb-5">
            <div className="relative">
              <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 bg-success-500 rounded-full animate-ping"></div>
            </div>
            <span>LIVE PERFORMANCE METRICS</span>
          </div>

          <h2 className="font-display text-4xl font-bold md:text-5xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6">
            Neural Performance Dashboard
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Real-time AI trading metrics with advanced neural network visualization and performance analytics.
          </p>
        </div>

        {offline && (
          <div className="flex justify-center mb-12">
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl px-6 py-3 backdrop-blur-xl">
              <div className="flex items-center space-x-3 text-red-400">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-mono text-sm">NEURAL LINK DISCONNECTED - CACHED DATA ACTIVE</span>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Neural Metrics Grid */}
        <div className="relative">
          {/* Floating Central Command Hub */}
          <div className="flex justify-center mb-20">
            <div className="relative group">
              {/* Outer glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-info-500/20 to-success-500/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>

              {/* Main hub */}
              <div className="relative w-24 h-24 bg-gradient-to-br from-primary-500 via-info-500 to-success-500 rounded-full flex items-center justify-center shadow-2xl">
                <div className="w-20 h-20 bg-exchange-900/90 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/10">
                  <div className="text-center">
                    <svg className="w-6 h-6 text-white mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                    <div className="text-xs text-gray-300 font-mono">AI</div>
                  </div>
                </div>
              </div>

              {/* Animated orbital rings */}
              <div className="absolute inset-0 w-24 h-24 border border-primary-500/30 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute -inset-2 w-28 h-28 border border-success-500/20 rounded-full animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }}></div>
              <div className="absolute -inset-4 w-32 h-32 border border-info-500/10 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced Orbital Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

            {/* Connection lines between cards - visible on large screens */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 1200 400">
                <defs>
                  <linearGradient id="cardConnection" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path d="M300,200 Q600,100 900,200" stroke="url(#cardConnection)" strokeWidth="2" fill="none" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;-10" dur="2s" repeatCount="indefinite" />
                </path>
              </svg>
            </div>

            {/* Active Positions - Enhanced Design */}
            <div className="group relative transform hover:scale-105 transition-all duration-500">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/30 via-primary-400/20 to-primary-500/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              {/* Main card */}
              <div className="relative bg-gradient-to-br from-exchange-800/90 to-exchange-900/90 backdrop-blur-xl border border-primary-500/20 rounded-3xl p-6 hover:border-primary-500/50 transition-all duration-500 shadow-2xl">

                {/* Status indicator */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-success-500 rounded-full animate-pulse shadow-lg shadow-success-500/50"></div>

                {/* Icon with floating effect */}
                <div className="relative mb-6 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/25">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  {/* Floating particles */}
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary-300 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="text-xs font-mono text-gray-400 mb-2 tracking-wider">ACTIVE POSITIONS</div>
                    <div className="text-3xl font-black text-primary-400 font-mono tracking-tight">{active}</div>
                  </div>

                  {/* Enhanced Progress Bar */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-500">UTILIZATION</span>
                      <span className="text-primary-400 font-bold">{Math.round(activeTradesPct)}%</span>
                    </div>
                    <div className="relative h-2 bg-exchange-700/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary-600 via-primary-500 to-primary-400 rounded-full transition-all duration-1000 ease-out relative"
                        style={{ width: `${activeTradesPct}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                        <div className="absolute right-0 top-0 w-1 h-full bg-white/60 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Capital Deployed */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-info-500/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-exchange-800/80 to-exchange-900/80 backdrop-blur-xl border border-info-500/30 rounded-3xl p-8 hover:border-info-500/60 transition-all duration-500">

                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-info-500 to-info-600 rounded-2xl flex items-center justify-center transform rotate-45">
                    <div className="transform -rotate-45">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-info-500 rounded-full animate-pulse"></div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-mono text-gray-400 mb-2">CAPITAL_DEPLOYED</div>
                    <div className="text-4xl font-black text-info-400 font-mono">{formatEth(invested)}</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-500">GROWTH_RATE</span>
                      <span className="text-info-400">{formatPct(pnlPct)}</span>
                    </div>
                    <div className="h-2 bg-exchange-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-info-500 to-info-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${investedPct}%` }}
                      >
                        <div className="h-full bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio Value */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-success-500/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-exchange-800/80 to-exchange-900/80 backdrop-blur-xl border border-success-500/30 rounded-3xl p-8 hover:border-success-500/60 transition-all duration-500">

                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-success-500 to-success-600 rounded-2xl flex items-center justify-center transform rotate-45">
                    <div className="transform -rotate-45">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-success-500 rounded-full animate-pulse"></div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-mono text-gray-400 mb-2">PORTFOLIO_VALUE</div>
                    <div className="text-4xl font-black text-success-400 font-mono">{formatEth(current)}</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-500">P&L_STATUS</span>
                      <span className={pnlPct >= 0 ? 'text-success-400' : 'text-red-400'}>{formatPct(pnlPct)}</span>
                    </div>
                    <div className="h-2 bg-exchange-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ease-out ${pnlPct >= 0 ? 'bg-gradient-to-r from-success-500 to-success-400' : 'bg-gradient-to-r from-red-500 to-red-400'
                          }`}
                        style={{ width: `${valuePct}%` }}
                      >
                        <div className="h-full bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Win Rate */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative bg-gradient-to-br from-exchange-800/80 to-exchange-900/80 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 hover:border-purple-500/60 transition-all duration-500">

                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center transform rotate-45">
                    <div className="transform -rotate-45">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full animate-pulse"></div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-mono text-gray-400 mb-2">SUCCESS_RATE</div>
                    <div className="text-4xl font-black text-purple-400 font-mono">{Math.round(success)}%</div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-500">CONSISTENCY</span>
                      <span className="text-purple-400">{Math.round(success)}/100</span>
                    </div>
                    <div className="h-2 bg-exchange-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${successPct}%` }}
                      >
                        <div className="h-full bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Neural Performance Matrix */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-info-500/10 to-success-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-exchange-800/60 to-exchange-900/60 backdrop-blur-xl border border-exchange-600/50 rounded-3xl p-8">

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-success-500 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white font-mono">NEURAL_PERFORMANCE_MATRIX</h3>
                    <p className="text-sm text-gray-400 font-mono">Real-time AI decision analysis</p>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`text-3xl font-black font-mono ${pnlPct >= 0 ? 'text-success-400' : 'text-red-400'}`}>
                    {formatPct(pnlPct)}
                  </div>
                  <div className="text-xs text-gray-400 font-mono">TOTAL_PERFORMANCE</div>
                </div>
              </div>

              {/* Matrix Visualization */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'NEURAL_EFFICIENCY', value: 94.7, color: 'primary' },
                  { label: 'RISK_MITIGATION', value: 99.2, color: 'info' },
                  { label: 'ALPHA_GENERATION', value: 87.3, color: 'success' }
                ].map((metric, i) => (
                  <div key={i} className="bg-exchange-700/30 rounded-xl p-4 border border-exchange-600/30">
                    <div className="text-xs font-mono text-gray-400 mb-2">{metric.label}</div>
                    <div className={`text-2xl font-black font-mono text-${metric.color}-400`}>{metric.value}%</div>
                    <div className="mt-2 h-1 bg-exchange-600 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-${metric.color}-500 rounded-full transition-all duration-2000 ease-out`}
                        style={{ width: `${metric.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Status Indicators */}
          <div className="mt-12 flex justify-center">
            <div className="bg-exchange-800/50 backdrop-blur-xl border border-exchange-600/30 rounded-2xl px-8 py-4">
              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-mono text-gray-300">NEURAL_NETWORK_ACTIVE</span>
                </div>

                {lastUpdated && (
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-info-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-mono text-gray-400">
                      LAST_UPDATE: {Math.max(1, Math.round((Date.now() - lastUpdated) / 1000))}s
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Metrics;