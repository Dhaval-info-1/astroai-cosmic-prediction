import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, SunMoon } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 ${
        isScrolled 
          ? 'bg-[#1B1F3B]/80 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <SunMoon className="h-8 w-8 text-[#F9D342]" />
          <span className="font-display text-xl text-white">AstroAI</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#sample-reading">Sample Reading</NavLink>
          <NavLink href="#features">Features</NavLink>
        </nav>
        <div className="flex items-center space-x-4">
          <a 
            href="#prediction" 
            className="bg-gradient-to-r from-purple-600 to-indigo-600 px-5 py-2 rounded-full text-white text-sm font-medium hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 hidden md:block"
          >
            Get Prediction
          </a>
          <button className="p-2 rounded-full bg-purple-900/50 text-white">
            <Moon size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href}
      className="text-gray-300 hover:text-white transition-colors font-medium"
    >
      {children}
    </a>
  );
};

export default Header;