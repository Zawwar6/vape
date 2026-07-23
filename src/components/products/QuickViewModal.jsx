import { AnimatePresence, motion } from "framer-motion";
import { HiXMark, HiStar, HiOutlineShoppingBag } from "react-icons/hi2";

export default function QuickViewModal({ product, onClose }) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-bg/80 backdrop-blur-sm px-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl glass-strong p-8 md:p-10"
          >
            <button
              onClick={onClose}
              aria-label="Close quick view"
              className="absolute right-6 top-6 text-xl text-fog hover:text-white"
            >
              <HiXMark />
            </button>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <img src={product.image} alt={product.name} className="h-64 w-full rounded-2xl object-cover" />
              <div>
                <span className="text-xs uppercase tracking-widest2 text-ice">{product.category}</span>
                <h3 className="mt-3 font-heading text-2xl text-white">{product.name}</h3>
                <p className="mt-1 text-fog">{product.flavor}</p>
                <div className="mt-3 flex items-center gap-1 text-sm text-fog">
                  <HiStar className="text-ice" /> {product.rating} rating
                </div>
                <p className="mt-4 font-heading text-3xl text-ice">${product.price}</p>
                <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-ice py-3 font-heading text-bg hover:shadow-glow transition-shadow">
                  <HiOutlineShoppingBag /> Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
