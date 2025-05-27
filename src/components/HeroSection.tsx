import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, User, Sparkles, Shield, Zap, Star, Moon, Sun } from 'lucide-react';
import { UserFormData } from '../types';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) return;
    
    setIsLoading(true);
    
    setTimeout(() => {
      navigate('/prediction', { state: formData });
      setIsLoading(false);
    }, 1200);
  };

  const isFormValid = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  const getCompletionPercentage = () => {
    const filledFields = Object.values(formData).filter(value => value.trim() !== '').length;
    return (filledFields / 4) * 100;
  };

  // Constellation background pattern
  const ConstellationBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 1000 1000">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {[...Array(50)].map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 1000}
            cy={Math.random() * 1000}
            r={Math.random() * 2 + 0.5}
            fill="#8B5CF6"
            filter="url(#glow)"
            className="animate-pulse"
            style={{
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </svg>
    </div>
  );

  return (
    <>
      {/* Custom CSS for advanced animations */}
      <style jsx>{`
        @keyframes cosmic-float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          33% { transform: translateY(-20px) rotate(120deg); opacity: 1; }
          66% { transform: translateY(10px) rotate(240deg); opacity: 0.8; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.4); }
        }
        
        @keyframes progress-fill {
          from { width: 0%; }
          to { width: var(--progress-width); }
        }
        
        .cosmic-float {
          animation: cosmic-float 8s ease-in-out infinite;
        }
        
        .gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        
        .pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .progress-bar {
          animation: progress-fill 0.5s ease-out forwards;
        }
        
        .input-glow:focus {
          box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1), 0 0 20px rgba(139, 92, 246, 0.2);
        }
        
        @media (max-width: 768px) {
          .mobile-padding {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>

      <section className="min-h-screen relative overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950/20 to-slate-950">
        {/* Advanced background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl cosmic-float"></div>
          <div className="absolute top-1/2 right-1/6 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl cosmic-float" style={{ animationDelay: '-2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl cosmic-float" style={{ animationDelay: '-4s' }}></div>
        </div>

        <ConstellationBackground />

        <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-7xl mx-auto">
            
            {/* Main Content Container */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-8 lg:pr-8">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 backdrop-blur-xl border border-purple-500/30 rounded-full">
                  <div className="flex items-center gap-1">
                    <Star size={14} className="text-purple-400 animate-pulse" />
                    <Moon size={14} className="text-indigo-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <Sun size={14} className="text-amber-400 animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                  <span className="text-sm font-medium text-purple-200">Advanced AI Astrology</span>
                </div>

                {/* Main Headline */}
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                    <span className="block bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent gradient-shift">
                      Discover Your
                    </span>
                    <span className="block bg-gradient-to-r from-purple-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent gradient-shift" style={{ animationDelay: '1s' }}>
                      Cosmic Blueprint
                    </span>
                  </h1>
                  
                  <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Unlock profound insights about your personality, relationships, and life path through 
                    advanced astrological analysis powered by artificial intelligence.
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
                  <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <Shield size={18} className="text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-white">100% Private</div>
                        <div className="text-xs text-slate-400">Secure & Anonymous</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 hover:border-indigo-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full flex items-center justify-center">
                        <Zap size={18} className="text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-white">Instant Results</div>
                        <div className="text-xs text-slate-400">AI-Powered Analysis</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-4 hover:border-violet-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Sparkles size={18} className="text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-semibold text-white">Premium Quality</div>
                        <div className="text-xs text-slate-400">Professional Insights</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Form */}
              <div className="w-full max-w-md mx-auto lg:max-w-lg">
                <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-6 sm:p-8 shadow-2xl">
                  
                  {/* Form Header */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-full">
                      <Sparkles size={16} className="text-purple-400" />
                      <span className="text-sm font-medium text-purple-300">Free Birth Chart Analysis</span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                      Start Your Journey
                    </h2>
                    
                    <p className="text-slate-400 text-sm sm:text-base">
                      Enter your birth information for personalized cosmic insights
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-6">
                      <div className="flex justify-between text-xs text-slate-400 mb-2">
                        <span>Progress</span>
                        <span>{Math.round(getCompletionPercentage())}% Complete</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2 rounded-full transition-all duration-500 ease-out"
                          style={{ width: `${getCompletionPercentage()}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Name Field */}
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                        <User size={14} className="text-purple-400" />
                        Full Name
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setActiveField('name')}
                          onBlur={() => setActiveField(null)}
                          className={`w-full bg-slate-800/80 border-2 rounded-xl py-3 sm:py-4 px-4 text-white placeholder-slate-500 focus:outline-none transition-all duration-300 input-glow ${
                            activeField === 'name' 
                              ? 'border-purple-500 bg-slate-800' 
                              : 'border-slate-600 hover:border-slate-500'
                          }`}
                          required
                        />
                        {formData.name && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Date & Time Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Birth Date */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                          <Calendar size={14} className="text-purple-400" />
                          Birth Date
                        </label>
                        <div className="relative">
                          <input
                            type="date"
                            name="birthDate"
                            value={formData.birthDate}
                            onChange={handleChange}
                            onFocus={() => setActiveField('birthDate')}
                            onBlur={() => setActiveField(null)}
                            className={`w-full bg-slate-800/80 border-2 rounded-xl py-3 sm:py-4 px-4 text-white transition-all duration-300 input-glow ${
                              activeField === 'birthDate' 
                                ? 'border-purple-500 bg-slate-800' 
                                : 'border-slate-600 hover:border-slate-500'
                            }`}
                            required
                          />
                          {formData.birthDate && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Birth Time */}
                      <div className="space-y-2">
                        <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                          <Clock size={14} className="text-purple-400" />
                          Birth Time
                        </label>
                        <div className="relative">
                          <input
                            type="time"
                            name="birthTime"
                            value={formData.birthTime}
                            onChange={handleChange}
                            onFocus={() => setActiveField('birthTime')}
                            onBlur={() => setActiveField(null)}
                            className={`w-full bg-slate-800/80 border-2 rounded-xl py-3 sm:py-4 px-4 text-white transition-all duration-300 input-glow ${
                              activeField === 'birthTime' 
                                ? 'border-purple-500 bg-slate-800' 
                                : 'border-slate-600 hover:border-slate-500'
                            }`}
                            required
                          />
                          {formData.birthTime && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Birth Place */}
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 text-sm font-medium text-slate-300">
                        <MapPin size={14} className="text-purple-400" />
                        Birth Place
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="birthPlace"
                          placeholder="City, State/Province, Country"
                          value={formData.birthPlace}
                          onChange={handleChange}
                          onFocus={() => setActiveField('birthPlace')}
                          onBlur={() => setActiveField(null)}
                          className={`w-full bg-slate-800/80 border-2 rounded-xl py-3 sm:py-4 px-4 text-white placeholder-slate-500 focus:outline-none transition-all duration-300 input-glow ${
                            activeField === 'birthPlace' 
                              ? 'border-purple-500 bg-slate-800' 
                              : 'border-slate-600 hover:border-slate-500'
                          }`}
                          required
                        />
                        {formData.birthPlace && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={!isFormValid() || isLoading}
                      className={`w-full py-4 sm:py-5 rounded-xl font-semibold text-lg transition-all duration-300 relative overflow-hidden group ${
                        isFormValid() && !isLoading
                          ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/25 pulse-glow'
                          : 'bg-slate-700 text-slate-400 cursor-not-allowed'
                      }`}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            Analyzing Your Cosmic Pattern...
                          </>
                        ) : (
                          <>
                            <Sparkles size={20} />
                            Generate My Birth Chart
                            <Sparkles size={20} />
                          </>
                        )}
                      </span>
                      
                      {isFormValid() && !isLoading && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      )}
                    </button>
                  </form>

                  {/* Footer */}
                  <div className="text-center mt-6 pt-6 border-t border-slate-700/50">
                    <p className="text-xs text-slate-500 flex items-center justify-center gap-2">
                      <Shield size={12} className="text-purple-400" />
                      Your data is encrypted and never stored
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;