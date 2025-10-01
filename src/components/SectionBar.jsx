import { useEffect, useRef, useState } from "react";

/**
 * A green bar that fades up on scroll.
 * titleLines: array of strings, each rendered on its own line.
 */
export default function SectionBar({ titleLines = [] }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`pf-bar ${inView ? "in-view" : ""}`}>
      <div className="pf-bar-inner">
        <div className="pf-bar-title" aria-label={titleLines.join(" ")}>
          {titleLines.map((w, i) => (
            <span key={i} style={{ "--i": i }}>
              {w}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
