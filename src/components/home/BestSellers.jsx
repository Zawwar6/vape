import Reveal from "../ui/Reveal";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function BestSellers() {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      label: t("bestSellers.products.0.label"),
      title: t("bestSellers.products.0.title"),
      image: "/4in1.jpg.webp",
      tags: [
        t("bestSellers.products.0.tag1"),
        t("bestSellers.products.0.tag2"),
        t("bestSellers.products.0.tag3"),
      ],
    },
    {
      id: 2,
      label: t("bestSellers.products.1.label"),
      title: t("bestSellers.products.1.title"),
      image: "/6in1.jpg.webp",
      tags: [
        t("bestSellers.products.1.tag1"),
        t("bestSellers.products.1.tag2"),
        t("bestSellers.products.1.tag3"),
      ],
    },
  ];

  return (
    <section className="relative bg-surface px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        {/* Title – centered like the screenshot */}
        <Reveal className="mb-14 text-center">
         <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
                  {t("bestSellers.title1")}{" "}
        <span className="text-gradient">
          {t("bestSellers.highlight")}
        </span>
          </motion.h1>
        </Reveal>

        {/* Two large product cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={0.1 * (i + 1)}>
              <div className="group">
                {/* Image only – no glass card, no rating, no extra content */}
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-80"
                  />
                </div>

                {/* Label + Title */}
                <div className="mt-5">
                  <p className="text-sm text-fog">{p.label}</p>
                  <h3 className="mt-1 font-heading text-xl text-white md:text-2xl">
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