'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
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
          <div className="hidden md:block"><Button size="sm" href="/contact">Get in Touch</Button></div>
          <button aria-label="Toggle menu" className="md:hidden p-2 rounded-xl hover:bg-white/60" onClick={() => setIsOpen(!isOpen)}>
            <span className="block w-5 h-0.5 bg-slate-800 mb-1.5" />
            <span className="block w-5 h-0.5 bg-slate-800 mb-1.5" />
            <span className="block w-5 h-0.5 bg-slate-800" />
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden px-3 pb-3 space-y-1">
            {navItems.map(item => (
              <Link key={item.href} href={item.href} className="block px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-white/60" onClick={() => setIsOpen(false)}>
                {item.label}
              </Link>
            ))}
            <div className="pt-2"><Button fullWidth href="/contact">Get in Touch</Button></div>
          </div>
        )}
      </div>
    </nav>
  )
}
