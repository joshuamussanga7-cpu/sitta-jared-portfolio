'use client'

import { useMemo, useState } from 'react'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/lib/data'
import { Project } from '@/lib/types'

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'featured', label: 'Featured' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ai', label: 'AI / EdTech' },
    { id: 'business', label: 'Business' },
    { id: 'games', label: 'Games' },
  ]

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase()

    return projects.filter((project: Project) => {
      const matchesFilter =
        filter === 'all' ||
        (filter === 'featured' && project.featured) ||
        (filter === project.category) ||
        (filter === 'ai' && project.tags?.includes('AI')) ||
        (filter === 'business' && project.tags?.includes('Business')) ||
        (filter === 'games' && project.tags?.includes('Game Development'))

      const searchable = [
        project.title,
        project.description,
        project.category,
        ...(project.tags ?? []),
        ...(project.technologies ?? []),
      ].join(' ').toLowerCase()

      return matchesFilter && (!query || searchable.includes(query))
    })
  }, [filter, search])

  return (
    <div className="w-full">
      <section className="relative overflow-hidden py-24 sm:py-28 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-950 dark:to-blue-950/30">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-4">
              Selected Work
            </p>
            <h1 className="text-5xl sm:text-6xl font-black tracking-tight text-gray-950 dark:text-white mb-6">
              Projects that solve real problems.
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed text-gray-600 dark:text-gray-400">
              A curated collection of mobile apps, web products, AI-focused experiences, business websites, and game projects I have designed and developed.
            </p>
          </div>

          <div className="mt-10 flex flex-col lg:flex-row gap-4 lg:items-center">
            <div className="flex flex-wrap gap-2">
              {filters.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFilter(item.id)}
                  className={`rounded-full px-4 py-2.5 text-sm font-semibold transition-all ${
                    filter === item.id
                      ? 'bg-gray-950 text-white shadow-lg dark:bg-white dark:text-gray-950'
                      : 'bg-white/80 text-gray-700 border border-gray-200 hover:border-blue-300 hover:text-blue-600 dark:bg-gray-900/80 dark:text-gray-300 dark:border-gray-800 dark:hover:border-blue-700'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="lg:ml-auto w-full lg:w-72">
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search projects or technologies..."
                aria-label="Search projects"
                className="w-full rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-800 dark:bg-gray-900 dark:text-white"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-sm font-semibold text-gray-500 dark:text-gray-500">
                {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              </p>
              <h2 className="text-3xl font-bold text-gray-950 dark:text-white mt-1">
                {filter === 'all' ? 'My Work' : filters.find((item) => item.id === filter)?.label}
              </h2>
            </div>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-gray-300 dark:border-gray-800 p-12 text-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No matching projects</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-5">Try another category or search term.</p>
              <button
                onClick={() => { setFilter('all'); setSearch('') }}
                className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
