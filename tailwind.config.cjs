/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    //Define Media queries
    /*screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },*/

    //Define Custom Fonts
    fontFamily: {
      sans: ['Hanken Grotesk', 'sans-serif'],
    },
    extend: {
      //Extend Tailwind Color Pallet
      colors: {
        //Primary
        'light-red': 'hsl(0, 100%, 67%)',
        'orangy-yellow': 'hsl(39, 100%, 56%)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'cobalt-blue': 'hsl(234, 85%, 45%)',
        //Gradients
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 0)',
        //Neutral
        white: 'hsl(0, 0%, 100%)',
        'pale-blue': 'hsl(221, 100%, 96%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
      },
      //Create Custom Animations
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        //You can call the keyframes
        bounce: 'bounce 2s ease-in-out infinite',
      },

      //Create custom Key-frames
      keyframes: {
        bounce: {
          //You can use css .style in js
          '0%, 100%': {
            transform: 'scale(1.1)',
          },
          '50%': {
            transform: 'scale(.9)',
          },
        },
      },
    },
  },
  plugins: [],
}
