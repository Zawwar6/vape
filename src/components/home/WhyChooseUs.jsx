import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="relative mt-32 w-full overflow-hidden bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="block w-full h-auto border border-white/20 rounded-2xl"
      >
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}