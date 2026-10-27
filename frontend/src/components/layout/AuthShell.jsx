import { Link } from "react-router-dom";
import BinsArt from "./BinsArt";
import Logo from "../ui/Logo";
import Reveal from "../ui/Reveal";
import Tilt from "../ui/Tilt";
import SplitCard from "../ui/SplitCard";
import BackgroundSlideshow from "../ui/BackgroundSlideshow";
import CursorGlow from "../ui/CursorGlow";

// Left: form, Right: bins ki picture. Dono ek hi box mein (beech mein gap nahi)
function Picture() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-5 sm:p-6">
      <Tilt max={10} lift={20} glare={false} glow={false} className="group w-full max-w-md">
        <BinsArt className="w-full cursor-pointer drop-shadow-[0_25px_30px_rgba(0,0,0,.5)] transition duration-500 group-hover:scale-[1.05] group-hover:drop-shadow-[0_0_35px_rgba(74,222,128,.55)]" />
      </Tilt>
      <div className="text-center">
        <h2 className="text-2xl font-extrabold text-ink">Small Actions, <span className="animate-shimmer bg-gradient-to-r from-green-500 via-lime-300 to-green-500 bg-[length:200%_auto] bg-clip-text text-transparent">Big Impact</span></h2>
        <p className="mt-1 text-sm text-sub">Together for a cleaner planet 🌱</p>
      </div>
    </div>
  );
}

export default function AuthShell({ children }) {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <BackgroundSlideshow />
      <CursorGlow />
      <header className="relative z-10 p-5 sm:px-8"><Reveal from="top"><Link to="/" className="inline-block"><Logo /></Link></Reveal></header>
      <div className="relative z-10 flex flex-1 items-center justify-center p-4 pb-10 sm:p-8">
        <Reveal from="zoom" className="w-full max-w-4xl"><SplitCard left={children} right={<Picture />} /></Reveal>
      </div>
    </div>
  );
}
