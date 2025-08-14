import React, { useEffect, useState } from 'react';

interface PreloaderProps {
    onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setIsComplete(true);
                    setTimeout(() => {
                        onComplete();
                    }, 800); // Delay before hiding preloader
                    return 100;
                }
                // Simulate realistic loading with variable speed
                const increment = Math.random() * 15 + 5;
                return Math.min(prev + increment, 100);
            });
        }, 150);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className={`fixed inset-0 z-[9999] bg-gradient-to-br from-exchange-900 via-exchange-800 to-exchange-900 flex items-center justify-center transition-all duration-1000 ${isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
            }`}>

            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-primary-500/5 blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-info-500/5 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-success-500/3 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center space-y-8">

                {/* Logo container with glow effect */}
                <div className="relative">
                    {/* Outer glow ring */}
                    <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-primary-500/20 via-info-500/20 to-success-500/20 blur-2xl animate-spin-slow"></div>

                    {/* Middle glow ring */}
                    <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary-400/30 to-info-400/30 blur-xl animate-pulse"></div>

                    {/* Logo container */}
                    <div className="relative w-24 h-24 bg-gradient-to-br from-exchange-800/80 to-exchange-700/80 rounded-2xl border border-exchange-600/50 backdrop-blur-sm flex items-center justify-center shadow-2xl">
                        <img
                            src="/img/logo.png"
                            alt="BOOMBOT"
                            className="w-16 h-16 object-contain animate-bounce-subtle"
                        />

                        {/* Inner shine effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-transparent"></div>
                    </div>
                </div>

                {/* Brand text */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl font-black bg-gradient-to-r from-white via-primary-200 to-info-200 bg-clip-text text-transparent animate-fade-in tracking-wider" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
                        BOOMBOT
                    </h1>
                    <p className="text-sm text-primary-400 font-semibold tracking-widest uppercase animate-fade-in-delay" style={{ fontFamily: 'Verdana, Geneva, sans-serif' }}>
                        AUTONOMOUS TRADING AGENTS
                    </p>
                </div>

                {/* Progress bar */}
                <div className="w-64 space-y-3">
                    {/* Progress bar container */}
                    <div className="relative h-1 bg-exchange-700/50 rounded-full overflow-hidden">
                        {/* Background glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-info-500/20 blur-sm"></div>

                        {/* Progress fill */}
                        <div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-500 via-info-500 to-success-500 rounded-full transition-all duration-300 ease-out shadow-lg shadow-primary-500/50"
                            style={{ width: `${progress}%` }}
                        >
                            {/* Shine effect on progress bar */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                        </div>
                    </div>

                    {/* Progress text */}
                    <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Loading...</span>
                        <span className="text-primary-400 font-medium">{Math.round(progress)}%</span>
                    </div>
                </div>

                {/* Loading dots */}
                <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-info-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-success-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-primary-400/30 rounded-full animate-float"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${3 + Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Preloader;