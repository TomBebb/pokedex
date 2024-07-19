import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /bg-(primary|secondary|error)(-content)?(-(100|200|300))?/,
    },
  ],
  theme: {
    extend: {
      colors: {
        bg: "#041B15",
        fg: "#4CE0D2",
        primary: "#84CAE7",
        "primary-content": "#000",
        secondary: "#22aaa1",
        error: "#00ff00",
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
export default config
