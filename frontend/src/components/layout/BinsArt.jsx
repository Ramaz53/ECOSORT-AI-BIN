// 3D isometric Organic + Inorganic bins (koi background nahi). Items scanning ring se guzar kar bins mein girte hain.
export default function BinsArt({ className = "" }) {
  return (
<svg className={className} viewBox="-191 -260 469 495" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Organic and Inorganic smart bins">
<defs>
<filter id="baglow" x="-40%" y="-40%" width="180%" height="180%">
<feGaussianBlur stdDeviation="3.5" result="b"/>
<feMerge>
<feMergeNode in="b"/>
<feMergeNode in="SourceGraphic"/>
</feMerge>
</filter>
<filter id="bablur" x="-50%" y="-50%" width="200%" height="200%">
<feGaussianBlur stdDeviation="14"/>
</filter>
<linearGradient id="bag1" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#16a34a"/>
<stop offset="1" stopColor="#0e6e32"/>
</linearGradient>
<linearGradient id="bag2" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#0e6b30"/>
<stop offset="1" stopColor="#083d1c"/>
</linearGradient>
<linearGradient id="bag3" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#57bc7c"/>
<stop offset="1" stopColor="#28aa58"/>
</linearGradient>
<linearGradient id="bag4" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#14532d"/>
<stop offset="1" stopColor="#0d381e"/>
</linearGradient>
<linearGradient id="bag5" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#0d361d"/>
<stop offset="1" stopColor="#071f11"/>
</linearGradient>
<linearGradient id="bag6" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#558367"/>
<stop offset="1" stopColor="#26603d"/>
</linearGradient>
<linearGradient id="bag7" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#2563eb"/>
<stop offset="1" stopColor="#19439f"/>
</linearGradient>
<linearGradient id="bag8" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#18419b"/>
<stop offset="1" stopColor="#0e2559"/>
</linearGradient>
<linearGradient id="bag9" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#628ef0"/>
<stop offset="1" stopColor="#366fec"/>
</linearGradient>
<linearGradient id="bag10" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#1e3a8a"/>
<stop offset="1" stopColor="#14275d"/>
</linearGradient>
<linearGradient id="bag11" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#13265b"/>
<stop offset="1" stopColor="#0b1634"/>
</linearGradient>
<linearGradient id="bag12" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#5d71aa"/>
<stop offset="1" stopColor="#304993"/>
</linearGradient>
</defs>
<ellipse cx="58.9" cy="86.0" rx="190" ry="62" fill="#22c55e" opacity=".3" filter="url(#bablur)"/>
<polygon points="-72.7,42.0 0.0,84.0 0.0,-32.0 -72.7,-74.0" fill="url(#bag1)" stroke="#8ad1a4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="72.7,42.0 0.0,84.0 0.0,-32.0 72.7,-74.0" fill="url(#bag2)" stroke="#8ad1a4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="0.0,-116.0 72.7,-74.0 0.0,-32.0 -72.7,-74.0" fill="url(#bag3)" stroke="#8ad1a4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-66.9,33.8 -56.7,39.6 -56.7,-55.5 -66.9,-61.4" fill="#fff" opacity=".13"/>
<polygon points="-77.9,-74.0 0.0,-29.0 0.0,-38.0 -77.9,-83.0" fill="url(#bag4)" stroke="#89a996" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="77.9,-74.0 0.0,-29.0 0.0,-38.0 77.9,-83.0" fill="url(#bag5)" stroke="#89a996" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="0.0,-128.0 77.9,-83.0 0.0,-38.0 -77.9,-83.0" fill="url(#bag6)" stroke="#89a996" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-71.7,-71.3 -60.8,-65.0 -60.8,-72.4 -71.7,-78.7" fill="#fff" opacity=".13"/>
<polygon points="-2.6,-96.5 23.4,-81.5 2.6,-69.5 -23.4,-84.5" fill="#03100a" stroke="#89a996" strokeOpacity=".5"/>
<g transform="matrix(0.8660 .5 0 1 -72.7 -74.0)">
<circle cx="42.0" cy="60.32" r="21.84" fill="#fff" opacity=".96"/>
<g transform="translate(42.0 60.32)">
<path d="M0 -12 C-14 -8 -17 8 -8 15 C6 12 14 0 0 -12z" fill="#16a34a" transform="scale(0.85)"/>
<path d="M0 -10 L-6 12" stroke="#fff" strokeWidth="1.4" fill="none" strokeOpacity=".7" transform="scale(0.85)"/>
</g>
</g>
<polygon points="34.6,104.0 107.4,146.0 107.4,30.0 34.6,-12.0" fill="url(#bag7)" stroke="#92b1f5" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="180.1,104.0 107.4,146.0 107.4,30.0 180.1,-12.0" fill="url(#bag8)" stroke="#92b1f5" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="107.4,-54.0 180.1,-12.0 107.4,30.0 34.6,-12.0" fill="url(#bag9)" stroke="#92b1f5" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="40.5,95.8 50.6,101.6 50.6,6.5 40.5,0.6" fill="#fff" opacity=".13"/>
<polygon points="29.4,-12.0 107.4,33.0 107.4,24.0 29.4,-21.0" fill="url(#bag10)" stroke="#8e9cc4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="185.3,-12.0 107.4,33.0 107.4,24.0 185.3,-21.0" fill="url(#bag11)" stroke="#8e9cc4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="107.4,-66.0 185.3,-21.0 107.4,24.0 29.4,-21.0" fill="url(#bag12)" stroke="#8e9cc4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="35.7,-9.3 46.6,-3.0 46.6,-10.4 35.7,-16.7" fill="#fff" opacity=".13"/>
<polygon points="104.8,-34.5 130.8,-19.5 110.0,-7.5 84.0,-22.5" fill="#03100a" stroke="#8e9cc4" strokeOpacity=".5"/>
<g transform="matrix(0.8660 .5 0 1 34.6 -12.0)">
<circle cx="42.0" cy="60.32" r="21.84" fill="#fff" opacity=".96"/>
<g transform="translate(42.0 60.32)">
<g transform="scale(0.85)">
<rect x="-8" y="-6" width="16" height="22" rx="6" fill="#3b82f6"/>
<rect x="-4" y="-14" width="8" height="9" rx="2" fill="#1d4ed8"/>
</g>
</g>
</g>
<ellipse cx="0.0" cy="-133.0" rx="56.3" ry="32.5" fill="none" stroke="#4ade80" strokeWidth="2.5" filter="url(#baglow)">
<animate attributeName="opacity" values=".25;1;.25" dur="2.4s" begin="0s" repeatCount="indefinite"/>
</ellipse>
<ellipse cx="107.4" cy="-71.0" rx="56.3" ry="32.5" fill="none" stroke="#60a5fa" strokeWidth="2.5" filter="url(#baglow)">
<animate attributeName="opacity" values=".25;1;.25" dur="2.4s" begin="1.2s" repeatCount="indefinite"/>
</ellipse>
<g transform="scale(1)">
<g opacity="0">
<animateMotion path="M0.0 -203.0 L0.0 -80.0" dur="3.6s" begin="0s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.82;1" dur="3.6s" begin="0s" repeatCount="indefinite"/>
<g transform="scale(0.62)">
<g>
<ellipse cx="4" cy="20" rx="24" ry="6" fill="#000" opacity=".4"/>
<path d="M-28 10C-20 -24 16 -28 30 -10C18 -16 -6 -8 -14 16Z" fill="#facc15" stroke="#a16207" strokeWidth="1.5"/>
<path d="M-20 6C-12 -14 12 -20 22 -11" fill="none" stroke="#fde68a" strokeWidth="2" strokeLinecap="round"/>
<circle cx="-24" cy="12" r="3" fill="#78350f"/>
</g>
</g>
</g>
</g>
<g transform="scale(1)">
<g opacity="0">
<animateMotion path="M107.4 -141.0 L107.4 -18.0" dur="3.6s" begin="1.2s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.82;1" dur="3.6s" begin="1.2s" repeatCount="indefinite"/>
<g transform="scale(0.62)">
<g transform="rotate(-25)">
<ellipse cx="6" cy="24" rx="17" ry="6" fill="#000" opacity=".4"/>
<rect x="-11" y="-30" width="22" height="46" rx="9" fill="#7dd3fc" fillOpacity=".6" stroke="#e0f2fe" strokeWidth="1.5"/>
<rect x="-4" y="-40" width="8" height="12" rx="2" fill="#bae6fd"/>
<rect x="-5" y="-44" width="10" height="6" rx="2" fill="#0284c7"/>
<rect x="-11" y="-8" width="22" height="10" fill="#0369a1" fillOpacity=".6"/>
<path d="M-6 -24v34" stroke="#fff" strokeOpacity=".65" strokeWidth="2.5" strokeLinecap="round"/>
</g>
</g>
</g>
</g>
<g transform="scale(1)">
<g opacity="0">
<animateMotion path="M107.4 -141.0 L107.4 -18.0" dur="3.6s" begin="2.4s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.12;.82;1" dur="3.6s" begin="2.4s" repeatCount="indefinite"/>
<g transform="scale(0.62)">
<g>
<ellipse cx="4" cy="22" rx="22" ry="6" fill="#000" opacity=".4"/>
<polygon points="-24,-4 -11,-22 9,-17 24,-6 21,13 6,22 -13,18 -25,6" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="1.5"/>
<polyline points="-11,-22 -2,0 9,-17" fill="none" stroke="#a8a29e" strokeWidth="1.2"/>
<polyline points="-25,6 -2,0 21,13" fill="none" stroke="#a8a29e" strokeWidth="1.2"/>
</g>
</g>
</g>
</g>
<g transform="translate(-65.8 80.0)">
<rect x="-44" y="-12" width="88" height="22" rx="11" fill="#0b1f16" stroke="#86efac" strokeOpacity=".6"/>
<text x="0" y="3" textAnchor="middle" fontSize="11" fontWeight="800" fill="#86efac" fontFamily="system-ui, sans-serif">ORGANIC</text>
</g>
<g transform="translate(41.6 142.0)">
<rect x="-44" y="-12" width="88" height="22" rx="11" fill="#0b1f16" stroke="#93c5fd" strokeOpacity=".6"/>
<text x="0" y="3" textAnchor="middle" fontSize="11" fontWeight="800" fill="#93c5fd" fontFamily="system-ui, sans-serif">INORGANIC</text>
</g>
<circle cx="-60.6" cy="-35.0" r="2.4" fill="#86efac">
<animate attributeName="cy" values="-35.0;-85.0" dur="4.0s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0;.9;0" dur="4.0s" repeatCount="indefinite"/>
</circle>
<circle cx="173.2" cy="67.0" r="2.4" fill="#86efac">
<animate attributeName="cy" values="67.0;17.0" dur="4.7s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0;.9;0" dur="4.7s" repeatCount="indefinite"/>
</circle>
<circle cx="112.6" cy="-51.0" r="2.4" fill="#86efac">
<animate attributeName="cy" values="-51.0;-101.0" dur="5.4s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0;.9;0" dur="5.4s" repeatCount="indefinite"/>
</circle>
<circle cx="34.6" cy="31.0" r="2.4" fill="#86efac">
<animate attributeName="cy" values="31.0;-19.0" dur="6.1s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0;.9;0" dur="6.1s" repeatCount="indefinite"/>
</circle>
<circle cx="-77.9" cy="-47.0" r="2.4" fill="#86efac">
<animate attributeName="cy" values="-47.0;-97.0" dur="6.8s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0;.9;0" dur="6.8s" repeatCount="indefinite"/>
</circle>
<circle cx="86.6" cy="5.0" r="2.4" fill="#86efac">
<animate attributeName="cy" values="5.0;-45.0" dur="7.5s" repeatCount="indefinite"/>
<animate attributeName="opacity" values="0;.9;0" dur="7.5s" repeatCount="indefinite"/>
</circle>
</svg>
  );
}
