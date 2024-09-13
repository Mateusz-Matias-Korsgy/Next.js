/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '24': '24px',
      },
      colors: {
        'custom-green': 'rgba(26, 206, 10, 1)',
        'light-green': 'rgba(26, 206, 10, 0.19)',
        'border-gray': 'rgba(222, 222, 222, 1)',
        'text-gray' : 'rgba(162, 157, 157, 1)',
        'sidebar' : 'rgba(92, 92, 92, 1)'
      },
      dropShadow: {
        'green': '0 19px 40px rgba(26, 206, 10, 0.17)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
}