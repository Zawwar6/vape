
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="relative w-full overflow-hidden bg-black pt-32">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="block w-full h-auto"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

