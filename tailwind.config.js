/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7fa',
          100: '#d2eef5',
          200: '#a5dce9',
          300: '#6cc2d4',
          400: '#38a1b8',
          500: '#1f839b',
          600: '#1a6a82',
          700: '#18566a',
          800: '#194758',
          900: '#1a3c4b',
        },
        accent: {
          50: '#fdf8eb',
          100: '#f9edd0',
          200: '#f3d89e',
          300: '#ecc06a',
          400: '#e5a832',
          500: '#d4952b',
          600: '#b87521',
          700: '#96561e',
          800: '#7b451f',
          900: '#67391e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}