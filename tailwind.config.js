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
          papel: "#F4EFE6",
          lino: "#E8DEC8",
          cuero: "#23170F",
          cubierta: "#160E09",
          oliva: "#1F3D2B",
          olivaDark: "#082717",
          sepia: "#2C221E",
          carbon: "#5A4638",
          dorado: "#B89758",
          doradoLight: "#C5A059",
          pergaminoCard: "#FFF8F1",
          pergaminoBorder: "#DFD3BF",
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        book: ['"EB Garamond"', 'Georgia', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
      },
      boxShadow: {
        'book': '0 10px 30px -5px rgba(35, 23, 15, 0.25), 0 0 0 1px rgba(184, 151, 88, 0.2)',
        'plate': 'inset 0 0 0 1px rgba(184, 151, 88, 0.3), 0 4px 16px rgba(44, 34, 30, 0.08)',
        'seal': '0 4px 14px rgba(31, 61, 43, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
      }
    },
  },
  plugins: [],
}
