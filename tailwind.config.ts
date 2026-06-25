import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A8D5E2",     // Pastel Blue
        accent: "#F2B5C4",      // Pastel Pink
        background: "#FDF6F0",  // Warm Beige
        bgBlue: "#E8F4F8",
        bgPink: "#FDE8EE",
        bgYellow: "#FEF6DC",
        bgGreen: "#E8F5EE",
        bgPurple: "#EDE8F5",
        bgCoral: "#FDE8E4",
        card: "#FFFFFF",        // Soft White
        highlight: "#E8C97A",   // Gold Accent
        charcoal: "#2D2D2D",    // Deep Charcoal
        mutedGrey: "#7A7A7A",   // Muted Grey
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "22px",
        "2xl": "28px",
        "3xl": "36px",
        "4xl": "48px",
        "5xl": "64px",
      },
    },
  },
  plugins: [],
};

export default config;
