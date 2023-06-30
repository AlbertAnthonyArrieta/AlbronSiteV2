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
        primarydark: "#c47416",
        black: "#111111",
        ultrablack: "#000000",
        white: "#FFFFFF",
        gray: "#4D4D4D"
      }
    },
  },
  plugins: [],
}
