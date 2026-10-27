import { Link } from "react-router-dom";
import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import Reveal from "../../components/ui/Reveal";
import { btn } from "../../components/ui/styles";

const CARDS = [
  ["🎯", "Our Goal", "Make waste sorting automatic, accurate and easy to understand."],
  ["⚙️", "How it works", "A camera and YOLO model classify waste, an Arduino moves the diverter."],
  ["🛠️", "Built with", "React, Node.js, MongoDB, YOLOv8 and Arduino."],
];

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12">
      <PageHeader title="About EcoSort AI Bin" sub="A Final Year Project that combines AI and hardware." />
      <Card from="left"><p className="text-lg leading-relaxed text-sub">Mixed waste moves on a slow conveyor belt. A camera captures each item, AI decides if it is Organic or Inorganic, and a diverter drops it into the right bin. This website shows everything live.</p></Card>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {CARDS.map(([e, t, d]) => (
          <Card key={t} tilt><div className="text-3xl">{e}</div><h3 className="mt-3 font-bold text-ink">{t}</h3><p className="mt-1 text-sm text-muted">{d}</p></Card>
        ))}
      </div>
      <Reveal from="bottom" className="mt-10 text-center"><Link to="/how-it-works" className={btn}>See how it works</Link></Reveal>
    </div>
  );
}
