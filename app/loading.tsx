export default function Loading() {
  return (
    <main className="liquid-scene flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="glass-surface flex min-w-[240px] flex-col items-center rounded-[2rem] px-10 py-9 text-center shadow-2xl">
        <div className="relative h-14 w-14">
          <span className="absolute inset-0 rounded-full border-2 border-slate-200/70 dark:border-white/10" />
          <span className="absolute inset-0 animate-spin rounded-full border-2 border-transparent border-t-cyan-400 border-r-indigo-400" />
          <span className="absolute inset-3 animate-pulse rounded-full bg-white/50 shadow-inner dark:bg-white/10" />
        </div>
        <p className="mt-5 text-sm font-bold text-slate-700 dark:text-slate-200">Loading experience…</p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Preparing the liquid glass.</p>
      </div>
    </main>
  )
}
