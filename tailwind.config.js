/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cafe: {
          DEFAULT: '#b0916c',
          dark: '#8a6f4e',
          light: '#c9aa89',
        },
        beige: {
          DEFAULT: '#e4ded6',
          light: '#f0ece7',
          dark: '#cec6bc',
        },
        rosado: {
          DEFAULT: '#fad1ce',
          light: '#fde8e6',
          dark: '#f5b3af',
        },
        negro: '#1d1d1b',
      },
      fontFamily: {
        cocogoose: ['"Cocogoose"', 'Arial Black', 'sans-serif'],
        lato: ['"Lato"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
