import React from 'react';
import { useLucide } from '../hooks/useLucide';

const Features: React.FC = () => {
  useLucide();

  return (
    <section id="features" className="bg-gradient-to-b from-exchange-900 to-exchange-900/60 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-info-500/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm text-primary-400 mb-6">
            <span className="inline-block h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
            <span>INSTITUTIONAL-GRADE TRADING</span>
          </div>
          <h2 className="font-display text-4xl font-bold md:text-5xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6">
            Safety, Speed & Clarity
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Built for serious operators demanding <span className="text-primary-400 font-medium">visibility</span>,{' '}
            <span className="text-info-400 font-medium">performance</span>, and{' '}
            <span className="text-success-400 font-medium">risk control</span>.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="feature-card group bg-gradient-to-br from-exchange-800/50 to-exchange-900/50 border border-exchange-700/50 hover:border-primary-500/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2">
            <div className="feature-icon w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-500/20 transition-colors">
              <i data-lucide="shield-check" className="h-7 w-7 text-primary-400" />
            </div>
            <h3 className="feature-title text-2xl font-bold mb-4">Bank-Grade Security</h3>
            <p className="feature-desc text-gray-400 mb-6">
              Multi-layered protection with on-chain guardrails, real-time monitoring, and instant emergency stop mechanisms.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-300">
                <i data-lucide="check-circle" className="h-4 w-4 text-success-500 mr-2" />
                <span>On-chain risk controls</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <i data-lucide="check-circle" className="h-4 w-4 text-success-500 mr-2" />
                <span>256-bit encryption</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <i data-lucide="check-circle" className="h-4 w-4 text-success-500 mr-2" />
                <span>Real-time alerts</span>
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="feature-card group bg-gradient-to-br from-exchange-800/50 to-exchange-900/50 border border-exchange-700/50 hover:border-info-500/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2">
            <div className="feature-icon w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-info-500/20 transition-colors">
              <i data-lucide="zap" className="h-7 w-7 text-info-400" />
            </div>
            <h3 className="feature-title text-2xl font-bold mb-4">Lightning Execution</h3>
            <p className="feature-desc text-gray-400 mb-6">
              Capture opportunities faster with priority mempool awareness and optimized routing algorithms.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-300">
                <i data-lucide="check-circle" className="h-4 w-4 text-success-500 mr-2" />
                <span>{'<250ms execution'}</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <i data-lucide="check-circle" className="h-4 w-4 text-success-500 mr-2" />
                <span>MEV protection</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <i data-lucide="check-circle" className="h-4 w-4 text-success-500 mr-2" />
                <span>Gas optimization</span>
              </li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="feature-card group bg-gradient-to-br from-exchange-800/50 to-exchange-900/50 border border-exchange-700/50 hover:border-success-500/30 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2">
            <div className="feature-icon w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-success-500/20 transition-colors">
              <i data-lucide="activity" className="h-7 w-7 text-success-400" />
            </div>
            <h3 className="feature-title text-2xl font-bold mb-4">Complete Transparency</h3>
            <p className="feature-desc text-gray-400 mb-6">
              Full visibility into every trade with structured logs, performance dashboards, and detailed analytics.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-sm text-gray-300">
                <i data-lucide="check-circle" className="h-4 w-4 text-success-500 mr-2" />
                <span>Real-time dashboards</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <i data-lucide="check-circle" className="h-4 w-4 text-success-500 mr-2" />
                <span>Trade history</span>
              </li>
              <li className="flex items-center text-sm text-gray-300">
                <i data-lucide="check-circle" className="h-4 w-4 text-success-500 mr-2" />
                <span>Performance metrics</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#how"
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-primary-500 to-primary-400 px-8 py-4 text-base font-medium text-black shadow-lg shadow-primary-500/20 hover:from-primary-400 hover:to-primary-300 transition-all group"
          >
            See how it works
            <i data-lucide="arrow-right" className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-4 text-sm text-gray-500">Trusted by institutional traders and DeFi protocols</p>
        </div>
      </div>
    </section>
  );
};

export default Features;