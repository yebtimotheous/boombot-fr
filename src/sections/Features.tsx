import React, { useState, useEffect } from 'react';

const Features: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  // Auto-cycle through features
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 8);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      id: 'autonomous-trading',
      title: 'Autonomous Trading Agents',
      description: 'AI-powered agents that execute trades 24/7 with human-level intelligence and institutional-grade risk management.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          <circle cx="12" cy="9" r="2" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 9h1m6 0h1" />
        </svg>
      ),
      color: 'primary',
      gradient: 'from-primary-500 to-primary-600',
      stats: { accuracy: '94.7%', trades: '10K+', uptime: '99.9%' },
      features: ['Neural Decision Making', 'Risk Assessment', 'Market Analysis', 'Portfolio Optimization']
    },
    {
      id: 'copy-trading',
      title: 'Advanced Copy Trading',
      description: 'Mirror successful traders with intelligent position sizing, risk controls, and real-time synchronization.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 10h2m4 0h2" />
        </svg>
      ),
      color: 'success',
      gradient: 'from-success-500 to-success-600',
      stats: { followers: '50K+', roi: '+187%', signals: '24/7' },
      features: ['Smart Position Sizing', 'Risk Mirroring', 'Performance Analytics', 'Social Trading']
    },
    {
      id: 'multi-chain',
      title: 'Multi-Chain Scanner',
      description: 'Comprehensive blockchain analysis across multiple networks for optimal trading opportunities.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          <circle cx="8" cy="8" r="2" fill="currentColor" />
          <circle cx="16" cy="16" r="2" fill="currentColor" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      ),
      color: 'info',
      gradient: 'from-info-500 to-info-600',
      stats: { chains: '15+', tokens: '100K+', speed: '<100ms' },
      features: ['Cross-Chain Analysis', 'Liquidity Scanning', 'Price Discovery', 'Arbitrage Detection']
    },
    {
      id: 'security-audit',
      title: 'Security Contract Audit',
      description: 'Real-time smart contract analysis and vulnerability detection before executing any trades.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 7v2m0 4h.01" />
        </svg>
      ),
      color: 'warning',
      gradient: 'from-warning-500 to-warning-600',
      stats: { scanned: '1M+', threats: '99.8%', time: '<5s' },
      features: ['Code Analysis', 'Vulnerability Detection', 'Risk Scoring', 'Compliance Check']
    },
    {
      id: 'ownership-screening',
      title: 'Ownership Screening',
      description: 'Advanced analysis of token ownership patterns and distribution to identify potential risks.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4m0 4h.01" />
          <circle cx="10" cy="10" r="1" fill="currentColor" />
        </svg>
      ),
      color: 'primary',
      gradient: 'from-primary-600 to-info-500',
      stats: { wallets: '10M+', patterns: '500+', detection: '96.3%' },
      features: ['Whale Detection', 'Distribution Analysis', 'Insider Trading', 'Concentration Risk']
    },
    {
      id: 'rug-detection',
      title: 'AI Rug Proof Detection',
      description: 'Machine learning algorithms that identify and prevent rug pulls before they happen.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15h.01" />
          <circle cx="12" cy="9" r="1" fill="currentColor" />
        </svg>
      ),
      color: 'success',
      gradient: 'from-red-500 to-orange-500',
      stats: { prevented: '2.5K+', accuracy: '98.9%', saved: '$50M+' },
      features: ['Pattern Recognition', 'Behavioral Analysis', 'Early Warning', 'Auto Protection']
    },
    {
      id: 'terminal-streaming',
      title: 'Server Terminal Streaming',
      description: 'Real-time data streaming and execution with ultra-low latency for competitive advantage.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h8m-8 2h6" />
        </svg>
      ),
      color: 'info',
      gradient: 'from-info-600 to-primary-500',
      stats: { latency: '0.1ms', uptime: '99.99%', throughput: '1M/s' },
      features: ['Real-time Data', 'Low Latency', 'High Throughput', 'Reliable Execution']
    },
    {
      id: 'profit-loss',
      title: 'Auto Profit/Loss System',
      description: 'Intelligent exit strategies with dynamic stop-loss and take-profit based on market conditions.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 21h18" />
          <circle cx="5" cy="17" r="1" fill="currentColor" />
          <circle cx="9" cy="13" r="1" fill="currentColor" />
          <circle cx="13" cy="15" r="1" fill="currentColor" />
        </svg>
      ),
      color: 'warning',
      gradient: 'from-success-500 to-warning-500',
      stats: { profit: '+234%', protection: '95%', exits: '50K+' },
      features: ['Dynamic Stops', 'Trailing Profits', 'Risk Management', 'Smart Exits']
    }
  ];

  return (
    <section id="features" className="relative overflow-hidden bg-gradient-to-b from-black via-exchange-900 to-exchange-800">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs background */}
        <div className="absolute -inset-8 opacity-40">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-success-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-info-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        {/* Neural network pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#10B981" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <g stroke="url(#neuralGradient)" strokeWidth="1" fill="none">
              <path d="M100,100 Q300,50 500,150 T900,100" className="animate-pulse" />
              <path d="M50,200 Q250,150 450,250 T850,200" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <path d="M150,300 Q350,250 550,350 T950,300" className="animate-pulse" style={{ animationDelay: '2s' }} />
            </g>
          </svg>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary-500/30 bg-exchange-800 px-4 py-1.5 text-sm text-primary-400 mb-6">
            <div className="relative">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 bg-primary-500 rounded-full animate-ping"></div>
            </div>
            <span>AUTONOMOUS TRADING TECHNOLOGY</span>
          </div>

          <h2 className="font-display text-4xl font-bold md:text-5xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6">
            Next-Generation Trading Features
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Advanced AI-powered trading agents with cutting-edge security, multi-chain analysis,
            and intelligent automation for professional traders.
          </p>
        </div>

        {/* Featured Showcase */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-exchange-800/60 to-exchange-900/60 backdrop-blur-xl border border-exchange-600/50 rounded-3xl p-8 overflow-hidden">

            {/* Feature Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {features.map((feature, index) => (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(index)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${activeFeature === index
                    ? `bg-gradient-to-r ${feature.gradient} text-white shadow-lg`
                    : 'text-gray-400 hover:text-white hover:bg-exchange-700/50'
                    }`}
                >
                  <div className="w-5 h-5">{feature.icon}</div>
                  <span className="hidden sm:inline text-sm">{feature.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Feature Display */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Feature Info */}
              <div className="space-y-8">
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${features[activeFeature].gradient} rounded-2xl flex items-center justify-center shadow-lg text-white`}>
                      <div className="w-8 h-8">{features[activeFeature].icon}</div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{features[activeFeature].title}</h3>
                      <div className={`w-12 h-1 bg-gradient-to-r ${features[activeFeature].gradient} rounded-full mt-2`}></div>
                    </div>
                  </div>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {features[activeFeature].description}
                  </p>
                </div>

                {/* Feature Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {Object.entries(features[activeFeature].stats).map(([key, value], index) => (
                    <div key={key} className="text-center">
                      <div className={`text-2xl font-black text-${features[activeFeature].color}-400`}>
                        {value}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Feature List */}
                <div className="grid grid-cols-2 gap-3">
                  {features[activeFeature].features.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className={`w-2 h-2 bg-${features[activeFeature].color}-500 rounded-full`}></div>
                      <span className="text-sm text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual Representation */}
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${features[activeFeature].gradient} rounded-3xl blur-2xl opacity-20`}></div>
                <div className="relative bg-gradient-to-br from-exchange-800/80 to-exchange-900/80 rounded-3xl p-8 border border-exchange-600/30">

                  {/* Mock Interface */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 bg-${features[activeFeature].color}-500 rounded-full animate-pulse`}></div>
                        <span className="text-sm font-mono text-gray-300">SYSTEM ACTIVE</span>
                      </div>
                      <span className="text-xs text-gray-400 font-mono">v2.1.0</span>
                    </div>

                    {/* Mock Data Visualization */}
                    <div className="h-32 bg-exchange-700/30 rounded-lg flex items-end space-x-1 p-2">
                      {[...Array(16)].map((_, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-t-sm bg-gradient-to-t ${features[activeFeature].gradient} transition-all duration-1000`}
                          style={{
                            height: `${Math.random() * 80 + 20}%`,
                            animationDelay: `${i * 100}ms`,
                            opacity: 0.7 + Math.random() * 0.3
                          }}
                        ></div>
                      ))}
                    </div>

                    {/* Mock Terminal */}
                    <div className="bg-black/50 rounded-lg p-4 font-mono text-xs">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="space-y-1 text-green-400">
                        <div>$ {features[activeFeature].title.toLowerCase().replace(/\s+/g, '-')} --status</div>
                        <div className="text-gray-500">✓ System operational</div>
                        <div className="text-gray-500">✓ Neural network active</div>
                        <div className={`text-${features[activeFeature].color}-400`}>✓ {features[activeFeature].title} enabled</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`group cursor-pointer transition-all duration-500 ${hoveredCard === feature.id ? 'scale-105 -translate-y-2' : ''
                }`}
              onMouseEnter={() => setHoveredCard(feature.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveFeature(index)}
            >
              <div className={`relative bg-gradient-to-br from-exchange-800/80 to-exchange-900/80 backdrop-blur-xl border rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 ${activeFeature === index
                ? `border-${feature.color}-500/50 shadow-${feature.color}-500/20`
                : 'border-exchange-600/30 hover:border-exchange-500/50'
                }`}>

                {/* Glow effect */}
                {hoveredCard === feature.id && (
                  <div className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} rounded-2xl blur opacity-20`}></div>
                )}

                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg text-white`}>
                      <div className="w-6 h-6">{feature.icon}</div>
                    </div>
                    {activeFeature === index && (
                      <div className={`w-3 h-3 bg-${feature.color}-500 rounded-full animate-pulse`}></div>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-sm text-gray-400 leading-relaxed mb-4">
                    {feature.description.slice(0, 80)}...
                  </p>

                  {/* Mini stats */}
                  <div className="flex items-center justify-between text-xs">
                    <span className={`text-${feature.color}-400 font-semibold`}>
                      {Object.values(feature.stats)[0]}
                    </span>
                    <span className="text-gray-500">
                      {Object.keys(feature.stats)[0].toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-exchange-800/60 to-exchange-900/60 backdrop-blur-xl border border-exchange-600/50 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Experience the Future of Trading?
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of traders who trust our AI-powered autonomous agents
              to maximize their profits while minimizing risks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center rounded-xl bg-primary-500 px-8 py-4 text-base font-medium text-black shadow-lg hover:bg-primary-400 transition-colors">
                Start Trading Now
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </button>

              <button className="inline-flex items-center justify-center rounded-xl border border-exchange-600 bg-exchange-800 px-8 py-4 text-base font-medium text-gray-200 hover:bg-exchange-700 transition-colors">
                View Documentation
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;