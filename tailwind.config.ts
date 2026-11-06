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
        background: "#050505",
        surface: "#0A0A0A",
        "surface-2": "#0F0F0F",
        "surface-3": "#141414",
        foreground: "#FFFFFF",
        "fg-secondary": "#CCCCCC",
        "fg-muted": "#666666",
        "fg-dim": "#333333",
        card: "#0A0A0A",
        border: "rgba(255,255,255,0.07)",
        "border-hover": "rgba(255,255,255,0.12)",
        accent: "#00E676",
        "accent-dark": "#00C853",
        "accent-dim": "rgba(0,230,118,0.08)",
        "accent-glow": "rgba(0,230,118,0.15)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        heading: ["JetBrains Mono", "monospace"],
        body: ["IBM Plex Sans", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(4.5rem,12vw,11rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(3rem,8vw,7rem)", { lineHeight: "0.95", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem,5vw,4rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
      },
      boxShadow: {
        "accent-sm": "0 0 20px rgba(0,230,118,0.15)",
        "accent-md": "0 0 40px rgba(0,230,118,0.12)",
        "accent-lg": "0 0 80px rgba(0,230,118,0.08)",
        "card": "0 1px 0 0 rgba(255,255,255,0.04), inset 0 1px 0 0 rgba(255,255,255,0.02)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "float": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
