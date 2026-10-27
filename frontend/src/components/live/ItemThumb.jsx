import { CLASSES } from "../../data/constants";

// Camera snapshot jaisa thumbnail. Backend se asli photo aaye to `src` pass karein, warna illustration dikhta hai.
const ART = {
  Plastic: (
    <g>
      <rect x="-5" y="-33" width="10" height="6" rx="2" fill="#2563eb" />
      <rect x="-8" y="-28" width="16" height="6" rx="3" fill="#93c5fd" fillOpacity=".8" />
      <rect x="-14" y="-23" width="28" height="50" rx="10" fill="#60a5fa" fillOpacity=".55" stroke="#bfdbfe" strokeWidth="1.5" />
      <rect x="-14" y="-6" width="28" height="12" fill="#1d4ed8" fillOpacity=".75" />
      <path d="M-8 -17v32" stroke="#fff" strokeOpacity=".55" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  ),
  Paper: (
    <g>
      <polygon points="-26,-6 -12,-24 8,-19 25,-8 22,12 6,24 -14,19 -27,6" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="1.5" />
      <polyline points="-12,-24 -2,-2 8,-19" fill="none" stroke="#a8a29e" strokeWidth="1.2" />
      <polyline points="-27,6 -2,-2 22,12" fill="none" stroke="#a8a29e" strokeWidth="1.2" />
      <polyline points="-14,19 -2,-2 25,-8" fill="none" stroke="#d6d3d1" strokeWidth="1.2" />
    </g>
  ),
  Organic: (
    <g>
      <path d="M-30 10 C-22 -26 18 -30 32 -12 C20 -18 -6 -10 -16 16 Z" fill="#facc15" stroke="#a16207" strokeWidth="1.5" />
      <path d="M-22 6 C-14 -16 12 -22 24 -12" fill="none" stroke="#fde68a" strokeWidth="2" strokeLinecap="round" />
      <circle cx="-26" cy="12" r="3" fill="#78350f" /><circle cx="30" cy="-12" r="2.5" fill="#78350f" />
    </g>
  ),
};

export default function ItemThumb({ cls, item = "", id = 0, src, className = "" }) {
  const kind = /plastic|bottle/i.test(item) ? "Plastic" : /paper|card/i.test(item) ? "Paper" : "Organic";
  if (src) return <img src={src} alt={cls} className={`object-cover ${className}`} />;
  const rot = (Math.floor(Number(id) * 1000) % 50) - 25;
  const hex = CLASSES[cls].hex;
  return (
    <svg viewBox="0 0 120 90" preserveAspectRatio="xMidYMid slice" className={className}>
      <rect width="120" height="90" fill="#0b1411" />
      <rect y="40" width="120" height="50" fill="#14201b" />
      <g stroke="#22352d" strokeWidth="2">{Array.from({ length: 13 }, (_, i) => <line key={i} x1={i * 10} y1="40" x2={i * 10} y2="90" />)}</g>
      <g transform={`translate(60 46) rotate(${rot})`}>{ART[kind]}</g>
      <rect x="24" y="10" width="72" height="72" rx="4" fill="none" stroke={hex} strokeWidth="2" />
      <rect x="24" y="2" width="44" height="9" rx="2" fill={hex} />
    </svg>
  );
}
