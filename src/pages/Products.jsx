import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { products as allProducts } from "../data/products";
import ProductFilters from "../components/products/ProductFilters";
import ProductCard from "../components/products/ProductCard";
import QuickViewModal from "../components/products/QuickViewModal";
import Reveal from "../components/ui/Reveal";
import Eyebrow from "../components/ui/Eyebrow";

const PAGE_SIZE = 8;

export default function Products() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [quickView, setQuickView] = useState(null);

  const filtered = useMemo(() => {
    return allProducts.filter((p) => {
      const matchCat = active === "All" || p.category === active;
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.flavor.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [active, search]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleCategory = (c) => {
    setActive(c);
    setPage(1);
  };
  const handleSearch = (v) => {
    setSearch(v);
    setPage(1);
  };

  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-bg pt-32 pb-16">
        <div className="absolute left-1/2 top-0 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-ice/15 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
          <Reveal>
            <Eyebrow>
              <span className="mx-auto flex w-fit items-center gap-3">Collection</span>
            </Eyebrow>
            <h1 className="font-heading text-5xl text-white md:text-6xl">Every device, every blend</h1>
            <p className="mx-auto mt-5 max-w-lg text-fog">
              Filter by category or search directly. Everything here ships within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-bg px-6 pb-28 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <ProductFilters active={active} setActive={handleCategory} search={search} setSearch={handleSearch} />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {paged.map((p) => (
                <ProductCard key={p.id} product={p} onQuickView={setQuickView} />
              ))}
            </AnimatePresence>
          </div>

          {filtered.length === 0 && (
            <p className="mt-16 text-center text-fog">No products match that search. Try another term.</p>
          )}

          {totalPages > 1 && (
            <div className="mt-16 flex justify-center gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`h-10 w-10 rounded-full text-sm font-heading transition-all ${
                    page === i + 1 ? "bg-ice text-bg shadow-glowSm" : "border border-white/15 text-fog hover:text-white"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
    </>
  );
}
