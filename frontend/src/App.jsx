import { Routes, Route } from "react-router-dom";
import PublicLayout from "./layouts/PublicLayout";
import AppLayout from "./layouts/AppLayout";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import HowItWorks from "./pages/public/HowItWorks";
import Contact from "./pages/public/Contact";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/app/Dashboard";
import LiveSorting from "./pages/app/LiveSorting";
import Statistics from "./pages/app/Statistics";
import WasteRecords from "./pages/app/WasteRecords";
import Profile from "./pages/app/Profile";
import Settings from "./pages/app/Settings";

export default function App() {
  return (
    <Routes>
      {/* Guest: sirf public pages */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Login ke baad: sidebar app */}
      <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/live-sorting" element={<LiveSorting />} />
        <Route path="/statistics" element={<Statistics />} />
        <Route path="/waste-records" element={<WasteRecords />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
