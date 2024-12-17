/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ibm: ["IBM Plex Sans", "sans-serif"],
      }
    },
  },
  plugins: [],
}