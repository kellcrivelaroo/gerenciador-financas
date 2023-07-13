/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#131d40',
        secondary: '#898e9f',
        neutral: '#f9faff',
        blue: {
          900: '#000220',
          700: '#202d5a',
          500: '#6582e8',
          400: '#508ee2',
          300: '#90bcf8',
          200: '#daefff',
        },
      },
    },
  },
  plugins: [],
}
