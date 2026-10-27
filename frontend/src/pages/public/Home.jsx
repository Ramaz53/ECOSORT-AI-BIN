import { Link } from "react-router-dom";
import { ArrowRight, Play, ScanLine, Split, Leaf } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import PipelineStepper from "../../components/live/PipelineStepper";
import HeroConveyor from "../../components/home/HeroConveyor";
import Reveal from "../../components/ui/Reveal";
import Tilt from "../../components/ui/Tilt";
import { btn, btnOutline } from "../../components/ui/styles";

const FEATURES = [
  [ScanLine, "AI Detection", "High accuracy with deep learning", "left"],
  [Split, "Automatic Sorting", "No manual effort required", "bottom"],
  [Leaf, "Sustainable Future", "Reduce waste, save the planet", "right"],
];

export default function Home() {
  const { user } = useAuth();
  return (
    <div className="mx-auto max-w-6xl px-5">
      {/* Hero: left text, right AI conveyor */}
      <section className="grid items-center gap-8 py-10 md:grid-cols-2 lg:py-14">
        <div>
          <Reveal from="top"><span className="inline-block text-xs font-semibold tracking-[0.25em] text-green-700 dark:text-green-400">SMARTER TODAY, CLEANER TOMORROW</span></Reveal>
          <Reveal from="left" delay={100}>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">AI-Powered Waste Segregation for a <span className="animate-shimmer bg-gradient-to-r from-green-500 via-lime-300 to-green-500 bg-[length:200%_auto] bg-clip-text text-transparent">Greener Planet</span></h1>
          </Reveal>
          <Reveal from="left" delay={200}><p className="mt-4 max-w-md text-sub">EcoSort AI uses computer vision and machine learning to automatically identify and segregate waste into organic and inorganic, making recycling easier, faster and more efficient.</p></Reveal>
          <Reveal from="bottom" delay={300}>
            <div className="mt-7 flex flex-wrap gap-4">
              <Link to={user ? "/dashboard" : "/login"} className={btn}>Get Started <ArrowRight size={18} /></Link>
              <Link to="/how-it-works" className={btnOutline}><Play size={16} /> Watch Demo</Link>
            </div>
          </Reveal>
        </div>
        <Reveal from="right" delay={150}>
          <div className="relative">
            <div aria-hidden className="absolute inset-0 rounded-full bg-green-500/10 blur-3xl" />
            <Tilt max={10} lift={22} glare={false} glow={false} className="group relative">
              <HeroConveyor className="w-full cursor-pointer drop-shadow-[0_25px_35px_rgba(0,0,0,.55)] transition duration-500 group-hover:scale-[1.04] group-hover:drop-shadow-[0_0_35px_rgba(74,222,128,.55)]" />
            </Tilt>
          </div>
        </Reveal>
      </section>

      {/* 3 small feature boxes */}
      <section className="grid gap-4 pb-14 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_auto]">
        {FEATURES.map(([Icon, t, d, from], i) => (
          <Reveal key={t} from={from} delay={i * 100}>
            <div className="flex h-full items-center gap-3 rounded-2xl border border-line bg-surface/70 p-4 shadow-[0_5px_0_-1px_rgb(var(--edge))] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-green-400/60 hover:shadow-[0_0_30px_-8px_rgba(74,222,128,.5)]">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-green-500/40 bg-green-500/10 text-green-600 dark:text-green-400"><Icon size={20} /></span>
              <div><h3 className="text-sm font-bold text-ink">{t}</h3><p className="text-xs text-muted">{d}</p></div>
            </div>
          </Reveal>
        ))}
        <Reveal from="zoom" delay={350} className="hidden lg:block">
          <div className="flex h-full items-center gap-3 px-2">
            <span className="grid h-14 w-14 place-items-center rounded-full border border-green-500/50 bg-green-500/10 text-green-500 shadow-[0_0_24px_rgba(74,222,128,.35)]"><Leaf size={24} /></span>
            <p className="text-xs font-semibold leading-snug text-sub">Reduce<br />Reuse<br />Recycle</p>
          </div>
        </Reveal>
      </section>

      <section className="pb-16">
        <Reveal from="top" className="mb-8 text-center"><h2 className="text-2xl font-extrabold text-ink">How it flows</h2><p className="mt-1 text-muted">Six simple steps from hopper to bin</p></Reveal>
        <PipelineStepper showDesc />
      </section>

      <Reveal from="zoom" className="pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-green-700 to-emerald-600 p-8 text-center shadow-[0_10px_0_-2px_#14532d,0_30px_50px_-20px_rgba(21,128,61,.6)] sm:p-12">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">Ready to sort smarter?</h2>
          <p className="mx-auto mt-2 max-w-md text-green-100">Log in to open the live dashboard and watch the bin work.</p>
          <Link to={user ? "/dashboard" : "/login"} className="mt-6 inline-flex rounded-xl bg-white px-6 py-3 font-bold text-green-800 shadow-[0_5px_0_#bbf7d0] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none">{user ? "Open Dashboard" : "Login"}</Link>
        </div>
      </Reveal>
    </div>
  );
}
