import { Outlet, useLocation } from "react-router-dom";
import PublicNavbar from "../components/layout/PublicNavbar";
import BackgroundSlideshow from "../components/ui/BackgroundSlideshow";
import CursorGlow from "../components/ui/CursorGlow";

export default function PublicLayout() {
  const { pathname } = useLocation();
  return (
    <div className="relative min-h-screen overflow-x-clip text-ink">
      <BackgroundSlideshow />
      <CursorGlow />
      <div className="relative z-10">
        <PublicNavbar />
        <main key={pathname} className="animate-pageIn"><Outlet /></main>
        <footer className="border-t border-line py-6 text-center text-sm text-muted">EcoSort AI Bin · Together for a Greener Planet 🌱</footer>
      </div>
    </div>
  );
}
