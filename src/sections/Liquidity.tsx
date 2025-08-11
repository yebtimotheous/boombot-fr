import React from 'react';
import { useLucide } from '../hooks/useLucide';

const Liquidity: React.FC = () => {
  useLucide();

  const styles = `
  /* Scoped styles for Interchain Globe */
  #liquidity .globe-svg { filter: drop-shadow(0 20px 30px rgba(0,0,0,.35)); }
  #liquidity .sphere { fill: url(#sphereGrad); }
  #liquidity .shine { fill: url(#shineGrad); opacity: .35; mix-blend-mode: screen; }
  #liquidity .latitude, #liquidity .meridian { stroke: rgba(255,255,255,.08); stroke-width: 1; }
  #liquidity .latitude--bold, #liquidity .meridian--bold { stroke: rgba(255,255,255,.14); stroke-width: 1.2; }
  #liquidity .continent { fill: rgba(255,255,255,.05); }
  #liquidity .node { filter: drop-shadow(0 0 6px rgba(240,185,11,.45)); }
  #liquidity .node--pri { fill: #fcd535; }
  #liquidity .node--info { fill: #4dabf7; filter: drop-shadow(0 0 6px rgba(77,171,247,.35)); }
  #liquidity .node--succ { fill: #03d97e; filter: drop-shadow(0 0 6px rgba(3,217,126,.35)); }
  #liquidity .link { stroke: url(#linkGrad); stroke-width: 2; stroke-linecap: round; stroke-dasharray: 7 9; animation: linkFlow 6s linear infinite; opacity: .95; }
  #liquidity .link--alt { stroke-dasharray: 6 8; animation-duration: 8s; opacity: .85; }
  #liquidity .chip text { font: 11px/1.2 "DM Sans", system-ui, -apple-system, Segoe UI, Roboto, sans-serif; fill: #e5e7eb; letter-spacing: .2px; }
  #liquidity .chip .bg { fill: rgba(22,26,30,.88); stroke: rgba(75,77,87,.55); }
  #liquidity .chip .dot { stroke: rgba(255,255,255,.25); stroke-width: 1; }
  #liquidity .badge { font: 9px "DM Sans", system-ui, -apple-system, Segoe UI, Roboto, sans-serif; fill: #0b0e11; }
  @keyframes linkFlow { to { stroke-dashoffset: -160; } }
  @media (prefers-reduced-motion: reduce) {
    #liquidity .link { animation: none !important; }
  }`;

  return (
    <section id="liquidity" className="border-t border-exchange-700/50 bg-gradient-to-b from-exchange-900 via-exchange-900/90 to-exchange-900/60 relative overflow-hidden">
      <style>{styles}</style>

      {/* Decorative elements */}
      <div className="absolute -top-24 left-1/4 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 bg-info-500/10 rounded-full blur-3xl"></div>

      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copy */}
          <div className="reveal">
            <div className="inline-flex items-center space-x-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-sm text-primary-400 mb-6">
              <i data-lucide="globe-2" className="h-4 w-4"></i>
              <span>GLOBAL INTERCHAIN LIQUIDITY</span>
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              A true globe of liquidity with chains interlinking in real time
            </h2>
            <p className="mt-5 text-gray-300 text-lg">
              BoomBot continuously maps liquidity density across chains and regions, then stitches optimal cross-chain and cross-venue routes with strict, risk-aware execution.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="dashboard-card p-4 rounded-xl border border-exchange-700/50 bg-exchange-800/50">
                <div className="text-xs text-gray-400">DEXs observed</div>
                <div className="mt-1 text-xl font-bold text-primary-400">40+</div>
              </div>
              <div className="dashboard-card p-4 rounded-xl border border-exchange-700/50 bg-exchange-800/50">
                <div className="text-xs text-gray-400">Chains</div>
                <div className="mt-1 text-xl font-bold text-info-400">8</div>
              </div>
              <div className="dashboard-card p-4 rounded-xl border border-exchange-700/50 bg-exchange-800/50">
                <div className="text-xs text-gray-400">Markets scanned/s</div>
                <div className="mt-1 text-xl font-bold text-success-400">1,500+</div>
              </div>
              <div className="dashboard-card p-4 rounded-xl border border-exchange-700/50 bg-exchange-800/50">
                <div className="text-xs text-gray-400">Median latency</div>
                <div className="mt-1 text-xl font-bold text-gray-200">≤ 250ms</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex items-center text-sm text-gray-300">
                <i data-lucide="link" className="h-4 w-4 text-primary-400 mr-2"></i>
                Interlinked chain routes
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <i data-lucide="route" className="h-4 w-4 text-info-400 mr-2"></i>
                Cross-venue optimization
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <i data-lucide="shield-check" className="h-4 w-4 text-primary-400 mr-2"></i>
                Risk-aware execution
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <i data-lucide="radar" className="h-4 w-4 text-success-400 mr-2"></i>
                Continuous discovery
              </div>
            </div>
          </div>

          {/* Interlinked Globe */}
          <div className="reveal">
            <div className="relative mx-auto w-full max-w-[680px] aspect-square">
              <svg className="globe-svg" viewBox="0 0 600 600" role="img" aria-label="Interlinked chains on global liquidity globe">
                <defs>
                  <radialGradient id="sphereGrad" cx="38%" cy="32%" r="65%">
                    <stop offset="0%" stopColor="rgba(255,255,255,.28)"/>
                    <stop offset="35%" stopColor="rgba(240,185,11,.10)"/>
                    <stop offset="100%" stopColor="rgba(30,150,252,.08)"/>
                  </radialGradient>
                  <radialGradient id="shineGrad" cx="32%" cy="26%" r="22%">
                    <stop offset="0%" stopColor="rgba(255,255,255,.6)"/>
                    <stop offset="100%" stopColor="rgba(255,255,255,0)"/>
                  </radialGradient>
                  <linearGradient id="linkGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f0b90b"/>
                    <stop offset="100%" stopColor="#1e96fc"/>
                  </linearGradient>
                  <linearGradient id="chipBorderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(240,185,11,.7)"/>
                    <stop offset="100%" stopColor="rgba(30,150,252,.4)"/>
                  </linearGradient>
                  <clipPath id="sphereClip">
                    <circle cx="300" cy="300" r="240"/>
                  </clipPath>
                  <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="3" result="b"/>
                    <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>

                {/* Sphere */}
                <g clipPath="url(#sphereClip)">
                  <circle className="sphere" cx="300" cy="300" r="240"></circle>
                  <ellipse className="shine" cx="240" cy="220" rx="90" ry="60"></ellipse>

                  {/* Latitudes */}
                  <ellipse className="latitude latitude--bold" cx="300" cy="300" rx="230" ry="110"></ellipse>
                  <ellipse className="latitude" cx="300" cy="300" rx="190" ry="90"></ellipse>
                  <ellipse className="latitude" cx="300" cy="300" rx="150" ry="70"></ellipse>
                  <ellipse className="latitude" cx="300" cy="300" rx="110" ry="52"></ellipse>
                  <ellipse className="latitude" cx="300" cy="300" rx="70" ry="33"></ellipse>

                  {/* Meridians */}
                  <g>
                    <ellipse className="meridian meridian--bold" cx="300" cy="300" rx="6" ry="230"></ellipse>
                    <g transform="rotate(30 300 300)"><ellipse className="meridian" cx="300" cy="300" rx="6" ry="230"></ellipse></g>
                    <g transform="rotate(60 300 300)"><ellipse className="meridian" cx="300" cy="300" rx="6" ry="230"></ellipse></g>
                    <g transform="rotate(90 300 300)"><ellipse className="meridian" cx="300" cy="300" rx="6" ry="230"></ellipse></g>
                    <g transform="rotate(120 300 300)"><ellipse className="meridian" cx="300" cy="300" rx="6" ry="230"></ellipse></g>
                    <g transform="rotate(150 300 300)"><ellipse className="meridian" cx="300" cy="300" rx="6" ry="230"></ellipse></g>
                  </g>

                  {/* Suggestive continents */}
                  <g className="continent" filter="url(#softGlow)">
                    <path d="M165,270 C195,240 245,235 265,250 C290,270 275,310 245,325 C215,340 175,320 165,300 Z"></path>
                    <path d="M355,210 C380,195 420,200 440,220 C455,235 455,255 430,270 C410,280 380,275 365,260 Z"></path>
                    <path d="M380,360 C405,350 430,360 450,375 C465,390 450,410 420,410 C395,405 380,385 380,360 Z"></path>
                    <path d="M220,380 C240,365 270,365 290,375 C305,390 295,410 270,420 C245,425 225,410 220,395 Z"></path>
                  </g>

                  {/* Nodes on sphere */}
                  <g>
                    <circle className="node node--pri" cx="235" cy="240" r="3"></circle>
                    <circle className="node node--info" cx="170" cy="275" r="3"></circle>
                    <circle className="node node--succ" cx="405" cy="320" r="3"></circle>
                    <circle className="node node--info" cx="435" cy="245" r="3"></circle>
                    <circle className="node node--succ" cx="285" cy="325" r="3"></circle>
                    <circle className="node node--pri" cx="460" cy="385" r="3"></circle>
                  </g>
                </g>

                {/* Interlinking routes */}
                <g strokeWidth="2" fill="none" filter="url(#softGlow)">
                  <path className="link" d="M300,60 C300,120 280,180 260,220"></path>
                  <path className="link link--alt" d="M520,170 C470,190 445,210 435,245"></path>
                  <path className="link" d="M520,410 C485,380 445,350 405,320"></path>
                  <path className="link link--alt" d="M300,540 C300,470 295,390 285,325"></path>
                  <path className="link" d="M80,410 C130,380 150,320 170,275"></path>
                  <path className="link link--alt" d="M80,170 C150,190 200,210 235,240"></path>
                </g>

                {/* Chain chips */}
                <g className="chip">
                  <g transform="translate(258,18)">
                    <rect className="bg" x="0" y="0" rx="12" ry="12" width="84" height="26"></rect>
                    <circle className="dot" cx="13" cy="13" r="5" fill="#f0b90b"></circle>
                    <text x="26" y="16">Ethereum</text>
                  </g>
                  <g transform="translate(508,160)">
                    <rect className="bg" x="0" y="0" rx="12" ry="12" width="82" height="26"></rect>
                    <circle className="dot" cx="13" cy="13" r="5" fill="#4dabf7"></circle>
                    <text x="26" y="16">Arbitrum</text>
                  </g>
                  <g transform="translate(512,402)">
                    <rect className="bg" x="0" y="0" rx="12" ry="12" width="64" height="26"></rect>
                    <circle className="dot" cx="13" cy="13" r="5" fill="#1e96fc"></circle>
                    <text x="26" y="16">Base</text>
                  </g>
                  <g transform="translate(258,556)">
                    <rect className="bg" x="0" y="0" rx="12" ry="12" width="70" height="26"></rect>
                    <circle className="dot" cx="13" cy="13" r="5" fill="#fcd535"></circle>
                    <text x="26" y="16">BSC</text>
                  </g>
                  <g transform="translate(36,402)">
                    <rect className="bg" x="0" y="0" rx="12" ry="12" width="80" height="26"></rect>
                    <circle className="dot" cx="13" cy="13" r="5" fill="#8b5cf6"></circle>
                    <text x="26" y="16">Polygon</text>
                  </g>
                  <g transform="translate(36,160)">
                    <rect className="bg" x="0" y="0" rx="12" ry="12" width="74" height="26"></rect>
                    <circle className="dot" cx="13" cy="13" r="5" fill="#03d97e"></circle>
                    <text x="26" y="16">Solana</text>
                  </g>
                </g>
              </svg>

              {/* Badge */}
              <div className="absolute -bottom-3 -left-3 bg-gradient-to-r from-primary-500 to-info-500 text-black text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-lg">
                <i data-lucide="git-branch" className="inline h-3 w-3 mr-1"></i>
                Interchain Matrix
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Liquidity;