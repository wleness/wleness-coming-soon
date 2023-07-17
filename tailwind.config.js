/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1720px',
    },
    extend: {
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
}
}