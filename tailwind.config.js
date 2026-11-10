/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        brand: {
          green: '#65e0ac',
          blue: '#4cc9ff',
          dark: '#07110d',
          deep: '#040c08',
          text: '#eef5f0'
        }
      }
    }
  },
  plugins: []
}
