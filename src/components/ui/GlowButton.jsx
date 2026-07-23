import { motion } from "framer-motion";

export default function GlowButton({ children, variant = "solid", className = "", onClick, type = "button" }) {
  const base =
    "relative inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-heading text-sm tracking-wide transition-all duration-300 overflow-hidden";

  const styles = {
    solid: "bg-ice text-bg hover:shadow-glow",
    outline: "border border-white/20 text-white hover:border-ice/70 hover:text-ice",
    ghost: "text-fog hover:text-white",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
