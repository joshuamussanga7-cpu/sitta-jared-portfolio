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

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    window.localStorage.setItem('theme', next ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', next)
    document.body.classList.toggle('dark', next)
  }

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'CV', href: '/cv' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 px-3 sm:px-6 pt-3 bg-transparent">
      <div className="max-w-6xl mx-auto rounded-2xl glass-surface shadow-lg">
        <div className="flex justify-between items-center h-14 px-4 sm:px-5">
          <Link href="/" className="text-xl font-black tracking-tight gradient-text">SITTA<span className="text-slate-400">.</span></Link>
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <Link key={item.href} href={item.href} className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 hover:bg-white/60 hover:text-slate-950">
                {item.label}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button type="button" onClick={toggleTheme} aria-label={dark ? 'Switch to day mode' : 'Switch to night mode'} title={dark ? 'Day mode' : 'Night mode'} className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/45 text-slate-700 shadow-sm backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/70">
              <span className="absolute inset-0 rounded-full bg-cyan-200/30 blur-md" />
              {dark ? <Sun className="relative h-4 w-4" /> : <Moon className="relative h-4 w-4" />}
            </button>
            <Button size="sm" href="/contact">Get in Touch</Button>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <button type="button" onClick={toggleTheme} aria-label={dark ? 'Switch to day mode' : 'Switch to night mode'} title={dark ? 'Day mode' : 'Night mode'} className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/80 bg-white/45 text-slate-700 shadow-sm backdrop-blur-xl">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button aria-label="Toggle menu" className="md:hidden p-2 rounded-xl hover:bg-white/60" onClick={() => setIsOpen(!isOpen)}>
              <span className="block w-5 h-0.5 bg-slate-800 mb-1.5" /><span className="block w-5 h-0.5 bg-slate-800 mb-1.5" /><span className="block w-5 h-0.5 bg-slate-800" />
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden px-3 pb-3 space-y-1">
            {navItems.map(item => <Link key={item.href} href={item.href} className="block px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-white/60" onClick={() => setIsOpen(false)}>{item.label}</Link>)}
            <div className="pt-2"><Button fullWidth href="/contact">Get in Touch</Button></div>
          </div>
        )}
      </div>
    </nav>
  )
}
