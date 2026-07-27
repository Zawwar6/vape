import Reveal from "../ui/Reveal";

const products = [
  {
    id: 1,
    label: "2026 Newest",
    title: "6 IN 1 DISPOSABLE VAPE",
    image: "/4in1.jpg.webp", // replace with your actual image path
    tags: ["6 Flavors in 1 Device", "6 Mesh Coils", "180,000 Puffs"],
  },
  {
    id: 2,
    label: "2025 Best Selling",
    title: "4 IN 1 DISPOSABLE VAPE",
    image: "/6in1.jpg.webp", // replace with your actual image path
    tags: ["4 Flavors in 1 Device", "4 Mesh Coils", "80,000 Puffs"],
  },
];

export default function BestSellers() {
  return (
    <section className="relative bg-white px-6 py-20 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <Reveal className="mb-14 text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-black md:text-5xl">
            BEST SELLING
          </h2>
          {/* Blue wave underline */}
          <svg
            className="mx-auto mt-2"
            width="140"
            height="12"
            viewBox="0 0 140 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 8C12 2 22 10 32 6C42 2 52 10 62 6C72 2 82 10 92 6C102 2 112 10 122 6C128 4 134 6 138 5"
              stroke="#3B82F6"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </Reveal>

        {/* Two product cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={0.1 * (i + 1)}>
              <div className="group">
                {/* Image card */}
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-82 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-80"
                  />
                </div>

                {/* Text content */}
                <div className="mt-5">
                  <p className="text-sm text-gray-500">{p.label}</p>
                  <h3 className="mt-1 font-heading text-xl font-bold tracking-tight text-black md:text-2xl">
                    {p.title}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}