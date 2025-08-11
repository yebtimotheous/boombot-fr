import React from 'react';
import { useLucide } from '../hooks/useLucide';

const Pricing: React.FC = () => {
  useLucide();

  return (
    <section id="pricing" className="border-t border-exchange-700/50 bg-gradient-to-b from-exchange-900 to-exchange-900/90 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-info-500/5 rounded-full blur-3xl translate-y-1/2"></div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm text-primary-400 mb-6">
            <i data-lucide="key" className="h-4 w-4"></i>
            <span>SELF-CUSTODIAL TRADING</span>
          </div>
          <h2 className="font-display text-4xl font-bold md:text-5xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6">
            Flexible Deployment Options
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect solution for your needs - from open-source community access to <span className="text-primary-400 font-medium">enterprise-grade</span> infrastructure.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Community */}
          <div className="price-card bg-gradient-to-br from-exchange-800/50 to-exchange-900/70 border border-exchange-700/50 rounded-2xl p-8 backdrop-filter backdrop-blur-sm hover:border-exchange-600/50 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="price-title text-2xl font-bold text-gray-200">Community</h3>
                <p className="text-sm text-gray-400 mt-1">Perfect for developers and enthusiasts</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-exchange-700/50 text-base font-medium text-gray-300">FREE</div>
            </div>
            <ul className="price-list space-y-4 mb-8">
              <li className="flex items-start"><i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"></i><span>Full source code access</span></li>
              <li className="flex items-start"><i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"></i><span>Core trading strategies</span></li>
              <li className="flex items-start"><i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"></i><span>Simulation mode</span></li>
              <li className="flex items-start"><i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"></i><span>Basic performance metrics</span></li>
              <li className="flex items-start opacity-60"><i data-lucide="x-circle" className="h-5 w-5 text-gray-600 mr-3 mt-0.5 flex-shrink-0"></i><span>Live trading dashboard</span></li>
            </ul>
            <a href="https://github.com" className="price-cta w-full inline-flex items-center justify-center rounded-lg border border-exchange-600 bg-exchange-800 px-5 py-3 font-medium text-gray-200 hover:bg-exchange-700/70 hover:border-exchange-500 transition-colors">
              <i data-lucide="github" className="mr-2 h-4 w-4"></i> View on GitHub
            </a>
          </div>

          {/* Operator */}
          <div className="price-card bg-gradient-to-br from-exchange-800/50 to-exchange-900/70 border-2 border-primary-500/50 rounded-2xl p-8 backdrop-filter backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-20"></div>
            <div className="relative">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-medium mb-6">
                <i data-lucide="star" className="h-3 w-3 mr-1"></i>
                <span>MOST POPULAR</span>
              </div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="price-title text-2xl font-bold text-gray-200">Operator</h3>
                  <p className="text-sm text-gray-400 mt-1">For active traders and funds</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-primary-500 text-base font-bold text-black">$150/mo</div>
              </div>
              <ul className="price-list space-y-4 mb-8">
                <li className="flex items-start"><i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"></i><span>Everything in Community</span></li>
                <li className="flex items-start"><i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"></i><span>Full trading dashboard</span></li>
                <li className="flex items-start"><i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"></i><span>Advanced risk controls</span></li>
                <li className="flex items-start"><i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"></i><span>Terminal streaming</span></li>
                <li className="flex items-start"><i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"></i><span>Real-time alerts</span></li>
              </ul>
              <a href="/" className="price-cta w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary-500 to-primary-400 px-5 py-3 font-medium text-black hover:from-primary-400 hover:to-primary-300 shadow-lg shadow-primary-500/20 transition-all">
                Launch App <i data-lucide="arrow-right" className="ml-2 h-4 w-4"></i>
              </a>
            </div>
          </div>

          {/* Enterprise */}
          <div className="price-card bg-gradient-to-br from-exchange-800/50 to-exchange-900/70 border border-exchange-700/50 rounded-2xl p-8 backdrop-filter backdrop-blur-sm hover:border-exchange-600/50 transition-all duration-300 group">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="price-title text-2xl font-bold text-gray-200">Enterprise</h3>
                <p className="text-sm text-gray-400 mt-1">For institutions and large funds</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-exchange-700/50 text-base font-medium text-gray-300">CUSTOM</div>
            </div>
            <ul className="price-list space-y-4 mb-8">
              <li className="flex items-start"><i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"></i><span>Everything in Operator</span></li>
              <li className="flex items-start"><i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"></i><span>Custom strategy development</span><span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-info-500/20 text-info-400">BETA</span></li>
              <li className="flex items-start"><i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"></i><span>SLA & 24/7 support</span></li>
              <li className="flex items-start"><i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"></i><span>Advanced analytics</span></li>
              <li className="flex items-start"><i data-lucide="check-circle" className="h-5 w-5 text-success-500 mr-3 mt-0.5 flex-shrink-0"></i><span>Compliance & reporting</span></li>
            </ul>
            <a href="mailto:team@example.com" className="price-cta w-full inline-flex items-center justify-center rounded-lg border border-exchange-600 bg-exchange-800 px-5 py-3 font-medium text-gray-200 hover:bg-exchange-700/70 hover:border-exchange-500 transition-colors">
              <i data-lucide="mail" className="mr-2 h-4 w-4"></i> Contact Sales
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center text-gray-300"><i data-lucide="lock" className="h-5 w-5 text-success-500 mr-2"></i><span className="text-sm">Self-custodial by design</span></div>
            <div className="flex items-center text-gray-300"><i data-lucide="zap" className="h-5 w-5 text-primary-500 mr-2"></i><span className="text-sm">Open-source core</span></div>
            <div className="flex items-center text-gray-300"><i data-lucide="shield" className="h-5 w-5 text-info-500 mr-2"></i><span className="text-sm">Bring your own infrastructure</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;