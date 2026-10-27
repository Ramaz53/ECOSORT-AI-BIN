import { useState } from "react";
import { Search, X } from "lucide-react";
import { useSystem } from "../../context/SystemContext";
import { CLASSES, CLASS_NAMES } from "../../data/constants";
import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import ItemThumb from "../../components/live/ItemThumb";
import { input } from "../../components/ui/styles";

const fmt = (t) => new Date(t).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });

export default function WasteRecords() {
  const { records } = useSystem();
  const [f, setF] = useState("All");
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(null);
  const rows = records.filter((r) => (f === "All" || r.cls === f) && r.item.toLowerCase().includes(q.toLowerCase()));
  const shown = rows.slice(0, 30);

  return (
    <>
      <PageHeader title="Scan History" sub="Every scanned item with its image">
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative"><Search size={16} className="absolute left-3 top-3.5 text-muted" /><input className={input + " !w-48 !py-2.5 !pl-9 text-sm"} placeholder="Search item..." value={q} onChange={(e) => setQ(e.target.value)} /></div>
          {["All", ...CLASS_NAMES].map((k) => <button key={k} onClick={() => setF(k)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${f === k ? "bg-brand-dark text-white dark:bg-green-400 dark:text-slate-950" : "border border-line bg-surface/70 text-sub hover:border-green-400/60"}`}>{k}</button>)}
        </div>
      </PageHeader>

      <Card className="overflow-x-auto !p-0" from="bottom">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-soft/70 text-muted"><tr>{["Image", "Item", "Category", "Confidence", "Weight", "Date & Time"].map((h) => <th key={h} className="px-5 py-3 font-semibold">{h}</th>)}</tr></thead>
          <tbody>
            {shown.map((r) => (
              <tr key={r.id} className="border-t border-line transition hover:bg-green-50/40 dark:hover:bg-green-500/5">
                <td className="px-5 py-2.5">
                  <button onClick={() => setSel(r)} className="group block overflow-hidden rounded-lg ring-1 ring-line transition hover:ring-2 hover:ring-green-400">
                    <ItemThumb cls={r.cls} item={r.item} id={r.id} src={r.img} className="h-14 w-[74px] transition duration-300 group-hover:scale-110" />
                  </button>
                </td>
                <td className="px-5 py-2.5 font-semibold text-ink">{r.item}</td>
                <td className="px-5 py-2.5"><span className={`rounded-full px-3 py-1 text-xs font-bold text-white ${CLASSES[r.cls].chip}`}>{r.cls}</span></td>
                <td className="px-5 py-2.5 text-sub">{r.conf}%</td>
                <td className="px-5 py-2.5 text-sub">{r.kg} kg</td>
                <td className="px-5 py-2.5 text-sub">{fmt(r.at)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {!shown.length && <p className="p-8 text-center text-muted">No scans found.</p>}
      </Card>
      <p className="mt-3 text-sm text-muted">Showing {shown.length} of {rows.length} scans · click an image to enlarge</p>

      {sel && (
        <div className="fixed inset-0 z-50 grid animate-fadeUp place-items-center bg-black/70 p-4 backdrop-blur-sm" onClick={() => setSel(null)}>
          <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-md animate-zoomIn overflow-hidden rounded-3xl border border-line bg-surface shadow-2xl">
            <ItemThumb cls={sel.cls} item={sel.item} id={sel.id} src={sel.img} className="aspect-[4/3] w-full" />
            <button onClick={() => setSel(null)} className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white transition hover:bg-red-500"><X size={18} /></button>
            <div className="p-5">
              <div className="flex items-center justify-between"><h3 className="text-xl font-extrabold text-ink">{sel.item}</h3><span className={`rounded-full px-3 py-1 text-xs font-bold text-white ${CLASSES[sel.cls].chip}`}>{sel.cls}</span></div>
              <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                {[["Confidence", `${sel.conf}%`], ["Weight", `${sel.kg} kg`], ["Inference", `${sel.ms} ms`], ["Sorted to", `${sel.cls} bin`], ["Scanned", fmt(sel.at)]].map(([k, v]) => <div key={k} className="rounded-xl bg-soft p-3"><dt className="text-xs text-muted">{k}</dt><dd className="font-semibold text-ink">{v}</dd></div>)}
              </dl>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
