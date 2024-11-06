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
        buttonBlack: '#131A22',
      },
    },
  },
  plugins: [],
};
