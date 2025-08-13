import React, { useState, useEffect } from 'react';
import { useLucide } from '../hooks/useLucide';

const Footer: React.FC = () => {
  useLucide();
  const [status, setStatus] = useState<string>("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [networkStats, setNetworkStats] = useState({
    nodes: 847,
    transactions: 2847392,
    uptime: 99.97
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      // Simulate live network stats
      setNetworkStats(prev => ({
        nodes: prev.nodes + Math.floor(Math.random() * 3) - 1,
        transactions: prev.transactions + Math.floor(Math.random() * 50) + 10,
        uptime: 99.97 + (Math.random() * 0.02)
      }));
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  function onSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.querySelector('input[type="email"]') as HTMLInputElement | null;
    const email = input?.value?.trim() || "";
    if (!email) return;
    try {
      localStorage.setItem('boombot_newsletter_email', email);
    } catch { }
    setStatus("Neural network activated! You're in the loop.");
    form.reset();
  }

  return (
    <footer className="relative overflow-hidden">
      {/* Revolutionary background with animated matrix */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-exchange-900 to-exchange-800"></div>

        {/* Simplified matrix effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-1 h-full">
            {[...Array(48)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col justify-start space-y-2 animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {[...Array(10)].map((_, j) => (
                  <span
                    key={j}
                    className="text-primary-500 font-mono text-xs opacity-30"
                  >
                    {Math.random() > 0.5 ? '1' : '0'}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Floating neural nodes */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary-400 rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        {/* Revolutionary header section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center space-x-3 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 via-success-500 to-info-500 rounded-2xl blur-lg opacity-60 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-exchange-800 to-exchange-900 rounded-2xl p-4 border border-primary-500/30">
                <img src="/img/logo.png" alt="BoomBot Logo" className="h-12 w-12" />
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl font-black bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent">
                BoomBot Neural Network
              </h2>
              <p className="text-sm text-gray-400">Quantum-Enhanced Trading Infrastructure</p>
            </div>
          </div>

          {/* Live network status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <div className="bg-exchange-800/40 backdrop-blur-xl rounded-2xl p-4 border border-primary-500/20">
              <div className="text-2xl font-black font-mono text-primary-400">{networkStats.nodes}</div>
              <div className="text-xs text-gray-400 font-medium">Active Nodes</div>
            </div>
            <div className="bg-exchange-800/40 backdrop-blur-xl rounded-2xl p-4 border border-success-500/20">
              <div className="text-2xl font-black font-mono text-success-400">{networkStats.transactions.toLocaleString()}</div>
              <div className="text-xs text-gray-400 font-medium">Transactions</div>
            </div>
            <div className="bg-exchange-800/40 backdrop-blur-xl rounded-2xl p-4 border border-info-500/20">
              <div className="text-2xl font-black font-mono text-info-400">{networkStats.uptime.toFixed(2)}%</div>
              <div className="text-xs text-gray-400 font-medium">Uptime</div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          {/* Neural Command Center */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-exchange-800/60 to-exchange-900/60 backdrop-blur-xl rounded-3xl p-8 border border-exchange-600/30">
              <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center">
                <div className="w-3 h-3 bg-success-500 rounded-full animate-pulse mr-3"></div>
                Neural Command Center
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Join the quantum revolution in autonomous trading. Our neural network processes millions of market signals
                to deliver unprecedented trading performance.
              </p>

              {/* Revolutionary social links with custom SVGs */}
              <div className="flex space-x-4 mb-6">
                <a href="#" className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl blur opacity-0 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative bg-exchange-700/50 rounded-xl p-3 border border-exchange-600/50 group-hover:border-blue-500/50 transition-colors">
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </div>
                </a>

                <a href="#" className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-400 rounded-xl blur opacity-0 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative bg-exchange-700/50 rounded-xl p-3 border border-exchange-600/50 group-hover:border-gray-500/50 transition-colors">
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                </a>

                <a href="#" className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-400 rounded-xl blur opacity-0 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative bg-exchange-700/50 rounded-xl p-3 border border-exchange-600/50 group-hover:border-purple-500/50 transition-colors">
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-purple-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
                    </svg>
                  </div>
                </a>

                <a href="#" className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-60 transition-opacity"></div>
                  <div className="relative bg-exchange-700/50 rounded-xl p-3 border border-exchange-600/50 group-hover:border-blue-600/50 transition-colors">
                    <svg className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Live system time */}
              <div className="bg-exchange-700/30 rounded-xl p-4 border border-exchange-600/30">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400 font-mono">System Time (UTC)</span>
                  <span className="text-sm font-mono text-primary-400">
                    {currentTime.toISOString().slice(0, 19).replace('T', ' ')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-8">
            <div className="bg-exchange-800/40 backdrop-blur-xl rounded-2xl p-6 border border-exchange-600/30">
              <h3 className="font-display text-lg font-bold text-primary-400 mb-4">Neural Modules</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-sm text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span className="mr-2">→</span>AI Engine</a></li>
                <li><a href="#how" className="text-sm text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span className="mr-2">→</span>Execution Pipeline</a></li>
                <li><a href="/analytics.html" className="text-sm text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span className="mr-2">→</span>Analytics Core</a></li>
                <li><a href="/setting.html" className="text-sm text-gray-400 hover:text-primary-400 transition-colors flex items-center"><span className="mr-2">→</span>Control Panel</a></li>
              </ul>
            </div>

            <div className="bg-exchange-800/40 backdrop-blur-xl rounded-2xl p-6 border border-exchange-600/30">
              <h3 className="font-display text-lg font-bold text-success-400 mb-4">Knowledge Base</h3>
              <ul className="space-y-3">
                <li><a href="../WHITEPAPER.md" className="text-sm text-gray-400 hover:text-success-400 transition-colors flex items-center"><span className="mr-2">→</span>Neural Whitepaper</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-success-400 transition-colors flex items-center"><span className="mr-2">→</span>API Documentation</a></li>
                <li><a href="https://github.com" className="text-sm text-gray-400 hover:text-success-400 transition-colors flex items-center"><span className="mr-2">→</span>Source Code</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-success-400 transition-colors flex items-center"><span className="mr-2">→</span>Integration Guide</a></li>
              </ul>
            </div>
          </div>

          {/* Neural Newsletter */}
          <div className="bg-gradient-to-br from-exchange-800/60 to-exchange-900/60 backdrop-blur-xl rounded-3xl p-8 border border-exchange-600/30">
            <h3 className="font-display text-xl font-bold text-info-400 mb-4 flex items-center">
              <div className="w-3 h-3 bg-info-500 rounded-full animate-pulse mr-3"></div>
              Neural Updates
            </h3>

            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              Subscribe to receive quantum-encrypted updates about our neural network evolution and trading breakthroughs.
            </p>

            <form className="space-y-4" onSubmit={onSubscribe}>
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="neural.address@quantum.net"
                  className="w-full rounded-xl border border-exchange-600/50 bg-exchange-700/30 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-info-500/50 focus:border-info-500/50 font-mono"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-info-500/10 to-transparent opacity-0 focus-within:opacity-100 transition-opacity pointer-events-none"></div>
              </div>

              <button
                type="submit"
                className="w-full relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-info-500 to-primary-500 rounded-xl blur opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-info-500 to-primary-500 rounded-xl px-4 py-3 text-sm font-bold text-black font-mono">
                  ACTIVATE NEURAL LINK
                </div>
              </button>

              {status && (
                <div className="bg-success-500/10 border border-success-500/30 rounded-xl p-3">
                  <div className="text-xs text-success-400 font-mono">{status}</div>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Revolutionary bottom section */}
        <div className="mt-16 pt-8 border-t border-exchange-700/30">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} BoomBot Neural Network. All quantum rights reserved.
            </div>

            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Neural Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">Quantum Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">AI Ethics</a>
            </div>

            <div className="flex items-center space-x-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
              <span>Neural Network: ACTIVE</span>
            </div>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;