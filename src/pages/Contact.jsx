import { useState } from "react";
import { HiOutlineMapPin, HiOutlineClock, HiOutlinePhone, HiOutlineEnvelope, HiChevronDown } from "react-icons/hi2";
import { FaFacebook, FaInstagram, FaTiktok, FaXTwitter } from "react-icons/fa6";
import { faqs } from "../data/siteData";
import Reveal from "../components/ui/Reveal";
import Eyebrow from "../components/ui/Eyebrow";
import GlowButton from "../components/ui/GlowButton";

function FaqItem({ f }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 p-6">
      <button onClick={() => setOpen((o) => !o)} className="flex w-full items-center justify-between text-left">
        <span className="font-heading text-white">{f.q}</span>
        <HiChevronDown className={`text-ice transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="mt-4 text-sm leading-relaxed text-fog">{f.a}</p>}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  return (
    <>
      <section className="relative flex min-h-[45vh] items-center overflow-hidden bg-bg pt-32 pb-16">
        <div className="absolute left-1/2 top-0 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-ice/15 blur-[120px]" />
        <div className="relative mx-auto max-w-3xl px-6 text-center md:px-10">
          <Reveal>
            <Eyebrow>
              <span className="mx-auto flex w-fit items-center gap-3">Get In Touch</span>
            </Eyebrow>
            <h1 className="font-heading text-5xl text-white md:text-6xl">Contact Us</h1>
            <p className="mx-auto mt-5 max-w-lg text-fog">Questions about an order, a device, or a wholesale inquiry — we read every message.</p>
          </Reveal>
        </div>
      </section>

      <section className="relative bg-bg px-6 pb-28 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3 rounded-3xl glass p-8 md:p-10">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <h3 className="font-heading text-2xl text-ice">Message sent</h3>
                <p className="mt-2 text-fog">We'll reply within one business day.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-wide text-fog">Name</label>
                    <input required value={form.name} onChange={update("name")} className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white focus:border-ice/60" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-wide text-fog">Email</label>
                    <input required type="email" value={form.email} onChange={update("email")} className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white focus:border-ice/60" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-wide text-fog">Phone</label>
                  <input value={form.phone} onChange={update("phone")} className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white focus:border-ice/60" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-wide text-fog">Message</label>
                  <textarea required rows={5} value={form.message} onChange={update("message")} className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white focus:border-ice/60" />
                </div>
                <GlowButton type="submit">Send Message</GlowButton>
              </form>
            )}
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl glass p-8">
              <div className="flex items-start gap-3">
                <HiOutlineMapPin className="mt-1 shrink-0 text-ice" />
                <p className="text-sm text-fog">#1303, Bldg A, Sihai Yunchuang Mansion, Shajing, Bao’an District, Shenzhen</p>
              </div>
              <div className="mt-5 flex items-start gap-3">
                <HiOutlinePhone className="mt-1 shrink-0 text-ice" />
                <p className="text-sm text-fog">+1 (512) 555-0173</p>
              </div>
              <div className="mt-5 flex items-start gap-3">
                <HiOutlineEnvelope className="mt-1 shrink-0 text-ice" />
                <p className="text-sm text-fog">support@reserve.com</p>
              </div>
              <div className="mt-5 flex items-start gap-3">
                <HiOutlineClock className="mt-1 shrink-0 text-ice" />
                <p className="text-sm text-fog">Mon - Sat 9am to 6pm (UTC +2)</p>
              </div>
              <div className="mt-6 flex gap-4 text-lg text-fog">
                <a href="http://instagram.com/stagbarvapes_official/" className="hover:text-ice transition-colors" target="_blank"><FaInstagram /></a>
                <a href="https://www.facebook.com/profile.php?id=61592278026326&rdid=Uli9sh6mFLQ3IWCN&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F196ESJ3cGD%2F#" target="_blank" className="hover:text-ice transition-colors"><FaFacebook /></a>
                <a href="https://www.tiktok.com/@stagbar.vape?is_from_webapp=1&sender_device=pc" className="hover:text-ice transition-colors" target="_blank"><FaTiktok/></a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mx-auto mt-24 max-w-3xl">
          <Eyebrow>
            <span className="mx-auto flex w-fit items-center gap-3">Common Questions</span>
          </Eyebrow>
          <h2 className="font-heading text-3xl text-white">FAQ</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((f) => (
              <FaqItem key={f.q} f={f} />
            ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
