import { useEffect, useRef, useState } from "react";

const ANIM = { left: "animate-fromLeft", right: "animate-fromRight", top: "animate-fromTop", bottom: "animate-fromBottom", zoom: "animate-zoomIn" };

export default function Reveal({ from = "bottom", delay = 0, className = "", children }) {
  const ref = useRef(null);
  const [dir, setDir] = useState(null);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let d = from;
      if (from === "auto") {
        const r = el.getBoundingClientRect();
        const cx = (r.left + r.width / 2) / window.innerWidth;
        d = r.width > window.innerWidth * 0.6 ? "bottom" : cx < 0.4 ? "left" : cx > 0.6 ? "right" : "bottom";
      }
      setDir(d);
      io.disconnect();
    }, { threshold: 0.05, rootMargin: "0px 0px -30px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, [from]);

  return <div ref={ref} style={{ animationDelay: `${delay}ms` }} className={`${dir ? ANIM[dir] : "opacity-0"} ${className}`}>{children}</div>;
}
