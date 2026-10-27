// Ek hi box ke andar left aur right halves (beech mein gap nahi, outline same)
export default function SplitCard({ left, right, rightClass = "" }) {
  return (
    <div className="grid overflow-hidden rounded-3xl border border-line bg-surface/80 shadow-[0_10px_0_-2px_rgb(var(--edge)),0_30px_60px_-20px_rgba(0,0,0,.65)] backdrop-blur-xl sm:grid-cols-2">
      <div className="p-6 sm:p-8 lg:p-10">{left}</div>
      <div className={`relative border-t border-line bg-gradient-to-br from-green-500/10 via-transparent to-emerald-500/10 sm:border-l sm:border-t-0 ${rightClass}`}>{right}</div>
    </div>
  );
}
