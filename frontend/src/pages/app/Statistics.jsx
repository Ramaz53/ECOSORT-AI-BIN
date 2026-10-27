import { ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { useSystem } from "../../context/SystemContext";
import { CLASSES, CLASS_NAMES, WEEK } from "../../data/constants";
import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";

export default function Statistics() {
  const { weight, total, pct, liveLog, fill } = useSystem();
  const grid = "#22313c";
  const ax = "#94a3b8";
  const tip = { contentStyle: { background: "#0e161c", border: `1px solid ${grid}`, borderRadius: 12, color: "#f1f5f9" } };
  const donut = CLASS_NAMES.map((k) => ({ name: k, value: +weight[k].toFixed(1) }));
  return (
    <>
      <PageHeader title="Statistics" sub="Waste distribution and system performance">
        <select className="rounded-xl border border-line bg-surface px-4 py-2 text-sm font-semibold text-ink"><option>Last 7 Days</option></select>
      </PageHeader>
      <div className="grid grid-cols-1 gap-5">
        <Card title="Waste Distribution">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="relative h-56 w-56">
              <ResponsiveContainer><PieChart><Pie data={donut} dataKey="value" innerRadius={68} outerRadius={100} paddingAngle={3} animationDuration={900}>{donut.map((d) => <Cell key={d.name} fill={CLASSES[d.name].hex} />)}</Pie><Tooltip {...tip} formatter={(v) => `${v} kg`} /></PieChart></ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 grid place-items-center text-center"><div><p className="text-xs text-muted">Total Waste</p><p className="text-2xl font-extrabold">{total.toFixed(0)} kg</p></div></div>
            </div>
            <ul className="space-y-3 text-sm">{CLASS_NAMES.map((k) => <li key={k} className="flex items-center gap-3"><i className="h-3 w-3 rounded-full" style={{ background: CLASSES[k].hex }} /><span className="w-16 font-semibold">{k}</span><span className="w-10 text-muted">{pct[k]}%</span><span className="text-muted">{weight[k].toFixed(0)} kg</span></li>)}</ul>
          </div>
        </Card>
        <Card title="Daily Overview (kg)">
          <div className="h-72"><ResponsiveContainer><LineChart data={WEEK}><CartesianGrid strokeDasharray="3 3" stroke={grid} /><XAxis dataKey="d" tick={{ fontSize: 12, fill: ax }} /><YAxis tick={{ fontSize: 12, fill: ax }} /><Tooltip {...tip} /><Legend wrapperStyle={{ color: ax }} />{CLASS_NAMES.map((k) => <Line key={k} type="monotone" dataKey={k} stroke={CLASSES[k].hex} strokeWidth={2.5} dot={{ r: 3 }} animationDuration={900} />)}</LineChart></ResponsiveContainer></div>
        </Card>
        <Card title="Weekly Totals by Category">
          <div className="h-72"><ResponsiveContainer><BarChart data={WEEK}><CartesianGrid strokeDasharray="3 3" stroke={grid} /><XAxis dataKey="d" tick={{ fontSize: 12, fill: ax }} /><YAxis tick={{ fontSize: 12, fill: ax }} /><Tooltip {...tip} /><Legend wrapperStyle={{ color: ax }} />{CLASS_NAMES.map((k) => <Bar key={k} dataKey={k} stackId="a" fill={CLASSES[k].hex} animationDuration={900} />)}</BarChart></ResponsiveContainer></div>
        </Card>
        <Card title="Live Model Performance (YOLOv8n)">
          {liveLog.length ? (
            <div className="h-72"><ResponsiveContainer><LineChart data={liveLog}><CartesianGrid strokeDasharray="3 3" stroke={grid} /><XAxis dataKey="n" tick={{ fontSize: 12, fill: ax }} label={{ value: "Detection #", position: "insideBottom", offset: -2, fontSize: 11, fill: ax }} /><YAxis yAxisId="l" domain={[70, 100]} tick={{ fontSize: 12, fill: ax }} /><YAxis yAxisId="r" orientation="right" tick={{ fontSize: 12, fill: ax }} /><Tooltip {...tip} /><Legend wrapperStyle={{ color: ax }} /><Line yAxisId="l" type="monotone" dataKey="conf" name="Confidence %" stroke="#16a34a" strokeWidth={2.5} isAnimationActive={false} /><Line yAxisId="r" type="monotone" dataKey="ms" name="Inference ms" stroke="#2563eb" strokeWidth={2.5} isAnimationActive={false} /></LineChart></ResponsiveContainer></div>
          ) : <p className="grid h-72 place-items-center text-muted">Start sorting on the Live Sorting page to see live model data.</p>}
        </Card>
        <Card title="Bin Fill Levels">
          <div className="grid gap-4 sm:grid-cols-2">{CLASS_NAMES.map((k) => <div key={k} className={`rounded-2xl border p-4 ${CLASSES[k].soft}`}><div className="flex justify-between font-semibold"><span>{CLASSES[k].emoji} {k} Bin</span><span className={CLASSES[k].text}>{Math.round(fill[k])}%</span></div><div className="mt-3 h-3 overflow-hidden rounded-full bg-surface"><div className={`h-full rounded-full transition-all duration-1000 ${CLASSES[k].bar}`} style={{ width: `${fill[k]}%` }} /></div></div>)}</div>
        </Card>
      </div>
    </>
  );
}
