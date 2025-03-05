/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f2dfce',
        secondary: '#fff1e5',
        lightBeige: '#FCEFE3',
        beige: '#EAD7C5',
        darkTeal: '#005F60',
        maroon: '#9E1F50',
        black: '#000000',
      },
      fontFamily: {
        serif: ['Crimson Text', 'serif'],
        sans: ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
