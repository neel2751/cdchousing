import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#c8a96e",
        accent: "#f5f0e8",
        dark: "#0d0d0d",
        light: "#fafafa",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      spacing: {
        "safe-top":    "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left":   "env(safe-area-inset-left)",
        "safe-right":  "env(safe-area-inset-right)",
      },
      minHeight: {
        "screen-safe": "calc(100dvh - env(safe-area-inset-top))",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "fade-up":    "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in":    "fadeIn 0.6s ease forwards",
        "slide-left":  "slideLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-right": "slideRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "scale-up":   "scaleUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "line-grow":  "lineGrow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "curtain":    "curtain 1.4s cubic-bezier(0.76, 0, 0.24, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLeft: {
          "0%":   { opacity: "0", transform: "translateX(80px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-80px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleUp: {
          "0%":   { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        lineGrow: {
          "0%":   { width: "0%" },
          "100%": { width: "100%" },
        },
        curtain: {
          "0%":   { transform: "scaleY(1)" },
          "100%": { transform: "scaleY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;