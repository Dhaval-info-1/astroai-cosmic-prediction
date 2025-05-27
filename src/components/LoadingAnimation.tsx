import React, { useState, useEffect } from 'react';

const LoadingAnimation: React.FC = () => {
  const [loadingStage, setLoadingStage] = useState(0);
  const [loadingText, setLoadingText] = useState('');
  
  const loadingStages = [
    "Mapping celestial coordinates...",
    "Analyzing planetary alignments...",
    "Calculating house positions...",
    "Interpreting cosmic influences...",
    "Generating your prediction..."
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingStage(prev => (prev + 1) % loadingStages.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    setLoadingText(loadingStages[loadingStage]);
  }, [loadingStage]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 px-4 py-8 relative overflow-hidden">
      {/* Animated background stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Main loading animation */}
      <div className="relative z-10">
        {/* Zodiac wheel background */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
          {/* Outer zodiac ring */}
          <div className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-gold-400 via-purple-400 to-indigo-400 animate-spin-slow opacity-60">
            {/* Zodiac symbols */}
            {['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'].map((symbol, index) => (
              <div
                key={index}
                className="absolute text-amber-300 text-lg sm:text-xl md:text-2xl font-bold"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${index * 30}deg) translateY(-140px) rotate(-${index * 30}deg)`,
                }}
              >
                {symbol}
              </div>
            ))}
          </div>
          
          {/* Middle orbit ring */}
          <div className="absolute inset-8 sm:inset-12 rounded-full border border-purple-400/40 animate-spin-reverse">
            {/* Planetary bodies */}
            <div className="absolute w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-lg shadow-yellow-400/50 animate-orbit-sun"></div>
            <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full shadow-lg shadow-blue-400/50 animate-orbit-mercury"></div>
            <div className="absolute w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full shadow-lg shadow-pink-400/50 animate-orbit-venus"></div>
            <div className="absolute w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-red-500 to-red-700 rounded-full shadow-lg shadow-red-500/50 animate-orbit-mars"></div>
          </div>
          
          {/* Inner core */}
          <div className="absolute inset-16 sm:inset-20 md:inset-24 rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-800 shadow-2xl shadow-purple-500/30 animate-pulse-slow flex items-center justify-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-amber-400 via-purple-500 to-indigo-600 rounded-full animate-spin-slow shadow-lg shadow-purple-500/50 flex items-center justify-center">
              <div className="text-white text-xl sm:text-2xl md:text-3xl animate-pulse">✨</div>
            </div>
          </div>
        </div>
        
        {/* Progress indicator */}
        <div className="mt-8 sm:mt-12 w-64 sm:w-80 md:w-96 bg-slate-800/50 rounded-full h-2 overflow-hidden backdrop-blur-sm">
          <div 
            className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 transition-all duration-1000 rounded-full shadow-lg shadow-purple-400/30"
            style={{ width: `${((loadingStage + 1) / loadingStages.length) * 100}%` }}
          />
        </div>
      </div>
      
      {/* Loading text */}
      <div className="mt-8 sm:mt-12 text-center z-10 max-w-sm sm:max-w-md">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent animate-pulse mb-4">
          Cosmic Analysis
        </h2>
        
        <p className="text-lg sm:text-xl text-purple-200 animate-fade-in-out font-medium mb-6">
          {loadingText}
        </p>
        
        <div className="text-sm sm:text-base text-slate-300 leading-relaxed opacity-80">
          Our advanced AI is interpreting the celestial patterns from your birth chart to reveal insights about your future path and cosmic influences.
        </div>
        
        {/* Mystical elements */}
        <div className="flex justify-center mt-6 space-x-4 text-2xl sm:text-3xl">
          <span className="animate-bounce" style={{ animationDelay: '0s' }}>🌟</span>
          <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🌙</span>
          <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>✨</span>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        
        @keyframes orbit-sun {
          0% { transform: rotate(0deg) translateX(80px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(80px) rotate(-360deg); }
        }
        
        @keyframes orbit-mercury {
          0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        
        @keyframes orbit-venus {
          0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
        }
        
        @keyframes orbit-mars {
          0% { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes fade-in-out {
          0% { opacity: 0; transform: translateY(10px); }
          20% { opacity: 1; transform: translateY(0); }
          80% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-orbit-sun {
          animation: orbit-sun 8s linear infinite;
        }
        
        .animate-orbit-mercury {
          animation: orbit-mercury 6s linear infinite;
        }
        
        .animate-orbit-venus {
          animation: orbit-venus 10s linear infinite;
        }
        
        .animate-orbit-mars {
          animation: orbit-mars 12s linear infinite;
        }
        
        .animate-twinkle {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .animate-fade-in-out {
          animation: fade-in-out 2s ease-in-out infinite;
        }
        
        @media (max-width: 640px) {
          .animate-orbit-sun {
            animation: orbit-sun-mobile 8s linear infinite;
          }
          
          .animate-orbit-mercury {
            animation: orbit-mercury-mobile 6s linear infinite;
          }
          
          .animate-orbit-venus {
            animation: orbit-venus-mobile 10s linear infinite;
          }
          
          .animate-orbit-mars {
            animation: orbit-mars-mobile 12s linear infinite;
          }
        }
        
        @keyframes orbit-sun-mobile {
          0% { transform: rotate(0deg) translateX(60px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(60px) rotate(-360deg); }
        }
        
        @keyframes orbit-mercury-mobile {
          0% { transform: rotate(0deg) translateX(45px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(45px) rotate(-360deg); }
        }
        
        @keyframes orbit-venus-mobile {
          0% { transform: rotate(0deg) translateX(75px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(75px) rotate(-360deg); }
        }
        
        @keyframes orbit-mars-mobile {
          0% { transform: rotate(0deg) translateX(90px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation;