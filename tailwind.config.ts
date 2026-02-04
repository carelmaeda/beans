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
        bean: {
          blue: "var(--bean-blue-primary)",
          dark: "var(--bean-blue-dark)",
          light: "var(--bean-blue-light)",
          accent: "var(--bean-yellow-primary)",
          bright: "var(--bean-yellow-bright)",
          black: "var(--bean-black)",
          white: "var(--bean-white)",
          gray: "var(--bean-gray-light)",
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
