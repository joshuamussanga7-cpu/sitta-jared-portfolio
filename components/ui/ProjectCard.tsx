import Link from 'next/link'
import Image from 'next/image'
import { Project } from '@/lib/types'
import { GlassmorphicCard } from './GlassmorphicCard'
import { Badge } from './Badge'
import { Button } from './Button'
import { DownloadButton } from './DownloadButton'

interface ProjectCardProps {
  project: Project
}

/**
 * Project Card Component
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <GlassmorphicCard className="cursor-pointer group h-full flex flex-col overflow-hidden" hover>
      {/* Project Image with Screenshots */}
      <div className="relative">
        <Link href={`/projects/${project.id}`}>
          <div className="w-full h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mb-4 overflow-hidden relative">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white text-3xl font-bold opacity-20">
                {project.title.charAt(0)}
              </div>
            )}
          </div>
        </Link>

        {/* Status Badge */}
        <div className="absolute top-3 right-3 flex flex-col items-end gap-2">
          {project.status && (
            <Badge
              variant={project.status === 'completed' ? 'success' : project.status === 'in-progress' ? 'warning' : 'info'}
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5"
            >
              {project.status}
            </Badge>
          )}

          {project.monetization && project.monetization.length > 0 && (
            <Badge
              variant="default"
              className="bg-green-600/90 text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 border-none shadow-lg"
            >
              $ {project.monetization[0]}
            </Badge>
          )}
        </div>

        {/* Screenshot Count */}
        {project.screenshots && project.screenshots.length > 1 && (
          <div className="absolute bottom-3 right-3">
            <Badge variant="info" className="text-xs">
              {project.screenshots.length} screenshots
            </Badge>
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="flex-1 flex flex-col p-4">
        <Link href={`/projects/${project.id}`}>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 line-clamp-2">
            {project.description}
          </p>
        </Link>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="info" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="info" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>

        {/* Project Stats */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-4">
          <span className="capitalize">{project.category}</span>
          {project.timeline && <span>{project.timeline}</span>}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button href={`/projects/${project.id}`} size="sm" className="flex-1">
            View Project
          </Button>

          {project.links.apk && (
            <DownloadButton
              href={project.links.apk}
              type="apk"
              className="px-3 py-2"
            />
          )}
        </div>
      </div>
    </GlassmorphicCard>
  )
}
