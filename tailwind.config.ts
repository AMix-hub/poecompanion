import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "poe-gold": "#c8a55a",
        "poe-gold-light": "#e4c880",
        "poe-dark": "#0d0c0b",
        "poe-card": "#1a1714",
        "poe-border": "#3d3020",
      },
    },
  },
  plugins: [],
};
export default config;
