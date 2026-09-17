import { Link, Outlet, useRouterState } from "@tanstack/react-router";
import { ClipboardList, LayoutDashboard, LogOut, Users } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { Mark } from "@/components/mark.tsx";
import { STAFF_PIN } from "@/lib/ops";
import { verifyStaffPin } from "@/lib/ops.functions";
import { clearStaffPin, readStaffPin, writeStaffPin } from "@/lib/staff";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/ops", label: "Painel", icon: LayoutDashboard, exact: true },
  { to: "/ops/encomendas", label: "Encomendas", icon: ClipboardList, exact: false },
  { to: "/ops/crm", label: "CRM", icon: Users, exact: false },
];

export function OpsShell() {
  const [pin, setPin] = useState("");
  const [ready, setReady] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [error, setError] = useState("");
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const stored = readStaffPin();
    if (!stored) {
      setReady(true);
      return;
    }
    void verifyStaffPin({ data: { pin: stored } }).then((r) => {
      setAuthed(r.ok);
      setReady(true);
    });
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    const r = await verifyStaffPin({ data: { pin } });
    if (!r.ok) {
      setError("PIN incorrecto.");
      return;
    }
    writeStaffPin(pin);
    setAuthed(true);
  }

  if (!ready) {
    return (
      <div className="flex min-h-dvh items-center justify-center bg-nori text-rice">
        <p className="text-sm tracking-[0.2em] text-stone uppercase">A casa</p>
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center bg-nori px-4 text-rice">
        <Mark invert className="size-16" alt="Sete Sete" />
        <p className="mt-6 text-[11px] tracking-[0.28em] text-kaki-soft uppercase">
          Back-office
        </p>
        <h1 className="mt-3 font-display text-4xl">A casa</h1>
        <p className="mt-3 max-w-xs text-center text-sm text-stone">
          Gestão de encomendas, rotas e o CRM da Sete Sete. PIN da equipa, nesta
          pré-visualização: {STAFF_PIN}.
        </p>
        <form onSubmit={(e) => void onSubmit(e)} className="mt-8 w-full max-w-xs">
          <label className="block text-xs tracking-[0.16em] text-stone uppercase">
            PIN
            <input
              autoFocus
              inputMode="numeric"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="mt-2 min-h-12 w-full rounded-lg border border-rice/15 bg-nori px-3 text-center text-lg tracking-[0.4em] text-rice outline-none ring-kaki focus:ring-2"
            />
          </label>
          {error ? <p className="mt-2 text-center text-sm text-kaki">{error}</p> : null}
          <button
            type="submit"
            className="mt-4 flex min-h-12 w-full items-center justify-center rounded-full bg-kaki text-sm font-semibold tracking-[0.14em] text-rice uppercase hover:bg-kaki-deep"
          >
            Entrar
          </button>
        </form>
        <Link to="/" className="mt-8 text-xs text-stone underline-offset-2 hover:underline">
          Voltar ao site
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-nori text-rice">
      <header className="sticky top-0 z-30 border-b border-rice/10 bg-nori/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
          <Link to="/ops" className="flex items-center gap-2">
            <Mark invert className="size-9" alt="" />
            <span className="text-sm font-semibold tracking-[0.16em] uppercase">
              Casa
            </span>
          </Link>
          <nav className="flex items-center gap-1">
            {NAV.map((n) => {
              const active = n.exact ? pathname === n.to : pathname.startsWith(n.to);
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  className={cn(
                    "inline-flex min-h-11 items-center gap-1.5 rounded-full px-3 text-[11px] font-medium tracking-[0.12em] uppercase sm:px-4",
                    active ? "bg-kaki text-rice" : "text-rice/70 hover:bg-rice/8 hover:text-rice",
                  )}
                >
                  <n.icon className="size-3.5" />
                  <span className="hidden sm:inline">{n.label}</span>
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="hidden text-[11px] tracking-[0.14em] text-stone uppercase hover:text-rice sm:inline"
            >
              Site
            </Link>
            <button
              type="button"
              onClick={() => {
                clearStaffPin();
                setAuthed(false);
                setPin("");
              }}
              className="inline-flex size-11 items-center justify-center rounded-full hover:bg-rice/8"
              aria-label="Sair"
            >
              <LogOut className="size-4" />
            </button>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <Outlet />
      </div>
    </div>
  );
}
