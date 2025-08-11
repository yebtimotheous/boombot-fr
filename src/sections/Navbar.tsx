import React, { useEffect, useState } from 'react';
import { useLucide } from '../hooks/useLucide';
import { useActiveNav } from '../hooks/useActiveNav';

const Navbar: React.FC = () => {
  useLucide();
  useActiveNav();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mProduct, setMProduct] = useState(false);
  const [mSolutions, setMSolutions] = useState(false);
  const [mResources, setMResources] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const header = document.querySelector('.site-header');
      if (!header) return;
      if (window.scrollY > 10) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.classList.add('mobile-menu-open');
    else document.body.classList.remove('mobile-menu-open');
  }, [mobileOpen]);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-exchange-700/20 bg-exchange-900/90 backdrop-blur-3xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary-500/30 to-info-500/20 blur opacity-70"></div>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-exchange-800 to-exchange-900 border border-exchange-700 shadow-lg">
                <img src="/img/logo.svg" alt="BoomBot Logo" className="h-7 w-7" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">BoomBot</span>
              <span className="text-[10px] font-medium text-primary-400 tracking-wider uppercase">AUTONOMOUS TRADING</span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          <div className="relative group">
            <button className="nav-link flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300">
              Product
              <i data-lucide="chevron-down" className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-180"></i>
            </button>
            <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-exchange-800/95 border border-exchange-700/50 backdrop-blur-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="p-2">
                <a href="#product" className="flex items-start rounded-xl px-4 py-3 text-gray-300 hover:bg-exchange-700/60 hover:text-white transition-colors">
                  <i data-lucide="bot" className="h-5 w-5 text-primary-400 mt-0.5 mr-3"></i>
                  <div>
                    <div className="font-medium">AI Trading Engine</div>
                    <div className="text-xs text-gray-400 mt-1">Machine learning powered</div>
                  </div>
                </a>
                <a href="#features" className="flex items-start rounded-xl px-4 py-3 text-gray-300 hover:bg-exchange-700/60 hover:text-white transition-colors">
                  <i data-lucide="shield-check" className="h-5 w-5 text-info-400 mt-0.5 mr-3"></i>
                  <div>
                    <div className="font-medium">Risk Management</div>
                    <div className="text-xs text-gray-400 mt-1">Institutional-grade controls</div>
                  </div>
                </a>
                <a href="#how" className="flex items-start rounded-xl px-4 py-3 text-gray-300 hover:bg-exchange-700/60 hover:text-white transition-colors">
                  <i data-lucide="workflow" className="h-5 w-5 text-success-400 mt-0.5 mr-3"></i>
                  <div>
                    <div className="font-medium">Execution Pipeline</div>
                    <div className="text-xs text-gray-400 mt-1">Signal to settlement</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="relative group">
            <button className="nav-link flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300">
              Solutions
              <i data-lucide="chevron-down" className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-180"></i>
            </button>
            <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-exchange-800/95 border border-exchange-700/50 backdrop-blur-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="p-2">
                <a href="#metrics" className="flex items-start rounded-xl px-4 py-3 text-gray-300 hover:bg-exchange-700/60 hover:text-white transition-colors">
                  <i data-lucide="trending-up" className="h-5 w-5 text-primary-400 mt-0.5 mr-3"></i>
                  <div>
                    <div className="font-medium">Performance Dashboard</div>
                    <div className="text-xs text-gray-400 mt-1">Real-time metrics</div>
                  </div>
                </a>
                <a href="/analytics.html" className="flex items-start rounded-xl px-4 py-3 text-gray-300 hover:bg-exchange-700/60 hover:text-white transition-colors">
                  <i data-lucide="bar-chart-3" className="h-5 w-5 text-info-400 mt-0.5 mr-3"></i>
                  <div>
                    <div className="font-medium">Advanced Analytics</div>
                    <div className="text-xs text-gray-400 mt-1">Deep trading insights</div>
                  </div>
                </a>
                <a href="/setting.html" className="flex items-start rounded-xl px-4 py-3 text-gray-300 hover:bg-exchange-700/60 hover:text-white transition-colors">
                  <i data-lucide="settings" className="h-5 w-5 text-success-400 mt-0.5 mr-3"></i>
                  <div>
                    <div className="font-medium">Custom Strategies</div>
                    <div className="text-xs text-gray-400 mt-1">Tailored configurations</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <a href="#pricing" className="nav-link px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300">Pricing</a>

          <div className="relative group">
            <button className="nav-link flex items-center px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300">
              Resources
              <i data-lucide="chevron-down" className="ml-1.5 h-4 w-4 transition-transform group-hover:rotate-180"></i>
            </button>
            <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-exchange-800/95 border border-exchange-700/50 backdrop-blur-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
              <div className="p-2">
                <a href="../WHITEPAPER.md" className="flex items-start rounded-xl px-4 py-3 text-gray-300 hover:bg-exchange-700/60 hover:text-white transition-colors">
                  <i data-lucide="file-text" className="h-5 w-5 text-primary-400 mt-0.5 mr-3"></i>
                  <div>
                    <div className="font-medium">Whitepaper</div>
                    <div className="text-xs text-gray-400 mt-1">Technical specification</div>
                  </div>
                </a>
                <a href="#" className="flex items-start rounded-xl px-4 py-3 text-gray-300 hover:bg-exchange-700/60 hover:text-white transition-colors">
                  <i data-lucide="book-open" className="h-5 w-5 text-info-400 mt-0.5 mr-3"></i>
                  <div>
                    <div className="font-medium">Documentation</div>
                    <div className="text-xs text-gray-400 mt-1">API & integration guides</div>
                  </div>
                </a>
                <a href="https://github.com" className="flex items-start rounded-xl px-4 py-3 text-gray-300 hover:bg-exchange-700/60 hover:text-white transition-colors">
                  <i data-lucide="github" className="h-5 w-5 text-success-400 mt-0.5 mr-3"></i>
                  <div>
                    <div className="font-medium">GitHub</div>
                    <div className="text-xs text-gray-400 mt-1">Open-source codebase</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-3">
          <div className="hidden lg:flex items-center space-x-2 rounded-full bg-exchange-800/60 px-3 py-1.5 border border-exchange-700/50">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500"></span>
            </span>
            <span className="text-xs font-medium text-success-400">LIVE</span>
          </div>

          <a href="/login.html" className="hidden md:inline-flex rounded-xl px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white transition-colors group">
            <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent group-hover:from-white group-hover:to-gray-200">Sign in</span>
          </a>

          <a href="/" className="inline-flex items-center rounded-xl bg-gradient-to-r from-primary-500 to-primary-400 px-5 py-2.5 text-sm font-medium text-black shadow-lg shadow-primary-500/30 hover:from-primary-400 hover:to-primary-300 hover:shadow-primary-500/40 transition-all group">
            Launch App
            <i data-lucide="arrow-up-right" className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
          </a>

          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="lg:hidden rounded-xl p-2.5 text-gray-400 hover:text-white hover:bg-exchange-800/50 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <i data-lucide="menu" className="h-6 w-6"></i>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`mx-4 mb-4 ${mobileOpen ? '' : 'hidden'} rounded-3xl border border-exchange-700/50 bg-exchange-800/98 backdrop-blur-2xl md:hidden shadow-2xl`} id="mobile-menu">
        <div className="p-3">
          <div className="space-y-2">
            <div className="rounded-xl bg-exchange-700/30 p-2">
              <button
                className="w-full px-4 py-3 text-left rounded-lg text-gray-300 flex items-center justify-between"
                onClick={() => setMProduct((s) => !s)}
                aria-expanded={mProduct}
              >
                Product
                <i data-lucide="chevron-down" className="h-4 w-4"></i>
              </button>
              <div className={`mt-1 pl-4 space-y-1 ${mProduct ? '' : 'hidden'}`} id="mobile-product">
                <a href="#product" className="block px-4 py-2.5 text-sm text-gray-400 rounded-lg hover:bg-exchange-700/60 hover:text-white">AI Trading Engine</a>
                <a href="#features" className="block px-4 py-2.5 text-sm text-gray-400 rounded-lg hover:bg-exchange-700/60 hover:text-white">Risk Management</a>
                <a href="#how" className="block px-4 py-2.5 text-sm text-gray-400 rounded-lg hover:bg-exchange-700/60 hover:text-white">Execution Pipeline</a>
              </div>
            </div>

            <div className="rounded-xl bg-exchange-700/30 p-2">
              <button
                className="w-full px-4 py-3 text-left rounded-lg text-gray-300 flex items-center justify-between"
                onClick={() => setMSolutions((s) => !s)}
                aria-expanded={mSolutions}
              >
                Solutions
                <i data-lucide="chevron-down" className="h-4 w-4"></i>
              </button>
              <div className={`mt-1 pl-4 space-y-1 ${mSolutions ? '' : 'hidden'}`} id="mobile-solutions">
                <a href="#metrics" className="block px-4 py-2.5 text-sm text-gray-400 rounded-lg hover:bg-exchange-700/60 hover:text-white">Performance Dashboard</a>
                <a href="/analytics.html" className="block px-4 py-2.5 text-sm text-gray-400 rounded-lg hover:bg-exchange-700/60 hover:text-white">Advanced Analytics</a>
                <a href="/setting.html" className="block px-4 py-2.5 text-sm text-gray-400 rounded-lg hover:bg-exchange-700/60 hover:text-white">Custom Strategies</a>
              </div>
            </div>

            <a href="#pricing" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-exchange-700/60 hover:text-white font-medium">Pricing</a>

            <div className="rounded-xl bg-exchange-700/30 p-2">
              <button
                className="w-full px-4 py-3 text-left rounded-lg text-gray-300 flex items-center justify-between"
                onClick={() => setMResources((s) => !s)}
                aria-expanded={mResources}
              >
                Resources
                <i data-lucide="chevron-down" className="h-4 w-4"></i>
              </button>
              <div className={`mt-1 pl-4 space-y-1 ${mResources ? '' : 'hidden'}`} id="mobile-resources">
                <a href="../WHITEPAPER.md" className="block px-4 py-2.5 text-sm text-gray-400 rounded-lg hover:bg-exchange-700/60 hover:text-white">Whitepaper</a>
                <a href="#" className="block px-4 py-2.5 text-sm text-gray-400 rounded-lg hover:bg-exchange-700/60 hover:text-white">Documentation</a>
                <a href="https://github.com" className="block px-4 py-2.5 text-sm text-gray-400 rounded-lg hover:bg-exchange-700/60 hover:text-white">GitHub</a>
              </div>
            </div>

            <div className="border-t border-exchange-700/50 pt-2 mt-2">
              <a href="/login.html" className="block px-4 py-3 rounded-lg text-gray-300 hover:bg-exchange-700/60 hover:text-white font-medium">Sign in</a>
              <a href="/" className="block rounded-xl bg-gradient-to-r from-primary-500 to-primary-400 px-4 py-3 text-center font-medium text-black hover:from-primary-400 hover:to-primary-300 my-2">Launch App</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;