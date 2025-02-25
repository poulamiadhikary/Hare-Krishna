/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "rotate": "rotate 35s linear infinite"
      }, 
      fontFamily: {
        'Montserrat' : 'Montserrat',
        "Junge" :  "Junge"
      },
      screens: {
        'phone': '375px'
      },
      width: {
        '5%':'5%',
        '7%':'7%',
        '10%':'10%',
        '15%':'15%',
        '20%':'20%',
        '25%':'25%',
        '30%':'30%',
        '35%':'35%',
        '40%':'40%',
        '50%':'50%',
        '60%':'60%',
        '70%':'70%',
        '75%':'75%',
        '80%':'80%',
        '75%':'75%',
        '90%':'90%',
        '100%':'100%',
      },
      height: {
        '10%':'10%',
        '15%':'15%',
        '20%':'20%',
        '25%':'25%',
        '30%':'30%',
        '35%':'35%',
        '40%':'40%',
        '45%':'45%',
        '50%':'50%',
        '60%':'60%',
        '70%':'70%',
        '75%':'75%',
        '80%':'80%',
        '75%':'75%',
        '90%':'90%',
        '100%':'100%',
        '100': '415px',
        '115': '450px',
        '120': '500px',
        '125': '550px',
        '130': '600px',
        '135': '650px',
        '140': '700px',
        '145': '750px',
        '150': '800px',
        '155': '850px',
        '160': '900px',
        '165': '950px',
        '170': '1000px',
      },
      fontSize: {
        's': '10px',
        'xs': '7px',
        'xxs': '5px',
        'xxxs': '4px'
      },
      keyframes: {
        "rotate": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        }
      }
    },
  },
  plugins: [],
}

