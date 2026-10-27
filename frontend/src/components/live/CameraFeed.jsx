import { CLASSES } from "../../data/constants";

export default function CameraFeed({ det, running, stage, className = "" }) {
  const show = running && det && stage >= 3;
  return (
    <div className={`relative overflow-hidden rounded-xl bg-slate-900 ring-1 ring-slate-800 ${className}`}>
      <div className="absolute inset-x-0 top-0 h-[38%] bg-gradient-to-b from-slate-700 to-slate-800" />
      <div className={`absolute inset-x-0 bottom-0 top-[38%] bg-[repeating-linear-gradient(90deg,#1e293b_0_28px,#0f172a_28px_30px)] ${running ? "animate-belt" : ""}`} />
      {show && det.boxes.map((b, i) => (
        <div key={i} style={{ left: `${b.x}%`, top: `${b.y}%`, width: `${b.w}%`, height: `${b.h}%`, animationDelay: `${i * 120}ms` }}
          className={`absolute grid animate-fadeUp place-items-center rounded-md border-2 text-3xl ${CLASSES[b.cls].box}`}>
          {CLASSES[b.cls].emoji}
          <span className={`absolute -top-5 left-0 whitespace-nowrap rounded px-1.5 py-0.5 text-[10px] font-bold text-white ${CLASSES[b.cls].chip}`}>{b.cls} {b.conf}%</span>
        </div>
      ))}
      {!show && <div className="absolute inset-0 grid place-items-center text-sm text-slate-400">{running ? "Waiting for item..." : "Camera idle - press Start"}</div>}
      {running && <div className="absolute left-0 right-0 h-0.5 animate-scan bg-green-400 shadow-[0_0_14px_#4ade80]" />}
      <span className="absolute left-3 top-3 flex items-center gap-1.5 rounded bg-black/50 px-2 py-0.5 text-[10px] font-bold text-white"><i className={`h-2 w-2 rounded-full ${running ? "animate-pulse bg-red-500" : "bg-slate-500"}`} />{running ? "LIVE" : "OFF"}</span>
      <span className="absolute right-3 top-3 rounded bg-black/50 px-2 py-0.5 text-[10px] font-semibold text-slate-200">YOLOv8n · 640x640</span>
    </div>
  );
}
