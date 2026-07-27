import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { HiStar } from "react-icons/hi2";
import { bestSellers } from "../../data/products";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

export default function BestSellers() {
  return (
    <section className="relative bg-surface px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Best Sellers</Eyebrow>
            <h2 className="max-w-xl font-heading text-4xl text-white md:text-5xl">What people keep reordering</h2>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <Swiper
            modules={[Navigation, FreeMode]}
            navigation
            freeMode
            spaceBetween={22}
            slidesPerView={1.15}
            breakpoints={{
              640: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4 },
            }}
            className="best-sellers-swiper !pb-4"
          >
            {bestSellers.map((p) => (
              <SwiperSlide key={p.id}>
                <div className="group relative overflow-hidden rounded-3xl glass p-4 transition-all duration-500 hover:shadow-glow hover:-translate-y-1">
                  <div className="overflow-hidden rounded-2xl">
                    <img
                      src={p.image}
                      alt={`${p.name} - ${p.flavor}`}
                      className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <h3 className="font-heading text-base text-white">{p.name}</h3>
                      <p className="text-sm text-fog">{p.flavor}</p>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-1 text-xs text-fog">
                    <HiStar className="text-ice" /> {p.rating}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
