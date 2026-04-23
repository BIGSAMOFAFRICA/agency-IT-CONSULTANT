/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brown-primary': '#6B4423',
        'brown-dark': '#4A2C1A',
        'brown-light': '#8B5A2B',
        'mustard': '#D4A574',
        'mustard-dark': '#C19A6B',
        'cream': '#F5F1E8',
        'dark-gray': '#2C2C2C',
      },
      fontFamily: {
        'sans': ['Manrope', 'Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        'display': ['Fraunces', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
