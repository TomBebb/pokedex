/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*.vue", "./src/*/*.vue"],
  theme: {
    colors: {
      transparent: "transparent",
      "gray-800": "#454646",
      white: "white",
      current: "currentColor",
      primary: "#00f",
      "primary-content": "#fff",
      secondary: "#0f0",
      "secondary-content": "#000",
      error: "#f00",
      "error-content": "#fff",
      gray: "#c0c0c0",
    },
  },
  safelist: [
    {
      pattern:
        /(hover:)?(bg|text|border.*)-(primary|secondary|error)(-content)?(-(100|200|300))?/,
    },
  ],
  plugins: [],
}
