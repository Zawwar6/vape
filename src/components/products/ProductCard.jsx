import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="group"
    >
      <Link to={`/products/${product.id}`}>
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-white/[0.04] border border-white/10">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Product Image */}
          <img
            src={product.image}
            alt={product.category}
            className="absolute inset-0 h-full w-full object-contain p-8 transition-all duration-700 group-hover:scale-110"
          />
        </div>

        <h3 className="mt-5 text-center font-heading text-sm text-white">
          {product.category}
        </h3>
      </Link>
    </motion.div>
  );
}