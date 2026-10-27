import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, UserPlus } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import AuthShell from "../../components/layout/AuthShell";
import { btn, btnOutline, input } from "../../components/ui/styles";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const from = useLocation().state?.from || "/dashboard";
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const err = login(id.trim(), pw);
    err ? setError(err) : navigate(from, { replace: true });
  };

  return (
    <AuthShell>
      <h1 className="text-3xl font-extrabold text-ink">Welcome Back</h1>
      <p className="mb-6 mt-1 text-muted">Sign in to your account</p>
      <form onSubmit={submit} className="space-y-4">
        <div className="relative"><Mail className="absolute left-4 top-3.5 text-muted" size={18} /><input className={input + " pl-11"} placeholder="Email or Username" value={id} onChange={(e) => setId(e.target.value)} required /></div>
        <div className="relative">
          <Lock className="absolute left-4 top-3.5 text-muted" size={18} />
          <input className={input + " pl-11 pr-11"} type={show ? "text" : "password"} placeholder="Password" value={pw} onChange={(e) => setPw(e.target.value)} required />
          <button type="button" onClick={() => setShow(!show)} className="absolute right-4 top-3.5 text-muted">{show ? <EyeOff size={18} /> : <Eye size={18} />}</button>
        </div>
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-sub"><input type="checkbox" className="accent-green-700" /> Remember me</label>
          <a className="cursor-pointer text-brand-dark dark:text-green-400 hover:underline">Forgot password?</a>
        </div>
        {error && <p className="animate-fadeUp text-sm text-red-500">⚠ {error}</p>}
        <button className={btn + " w-full"}>Login</button>
      </form>
      <div className="my-5 flex items-center gap-3 text-xs text-muted"><span className="h-px flex-1 bg-line" />or<span className="h-px flex-1 bg-line" /></div>
      <Link to="/signup" state={{ from }} className={btnOutline + " w-full"}><UserPlus size={18} /> Create an Account</Link>
    </AuthShell>
  );
}
