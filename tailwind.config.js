/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        demo:"#fe7678",

      },
      keyframes:{},
      animation:{},
    },
  },
  plugins: [],
}