import React from 'react';
import { UserCircle, Brain, Sparkles } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      icon: <UserCircle className="w-10 h-10 text-purple-400" />,
      title: "Enter Birth Details",
      description: "Provide your full name, birth date, time, and location to map your cosmic blueprint."
    },
    {
      id: 2,
      icon: <Brain className="w-10 h-10 text-indigo-400" />,
      title: "AI Analyzes Your Cosmic Blueprint",
      description: "Our advanced AI combines ancient wisdom with modern algorithms to analyze your astral patterns."
    },
    {
      id: 3,
      icon: <Sparkles className="w-10 h-10 text-amber-400" />,
      title: "Get Your Future Revealed Instantly",
      description: "Receive detailed insights about your life path, relationships, career, and spiritual journey."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
            How It Works
          </h2>
          <p className="text-gray-300">
            Our AI-powered astrology platform combines ancient cosmic wisdom with cutting-edge technology to deliver personalized insights in seconds.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div 
              key={step.id}
              className="bg-[#1B1F3B]/60 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 text-center hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1B1F3B] flex items-center justify-center border border-purple-500/20">
                {step.icon}
              </div>
              <h3 className="font-display text-xl mb-3">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Connector lines for desktop */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          <div className="absolute top-[-120px] left-[calc(16.7%+8px)] right-[calc(16.7%+8px)] h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;