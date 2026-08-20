import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Video andar ki taraf scale hogi
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1, 0.88]);

  // Perspective / inward movement
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [8, 0, -8]);

  return (
    <section
      ref={sectionRef}
      className="relative mt-32 w-full overflow-hidden bg-black py-20"
    >
      <div className="perspective-[1200px] w-full px-4 md:px-10">
        <motion.div
          style={{
            scale,
            rotateX,
          }}
          className="w-full overflow-hidden rounded-2xl border border-white/20"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="block h-auto w-full"
          >
            <source src="/video2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
}