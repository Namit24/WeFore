import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
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
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "blob-float": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(30px, -20px) rotate(10deg)" },
          "66%": { transform: "translate(-20px, 20px) rotate(-5deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
        "blob-float-reverse": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "33%": { transform: "translate(-30px, 20px) rotate(-10deg)" },
          "66%": { transform: "translate(20px, -20px) rotate(5deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-staggered": {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in-left": "slide-in-left 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        "slide-in-right": "slide-in-right 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
        float: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse-slow 3s ease-in-out infinite",
        "text-shimmer": "text-shimmer 3s linear infinite",
        "letter-spacing": "letter-spacing 5s ease-in-out infinite",
        "border-rotate": "border-rotate 3s linear infinite",
        glitch: "glitch 5s infinite",
        "blob-float": "blob-float 20s ease-in-out infinite",
        "blob-float-reverse": "blob-float-reverse 20s ease-in-out infinite",
        "bounce-slow": "bounce-slow 4s ease-in-out infinite",
        "float-staggered": "float-staggered 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
