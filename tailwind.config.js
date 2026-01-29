/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
safelist: [
  // form badges
  "bg-green-600",
  "bg-red-600",
  "bg-black",

  // button styles
  "bg-red-700",
  "bg-gray-200",
  "bg-gray-300",
  "hover:bg-red-700",
  "hover:bg-gray-300",

  "text-white",
  "text-black",
],
  theme: {
    extend: {},
  },
  plugins: [],
}
