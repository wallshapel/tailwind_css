/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: { // Aquí podemos agregar colores, fuentes etc...
      colors: { // Aquí podemos inventar colores
        danger: '#FF5722',
        primary: '#2196F3',
        warning: '#FFEB3B',
        success: '#7CB342'
      },
      fontFamily: {
        rale: ['Raleway'] // El nombre `Raleway` lo obtenemos de google fonts en el apartaddo `CSS rules to specify families`
      }
    }
  },
  plugins: []
}

