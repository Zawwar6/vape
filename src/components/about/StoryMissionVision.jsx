import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

const blocks = [
  {
    label: "Our Story",
    title: "Built in a warehouse, not a boardroom",
    copy: "Stagbar Vape is a global leader in the vaping industry, born from a passion for superior craftsmanship and a relentless pursuit of the perfect flavor. With a strong footprint in the European and North American markets, we have become a trusted name for vapers who prioritize both performance and style.",
  },
  {
    label: "Our Mission",
    title: "Make the everyday device feel considered",
    copy: "To provide a cleaner, more flavorful, and highly customizable alternative for the global community. Whether you are a flavor chaser or looking for a premium lifestyle accessory, Stagbar Vape is here to redefine your vaping experience.",
  },
  {
    label: "Our Vision",
    title: "A category known for craft, not just volume",
    copy: "To redefine the global vaping culture by merging cutting-edge technology with the ultimate freedom of choice. We envision a world where every vaper has the power to customize their sensory experience instantly, making Stagbar Vape the gold standard for innovation, flavor diversity, and a premium smoke-free lifestyle.",
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
