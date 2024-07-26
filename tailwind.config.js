/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        shadowButton:
          '0px 1px 2px 0px rgba(0, 0, 0, 0.30), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
      },
      fontFamily: {
        sans: 'Inter',
        montaga: 'Montaga',
        playfair: 'Playfair Display',
      },
      colors: {
        black: '#1E1E1E',
        'mauve-primary': '#1A0010',
        'mauve-secondary': '#AA1563',
        'mint-500': '#FDC704',
      },
      backgroundImage: {
        'bg-sm': "url('/bg-sm.png')",
        'bg-large': "url('/bg-large.png')",
        'bg-xl': "url('/bg-xl.png')",
      },
    },
  },
  plugins: [],
}
