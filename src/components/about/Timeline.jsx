import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import { useTranslation } from "react-i18next";

export default function Timeline() {
  const { t } = useTranslation();

  const timeline = [
    {
      title: t("timeline.items.0.title"),
      copy: t("timeline.items.0.copy"),
    },
    {
      title: t("timeline.items.1.title"),
      copy: t("timeline.items.1.copy"),
    },
    {
      title: t("timeline.items.2.title"),
      copy: t("timeline.items.2.copy"),
    },
  ];
  return (
    <section className="relative bg-bg px-6 py-24 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-heading text-4xl text-white md:text-5xl">{t("timeline.heading")}</h2>
          <p className="mx-auto mt-6 max-w-xl text-fog">{t("timeline.description")}</p>
        </Reveal>


        <div className="relative mt-16 space-y-14 border-l border-white/10 pl-10">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.1} className="relative">
              <span className="absolute -left-[3.15rem] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-ice shadow-glowSm">
                <span className="h-2 w-2 rounded-full bg-bg" />
              </span>
              <h3 className="mt-1 font-heading text-xl text-white">{t.title}</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-fog">{t.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
