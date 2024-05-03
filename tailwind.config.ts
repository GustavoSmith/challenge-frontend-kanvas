import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "kanvas-blue": "#0589A6",
      },
      fontFamily: {
        sans: ["var(--font-Avenir)"],
        serif: ["var(--font-stix)"],
      },
      backgroundImage: {
        pool: "url('/images/pool.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
