/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      colors: {
        primary: {
          DEFAULT: '#e8674c',
          dark: '#d8482e',
          light: '#ef7a52',
        },
        neutral: {
          50: '#f6f3f1',
          100: '#f4f0ed',
          200: '#ece6e2',
          300: '#ddd3cc',
          400: '#c4bbb4',
          500: '#b3aaa3',
          600: '#9a918b',
          700: '#57504b',
          800: '#1f1b18',
          900: '#1f1b2e',
        },
        accent: {
          green: '#1f9d6b',
          'green-light': '#34c98a',
          yellow: '#c98a17',
          'yellow-light': '#e0972a',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 14px 34px -22px rgba(120,40,20,.5)',
        'card-sm': '0 8px 20px -18px rgba(120,40,20,.5)',
        'float': '0 22px 40px -18px rgba(216,72,46,.6)',
      },
    },
  },
  plugins: [],
}
