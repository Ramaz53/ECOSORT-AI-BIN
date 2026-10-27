import { useEffect, useMemo, useState } from "react";
import forest from "../../assets/backgrounds/bg-forest.jpg";
import globe from "../../assets/backgrounds/bg-globe.jpg";
import circuit from "../../assets/backgrounds/bg-circuit.jpg";
import conveyor from "../../assets/backgrounds/bg-conveyor.jpg";
import bins from "../../assets/backgrounds/bg-bins.jpg";
import recycle from "../../assets/backgrounds/bg-recycle.jpg";
import sprout from "../../assets/backgrounds/bg-sprout.jpg";
import vision from "../../assets/backgrounds/bg-vision.jpg";

// Apni images lagani hon to src/assets/backgrounds/ mein daal kar yahan list badal dein
const SCENES = [forest, bins, conveyor, vision, recycle, globe, sprout, circuit];

// Crossfade + slow zoom (Ken Burns) + floating green particles. strong = app pages (zyada dim, padhne ke liye)
export default function BackgroundSlideshow({ strong = false }) {
  const [i, setI] = useState(() => Math.floor(Math.random() * SCENES.length));
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % SCENES.length), 8000);
    return () => clearInterval(t);
  }, []);
  const particles = useMemo(() => Array.from({ length: 22 }, () => ({ left: Math.random() * 100, size: 2 + Math.random() * 4, dur: 10 + Math.random() * 14, delay: -Math.random() * 20 })), []);

  return (
    <>
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-page">
      {SCENES.map((src, k) => (
        <img key={src} src={src} alt="" className={`absolute inset-0 h-full w-full animate-kenburns object-cover transition-opacity duration-[2000ms] ${k === i ? (strong ? "opacity-40 dark:opacity-55" : "opacity-60 dark:opacity-100") : "opacity-0"}`} />
      ))}
      <div className={`absolute inset-0 bg-gradient-to-b ${strong ? "from-page/85 via-page/80 to-page/95" : "from-page/80 via-page/55 to-page/90 dark:from-page/45 dark:via-page/20 dark:to-page/80"}`} />
      {particles.map((d, k) => (
        <span key={k} className="absolute -bottom-3 animate-rise rounded-full bg-green-400/70 shadow-[0_0_10px_#4ade80]"
          style={{ left: `${d.left}%`, width: d.size, height: d.size, animationDuration: `${d.dur}s`, animationDelay: `${d.delay}s` }} />
      ))}
    </div>
    </>
  );
}
