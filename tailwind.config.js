/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      screens:{
        'lg':"1045px",
        'xl':"1145px",
        '2xl':"1145px",
      }
    },
    extend: {},
  },
  plugins: [],
}