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
        bgGray: '#837289',
      },
      backgroundImage: {
        "home-banner": "url('./images/BANNER.png')",
        "bg-payment": "url('./images/BG-Payment.png')",
      },
    },
  },
  plugins: [],
}