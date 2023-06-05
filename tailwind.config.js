/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7931E",
        black: "#111111",
        white: "#FFFFFF",
        gray: "#4D4D4D"
      }
    },
  },
  plugins: [],
}
