import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { projects } from '@/lib/data'
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { Badge } from '@/components/ui/Badge'
import { ImageGallery } from '@/components/ui/ImageGallery'
import { DownloadButton } from '@/components/ui/DownloadButton'
import { Button } from '@/components/ui/Button'

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

const statusConfig = {
  completed: { label: 'Completed', variant: 'success' as const },
  'in-progress': { label: 'In Progress', variant: 'warning' as const },
  planned: { label: 'Planned', variant: 'info' as const },
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const id = resolvedParams.id
  const project = projects.find(p => p.id === id || p.id === decodeURIComponent(id))

  if (!project) notFound()

  const status = statusConfig[project.status ?? 'completed']
  const relatedProjects = projects
    .filter(p => p.id !== project.id && (p.category === project.category || p.tags?.some(t => project.tags?.includes(t))))
    .slice(0, 3)

  const hasLinks = Boolean(project.links.github || project.links.live || project.links.demo || project.links.apk)

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/projects" className="group mb-8 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          Back to Projects
        </Link>

        {/* Case-study hero */}
        <section className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl shadow-gray-200/40 dark:border-gray-800 dark:bg-gray-900 dark:shadow-black/20">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <Badge variant={status.variant}>{status.label}</Badge>
                <Badge variant="info">{project.category === 'mobile' ? 'Mobile App' : project.category === 'web' ? 'Web Application' : 'Digital Product'}</Badge>
                {project.featured && <Badge className="bg-gray-950 text-white dark:bg-white dark:text-gray-950">Featured</Badge>}
              </div>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-gray-950 dark:text-white sm:text-5xl lg:text-6xl">{project.title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-300">{project.description}</p>

              {project.tags && project.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map(tag => <Badge key={tag} variant="info">{tag}</Badge>)}
                </div>
              )}

              {hasLinks && (
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.links.live && <DownloadButton href={project.links.live} type="live" />}
                  {project.links.demo && <DownloadButton href={project.links.demo} type="demo" />}
                  {project.links.github && <DownloadButton href={project.links.github} type="github" />}
                  {project.links.apk && <DownloadButton href={project.links.apk} type="apk" />}
                </div>
              )}
            </div>

            <div className="relative min-h-[300px] overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 lg:min-h-[500px]">
              {project.image ? (
                <Image src={project.image} alt={project.title} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10rem] font-black text-white/15">{project.title.charAt(0)}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </section>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            {/* Overview */}
            <GlassmorphicCard className="p-7 sm:p-9">
              <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">01 · Overview</p>
              <h2 className="text-2xl font-black text-gray-950 dark:text-white sm:text-3xl">What I built</h2>
              {project.longDescription && <p className="mt-5 whitespace-pre-line text-base leading-8 text-gray-600 dark:text-gray-300">{project.longDescription}</p>}
            </GlassmorphicCard>

            {/* Project facts */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['Role', project.role],
                ['Timeline', project.timeline],
                ['Team', project.teamSize ? `${project.teamSize} ${project.teamSize === 1 ? 'person' : 'people'}` : undefined],
                ['Type', project.category === 'mobile' ? 'Mobile' : project.category === 'web' ? 'Web' : 'Digital'],
              ].filter(([, value]) => value).map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{label}</p>
                  <p className="mt-2 font-bold text-gray-900 dark:text-white">{value}</p>
                </div>
              ))}
            </div>

            {/* Features */}
            {project.features?.length ? (
              <GlassmorphicCard className="p-7 sm:p-9">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">02 · Solution</p>
                <h2 className="text-2xl font-black text-gray-950 dark:text-white sm:text-3xl">Key features</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature, index) => (
                    <div key={index} className="group rounded-2xl border border-gray-200 bg-gray-50/80 p-4 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50/50 dark:border-gray-800 dark:bg-gray-950/50 dark:hover:border-blue-800 dark:hover:bg-blue-950/20">
                      <div className="flex items-start gap-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-xs font-black text-white">{String(index + 1).padStart(2, '0')}</span>
                        <span className="pt-1 text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassmorphicCard>
            ) : null}

            {/* Use cases */}
            {project.useCases?.length ? (
              <GlassmorphicCard className="p-7 sm:p-9">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">03 · Applications</p>
                <h2 className="text-2xl font-black text-gray-950 dark:text-white sm:text-3xl">Who it is for</h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.useCases.map(useCase => <span key={useCase} className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300">{useCase}</span>)}
                </div>
              </GlassmorphicCard>
            ) : null}

            {/* Screenshots */}
            {project.screenshots?.length ? (
              <GlassmorphicCard className="p-7 sm:p-9">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">04 · Visuals</p>
                <h2 className="mb-6 text-2xl font-black text-gray-950 dark:text-white sm:text-3xl">Screenshots</h2>
                <ImageGallery images={project.screenshots} alt={project.title} isMobile={project.category === 'mobile'} />
              </GlassmorphicCard>
            ) : null}

            {/* Challenges */}
            {project.challenges?.length ? (
              <GlassmorphicCard className="p-7 sm:p-9">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">05 · Engineering</p>
                <h2 className="text-2xl font-black text-gray-950 dark:text-white sm:text-3xl">Challenges & solutions</h2>
                <div className="mt-7 space-y-6">
                  {project.challenges.map((challenge, index) => (
                    <div key={index} className="border-l-2 border-blue-500 pl-5">
                      <h3 className="font-bold text-gray-900 dark:text-white">{challenge.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-gray-600 dark:text-gray-400">{challenge.description}</p>
                    </div>
                  ))}
                </div>
              </GlassmorphicCard>
            ) : null}

            {/* Results */}
            {project.results?.length ? (
              <GlassmorphicCard className="overflow-hidden p-7 sm:p-9">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">06 · Outcome</p>
                <h2 className="text-2xl font-black text-gray-950 dark:text-white sm:text-3xl">Results</h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.results.map(result => (
                    <div key={result} className="flex items-center gap-3 rounded-xl bg-gray-50 p-4 dark:bg-gray-950">
                      <span className="text-lg text-green-500">✓</span>
                      <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{result}</span>
                    </div>
                  ))}
                </div>
              </GlassmorphicCard>
            ) : null}

            {project.statusNote && (
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-900/60 dark:bg-blue-950/20">
                <p className="text-xs font-black uppercase tracking-wider text-blue-600 dark:text-blue-400">Current status</p>
                <p className="mt-2 text-sm leading-6 text-gray-700 dark:text-gray-300">{project.statusNote}</p>
              </div>
            )}
          </div>

          {/* Sticky project sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="space-y-5">
              <GlassmorphicCard className="p-6">
                <h3 className="text-lg font-black text-gray-950 dark:text-white">Technology</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map(tech => <Badge key={tech} variant="info">{tech}</Badge>)}
                </div>
              </GlassmorphicCard>

              {hasLinks && (
                <GlassmorphicCard className="p-6">
                  <h3 className="text-lg font-black text-gray-950 dark:text-white">Explore project</h3>
                  <div className="mt-4 space-y-3">
                    {project.links.live && <DownloadButton href={project.links.live} type="live" className="w-full justify-center" />}
                    {project.links.demo && <DownloadButton href={project.links.demo} type="demo" className="w-full justify-center" />}
                    {project.links.github && <DownloadButton href={project.links.github} type="github" className="w-full justify-center" />}
                    {project.links.apk && <DownloadButton href={project.links.apk} type="apk" className="w-full justify-center" />}
                  </div>
                </GlassmorphicCard>
              )}

              <div className="rounded-2xl bg-gray-950 p-6 text-white dark:bg-white dark:text-gray-950">
                <p className="text-xs font-bold uppercase tracking-wider opacity-60">Have a project?</p>
                <h3 className="mt-2 text-xl font-black">Let&apos;s build something useful.</h3>
                <Button href="/contact" size="sm" className="mt-5 w-full bg-white text-gray-950 hover:bg-gray-100 dark:bg-gray-950 dark:text-white dark:hover:bg-gray-800">Get in touch</Button>
              </div>
            </div>
          </aside>
        </div>

        {/* Related work */}
        {relatedProjects.length > 0 && (
          <section className="mt-16 border-t border-gray-200 pt-12 dark:border-gray-800">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">More work</p>
                <h2 className="mt-2 text-3xl font-black text-gray-950 dark:text-white">Related projects</h2>
              </div>
              <Link href="/projects" className="hidden text-sm font-bold text-blue-600 hover:underline sm:block dark:text-blue-400">View all →</Link>
            </div>
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {relatedProjects.map(related => (
                <Link key={related.id} href={`/projects/${related.id}`} className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-800">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400">{related.category === 'mobile' ? 'Mobile App' : related.category === 'web' ? 'Web Application' : 'Digital Product'}</p>
                  <h3 className="mt-2 text-lg font-black text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">{related.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500 dark:text-gray-400">{related.description}</p>
                  <span className="mt-4 inline-block text-sm font-bold text-blue-600 dark:text-blue-400">View case study →</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return projects.map(project => ({ id: project.id }))
}
