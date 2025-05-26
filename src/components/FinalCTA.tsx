import React from 'react';
import { Sparkles } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-indigo-900/20"></div>
      
      {/* Animated stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.7 + 0.3
            }}
          ></div>
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-indigo-200 to-purple-300">
            Reveal Your Cosmic Destiny Today
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10">
            Your destiny is just one click away. No login. No cost. Just cosmic insights that will transform your perspective.
          </p>
          
          <a 
            href="#hero" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 px-10 py-4 rounded-full text-white text-lg font-medium hover:from-purple-500 hover:to-indigo-500 transition-all group"
          >
            <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
            Reveal My Future Now
          </a>
          
          <p className="text-gray-400 text-sm mt-6">
            Join over 50,000+ people who have discovered their cosmic blueprint
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;