import { NavLink } from "react-router-dom";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import Reveal from "../ui/Reveal";
import GlowButton from "../ui/GlowButton";

const trust = [
  "Lab-tested batches with public reports",
  "12-month device warranty, no fine print",
  "Support that responds within one business day",
];

export default function TrustCta() {
  return (
    <section className="relative bg-bg px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl grid grid-cols-1 gap-14 md:grid-cols-2 items-center">
        <Reveal>
          <h2 className="font-heading text-4xl text-white md:text-5xl">Why customers trust us</h2>
          <ul className="mt-8 space-y-4">
            {trust.map((t) => (
              <li key={t} className="flex items-start gap-3 text-fog">
                <HiOutlineCheckBadge className="mt-1 shrink-0 text-ice" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15} className="rounded-[2rem] glass-strong p-12 text-center">
          <h3 className="font-heading text-2xl text-white">Ready to see it for yourself?</h3>
          <p className="mt-3 text-sm text-fog">Browse the collection and find your next everyday device.</p>
          <NavLink to="/products" className="mt-8 inline-block">
            <GlowButton>Shop the Collection</GlowButton>
          </NavLink>
        </Reveal>
      </div>
    </section>
  );
}
