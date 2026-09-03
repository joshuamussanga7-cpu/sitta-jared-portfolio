import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { SocialIcon } from '@/components/ui/SocialIcon'
import { portfolioInfo, projects, skills, socialLinks } from '@/lib/data'

function HeroSection() {
  const getBrandColor = (icon: string) => {
    switch (icon) {
      case 'whatsapp': return 'hover:bg-[#25D366]'
      case 'facebook': return 'hover:bg-[#1877F2]'
      case 'telegram': return 'hover:bg-[#0088cc]'
      case 'github': return 'hover:bg-[#333]'
      case 'mail': return 'hover:bg-[#EA4335]'
      default: return 'hover:bg-blue-600'
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-950 dark:to-blue-950/30" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl dark:opacity-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-3xl dark:opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Mobile • Web • AI</p>
              <h1 className="text-5xl sm:text-6xl font-black leading-tight tracking-tight">
                <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                <span className="gradient-text">{portfolioInfo.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-400 font-semibold">
                {portfolioInfo.title}
              </h2>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
              {portfolioInfo.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" href="/projects">Explore My Work</Button>
              <Button size="lg" variant="outline" href="/contact">Let's Work Together</Button>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 shadow-sm transition-all hover:scale-110 hover:text-white ${getBrandColor(link.icon)}`}
                  title={link.name}
                >
                  <SocialIcon icon={link.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="relative z-10 w-full aspect-square max-w-[450px] mx-auto overflow-hidden rounded-[3rem] border-8 border-white dark:border-gray-800 shadow-2xl transition-all duration-700 group-hover:scale-[1.02]">
              <img src={portfolioInfo.avatar} alt={portfolioInfo.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            <div className="absolute -right-4 top-1/4 z-20">
              <GlassmorphicCard className="p-4 shadow-xl border-blue-600/20 backdrop-blur-xl">
                <div className="text-2xl font-black gradient-text">3+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Years Exp</div>
              </GlassmorphicCard>
            </div>

            <div className="absolute -left-8 bottom-1/4 z-20">
              <GlassmorphicCard className="p-4 shadow-xl border-purple-600/20 backdrop-blur-xl">
                <div className="text-2xl font-black gradient-text">13+</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Projects</div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 5)

  return (
    <div className="w-full">
      <HeroSection />

      <section className="py-20 bg-gray-50 dark:bg-gray-900/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">Selected Work</p>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-950 dark:text-white">Built to be useful.</h2>
              <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">A selection of products spanning education, AI, marketplaces, productivity, and digital platforms.</p>
            </div>
            <Link href="/projects" className="text-sm font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400">View all projects →</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10 items-stretch">
            <GlassmorphicCard className="p-8 sm:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-3">About Me</p>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 dark:text-white mb-6">I turn ideas into working products.</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-5">I'm passionate about creating useful applications that solve real-world problems across mobile and web platforms.</p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">My work combines product thinking, clean user experiences, modern development tools, and hands-on deployment.</p>
              <div className="mt-8"><Button href="/about">More About Me</Button></div>
            </GlassmorphicCard>

            <GlassmorphicCard className="p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-purple-600 dark:text-purple-400 mb-3">Core Stack</p>
              <h3 className="text-2xl font-bold text-gray-950 dark:text-white mb-6">Technologies I build with</h3>
              <div className="flex flex-wrap gap-2">
                {skills.slice(0, 10).map((skill) => (
                  <span key={skill.name} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300">{skill.name}</span>
                ))}
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] opacity-80 mb-3">Have an idea?</p>
          <h2 className="text-4xl sm:text-5xl font-black mb-5">Let's build something valuable.</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">Tell me what you want to build and let's turn it into a real product.</p>
          <Button variant="secondary" size="lg" className="text-gray-900" href="/contact">Start a Conversation</Button>
        </div>
      </section>
    </div>
  )
}
