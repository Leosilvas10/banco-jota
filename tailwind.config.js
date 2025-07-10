
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bj-blue-dark': '#21253D',
        'bj-blue': '#364AA5',
        'bj-blue-light': '#6C74DB',
        'bj-black': '#19191B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
