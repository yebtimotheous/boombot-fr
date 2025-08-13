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
    if (mobileOpen) {
      document.body.classList.add('mobile-menu-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = '';
    }

    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMProduct(false);
    setMSolutions(false);
    setMResources(false);
  };

  return (
    <header className="site-header sticky top-0 z-50 border-b border-exchange-700/20 bg-exchange-900/90 backdrop-blur-3xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-4">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative">
              <img src="/img/logo.png" alt="BoomBot Logo" className="h-12 w-12" />
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

          <a href="/" className="inline-flex items-center rounded-xl bg-gradient-to-r from-primary-500 to-primary-400 px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-black shadow-lg shadow-primary-500/30 hover:from-primary-400 hover:to-primary-300 hover:shadow-primary-500/40 transition-all group">
            <span className="hidden sm:inline">Launch App</span>
            <span className="sm:hidden">Launch</span>
            <i data-lucide="arrow-up-right" className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
          </a>

          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="lg:hidden rounded-xl p-2.5 text-gray-400 hover:text-white hover:bg-exchange-800/50 transition-all duration-300"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <div className="relative w-6 h-6">
              <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'}`}></span>
              <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${mobileOpen ? 'opacity-0' : 'translate-y-2.5'}`}></span>
              <span className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ${mobileOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMobileMenu}></div>
      </div>

      {/* Mobile menu */}
      <div className={`fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] transform transition-transform duration-300 ease-out lg:hidden ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="h-full bg-gradient-to-b from-exchange-800 to-exchange-900 border-l border-exchange-700/50 backdrop-blur-xl shadow-2xl">

          {/* Mobile header */}
          <div className="flex items-center justify-between p-6 border-b border-exchange-700/30">
            <div className="flex items-center space-x-3">
              <img src="/img/logo.png" alt="BoomBot Logo" className="h-8 w-8" />
              <div>
                <div className="font-display text-lg font-bold text-white">BoomBot</div>
                <div className="text-xs text-primary-400 font-medium">AUTONOMOUS TRADING</div>
              </div>
            </div>
            <button
              onClick={closeMobileMenu}
              className="rounded-xl p-2 text-gray-400 hover:text-white hover:bg-exchange-700/50 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile navigation */}
          <div className="flex-1 overflow-y-auto p-6">
            <nav className="space-y-4">

              {/* Product Section */}
              <div className="space-y-2">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-left rounded-xl text-gray-300 hover:bg-exchange-700/50 hover:text-white transition-all duration-200"
                  onClick={() => setMProduct((s) => !s)}
                  aria-expanded={mProduct}
                >
                  <span className="font-medium">Product</span>
                  <svg className={`w-5 h-5 transform transition-transform duration-200 ${mProduct ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`space-y-1 overflow-hidden transition-all duration-300 ${mProduct ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <a href="#product" onClick={closeMobileMenu} className="flex items-center px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-exchange-700/30 rounded-lg transition-colors">
                    <svg className="w-4 h-4 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    AI Trading Engine
                  </a>
                  <a href="#features" onClick={closeMobileMenu} className="flex items-center px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-exchange-700/30 rounded-lg transition-colors">
                    <svg className="w-4 h-4 mr-3 text-info-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Risk Management
                  </a>
                  <a href="#how" onClick={closeMobileMenu} className="flex items-center px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-exchange-700/30 rounded-lg transition-colors">
                    <svg className="w-4 h-4 mr-3 text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Execution Pipeline
                  </a>
                </div>
              </div>

              {/* Solutions Section */}
              <div className="space-y-2">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-left rounded-xl text-gray-300 hover:bg-exchange-700/50 hover:text-white transition-all duration-200"
                  onClick={() => setMSolutions((s) => !s)}
                  aria-expanded={mSolutions}
                >
                  <span className="font-medium">Solutions</span>
                  <svg className={`w-5 h-5 transform transition-transform duration-200 ${mSolutions ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`space-y-1 overflow-hidden transition-all duration-300 ${mSolutions ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <a href="#metrics" onClick={closeMobileMenu} className="flex items-center px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-exchange-700/30 rounded-lg transition-colors">
                    <svg className="w-4 h-4 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Performance Dashboard
                  </a>
                  <a href="/analytics.html" onClick={closeMobileMenu} className="flex items-center px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-exchange-700/30 rounded-lg transition-colors">
                    <svg className="w-4 h-4 mr-3 text-info-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Advanced Analytics
                  </a>
                  <a href="/setting.html" onClick={closeMobileMenu} className="flex items-center px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-exchange-700/30 rounded-lg transition-colors">
                    <svg className="w-4 h-4 mr-3 text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Custom Strategies
                  </a>
                </div>
              </div>

              {/* Direct Links */}
              <a href="#pricing" onClick={closeMobileMenu} className="flex items-center px-4 py-3 rounded-xl text-gray-300 hover:bg-exchange-700/50 hover:text-white transition-all duration-200">
                <svg className="w-5 h-5 mr-3 text-warning-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span className="font-medium">Pricing</span>
              </a>

              {/* Resources Section */}
              <div className="space-y-2">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-left rounded-xl text-gray-300 hover:bg-exchange-700/50 hover:text-white transition-all duration-200"
                  onClick={() => setMResources((s) => !s)}
                  aria-expanded={mResources}
                >
                  <span className="font-medium">Resources</span>
                  <svg className={`w-5 h-5 transform transition-transform duration-200 ${mResources ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`space-y-1 overflow-hidden transition-all duration-300 ${mResources ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <a href="../WHITEPAPER.md" onClick={closeMobileMenu} className="flex items-center px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-exchange-700/30 rounded-lg transition-colors">
                    <svg className="w-4 h-4 mr-3 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Whitepaper
                  </a>
                  <a href="#" onClick={closeMobileMenu} className="flex items-center px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-exchange-700/30 rounded-lg transition-colors">
                    <svg className="w-4 h-4 mr-3 text-info-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                    Documentation
                  </a>
                  <a href="https://github.com" onClick={closeMobileMenu} className="flex items-center px-6 py-3 text-sm text-gray-400 hover:text-white hover:bg-exchange-700/30 rounded-lg transition-colors">
                    <svg className="w-4 h-4 mr-3 text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </nav>
          </div>

          {/* Mobile footer actions */}
          <div className="p-6 border-t border-exchange-700/30 space-y-3">
            <a href="/login.html" onClick={closeMobileMenu} className="block w-full px-4 py-3 text-center rounded-xl text-gray-300 hover:text-white hover:bg-exchange-700/50 transition-colors font-medium">
              Sign in
            </a>
            <a href="/" onClick={closeMobileMenu} className="block w-full px-4 py-2.5 text-center rounded-xl bg-gradient-to-r from-primary-500 to-primary-400 text-black text-sm font-medium hover:from-primary-400 hover:to-primary-300 transition-all shadow-lg">
              Launch App
            </a>

            {/* Live status indicator */}
            <div className="flex items-center justify-center space-x-2 pt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-success-500"></span>
              </span>
              <span className="text-xs font-medium text-success-400">SYSTEM ONLINE</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;