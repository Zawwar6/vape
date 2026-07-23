import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handle = (e) => {
      el.style.transform = `translate3d(${e.clientX - 200}px, ${e.clientY - 200}px, 0)`;
    };
    window.addEventListener("pointermove", handle);
    return () => window.removeEventListener("pointermove", handle);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[60] hidden md:block h-[400px] w-[400px] rounded-full will-change-transform"
      style={{
        background: "radial-gradient(circle, rgba(109,220,255,0.07), transparent 70%)",
      }}
    />
  );
}
