/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorCustoms: "#c4cfde",
        bakgroundCustoms: "#212428"
      }
    },
  },
  plugins: [],
}

