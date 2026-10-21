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
          pergamino: "#EFE6D8",
          lino: "#E5D9C5",
          cuero: "#23170F",
          sepia: "#362419",
          oliva: "#1F3D2B",
          dorado: "#B89758",
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
        'book': '0 10px 30px -5px rgba(35, 23, 15, 0.25), 0 0 0 1px rgba(184, 151, 88, 0.25)',
        'plate': 'inset 0 0 0 1px rgba(184, 151, 88, 0.35), 0 4px 16px rgba(35, 23, 15, 0.08)',
      }
    },
  },
  plugins: [],
}
