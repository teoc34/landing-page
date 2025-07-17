export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
  extend: {
    keyframes: {
      float: {
        '0%, 100%': { transform: 'translateY(0px)' },
        '50%': { transform: 'translateY(-10px)' }
      },
      drift: {
        '0%, 100%': { transform: 'translateX(0px)' },
        '50%': { transform: 'translateX(8px)' }
      }
    },
    animation: {
      float: 'float 4s ease-in-out infinite',
      drift: 'drift 6s ease-in-out infinite'
    }
  }
},
  plugins: [],
}
