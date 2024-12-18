/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        '300vh': '300vh',
        '100vw': '150vw',
      },
      minHeight: {
        '350px': '350px',
      },

      colors: {
        'main-blue': '#11273A',
        customGray: '#4E617B',
        buttonBlack: '#0e1318',
      },
      backgroundColor: {
        semiBlue: '#233342',
        semiBlack: '#131A22',
        badScore: '#AA062A',
        goodScore: '#2F7CE9',
        amazingScore: '#F2C203',
      },
    },
  },
  plugins: [],
};
