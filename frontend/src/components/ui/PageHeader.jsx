import Reveal from "./Reveal";

export default function PageHeader({ title, sub, children }) {
  return (
    <Reveal from="top" className="mb-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-ink">{title}</h1>
          {sub && <p className="mt-1 text-muted">{sub}</p>}
        </div>
        {children}
      </div>
    </Reveal>
  );
}
