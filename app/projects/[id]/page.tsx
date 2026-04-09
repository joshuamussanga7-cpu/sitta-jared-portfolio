import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from '@/lib/data'
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { Badge } from '@/components/ui/Badge'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { DownloadButton } from '@/components/ui/DownloadButton'

interface ProjectPageProps {
  params: Promise<{
    id: string
  }>
}

/**
 * Individual Project Detail Page
 */
export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const id = resolvedParams.id

  // Find project by ID - using loose equality or trimming just in case
  const project = projects.find(p => p.id === id || p.id === decodeURIComponent(id))

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-6"
        >
          ← Back to Projects
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Header */}
            <GlassmorphicCard className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 text-lg">
                    {project.description}
                  </p>
                </div>
                <Badge
                  variant={project.status === 'completed' ? 'success' : project.status === 'in-progress' ? 'warning' : 'info'}
                  className="ml-4"
                >
                  {project.status || 'completed'}
                </Badge>
              </div>

              {/* Project Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {project.role && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    <span>{project.role}</span>
                  </div>
                )}
                {project.timeline && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    <span>{project.timeline}</span>
                  </div>
                )}
                {project.teamSize && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <span>{project.teamSize} {project.teamSize === 1 ? 'Solo' : 'Members'}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  <span className="capitalize">{project.category}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.links.github && (
                  <DownloadButton href={project.links.github} type="github" />
                )}
                {project.links.live && (
                  <DownloadButton href={project.links.live} type="live" />
                )}
                {project.links.demo && (
                  <DownloadButton href={project.links.demo} type="demo" />
                )}
                {project.links.apk && (
                  <div className="flex flex-col gap-1">
                    <DownloadButton href={project.links.apk} type="apk" />
                    {project.links.sha256 && (
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono break-all max-w-[200px]">
                        SHA256: {project.links.sha256}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </GlassmorphicCard>

            {/* Project Gallery */}
            {project.screenshots && project.screenshots.length > 0 && (
              <GlassmorphicCard className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Project Screenshots
                </h2>
                <ImageGallery
                  images={project.screenshots}
                  alt={project.title}
                  isMobile={project.category === 'mobile'}
                />
              </GlassmorphicCard>
            )}

            {/* Detailed Description */}
            {project.longDescription && (
              <GlassmorphicCard className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  About This Project
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                  {project.longDescription}
                </p>
              </GlassmorphicCard>
            )}

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <GlassmorphicCard className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Key Features
                </h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50/50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 text-sm leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </GlassmorphicCard>
            )}

            {/* Use Cases */}
            {project.useCases && project.useCases.length > 0 && (
              <GlassmorphicCard className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Use Cases
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.useCases.map((useCase, index) => (
                    <div key={index} className="px-4 py-2 bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-800 rounded-lg text-purple-700 dark:text-purple-300 text-sm font-medium">
                      {useCase}
                    </div>
                  ))}
                </div>
              </GlassmorphicCard>
            )}

            {/* Project Status Note */}
            {project.statusNote && (
              <GlassmorphicCard className="p-6 border-l-4 border-l-green-500">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Current Status
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {project.statusNote}
                </p>
              </GlassmorphicCard>
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <GlassmorphicCard className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Challenges & Solutions
                </h2>
                <div className="space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-blue-500 rounded-full" />
                        {challenge.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 pl-3.5 border-l border-gray-200 dark:border-gray-700 ml-0.5">
                        {challenge.description}
                      </p>
                    </div>
                  ))}
                </div>
              </GlassmorphicCard>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <GlassmorphicCard className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="info">
                    {tech}
                  </Badge>
                ))}
              </div>
            </GlassmorphicCard>

            {/* Project Links */}
            <GlassmorphicCard className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Project Links
              </h3>
              <div className="space-y-3">
                {project.links.github && (
                  <DownloadButton
                    href={project.links.github}
                    type="github"
                    className="w-full justify-center"
                  />
                )}
                {project.links.live && (
                  <DownloadButton
                    href={project.links.live}
                    type="live"
                    className="w-full justify-center"
                  />
                )}
                {project.links.demo && (
                  <DownloadButton
                    href={project.links.demo}
                    type="demo"
                    className="w-full justify-center"
                  />
                )}
                {project.links.apk && (
                  <div className="flex flex-col gap-1">
                    <DownloadButton
                      href={project.links.apk}
                      type="apk"
                      className="w-full justify-center"
                    />
                    {project.links.sha256 && (
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 font-mono break-all text-center">
                        SHA256: {project.links.sha256}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </div>
    </div>
  )
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}
