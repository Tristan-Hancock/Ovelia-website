/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        navbar_text:"#324083",
        hero:"#101631",
        button_white:"#FFFAFF",
        light_periwinkle:"#BBBFFE"
      },
      fontFamily: {
        dmSans: ['DM Sans', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        rubiks: ['Rubiks', 'sans-serif']
      },

      fontSize: {
        '10xl': '8rem',
        '11xl': '10rem',
        '12xl': '12rem',
      },

      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, rgba(187,191,254,1) 0%, rgba(255,250,255,1) 50%)',
        'radial-gradient': 'radial-gradient(circle, rgba(187,191,254,1) 0%, rgba(255,250,255,1) 50%);'
      }
    },
  },
  plugins: [],
}

