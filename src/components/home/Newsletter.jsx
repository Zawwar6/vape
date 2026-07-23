import { useState } from "react";
import Reveal from "../ui/Reveal";
import GlowButton from "../ui/GlowButton";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <section className="relative overflow-hidden bg-bg px-6 py-28 md:px-10">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ice/10 blur-[130px]" />
      <Reveal className="relative mx-auto max-w-2xl rounded-[2rem] glass-strong p-12 text-center">
        <h2 className="font-heading text-3xl text-white md:text-4xl">Get early access to new drops</h2>
        <p className="mt-3 text-sm text-fog">Join the list for restocks, limited runs, and studio notes.</p>

        {sent ? (
          <p className="mt-8 font-heading text-ice">You're on the list. Welcome to Reserve.</p>
        ) : (
          <form onSubmit={submit} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full rounded-full border border-white/15 bg-transparent px-5 py-3.5 text-sm text-white placeholder:text-fog/60 focus:border-ice/60"
            />
            <GlowButton type="submit" className="shrink-0">
              Subscribe
            </GlowButton>
          </form>
        )}
      </Reveal>
    </section>
  );
}
