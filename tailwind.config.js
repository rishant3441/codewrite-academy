/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgrounImage: {
        'grid': "url('/public/hero-pattern.svg')"
      },
      animation: {
        typingHWW: "typingHWW 2s steps(32), blink 0.4s infinite",
      },
      keyframes: {
        typingHWW: {
          from: { width: "0" },
          to: { width: "32ch" }
        },
        blink: {
          from: { "border-right-color": "transparent" },
          to: { "border-right-color": "black" },
        },
      },
      colors: {
        themeRed: '#ff8282',
        themeBlue: '#a5c0ff',
        themeYellow: '#fff48f'
      }
    },
  },
  plugins: [require('tailwindcss-hero-patterns')],
  important: true,
}

