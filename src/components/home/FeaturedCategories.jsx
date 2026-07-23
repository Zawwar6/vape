import { NavLink } from "react-router-dom";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

const cats = [
  { name: "Disposable", copy: "Grab, draw, done.", image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=700&auto=format&fit=crop" },
  { name: "Pods", copy: "Swap and go systems.", image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=700&auto=format&fit=crop" },
  { name: "Devices", copy: "Engineered for years.", image: "https://images.unsplash.com/photo-1621274147744-cfb5cbe1f207?q=80&w=700&auto=format&fit=crop" },
  { name: "E-Liquids", copy: "Small-batch blends.", image: "https://images.unsplash.com/photo-1612197527762-8cb2f2e18a3d?q=80&w=700&auto=format&fit=crop" },
];

export default function FeaturedCategories() {
  return (
    <section className="relative bg-bg px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>Shop By Category</Eyebrow>
          <h2 className="max-w-xl font-heading text-4xl text-white md:text-5xl">Four categories. Zero clutter.</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.08}>
              <NavLink to="/products" className="group relative block overflow-hidden rounded-3xl border border-white/10">
                <img
                  src={c.image}
                  alt={c.name}
                  className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-heading text-xl text-white">{c.name}</h3>
                  <p className="mt-1 text-sm text-fog">{c.copy}</p>
                </div>
                <div className="absolute inset-0 border border-ice/0 transition-colors duration-500 group-hover:border-ice/40 rounded-3xl" />
              </NavLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
