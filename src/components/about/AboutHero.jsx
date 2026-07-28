import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-bg pt-32 pb-20">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-ice/15 blur-[130px]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <Eyebrow>
            <span className="mx-auto flex w-fit items-center gap-3">About Stagbar</span>
          </Eyebrow>
          <h1 className="font-heading text-5xl text-white md:text-6xl">
            We are <span className="text-gradient">Stag</span> bar
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-fog">
           Stagbar Vape is a global leader in the vaping industry, born from a passion for superior craftsmanship and a relentless pursuit of the perfect flavor. With a strong footprint in the European and North American markets, we have become a trusted name for vapers who prioritize both performance and style. 
          </p>
        </Reveal>
      </div>
    </section>
  );
}
