/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'striped-bg': 'url(../src/images/BlueWhiteStripesThin.webp)'
      }
    },
  },
  plugins: [],
}

