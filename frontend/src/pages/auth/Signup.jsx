import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthShell from "../../components/layout/AuthShell";
import { btn, input } from "../../components/ui/styles";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const from = useLocation().state?.from || "/dashboard";
  const [f, setF] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim()) return setError("Please enter your name");
    if (!/^\S+@\S+\.\S+$/.test(f.email)) return setError("Please enter a valid email");
    if (f.password.length < 6) return setError("Password must be at least 6 characters");
    if (f.password !== f.confirm) return setError("Passwords do not match");
    const err = signup(f.name.trim(), f.email.trim(), f.password);
    err ? setError(err) : navigate(from, { replace: true });
  };

  return (
    <AuthShell>
      <h1 className="text-3xl font-extrabold text-ink">Create Account</h1>
      <p className="mb-6 mt-1 text-muted">Join EcoSort AI Bin</p>
      <form onSubmit={submit} className="space-y-4">
        <input className={input} placeholder="Full name" value={f.name} onChange={set("name")} />
        <input className={input} placeholder="Email" value={f.email} onChange={set("email")} />
        <input className={input} type="password" placeholder="Password" value={f.password} onChange={set("password")} />
        <input className={input} type="password" placeholder="Confirm password" value={f.confirm} onChange={set("confirm")} />
        {error && <p className="animate-fadeUp text-sm text-red-500">⚠ {error}</p>}
        <button className={btn + " w-full"}>Create Account</button>
      </form>
      <p className="mt-6 text-center text-sm text-muted">Already have an account? <Link to="/login" className="font-semibold text-brand-dark dark:text-green-400 hover:underline">Login</Link></p>
    </AuthShell>
  );
}
