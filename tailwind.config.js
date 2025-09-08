const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
        splash: ['Splash', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': "#FBFBE6",
        'gray-black': '#1E1E1E',
        'red-orange': '#FF4B05',
        'light-purple' : "#F1CDE5",
      },
    },
  },
  plugins: [],
};
