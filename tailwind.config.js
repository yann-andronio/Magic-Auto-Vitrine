/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

        'fond-degradedark': 'linear-gradient(to bottom, #0D47A1 0%, #1565C0 50%, #1E88E5 100%)',
        'fond-degradelight': 'linear-gradient(to bottom, #FFF9C4 0%, #FFF59D 40%, #FFEE58 80%)',
        'fondprincipal-degradedark': 'linear-gradient(to bottom, #1E88E5 0%, #1565C0 50%, #0D47A1 100%)',
        'fondprincipal-degradelight': 'linear-gradient(to bottom, #FFEE58 0%, #FFEB3B 50%, #FBC02D 100%)'
       





      },
    },
  },
  plugins: [],
}
