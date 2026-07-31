import { motion } from "framer-motion";

export default function ProductCard({ product, onQuickView }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      onClick={() => onQuickView?.(product)}
    >
      {/* Card Shell */}
      <div className="relative flex h-[560px] items-center justify-center overflow-hidden rounded-[36px] border border-white/[0.07] bg-gradient-to-b from-white/[0.07] via-white/[0.03] to-transparent shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-500 group-hover:border-yellow-400/25 group-hover:shadow-[0_25px_60px_-15px_rgba(250,204,21,0.15)]">

        {/* Ambient Glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[110px] transition-all duration-700 group-hover:scale-125 group-hover:bg-yellow-400/20" />
        </div>

        {/* Soft top highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/[0.06] to-transparent" />

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.category}
          className="relative z-10 max-h-[440px] w-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.45)] transition-all duration-700 ease-out group-hover:-translate-y-4 group-hover:scale-[1.08]"
        />

        {/* Bottom fade for depth */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Product Name */}
      <div className="mt-6 text-center">
        <h3 className="font-heading text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-yellow-400">
          {product.category}
        </h3>
        
        {/* Optional subtle subtitle if you have flavor/name */}
        {product.name && (
          <p className="mt-1.5 text-sm text-white/50 transition-colors duration-300 group-hover:text-white/70">
            {product.name}
          </p>
        )}
      </div>
    </motion.div>
  );
}