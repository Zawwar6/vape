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
        className="
        mx-auto block
        h-[380px] md:h-[550px]
        w-[96%]
        rounded-2xl
        border border-white/20
        object-cover object-top
      "
      >
        <source src="/video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}