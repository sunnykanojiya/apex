/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        // Light-first palette
        base: '#f2f2f2',
        primary: '#001633',
        accent: '#0ea5b7',
        accentBlue: '#3B82F6',
        muted: '#6b7280',
        amoled: '#000000',
      },
      boxShadow: {
        glow: '0 0 50px rgba(59, 130, 246, 0.12)',
      },
    },
  },
  plugins: [],
}