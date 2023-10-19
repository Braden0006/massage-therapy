/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'light-green': '#DAE8D5',
        'button': '#A41D20',
        'h2-green': '#35701F',
      },
      height: {
        '75': '75vh',
        '60vh': '60vh',
        '50': '50vh',
        '40': '40vh',
        '25vh': '25vh',
        '20': '20vh',
      },
      width: {
        '70vw': '70vw',
        '50rem': '50rem',
        '50vw': '50vw',
        '42rem': '42rem',
        '40rem': '40rem',
        '40vw': '40vw',
        '38rem': '38rem',
        '35rem': '35rem',
        '30rem': '30rem',
        '25rem': '25rem',
      },
      borderRadius: {
        '2': '2rem',
      },
      lineHeight: {
        '6rem': '6rem',
        '3rem': '3rem',
      },
      backgroundImage: {
        'CTA-background': "url('./Images/Group 1.png')",
      },
      fontSize: {
        '22px': '1.375rem',
        '42px': '2.625rem'
      }
    },
  },
  plugins: [],
}

