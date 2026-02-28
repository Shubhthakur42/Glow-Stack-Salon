module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#111827',
        accent: {
          DEFAULT: '#D4AF37',
          600: '#D4AF37'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        display: ['Playfair Display', 'serif']
      }
    }
  },
  plugins: []
};