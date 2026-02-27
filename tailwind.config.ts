import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "var(--brand-blue-primary)",
          dark: "var(--brand-blue-dark)",
          light: "var(--brand-blue-light)",
          accent: "var(--brand-yellow-primary)",
          bright: "var(--brand-yellow-bright)",
          black: "var(--brand-black)",
          white: "var(--brand-white)",
          gray: "var(--brand-gray-light)",
          border: "var(--border-color)",
        },
      },
      borderRadius: {
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
      transitionTimingFunction: {
        pop: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },
  plugins: [],
};

export default config;
