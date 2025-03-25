/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          DEFAULT: '#DC2626', // red
          light: '#EF4444',
          dark: '#B91C1C',
        },
        'secondary': {
          DEFAULT: '#15803D', // green
          light: '#16A34A',
          dark: '#166534',
        },
        'accent': {
          DEFAULT: '#BC8A5F', // light brown
          light: '#D4B08C',
          dark: '#A67548',
        },
      },
    },
  },
  plugins: [],
}