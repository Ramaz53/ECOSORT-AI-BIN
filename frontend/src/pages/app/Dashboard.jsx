import { ScanLine, Trash2, Zap, Cog } from "lucide-react";
import { useSystem, ago } from "../../context/SystemContext";
import { CLASSES, CLASS_NAMES } from "../../data/constants";
import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import StatCard from "../../components/ui/StatCard";
import StatusPill from "../../components/ui/StatusPill";
import CameraFeed from "../../components/live/CameraFeed";

const ICONS = { detect: ScanLine, sorted: Trash2, sensor: Zap, diverter: Cog };

export default function Dashboard() {
  const { pct, weight, total, running, stage, det, activity, status } = useSystem();
  return (
    <>
      <PageHeader title="Dashboard" sub="Real-time overview of your waste sorting system">
        <span className="rounded-full border border-line bg-surface/70 px-4 py-1.5 text-sm font-semibold text-sub backdrop-blur">Total waste: <b className="text-ink">{total.toFixed(1)} kg</b></span>
      </PageHeader>
      <div className="grid gap-4 sm:grid-cols-2">
        {CLASS_NAMES.map((k, i) => (
          <StatCard key={k} delay={i * 100} title={k} icon={CLASSES[k].emoji} value={`${pct[k]}%`} sub={`${weight[k].toFixed(1)} kg`} percent={pct[k]} soft={CLASSES[k].soft} text={CLASSES[k].text} bar={CLASSES[k].bar} />
        ))}
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        <Card title="System Status" className="lg:col-span-2" action={<StatusPill on={running}>{running ? "Online" : "Idle"}</StatusPill>}>
          <div className="mb-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {status.map((s) => (
              <div key={s.name} className="rounded-xl bg-soft p-3"><p className="text-xs text-muted">{s.name}</p><p className="font-semibold text-green-700 dark:text-green-400">{s.state}</p></div>
            ))}
          </div>
          <CameraFeed det={det} running={running} stage={stage} className="aspect-[16/7]" />
        </Card>
        <Card title="Recent Activity">
          <ul className="space-y-3">
            {activity.map((a) => {
              const Icon = ICONS[a.type] || Zap;
              return (
                <li key={a.id} className="flex animate-fadeUp items-center gap-3">
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${a.cls ? CLASSES[a.cls].soft : "bg-track"}`}><Icon size={16} className={a.cls ? CLASSES[a.cls].text : "text-muted"} /></span>
                  <div><p className="text-sm font-semibold text-sub">{a.text}</p><p className="text-xs text-muted">{ago(a.at)}</p></div>
                </li>
              );
            })}
          </ul>
        </Card>
      </div>
    </>
  );
}
