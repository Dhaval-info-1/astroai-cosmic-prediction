import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Eye } from 'lucide-react';

const SampleReading: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const sampleUser = {
    name: "Riya",
    birthDate: "July 15, 1995",
    birthPlace: "Delhi, India"
  };

  const samplePrediction = {
    lifePath: "You're following Life Path 9, making you compassionate, idealistic, and drawn to humanitarian causes. You see the big picture and want to make a difference. Your challenge is balancing idealism with practicality.",
    
    career: "Your natural empathy and vision make you well-suited for careers in teaching, counseling, healthcare, or the arts. You have leadership potential when working for causes you believe in. Success comes when you embrace your creative and humanitarian side.",
    
    relationships: "You attract people who need healing or guidance. Your challenge is finding partners who can match your depth and aren't just seeking your nurturing energy. Your most compatible connections will be with those who share your values and vision for a better world.",
    
    spiritual: "You have an innate spiritual wisdom and are likely drawn to philosophical questions about life's meaning. Meditation and artistic expression are powerful tools for your spiritual growth. Your journey involves learning forgiveness and letting go of past disappointments."
  };

  return (
    <section id="sample-reading" className="py-20 px-4 bg-[#1B1F3B]/30">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-display text-3xl md:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
            See a Sample Reading
          </h2>
          <p className="text-gray-300">
            Curious about what insights await? Explore this sample reading to see the depth and accuracy of our AI-powered cosmic analysis.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-[#1B1F3B]/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg border border-purple-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-xl font-medium">
                {sampleUser.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-display">{sampleUser.name}</h3>
                <p className="text-gray-400 text-sm">{sampleUser.birthDate} • {sampleUser.birthPlace}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <SampleSection
                title="Life Path & Personality"
                content={samplePrediction.lifePath}
                isExpanded={isExpanded}
              />
              
              {isExpanded && (
                <>
                  <SampleSection
                    title="Career & Opportunities"
                    content={samplePrediction.career}
                    isExpanded={isExpanded}
                  />
                  
                  <SampleSection
                    title="Love & Relationships"
                    content={samplePrediction.relationships}
                    isExpanded={isExpanded}
                  />
                  
                  <SampleSection
                    title="Spiritual & Emotional Growth"
                    content={samplePrediction.spiritual}
                    isExpanded={isExpanded}
                  />
                </>
              )}
            </div>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 w-full py-3 rounded-lg bg-purple-900/50 text-white flex items-center justify-center gap-2 hover:bg-purple-800/50 transition-colors"
            >
              <Eye size={18} />
              {isExpanded ? "Show Less" : "View Complete Sample Reading"}
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#hero" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 rounded-full text-white font-medium hover:from-purple-500 hover:to-indigo-500 transition-all"
          >
            ✨ Get Your Own Reading
          </a>
        </div>
      </div>
    </section>
  );
};

interface SampleSectionProps {
  title: string;
  content: string;
  isExpanded: boolean;
}

const SampleSection: React.FC<SampleSectionProps> = ({ title, content, isExpanded }) => {
  return (
    <div className={`bg-[#1B1F3B] p-4 rounded-lg border border-purple-800/30 transition-all duration-300 ${
      isExpanded ? 'opacity-100' : 'opacity-90'
    }`}>
      <h4 className="font-medium text-lg mb-2 text-purple-300">{title}</h4>
      <p className="text-gray-300 text-sm">{content}</p>
    </div>
  );
};

export default SampleReading;