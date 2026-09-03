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

export function ProjectCard({ project }: ProjectCardProps) {
  const statusLabel = project.status === 'in-progress' ? 'In Progress' : project.status === 'completed' ? 'Completed' : 'Planned'

  return (
    <GlassmorphicCard className="group h-full overflow-hidden border-gray-200/70 dark:border-gray-800/70 bg-white/80 dark:bg-gray-900/80" hover>
      <Link href={`/projects/${project.id}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-black text-white/20">{project.title.charAt(0)}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {project.featured && (
              <Badge className="bg-white text-gray-950 border-none shadow-lg text-[10px] font-black uppercase tracking-wider">
                Featured
              </Badge>
            )}
            <Badge
              variant={project.status === 'completed' ? 'success' : project.status === 'in-progress' ? 'warning' : 'info'}
              className="text-[10px] font-bold uppercase tracking-wider shadow-lg"
            >
              {statusLabel}
            </Badge>
          </div>

          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">
              {project.category === 'mobile' ? 'Mobile App' : project.category === 'web' ? 'Web Application' : 'Digital Product'}
            </p>
            <h3 className="text-2xl font-black text-white leading-tight">{project.title}</h3>
          </div>
        </div>
      </Link>

      <div className="flex flex-col p-5">
        <p className="text-sm leading-6 text-gray-600 dark:text-gray-400 line-clamp-3 min-h-[4.5rem]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {(project.tags ?? project.technologies).slice(0, 3).map((tag) => (
            <Badge key={tag} variant="info" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4 text-xs text-gray-500 dark:text-gray-500">
          <span>{project.role ?? 'Developer'}</span>
          {project.timeline && <span>{project.timeline}</span>}
        </div>

        <div className="mt-4 flex gap-2">
          <Button href={`/projects/${project.id}`} size="sm" className="flex-1">
            View Case Study
          </Button>
          {project.links.apk && (
            <DownloadButton href={project.links.apk} type="apk" className="px-3 py-2" />
          )}
        </div>
      </div>
    </GlassmorphicCard>
  )
}
