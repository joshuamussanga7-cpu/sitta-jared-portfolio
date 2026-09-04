'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { BriefcaseBusiness, CheckCircle2, ChevronDown, Code2, Download, ExternalLink, Gamepad2, Globe2, GraduationCap, Mail, MapPin, Phone, Printer, Sparkles } from 'lucide-react'
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { Badge } from '@/components/ui/Badge'
import { portfolioInfo, experiences, projects, skills } from '@/lib/data'

const skillFilters = ['All', 'Mobile', 'Web', 'Backend', 'Tools', 'Design']

export function CVInteractive() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [openExperience, setOpenExperience] = useState('1')
  const [copied, setCopied] = useState(false)

  const filteredSkills = useMemo(
    () => activeFilter === 'All' ? skills : skills.filter(skill => skill.category === activeFilter),
    [activeFilter],
  )

  const selectedProjects = projects.filter(project => project.featured).slice(0, 6)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioInfo.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${portfolioInfo.email}`
    }
  }

  return (
    <div className="relative overflow-hidden bg-[#f7fbff]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="liquid-blob one" />
        <div className="liquid-blob two" />
        <div className="liquid-blob three" />
        <div className="liquid-orb large" style={{ top: '9%', right: '10%' }} />
        <div className="liquid-orb small" style={{ top: '38%', left: '6%', animationDelay: '-2s' }} />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6 lg:px-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="glass-surface inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-slate-600">
            <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,.8)]" />
            Interactive CV
          </div>
          <div className="flex flex-wrap gap-2">
            <a href={portfolioInfo.resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/45 px-4 py-2 text-sm font-bold text-slate-700 shadow-lg backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/70">
              <Download className="h-4 w-4" /> PDF CV
            </a>
            <button type="button" onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full border border-white/90 bg-white/45 px-4 py-2 text-sm font-bold text-slate-700 shadow-lg backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/70">
              <Printer className="h-4 w-4" /> Print
            </button>
          </div>
        </div>

        <GlassmorphicCard className="p-6 sm:p-10 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_.6fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-blue-600">Mobile • Web • AI • Games</p>
              <h1 className="mt-4 max-w-4xl text-4xl font-black tracking-[-0.05em] text-slate-950 sm:text-6xl">{portfolioInfo.name}</h1>
              <h2 className="mt-4 text-xl font-bold text-slate-600 sm:text-2xl">{portfolioInfo.title}</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{portfolioInfo.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${portfolioInfo.email}`} className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 text-sm font-black text-white shadow-xl hover:-translate-y-0.5 hover:bg-blue-700"><Mail className="h-4 w-4" /> Contact me</a>
                <Link href="/projects" className="inline-flex items-center gap-2 rounded-2xl border border-white/90 bg-white/45 px-5 py-3 text-sm font-black text-slate-700 shadow-lg backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white/70">View projects <ExternalLink className="h-4 w-4" /></Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 content-start">
              <GlassmorphicCard className="p-4" hover={false}><Code2 className="h-5 w-5 text-cyan-500" /><p className="mt-3 text-2xl font-black text-slate-950">{projects.length}+</p><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Projects</p></GlassmorphicCard>
              <GlassmorphicCard className="p-4" hover={false}><Sparkles className="h-5 w-5 text-violet-500" /><p className="mt-3 text-2xl font-black text-slate-950">{skills.length}+</p><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Skills</p></GlassmorphicCard>
              <GlassmorphicCard className="p-4" hover={false}><Globe2 className="h-5 w-5 text-blue-500" /><p className="mt-3 text-2xl font-black text-slate-950">Tanzania</p><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Location</p></GlassmorphicCard>
              <GlassmorphicCard className="p-4" hover={false}><Gamepad2 className="h-5 w-5 text-emerald-500" /><p className="mt-3 text-2xl font-black text-slate-950">3</p><p className="text-xs font-bold uppercase tracking-wider text-slate-500">Games</p></GlassmorphicCard>
            </div>
          </div>
        </GlassmorphicCard>
      </section>

      <main className="relative z-10 mx-auto grid max-w-7xl gap-7 px-4 pb-24 sm:px-6 lg:grid-cols-[minmax(0,1fr)_330px] lg:px-8">
        <div className="space-y-7">
          <GlassmorphicCard id="summary" className="p-7 sm:p-9">
            <div className="mb-6 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-black">01</span><div><p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Professional Summary</p><h2 className="text-2xl font-black text-slate-950">What I bring</h2></div></div>
            <div className="grid gap-4 md:grid-cols-2">
              {['Product-minded development from idea to deployment','Mobile-first engineering with Flutter and Android','Modern web development with React, Next.js and TypeScript','Firebase-backed applications, data and service integrations','AI-assisted product experiences and practical automation','Game development with a focus on interaction and player feedback'].map(item => <div key={item} className="rounded-2xl border border-white/90 bg-white/35 p-4 text-sm font-semibold leading-6 text-slate-700 backdrop-blur-xl"><CheckCircle2 className="mb-2 h-5 w-5 text-cyan-500" />{item}</div>)}
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard id="experience" className="p-7 sm:p-9">
            <div className="mb-7 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-black">02</span><div><p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Experience</p><h2 className="text-2xl font-black text-slate-950">Professional timeline</h2></div></div>
            <div className="space-y-3">
              {experiences.map(exp => {
                const open = openExperience === exp.id
                return <div key={exp.id} className="rounded-3xl border border-white/90 bg-white/28 p-5 backdrop-blur-xl">
                  <button type="button" className="flex w-full items-start justify-between gap-5 text-left" onClick={() => setOpenExperience(open ? '' : exp.id)} aria-expanded={open}>
                    <div><div className="mb-2 flex flex-wrap items-center gap-2"><Badge variant="info">{exp.period}</Badge><Badge variant="success">Independent</Badge></div><h3 className="text-xl font-black text-slate-950">{exp.title}</h3><p className="mt-1 text-sm font-bold text-blue-600">{exp.company} · {exp.location}</p></div>
                    <ChevronDown className={`mt-1 h-5 w-5 shrink-0 text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`} />
                  </button>
                  {open && <div className="mt-5 grid gap-6 border-t border-white/70 pt-5 md:grid-cols-2">
                    <div><h4 className="text-sm font-black uppercase tracking-wider text-slate-500">Responsibilities</h4><ul className="mt-3 space-y-3">{exp.description.map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-500" />{item}</li>)}</ul></div>
                    <div><h4 className="text-sm font-black uppercase tracking-wider text-slate-500">Achievements</h4><ul className="mt-3 space-y-3">{(exp.achievements ?? []).map(item => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />{item}</li>)}</ul></div>
                  </div>}
                </div>
              })}
            </div>
          </GlassmorphicCard>

          <GlassmorphicCard id="education" className="p-7 sm:p-9">
            <div className="mb-7 flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white font-black">03</span><div><p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">Education</p><h2 className="text-2xl font-black text-slate-950">Academic background</h2></div></div>
            <div className="rounded-3xl border border-white/90 bg-white/30 p-6 backdrop-blur-xl"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-wider text-slate-500">Bachelor&apos;s Degree</p><h3 className="mt-2 text-2xl font-black text-slate-950">Bachelor of Science in Nursing</h3><p className="mt-2 font-bold text-blue-600">St. John&apos;s University of Tanzania</p></div><div className="rounded-2xl bg-violet-50 px-4 py-3 text-xs font-black uppercase tracking-wider text-violet-700">University Education</div></div><p className="mt-5 max-w-3xl text-sm leading-7 text-slate-600">A clinical and academic background that strengthens problem solving, structured thinking, communication, discipline, and designing technology around real human needs.</p></div>
          </GlassmorphicCard>

          <GlassmorphicCard id="skills" className="p-7 sm:p-9">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-600 text-white font-black">04</span><div><p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">Skills & Expertise</p><h2 className="text-2xl font-black text-slate-950">My toolkit</h2></div></div><div className="flex flex-wrap gap-2">{skillFilters.map(filter => <button key={filter} type="button" onClick={() => setActiveFilter(filter)} className={`rounded-full px-3 py-1.5 text-xs font-black transition-all ${activeFilter === filter ? 'bg-slate-950 text-white shadow-lg' : 'bg-white/50 text-slate-600 hover:bg-white/80'}`}>{filter}</button>)}</div></div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{filteredSkills.map(skill => <div key={skill.name} className="rounded-2xl border border-white/90 bg-white/30 p-4 backdrop-blur-xl"><div className="flex items-center justify-between gap-3"><span className="font-bold text-slate-800">{skill.name}</span><span className="text-xs font-black text-blue-600">{skill.level}</span></div><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-200/70"><div className={`h-full rounded-full ${skill.level === 'expert' ? 'w-[96%]' : skill.level === 'advanced' ? 'w-[84%]' : skill.level === 'intermediate' ? 'w-[68%]' : 'w-[48%]'} bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500`} /></div></div>)}</div>
          </GlassmorphicCard>

          <GlassmorphicCard id="projects" className="p-7 sm:p-9">
            <div className="mb-7 flex items-center justify-between gap-4"><div className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-600 text-white font-black">05</span><div><p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Selected Projects</p><h2 className="text-2xl font-black text-slate-950">Evidence of work</h2></div></div><Link href="/projects" className="text-sm font-black text-blue-600 hover:underline">All projects →</Link></div>
            <div className="grid gap-4 md:grid-cols-2">{selectedProjects.map(project => <div key={project.id} className="rounded-3xl border border-white/90 bg-white/30 p-5 backdrop-blur-xl"><div className="flex items-start justify-between gap-4"><div><Badge variant={project.category === 'web' ? 'info' : 'default'}>{project.category === 'mobile' ? 'Mobile' : project.category === 'web' ? 'Web' : 'Game'}</Badge><h3 className="mt-3 text-lg font-black text-slate-950">{project.title}</h3></div>{project.status === 'completed' && <span className="text-xs font-black text-emerald-600">Completed</span>}</div><p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{project.description}</p><div className="mt-4 flex flex-wrap gap-2">{project.technologies.slice(0,4).map(tech => <span key={tech} className="rounded-full bg-white/55 px-2.5 py-1 text-[11px] font-bold text-slate-600">{tech}</span>)}</div><Link href={`/projects/${project.id}`} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-blue-600 hover:gap-3">Open case study <ExternalLink className="h-4 w-4" /></Link></div>)}</div>
          </GlassmorphicCard>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <GlassmorphicCard className="p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">Quick Contact</p>
            <h3 className="mt-2 text-xl font-black text-slate-950">Let&apos;s work together</h3>
            <div className="mt-5 space-y-3 text-sm font-semibold text-slate-600">
              <a href={`mailto:${portfolioInfo.email}`} className="flex items-center gap-3 rounded-2xl bg-white/45 p-3 hover:bg-white/70"><Mail className="h-4 w-4 text-blue-600" />{portfolioInfo.email}</a>
              <a href={`tel:${portfolioInfo.phone}`} className="flex items-center gap-3 rounded-2xl bg-white/45 p-3 hover:bg-white/70"><Phone className="h-4 w-4 text-blue-600" />{portfolioInfo.phone}</a>
              <div className="flex items-center gap-3 rounded-2xl bg-white/45 p-3"><MapPin className="h-4 w-4 text-blue-600" />{portfolioInfo.location}</div>
            </div>
            <button type="button" onClick={copyEmail} className="mt-4 w-full rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white shadow-xl hover:-translate-y-0.5 hover:bg-blue-700">{copied ? 'Email copied ✓' : 'Copy email address'}</button>
          </GlassmorphicCard>

          <GlassmorphicCard className="p-6">
            <div className="flex items-center gap-3"><BriefcaseBusiness className="h-5 w-5 text-cyan-600" /><h3 className="text-lg font-black text-slate-950">Core strengths</h3></div>
            <div className="mt-4 space-y-2">{portfolioInfo.strengths.map(strength => <div key={strength} className="rounded-2xl bg-white/40 p-3 text-sm font-semibold leading-5 text-slate-700">{strength}</div>)}</div>
          </GlassmorphicCard>

          <GlassmorphicCard className="p-6">
            <div className="flex items-center gap-3"><GraduationCap className="h-5 w-5 text-violet-600" /><h3 className="text-lg font-black text-slate-950">Languages</h3></div>
            <div className="mt-4 flex flex-wrap gap-2">{portfolioInfo.languages.map(language => <Badge key={language} variant="info">{language}</Badge>)}</div>
          </GlassmorphicCard>

          <GlassmorphicCard className="p-6">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">Recruiter note</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">This interactive version is designed for quick scanning. The PDF and print controls provide a traditional CV format when a recruiter needs a shareable document.</p>
          </GlassmorphicCard>
        </aside>
      </main>
    </div>
  )
}
