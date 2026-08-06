import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import { useTranslation } from "react-i18next";

export default function StoryMissionVision() {

  const { t } = useTranslation();

  const blocks = [
    {
      label: t("storyMissionVision.blocks.0.label"),
      title: t("storyMissionVision.blocks.0.title"),
      copy: t("storyMissionVision.blocks.0.copy"),
    },
    {
      label: t("storyMissionVision.blocks.1.label"),
      title: t("storyMissionVision.blocks.1.title"),
      copy: t("storyMissionVision.blocks.1.copy"),
    },
    {
      label: t("storyMissionVision.blocks.2.label"),
      title: t("storyMissionVision.blocks.2.title"),
      copy: t("storyMissionVision.blocks.2.copy"),
    },
  ];
  
  return (
    <section className="relative bg-bg px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
        {blocks.map((b, i) => (
          <Reveal key={b.label} delay={i * 0.1}>
            <div className="h-full rounded-3xl glass p-8">
              <Eyebrow>{b.label}</Eyebrow>
              <h3 className="font-heading text-2xl uppercase text-white">{b.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-fog">{b.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
