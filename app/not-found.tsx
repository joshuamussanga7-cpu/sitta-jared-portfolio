import Link from 'next/link'
import { ArrowLeft, Home, SearchX } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="liquid-scene relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-20">
      <div className="liquid-blob one" />
      <div className="liquid-blob two" />
      <div className="liquid-orb large right-[12%] top-[14%] opacity-40" />
      <div className="relative z-10 w-full max-w-2xl text-center">
        <div className="glass-surface rounded-[2.5rem] p-8 sm:p-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/70 bg-white/45 text-slate-600 shadow-xl dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
            <SearchX className="h-9 w-9" />
          </div>
          <p className="text-xs font-black uppercase tracking-[.35em] text-slate-500 dark:text-slate-400">Page not found</p>
          <h1 className="mt-3 text-6xl font-black tracking-tight gradient-text sm:text-8xl">404</h1>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-600 dark:text-slate-300">
            This page drifted outside the map. Let’s get you back to something useful.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-bold text-white shadow-lg hover:-translate-y-1 hover:shadow-xl dark:bg-white dark:text-slate-950">
              <Home className="h-4 w-4" /> Back home
            </Link>
            <Link href="/projects" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/75 bg-white/45 px-5 py-3 text-sm font-bold text-slate-700 shadow-sm backdrop-blur-xl hover:-translate-y-1 hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10">
              View projects <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
