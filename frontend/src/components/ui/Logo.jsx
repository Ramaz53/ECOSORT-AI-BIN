import { Leaf } from "lucide-react";

export default function Logo({ dark = false }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-green-400 to-emerald-700 text-white shadow-[0_0_18px_rgba(74,222,128,.5)]"><Leaf size={20} /></span>
      <span className={`text-lg font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}>EcoSort <span className="text-green-500">AI</span></span>
    </div>
  );
}
