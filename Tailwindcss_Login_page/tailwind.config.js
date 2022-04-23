module.exports = {
  content: ["./src/**/*.{html,js,png}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'sky':'#0284c7'
    },
      container:{
        center:true,
        padding:'2rem'
      },

    extend:{

    },

  },
  plugins: [
    require('@tailwindcss/forms')({
          strategy: 'base', // only generate global styles
          strategy: 'class', // only generate classes
    }),
    ],
}
