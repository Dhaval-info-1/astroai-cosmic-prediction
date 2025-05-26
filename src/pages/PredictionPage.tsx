import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Download, Share2 } from 'lucide-react';
import Header from '../components/Header';
import StarryBackground from '../components/StarryBackground';
import Footer from '../components/Footer';
import LoadingAnimation from '../components/LoadingAnimation';
import { generateAstroNumPrediction } from '../lib/gemini';
import { saveAdvancedPrediction } from '../utils/predictionUtils';
import { UserFormData } from '../types';

const PredictionPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [prediction, setPrediction] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const userData = location.state as UserFormData;

  useEffect(() => {
    if (!userData) {
      navigate('/');
      return;
    }

    const fetchPrediction = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await generateAstroNumPrediction(userData);
        if (
          !result ||
          !result.astrology ||
          !result.numerology ||
          typeof result.combinedAdvice !== 'string'
        ) {
          throw new Error('Prediction format is invalid');
        }
        setPrediction(result);
        saveAdvancedPrediction(userData, result).catch(e => {
          console.warn('Prediction generated but failed to save to Supabase:', e);
        });
      } catch (error) {
        setError('Failed to generate prediction. Please try again.');
        console.error('Error generating prediction:', error);
      } finally {
        setTimeout(() => setIsLoading(false), 3000); // Simulate loading for demo
      }
    };

    fetchPrediction();
  }, [userData, navigate]);

  const handleDownloadPDF = () => {
    alert('PDF download functionality would be implemented here');
  };

  const handleShare = () => {
    alert('Sharing functionality would be implemented here');
  };

  if (!userData) {
    return (
      <div className="relative min-h-screen overflow-hidden text-white">
        <StarryBackground />
        <div className="relative z-10">
          <Header />
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-2xl font-display mb-4">No prediction data available</h1>
            <p className="mb-8">Please start from the beginning to get your cosmic reading.</p>
            <button
              onClick={() => navigate('/')}
              className="bg-purple-700 hover:bg-purple-600 transition-all px-6 py-3 rounded-full text-white font-medium"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative min-h-screen overflow-hidden text-white">
        <StarryBackground />
        <div className="relative z-10">
          <Header />
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-2xl font-display mb-4">Prediction Error</h1>
            <p className="mb-8">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-purple-700 hover:bg-purple-600 transition-all px-6 py-3 rounded-full text-white font-medium"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="relative min-h-screen overflow-hidden text-white">
        <StarryBackground />
        <div className="relative z-10">
          <Header />
          <LoadingAnimation />
        </div>
      </div>
    );
  }

  if (!prediction && !isLoading && !error) {
    return (
      <div className="relative min-h-screen overflow-hidden text-white">
        <StarryBackground />
        <div className="relative z-10">
          <Header />
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-2xl font-display mb-4">No prediction available</h1>
            <p className="mb-8">Sorry, we couldn't generate your prediction. Please try again.</p>
            <button
              onClick={() => navigate('/')} 
              className="bg-purple-700 hover:bg-purple-600 transition-all px-6 py-3 rounded-full text-white font-medium"
            >
              Return Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <StarryBackground />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-[#1B1F3B]/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-purple-500/20">
              <h1 className="font-display text-3xl md:text-4xl mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
                Your Advanced Cosmic & Numerology Blueprint
              </h1>
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <div className="px-4 py-2 bg-purple-900/50 rounded-full text-sm">
                  ✨ {userData.name}
                </div>
                <div className="px-4 py-2 bg-purple-900/50 rounded-full text-sm">
                  🗓️ {userData.birthDate}
                </div>
                <div className="px-4 py-2 bg-purple-900/50 rounded-full text-sm">
                  🕒 {userData.birthTime}
                </div>
                <div className="px-4 py-2 bg-purple-900/50 rounded-full text-sm">
                  📍 {userData.birthPlace}
                </div>
              </div>

              {prediction && (
                <div className="space-y-8">
                  {/* Astrology Section */}
                  <SectionTitle title="Astrology Insights" />
                  <PredictionSection title="Sun Sign" content={prediction.astrology?.sunSign} />
                  <PredictionSection title="Moon Sign" content={prediction.astrology?.moonSign} />
                  <PredictionSection title="Rising Sign" content={prediction.astrology?.risingSign} />
                  <PredictionSection title="Life Path & Personality (Astro)" content={prediction.astrology?.lifePath} />
                  <PredictionSection title="Career (Astro)" content={prediction.astrology?.career} />
                  <PredictionSection title="Love & Relationships (Astro)" content={prediction.astrology?.relationships} />
                  <PredictionSection title="Spiritual & Emotional Growth (Astro)" content={prediction.astrology?.spiritual} />
                  <PredictionSection title="Lucky Numbers, Color & Mantra (Astro)" content={prediction.astrology?.lucky} />

                  {/* Numerology Section */}
                  <SectionTitle title="Numerology Insights" />
                  <PredictionSection title="Life Path Number" content={prediction.numerology?.lifePathNumber} />
                  <PredictionSection title="Expression Number" content={prediction.numerology?.expressionNumber} />
                  <PredictionSection title="Soul Urge Number" content={prediction.numerology?.soulUrgeNumber} />
                  <PredictionSection title="Personality Number" content={prediction.numerology?.personalityNumber} />
                  <PredictionSection title="Numerology Summary" content={prediction.numerology?.summary} />

                  {/* Combined Advice */}
                  <SectionTitle title="Combined Cosmic & Numerology Advice" />
                  <PredictionSection title="Advice" content={prediction.combinedAdvice} />
                </div>
              )}

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownloadPDF}
                  className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-600 transition-all px-6 py-3 rounded-full text-white font-medium"
                >
                  <Download size={18} />
                  Download Full Report
                </button>
                <button
                  onClick={handleShare}
                  className="flex items-center justify-center gap-2 bg-indigo-700 hover:bg-indigo-600 transition-all px-6 py-3 rounded-full text-white font-medium"
                >
                  <Share2 size={18} />
                  Share Reading
                </button>
              </div>
              <div className="mt-2 text-center text-sm text-gray-400">
                <span>PDF download & sharing features are <span className="text-purple-300 font-semibold">coming soon</span>!</span>
              </div>
              <div className="mt-8 flex justify-center">
                <button
                  onClick={() => navigate('/')} 
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 px-8 py-3 rounded-full text-white font-medium shadow-cosmic transition-all"
                >
                  Generate Another Prediction
                </button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

interface PredictionSectionProps {
  title: string;
  content: string;
}

const PredictionSection: React.FC<PredictionSectionProps> = ({ title, content }) => {
  if (!content) return null;
  return (
    <div className="bg-[#1B1F3B]/50 p-6 rounded-xl border border-purple-500/20">
      <h2 className="text-xl font-display mb-2 text-purple-300">{title}</h2>
      <p className="text-gray-200 leading-relaxed">{content}</p>
    </div>
  );
};

const SectionTitle: React.FC<{ title: string }> = ({ title }) => (
  <h3 className="font-display text-2xl mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-indigo-300">
    {title}
  </h3>
);

export default PredictionPage;