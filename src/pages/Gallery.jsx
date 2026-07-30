import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiXMark, HiMagnifyingGlassPlus } from "react-icons/hi2";
import { galleryImages } from "../data/siteData";
import Reveal from "../components/ui/Reveal";
import Eyebrow from "../components/ui/Eyebrow";

const filters = ["All", "6 in 1", "4 in 1", "Jagger Pro"];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const images = useMemo(
    () => (active === "All" ? galleryImages : galleryImages.filter((g) => g.category === active)),
    [active]
  );

  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-bg pt-32 pb-16">
        <div className="absolute left-1/2 top-0 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-ice/15 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <Eyebrow>
              <span className="mx-auto flex w-fit items-center gap-3">Visual Archive</span>
            </Eyebrow>
            <h1 className="font-heading text-5xl text-white md:text-6xl">Gallery</h1>
            <p className="mx-auto mt-5 max-w-lg text-fog">Product photography, lifestyle shots, and detail close-ups.</p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-bg px-6 pb-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
                  active === f
                    ? "border-ice bg-ice text-bg shadow-glowSm"
                    : "border-white/15 text-fog hover:border-ice/50 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </Reveal>

          <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
            <AnimatePresence>
              {images.map((img, i) => (
                <motion.button
                  key={img.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
                  onClick={() => setLightbox(img)}
                  className="group relative block w-full overflow-hidden rounded-2xl break-inside-avoid"
                >
                  <img
                    src={img.src}
                    alt={img.category}
                    className="w-full object-contain transition-transform duration-700 group-hover:scale-110"
                    style={{ aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "1/1" : "4/5" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-bg/0 opacity-0 transition-all duration-300 group-hover:bg-bg/40 group-hover:opacity-100">
                    <HiMagnifyingGlassPlus className="text-2xl text-ice" />
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-bg/90 backdrop-blur-sm p-6"
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              className="absolute right-6 top-6 text-2xl text-white hover:text-ice"
            >
              <HiXMark />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              src={lightbox.src}
              alt={lightbox.category}
              className="max-h-[85vh] max-w-4xl rounded-2xl object-contain shadow-glowLg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
