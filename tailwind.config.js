/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,

    },
    colors: {
      transparent: 'transparent',

      "primary": {
        'pink': "#E87BF8",
        'purple': '#8456EC',
        'blue': '#501FC1',
        'darkblue': '#240D57'
      },
      secondary: {
        purple: {
          light: '#F6F2FF',
          medium: '#EDE5FF',
          dark: '#CCB6FF'
        }
      },
      alert: {
        red: {
          light: '#FFD7E0',
          dark: '#E61445',
        },
        green: {
          light: '#D3FFE2',
          dark: '#00805E'
        }
      },
      gray: {
        100: '#FBFAFF',
        200: '#F2F2F2',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#828282',
        600: '#4F4F4F'
      },
    },
    extend: {},
  },
  plugins: [],
}