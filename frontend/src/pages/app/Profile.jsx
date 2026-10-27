import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Card from "../../components/ui/Card";
import PageHeader from "../../components/ui/PageHeader";
import { btn, btnOutline, input } from "../../components/ui/styles";

export default function Profile() {
  const { user, updateProfile } = useAuth();
  const [edit, setEdit] = useState(false);
  const [f, setF] = useState({ name: user.name, email: user.email, phone: user.phone || "", role: user.role || "" });
  const [saved, setSaved] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const save = () => { updateProfile(f); setEdit(false); setSaved(true); setTimeout(() => setSaved(false), 2500); };

  const fields = [["name", "Full Name"], ["email", "Email"], ["phone", "Phone"], ["role", "Role"]];
  return (
    <>
      <PageHeader title="Profile" sub="Your account details" />
      <Card className="max-w-2xl">
        <div className="mb-6 flex items-center gap-5">
          <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-green-500 to-emerald-700 text-3xl font-extrabold text-white shadow-lg">{user.name[0]?.toUpperCase()}</span>
          <div><p className="text-xl font-extrabold">{user.name}</p><p className="text-muted">{user.role}</p></div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {fields.map(([k, label]) => (
            <div key={k}><label className="mb-1 block text-sm font-semibold text-sub">{label}</label>
              <input className={input + (edit ? "" : " bg-soft")} disabled={!edit} value={f[k]} onChange={set(k)} placeholder={k === "phone" ? "Add phone number" : ""} /></div>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-3">
          {edit ? <><button className={btn} onClick={save}>Save changes</button><button className={btnOutline} onClick={() => setEdit(false)}>Cancel</button></> : <button className={btn} onClick={() => setEdit(true)}>Edit Profile</button>}
          {saved && <span className="animate-fadeUp text-sm font-semibold text-green-700 dark:text-green-400">✔ Profile updated</span>}
        </div>
      </Card>
    </>
  );
}
