import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HowItWorks from '../components/HowItWorks';
import SampleReading from '../components/SampleReading';
import WhyItWorks from '../components/WhyItWorks';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import StarryBackground from '../components/StarryBackground';

const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <StarryBackground />
      <div className="relative z-10">
        <Header />
        <HeroSection />
        <HowItWorks />
        <SampleReading />
        <WhyItWorks />
        <Testimonials />
        <Features />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;