/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        himalaya: {
          950: '#040D0B',
          900: '#071813',
          800: '#0D2B22',
          700: '#144637',
          600: '#1D5C4A',
          500: '#2A7D65',
        },
        slate: {
          950: '#0A0F11',
          900: '#11181B',
          850: '#162024',
          800: '#1D2A30',
          700: '#2A3C44',
          400: '#94A3B8',
          200: '#E2E8F0',
        },
        gold: {
          300: '#F7E7B4',
          400: '#E5C358',
          500: '#D4AF37',
          600: '#B89324',
          700: '#8A6D15',
        },
        snow: {
          50: '#FFFFFF',
          100: '#F8FAFC',
          200: '#F1F5F9',
        }
      },
      fontFamily: {
        serif: ['var(--font-cinzel)', 'Georgia', 'serif'],
        sans: ['var(--font-plus-jakarta)', 'Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.9' },
        }
      }
    },
  },
  plugins: [],
};
