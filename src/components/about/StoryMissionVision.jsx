import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

const blocks = [
  {
    label: "Our Story",
    title: "Built in a warehouse, not a boardroom",
    copy: "Reserve began as three prototypes on a workbench and a shared frustration with devices that felt cheap the moment you held them. We spent two years on the first release alone.",
  },
  {
    label: "Our Mission",
    title: "Make the everyday device feel considered",
    copy: "We design for the hundredth draw, not just the first impression. That means better batteries, better seals, and flavors that don't fade by the third pod.",
  },
  {
    label: "Our Vision",
    title: "A category known for craft, not just volume",
    copy: "We want Reserve to be the brand people point to when they explain what a vape company could be if it tried harder.",
  },
];

export default function StoryMissionVision() {
  return (
    <section className="relative bg-bg px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-3">
        {blocks.map((b, i) => (
          <Reveal key={b.label} delay={i * 0.1}>
            <div className="h-full rounded-3xl glass p-8">
              <Eyebrow>{b.label}</Eyebrow>
              <h3 className="font-heading text-2xl text-white">{b.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-fog">{b.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
