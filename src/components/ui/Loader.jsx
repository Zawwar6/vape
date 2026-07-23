import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="font-heading text-xl uppercase text-white"
          >
            RESERVE
          </motion.span>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 160 }}
            transition={{ duration: 1.3, ease: "easeInOut" }}
            className="mt-6 h-px bg-gradient-to-r from-transparent via-ice to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
