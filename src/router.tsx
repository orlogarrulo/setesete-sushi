import { createRouter, Link } from "@tanstack/react-router";
import { AppErrorComponent } from "@/lib/error-component";
import { routeTree } from "./routeTree.gen";

function NotFound() {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center bg-rice px-6 text-center text-ink">
      <p className="text-[11px] tracking-[0.28em] text-kaki uppercase">404</p>
      <p className="mt-4 font-display text-4xl">Esta página não existe.</p>
      <p className="mt-2 text-sm text-stone">This page does not exist.</p>
      <Link
        to="/"
        className="mt-8 inline-flex min-h-12 items-center rounded-full bg-kaki px-6 text-sm font-semibold tracking-[0.12em] text-rice uppercase"
      >
        Voltar ao início
      </Link>
    </div>
  );
}

export function getRouter() {
  return createRouter({
    routeTree,
    defaultErrorComponent: AppErrorComponent,
    defaultNotFoundComponent: NotFound,
  });
}
