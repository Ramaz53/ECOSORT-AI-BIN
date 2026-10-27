import { Link } from "react-router-dom";
import { Bell, Menu } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useSystem } from "../../context/SystemContext";
import StatusPill from "../ui/StatusPill";

export default function Topbar({ onMenu }) {
  const { user } = useAuth();
  const { running } = useSystem();
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-line bg-surface/80 px-5 backdrop-blur-xl lg:px-8">
      <button className="rounded-lg p-2 lg:hidden" onClick={onMenu}><Menu /></button>
      <div className="ml-auto flex items-center gap-3 sm:gap-4">
        <StatusPill on={running}>{running ? "System Running" : "System Idle"}</StatusPill>
        <button className="relative rounded-full p-2 text-muted hover:bg-track"><Bell size={19} /><span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" /></button>
        <Link to="/profile" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-green-500 to-emerald-700 font-bold text-white">{user.name[0]?.toUpperCase()}</span>
          <span className="hidden leading-tight sm:block"><b className="block text-sm">{user.name}</b><small className="text-xs text-muted">{user.role}</small></span>
        </Link>
      </div>
    </header>
  );
}
