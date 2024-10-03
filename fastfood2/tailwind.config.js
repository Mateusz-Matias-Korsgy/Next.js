/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundSize:{
      '175%': '175%',
    },
    extend: {
      colors: {
        'bg-gray': 'rgba(222, 223, 225, 1)',
        'text-gray': 'rgba(120, 120, 120, 1)',
        'l-green': 'rgba(26, 206, 10, 1)',
        'drop-shadow': 'rgba(58, 41, 106, 0.2)',
        'text-r': 'rgba(234, 67, 53, 1)', 
        'text-g': 'rgba(82, 90, 100, 1)',
        'hover': 'rgba(241, 244, 250, 1)',
        'text-o': '#FF6B00',
        'weak-green': 'rbga(26, 206, 10, 0.7)',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
