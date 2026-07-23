import { HiOutlineCpuChip, HiOutlineBeaker, HiOutlineTruck, HiOutlineShieldCheck } from "react-icons/hi2";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

const points = [
  { icon: HiOutlineCpuChip, title: "Precision Engineering", copy: "Every device is calibrated on-site before it ships, not sampled from a batch." },
  { icon: HiOutlineBeaker, title: "In-House Blends", copy: "Flavors are developed and tested by our own chemists, not licensed formulas." },
  { icon: HiOutlineTruck, title: "Fast, Discreet Delivery", copy: "Plain packaging, tracked shipping, and same-day dispatch on weekdays." },
  { icon: HiOutlineShieldCheck, title: "12-Month Warranty", copy: "Manufacturing defects and battery issues are covered, no questions asked." },
];

export default function WhyChooseUs() {
  return (
    <section className="relative bg-bg px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <Eyebrow>Why Reserve</Eyebrow>
          <h2 className="max-w-xl font-heading text-4xl text-white md:text-5xl">Built with more care than the category expects</h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group h-full rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
                <p.icon className="text-3xl text-ice" />
                <h3 className="mt-6 font-heading text-lg text-white">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-fog">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
