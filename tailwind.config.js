/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '420': '420px'
      },
      width: {
        '22': '22%',
        '6': '6%',
        '16': '16%',
      },
    },
  },
  plugins: [],
}
