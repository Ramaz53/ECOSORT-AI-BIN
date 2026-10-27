import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SystemProvider from "../context/SystemContext";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import BackgroundSlideshow from "../components/ui/BackgroundSlideshow";
import CursorGlow from "../components/ui/CursorGlow";

export default function AppLayout() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  return (
    // SystemProvider: live hardware data sab pages mein share hota hai
    <SystemProvider>
      <div className="relative min-h-screen overflow-x-clip text-ink lg:pl-64">
        <BackgroundSlideshow strong />
        <CursorGlow />
        <Sidebar open={open} onClose={() => setOpen(false)} />
        <div className="relative z-10">
          <Topbar onMenu={() => setOpen(true)} />
          <main key={pathname} className="animate-pageIn p-4 sm:p-6 lg:p-8"><Outlet /></main>
        </div>
      </div>
    </SystemProvider>
  );
}
