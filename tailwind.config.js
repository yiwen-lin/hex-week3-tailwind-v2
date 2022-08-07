/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors :{
        'main':{ 
          light: '#FBF2F2',
          DEFAULT:'#AA0601',
          dark:'#650300',
        },
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
