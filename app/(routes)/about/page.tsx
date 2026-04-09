import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { Badge } from '@/components/ui/Badge'
import { DeveloperCard } from '@/components/ui/DeveloperCard'
import { skills, portfolioInfo, experiences } from '@/lib/data'

/**
 * About Page
 */
export default function AboutPage() {
  // Group skills by category
  const skillsByCategory = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, typeof skills>,
  )

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text">About Me</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Passionate Mobile App Developer dedicated to turning ideas into high-performance Android applications.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Bio Section with Developer Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-4xl font-bold gradient-text">Who I Am</h2>
              <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm <strong className="text-blue-600">{portfolioInfo.name}</strong>, an innovative and results-driven <strong>{portfolioInfo.title}</strong> based in {portfolioInfo.location}.
                </p>
                <p>
                  I specialize in building and deploying Android applications using <strong>Flutter</strong> and <strong>Android Studio</strong>. My expertise spans the full-cycle of development — from initial idea validation and UI design to final deployment and app store optimization.
                </p>
                <p>
                  I am focused on delivering high-performance, user-friendly, and scalable applications. I have hands-on experience in <strong>app monetization</strong> (AdMob), <strong>Play Console management</strong>, and delivering real-world projects for clients.
                </p>
                <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Languages</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                      {portfolioInfo.languages?.map(lang => <li key={lang}>{lang}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Strengths</h4>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 text-sm">
                      {portfolioInfo.strengths?.map(s => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <DeveloperCard showFullBio={false} className="shadow-blue-500/10" />
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-10 gradient-text">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp) => (
                <GlassmorphicCard key={exp.id} className="p-8 border-l-4 border-blue-500 hover:border-blue-400 transition-all">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company} • {exp.location}</p>
                    </div>
                    <Badge variant="info" className="mt-2 md:mt-0 self-start">{exp.period}</Badge>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 dark:text-gray-300">
                        <span className="text-blue-500 mr-3 mt-1.5 text-xs">●</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.achievements && (
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                      <h4 className="font-bold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.achievements.map((achievement, idx) => (
                          <Badge key={idx} variant="success" className="bg-green-50 text-green-700 border-green-100">
                            ✓ {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </GlassmorphicCard>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 gradient-text">Skills & Expertise</h2>
            <div className="space-y-8">
              {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
                <div key={category}>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                    {category}
                  </h3>
                  <GlassmorphicCard className="p-6">
                    <div className="flex flex-wrap gap-3">
                      {categorySkills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant={
                            skill.level === 'expert'
                              ? 'success'
                              : skill.level === 'advanced'
                                ? 'default'
                                : 'info'
                          }
                        >
                          {skill.name}
                          <span className="ml-2 font-bold">
                            {skill.level === 'expert'
                              ? '★★★'
                              : skill.level === 'advanced'
                                ? '★★'
                                : '★'}
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </GlassmorphicCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
