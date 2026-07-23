import { team } from "../../data/siteData";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

export default function Team() {
  return (
    <section className="relative bg-surface px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>The People</Eyebrow>
          <h2 className="max-w-xl font-heading text-4xl text-white md:text-5xl">Our team</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div className="group overflow-hidden rounded-3xl glass">
                <div className="overflow-hidden">
                  <img
                    src={m.image}
                    alt={m.name}
                    className="h-72 w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-white">{m.name}</h3>
                  <p className="mt-1 text-sm text-fog">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
