/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EBF4',
          100: '#C2D1E5',
          200: '#9BB3D5',
          300: '#7595C5',
          400: '#5A7FB9',
          500: '#416CAE',
          600: '#34578A',
          700: '#284267',
          800: '#1B2C44',
          900: '#0F2C59',
        },
        secondary: {
          50: '#FCE9EA',
          100: '#F8C8CA',
          200: '#F3A3A7',
          300: '#EE7E83',
          400: '#EA6369',
          500: '#E6494F',
          600: '#CE3D43',
          700: '#B53137',
          800: '#9B262A',
          900: '#9B2226',
        },
        accent: {
          50: '#FEF9E7',
          100: '#FDF0C4',
          200: '#FCE69D',
          300: '#FADC75',
          400: '#F9D558',
          500: '#F7CE3A',
          600: '#F5C242',
          700: '#D3A431',
          800: '#B18929',
          900: '#8F6D20',
        },
        neutral: {
          50: '#F9FAFB',
          900: '#1F2937',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};