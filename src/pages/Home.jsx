import Hero from "../components/home/Hero";
import Marquee from "../components/ui/Marquee";
import FeaturedCategories from "../components/home/FeaturedCategories";
import BestSellers from "../components/home/BestSellers";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Stats from "../components/home/Stats";
import Reviews from "../components/home/Reviews";
import InstagramPreview from "../components/home/InstagramPreview";
import Newsletter from "../components/home/Newsletter";
import Statss from "../components/about/Statss";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Marquee text="PUFF ELEVATE EVERY" /> */}
      {/* <FeaturedCategories /> */}
      <BestSellers />
      <WhyChooseUs />
      <Statss/>
      <Reviews />
      {/* <InstagramPreview /> */}
      {/* <Newsletter /> */}
    </>
  );
}
