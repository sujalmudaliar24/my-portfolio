{projects.map((p, idx) => {
  const isActive = idx === activeIndex;

  return (
    <button
      key={p.slug}
      type="button"
      onClick={() => setActiveIndex(idx)}
      className={
        "w-full text-left rounded-2xl border p-4 transition-all duration-300 " +
        (isActive
          ? "bg-[var(--color-navy)] text-white border-[var(--color-navy)] shadow-lg"
          : "bg-white/70 text-slate-700 border-slate-200 hover:border-slate-300")
      }
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={
            "text-xs font-bold uppercase tracking-wider " +
            (isActive ? "text-white/90" : "text-[var(--color-slate)]")
          }
        >
          #{p.slug}
        </span>

        <span
          className={
            "text-xs font-bold " +
            (isActive ? "text-white/80" : "text-[var(--color-slate)]")
          }
        >
          {idx + 1}
        </span>
      </div>

      <div
        className={
          "mt-2 font-bold " +
          (isActive ? "text-white" : "text-[var(--color-navy)]")
        }
      >
        {p.title}
      </div>

      <div
        className={
          "mt-2 text-sm " +
          (isActive ? "text-white/85" : "text-slate-600")
        }
      >
        {p.tech.slice(0, 3).join(", ")}
        {p.tech.length > 3 ? "…" : ""}
      </div>
    </button>
  );
})}

