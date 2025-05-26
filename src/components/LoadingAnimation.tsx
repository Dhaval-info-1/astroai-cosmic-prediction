import React from 'react';

const LoadingAnimation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative">
        {/* Outer circle */}
        <div className="w-32 h-32 rounded-full border-4 border-purple-500/30 flex items-center justify-center animate-spin-slow">
          {/* Celestial bodies */}
          <div className="absolute w-4 h-4 bg-amber-400 rounded-full shadow-glow-amber animate-orbit-1"></div>
          <div className="absolute w-3 h-3 bg-indigo-400 rounded-full shadow-glow-indigo animate-orbit-2"></div>
          
          {/* Inner circle */}
          <div className="w-20 h-20 rounded-full border-2 border-indigo-500/40 flex items-center justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full animate-pulse shadow-lg shadow-purple-500/30"></div>
          </div>
        </div>
      </div>
      
      <p className="mt-8 text-xl font-display animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
        Reading your cosmic blueprint...
      </p>
      
      <div className="mt-4 text-sm text-gray-400 max-w-sm text-center">
        Our AI is analyzing the celestial patterns present at your birth to generate your personalized reading.
      </div>
    </div>
  );
};

export default LoadingAnimation;