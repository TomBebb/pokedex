import shadesOf from "tailwind-shades"
import type { Config } from "tailwindcss"
function mapShades(name: string, color: string): Record<string, string> {
  const shades: Record<string, string> = shadesOf(color)

  const entries = Object.entries(shades)
    .map(([key, value]) => [`${name}-${key}`, value])
    .concat([[name, color]])
  const raw = Object.fromEntries(entries)
  console.info(raw)

  return raw
}
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      variants: ["focus", "hover", "dark"],
      pattern: /(bg|text)-(primary|secondary|error)(-content)?(-[0-9]+)?/,
    },
  ],
  theme: {
    extend: {
      colors: {
        bg: "#041B15",
        fg: "#4CE0D2",
        ...mapShades("primary", "#84CAE7"),
        ...mapShades("primary-content", "#000"),
        ...mapShades("secondary", "#22aaa1"),
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
