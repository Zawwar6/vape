import { HiMagnifyingGlass } from "react-icons/hi2";
import { categories } from "../../data/products";

export default function ProductFilters({ active, setActive, search, setSearch }) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-5 py-2 text-sm font-medium transition-all ${
              active === c
                ? "border-ice bg-ice text-bg shadow-glowSm"
                : "border-white/15 text-fog hover:border-ice/50 hover:text-white"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

    
    </div>
  );
}
