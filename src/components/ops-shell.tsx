import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { Bike, BookOpen, ClipboardList, FileCheck, LayoutDashboard, LogOut, CookingPot, Users } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { Mark } from "@/components/mark.tsx";
import { loginStaff, logoutStaff, staffSession } from "@/lib/ops.functions";
import { clearStaffUi, markStaffUiAuthed } from "@/lib/staff";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/ops", label: "Painel", icon: LayoutDashboard, exact: true },
  { to: "/ops/encomendas", label: "Encomendas", icon: ClipboardList, exact: false },
  { to: "/ops/cozinha", label: "Cozinha", icon: CookingPot, exact: false },
  { to: "/ops/comprovativos", label: "Comprovativos", icon: FileCheck, exact: false },
  { to: "/ops/motoboys", label: "Motoboys", icon: Bike, exact: false },
  { to: "/ops/crm", label: "CRM", icon: Users, exact: false },
  { to: "/ops/manual", label: "Manual", icon: BookOpen, exact: false },
];

export function OpsShell() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    void staffSession().then((r) => {
      setAuthed(r.ok);
      if (r.ok) markStaffUiAuthed();
      else clearStaffUi();
      setReady(true);
    });
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      const r = await loginStaff({ data: { user, password } });
      if (!r.ok) {
        setError(
          r.locked
            ? "Muitas tentativas. Espera uns minutos."
            : "Acesso recusado.",
        );
        return;
      }
      markStaffUiAuthed();
      setPassword("");
      setAuthed(true);
    } catch {
      setError("Acesso recusado.");
    } finally {
      setBusy(false);
    }
  }

  if (!ready) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-nori text-rice">
        <p className="text-sm tracking-[0.2em] text-stone uppercase">Sete Sete</p>
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center bg-nori px-4 text-rice">
        <Mark invert className="size-16" alt="Sete Sete" />
        <h1 className="mt-8 font-display text-4xl">Backoffice</h1>
        <form onSubmit={(e) => void onSubmit(e)} className="mt-8 w-full max-w-xs space-y-4">
          <label className="block text-xs tracking-[0.16em] text-stone uppercase">
            Utilizador
            <input
              autoComplete="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="mt-2 min-h-12 w-full rounded-lg border border-rice/15 bg-nori px-3 text-sm text-rice outline-none ring-kaki focus:ring-2"
            />
          </label>
          <label className="block text-xs tracking-[0.16em] text-stone uppercase">
            Palavra-passe
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 min-h-12 w-full rounded-lg border border-rice/15 bg-nori px-3 text-sm text-rice outline-none ring-kaki focus:ring-2"
            />
          </label>
          {error ? <p className="text-center text-sm text-kaki">{error}</p> : null}
          <button
            type="submit"
            disabled={busy}
            className="flex min-h-12 w-full items-center justify-center rounded-full bg-kaki text-sm font-semibold tracking-[0.14em] text-rice uppercase hover:bg-kaki-deep disabled:opacity-60"
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-nori text-rice">
      <header className="sticky top-0 z-30 border-b border-rice/10 bg-nori/95 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link to="/ops" className="flex items-center gap-2">
            <Mark invert className="size-9" alt="" />
            <span className="text-sm font-semibold tracking-[0.16em] uppercase">Backoffice</span>
          </Link>
          <button
            type="button"
            onClick={() => {
              void logoutStaff().then(() => {
                clearStaffUi();
                setAuthed(false);
                setPassword("");
              });
            }}
            className="inline-flex size-11 items-center justify-center rounded-full hover:bg-rice/8"
            aria-label="Sair"
          >
            <LogOut className="size-4" />
          </button>
        </div>
        <nav className="border-t border-rice/10">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-1 px-3 py-2 sm:px-6">
            {NAV.map((n) => {
              const active = n.exact
                ? pathname === n.to || pathname === `${n.to}/`
                : pathname.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={cn(
                    "inline-flex min-h-10 items-center gap-1.5 rounded-full px-3 text-[11px] font-semibold tracking-[0.1em] uppercase",
                    active ? "bg-kaki text-rice" : "text-rice/80 hover:bg-rice/8 hover:text-rice",
                  )}
                >
                  <n.icon className="size-3.5" />
                  {n.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Outlet />
      </div>
    </div>
  );
}
