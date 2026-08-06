import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { HiStar, HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";
import { useTranslation } from "react-i18next";

export default function Reviews() {
  const { t } = useTranslation();

  const reviews = [
    {
      name: t("reviews.items.0.name"),
      rating: 5,
      text: t("reviews.items.0.text"),
    },
    {
      name: t("reviews.items.1.name"),
      rating: 5,
      text: t("reviews.items.1.text"),
    },
    {
      name: t("reviews.items.2.name"),
      rating: 4,
      text: t("reviews.items.2.text"),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-bg px-6 py-28 md:px-10">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-ice/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl text-center">
        <Reveal>
          <Eyebrow>
            <span className="mx-auto flex w-fit items-center gap-2">
              {t("reviews.eyebrow")}
            </span>
          </Eyebrow>

          <h2 className="mt-4 font-heading text-4xl uppercase text-white md:text-5xl">
            {t("reviews.heading")}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-white/60">
            Trusted by customers who value quality, speed and exceptional
            service.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-16">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            spaceBetween={30}
            slidesPerView={1}
            className="reviews-swiper !pb-14"
          >
            {reviews.map((r) => (
              <SwiperSlide key={r.name}>
                <div className="group relative mx-auto max-w-3xl overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-ice/30 hover:bg-white/[0.07]">
                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                    <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-ice/20 blur-3xl" />
                  </div>

                  {/* Quote Icon */}
                  <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ice/10 text-3xl text-ice">
                    <HiMiniChatBubbleLeftRight />
                  </div>

                  {/* Stars */}
                  <div className="relative mt-8 flex justify-center gap-1 text-xl text-yellow-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <HiStar
                        key={i}
                        className={
                          i < r.rating
                            ? "opacity-100"
                            : "opacity-20"
                        }
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="relative mx-auto mt-8 max-w-2xl text-lg leading-9 text-white/90 md:text-xl">
                    "{r.text}"
                  </p>

                  {/* Divider */}
                  <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-ice/60 to-transparent" />

                  {/* User */}
                  <div className="mt-8 flex flex-col items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-ice to-cyan-300 font-heading text-xl text-black">
                      {r.name.charAt(0)}
                    </div>

                    <h4 className="mt-4 font-heading text-lg uppercase tracking-wider text-white">
                      {r.name}
                    </h4>

                    <span className="text-sm text-white/50">
                      Verified Customer
                    </span>
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