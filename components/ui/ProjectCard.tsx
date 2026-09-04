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
    <GlassmorphicCard className="group h-full p-2" hover>
      <div className="flex h-full flex-col overflow-hidden rounded-[1.55rem]">
        <Link href={`/projects/${project.id}`} className="block">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem] bg-[linear-gradient(135deg,#dff8ff,#e8edff_52%,#f3e9ff)]">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl font-black text-white/45">{project.title.charAt(0)}</span>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/42 via-transparent to-white/10" />

            <div className="absolute left-4 top-4 flex flex-wrap gap-2">
              {project.featured && (
                <Badge className="border-white/60 bg-white/72 text-slate-900 shadow-lg backdrop-blur-md text-[10px] font-black uppercase tracking-wider">
                  Featured
                </Badge>
              )}
              <Badge
                variant={project.status === 'completed' ? 'success' : project.status === 'in-progress' ? 'warning' : 'info'}
                className="border-white/30 bg-white/22 text-white shadow-lg backdrop-blur-md text-[10px] font-bold uppercase tracking-wider"
              >
                {statusLabel}
              </Badge>
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <p className="mb-1 text-xs font-bold uppercase tracking-widest text-white/78">
                {project.category === 'mobile' ? 'Mobile App' : project.category === 'web' ? 'Web Application' : 'Digital Product'}
              </p>
              <h3 className="text-2xl font-black leading-tight text-white drop-shadow-sm">{project.title}</h3>
            </div>
          </div>
        </Link>

        <div className="flex flex-1 flex-col p-5">
          <p className="min-h-[4.5rem] line-clamp-3 text-sm leading-6 text-slate-600">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {(project.tags ?? project.technologies).slice(0, 3).map((tag) => (
              <Badge key={tag} variant="info" className="border-white/70 bg-white/42 text-slate-700 backdrop-blur-md text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between border-t border-white/60 pt-4 text-xs text-slate-500">
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
      </div>
    </GlassmorphicCard>
  )
}
