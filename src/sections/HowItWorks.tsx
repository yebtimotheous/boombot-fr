import React, { useState, useEffect } from 'react';
import { useLucide } from '../hooks/useLucide';

const HowItWorks: React.FC = () => {
  useLucide();
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep(prev => (prev + 1) % 4);
        setIsAnimating(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      id: 'signal',
      title: 'Signal Detection',
      subtitle: 'AI-Powered Intelligence',
      description: 'Advanced neural networks analyze multi-source data streams in real-time, detecting market opportunities with 94.7% accuracy.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-500',
      metrics: { accuracy: '94.7%', sources: '50+', latency: '<100ms' },
      features: ['On-chain Analysis', 'Social Sentiment', 'News Processing', 'Technical Indicators']
    },
    {
      id: 'validation',
      title: 'Risk Validation',
      subtitle: 'Quantum Risk Engine',
      description: 'Comprehensive risk assessment using advanced simulation models and stress testing before any trade execution.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 7v2m0 4h.01" />
        </svg>
      ),
      color: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      metrics: { protection: '99.8%', simulations: '1M+', validation: '<5s' },
      features: ['Monte Carlo Simulation', 'Stress Testing', 'Portfolio Impact', 'Risk Scoring']
    },
    {
      id: 'execution',
      title: 'Smart Execution',
      subtitle: 'Optimal Routing Engine',
      description: 'Intelligent order routing across multiple DEXs with MEV protection and gas optimization for maximum efficiency.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          <circle cx="8" cy="8" r="2" fill="currentColor" />
          <circle cx="16" cy="16" r="2" fill="currentColor" />
        </svg>
      ),
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      metrics: { speed: '180ms', slippage: '0.05%', savings: '12%' },
      features: ['Multi-DEX Routing', 'MEV Protection', 'Gas Optimization', 'Liquidity Aggregation']
    },
    {
      id: 'monitoring',
      title: 'Active Monitoring',
      subtitle: 'Continuous Intelligence',
      description: 'Real-time position monitoring with automated risk management and intelligent exit strategies.',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 10h2m4 0h2" />
        </svg>
      ),
      color: 'amber',
      gradient: 'from-amber-500 to-orange-500',
      metrics: { uptime: '99.95%', response: '<50ms', trades: '10K+' },
      features: ['Real-time P&L', 'Dynamic Stops', 'Trailing Profits', 'Risk Alerts']
    }
  ];

  return (
    <section id="how" className="relative overflow-hidden bg-gradient-to-b from-black via-exchange-900 to-exchange-800">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-success-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-info-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 rounded-full border border-primary-500/30 bg-exchange-800 px-4 py-1.5 text-sm text-primary-400 mb-6">
            <div className="relative">
              <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 w-2 h-2 bg-primary-500 rounded-full animate-ping"></div>
            </div>
            <span>INTELLIGENT AUTOMATION PIPELINE</span>
          </div>

          <h2 className="font-display text-4xl font-bold md:text-5xl bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6">
            From Signal to Settlement
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the future of trading with our fully automated pipeline that combines 
            <span className="text-primary-400"> AI intelligence</span>, 
            <span className="text-success-400"> risk management</span>, and 
            <span className="text-info-400"> optimal execution</span> in milliseconds.
          </p>
        </div>

        {/* Interactive Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          
          {/* Step Navigation */}
          <div className="lg:col-span-1 space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`cursor-pointer transition-all duration-500 transform ${
                  activeStep === index 
                    ? 'scale-105 translate-x-2' 
                    : 'hover:scale-102 hover:translate-x-1'
                }`}
              >
                <div className={`relative bg-gradient-to-br from-exchange-800/60 to-exchange-900/60 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 ${
                  activeStep === index 
                    ? `border-${step.color}-500/50 shadow-2xl shadow-${step.color}-500/20` 
                    : 'border-exchange-600/30 hover:border-exchange-500/50'
                }`}>
                  
                  {/* Step indicator */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      activeStep === index 
                        ? `bg-gradient-to-br ${step.gradient} text-white shadow-lg` 
                        : 'bg-exchange-700/50 text-gray-400'
                    }`}>
                      <div className="w-6 h-6">{step.icon}</div>
                    </div>
                    
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-mono text-gray-500">STEP {index + 1}</span>
                        {activeStep === index && (
                          <div className={`w-2 h-2 bg-${step.color}-500 rounded-full animate-pulse`}></div>
                        )}
                      </div>
                      <h3 className={`font-bold transition-colors duration-300 ${
                        activeStep === index ? 'text-white' : 'text-gray-300'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Step metrics */}
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(step.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-sm font-black font-mono ${
                          activeStep === index ? `text-${step.color}-400` : 'text-gray-500'
                        }`}>
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Step Display */}
          <div className="lg:col-span-2">
            <div className={`relative bg-gradient-to-br from-exchange-800/80 to-exchange-900/80 backdrop-blur-xl border rounded-3xl p-8 shadow-2xl transition-all duration-700 ${
              `border-${steps[activeStep].color}-500/50 shadow-${steps[activeStep].color}-500/20`
            }`}>
              
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${steps[activeStep].gradient} text-white shadow-lg`}>
                    <div className="w-8 h-8">{steps[activeStep].icon}</div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{steps[activeStep].title}</h3>
                    <p className={`text-${steps[activeStep].color}-400 font-medium`}>{steps[activeStep].subtitle}</p>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm font-mono text-gray-400">STEP {activeStep + 1}/4</div>
                  <div className={`text-xs text-${steps[activeStep].color}-400 font-bold`}>ACTIVE</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                {steps[activeStep].description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {steps[activeStep].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-exchange-700/30 rounded-xl border border-exchange-600/30">
                    <div className={`w-2 h-2 bg-${steps[activeStep].color}-500 rounded-full`}></div>
                    <span className="text-sm text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Progress Visualization */}
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-gray-400">Pipeline Progress</span>
                  <span className={`text-sm font-bold text-${steps[activeStep].color}-400`}>
                    {Math.round(((activeStep + 1) / 4) * 100)}%
                  </span>
                </div>
                
                <div className="w-full bg-exchange-700/50 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${steps[activeStep].gradient} rounded-full transition-all duration-1000 ease-out relative`}
                    style={{ width: `${((activeStep + 1) / 4) * 100}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                  </div>
                </div>
              </div>

              {/* Live Data Simulation */}
              <div className="mt-8 p-6 bg-black/30 rounded-2xl border border-exchange-600/30">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-bold text-white">Live Processing</h4>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 bg-${steps[activeStep].color}-500 rounded-full animate-pulse`}></div>
                    <span className={`text-xs font-mono text-${steps[activeStep].color}-400`}>PROCESSING</span>
                  </div>
                </div>
                
                <div className="font-mono text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className={`text-${steps[activeStep].color}-400`}>{steps[activeStep].title} Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Processing Time:</span>
                    <span className="text-white">{Object.values(steps[activeStep].metrics)[2]}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Success Rate:</span>
                    <span className="text-success-400">{Object.values(steps[activeStep].metrics)[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Summary */}
        <div className="bg-gradient-to-br from-exchange-800/60 to-exchange-900/60 backdrop-blur-xl border border-exchange-600/50 rounded-3xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise Performance Metrics</h3>
            <p className="text-gray-400">Real-world results from our autonomous trading pipeline</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { 
                label: 'Average Execution', 
                value: '180ms', 
                color: 'primary', 
                gradient: 'from-primary-500 to-primary-600',
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 12h.01" />
                  </svg>
                )
              },
              { 
                label: 'Risk Mitigation', 
                value: '99.8%', 
                color: 'success', 
                gradient: 'from-success-500 to-success-600',
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                label: 'System Uptime', 
                value: '99.95%', 
                color: 'info', 
                gradient: 'from-info-500 to-info-600',
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                )
              },
              { 
                label: 'Cost Savings', 
                value: '12.3%', 
                color: 'warning', 
                gradient: 'from-warning-500 to-warning-600',
                icon: (
                  <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h8" />
                  </svg>
                )
              }
            ].map((metric, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-br ${metric.gradient} rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                <div className="relative bg-gradient-to-br from-exchange-800/60 to-exchange-900/60 backdrop-blur-xl border border-exchange-600/30 rounded-2xl p-6 hover:border-exchange-500/50 transition-all duration-300 group-hover:scale-105">
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${metric.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                      <div className="w-6 h-6">{metric.icon}</div>
                    </div>
                    <div className={`w-2 h-2 bg-${metric.color}-500 rounded-full animate-pulse`}></div>
                  </div>
                  
                  <div className="text-center">
                    <div className={`text-2xl font-black font-mono text-${metric.color}-400 mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">{metric.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center rounded-xl bg-primary-500 px-8 py-4 font-semibold text-black hover:bg-primary-400 transition-colors duration-300 shadow-lg hover:shadow-primary-500/25">
              Start Trading Now
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
            
            <button className="inline-flex items-center justify-center rounded-xl border border-exchange-600 bg-exchange-800 px-8 py-4 font-semibold text-gray-200 hover:bg-exchange-700 transition-colors duration-300">
              View Live Demo
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;