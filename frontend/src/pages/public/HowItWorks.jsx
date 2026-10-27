import { Link } from "react-router-dom";
import { STAGES } from "../../data/constants";
import PageHeader from "../../components/ui/PageHeader";
import Reveal from "../../components/ui/Reveal";
import Tilt from "../../components/ui/Tilt";
import { btn } from "../../components/ui/styles";

// Zigzag timeline: left aur right se alternate aata hai
export default function HowItWorks() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <PageHeader title="How it Works" sub="From waste input to sorted bin in six steps." />
      <ol className="relative mt-4">
        <span aria-hidden className="absolute left-5 top-0 h-full w-0.5 bg-gradient-to-b from-green-500 to-blue-500/20 md:left-1/2" />
        {STAGES.map((s, i) => {
          const left = i % 2 === 0;
          return (
            <li key={s.title} className="relative mb-8 pl-16 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
              <span className="absolute left-0 top-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-brand-dark text-white shadow-[0_4px_0_#14532d] md:left-1/2 md:-translate-x-1/2"><s.icon size={18} /></span>
              <Reveal from={left ? "left" : "right"} className={left ? "md:col-start-1" : "md:col-start-2"}>
                <Tilt max={8} lift={12}>
                  <div className="rounded-2xl border border-line bg-surface p-5 shadow-[0_7px_0_-1px_rgb(var(--edge)),0_20px_28px_-14px_rgba(0,0,0,.3)]">
                    <p className="text-xs font-bold tracking-widest text-green-600">STEP {i + 1}</p>
                    <h3 className="mt-1 text-lg font-bold text-ink">{s.title}</h3>
                    <p className="mt-1 text-sm text-muted">{s.desc}</p>
                  </div>
                </Tilt>
              </Reveal>
            </li>
          );
        })}
      </ol>
      <Reveal from="zoom" className="mt-6 text-center"><Link to="/login" className={btn}>Try the live dashboard</Link></Reveal>
    </div>
  );
}
