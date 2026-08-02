import { useState, useEffect } from "react";

export default function AgeVerification() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem("ageVerified");

    if (!verified) {
      setShowPopup(true);
    }
  }, []);

  const handleYes = () => {
    localStorage.setItem("ageVerified", "true");
    setShowPopup(false);
  };

  const handleNo = () => {
    window.location.href = "https://www.google.com";
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90">

      <div className="bg-zinc-900 border border-white/10 rounded-3xl p-10 text-center max-w-md">

        <h2 className="text-3xl font-bold text-white mb-5">
          Are you 21 or older?
        </h2>

        <p className="text-gray-400 mb-8">
          You must be of legal age to enter this website.
        </p>

        <div className="flex gap-4 justify-center">

          <button
            onClick={handleYes}
            className="px-8 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300"
          >
            Yes, I am 21+
          </button>

          <button
            onClick={handleNo}
            className="px-8 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10"
          >
            No
          </button>

        </div>

      </div>

    </div>
  );
}