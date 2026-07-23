import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineCheckCircle, HiOutlineShieldCheck } from "react-icons/hi2";
import GlowButton from "../components/ui/GlowButton";

export default function VerifyAccount() {
  const [form, setForm] = useState({ code: "", email: "", phone: "" });
  const [verified, setVerified] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setVerified(true);
    }, 1400);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-bg px-6 py-32">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-ice/15 blur-[140px] animate-pulseGlow" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative w-full max-w-md rounded-[2rem] glass-strong p-10 shadow-glow"
        style={{ border: "1px solid rgba(109,220,255,0.35)" }}
      >
        <AnimatePresence mode="wait">
          {!verified ? (
            <motion.div key="form" exit={{ opacity: 0, y: -10 }}>
              <div className="flex justify-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-surface2 text-2xl text-ice">
                  <HiOutlineShieldCheck />
                </div>
              </div>
              <h1 className="mt-6 text-center font-heading text-2xl text-white">Verify Your Account</h1>
              <p className="mt-2 text-center text-sm text-fog">Enter the code we sent to keep your account secure.</p>

              <form onSubmit={submit} className="mt-8 space-y-4">
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-wide text-fog">Verification Code</label>
                  <input
                    required
                    value={form.code}
                    onChange={update("code")}
                    placeholder="6-digit code"
                    className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white tracking-widest placeholder:text-fog/50 focus:border-ice/60"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-wide text-fog">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@email.com"
                    className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-fog/50 focus:border-ice/60"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs uppercase tracking-wide text-fog">Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+1 (555) 000-0000"
                    className="w-full rounded-xl border border-white/15 bg-transparent px-4 py-3 text-white placeholder:text-fog/50 focus:border-ice/60"
                  />
                </div>

                <GlowButton type="submit" className="mt-4 w-full">
                  {submitting ? "Verifying..." : "Verify Account"}
                </GlowButton>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-8 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-ice/15 text-5xl text-ice"
              >
                <HiOutlineCheckCircle />
              </motion.div>
              <h2 className="mt-6 font-heading text-2xl text-white">Account Verified</h2>
              <p className="mt-2 text-sm text-fog">You're all set. Welcome to Reserve.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
