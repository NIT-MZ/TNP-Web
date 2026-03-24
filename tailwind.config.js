/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef3fb',
          100: '#d5e1f5',
          200: '#afc7ec',
          300: '#82a8e0',
          400: '#5a89d4',
          500: '#3e6db5',
          600: '#325a97',
          700: '#264b83',
          800: '#1e3a6e',
          900: '#152a52',
        },
        accent: {
          50: '#eaeff8',
          100: '#cdd8ed',
          200: '#a8bde0',
          300: '#7d9ed0',
          400: '#5a84c2',
          500: '#264b83',
          600: '#1f3d6b',
          700: '#1a3359',
          800: '#142847',
          900: '#0e1d35',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Raleway', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.12)',
        'strong': '0 8px 30px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};


