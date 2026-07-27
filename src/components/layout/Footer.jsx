import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";

const columns = [
  {
    title: "Warehouses",
    links: [
      { label: "Spain"},
      { label: "Germany"},
      { label: "Poland"},
    ],
  },
  {
    title: "Company",
   links: [
  { label: "About Us", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "How To Order", to: "/how-to-order" },
  { label: "Contact", to: "/contact" },
  { 
    label: "Verify-Product", 
    to: "https://stagvape.com/check",
    external: true
  },
],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <NavLink to="/" className="flex items-center">
            <img
              src="/star-logo.png"
              alt="Reserve"
              className="h-20 w-auto object-contain brightness-0 invert"
            />
           </NavLink>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">
              Engineered vaping devices and small-batch blends, built for people who notice detail.
            </p>
            <div className="mt-6 flex gap-4 text-lg text-fog">
              <a href="https://www.instagram.com/stagbar_vapes?igsh=MWY3N3htNXVkNjh3cg==" aria-label="Instagram" className="hover:text-ice transition-colors" target="_blank"><FaInstagram /></a>
              <a href="https://www.tiktok.com/@stagbar.vape?is_from_webapp=1&sender_device=pc" aria-label="TikTok" className="hover:text-ice transition-colors" target="_blank"><FaTiktok /></a>
              <a href="https://www.facebook.com/share/196ESJ3cGD/" aria-label="TikTok" className="hover:text-ice transition-colors" target="_blank"><FaFacebook /></a>
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
            <h4 className="font-heading text-sm uppercase tracking-wide text-white">Address</h4>
            <p className="mt-5 text-sm text-fog">#1303, Bldg A, Sihai Yunchuang Mansion, Shajing, Bao’an District, Shenzhen</p>
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
