import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ajusta conforme a estrutura do seu projeto
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['InterVariable', ..._fontFamily.sans],
      },
    },
  },
  plugins: [],
}
