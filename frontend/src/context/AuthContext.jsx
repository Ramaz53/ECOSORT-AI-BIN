import { createContext, useContext, useState } from "react";

const AuthCtx = createContext(null);
export const useAuth = () => useContext(AuthCtx);

const read = (k, d) => { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } };
const write = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignore */ } };

// DEMO auth (localStorage). Backend ke waqt in functions mein API calls laga dein.
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => read("eco_user", null));

  const save = (u) => { write("eco_user", u); setUser(u); };

  const signup = (name, email, password) => {
    const users = read("eco_users", []);
    if (users.some((u) => u.email === email)) return "This email is already registered";
    const u = { name, email, phone: "", role: "Operator" };
    write("eco_users", [...users, { ...u, password }]);
    save(u);
    return null;
  };

  const login = (email, password) => {
    const f = read("eco_users", []).find((u) => (u.email === email || u.name === email) && u.password === password);
    if (!f) return "Incorrect email or password";
    const { password: _p, ...u } = f;
    save(u);
    return null;
  };

  const updateProfile = (data) => {
    const u = { ...user, ...data };
    write("eco_users", read("eco_users", []).map((x) => (x.email === user.email ? { ...x, ...data } : x)));
    save(u);
  };

  const logout = () => save(null);

  return <AuthCtx.Provider value={{ user, signup, login, logout, updateProfile }}>{children}</AuthCtx.Provider>;
}
