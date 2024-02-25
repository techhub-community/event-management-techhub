/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'blue': '#1fb6ff',
      },
      fontFamily:{
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}

