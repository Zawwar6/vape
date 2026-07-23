import { values } from "../../data/siteData";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

export default function Values() {
  return (
    <section className="relative bg-surface px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>What We Stand For</Eyebrow>
          <h2 className="max-w-xl font-heading text-4xl text-white md:text-5xl">Company values</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-white/10 p-8 transition-all duration-500 hover:border-ice/40 hover:shadow-glow">
                <h3 className="font-heading text-lg text-ice">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{v.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
