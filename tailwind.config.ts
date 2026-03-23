import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        accent: {
          DEFAULT: "#00d4aa",
          green: "#4ade80",
          amber: "#f59e0b",
          red: "#f87171",
          purple: "#a78bfa",
          blue: "#38bdf8",
        },
        dark: {
          DEFAULT: "#080d1a",
          2: "#0d1526",
          3: "#111c30",
          4: "#1a2640",
        },
        muted: "#8899bb",
        faint: "#4a5568",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease both",
        "fade-in": "fadeIn 0.6s ease both",
        "slide-left": "slideLeft 0.7s ease both",
        "slide-right": "slideRight 0.7s ease both",
        float: "float 4s ease-in-out infinite",
        "pulse-dot": "pulseDot 1.5s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "bar-grow": "barGrow 0.8s ease both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideLeft: {
          from: { opacity: "0", transform: "translateX(-32px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          from: { opacity: "0", transform: "translateX(32px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseDot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.8)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        barGrow: {
          from: { transform: "scaleY(0)" },
          to: { transform: "scaleY(1)" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(0, 212, 170, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 170, 0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "56px 56px",
      },
    },
  },
  plugins: [],
};

export default config;