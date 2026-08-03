import { motion, useScroll, useSpring } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  const { t } = useTranslation();

  return (
    <>
      {/* Moving Warning Marquee */}
      <div className="fixed top-0 left-0 right-0 z-[80] overflow-hidden bg-black text-white border-b border-white/10">
        <motion.div
          className="flex whitespace-nowrap py-2 text-[11px] sm:text-xs font-medium tracking-wide"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span className="mx-8">
            ⚠ {t("warning.nicotine")}
          </span>

          <span className="mx-8">
            ⚠ {t("warning.nicotine")}
          </span>

          <span className="mx-8">
            ⚠ {t("warning.nicotine")}
          </span>

          <span className="mx-8">
            ⚠ {t("warning.nicotine")}
          </span>
          <span className="mx-8">
            ⚠ {t("warning.nicotine")}
          </span>
          <span className="mx-8">
            ⚠ {t("warning.nicotine")}
          </span>
        </motion.div>
      </div>

      {/* Scroll Progress */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-[30px] left-0 right-0 h-[2px] bg-ice origin-left z-[70] shadow-glowSm"
      />
    </>
  );
}