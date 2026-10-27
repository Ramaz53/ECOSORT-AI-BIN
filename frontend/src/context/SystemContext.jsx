import { createContext, useContext, useEffect, useRef, useState } from "react";
import { CLASSES, CLASS_NAMES, STAGES } from "../data/constants";

const Ctx = createContext(null);
export const useSystem = () => useContext(Ctx);

const rnd = (a, b) => a + Math.random() * (b - a);
export const ITEMS = {
  Organic: ["Banana peel", "Fruit scraps", "Vegetable waste"],
  Inorganic: ["Plastic bottle", "Paper cup", "Cardboard box", "Plastic wrapper", "Crumpled paper"],
};
const pick = () => CLASS_NAMES[Math.floor(Math.random() * CLASS_NAMES.length)];
export const ago = (t) => { const m = Math.max(0, Math.round((Date.now() - t) / 60000)); return m < 1 ? "just now" : `${m} min${m > 1 ? "s" : ""} ago`; };

/* ---- DEMO DATA GENERATOR ----
   Hardware connect hone par makeDetection() ki jagah Socket.io ka asli YOLO result use karein. */
function makeDetection() {
  const boxes = Array.from({ length: 1 + Math.floor(rnd(0, 3)) }, (_, i) => ({
    cls: pick(), conf: Math.round(rnd(86, 99)), w: rnd(16, 24), h: rnd(34, 48), x: 6 + i * 31 + rnd(0, 6), y: rnd(22, 36),
  }));
  const area = Object.fromEntries(CLASS_NAMES.map((k) => [k, 0]));
  boxes.forEach((b) => (area[b.cls] += b.w * b.h));
  const total = Object.values(area).reduce((a, b) => a + b, 0);
  const pct = Object.fromEntries(CLASS_NAMES.map((k) => [k, Math.round((area[k] / total) * 100)]));
  const dominant = CLASS_NAMES.reduce((a, b) => (area[a] >= area[b] ? a : b));
  const conf = Math.max(...boxes.filter((b) => b.cls === dominant).map((b) => b.conf));
  return { boxes, pct, dominant, conf, ms: Math.round(rnd(90, 170)) };
}

const seedRecords = () => Array.from({ length: 14 }, (_, i) => ({
  id: i + 1, at: Date.now() - (i + 1) * 7 * 60000, cls: CLASS_NAMES[i % 2], item: ITEMS[CLASS_NAMES[i % 2]][Math.floor(i / 2) % ITEMS[CLASS_NAMES[i % 2]].length], conf: 88 + ((i * 7) % 11), kg: +(0.1 + ((i * 13) % 25) / 100).toFixed(2), ms: 100 + ((i * 17) % 60),
}));
const seedActivity = () => [
  { id: 1, type: "detect", text: "Inorganic detected (98%)", cls: "Inorganic", at: Date.now() - 2 * 60000 },
  { id: 2, type: "sorted", text: "Sorted to Inorganic bin", cls: "Inorganic", at: Date.now() - 2 * 60000 },
  { id: 3, type: "detect", text: "Organic detected (94%)", cls: "Organic", at: Date.now() - 5 * 60000 },
  { id: 4, type: "sorted", text: "Sorted to Organic bin", cls: "Organic", at: Date.now() - 5 * 60000 },
];

export default function SystemProvider({ children }) {
  const [running, setRunning] = useState(false);
  const [speed, setSpeed] = useState(60); // motor speed %
  const [stage, setStage] = useState(0);
  const [det, setDet] = useState(null);
  const [diverter, setDiverter] = useState({ angle: 90, cmd: "-", target: null, manual: false });
  const [weight, setWeight] = useState({ Organic: 104, Inorganic: 144 });
  const [fill, setFill] = useState({ Organic: 46, Inorganic: 38 });
  const [counts, setCounts] = useState({ Organic: 0, Inorganic: 0 });
  const [activity, setActivity] = useState(seedActivity);
  const [records, setRecords] = useState(seedRecords);
  const [liveLog, setLiveLog] = useState([]);
  const detRef = useRef(null);

  const log = (type, text, cls) => setActivity((a) => [{ id: Math.random(), type, text, cls, at: Date.now() }, ...a].slice(0, 8));

  // Belt speed ke hisab se agla stage
  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setStage((s) => (s + 1) % STAGES.length), Math.max(500, 2400 - speed * 18));
    return () => clearInterval(t);
  }, [running, speed]);

  // Har stage par kya hota hai (hardware flow)
  useEffect(() => {
    if (!running) return;
    const d = detRef.current;
    if (stage === 1) log("sensor", "IR sensor triggered - item on belt");
    if (stage === 3) {
      const n = makeDetection();
      detRef.current = n; setDet(n);
      log("detect", `${n.dominant} detected (${n.conf}%)`, n.dominant);
      setLiveLog((l) => [...l, { n: (l[l.length - 1]?.n ?? 0) + 1, conf: n.conf, ms: n.ms }].slice(-20));
    }
    if (stage === 4 && d) setDiverter((v) => (v.manual ? v : { ...v, angle: CLASSES[d.dominant].angle, cmd: CLASSES[d.dominant].cmd, target: d.dominant }));
    if (stage === 5 && d) {
      const kg = +rnd(0.05, 0.35).toFixed(2);
      setCounts((c) => ({ ...c, [d.dominant]: c[d.dominant] + 1 }));
      setWeight((w) => ({ ...w, [d.dominant]: +(w[d.dominant] + kg).toFixed(2) }));
      setFill((f) => ({ ...f, [d.dominant]: Math.min(100, +(f[d.dominant] + 0.6).toFixed(1)) }));
      setRecords((r) => [{ id: Math.random() * 1000 + 20, at: Date.now(), cls: d.dominant, item: ITEMS[d.dominant][Math.floor(Math.random() * ITEMS[d.dominant].length)], conf: d.conf, kg, ms: d.ms }, ...r].slice(0, 200));
      log("sorted", `Sorted to ${d.dominant} bin`, d.dominant);
    }
  }, [stage, running]);

  const toggle = () => { if (running) setStage(0); setRunning(!running); };
  const moveDiverter = (cls) => {
    setDiverter({ angle: CLASSES[cls].angle, cmd: CLASSES[cls].cmd, target: cls, manual: true });
    log("diverter", `Diverter moved manually to ${cls}`, cls);
    setTimeout(() => setDiverter((v) => ({ ...v, manual: false })), 2500);
  };

  const total = Object.values(weight).reduce((a, b) => a + b, 0);
  const pct = Object.fromEntries(CLASS_NAMES.map((k) => [k, Math.round((weight[k] / total) * 100)]));
  const status = [
    { name: "Camera", state: running ? "Working" : "Standby" },
    { name: "IR Sensor", state: running ? "Active" : "Standby" },
    { name: "Conveyor Motor", state: running ? "Running" : "Stopped" },
    { name: "Diverter", state: "Ready" },
    { name: "Bin Sensors", state: "Active" },
    { name: "Processing Unit", state: "Online" },
  ];

  const value = { running, toggle, speed, setSpeed, stage, det, diverter, moveDiverter, weight, total, pct, fill, counts, activity, records, liveLog, status, model: { name: "YOLOv8n", input: "640x640", device: "Raspberry Pi 5" } };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
