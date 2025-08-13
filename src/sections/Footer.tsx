import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [status, setStatus] = useState<string>("");

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

  return (
    <footer className="bg-gradient-to-t from-black via-exchange-900 to-exchange-800 border-t border-exchange-700/30">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16 relative">

          {/* Vertical Dividers - Hidden on mobile, visible on desktop */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* First divider between Brand and Product */}
            <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-exchange-600/30 to-transparent"></div>
            {/* Second divider between Product and Resources */}
            <div className="absolute left-2/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-exchange-600/30 to-transparent"></div>
            {/* Third divider between Resources and Newsletter */}
            <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-exchange-600/30 to-transparent"></div>
          </div>

          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-center mb-8">
              <img src="/assets/img/logo.png" alt="BoomBot" className="h-12 w-12 mr-4" />
              <div>
                <h3 className="text-2xl font-bold text-white">BoomBot</h3>
                <p className="text-sm text-gray-400 mt-1">Neural Trading AI</p>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-primary-500/50 via-success-500/30 to-transparent"></div>

            <p className="text-gray-300 text-sm leading-relaxed">
              Advanced AI-powered trading bot that leverages neural networks to analyze market patterns and execute profitable trades automatically.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-exchange-600/50 to-transparent"></div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-exchange-800/50">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-exchange-800/50">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-exchange-800/50">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors p-2 rounded-lg hover:bg-exchange-800/50">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              </a>
            </div>

            {/* Mobile divider - only visible on mobile */}
            <div className="block md:hidden h-px bg-gradient-to-r from-transparent via-exchange-600/50 to-transparent mt-8"></div>
          </div>

          {/* Product Links */}
          <div className="space-y-6 relative">
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Product
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-success-500"></div>
            </h4>

            <div className="h-px bg-gradient-to-r from-primary-500/30 via-transparent to-transparent mb-4"></div>

            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-400 hover:text-primary-400 transition-colors text-sm block py-1 border-l-2 border-transparent hover:border-primary-500/50 pl-3 hover:pl-4 transition-all">Features</a></li>
              <li><a href="#how" className="text-gray-400 hover:text-primary-400 transition-colors text-sm block py-1 border-l-2 border-transparent hover:border-primary-500/50 pl-3 hover:pl-4 transition-all">How It Works</a></li>
              <li><a href="/analytics.html" className="text-gray-400 hover:text-primary-400 transition-colors text-sm block py-1 border-l-2 border-transparent hover:border-primary-500/50 pl-3 hover:pl-4 transition-all">Analytics</a></li>
              <li><a href="/setting.html" className="text-gray-400 hover:text-primary-400 transition-colors text-sm block py-1 border-l-2 border-transparent hover:border-primary-500/50 pl-3 hover:pl-4 transition-all">Settings</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition-colors text-sm block py-1 border-l-2 border-transparent hover:border-primary-500/50 pl-3 hover:pl-4 transition-all">API</a></li>
            </ul>

            {/* Mobile divider - only visible on mobile */}
            <div className="block md:hidden h-px bg-gradient-to-r from-transparent via-exchange-600/50 to-transparent mt-8"></div>
          </div>

          {/* Resources */}
          <div className="space-y-6 relative">
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Resources
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-success-500 to-info-500"></div>
            </h4>

            <div className="h-px bg-gradient-to-r from-success-500/30 via-transparent to-transparent mb-4"></div>

            <ul className="space-y-4">
              <li><a href="../WHITEPAPER.md" className="text-gray-400 hover:text-success-400 transition-colors text-sm block py-1 border-l-2 border-transparent hover:border-success-500/50 pl-3 hover:pl-4 transition-all">Whitepaper</a></li>
              <li><a href="#" className="text-gray-400 hover:text-success-400 transition-colors text-sm block py-1 border-l-2 border-transparent hover:border-success-500/50 pl-3 hover:pl-4 transition-all">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-success-400 transition-colors text-sm block py-1 border-l-2 border-transparent hover:border-success-500/50 pl-3 hover:pl-4 transition-all">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-success-400 transition-colors text-sm block py-1 border-l-2 border-transparent hover:border-success-500/50 pl-3 hover:pl-4 transition-all">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-success-400 transition-colors text-sm block py-1 border-l-2 border-transparent hover:border-success-500/50 pl-3 hover:pl-4 transition-all">Support</a></li>
            </ul>

            {/* Mobile divider - only visible on mobile */}
            <div className="block md:hidden h-px bg-gradient-to-r from-transparent via-exchange-600/50 to-transparent mt-8"></div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6 relative">
            <h4 className="text-lg font-semibold text-white mb-6 relative">
              Stay Updated
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-info-500 to-primary-500"></div>
            </h4>

            <div className="h-px bg-gradient-to-r from-info-500/30 via-transparent to-transparent mb-4"></div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Get the latest updates on BoomBot features and market insights.
            </p>

            <div className="h-px bg-gradient-to-r from-transparent via-exchange-600/50 to-transparent"></div>

            <form onSubmit={onSubscribe} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-exchange-800/50 border border-exchange-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-colors text-sm"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary-500 to-success-500 text-black font-medium rounded-lg hover:from-primary-400 hover:to-success-400 transition-all duration-300 text-sm shadow-lg hover:shadow-primary-500/25"
              >
                Subscribe
              </button>
            </form>

            {status && (
              <div className="mt-4 p-3 bg-success-500/10 border border-success-500/30 rounded-lg">
                <div className="text-xs text-success-400">
                  {status}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Separator Line */}
        <div className="mb-12">
          <div className="h-px bg-gradient-to-r from-transparent via-exchange-600/50 to-transparent"></div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-exchange-700/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} BoomBot. All rights reserved.
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors relative group">
                Privacy Policy
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors relative group">
                Terms of Service
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></div>
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors relative group">
                Cookie Policy
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            </div>

            <div className="flex items-center space-x-3 text-sm text-gray-500">
              <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
              <span>System Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;