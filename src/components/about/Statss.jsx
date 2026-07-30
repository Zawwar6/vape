import Counter from "../ui/Counter";
import Reveal from "../ui/Reveal";

const stats = [
  { to: 100, suffix: "%", label: "Customer Satisfaction" },
  { to: "1", suffix: "M+", label: "Order Delivered" },
  { to: 4.9, suffix: "", label: "Rating"},
  { to: 500, suffix: "K+", label: "Repeated Customer" },
];

export default function Statss() {
  return (
    <section className="relative border-y border-white/10 bg-surface px-6 py-20 md:px-10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center">
            <div className="font-heading text-4xl text-gradient md:text-5xl">
              {s.isDecimal ? s.to.toFixed(1) : <Counter to={s.to} />}
              {s.suffix}
            </div>
            <p className="mt-2 text-xs uppercase tracking-widest2 text-fog">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
