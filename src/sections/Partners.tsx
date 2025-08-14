import React, { useState, useEffect } from 'react';
import { useLucide } from '../hooks/useLucide';

type PartnerTier = 'enterprise' | 'neural' | 'core';

type LogoItem = {
  kind: 'img' | 'symbol' | 'custom';
  label: string;
  src?: string;
  id?: string;
  tier: PartnerTier;
  status: 'active' | 'integrating' | 'verified';
  connections: number;
  description: string;
};

const techs: LogoItem[] = [
  { kind: 'img', label: 'Ethereum', src: '/partners/ethereum.svg', tier: 'enterprise', status: 'verified', connections: 2847, description: 'Layer 1 Blockchain' },
  { kind: 'custom', label: 'Solana', tier: 'enterprise', status: 'active', connections: 1923, description: 'High-Speed Blockchain' },
  { kind: 'img', label: 'Chainlink', src: '/partners/chainlink.svg', tier: 'neural', status: 'verified', connections: 1456, description: 'Oracle Network' },
  { kind: 'img', label: 'Node.js', src: '/partners/nodedotjs.svg', tier: 'core', status: 'active', connections: 892, description: 'Runtime Engine' },
  { kind: 'img', label: 'Docker', src: '/partners/docker.svg', tier: 'core', status: 'verified', connections: 743, description: 'Containerization' },
  { kind: 'img', label: 'MongoDB', src: '/partners/mongodb.svg', tier: 'core', status: 'active', connections: 634, description: 'Database' },
  { kind: 'img', label: 'Redis', src: '/partners/redis.svg', tier: 'neural', status: 'integrating', connections: 521, description: 'Cache Layer' },
  { kind: 'img', label: 'Web3.js', src: '/partners/web3js.svg', tier: 'neural', status: 'verified', connections: 412, description: 'Web3 Library' },
];

