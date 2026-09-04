'use client'

import Link from 'next/link'
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react'
import { socialLinks, portfolioInfo } from '@/lib/data'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const socialIcon = (name: string) => {
    const value = name.toLowerCase()
    if (value.includes('github')) return <Github className="h-4 w-4" />
    if (value.includes('linkedin')) return <Linkedin className="h-4 w-4" />
    if (value.includes('mail') || value.includes('email')) return <Mail className="h-4 w-4" />
    return <span className="text-sm font-black">{name.charAt(0).toUpperCase()}</span>
  }

  return (
    <footer className="relative mt-20 overflow-hidden liquid-scene border-t border-white/60 dark:border-white/10">
      <div className="liquid-orb large -left-12 top-8 opacity-30" />
      <div className="liquid-orb small right-[18%] top-10 opacity-30" />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] dark:bg-slate-950/20" />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="glass-surface rounded-[2rem] p-6 sm:p-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_.8fr_.8fr]">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/45 px-3 py-1 text-[10px] font-black uppercase tracking-[.22em] text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                <Sparkles className="h-3.5 w-3.5" /> Build. Ship. Grow.
              </div>
              <h3 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">SITTA<span className="text-slate-400">.</span></h3>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">{portfolioInfo.description}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,.7)]" /> Open to meaningful projects
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">Explore</h4>
              <div className="space-y-2 text-sm">
                {[['Home', '/'], ['Projects', '/projects'], ['CV', '/cv'], ['Blog', '/blog'], ['Contact', '/contact']].map(([label, href]) => (
                  <Link key={href} href={href} className="group flex w-fit items-center gap-1.5 rounded-lg py-1 text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white">
                    {label}<ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-slate-900 dark:text-white">Connect</h4>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((link) => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} title={link.name} className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-white/75 bg-white/45 text-slate-600 shadow-sm backdrop-blur-xl hover:-translate-y-1 hover:bg-white/75 hover:text-slate-950 hover:shadow-lg dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white">
                    {socialIcon(link.name)}
                  </a>
                ))}
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">Built with curiosity, code, and a little bit of liquid glass.</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/55 pt-5 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} {portfolioInfo.name}. All rights reserved.</p>
            <div className="flex items-center gap-4"><span>Next.js · React · TypeScript</span><Link href="/contact" className="font-semibold text-slate-700 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white">Let’s build →</Link></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
