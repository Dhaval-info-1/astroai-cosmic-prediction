import React from 'react';
import { Zap, Lock, Share, Heart } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      title: "Instant & Private",
      description: "No signup. No waiting. Just answers. Get your cosmic insights in seconds with complete privacy."
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-400" />,
      title: "Sacred Accuracy",
      description: "Our AI analyzes your Life Path, Zodiac, Karma, and Numerology for a complete spiritual portrait."
    },
    {
      icon: <Share className="w-8 h-8 text-indigo-400" />,
      title: "Share & Save",
      description: "Download your prediction as a beautifully designed PDF or share it directly with friends and family."
    },
    {
      icon: <Heart className="w-8 h-8 text-pink-400" />,
      title: "Free Forever",
      description: "We believe cosmic wisdom should be accessible to all. Enjoy our AI astrology readings at no cost."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-[#1B1F3B]/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
            Features You'll Love
          </h2>
          <p className="text-gray-300">
            Discover why thousands trust our cosmic AI for spiritual guidance and self-discovery.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#1B1F3B]/60 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 mb-6 rounded-lg bg-[#1B1F3B] flex items-center justify-center border border-purple-500/20">
                {feature.icon}
              </div>
              <h3 className="font-display text-xl mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;