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
        amber: {
          light: "var(--amber-light)",
          medium: "var(--amber-medium)",
        },
        cyan: "var(--cyan)",
        magenta: "var(--magenta)",
      },
    },
  },
  plugins: [],
};
export default config;

