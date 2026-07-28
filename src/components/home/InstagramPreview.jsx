import { FaInstagram } from "react-icons/fa6";
import { instagramPosts } from "../../data/siteData";
import Reveal from "../ui/Reveal";
import Eyebrow from "../ui/Eyebrow";

export default function InstagramPreview() {
  return (
    <section className="relative bg-surface px-6 py-28 md:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Eyebrow>Follow Along</Eyebrow>
            <h2 className="font-heading text-4xl text-white md:text-5xl">Stagbar</h2>
          </div>
          <a href="https://www.instagram.com/stagbar_vapes?igsh=MWY3N3htNXVkNjh3cg==" className="flex items-center gap-2 text-sm text-ice hover:underline">
            <FaInstagram /> View Profile
          </a>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {instagramPosts.map((src, i) => (
    <Reveal key={i} delay={i * 0.05}>
      <a
        href="https://www.instagram.com/stagbar_vapes?igsh=MWY3N3htNXVkNjh3cg=="
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block aspect-square overflow-hidden rounded-2xl"
      >
        <img
          src={src}
          alt="Instagram post"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-bg/0 text-ice opacity-0 transition-all duration-300 group-hover:bg-bg/50 group-hover:opacity-100">
          <FaInstagram className="text-3xl" />
        </div>
      </a>
    </Reveal>
  ))}
</div>
      </div>
    </section>
  );
}
