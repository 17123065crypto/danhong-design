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
        ink: "#111111",
        paper: "#f7f4ee",
        bone: "#ebe6dc",
        graphite: "#4d4a45",
        signal: "#b7c6a5",
        clay: "#ad6f54",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 80px rgba(17, 17, 17, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
