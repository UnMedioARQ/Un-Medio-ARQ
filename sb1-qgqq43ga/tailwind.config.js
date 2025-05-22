/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['neutra-text', 'sans-serif'],
        serif: ['neutra-display', 'serif'],
      },
      colors: {
        primary: {
          50: '#f5f5f5',
          100: '#e5e5e5',
          200: '#d4d4d4',
          300: '#adadad',
          400: '#8c8c8c',
          500: '#6b6b6b',
          600: '#555555',
          700: '#3f3f3f',
          800: '#292929',
          900: '#1a1a1a',
          950: '#0d0d0d',
        },
        accent: {
          50: '#fcf8ee',
          100: '#f9f0dc',
          200: '#f3dcb8',
          300: '#ebc48e',
          400: '#e3a763',
          500: '#dd8e41',
          600: '#cc7434',
          700: '#a85b2d',
          800: '#86492a',
          900: '#6e3c25',
          950: '#3c1f12',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      height: {
        'screen-50': '50vh',
        'screen-75': '75vh',
        'screen-80': '80vh',
        'screen-90': '90vh',
      },
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
      },
      fontSize: {
        '10xl': '10rem',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
    },
  },
  plugins: [],
};