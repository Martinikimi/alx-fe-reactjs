/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        github: {
          dark: '#24292e',
          blue: '#0366d6',
          green: '#2ea44f',
          gray: '#586069',
          light: '#f6f8fa',
        }
      },
    },
  },
  plugins: [],
}
