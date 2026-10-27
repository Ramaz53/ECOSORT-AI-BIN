import { STAGES } from "../../data/constants";
import Reveal from "../ui/Reveal";
import Tilt from "../ui/Tilt";

const DIRS = ["left", "top", "bottom", "top", "bottom", "right"];

// active undefined => sirf display (public pages)
export default function PipelineStepper({ active, showDesc = false }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {STAGES.map((s, i) => {
        const on = active === i;
        const done = active !== undefined && i < active;
        return (
          <Reveal key={s.title} from={DIRS[i]} delay={i * 80} className="h-full">
            <Tilt max={14} lift={14} className="h-full">
              <div style={{ transform: on ? "translateZ(30px)" : undefined }}
                className={`h-full rounded-2xl border p-4 transition-all duration-500 ${on ? "border-green-500 bg-green-50 shadow-[0_8px_0_-1px_rgba(34,197,94,.45),0_22px_30px_-12px_rgba(22,163,74,.5)] dark:bg-green-500/10" : done ? "border-green-300 bg-surface shadow-[0_6px_0_-1px_rgb(var(--edge))] dark:border-green-500/40" : "border-line bg-surface shadow-[0_6px_0_-1px_rgb(var(--edge)),0_14px_24px_-14px_rgba(0,0,0,.35)]"}`}>
                <span className={`grid h-10 w-10 place-items-center rounded-xl shadow-[0_3px_0_rgba(0,0,0,.18)] ${on || done ? "bg-brand-dark text-white" : "bg-track text-muted"}`}><s.icon size={18} /></span>
                <p className="mt-3 text-xs font-semibold text-muted">STEP {i + 1}</p>
                <h4 className="text-sm font-bold text-ink">{s.title}</h4>
                {showDesc && <p className="mt-1 text-xs text-muted">{s.desc}</p>}
              </div>
            </Tilt>
          </Reveal>
        );
      })}
    </div>
  );
}
