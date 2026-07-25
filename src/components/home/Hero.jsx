import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import GlowButton from "../ui/GlowButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-bg pt-24">
      {/* animated smoke / glow background */}
      <div className="absolute inset-0 bg-grid-lines bg-[size:48px_48px] opacity-40" />
      <div className="absolute left-1/2 top-[-10%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-ice/20 blur-[120px] animate-pulseGlow" />
      <div className="absolute right-[8%] top-[30%] h-[300px] w-[300px] rounded-full bg-ice/10 blur-[100px] animate-drift" />
      <div className="absolute left-[5%] bottom-[10%] h-[260px] w-[260px] rounded-full bg-white/5 blur-[100px] animate-drift" style={{ animationDelay: "3s" }} />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-10">
        <div>
          
          {/* <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow mb-6 flex items-center gap-3"
          >
            <span className="w-8 h-px bg-ice/60" /> Reserve Collection
          </motion.div> */}

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            Experience the <span className="text-gradient">Future</span> of Premium Vaping
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 max-w-md text-base leading-relaxed text-fog"
          >
            Precision-engineered devices and small-batch blends, designed in-house and finished by hand. This is vaping treated like an instrument, not a commodity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <NavLink to="/products">
              <GlowButton variant="solid">
                Shop Now <HiArrowRight />
              </GlowButton>
            </NavLink>
            <NavLink to="/products">
              <GlowButton variant="outline">Explore Collection</GlowButton>
            </NavLink>
          </motion.div>
        </div>

        <div className="relative flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 rounded-full bg-ice/25 blur-[90px]" />
            <motion.img
              src="https://images.unsplash.com/photo-1594177914682-d408d96e458b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Halo X1 premium vape device"
              className="w-[280px] rounded-[2rem] object-cover shadow-glowLg sm:w-[340px] lg:w-[400px] animate-float"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="h-9 w-5 rounded-full border border-white/25 p-1"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-ice" />
        </motion.div>
      </div>
    </section>
  );
}