const Partners: React.FC = () => {
  useLucide();
  const [activeFilter, setActiveFilter] = useState<PartnerTier | 'all'>('all');
  const [hoveredPartner, setHoveredPartner] = useState<string | null>(null);

  const filteredTechs = activeFilter === 'all' ? techs : techs.filter(t => t.tier === activeFilter);

  const getTierColor = (tier: PartnerTier) => {
    switch (tier) {
      case 'enterprise': return 'from-primary-500 to-info-500';
      case 'neural': return 'from-success-500 to-primary-500';
      case 'core': return 'from-warning-500 to-success-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-success-400 bg-success-500/10';
      case 'verified': return 'text-primary-400 bg-primary-500/10';
      case 'integrating': return 'text-warning-400 bg-warning-500/10';
      default: return 'text-gray-400 bg-gray-500/10';
    }
  };

  return (
    <section id="partners" className="relative overflow-hidden py-24">
      {/* Revolutionary background with animated neural network */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-exchange-900 via-exchange-800 to-exchange-900"></div>

        {/* Animated neural network background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 600">
            <defs>
              <linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#10B981" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {/* Neural network connections */}
            <g stroke="url(#neuralGradient)" strokeWidth="1" fill="none">
              <path d="M100,100 Q300,50 500,150 T900,100" className="animate-pulse" style={{ animationDelay: '0s' }} />
              <path d="M50,200 Q250,150 450,250 T850,200" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <path d="M150,300 Q350,250 550,350 T950,300" className="animate-pulse" style={{ animationDelay: '2s' }} />
              <path d="M75,400 Q275,350 475,450 T875,400" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
            </g>

            {/* Neural nodes */}
            <g fill="url(#neuralGradient)">
              <circle cx="100" cy="100" r="3" className="animate-pulse" />
              <circle cx="500" cy="150" r="4" className="animate-pulse" style={{ animationDelay: '1s' }} />
              <circle cx="900" cy="100" r="3" className="animate-pulse" style={{ animationDelay: '2s' }} />
              <circle cx="450" cy="250" r="3" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
              <circle cx="550" cy="350" r="4" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
            </g>
          </svg>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-30 animate-pulse"
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

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Revolutionary header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary-500/30 bg-exchange-800/60 px-4 py-2 text-sm text-primary-400 mb-6">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span className="font-mono font-bold">NEURAL ECOSYSTEM</span>
          </div>

          <h2 className="text-5xl font-black font-mono bg-gradient-to-r from-white via-primary-200 to-white bg-clip-text text-transparent mb-6">
            Enterprise-Grade
            <br />
            <span className="bg-gradient-to-r from-primary-400 via-success-400 to-info-400 bg-clip-text text-transparent">
              Partner Network
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our AI trading engine connects to a revolutionary ecosystem of enterprise-verified protocols and neural-enhanced infrastructure
          </p>
        </div>

        {/* Futuristic filter system */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-exchange-800/60 backdrop-blur-xl rounded-2xl p-2 border border-exchange-600/50">
            {(['all', 'enterprise', 'neural', 'core'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-xl font-mono font-bold text-sm transition-all duration-300 ${activeFilter === filter
                  ? 'bg-gradient-to-r from-primary-500 to-info-500 text-black shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-exchange-700/50'
                  }`}
              >
                {filter.toUpperCase()}
                {filter !== 'all' && (
                  <span className="ml-2 text-xs opacity-70">
                    {techs.filter(t => t.tier === filter).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Revolutionary partner grid */}
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {filteredTechs.map((tech, index) => (
            <div
              key={tech.label}
              className="group relative"
              onMouseEnter={() => setHoveredPartner(tech.label)}
              onMouseLeave={() => setHoveredPartner(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Holographic border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${getTierColor(tech.tier)} rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500`}></div>

              <div className="relative bg-gradient-to-br from-exchange-800/90 to-exchange-900/90 rounded-2xl p-3 md:p-6 border border-exchange-600/30 backdrop-blur-xl h-full">
                {/* Status indicator */}
                <div className="flex items-center justify-between mb-3 md:mb-4">
                  <div className={`px-1.5 md:px-2 py-0.5 md:py-1 rounded-full text-xs font-bold ${getStatusColor(tech.status)}`}>
                    <span className="hidden md:inline">{tech.status.toUpperCase()}</span>
                    <span className="md:hidden">
                      {tech.status === 'active' ? '●' : tech.status === 'verified' ? '✓' : '○'}
                    </span>
                  </div>
                  <div className="text-xs text-gray-400 font-mono hidden md:block">
                    {tech.connections.toLocaleString()} connections
                  </div>
                </div>

                {/* Logo with quantum effect */}
                <div className="flex items-center justify-center mb-3 md:mb-6">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${getTierColor(tech.tier)} rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500`}></div>
                    <div className="relative bg-transparent rounded-2xl p-2 md:p-4 border border-exchange-600/50 group-hover:border-primary-500/50 transition-colors duration-300">
                      {tech.label === 'Solana' ? (
                        <svg className="h-8 w-8 md:h-12 md:w-12 filter brightness-0 invert group-hover:brightness-110 transition-all duration-300" viewBox="0 0 397.7 311.7" fill="currentColor">
                          <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 237.9z" />
                          <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1L333.1 73.8c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" />
                          <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" />
                        </svg>
                      ) : tech.kind === 'img' && tech.src ? (
                        <img
                          src={tech.src}
                          alt={tech.label}
                          className="h-8 w-8 md:h-12 md:w-12 object-contain filter brightness-0 invert group-hover:brightness-110 transition-all duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const fallback = document.createElement('div');
                            fallback.className = `h-8 w-8 md:h-12 md:w-12 rounded-xl bg-gradient-to-br ${getTierColor(tech.tier)} flex items-center justify-center text-black font-bold text-sm md:text-lg`;
                            fallback.textContent = tech.label.charAt(0);
                            target.parentElement!.appendChild(fallback);
                          }}
                        />
                      ) : tech.kind === 'symbol' && tech.id ? (
                        <svg className="h-8 w-8 md:h-12 md:w-12 filter group-hover:brightness-110 transition-all duration-300" role="img" aria-label={tech.label}>
                          <use href={`/partners/brands.svg#${tech.id}`} />
                        </svg>
                      ) : (
                        <div className={`h-8 w-8 md:h-12 md:w-12 rounded-xl bg-gradient-to-br ${getTierColor(tech.tier)} flex items-center justify-center text-black font-bold text-sm md:text-lg`}>
                          {tech.label.charAt(0)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Partner info */}
                <div className="text-center space-y-1 md:space-y-2">
                  <h3 className="font-bold text-white text-sm md:text-lg group-hover:text-primary-300 transition-colors">
                    {tech.label}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-400 font-mono hidden md:block">
                    {tech.description}
                  </p>
                </div>

                {/* Tier indicator */}
                <div className="mt-2 md:mt-4 flex justify-center">
                  <div className={`px-2 md:px-3 py-0.5 md:py-1 rounded-full bg-gradient-to-r ${getTierColor(tech.tier)} text-black text-xs font-bold`}>
                    <span className="hidden md:inline">{tech.tier.toUpperCase()} TIER</span>
                    <span className="md:hidden">{tech.tier.charAt(0).toUpperCase()}</span>
                  </div>
                </div>

                {/* Hover effect overlay */}
                {hoveredPartner === tech.label && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-success-500/10 rounded-2xl pointer-events-none"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Neural network stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-exchange-800/40 rounded-2xl border border-exchange-600/30 backdrop-blur-xl">
            <div className="text-3xl font-black font-mono text-primary-400 mb-2">99.97%</div>
            <div className="text-sm text-gray-400 font-medium">Network Uptime</div>
          </div>
          <div className="text-center p-6 bg-exchange-800/40 rounded-2xl border border-exchange-600/30 backdrop-blur-xl">
            <div className="text-3xl font-black font-mono text-success-400 mb-2">8,247</div>
            <div className="text-sm text-gray-400 font-medium">Active Connections</div>
          </div>
          <div className="text-center p-6 bg-exchange-800/40 rounded-2xl border border-exchange-600/30 backdrop-blur-xl">
            <div className="text-3xl font-black font-mono text-info-400 mb-2">0.12ms</div>
            <div className="text-sm text-gray-400 font-medium">Avg Latency</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;