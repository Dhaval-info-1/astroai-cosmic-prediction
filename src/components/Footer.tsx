import React from 'react';
import { SunMoon, Mail, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1B1F3B]/80 backdrop-blur-md py-16 px-4 border-t border-purple-500/20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <SunMoon className="h-8 w-8 text-[#F9D342]" />
            <span className="font-display text-2xl text-white">AstroAI</span>
          </div>
          
          <div className="flex gap-6">
            <a href="dhaval2123mba@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/dhaval.info" className="text-gray-400 hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/dhaval.info" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 mb-10">
          <div>
            <h4 className="font-display text-lg mb-4">About AstroAI</h4>
            <p className="text-gray-400 text-sm">
              AstroAI combines ancient astrological wisdom with modern AI to deliver personalized cosmic insights instantly, helping you navigate life's journey with clarity.
            </p>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#sample-reading" className="text-gray-400 hover:text-white transition-colors">Sample Reading</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#hero" className="text-gray-400 hover:text-white transition-colors">Get Your Reading</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">dhaval2123mba@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-900/40 pt-8 text-center text-gray-500 text-sm">
          <p>This is not medical or financial advice. Just cosmic guidance.</p>
          <p className="mt-2">© {new Date().getFullYear()} AstroAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;