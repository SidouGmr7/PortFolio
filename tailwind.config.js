module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#27c7b7',
        'secondary': '#68fff1'
      },
      textColor: {
        'primary': '#68fff1',
      },
      borderColor: {
        'custom-green': '#00FF00',
      },
    },
    
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
