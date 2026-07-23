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

      <div className="relative w-full max-w-xs">
        <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-fog" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-full border border-white/15 bg-transparent py-2.5 pl-11 pr-4 text-sm text-white placeholder:text-fog/60 focus:border-ice/60"
        />
      </div>
    </div>
  );
}
