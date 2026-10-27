import Reveal from "./Reveal";
import Tilt from "./Tilt";

// from="auto": card apni position ke hisab se left/right/bottom se aata hai. tilt = mouse par 3D.
export default function Card({ title, action, children, className = "", tilt = false, from = "auto", delay = 0 }) {
  const span = className.split(" ").filter((c) => c.includes("col-span")).join(" ");
  const body = (
    <section className={`h-full rounded-2xl border border-line bg-surface/75 p-5 backdrop-blur-md shadow-[0_6px_0_-1px_rgb(var(--edge)),0_18px_30px_-14px_rgba(0,0,0,.3)] transition duration-300 hover:-translate-y-0.5 hover:border-green-400/50 ${className}`}>
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3 className="font-bold text-ink">{title}</h3>
          {action}
        </div>
      )}
      {children}
    </section>
  );
  return <Reveal from={from} delay={delay} className={`h-full ${span}`}>{tilt ? <Tilt max={6} lift={10} className="h-full">{body}</Tilt> : body}</Reveal>;
}
