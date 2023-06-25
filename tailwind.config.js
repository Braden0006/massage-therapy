/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'light-green': '#DAE8D5',
        'button': '#A41D20'
      },
      height: {
        '50': '50vh',
        '40': '40vh',
      },
      width: {
        '50rem': '50rem',
        '40vw': '40vw',
        '35rem': '35rem',
      },
      borderRadius: {
        '2': '2rem',
      }
    },
  },
  plugins: [],
}

