import { useState } from "react";
import { DEVELOPERS } from "../../data/constants";
import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import Toggle from "../../components/ui/Toggle";
import { input } from "../../components/ui/styles";

export default function Settings() {
  const [tab, setTab] = useState("team");
  const [s, setS] = useState({ auto: true, sound: true, email: false, threshold: 60, port: "COM5" });
  const set = (k) => (v) => setS({ ...s, [k]: v });
  const rows = [["auto", "Auto Sorting", "Diverter moves automatically after classification"], ["sound", "Sound Notifications", "Beep on detection and bin full alerts"], ["email", "Email Alerts", "Send an email when a bin is almost full"]];
  return (
    <>
      <PageHeader title="Settings" sub="System settings and project team" />
      <div className="mb-5 flex w-fit gap-1 rounded-xl bg-surface p-1 shadow-sm">
        {[["team", "Project Team"], ["system", "System"]].map(([k, l]) => <button key={k} onClick={() => setTab(k)} className={`rounded-lg px-5 py-2 text-sm font-semibold transition ${tab === k ? "bg-brand-dark text-white" : "text-sub"}`}>{l}</button>)}
      </div>
      {tab === "team" ? (
        <div className="grid gap-4 md:grid-cols-2">
          {DEVELOPERS.map((d, i) => (
            <Card key={d.role} tilt>
              <div className="flex items-center gap-4" style={{ animationDelay: `${i * 80}ms` }}>
                <span className="grid h-14 w-14 place-items-center rounded-full bg-green-50 dark:bg-green-500/10 text-xl font-extrabold text-brand-dark dark:text-green-400">{d.role[0]}</span>
                <div><p className="text-xs font-semibold uppercase tracking-wider text-green-600">{d.role}</p><p className="text-lg font-bold">{d.name}</p><p className="text-sm text-muted">{d.email}</p></div>
              </div>
              <p className="mt-3 text-sm text-sub">{d.desc}</p>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="max-w-2xl">
          {rows.map(([k, t, d]) => <div key={k} className="flex items-center justify-between border-b border-line py-4"><div><p className="font-semibold">{t}</p><p className="text-sm text-muted">{d}</p></div><Toggle checked={s[k]} onChange={set(k)} /></div>)}
          <div className="py-4"><div className="mb-1 flex justify-between text-sm"><span className="font-semibold">Detection confidence threshold</span><b>{s.threshold}%</b></div><input type="range" min="30" max="95" value={s.threshold} onChange={(e) => set("threshold")(+e.target.value)} className="w-full accent-green-700" /></div>
          <div><label className="mb-1 block text-sm font-semibold">Arduino serial port</label><input className={input} value={s.port} onChange={(e) => set("port")(e.target.value)} /></div>
        </Card>
      )}
    </>
  );
}
