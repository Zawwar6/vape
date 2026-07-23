import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowUp } from "react-icons/hi2";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-7 right-7 z-50 flex h-12 w-12 items-center justify-center rounded-full glass-strong text-ice hover:shadow-glow transition-shadow"
        >
          <HiArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
