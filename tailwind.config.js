/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        spinaround: {
          '0%': { transform: 'translateZ(0) rotate(0)' },
          '15%, 35%': { transform: 'translateZ(0) rotate(90deg)' },
          '65%, 85%': { transform: 'translateZ(0) rotate(270deg)' },
          '100%': { transform: 'translateZ(0) rotate(360deg)' }
        },
        shimmerslide: {
          to: { transform: 'translate(calc(100cqw - 100%), 0)' }
        },
      },
      animation: {
        shimmerslide: 'shimmerslide var(--speed) ease-in-out infinite alternate',
        spinaround: 'spinaround calc(var(--speed) * 2) infinite linear',
      }
    }
  },
  plugins: []
};
