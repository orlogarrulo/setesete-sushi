type Props = {
  compact?: boolean;
  received?: boolean;
};

export function ClosedNotice({ compact, received }: Props) {
  if (compact) {
    return (
      <div className="rounded-xl border border-kaki/25 bg-kaki/5 px-4 py-4">
        <p className="text-[11px] tracking-[0.22em] text-kaki uppercase">Estamos fechados</p>
        <p className="mt-2 font-display text-2xl">12h – 22h</p>
        <p className="mt-2 text-sm leading-relaxed text-stone">
          Podes deixar a encomenda. Contactamos-te na abertura, pela ordem de chegada.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl bg-nori text-rice shadow-[var(--shadow-border)]">
      <div className="px-6 py-8 text-center sm:px-8">
        <p className="text-[11px] tracking-[0.28em] text-kaki-soft uppercase">Sete Sete · Luanda</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">Estamos fechados</h2>
        <p className="mt-3 text-sm tracking-[0.16em] text-rice/70 uppercase">Todos os dias · 12h – 22h</p>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-rice/75">
          {received
            ? "Recebemos a tua encomenda. Contactamos-te durante o horário de abertura, seguindo a ordem das encomendas."
            : "Podes deixar o pedido. Confirmamos na abertura, pela ordem das encomendas."}
        </p>
      </div>
    </div>
  );
}
