/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx}","./challanges/**/*.{js,jsx}","./pages/**/*.{js,jsx}"],
  "darkMode":"class",
  theme: {
    extend: {
      fontFamily:{
        concert: ['Concert One']
      }
    },
  },
  plugins: [],
}

