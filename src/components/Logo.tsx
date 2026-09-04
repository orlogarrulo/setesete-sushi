export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Simple premium logo mark */}
      <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/30">
        <span className="text-lg font-bold text-white">77</span>
        <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-accent" />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-bold tracking-tight text-white">
          Sete Sete
        </span>
        <span className="text-[10px] font-medium uppercase tracking-widest text-accent">
          Sushi Delivery
        </span>
      </div>
    </div>
  );
}
