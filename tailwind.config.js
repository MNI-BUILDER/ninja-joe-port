/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        comic: {
          yellow: "#FFD700",
          "yellow-light": "#FFED4E",
          "yellow-dark": "#B8860B",
          black: "#000000",
          white: "#FFFFFF",
          gray: "#4A4A4A",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "comic-pop": {
          "0%": { transform: "scale(1) rotate(0deg)", filter: "drop-shadow(0 0 0 rgba(255, 215, 0, 0))" },
          "50%": { transform: "scale(1.05) rotate(1deg)", filter: "drop-shadow(4px 4px 8px rgba(255, 215, 0, 0.3))" },
          "100%": { transform: "scale(1) rotate(0deg)", filter: "drop-shadow(0 0 0 rgba(255, 215, 0, 0))" },
        },
        "comic-bounce": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%": { transform: "translateY(-10px) scale(1.02)" },
        },
        "comic-shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-2px)" },
          "75%": { transform: "translateX(2px)" },
        },
        "comic-glow": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(255, 215, 0, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(255, 215, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "comic-pop": "comic-pop 2s ease-in-out infinite",
        "comic-bounce": "comic-bounce 3s ease-in-out infinite",
        "comic-shake": "comic-shake 0.5s ease-in-out infinite",
        "comic-glow": "comic-glow 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      fontFamily: {
        comic: ["Comic Sans MS", "cursive"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
