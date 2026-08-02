import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AgeVerification() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const verified = sessionStorage.getItem("ageVerified");

    if (!verified) {
      setShowPopup(true);
    }
  }, []);

  const handleYes = () => {
    sessionStorage.setItem("ageVerified", "true");
    setShowPopup(false);
  };

  const handleNo = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-md px-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="w-full max-w-lg rounded-3xl border border-yellow-400/30 bg-[#0b0b0b] p-10 text-center shadow-2xl"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Age Verification
            </h2>

            <p className="text-gray-400 leading-7 mb-10">
              This website contains products intended for adults only.
              <br />
              You must be <span className="text-yellow-400 font-semibold">21 years or older</span> to enter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleYes}
                className="flex-1 rounded-xl bg-yellow-400 py-4 font-semibold text-black transition hover:bg-yellow-300"
              >
                I am 21+
              </button>

              <button
                onClick={handleNo}
                className="flex-1 rounded-xl border border-white/20 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                I am Under 21
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}