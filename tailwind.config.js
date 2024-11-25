/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      inter: "Inter, sans-serif",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: ["flowbite/plugin"],
};
