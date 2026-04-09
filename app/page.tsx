import { Button } from '@/components/ui/Button'
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { SocialIcon } from '@/components/ui/SocialIcon'
import { portfolioInfo, skills, socialLinks } from '@/lib/data'

/**
 * Hero Section Component
 */
function HeroSection() {
  const getBrandColor = (icon: string) => {
    switch (icon) {
      case 'whatsapp': return 'hover:bg-[#25D366]';
      case 'facebook': return 'hover:bg-[#1877F2]';
      case 'telegram': return 'hover:bg-[#0088cc]';
      case 'github': return 'hover:bg-[#333]';
      case 'mail': return 'hover:bg-[#EA4335]';
      default: return 'hover:bg-blue-600';
    }
  }
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900" />

      {/* Animated background blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl dark:opacity-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 opacity-20 rounded-full blur-3xl dark:opacity-10" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
                <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                <span className="gradient-text">{portfolioInfo.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-400 font-semibold">
                {portfolioInfo.title}
              </h2>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-lg">
              {portfolioInfo.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" href="/projects">
                View My Work
              </Button>
              <Button size="lg" variant="outline" href="/contact">
                Get in Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 pt-8">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 shadow-sm transition-all hover:scale-110 hover:text-white ${getBrandColor(link.icon)}`}
                  title={link.name}
                >
                  <SocialIcon icon={link.icon} className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Right side - Profile Image and Stats */}
          <div className="relative group">
            {/* Main Profile Image Frame */}
            <div className="relative z-10 w-full aspect-square max-w-[450px] mx-auto overflow-hidden rounded-[3rem] border-8 border-white dark:border-gray-800 shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:-rotate-2">
              <img
                src={portfolioInfo.avatar}
                alt={portfolioInfo.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>

            {/* Decorative Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-600/10 rounded-full blur-2xl animate-pulse delay-700" />

            {/* Floating Stat Badges */}
            <div className="absolute -right-4 top-1/4 z-20 animate-bounce transition-transform duration-500 delay-100">
               <GlassmorphicCard className="p-4 shadow-xl border-blue-600/20 backdrop-blur-xl">
                 <div className="text-2xl font-black gradient-text">3+</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Years Exp</div>
               </GlassmorphicCard>
            </div>

            <div className="absolute -left-8 bottom-1/4 z-20 animate-bounce transition-transform duration-500 delay-500" style={{ animationDuration: '3.5s' }}>
               <GlassmorphicCard className="p-4 shadow-xl border-purple-600/20 backdrop-blur-xl">
                 <div className="text-2xl font-black gradient-text">10+</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Projects</div>
               </GlassmorphicCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * Home Page
 */
export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">
            About Me
          </h2>
          <GlassmorphicCard className="p-8 sm:p-12">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm passionate about creating beautiful, functional applications that solve real-world problems.
              With expertise in both web and mobile development, I build seamless digital experiences across platforms.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the development community through writing and mentoring.
            </p>
            <div className="mt-8">
              <Button href="/about">
                Learn More About Me
              </Button>
            </div>
          </GlassmorphicCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start a Project?</h2>
          <p className="text-xl mb-8 opacity-90">Let's create something amazing together</p>
          <Button variant="secondary" size="lg" className="text-gray-900" href="/contact">
            Contact Me
          </Button>
        </div>
      </section>
    </div>
  )
}
