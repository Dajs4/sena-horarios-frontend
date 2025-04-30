/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'sena-green': '#39A900',  // Color principal del SENA
        'sena-dark': '#00324D',   // Color secundario del SENA
      },
    },
  },
  plugins: [],
};
