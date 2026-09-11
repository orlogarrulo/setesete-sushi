import type { ErrorComponentProps } from "@tanstack/react-router";

const FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";

function errorMessage(error: unknown): string {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error) return error;
  return FALLBACK_MESSAGE;
}

export function AppErrorComponent({ error }: ErrorComponentProps) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-rice px-6 text-center text-ink">
      <p className="text-[11px] tracking-[0.28em] text-kaki uppercase">77</p>
      <h1 className="font-display text-3xl">Algo correu mal</h1>
      <p className="max-w-md text-sm break-words text-stone">
        {errorMessage(error)}
      </p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="mt-2 inline-flex min-h-11 items-center rounded-full bg-kaki px-5 text-sm font-semibold tracking-[0.12em] text-rice uppercase"
      >
        Recarregar
      </button>
    </main>
  );
}
