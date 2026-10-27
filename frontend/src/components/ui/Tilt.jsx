import { useRef } from "react";

// Mouse ke sath 3D tilt + glare. Entrance animation Reveal se hoti hai (is wrapper ke bahar).
export default function Tilt({ children, max = 8, lift = 12, glare = true, glow = true, className = "" }) {
  const ref = useRef(null);
  const shine = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    ref.current.style.transform = `perspective(900px) rotateY(${x * max}deg) rotateX(${-y * max}deg) translateZ(${lift}px)`;
    if (shine.current) shine.current.style.background = `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,.2), transparent 55%)`;
  };
  const leave = () => {
    ref.current.style.transform = "perspective(900px)";
    if (shine.current) shine.current.style.background = "transparent";
  };
  return (
    <div ref={ref} onMouseMove={move} onMouseLeave={leave} className={`relative rounded-2xl transition duration-200 ease-out will-change-transform [transform-style:preserve-3d] ${glow ? "hover:shadow-[0_0_44px_-12px_rgba(74,222,128,.55)]" : ""} ${className}`}>
      {children}
      {glare && <div ref={shine} className="pointer-events-none absolute inset-0 rounded-2xl" />}
    </div>
  );
}
