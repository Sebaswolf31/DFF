/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      fontFamily: {
        sans: ["'Nunito'", 'sans-serif'],
      },
      colors: {
        blueP: '#175699',
        blueLight: '#188FA3',
        greenP: '#41B495',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      spacing: {
        'mobile-pad': '4vw',
        'desktop-pad': '8vw',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-balance': {
          'text-wrap': 'balance',
        },
      });
    },
  ],
};
