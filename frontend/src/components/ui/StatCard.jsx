import Reveal from "./Reveal";
import Tilt from "./Tilt";

export default function StatCard({ title, value, sub, icon, soft, text, bar, percent, delay = 0 }) {
  return (
    <Reveal from="top" delay={delay} className="h-full">
      <Tilt max={10} lift={16} className="h-full">
        <div className={`h-full rounded-2xl border p-5 shadow-[0_7px_0_-1px_rgb(var(--edge)),0_20px_30px_-14px_rgba(0,0,0,.3)] ${soft}`}>
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-surface text-2xl shadow-[0_4px_0_rgb(var(--edge))]" style={{ transform: "translateZ(30px)" }}>{icon}</div>
            <div>
              <p className="text-sm font-semibold text-sub">{title}</p>
              <p className={`text-3xl font-extrabold ${text}`} style={{ transform: "translateZ(20px)" }}>{value}</p>
            </div>
          </div>
          {percent !== undefined && (
            <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-track shadow-inner">
              <div className={`h-full rounded-full transition-all duration-1000 ${bar}`} style={{ width: `${percent}%` }} />
            </div>
          )}
          {sub && <p className="mt-2 text-xs text-muted">{sub}</p>}
        </div>
      </Tilt>
    </Reveal>
  );
}
