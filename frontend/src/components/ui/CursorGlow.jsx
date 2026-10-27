import { useEffect, useRef } from "react";

// Mouse ke peeche chalne wali halki green roshni (sirf desktop)
export default function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const move = (e) => { if (ref.current) ref.current.style.transform = `translate(${e.clientX - 160}px, ${e.clientY - 160}px)`; };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div ref={ref} aria-hidden className="pointer-events-none fixed left-0 top-0 z-0 hidden h-80 w-80 rounded-full bg-green-400/10 blur-3xl transition-transform duration-300 ease-out md:block" />;
}
