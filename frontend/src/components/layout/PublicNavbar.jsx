import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, LayoutDashboard } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import Logo from "../ui/Logo";
import { btn, btnOutline } from "../ui/styles";

const LINKS = [["/", "Home"], ["/about", "About"], ["/how-it-works", "How it Works"], ["/contact", "Contact"]];

export default function PublicNavbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const cls = ({ isActive }) => `relative whitespace-nowrap px-3 py-2 text-sm font-semibold transition after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:rounded-full after:bg-green-400 after:transition-transform after:duration-300 ${isActive ? "text-green-700 after:scale-x-100 dark:text-green-400" : "text-sub after:scale-x-0 hover:text-ink hover:after:scale-x-100"}`;

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-surface/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4 sm:px-6">
        <Link to="/" className="mr-auto md:mr-6"><Logo /></Link>

        <div className="mr-auto hidden items-center gap-2 md:flex">
          {LINKS.map(([to, t]) => <NavLink key={to} to={to} end={to === "/"} className={cls}>{t}</NavLink>)}
        </div>

        {/* Sab se right: Login. Login ke baad dashboard alag app mein khulta hai */}
        {user ? (
          <>
            <button className={btn + " !px-4 !py-2 text-sm"} onClick={() => navigate("/dashboard")}><LayoutDashboard size={16} /><span className="hidden sm:inline">Dashboard</span></button>
            <button onClick={() => { logout(); navigate("/"); }} title="Logout" className="hidden h-10 w-10 place-items-center rounded-full border border-line bg-surface text-sub transition hover:text-red-500 sm:grid"><LogOut size={18} /></button>
          </>
        ) : (
          <>
            <button className={btnOutline + " !px-4 !py-2 text-sm"} onClick={() => navigate("/login")}>Login</button>
            <button className={btn + " !hidden !px-4 !py-2 text-sm sm:!inline-flex"} onClick={() => navigate("/signup")}>Sign Up</button>
          </>
        )}
        <button className="rounded-lg p-2 text-ink md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>

      {open && (
        <div className="animate-fromTop border-t border-line bg-surface/95 p-3 backdrop-blur-xl md:hidden" onClick={() => setOpen(false)}>
          <div className="grid gap-1">
            {LINKS.map(([to, t]) => <NavLink key={to} to={to} end={to === "/"} className={cls}>{t}</NavLink>)}
            {user && <button onClick={() => { logout(); navigate("/"); }} className="px-3 py-2 text-left text-sm font-semibold text-red-500">Logout</button>}
          </div>
        </div>
      )}
    </nav>
  );
}
