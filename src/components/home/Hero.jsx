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
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "60%" : "-60%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: [0.32, 0.72, 0, 1] },
    },
    exit: (dir) => ({
      x: dir > 0 ? "-60%" : "60%",
      opacity: 0,
      transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] },
    }),
  };

  return (
    <section className="relative w-full overflow-hidden bg-black aspect-[16/9] md:aspect-video">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slides[current].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Soft blurred fill (covers letterbox areas) */}
          <div
            className="absolute inset-0 scale-110 blur-3xl opacity-60"
            style={{
              backgroundImage: `url(${slides[current].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Very light dark overlay so image stays rich */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Main image – full width, no crop */}
          <img
          src={slides[current].image}
          alt=""
          className="absolute inset-0 h-full opacity-[0.7] w-full object-cover"
          draggable={false}
        />
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-3 text-white backdrop-blur-md transition hover:bg-white/10 md:left-6"
      >
        <HiChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-black/40 p-3 text-white backdrop-blur-md transition hover:bg-white/10 md:right-6"
      >
        <HiChevronRight className="h-5 w-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > current ? 1 : -1);
              setCurrent(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current
                ? "w-7 bg-white"
                : "w-1.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}