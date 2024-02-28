/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{html,js,jsx}","./challanges/**/*.{js,jsx}","./pages/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        concert: ['Concert One']
      }
    },
  },
  plugins: [],
}

