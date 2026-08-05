import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const slides = [
  { id: 1, image: "/slider1.png" },
  { id: 2, image: "/slider2.png" },
  { id: 3, image: "/slider3.png" },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({
      opacity: 0,
      scale: 1.04,
    }),
    center: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-[#1a0a12]">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={slides[current].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Soft pink blur fill (matches your banner) */}
          <div
            className="absolute inset-0 scale-125 blur-3xl opacity-70"
            style={{
              backgroundImage: `url(${slides[current].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Main banner – never cropped */}
          <img
            src={slides[current].image}
            alt=""
            className="relative z-10 max-h-full max-w-full object-contain"
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/70 md:left-5"
      >
        <HiChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/50 p-2.5 text-white backdrop-blur-sm transition hover:bg-black/70 md:right-5"
      >
        <HiChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`h-1 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-white" : "w-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}