import { Play, Square } from "lucide-react";
import { useSystem } from "../../context/SystemContext";
import { CLASSES, CLASS_NAMES, STAGES } from "../../data/constants";
import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import StatusPill from "../../components/ui/StatusPill";
import CameraFeed from "../../components/live/CameraFeed";
import PipelineStepper from "../../components/live/PipelineStepper";
import { btn, btnDanger } from "../../components/ui/styles";

export default function LiveSorting() {
  const { running, toggle, speed, setSpeed, stage, det, diverter, moveDiverter, fill, counts, model } = useSystem();
  const cur = det?.dominant;
  return (
    <>
      <PageHeader title="Live Sorting" sub="Real-time detection and sorting process">
        <div className="flex items-center gap-3">
          <StatusPill on={running}>{running ? "System Running" : "System Stopped"}</StatusPill>
          <button className={running ? btnDanger : btn} onClick={toggle}>{running ? <><Square size={16} /> Stop</> : <><Play size={16} /> Start Sorting</>}</button>
        </div>
      </PageHeader>

      <PipelineStepper active={running ? stage : undefined} />

      <div className="mt-5 grid gap-5 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-3">
          <Card title="Camera Input">
            <CameraFeed det={det} running={running} stage={stage} className="aspect-video" />
            <p className="mt-3 text-sm text-muted">Item location: <b className="text-ink">{running ? STAGES[stage].zone : "-"}</b></p>
          </Card>
        </div>

        <div className="space-y-5 lg:col-span-2">
          <Card title="Current Detection">
            {det ? (
              <div className="animate-fadeUp">
                <div className="flex items-center gap-4"><span className="text-5xl">{CLASSES[cur].emoji}</span><div><p className="text-2xl font-extrabold">{cur}</p><p className="text-sm text-muted">Confidence: {det.conf}%</p></div></div>
                <div className={`mt-4 rounded-xl py-3 text-center font-bold text-white ${CLASSES[cur].chip}`}>CLASSIFICATION: {cur.toUpperCase()}</div>
                <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                  {CLASS_NAMES.map((k) => <div key={k} className={`rounded-xl border p-2 ${CLASSES[k].soft}`}><p className={`text-lg font-extrabold ${CLASSES[k].text}`}>{det.pct[k]}%</p><p className="text-xs text-muted">{k}</p></div>)}
                </div>
                <dl className="mt-4 grid grid-cols-2 gap-y-1 text-sm"><dt className="text-muted">Model</dt><dd className="font-semibold">{model.name}</dd><dt className="text-muted">Inference</dt><dd className="font-semibold">{det.ms} ms</dd><dt className="text-muted">Objects</dt><dd className="font-semibold">{det.boxes.length}</dd><dt className="text-muted">Device</dt><dd className="font-semibold">{model.device}</dd></dl>
              </div>
            ) : <p className="py-8 text-center text-muted">No item detected yet. Press Start.</p>}
          </Card>

          <Card title="Conveyor & Motor Control">
            <div className="mb-1 flex justify-between text-sm"><span className="text-muted">Motor speed</span><b>{speed}%</b></div>
            <input type="range" min="10" max="100" step="5" value={speed} onChange={(e) => setSpeed(+e.target.value)} className="w-full accent-green-700" />
            <p className="mt-2 text-xs text-muted">Conveyor: <b>{running ? "Running" : "Stopped"}</b> · Slower belt = more space between items</p>
          </Card>

          <Card title="Diverter Control">
            <div className="flex items-center gap-4">
              <div className="grid h-20 w-20 place-items-center rounded-full border-4 border-line">
                <div className="h-1 w-8 origin-left rounded bg-teal-500 transition-transform duration-700" style={{ transform: `rotate(${diverter.angle - 90}deg)` }} />
              </div>
              <div className="text-sm"><p>Servo angle: <b>{diverter.angle}°</b></p><p>Command sent: <b>{diverter.cmd}</b></p><p>Target: <b>{diverter.target ?? "-"}</b></p></div>
            </div>
            <div className="mt-3 flex gap-2">{CLASS_NAMES.map((k) => <button key={k} onClick={() => moveDiverter(k)} className={`flex-1 rounded-lg border px-2 py-1.5 text-xs font-semibold transition hover:-translate-y-0.5 ${CLASSES[k].soft} ${CLASSES[k].text}`}>{k}</button>)}</div>
          </Card>

          <Card title="Bin Fill Levels">
            {CLASS_NAMES.map((k) => (
              <div key={k} className="mb-3 last:mb-0">
                <div className="mb-1 flex justify-between text-sm font-semibold"><span>{CLASSES[k].emoji} {k} <small className="font-normal text-muted">({counts[k]} sorted)</small></span><span>{Math.round(fill[k])}%</span></div>
                <div className="h-2.5 overflow-hidden rounded-full bg-track"><div className={`h-full rounded-full transition-all duration-1000 ${fill[k] > 85 ? "bg-red-500" : CLASSES[k].bar}`} style={{ width: `${fill[k]}%` }} /></div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </>
  );
}
