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
        '35rem': '35rem',
      },
      borderRadius: {
        '2': '2rem',
      },
      lineHeight: {
        '6rem': '6rem',
      },
      backgroundImage: {
        'CTA-background': "url('./Images/Group 1.png')",
      }
    },
  },
  plugins: [],
}

