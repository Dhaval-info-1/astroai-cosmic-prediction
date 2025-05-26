/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        purple: {
          900: '#5B2C6F',
        },
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'orbit-1': 'orbit 12s linear infinite',
        'orbit-2': 'orbit 8s linear infinite reverse',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(40px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(40px) rotate(-360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
      },
      boxShadow: {
        'glow-purple': '0 0 15px rgba(138, 43, 226, 0.5)',
        'glow-amber': '0 0 15px rgba(251, 191, 36, 0.5)',
        'glow-indigo': '0 0 15px rgba(99, 102, 241, 0.5)',
        'cosmic': '0 0 30px rgba(147, 51, 234, 0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};