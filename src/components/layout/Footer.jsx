import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const columns = [
    {
      title: t("footer.warehouses"),
      links: [
        { label: t("footer.spain") },
        { label: t("footer.germany") },
        { label: t("footer.poland") },
      ],
    },
    {
      title: t("footer.company"),
      links: [
        { label: t("footer.aboutUs"), to: "/about" },
        { label: t("footer.gallery"), to: "/gallery" },
        { label: t("footer.howToOrder"), to: "/how-to-order" },
        { label: t("footer.contact"), to: "/contact" },
        {
          label: t("footer.verifyProduct"),
          to: "https://stagvape.com/check",
          external: true,
        },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <NavLink to="/" className="flex items-center">
              <img
                src="/star-logo.png"
                alt="Stagbar"
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </NavLink>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-fog">
              {t("footer.description")}
            </p>

            <div className="mt-6 flex gap-4 text-lg text-fog">
              <a
                href="http://instagram.com/stagbarvapes_official/"
                aria-label="Instagram"
                className="transition-colors hover:text-ice"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.tiktok.com/@stagbar.vape?is_from_webapp=1&sender_device=pc"
                aria-label="TikTok"
                className="transition-colors hover:text-ice"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok />
              </a>

              <a
                href="https://www.facebook.com/share/196ESJ3cGD/"
                aria-label="Facebook"
                className="transition-colors hover:text-ice"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* FOOTER COLUMNS */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-sm uppercase tracking-wide text-white">
                {col.title}
              </h4>

              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.external ? (
                      <a
                        href={l.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-fog transition-colors hover:text-ice"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <NavLink
                        to={l.to}
                        className="text-sm text-fog transition-colors hover:text-ice"
                      >
                        {l.label}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ADDRESS */}
          <div>
            <h4 className="font-heading text-sm uppercase tracking-wide text-white">
              {t("footer.address")}
            </h4>

            <p className="mt-5 text-sm text-fog">
              {t("footer.addressText")}
            </p>

            <p className="mt-5 text-sm text-fog">
              {t("footer.contactUs")}: +86 15013524368
            </p>

            <img
              src="/QR.jpeg"
              alt="QR Code"
              className="mt-4 w-32 h-32 object-contain"
            />
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-fog/70 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Stagbarvape.{" "}
            {t("footer.allRightsReserved")}
          </p>

          <p>{t("footer.adultWarning")}</p>
        </div>
      </div>
    </footer>
  );
}