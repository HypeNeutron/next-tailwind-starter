/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", //class dark indicated child dark:
  important: true, // override other components
  theme: {
    extend: {
      colors: {
        primary: "hsl(222, 47%, 11%)",
      },
    },
  },
  corePlugins: {},
  plugins: [],
};
