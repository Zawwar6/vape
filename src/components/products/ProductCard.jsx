import { useState } from "react";
import { HiStar, HiOutlineHeart, HiHeart, HiOutlineEye, HiOutlineShoppingBag } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function ProductCard({ product, onQuickView }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="group relative overflow-hidden rounded-3xl glass p-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow"
    >
      <button
        onClick={() => setWishlisted((w) => !w)}
        aria-label="Toggle wishlist"
        className="absolute right-6 top-6 z-10 flex h-9 w-9 items-center justify-center rounded-full glass text-white transition-colors hover:text-ice"
      >
        {wishlisted ? <HiHeart className="text-ice" /> : <HiOutlineHeart />}
      </button>

      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={product.image}
          alt={`${product.name} - ${product.flavor}`}
          className="h-60 w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center gap-3 bg-bg/0 opacity-0 transition-all duration-300 group-hover:bg-bg/40 group-hover:opacity-100">
          <button
            onClick={() => onQuickView(product)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-bg hover:bg-ice transition-colors"
            aria-label="Quick view"
          >
            <HiOutlineEye />
          </button>
        </div>
        <span className="absolute left-3 top-3 rounded-full glass px-3 py-1 text-[11px] uppercase tracking-wide text-ice">
          {product.category}
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between">
        <div>
          <h3 className="font-heading text-base text-white">{product.name}</h3>
          <p className="text-sm text-fog">{product.flavor}</p>
        </div>
        <span className="font-heading text-ice">${product.price}</span>
      </div>

      <div className="mt-2 flex items-center gap-1 text-xs text-fog">
        <HiStar className="text-ice" /> {product.rating}
      </div>

      <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-full border border-white/15 py-2.5 text-sm font-heading text-white transition-all hover:border-ice/60 hover:text-ice hover:shadow-glowSm">
        <HiOutlineShoppingBag /> Add to Cart
      </button>
    </motion.div>
  );
}
