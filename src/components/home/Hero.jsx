import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const slides = [
  { id: 1, image: "/slider1.jpeg" },
  { id: 2, image: "/slider2.jpeg" },
  { id: 3, image: "/slider3.jpeg" },
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

  // Auto Play
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  return (
    <section className="relative h-[100vh]  w-full overflow-hidden bg-black">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={slides[current].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[current].image}
            alt={`Slide ${current + 1}`}
            className="w-full h-full object-cover object-center"
            draggable={false}
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/35" />
        </motion.div>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white backdrop-blur-md transition hover:bg-black/60 md:left-8"
      >
        <HiChevronLeft className="h-7 w-7" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white backdrop-blur-md transition hover:bg-black/60 md:right-8"
      >
        <HiChevronRight className="h-7 w-7" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`transition-all duration-300 rounded-full ${
              current === i
                ? "w-10 h-2 bg-white"
                : "w-2 h-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
}