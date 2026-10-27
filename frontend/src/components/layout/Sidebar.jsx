import { Link, NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, ScanLine, BarChart3, ClipboardList, UserRound, Settings, LogOut, Globe } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import Logo from "../ui/Logo";

const NAV = [
  ["/dashboard", "Dashboard", LayoutDashboard], ["/live-sorting", "Live Sorting", ScanLine], ["/statistics", "Statistics", BarChart3],
  ["/waste-records", "Scan History", ClipboardList], ["/profile", "Profile", UserRound], ["/settings", "Settings", Settings],
];

export default function Sidebar({ open, onClose }) {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const item = ({ isActive }) => `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${isActive ? "bg-brand-dark text-white shadow-[0_4px_0_#14532d] -translate-y-0.5" : "text-slate-300 hover:translate-x-1 hover:bg-navy-700 hover:text-white"}`;
  return (
    <>
      {open && <div className="fixed inset-0 z-30 bg-black/40 lg:hidden" onClick={onClose} />}
      <aside className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-navy-900 p-5 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
        <Link to="/" className="mb-8 mt-1 block" title="Back to website"><Logo dark /></Link>
        <nav className="flex flex-1 flex-col gap-1.5" onClick={onClose}>
          {NAV.map(([to, label, Icon]) => <NavLink key={to} to={to} className={item}><Icon size={19} />{label}</NavLink>)}
        </nav>
        <Link to="/" className="mb-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-navy-700 hover:text-white"><Globe size={19} /> Website</Link>
        <button onClick={() => { logout(); navigate("/"); }} className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-300 transition hover:bg-red-500/10 hover:text-red-300">
          <LogOut size={19} /> Logout
        </button>
      </aside>
    </>
  );
}
