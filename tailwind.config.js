/** @type {import('tailwindcss').Config} */
module.exports = {
  // ARAHKAN KE FILE HTML (PENTING!)
  content: ["./*.{html,js}"], 
  theme: {
    extend: {
      // Kita tambahkan warna custom agar sesuai desain finansial
      colors: {
        primary: '#1E40AF', // Biru tua profesional
        secondary: '#10B981', // Hijau (uang/pertumbuhan)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}