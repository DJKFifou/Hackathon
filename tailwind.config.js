/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'black': "#090F1E",
        'grey': '#E9E8ED',
        'offWhite': '#FFFBEE',
        'green': '#08BC80',
        'blue': '#7482E8',
        'blueGrey': '#BEC4F4;',
        'lightBlue': '#E7ECFF',
        'orange': '#EE7163',
        'red': '#FA9E9F',
        'yellow': '#F9D523'
      },
      backgroundImage: {
        'image': "url('./src/assets/bg-image.svg')",
      },
      fontFamily: {
        title: ["BaiJamjuree", 'sans-serif'],
        body: ["Noka", 'sans-serif']
      },
      screens: {
        "4xs": "320px",
        "3xs": "380px",
        "2xs": "430px",
        "xs": "530px"
      },
      fontSize: {
        "2xs": ["0.625rem", "0.875rem"],
        "3.5xl": ["2rem", "2.5rem"],
        "4.5xl": ["2.5rem", "2.813rem"],
        "5.5xl": ["3.375rem", "3.375rem"],
        "6.5xl": ["4rem", "3.4rem"],
        "8.5xl": ["7rem", "7.313rem"]
      },
      maxWidth: {
        'screen': '100vw',
      }
    }
  },
  plugins: [],
}