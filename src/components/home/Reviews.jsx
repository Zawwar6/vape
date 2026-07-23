import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar } from "react-icons/hi2";
import { reviews } from "../../data/siteData";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

export default function Reviews() {
  return (
    <section className="relative bg-bg px-6 py-28 md:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <Eyebrow>
            <span className="mx-auto flex w-fit items-center gap-3">Customer Reviews</span>
          </Eyebrow>
          <h2 className="font-heading text-4xl text-white md:text-5xl">Trusted by people who notice detail</h2>
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            className="reviews-swiper !pb-12"
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.name}>
                <div className="mx-auto max-w-2xl rounded-3xl glass p-10">
                  <div className="flex justify-center gap-1 text-ice">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <HiStar key={i} />
                    ))}
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-white/90">&ldquo;{r.text}&rdquo;</p>
                  <p className="mt-6 font-heading text-sm uppercase tracking-widest2 text-ice">{r.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </div>
    </section>
  );
}
