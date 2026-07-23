import {
  HiOutlineMagnifyingGlass,
  HiOutlineCursorArrowRays,
  HiOutlineShoppingCart,
  HiOutlineCreditCard,
  HiOutlineCheckCircle,
  HiOutlineTruck,
} from "react-icons/hi2";
import Reveal from "../components/ui/Reveal";
import Eyebrow from "../components/ui/Eyebrow";

const steps = [
  { icon: HiOutlineMagnifyingGlass, title: "Browse Products", copy: "Explore devices, pods, and blends across every category in the collection." },
  { icon: HiOutlineCursorArrowRays, title: "Select Product", copy: "Pick a flavor and finish. Quick View shows full details without leaving the page." },
  { icon: HiOutlineShoppingCart, title: "Add to Cart", copy: "Build your order and adjust quantities before you check out." },
  { icon: HiOutlineCreditCard, title: "Checkout", copy: "Enter shipping details and pay securely in a few taps." },
  { icon: HiOutlineCheckCircle, title: "Order Confirmation", copy: "You'll get an instant confirmation with your order number and estimated arrival." },
  { icon: HiOutlineTruck, title: "Fast Delivery", copy: "Most orders ship same day and arrive within 2-4 business days." },
];

export default function HowToOrder() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-bg pt-32 pb-16">
        <div className="absolute left-1/2 top-0 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-ice/15 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <Eyebrow>
              <span className="mx-auto flex w-fit items-center gap-3">Ordering Made Simple</span>
            </Eyebrow>
            <h1 className="font-heading text-5xl text-white md:text-6xl">How to Order</h1>
            <p className="mx-auto mt-5 max-w-lg text-fog">Six steps, start to doorstep.</p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-bg px-6 pb-28 md:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="relative space-y-4">
            <div className="absolute left-8 top-8 bottom-8 hidden w-px bg-gradient-to-b from-ice/60 via-white/10 to-transparent md:block" />
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="relative flex flex-col items-start gap-6 rounded-3xl glass p-8 md:flex-row md:items-center">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-surface2 text-2xl text-ice shadow-glowSm">
                    <s.icon />
                  </div>
                  <div>
                    <span className="font-heading text-xs uppercase tracking-widest2 text-ice">Step {i + 1}</span>
                    <h3 className="mt-1 font-heading text-xl text-white">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-fog">{s.copy}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
