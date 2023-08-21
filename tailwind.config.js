/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'strong-cyan': 'hsl(172, 67%, 45%)',
        'strong-cyan-hover': 'hsl(172, 67%, 75%)',
        'very-dark-cyan': 'hsl(183, 100%, 15%)',
        'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
        'grayish-cyan': 'hsl(184, 14%, 56%)',
        'light-grayish-cyan': 'hsl(185, 41%, 84%)',
        'very-lightgrayish-cyan': 'hsl(189, 41%, 97%)',
        'White': 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        'space-mono': ["Space Mono"]
      },
      width: {
        'mobile': '23.438rem',
        'logo': '5.541rem',
        'desktop': '57.5rem'
      },
      height: {
        'logo': '3.321rem'
      },
      backgroundImage: {
        'logo': "url('/src/images/logo.svg')"
      }
    },
  },
  plugins: [],
}
