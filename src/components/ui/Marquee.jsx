export default function Marquee({ text, icon = "•" }) {
  const items = new Array(8).fill(text);
  return (
    <div className="relative w-full overflow-hidden border-y border-white/10 bg-surface py-5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-heading text-2xl md:text-3xl text-white/80">
            {t}
            <span className="text-ice">{icon}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
