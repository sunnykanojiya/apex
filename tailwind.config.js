/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  // include pages and src so Tailwind scans Next pages and your components
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // This sets Poppins as the primary font for your whole app
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        electric: '#3B82F6',
        amoled: '#000000',
        navy: '#253b8d', // Your brand blue from previous sections
      },
      boxShadow: {
        glow: '0 0 50px rgba(59, 130, 246, 0.25)',
      },
    },
  },
  plugins: [],
}