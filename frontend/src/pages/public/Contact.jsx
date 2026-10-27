import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import PageHeader from "../../components/ui/PageHeader";
import Reveal from "../../components/ui/Reveal";
import SplitCard from "../../components/ui/SplitCard";
import { btn, input } from "../../components/ui/styles";

const INFO = [[Mail, "Email", "team@ecosort.example"], [Phone, "Phone", "+92 300 0000000"], [MapPin, "Location", "Pakistan"]];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const info = (
    <div className="flex h-full flex-col justify-center">
      <h2 className="text-xl font-extrabold text-ink">Get in touch</h2>
      <p className="mb-5 mt-1 text-sm text-muted">Questions about the project? We would love to hear from you.</p>
      {/* 3 chhoti rows, har row ek line */}
      <div className="space-y-3">
        {INFO.map(([Icon, label, value]) => (
          <div key={label} className="flex items-center gap-3 rounded-xl border border-line bg-soft/60 px-4 py-2.5 transition duration-300 hover:-translate-y-0.5 hover:border-green-400/60 hover:shadow-[0_0_24px_-8px_rgba(74,222,128,.5)]">
            <Icon size={17} className="shrink-0 text-green-400" />
            <span className="w-16 shrink-0 text-xs text-muted">{label}</span>
            <span className="min-w-0 truncate text-sm font-semibold text-ink">{value}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-sub">Together for a cleaner planet 🌱</p>
    </div>
  );

  const form = sent ? (
    <p className="grid h-full min-h-[280px] place-items-center p-8 text-center text-sub">✅ Thank you! We will get back to you soon.</p>
  ) : (
    <form className="space-y-4 p-6 sm:p-8 lg:p-10" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <h2 className="text-xl font-extrabold text-ink">Send a message</h2>
      <input className={input} placeholder="Your name" required />
      <input className={input} type="email" placeholder="Email" required />
      <textarea className={input} rows="5" placeholder="Message" required />
      <button className={btn + " w-full"}>Send message</button>
    </form>
  );

  return (
    <div className="mx-auto max-w-4xl px-5 py-12">
      <PageHeader title="Contact Us" sub="Send us a message and we will reply soon." />
      <Reveal from="zoom"><SplitCard left={info} right={form} /></Reveal>
    </div>
  );
}
