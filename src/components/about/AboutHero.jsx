import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-bg pt-32 pb-20">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-ice/15 blur-[130px]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <Eyebrow>
            <span className="mx-auto flex w-fit items-center gap-3">About Reserve</span>
          </Eyebrow>
          <h1 className="font-heading text-5xl text-white md:text-6xl">
            A studio obsessed with <span className="text-gradient">the details</span> nobody asked for
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-fog">
            We started Reserve because most devices in this category feel disposable in more ways than one. We build ours to last, and blend flavors like we'd want to taste them ourselves.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
