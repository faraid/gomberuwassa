import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ruwasa: {
          blue: "#005fbf",
          navy: "#0b3c78",
          deep: "#062e62",
          green: "#34a947",
          soft: "#eaf5ff",
        },
      },
      boxShadow: {
        card: "0 14px 28px rgba(14, 66, 118, 0.11)",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
