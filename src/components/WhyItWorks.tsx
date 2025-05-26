import React from 'react';
import { Cpu, Sparkles, Star } from 'lucide-react';

const WhyItWorks: React.FC = () => {
  const reasons = [
    {
      icon: <Cpu className="w-8 h-8 text-purple-400" />,
      title: "Gemini AI Technology",
      description: "Trained on 10,000+ birth charts and ancient texts to provide accurate and personalized cosmic insights."
    },
    {
      icon: <Star className="w-8 h-8 text-amber-400" />,
      title: "Ancient Wisdom",
      description: "Combines traditional astrology, numerology, and sacred geometry principles for holistic analysis."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-indigo-400" />,
      title: "Personalized Accuracy",
      description: "Advanced algorithms analyze the unique cosmic patterns present at your exact time and place of birth."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
              <div className="relative bg-[#1B1F3B]/80 backdrop-blur-md p-8 rounded-2xl border border-purple-500/20">
                <h2 className="font-display text-3xl md:text-4xl mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
                  Modern AI Meets Ancient Wisdom
                </h2>
                
                <div className="space-y-6">
                  {reasons.map((reason, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#1B1F3B] flex items-center justify-center border border-purple-500/20">
                        {reason.icon}
                      </div>
                      <div>
                        <h3 className="font-display text-xl mb-1">{reason.title}</h3>
                        <p className="text-gray-400">{reason.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 lg:order-1 relative">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl"></div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div 
                    key={i}
                    className="aspect-square rounded-lg bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-0.5"
                  >
                    <div className="w-full h-full rounded-md bg-[#1B1F3B]/80 backdrop-blur-sm flex items-center justify-center">
                      {i === 1 && <ZodiacSymbol symbol="♈" name="Aries" />}
                      {i === 2 && <ZodiacSymbol symbol="♎" name="Libra" />}
                      {i === 3 && <ZodiacSymbol symbol="♌" name="Leo" />}
                      {i === 4 && <ZodiacSymbol symbol="♒" name="Aquarius" />}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-4">
                {[5, 6, 7].map((i) => (
                  <div 
                    key={i}
                    className="aspect-square rounded-lg bg-gradient-to-br from-purple-900/50 to-indigo-900/50 p-0.5"
                  >
                    <div className="w-full h-full rounded-md bg-[#1B1F3B]/80 backdrop-blur-sm flex items-center justify-center">
                      {i === 5 && <GeometryShape />}
                      {i === 6 && <NumerologyNumber number={7} />}
                      {i === 7 && <NumerologyNumber number={3} />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ZodiacSymbolProps {
  symbol: string;
  name: string;
}

const ZodiacSymbol: React.FC<ZodiacSymbolProps> = ({ symbol, name }) => {
  return (
    <div className="text-center">
      <div className="text-4xl text-amber-400 mb-1">{symbol}</div>
      <div className="text-xs text-gray-400">{name}</div>
    </div>
  );
};

const GeometryShape: React.FC = () => {
  return (
    <div className="relative w-12 h-12">
      <div className="absolute inset-0 border-2 border-purple-500/50 rounded-full"></div>
      <div className="absolute inset-2 border-2 border-indigo-500/50 rotate-45 transform"></div>
      <div className="absolute inset-4 border-2 border-amber-500/50 rotate-90 transform"></div>
    </div>
  );
};

interface NumerologyNumberProps {
  number: number;
}

const NumerologyNumber: React.FC<NumerologyNumberProps> = ({ number }) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-display text-purple-400">{number}</div>
      <div className="text-xs text-gray-400">Life Path</div>
    </div>
  );
};

export default WhyItWorks;