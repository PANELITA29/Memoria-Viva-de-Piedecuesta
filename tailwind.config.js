/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        patrimonio: {
          pergamino: "#F3EBDD",
          lino: "#E8DEC8",
          cuero: "#24160E",
          carbon: "#17100B",
          oliva: "#1F3D2B",
          sepia: "#3D2D24",
          dorado: "#B39352",
          doradoClaro: "#C5A059",
          blancoPapel: "#FAF6F0",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        book: ['"EB Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
      },
      boxShadow: {
        'book': '0 10px 30px -5px rgba(36, 22, 14, 0.25), 0 0 0 1px rgba(179, 147, 82, 0.25)',
        'plate': 'inset 0 0 0 1px rgba(179, 147, 82, 0.35), 0 4px 16px rgba(36, 22, 14, 0.08)',
      }
    },
  },
  plugins: [],
}
