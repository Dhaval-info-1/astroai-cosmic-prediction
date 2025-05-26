import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { UserFormData } from '../types';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    birthDate: '',
    birthTime: '',
    birthPlace: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/prediction', { state: formData });
  };

  const isFormValid = () => {
    return (
      formData.name.trim() !== '' &&
      formData.birthDate.trim() !== '' &&
      formData.birthTime.trim() !== '' &&
      formData.birthPlace.trim() !== ''
    );
  };

  return (
    <section id="hero" className="min-h-screen pt-28 pb-20 px-4 flex items-center relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full animate-float blur-xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-float blur-xl" style={{ animationDelay: '-2s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-pink-500/10 rounded-full animate-float blur-xl" style={{ animationDelay: '-4s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-purple-900/30 border border-purple-500/20 text-purple-300 text-sm font-medium backdrop-blur-sm shadow-cosmic animate-pulse-glow">
              ✨ AI-Powered Astrology
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-indigo-200 to-purple-300">
              Discover Your Destiny With Cosmic AI
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto lg:mx-0">
              Enter your birth details and receive a personalized life prediction — instantly. 
              No sign-up required, just cosmic insights powered by AI.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-300 bg-[#1B1F3B]/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/20">
                <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center">
                  <span className="text-purple-300">🔮</span>
                </div>
                <span>100% Private</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 bg-[#1B1F3B]/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/20">
                <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center">
                  <span className="text-purple-300">⚡</span>
                </div>
                <span>Instant Results</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300 bg-[#1B1F3B]/50 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/20">
                <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center">
                  <span className="text-purple-300">🧠</span>
                </div>
                <span>Ancient astrology Powered</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-md">
            <div className="bg-[#1B1F3B]/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-cosmic border border-purple-500/20 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse-glow"></div>
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-500/10 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '-2s' }}></div>
              
              <h2 className="font-display text-2xl mb-6 text-center relative z-10">Reveal Your Cosmic Path</h2>
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Your Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" size={18} />
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#1B1F3B] border border-purple-800 rounded-lg py-3 px-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Date of Birth</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" size={18} />
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      className="w-full bg-[#1B1F3B] border border-purple-800 rounded-lg py-3 px-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Time of Birth</label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" size={18} />
                    <input
                      type="time"
                      name="birthTime"
                      value={formData.birthTime}
                      onChange={handleChange}
                      className="w-full bg-[#1B1F3B] border border-purple-800 rounded-lg py-3 px-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm text-gray-300">Place of Birth</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-purple-400" size={18} />
                    <input
                      type="text"
                      name="birthPlace"
                      placeholder="City, Country"
                      value={formData.birthPlace}
                      onChange={handleChange}
                      className="w-full bg-[#1B1F3B] border border-purple-800 rounded-lg py-3 px-10 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      required
                    />
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={!isFormValid()}
                  className={`w-full mt-6 py-4 rounded-lg font-medium text-white relative overflow-hidden group ${
                    isFormValid()
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-cosmic'
                      : 'bg-gray-700 cursor-not-allowed'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    ✨ Get My Free Prediction
                  </span>
                  {isFormValid() && (
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  )}
                </button>
              </form>
              <p className="text-center text-xs text-gray-400 mt-4">
                Powered by Love & ancient wisdom | 100% Private
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;