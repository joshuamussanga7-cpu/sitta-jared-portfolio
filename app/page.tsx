import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { SocialIcon } from '@/components/ui/SocialIcon'
import { portfolioInfo, projects, skills, socialLinks } from '@/lib/data'

function LiquidBackground() {
  return <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
    <div className="liquid-blob one" /><div className="liquid-blob two" /><div className="liquid-blob three" /><div className="liquid-blob four" />
    <div className="liquid-orb large" style={{top:'18%',right:'12%'}} /><div className="liquid-orb small" style={{top:'42%',left:'8%',animationDelay:'-2s'}} /><div className="liquid-orb" style={{bottom:'12%',right:'22%',animationDelay:'-4s'}} /><div className="liquid-orb small" style={{top:'10%',left:'48%',animationDelay:'-1s'}} />
    <div className="absolute inset-0 liquid-grid opacity-40" />
  </div>
}

function HeroSection() {
  const getBrandColor = (icon: string) => ({ whatsapp:'hover:bg-[#25D366]', facebook:'hover:bg-[#1877F2]', telegram:'hover:bg-[#0088cc]', github:'hover:bg-[#333]', mail:'hover:bg-[#EA4335]' }[icon] || 'hover:bg-blue-600')
  return <section className="min-h-[calc(100vh-64px)] flex items-center justify-center relative overflow-hidden liquid-scene pt-20">
    <LiquidBackground />
    <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_.95fr] gap-14 lg:gap-8 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full glass-surface px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-slate-600 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> Mobile • Web • AI
          </div>
          <div className="space-y-5">
            <h1 className="text-6xl sm:text-7xl lg:text-[6.3rem] font-black leading-[.94] tracking-[-.055em] text-slate-950">Hi, I'm <span className="gradient-text">{portfolioInfo.name}</span></h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-slate-600">{portfolioInfo.title}</h2>
          </div>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl">{portfolioInfo.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Button size="lg" href="/projects">Explore My Work</Button>
            <Button size="lg" variant="outline" href="/contact">Let's Work Together</Button>
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            {socialLinks.map((link) => <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={`w-11 h-11 rounded-full glass-surface flex items-center justify-center text-slate-600 border border-white/90 shadow-lg hover:scale-110 hover:text-white ${getBrandColor(link.icon)}`} title={link.name}><SocialIcon icon={link.icon} className="w-5 h-5" /></a>)}
          </div>
        </div>
        <div className="relative min-h-[520px] flex items-center justify-center">
          <div className="absolute w-[430px] h-[430px] rounded-full bg-white/30 blur-3xl" />
          <div className="relative z-10 w-full max-w-[470px] aspect-square rounded-[4rem] glass-surface p-3 shadow-[0_40px_100px_rgba(80,90,130,.18)] rotate-2 hover:rotate-0 transition-transform duration-700">
            <div className="relative overflow-hidden rounded-[3.4rem] w-full h-full bg-white/30">
              <img src={portfolioInfo.avatar} alt={portfolioInfo.name} className="w-full h-full object-cover" />
              <div className="glass-highlight" />
            </div>
          </div>
          <div className="liquid-orb" style={{top:'5%',left:'4%'}} /><div className="liquid-orb large" style={{bottom:'3%',right:'2%',animationDelay:'-5s'}} />
          <GlassmorphicCard className="absolute -right-2 top-[24%] z-20 p-4 shadow-xl"><div className="text-2xl font-black gradient-text">3+</div><div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Years Exp</div></GlassmorphicCard>
          <GlassmorphicCard className="absolute -left-5 bottom-[22%] z-20 p-4 shadow-xl"><div className="text-2xl font-black gradient-text">13+</div><div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Projects</div></GlassmorphicCard>
        </div>
      </div>
    </div>
  </section>
}

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 5)
  return <div className="w-full bg-white">
    <HeroSection />
    <section className="py-24 relative overflow-hidden bg-[#fbfcff]"><div className="absolute -left-40 top-20 w-96 h-96 rounded-full bg-cyan-100/50 blur-3xl" /><div className="absolute -right-40 bottom-0 w-[30rem] h-[30rem] rounded-full bg-purple-100/50 blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10"><div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12"><div><p className="text-sm font-bold uppercase tracking-[.2em] text-blue-600 mb-3">Selected Work</p><h2 className="text-4xl sm:text-5xl font-black text-slate-950">Built to be useful.</h2><p className="mt-4 max-w-2xl text-slate-600">A selection of products spanning education, AI, marketplaces, productivity, and digital platforms.</p></div><Link href="/projects" className="text-sm font-bold text-blue-600 hover:text-purple-600">View all projects →</Link></div><div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">{featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div></div>
    </section>
    <section className="py-24 relative overflow-hidden"><div className="liquid-blob two" style={{opacity:.22}} /><div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10"><div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10 items-stretch"><GlassmorphicCard className="p-8 sm:p-12"><p className="text-sm font-bold uppercase tracking-[.2em] text-blue-600 mb-3">About Me</p><h2 className="text-3xl sm:text-4xl font-black text-slate-950 mb-6">I turn ideas into working products.</h2><p className="text-lg text-slate-600 leading-relaxed mb-5">I'm passionate about creating useful applications that solve real-world problems across mobile and web platforms.</p><p className="text-lg text-slate-600 leading-relaxed">My work combines product thinking, clean user experiences, modern development tools, and hands-on deployment.</p><div className="mt-8"><Button href="/about">More About Me</Button></div></GlassmorphicCard><GlassmorphicCard className="p-8 sm:p-10"><p className="text-sm font-bold uppercase tracking-[.2em] text-purple-600 mb-3">Core Stack</p><h3 className="text-2xl font-bold text-slate-950 mb-6">Technologies I build with</h3><div className="flex flex-wrap gap-2">{skills.slice(0,10).map((skill)=><span key={skill.name} className="rounded-full glass-surface px-4 py-2 text-sm font-semibold text-slate-700">{skill.name}</span>)}</div></GlassmorphicCard></div></div></section>
    <section className="py-24 relative overflow-hidden liquid-scene"><LiquidBackground /><div className="relative z-10 max-w-4xl mx-auto px-5 text-center"><div className="glass-surface rounded-[3rem] p-10 sm:p-14"><p className="text-sm font-bold uppercase tracking-[.2em] text-blue-600 mb-3">Have an idea?</p><h2 className="text-4xl sm:text-5xl font-black text-slate-950 mb-5">Let's build something valuable.</h2><p className="text-lg sm:text-xl text-slate-600 mb-8">Tell me what you want to build and let's turn it into a real product.</p><Button size="lg" href="/contact">Start a Conversation</Button></div></div></section>
  </div>
}
