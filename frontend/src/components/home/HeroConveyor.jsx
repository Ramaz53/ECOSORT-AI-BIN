// 3D isometric AI conveyor: plastic bottles aur waste scan hote hain aur Organic/Inorganic bin mein sort hote hain (SVG animation, koi background nahi)
export default function HeroConveyor({ className = "" }) {
  return (
<svg className={className} viewBox="-404 -322 631 590" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AI conveyor belt sorting plastic bottles and waste into Organic and Inorganic bins">
<defs>
<filter id="hcglow" x="-40%" y="-40%" width="180%" height="180%">
<feGaussianBlur stdDeviation="3.5" result="b"/>
<feMerge>
<feMergeNode in="b"/>
<feMergeNode in="SourceGraphic"/>
</feMerge>
</filter>
<filter id="hcblur" x="-50%" y="-50%" width="200%" height="200%">
<feGaussianBlur stdDeviation="14"/>
</filter>
<linearGradient id="hcg1" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#16a34a"/>
<stop offset="1" stopColor="#0e6e32"/>
</linearGradient>
<linearGradient id="hcg2" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#0e6b30"/>
<stop offset="1" stopColor="#083d1c"/>
</linearGradient>
<linearGradient id="hcg3" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#57bc7c"/>
<stop offset="1" stopColor="#28aa58"/>
</linearGradient>
<linearGradient id="hcg4" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#14532d"/>
<stop offset="1" stopColor="#0d381e"/>
</linearGradient>
<linearGradient id="hcg5" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#0d361d"/>
<stop offset="1" stopColor="#071f11"/>
</linearGradient>
<linearGradient id="hcg6" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#558367"/>
<stop offset="1" stopColor="#26603d"/>
</linearGradient>
<linearGradient id="hcg7" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#2563eb"/>
<stop offset="1" stopColor="#19439f"/>
</linearGradient>
<linearGradient id="hcg8" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#18419b"/>
<stop offset="1" stopColor="#0e2559"/>
</linearGradient>
<linearGradient id="hcg9" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#628ef0"/>
<stop offset="1" stopColor="#366fec"/>
</linearGradient>
<linearGradient id="hcg10" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#1e3a8a"/>
<stop offset="1" stopColor="#14275d"/>
</linearGradient>
<linearGradient id="hcg11" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#13265b"/>
<stop offset="1" stopColor="#0b1634"/>
</linearGradient>
<linearGradient id="hcg12" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#5d71aa"/>
<stop offset="1" stopColor="#304993"/>
</linearGradient>
<linearGradient id="hcg13" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#475569"/>
<stop offset="1" stopColor="#303947"/>
</linearGradient>
<linearGradient id="hcg14" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#2e3845"/>
<stop offset="1" stopColor="#1a2027"/>
</linearGradient>
<linearGradient id="hcg15" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#7a8493"/>
<stop offset="1" stopColor="#556275"/>
</linearGradient>
<linearGradient id="hcg16" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#475569"/>
<stop offset="1" stopColor="#303947"/>
</linearGradient>
<linearGradient id="hcg17" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#2e3845"/>
<stop offset="1" stopColor="#1a2027"/>
</linearGradient>
<linearGradient id="hcg18" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#7a8493"/>
<stop offset="1" stopColor="#556275"/>
</linearGradient>
<linearGradient id="hcg19" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#475569"/>
<stop offset="1" stopColor="#303947"/>
</linearGradient>
<linearGradient id="hcg20" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#2e3845"/>
<stop offset="1" stopColor="#1a2027"/>
</linearGradient>
<linearGradient id="hcg21" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#7a8493"/>
<stop offset="1" stopColor="#556275"/>
</linearGradient>
<linearGradient id="hcg22" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#475569"/>
<stop offset="1" stopColor="#303947"/>
</linearGradient>
<linearGradient id="hcg23" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#2e3845"/>
<stop offset="1" stopColor="#1a2027"/>
</linearGradient>
<linearGradient id="hcg24" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#7a8493"/>
<stop offset="1" stopColor="#556275"/>
</linearGradient>
<linearGradient id="hcg25" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#2a3f38"/>
<stop offset="1" stopColor="#1c2a26"/>
</linearGradient>
<linearGradient id="hcg26" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#1b2924"/>
<stop offset="1" stopColor="#0f1715"/>
</linearGradient>
<linearGradient id="hcg27" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#65746f"/>
<stop offset="1" stopColor="#3b4e47"/>
</linearGradient>
<clipPath id="hcclip">
<polygon points="0.0,-76.0 65.8,-38.0 -315.2,182.0 -381.1,144.0"/>
</clipPath>
<linearGradient id="hcg28" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#1b2a26"/>
<stop offset="1" stopColor="#101a17"/>
</linearGradient>
<linearGradient id="hcg29" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#1b302a"/>
<stop offset="1" stopColor="#12201c"/>
</linearGradient>
<linearGradient id="hcg30" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#111f1b"/>
<stop offset="1" stopColor="#0a120f"/>
</linearGradient>
<linearGradient id="hcg31" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#5a6965"/>
<stop offset="1" stopColor="#2d403b"/>
</linearGradient>
<linearGradient id="hcg32" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#1c2e28"/>
<stop offset="1" stopColor="#131f1b"/>
</linearGradient>
<linearGradient id="hcg33" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#121e1a"/>
<stop offset="1" stopColor="#0a110f"/>
</linearGradient>
<linearGradient id="hcg34" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#5b6864"/>
<stop offset="1" stopColor="#2e3e39"/>
</linearGradient>
<linearGradient id="hcg35" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#1b302a"/>
<stop offset="1" stopColor="#12201c"/>
</linearGradient>
<linearGradient id="hcg36" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#111f1b"/>
<stop offset="1" stopColor="#0a120f"/>
</linearGradient>
<linearGradient id="hcg37" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#5a6965"/>
<stop offset="1" stopColor="#2d403b"/>
</linearGradient>
<linearGradient id="hcg38" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#1c2e28"/>
<stop offset="1" stopColor="#131f1b"/>
</linearGradient>
<linearGradient id="hcg39" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#121e1a"/>
<stop offset="1" stopColor="#0a110f"/>
</linearGradient>
<linearGradient id="hcg40" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#5b6864"/>
<stop offset="1" stopColor="#2e3e39"/>
</linearGradient>
<linearGradient id="hcg41" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#16251f"/>
<stop offset="1" stopColor="#0e1915"/>
</linearGradient>
<linearGradient id="hcg42" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#0e1814"/>
<stop offset="1" stopColor="#080e0b"/>
</linearGradient>
<linearGradient id="hcg43" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#57625d"/>
<stop offset="1" stopColor="#283630"/>
</linearGradient>
<linearGradient id="hcg44" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#0a1a14"/>
<stop offset="1" stopColor="#06110d"/>
</linearGradient>
<linearGradient id="hcg45" x1="0" y1="0" x2="0" y2="1">
<stop offset="0" stopColor="#06110d"/>
<stop offset="1" stopColor="#030907"/>
</linearGradient>
<linearGradient id="hcg46" x1="0" y1="0" x2="1" y2="0">
<stop offset="0" stopColor="#4e5a55"/>
<stop offset="1" stopColor="#1d2c26"/>
</linearGradient>
</defs>
<ellipse cx="-108.3" cy="107.5" rx="240" ry="105" fill="#22c55e" opacity=".22" filter="url(#hcblur)" transform="rotate(-8 -108.3 107.5)"/>
<polygon points="5.2,-37.0 57.2,-7.0 57.2,-77.0 5.2,-107.0" fill="url(#hcg1)" stroke="#8ad1a4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="109.1,-37.0 57.2,-7.0 57.2,-77.0 109.1,-107.0" fill="url(#hcg2)" stroke="#8ad1a4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="57.2,-137.0 109.1,-107.0 57.2,-77.0 5.2,-107.0" fill="url(#hcg3)" stroke="#8ad1a4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="9.4,-41.6 16.6,-37.4 16.6,-94.8 9.4,-99.0" fill="#fff" opacity=".13"/>
<polygon points="0.0,-107.0 57.2,-74.0 57.2,-83.0 0.0,-116.0" fill="url(#hcg4)" stroke="#89a996" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="114.3,-107.0 57.2,-74.0 57.2,-83.0 114.3,-116.0" fill="url(#hcg5)" stroke="#89a996" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="57.2,-149.0 114.3,-116.0 57.2,-83.0 0.0,-116.0" fill="url(#hcg6)" stroke="#89a996" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="4.6,-105.3 12.6,-100.6 12.6,-108.0 4.6,-112.6" fill="#fff" opacity=".13"/>
<polygon points="54.6,-129.5 80.5,-114.5 59.8,-102.5 33.8,-117.5" fill="#03100a" stroke="#89a996" strokeOpacity=".5"/>
<g transform="matrix(0.8660 .5 0 1 5.2 -107.0)">
<circle cx="30.0" cy="36.4" r="15.600000000000001" fill="#fff" opacity=".96"/>
<g transform="translate(30.0 36.4)">
<path d="M0 -12 C-14 -8 -17 8 -8 15 C6 12 14 0 0 -12z" fill="#16a34a" transform="scale(0.85)"/>
<path d="M0 -10 L-6 12" stroke="#fff" strokeWidth="1.4" fill="none" strokeOpacity=".7" transform="scale(0.85)"/>
</g>
</g>
<polygon points="83.1,8.0 135.1,38.0 135.1,-32.0 83.1,-62.0" fill="url(#hcg7)" stroke="#92b1f5" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="187.1,8.0 135.1,38.0 135.1,-32.0 187.1,-62.0" fill="url(#hcg8)" stroke="#92b1f5" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="135.1,-92.0 187.1,-62.0 135.1,-32.0 83.1,-62.0" fill="url(#hcg9)" stroke="#92b1f5" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="87.3,3.4 94.6,7.6 94.6,-49.8 87.3,-54.0" fill="#fff" opacity=".13"/>
<polygon points="77.9,-62.0 135.1,-29.0 135.1,-38.0 77.9,-71.0" fill="url(#hcg10)" stroke="#8e9cc4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="192.3,-62.0 135.1,-29.0 135.1,-38.0 192.3,-71.0" fill="url(#hcg11)" stroke="#8e9cc4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="135.1,-104.0 192.3,-71.0 135.1,-38.0 77.9,-71.0" fill="url(#hcg12)" stroke="#8e9cc4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="82.5,-60.3 90.5,-55.6 90.5,-63.0 82.5,-67.6" fill="#fff" opacity=".13"/>
<polygon points="132.5,-84.5 158.5,-69.5 137.7,-57.5 111.7,-72.5" fill="#03100a" stroke="#8e9cc4" strokeOpacity=".5"/>
<g transform="matrix(0.8660 .5 0 1 83.1 -62.0)">
<circle cx="30.0" cy="36.4" r="15.600000000000001" fill="#fff" opacity=".96"/>
<g transform="translate(30.0 36.4)">
<g transform="scale(0.85)">
<rect x="-8" y="-6" width="16" height="22" rx="6" fill="#3b82f6"/>
<rect x="-4" y="-14" width="8" height="9" rx="2" fill="#1d4ed8"/>
</g>
</g>
</g>
<polygon points="-16.5,11.5 -8.7,16.0 -8.7,-42.0 -16.5,-46.5" fill="url(#hcg13)" stroke="#a3aab4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-0.9,11.5 -8.7,16.0 -8.7,-42.0 -0.9,-46.5" fill="url(#hcg14)" stroke="#a3aab4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-8.7,-51.0 -0.9,-46.5 -8.7,-42.0 -16.5,-46.5" fill="url(#hcg15)" stroke="#a3aab4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="37.2,42.5 45.0,47.0 45.0,-11.0 37.2,-15.5" fill="url(#hcg16)" stroke="#a3aab4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="52.8,42.5 45.0,47.0 45.0,-11.0 52.8,-15.5" fill="url(#hcg17)" stroke="#a3aab4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="45.0,-20.0 52.8,-15.5 45.0,-11.0 37.2,-15.5" fill="url(#hcg18)" stroke="#a3aab4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-373.3,217.5 -365.5,222.0 -365.5,164.0 -373.3,159.5" fill="url(#hcg19)" stroke="#a3aab4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-357.7,217.5 -365.5,222.0 -365.5,164.0 -357.7,159.5" fill="url(#hcg20)" stroke="#a3aab4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-365.5,155.0 -357.7,159.5 -365.5,164.0 -373.3,159.5" fill="url(#hcg21)" stroke="#a3aab4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-319.6,248.5 -311.8,253.0 -311.8,195.0 -319.6,190.5" fill="url(#hcg22)" stroke="#a3aab4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-304.0,248.5 -311.8,253.0 -311.8,195.0 -304.0,190.5" fill="url(#hcg23)" stroke="#a3aab4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-311.8,186.0 -304.0,190.5 -311.8,195.0 -319.6,190.5" fill="url(#hcg24)" stroke="#a3aab4" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-381.1,164.0 -315.2,202.0 -315.2,182.0 -381.1,144.0" fill="url(#hcg25)" stroke="#949f9b" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="65.8,-18.0 -315.2,202.0 -315.2,182.0 65.8,-38.0" fill="url(#hcg26)" stroke="#949f9b" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="0.0,-76.0 65.8,-38.0 -315.2,182.0 -381.1,144.0" fill="url(#hcg27)" stroke="#949f9b" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-375.8,165.0 -366.6,170.4 -366.6,154.0 -375.8,148.6" fill="#fff" opacity=".13"/>
<polygon points="0.0,-76.0 65.8,-38.0 -315.2,182.0 -381.1,144.0" fill="url(#hcg28)"/>
<g clipPath="url(#hcclip)">
<g stroke="#2f5247" strokeWidth="2" opacity=".9">
<animateTransform attributeName="transform" type="translate" from="0 0" to="-26.0 15" dur="1s" repeatCount="indefinite"/>
<line x1="26.0" y1="-91.0" x2="91.8" y2="-53.0"/>
<line x1="0.0" y1="-76.0" x2="65.8" y2="-38.0"/>
<line x1="-26.0" y1="-61.0" x2="39.8" y2="-23.0"/>
<line x1="-52.0" y1="-46.0" x2="13.9" y2="-8.0"/>
<line x1="-77.9" y1="-31.0" x2="-12.1" y2="7.0"/>
<line x1="-103.9" y1="-16.0" x2="-38.1" y2="22.0"/>
<line x1="-129.9" y1="-1.0" x2="-64.1" y2="37.0"/>
<line x1="-155.9" y1="14.0" x2="-90.1" y2="52.0"/>
<line x1="-181.9" y1="29.0" x2="-116.0" y2="67.0"/>
<line x1="-207.8" y1="44.0" x2="-142.0" y2="82.0"/>
<line x1="-233.8" y1="59.0" x2="-168.0" y2="97.0"/>
<line x1="-259.8" y1="74.0" x2="-194.0" y2="112.0"/>
<line x1="-285.8" y1="89.0" x2="-220.0" y2="127.0"/>
<line x1="-311.8" y1="104.0" x2="-246.0" y2="142.0"/>
<line x1="-337.7" y1="119.0" x2="-271.9" y2="157.0"/>
<line x1="-363.7" y1="134.0" x2="-297.9" y2="172.0"/>
<line x1="-389.7" y1="149.0" x2="-323.9" y2="187.0"/>
</g>
</g>
<polygon points="-385.4,141.5 -381.1,144.0 -381.1,132.0 -385.4,129.5" fill="url(#hcg29)" stroke="#8d9794" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="0.0,-76.0 -381.1,144.0 -381.1,132.0 0.0,-88.0" fill="url(#hcg30)" stroke="#8d9794" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-4.3,-90.5 0.0,-88.0 -381.1,132.0 -385.4,129.5" fill="url(#hcg31)" stroke="#8d9794" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-385.0,140.5 -384.4,140.9 -384.4,131.0 -385.0,130.7" fill="#fff" opacity=".13"/>
<line x1="0.0" y1="-88.0" x2="-381.1" y2="132.0" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" filter="url(#hcglow)"/>
<line x1="65.8" y1="-50.0" x2="-315.2" y2="170.0" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" filter="url(#hcglow)"/>
<polygon points="-177.5,26.5 -111.7,64.5 -146.4,84.5 -212.2,46.5" fill="#4ade80">
<animate attributeName="opacity" values=".1;.5;.1" dur="1.8s" repeatCount="indefinite"/>
</polygon>
<polygon points="-218.2,48.0 -206.1,55.0 -206.1,-110.0 -218.2,-117.0" fill="url(#hcg32)" stroke="#8d9693" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-192.3,47.0 -206.1,55.0 -206.1,-110.0 -192.3,-118.0" fill="url(#hcg33)" stroke="#8d9693" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-204.4,-125.0 -192.3,-118.0 -206.1,-110.0 -218.2,-117.0" fill="url(#hcg34)" stroke="#8d9693" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-217.3,32.1 -215.6,33.0 -215.6,-102.3 -217.3,-103.2" fill="#fff" opacity=".13"/>
<g opacity="0">
<animateMotion path="M-348.1 147.0 L26.0 -69.0 Q103.9 -124.0 135.1 -80.0" dur="11s" begin="0s" repeatCount="indefinite" rotate="0"/>
<animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.04;.9;1" dur="11s" begin="0s" repeatCount="indefinite"/>
<g transform="rotate(-25)">
<ellipse cx="6" cy="24" rx="17" ry="6" fill="#000" opacity=".4"/>
<rect x="-11" y="-30" width="22" height="46" rx="9" fill="#7dd3fc" fillOpacity=".6" stroke="#e0f2fe" strokeWidth="1.5"/>
<rect x="-4" y="-40" width="8" height="12" rx="2" fill="#bae6fd"/>
<rect x="-5" y="-44" width="10" height="6" rx="2" fill="#0284c7"/>
<rect x="-11" y="-8" width="22" height="10" fill="#0369a1" fillOpacity=".6"/>
<path d="M-6 -24v34" stroke="#fff" strokeOpacity=".65" strokeWidth="2.5" strokeLinecap="round"/>
</g>
<g opacity="0">
<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.27;.3;.4;.43;1" dur="11s" begin="0s" repeatCount="indefinite"/>
<path d="M-34 -28V-40H-22M34 -28V-40H22M-34 18V30H-22M34 18V30H22" stroke="#4ade80" strokeWidth="2.5" fill="none"/>
<rect x="-34" y="-62" width="94" height="17" rx="4" fill="#22c55e"/>
<text x="-29" y="-50" fontSize="11" fontWeight="700" fill="#04210f" fontFamily="system-ui, sans-serif">Inorganic 98%</text>
</g>
</g>
<g opacity="0">
<animateMotion path="M-348.1 147.0 L26.0 -69.0 Q26.0 -169.0 57.2 -125.0" dur="11s" begin="-2.2s" repeatCount="indefinite" rotate="0"/>
<animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.04;.9;1" dur="11s" begin="-2.2s" repeatCount="indefinite"/>
<g>
<ellipse cx="4" cy="20" rx="24" ry="6" fill="#000" opacity=".4"/>
<path d="M-28 10C-20 -24 16 -28 30 -10C18 -16 -6 -8 -14 16Z" fill="#facc15" stroke="#a16207" strokeWidth="1.5"/>
<path d="M-20 6C-12 -14 12 -20 22 -11" fill="none" stroke="#fde68a" strokeWidth="2" strokeLinecap="round"/>
<circle cx="-24" cy="12" r="3" fill="#78350f"/>
</g>
<g opacity="0">
<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.27;.3;.4;.43;1" dur="11s" begin="-2.2s" repeatCount="indefinite"/>
<path d="M-34 -28V-40H-22M34 -28V-40H22M-34 18V30H-22M34 18V30H22" stroke="#4ade80" strokeWidth="2.5" fill="none"/>
<rect x="-34" y="-62" width="94" height="17" rx="4" fill="#22c55e"/>
<text x="-29" y="-50" fontSize="11" fontWeight="700" fill="#04210f" fontFamily="system-ui, sans-serif">Organic 97%</text>
</g>
</g>
<g opacity="0">
<animateMotion path="M-348.1 147.0 L26.0 -69.0 Q103.9 -124.0 135.1 -80.0" dur="11s" begin="-4.4s" repeatCount="indefinite" rotate="0"/>
<animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.04;.9;1" dur="11s" begin="-4.4s" repeatCount="indefinite"/>
<g>
<ellipse cx="4" cy="22" rx="22" ry="6" fill="#000" opacity=".4"/>
<polygon points="-24,-4 -11,-22 9,-17 24,-6 21,13 6,22 -13,18 -25,6" fill="#f5f5f4" stroke="#d6d3d1" strokeWidth="1.5"/>
<polyline points="-11,-22 -2,0 9,-17" fill="none" stroke="#a8a29e" strokeWidth="1.2"/>
<polyline points="-25,6 -2,0 21,13" fill="none" stroke="#a8a29e" strokeWidth="1.2"/>
</g>
<g opacity="0">
<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.27;.3;.4;.43;1" dur="11s" begin="-4.4s" repeatCount="indefinite"/>
<path d="M-34 -28V-40H-22M34 -28V-40H22M-34 18V30H-22M34 18V30H22" stroke="#4ade80" strokeWidth="2.5" fill="none"/>
<rect x="-34" y="-62" width="94" height="17" rx="4" fill="#22c55e"/>
<text x="-29" y="-50" fontSize="11" fontWeight="700" fill="#04210f" fontFamily="system-ui, sans-serif">Inorganic 94%</text>
</g>
</g>
<g opacity="0">
<animateMotion path="M-348.1 147.0 L26.0 -69.0 Q103.9 -124.0 135.1 -80.0" dur="11s" begin="-6.6s" repeatCount="indefinite" rotate="0"/>
<animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.04;.9;1" dur="11s" begin="-6.6s" repeatCount="indefinite"/>
<g transform="rotate(-25)">
<ellipse cx="6" cy="24" rx="17" ry="6" fill="#000" opacity=".4"/>
<rect x="-11" y="-30" width="22" height="46" rx="9" fill="#7dd3fc" fillOpacity=".6" stroke="#e0f2fe" strokeWidth="1.5"/>
<rect x="-4" y="-40" width="8" height="12" rx="2" fill="#bae6fd"/>
<rect x="-5" y="-44" width="10" height="6" rx="2" fill="#0284c7"/>
<rect x="-11" y="-8" width="22" height="10" fill="#0369a1" fillOpacity=".6"/>
<path d="M-6 -24v34" stroke="#fff" strokeOpacity=".65" strokeWidth="2.5" strokeLinecap="round"/>
</g>
<g opacity="0">
<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.27;.3;.4;.43;1" dur="11s" begin="-6.6s" repeatCount="indefinite"/>
<path d="M-34 -28V-40H-22M34 -28V-40H22M-34 18V30H-22M34 18V30H22" stroke="#4ade80" strokeWidth="2.5" fill="none"/>
<rect x="-34" y="-62" width="94" height="17" rx="4" fill="#22c55e"/>
<text x="-29" y="-50" fontSize="11" fontWeight="700" fill="#04210f" fontFamily="system-ui, sans-serif">Inorganic 96%</text>
</g>
</g>
<g opacity="0">
<animateMotion path="M-348.1 147.0 L26.0 -69.0 Q26.0 -169.0 57.2 -125.0" dur="11s" begin="-8.8s" repeatCount="indefinite" rotate="0"/>
<animate attributeName="opacity" values="0;1;1;0" keyTimes="0;.04;.9;1" dur="11s" begin="-8.8s" repeatCount="indefinite"/>
<g>
<ellipse cx="4" cy="20" rx="24" ry="6" fill="#000" opacity=".4"/>
<path d="M-28 10C-20 -24 16 -28 30 -10C18 -16 -6 -8 -14 16Z" fill="#facc15" stroke="#a16207" strokeWidth="1.5"/>
<path d="M-20 6C-12 -14 12 -20 22 -11" fill="none" stroke="#fde68a" strokeWidth="2" strokeLinecap="round"/>
<circle cx="-24" cy="12" r="3" fill="#78350f"/>
</g>
<g opacity="0">
<animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;.27;.3;.4;.43;1" dur="11s" begin="-8.8s" repeatCount="indefinite"/>
<path d="M-34 -28V-40H-22M34 -28V-40H22M-34 18V30H-22M34 18V30H22" stroke="#4ade80" strokeWidth="2.5" fill="none"/>
<rect x="-34" y="-62" width="94" height="17" rx="4" fill="#22c55e"/>
<text x="-29" y="-50" fontSize="11" fontWeight="700" fill="#04210f" fontFamily="system-ui, sans-serif">Organic 95%</text>
</g>
</g>
<polygon points="-161.9,-73.5 -212.2,46.5 -146.4,84.5" fill="#4ade80" opacity=".16">
<animate attributeName="opacity" values=".08;.26;.08" dur="1.8s" repeatCount="indefinite"/>
</polygon>
<polygon points="-315.2,182.0 -310.9,184.5 -310.9,172.5 -315.2,170.0" fill="url(#hcg35)" stroke="#8d9794" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="70.1,-35.5 -310.9,184.5 -310.9,172.5 70.1,-47.5" fill="url(#hcg36)" stroke="#8d9794" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="65.8,-50.0 70.1,-47.5 -310.9,172.5 -315.2,170.0" fill="url(#hcg37)" stroke="#8d9794" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-314.9,181.0 -314.3,181.4 -314.3,171.5 -314.9,171.2" fill="#fff" opacity=".13"/>
<polygon points="-133.4,97.0 -121.2,104.0 -121.2,-61.0 -133.4,-68.0" fill="url(#hcg38)" stroke="#8d9693" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-107.4,96.0 -121.2,104.0 -121.2,-61.0 -107.4,-69.0" fill="url(#hcg39)" stroke="#8d9693" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-119.5,-76.0 -107.4,-69.0 -121.2,-61.0 -133.4,-68.0" fill="url(#hcg40)" stroke="#8d9693" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-132.4,81.1 -130.7,82.0 -130.7,-53.3 -132.4,-54.2" fill="#fff" opacity=".13"/>
<polygon points="-221.7,-95.0 -124.7,-39.0 -124.7,-62.0 -221.7,-118.0" fill="url(#hcg41)" stroke="#8a928f" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-102.2,-52.0 -124.7,-39.0 -124.7,-62.0 -102.2,-75.0" fill="url(#hcg42)" stroke="#8a928f" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-199.2,-131.0 -102.2,-75.0 -124.7,-62.0 -221.7,-118.0" fill="url(#hcg43)" stroke="#8a928f" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-213.9,-92.8 -200.4,-85.0 -200.4,-103.8 -213.9,-111.7" fill="#fff" opacity=".13"/>
<ellipse cx="-161.9" cy="-69.5" rx="13" ry="8" fill="#0f172a" stroke="#4ade80"/>
<circle cx="-161.9" cy="-69.5" r="4" fill="#bbf7d0">
<animate attributeName="opacity" values="1;.3;1" dur="1.2s" repeatCount="indefinite"/>
</circle>
<polygon points="-220.0,-105.0 -147.2,-63.0 -147.2,-127.0 -220.0,-169.0" fill="url(#hcg44)" stroke="#4ade80" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-103.9,-88.0 -147.2,-63.0 -147.2,-127.0 -103.9,-152.0" fill="url(#hcg45)" stroke="#4ade80" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-176.7,-194.0 -103.9,-152.0 -147.2,-127.0 -220.0,-169.0" fill="url(#hcg46)" stroke="#4ade80" strokeOpacity=".35" strokeWidth=".8" strokeLinejoin="round"/>
<polygon points="-214.2,-108.0 -204.0,-102.2 -204.0,-154.6 -214.2,-160.5" fill="#fff" opacity=".13"/>
<g transform="matrix(0.8660 .5 0 1 -220.0 -169.0)" filter="url(#hcglow)">
<g transform="translate(14 31)">
<path d="M0 -12 C-14 -8 -17 8 -8 15 C6 12 14 0 0 -12z" fill="#4ade80" transform="scale(0.9)"/>
<path d="M0 -10 L-6 12" stroke="#fff" strokeWidth="1.4" fill="none" strokeOpacity=".7" transform="scale(0.9)"/>
</g>
<text x="52" y="30" fontSize="14" fontWeight="800" fill="#4ade80" fontFamily="system-ui, sans-serif">EcoSort</text>
<text x="52" y="47" fontSize="13" fontWeight="800" fill="#bbf7d0" fontFamily="system-ui, sans-serif">AI</text>
</g>
<g transform="translate(93.5 -154.0)">
<rect x="-44" y="-12" width="88" height="22" rx="11" fill="#0b1f16" stroke="#86efac" strokeOpacity=".6"/>
<text x="0" y="3" textAnchor="middle" fontSize="11" fontWeight="800" fill="#86efac" fontFamily="system-ui, sans-serif">ORGANIC</text>
</g>
<g transform="translate(171.5 -109.0)">
<rect x="-44" y="-12" width="88" height="22" rx="11" fill="#0b1f16" stroke="#93c5fd" strokeOpacity=".6"/>
<text x="0" y="3" textAnchor="middle" fontSize="11" fontWeight="800" fill="#93c5fd" fontFamily="system-ui, sans-serif">INORGANIC</text>
</g>
</svg>
  );
}
// amna