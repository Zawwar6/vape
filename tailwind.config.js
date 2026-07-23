/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#050505",
        surface: "#101010",
        surface2: "#161616",
        ice: "#6DDCFF",
        iceDeep: "#3FB6E0",
        fog: "#BDBDBD",
      },
      fontFamily: {
        heading: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(109, 220, 255, 0.35)",
        glowLg: "0 0 90px rgba(109, 220, 255, 0.25)",
        glowSm: "0 0 18px rgba(109, 220, 255, 0.45)",
      },
      backgroundImage: {
        "radial-fade": "radial-gradient(circle at 50% 0%, rgba(109,220,255,0.12), transparent 60%)",
        "grid-lines": "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-22px) rotate(1.5deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: 0.55, filter: "blur(60px)" },
          "50%": { opacity: 0.9, filter: "blur(80px)" },
        },
        drift: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-4%,-6%) scale(1.08)" },
          "100%": { transform: "translate(0,0) scale(1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 26s linear infinite",
        pulseGlow: "pulseGlow 5s ease-in-out infinite",
        drift: "drift 18s ease-in-out infinite",
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};
