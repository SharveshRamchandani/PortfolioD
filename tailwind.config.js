/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#050505',
          card: '#0a0a0a',
          accent: '#d97706', // Premium warm amber
          accentLight: '#fbbf24',
          accentMuted: '#451a03',
          border: '#1a1a1a',
          textMuted: '#a3a3a3',
          textDim: '#737373',
          // Premium Light Mode (Warm Alabaster/Cream)
          lightBg: '#faf8f5',
          lightCard: '#f4f1ea',
          lightBorder: '#e6e2da',
          lightTextMuted: '#57534e',
          lightTextDim: '#78716c',
        }
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
