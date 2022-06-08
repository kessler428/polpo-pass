module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        banner: '#1e0a3c',
        icons: '#6f7287',

        titleTextColor: '#1E0A3C',

        bgWhite: '#FFFFFF',
        bgPrimary: '#02141D',
        bgNavBar: '#242526',
        bgViolet: '#C129F9',
        bgVioletHover: '#9a18c9',
        bgGray: '#837289',

        bgBluebtn : '#0f27ab',
        bgBlueIconbtn : '#0e2399',
        bgGreenDarkbtn: '#044f60',
        bgGreenDarkIconbtn: '#034352',
        bgBluebtn2 : '#3659E3',
        bgBlueIconbtn2 : '#2143cc',
        bgVioletDarkbtn: '#324B8C',
        bgVioletDarIconkbtn: '#233563',
        bgGreenbtn: '#0a6e3a',
        bgGreenIconbtn: '#085c30',
      },
      backgroundImage: {
        "home-banner": "url('./images/BANNER.png')",
        "bg-payment": "url('./images/BG-Payment.png')",
      },
    },
  },
  plugins: [],
}