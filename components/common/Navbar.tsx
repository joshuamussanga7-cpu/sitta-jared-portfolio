'use client'

import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem('theme')
    const shouldUseDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
    setDark(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
    document.body.classList.toggle('dark', shouldUseDark)
  }, [])

  const applyTheme = (next: boolean) => {
    setDark(next)
    window.localStorage.setItem('theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
    document.body.classList.toggle('dark', next)
  }

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = !dark
    const x = event.clientX
    const y = event.clientY
    document.documentElement.style.setProperty('--theme-origin-x', `${x}px`)
    document.documentElement.style.setProperty('--theme-origin-y', `${y}px`)

    const root = document.documentElement as typeof document.documentElement & {
      startViewTransition?: (callback: () => void) => { finished: Promise<void> }
    }

    if (typeof root.startViewTransition === 'function' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      root.startViewTransition(() => applyTheme(next))
    } else {
      applyTheme(next)
    }
  }

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'CV', href: '/cv' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  const ThemeToggle = () => (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? 'Switch to day mode' : 'Switch to night mode'}
      title={dark ? 'Day mode' : 'Night mode'}
      className="theme-toggle relative inline-flex h-10 w-[76px] shrink-0 items-center rounded-full border border-white/75 bg-white/38 p-1 shadow-sm backdrop-blur-xl hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
    >
      <span className={`theme-toggle-track absolute inset-1 rounded-full transition-all duration-500 ${dark ? 'bg-slate-950/80' : 'bg-white/65'}`} />
      <span className={`theme-toggle-thumb relative z-10 flex h-8 w-8 items-center justify-center rounded-full shadow-md ring-1 ring-white/70 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${dark ? 'translate-x-8 bg-slate-800 text-amber-300' : 'translate-x-0 bg-white text-slate-700'}`}>
        {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      </span>
      <span className={`pointer-events-none absolute right-2.5 text-[9px] font-black uppercase tracking-wider transition-opacity ${dark ? 'text-slate-300 opacity-100' : 'opacity-0'}`}>Night</span>
      <span className={`pointer-events-none absolute left-2.5 text-[9px] font-black uppercase tracking-wider transition-opacity ${dark ? 'opacity-0' : 'text-slate-500 opacity-100'}`}>Day</span>
    </button>
  )

  return (
    <nav className="sticky top-0 z-50 px-3 pt-3 sm:px-6 bg-transparent">
      <div className="max-w-6xl mx-auto rounded-2xl glass-surface shadow-lg">
        <div className="flex justify-between items-center min-h-14 px-3 sm:px-5 gap-2">
          <Link href="/" className="text-xl font-black tracking-tight gradient-text">SITTA<span className="text-slate-400">.</span></Link>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <Link key={item.href} href={item.href} className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-white/60 hover:text-slate-950">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button size="sm" href="/contact">Get in Touch</Button>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button aria-label="Toggle menu" className="p-2 rounded-xl hover:bg-white/60" onClick={() => setIsOpen(!isOpen)}>
              <span className="block w-5 h-0.5 bg-slate-800 mb-1.5 dark:bg-slate-200" />
              <span className="block w-5 h-0.5 bg-slate-800 mb-1.5 dark:bg-slate-200" />
              <span className="block w-5 h-0.5 bg-slate-800 dark:bg-slate-200" />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden px-3 pb-3 space-y-1">
            {navItems.map(item => <Link key={item.href} href={item.href} className="block px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-white/60 dark:text-slate-200 dark:hover:bg-white/10" onClick={() => setIsOpen(false)}>{item.label}</Link>)}
            <div className="pt-2"><Button fullWidth href="/contact">Get in Touch</Button></div>
          </div>
        )}
      </div>
    </nav>
  )
}
