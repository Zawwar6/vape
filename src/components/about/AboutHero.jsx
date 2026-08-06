import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import { useTranslation } from "react-i18next";

export default function AboutHero() {
  const { t } = useTranslation();
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-bg pt-32 pb-20">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-ice/15 blur-[130px]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <Eyebrow>
            <span className="mx-auto flex w-fit items-center gap-3"> {t("aboutHero.eyebrow")}</span>
          </Eyebrow>
          <h1 className="font-heading uppercase text-5xl text-white md:text-6xl">
            {t("aboutHero.title1")}{" "}
           <span className="text-gradient">{t("aboutHero.highlight")}</span>{" "}
            {t("aboutHero.title2")}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-fog">
           {t("aboutHero.description")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
