import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function WhyChooseUs() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["-8%", "8%"]
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-black"
    >
      {/* Parallax Video */}
      <motion.div
        style={{ y }}
        className="absolute -inset-[8%]"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          <source
            src="/video.mp4"
            type="video/mp4"
          />

          Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
}