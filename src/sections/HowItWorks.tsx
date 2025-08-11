import React from 'react';
import { useLucide } from '../hooks/useLucide';

const HowItWorks: React.FC = () => {
  useLucide();

  return (
    <section id="how" className="border-t border-exchange-700/50 bg-gradient-to-b from-exchange-900 to-exchange-900/80 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-info-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-info-500/30 bg-info-500/10 px-4 py-1.5 text-sm text-info-400 mb-6">
            <i data-lucide="route" className="h-4 w-4" />
            <span>END-TO-END AUTOMATION</span>
          </div>
          <h2 className="font-display text-4xl font-bold md:text-5xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6">
            From Signal to Settlement
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A fully automated trading pipeline designed for institutional-grade performance with{' '}
            <span className="text-primary-400 font-medium">risk-aware controls</span> at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary-500/10 to-info-500/10 blur-xl opacity-70"></div>
            <div className="relative bg-gradient-to-br from-exchange-800/50 to-exchange-900/70 border border-exchange-700/50 rounded-2xl p-8 backdrop-filter backdrop-blur-sm">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-200">Execution Pipeline</h3>
                  <p className="text-sm text-gray-400 mt-1">Real-time monitoring and control</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-success-500"></span>
                  </span>
                  <span className="text-xs text-success-400 font-medium">LIVE</span>
                </div>
              </div>

              <div className="space-y-6">
                {/* Step 1 */}
                <div className="flex group">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-exchange-700 border-2 border-primary-500/50 group-hover:border-primary-500 transition-colors">
                      <span className="text-primary-400 font-bold text-sm">1</span>
                    </div>
                    <div className="w-0.5 h-full bg-gradient-to-b from-primary-500/50 to-exchange-700 mt-2"></div>
                  </div>
                  <div className="pb-6 group-hover:translate-x-1 transition-transform">
                    <h4 className="font-semibold text-gray-200 flex items-center">
                      Signal Detection
                      <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-primary-500/20 text-primary-400">AI-Powered</span>
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">Multi-source data aggregation and anomaly detection</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-xs px-2 py-1 bg-exchange-700/50 rounded text-gray-300">On-chain</span>
                      <span className="text-xs px-2 py-1 bg-exchange-700/50 rounded text-gray-300">Social</span>
                      <span className="text-xs px-2 py-1 bg-exchange-700/50 rounded text-gray-300">News</span>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex group">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-exchange-700 border-2 border-info-500/50 group-hover:border-info-500 transition-colors">
                      <span className="text-info-400 font-bold text-sm">2</span>
                    </div>
                    <div className="w-0.5 h-full bg-gradient-to-b from-exchange-700 to-success-500/50 mt-2"></div>
                  </div>
                  <div className="pb-6 group-hover:translate-x-1 transition-transform">
                    <h4 className="font-semibold text-gray-200 flex items-center">
                      Risk Validation
                      <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-info-500/20 text-info-400">Simulation</span>
                    </h4>
                    <p className="text-gray-400 text-sm mt-1">Comprehensive risk assessment and strategy validation</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-xs px-2 py-1 bg-exchange-700/50 rounded text-gray-300">Backtesting</span>
                      <span className="text-xs px-2 py-1 bg-exchange-700/50 rounded text-gray-300">Stress Tests</span>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex group">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-exchange-700 border-2 border-success-500/50 group-hover:border-success-500 transition-colors">
                      <span className="text-success-400 font-bold text-sm">3</span>
                    </div>
                    <div className="w-0.5 h-full bg-gradient-to-b from-success-500/50 to-exchange-700 mt-2"></div>
                  </div>
                  <div className="pb-6 group-hover:translate-x-1 transition-transform">
                    <h4 className="font-semibold text-gray-200">Smart Execution</h4>
                    <p className="text-gray-400 text-sm mt-1">Optimal routing with MEV protection and gas optimization</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-xs px-2 py-1 bg-exchange-700/50 rounded text-gray-300">0x API</span>
                      <span className="text-xs px-2 py-1 bg-exchange-700/50 rounded text-gray-300">1inch</span>
                      <span className="text-xs px-2 py-1 bg-exchange-700/50 rounded text-gray-300">Uniswap</span>
                    </div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex group">
                  <div className="flex flex-col items-center mr-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-exchange-700 border-2 border-purple-500/50 group-hover:border-purple-500 transition-colors">
                      <span className="text-purple-400 font-bold text-sm">4</span>
                    </div>
                  </div>
                  <div className="group-hover:translate-x-1 transition-transform">
                    <h4 className="font-semibold text-gray-200">Continuous Monitoring</h4>
                    <p className="text-gray-400 text-sm mt-1">Real-time P&L tracking and automated risk management</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="text-xs px-2 py-1 bg-exchange-700/50 rounded text-gray-300">Stop-Loss</span>
                      <span className="text-xs px-2 py-1 bg-exchange-700/50 rounded text-gray-300">Take-Profit</span>
                      <span className="text-xs px-2 py-1 bg-exchange-700/50 rounded text-gray-300">Trailing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance summary */}
          <div>
            <div className="bg-gradient-to-br from-exchange-800/50 to-exchange-900/70 border border-exchange-700/50 rounded-2xl p-8 backdrop-filter backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-gray-100 mb-6">Performance Metrics</h3>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">Execution Speed</span>
                    <span className="text-primary-400 font-semibold">180ms avg</span>
                  </div>
                  <div className="w-full bg-exchange-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-primary-500 to-primary-400 h-2.5 rounded-full" style={{ width: '92%' }} />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Sub-250ms target</div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">Risk Mitigation</span>
                    <span className="text-info-400 font-semibold">99.7%</span>
                  </div>
                  <div className="w-full bg-exchange-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-info-500 to-info-400 h-2.5 rounded-full" style={{ width: '98%' }} />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Pre-trade validation</div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">Uptime Reliability</span>
                    <span className="text-success-400 font-semibold">99.95%</span>
                  </div>
                  <div className="w-full bg-exchange-700 rounded-full h-2.5">
                    <div className="bg-gradient-to-r from-success-500 to-success-400 h-2.5 rounded-full" style={{ width: '99%' }} />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">SLA guaranteed</div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-exchange-700/50">
                <h4 className="font-semibold text-gray-200 mb-4">Key Capabilities</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-2" />
                    <span className="text-sm text-gray-300">Multi-chain support</span>
                  </div>
                  <div className="flex items-center">
                    <i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-2" />
                    <span className="text-sm text-gray-300">Cross-asset trading</span>
                  </div>
                  <div className="flex items-center">
                    <i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-2" />
                    <span className="text-sm text-gray-300">Institutional custody</span>
                  </div>
                  <div className="flex items-center">
                    <i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-2" />
                    <span className="text-sm text-gray-300">Compliance ready</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="/setting.html" className="flex-1 inline-flex items-center justify-center rounded-lg border border-exchange-600 bg-exchange-800 px-5 py-3 font-medium text-gray-200 hover:bg-exchange-700/70 hover:border-exchange-500 transition-colors">
                  <i data-lucide="settings" className="mr-2 h-4 w-4" />
                  Configuration
                </a>
                <a href="/analytics.html" className="flex-1 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary-500 to-primary-400 px-5 py-3 font-medium text-black hover:from-primary-400 hover:to-primary-300 shadow-lg shadow-primary-500/20 transition-all">
                  <i data-lucide="activity" className="mr-2 h-4 w-4" />
                  Live Dashboard
                </a>
              </div>
            </div>

            <div className="mt-6 bg-gradient-to-br from-exchange-800/50 to-exchange-900/70 border border-exchange-700/50 rounded-2xl p-6 backdrop-filter backdrop-blur-sm">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <i data-lucide="shield-alert" className="h-5 w-5 text-danger-500"></i>
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold text-gray-200">Enterprise-Grade Security</h4>
                  <p className="text-sm text-gray-400 mt-1">
                    Bank-level encryption, role-based access controls, and real-time monitoring ensure your assets are always protected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
};

export default HowItWorks;