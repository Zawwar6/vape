import { NavLink } from "react-router-dom";
import { FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Disposables", to: "/products" },
      { label: "Pod Systems", to: "/products" },
      { label: "Devices", to: "/products" },
      { label: "E-Liquids", to: "/products" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Gallery", to: "/gallery" },
      { label: "How To Order", to: "/how-to-order" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <NavLink to="/" className="font-heading text-xl tracking-widest2 uppercase text-white">
              Reserve<span className="text-ice">.</span>
            </NavLink>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">
              Engineered vaping devices and small-batch blends, built for people who notice detail.
            </p>
            <div className="mt-6 flex gap-4 text-lg text-fog">
              <a href="#" aria-label="Instagram" className="hover:text-ice transition-colors"><FaInstagram /></a>
              <a href="#" aria-label="TikTok" className="hover:text-ice transition-colors"><FaTiktok /></a>
              <a href="#" aria-label="X" className="hover:text-ice transition-colors"><FaXTwitter /></a>
              <a href="#" aria-label="YouTube" className="hover:text-ice transition-colors"><FaYoutube /></a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-sm uppercase tracking-wide text-white">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <NavLink to={l.to} className="text-sm text-fog hover:text-ice transition-colors">
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-heading text-sm uppercase tracking-wide text-white">Stay Updated</h4>
            <p className="mt-5 text-sm text-fog">Drops, restocks, and studio notes. No spam.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="you@email.com"
                className="w-full rounded-full border border-white/15 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-fog/60 focus:border-ice/60"
              />
              <button className="shrink-0 rounded-full bg-ice px-4 py-2.5 text-sm font-heading text-bg hover:shadow-glowSm transition-shadow">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-fog/70 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Reserve. All rights reserved.</p>
          <p>For adults 21+. Not for use by pregnant or nursing women.</p>
        </div>
      </div>
    </footer>
  );
}
