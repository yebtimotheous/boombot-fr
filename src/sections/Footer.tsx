import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [status, setStatus] = useState<string>("");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  function onSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector('input[type="email"]') as HTMLInputElement | null;
    const email = input?.value?.trim() || "";
    if (!email) return;
    try {
      localStorage.setItem('boombot_newsletter_email', email);
    } catch { }
    setStatus("Successfully subscribed to BoomBot updates!");
    form.reset();
    setTimeout(() => setStatus(""), 3000);
  }

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const socialLinks = [
    {
      name: 'Twitter',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      )
    },
    {
      name: 'Discord',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
        </svg>
      )
    },
    {
      name: 'Telegram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      )
    }
  ];

  const footerSections = [
    {
      id: 'product',
      title: 'Product',
      color: 'primary',
      links: [
        { name: 'Features', href: '#features' },
        { name: 'How It Works', href: '#how' },
        { name: 'Analytics', href: '/analytics.html' },
        { name: 'Settings', href: '/setting.html' },
        { name: 'API', href: '#' }
      ]
    },
    {
      id: 'resources',
      title: 'Resources',
      color: 'success',
      links: [
        { name: 'Whitepaper', href: '../WHITEPAPER.md' },
        { name: 'Documentation', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Support', href: '#' }
      ]
    },
    {
      id: 'company',
      title: 'Company',
      color: 'info',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press Kit', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Partners', href: '#partners' }
      ]
    }
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-exchange-900 to-exchange-800 border-t border-exchange-700/30 overflow-hidden">

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-success-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Brand Section - Full width on mobile, spans 5 columns on desktop */}
            <div className="lg:col-span-5 space-y-8">

              {/* Logo and Brand */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary-500 rounded-xl blur animate-pulse opacity-50"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">BoomBot</h3>
                  <p className="text-sm text-primary-400 font-medium">Neural Trading AI</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed max-w-md">
                Advanced AI-powered autonomous trading agents with cutting-edge security,
                multi-chain analysis, and intelligent automation for professional traders.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md">
                <div className="text-center p-4 bg-exchange-800/50 rounded-xl border border-exchange-700/30">
                  <div className="text-xl font-bold text-primary-400">99.9%</div>
                  <div className="text-xs text-gray-400 mt-1">Uptime</div>
                </div>
                <div className="text-center p-4 bg-exchange-800/50 rounded-xl border border-exchange-700/30">
                  <div className="text-xl font-bold text-success-400">10K+</div>
                  <div className="text-xs text-gray-400 mt-1">Trades</div>
                </div>
                <div className="text-center p-4 bg-exchange-800/50 rounded-xl border border-exchange-700/30">
                  <div className="text-xl font-bold text-info-400">94.7%</div>
                  <div className="text-xs text-gray-400 mt-1">Success</div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-exchange-800/50 border border-exchange-700/30 rounded-xl flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 hover:bg-primary-500/10 transition-all duration-300 group"
                      aria-label={social.name}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Sections - Desktop: 3 columns, Mobile: Collapsible */}
            <div className="lg:col-span-4 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
              {footerSections.map((section) => (
                <div key={section.id} className="space-y-4">

                  {/* Section Header - Clickable on mobile */}
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="flex items-center justify-between w-full lg:cursor-default"
                  >
                    <h4 className="text-lg font-semibold text-white relative">
                      {section.title}
                      <div className={`absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-${section.color}-500 to-${section.color}-400`}></div>
                    </h4>

                    {/* Mobile toggle icon */}
                    <div className="lg:hidden">
                      <svg
                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${expandedSection === section.id ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Links - Always visible on desktop, collapsible on mobile */}
                  <div className={`space-y-3 lg:block ${expandedSection === section.id || expandedSection === null ? 'block' : 'hidden'
                    }`}>
                    {section.links.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className={`block text-sm text-gray-400 hover:text-${section.color}-400 transition-colors duration-300 py-1 hover:translate-x-1 transform transition-transform`}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-3 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2 relative">
                  Stay Updated
                  <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-warning-500 to-warning-400"></div>
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Get the latest updates on BoomBot features, market insights, and trading strategies.
                </p>
              </div>

              <form onSubmit={onSubscribe} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-exchange-800/50 border border-exchange-700/50 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-2 focus:ring-primary-500/20 transition-all duration-300 text-sm"
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-primary-500 to-success-500 text-black font-semibold rounded-xl hover:from-primary-400 hover:to-success-400 transition-all duration-300 text-sm shadow-lg hover:shadow-primary-500/25 hover:scale-105 transform"
                >
                  Subscribe to Updates
                </button>
              </form>

              {status && (
                <div className="p-4 bg-success-500/10 border border-success-500/30 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div className="text-sm text-success-400 font-medium">
                      {status}
                    </div>
                  </div>
                </div>
              )}

              {/* System Status */}
              <div className="p-4 bg-exchange-800/30 border border-exchange-700/30 rounded-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-success-400">System Online</span>
                  </div>
                  <div className="text-xs text-gray-500">99.9% Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-exchange-700/30 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">

            {/* Copyright */}
            <div className="text-sm text-gray-500 text-center lg:text-left flex items-center justify-center lg:justify-start">
              © {new Date().getFullYear()} BoomBot. All rights reserved. Built with
              <svg className="w-4 h-4 mx-1 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              for traders.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end items-center gap-6 text-sm text-gray-500">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="hover:text-gray-300 transition-colors duration-300 relative group"
                >
                  {item}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;