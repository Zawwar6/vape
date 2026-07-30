import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function Counter({
  to,
  suffix = "",
  format,
  isDecimal = false,
  duration = 1.8,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = null;
    let frame;

    const step = (ts) => {
      if (start === null) start = ts;

      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setValue(eased * to);

      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setValue(to);
      }
    };

    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  let display;

  if (format === "M") {
    display = `${(value / 1000000).toFixed(value >= 1000000 ? 0 : 1)}M+`;
  } else if (format === "K") {
    display = `${Math.floor(value / 1000)}K+`;
  } else if (isDecimal) {
    display = value.toFixed(1);
  } else {
    display = Math.floor(value).toLocaleString();
  }

  return (
    <span ref={ref}>
      {display}
      {!format && suffix}
    </span>
  );
}