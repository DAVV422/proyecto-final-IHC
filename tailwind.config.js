/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#13444F',
        'bg-primary': '#EEEEEE'
      },
      height: {
        'h5': '5%',
        'h95': '95%',
      },
      width: {
        'w45': '45%',
        'w55': '55%',
      }

    },
  },
  plugins: [],
}
