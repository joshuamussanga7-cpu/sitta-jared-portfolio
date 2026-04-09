'use client'

import { useState } from 'react'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/lib/data'
import { Project } from '@/lib/types'

/**
 * Projects Page
 */
export default function ProjectsPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  const filteredProjects: Project[] = projects.filter((p) => {
    const categoryMatch = categoryFilter === 'all' || p.category === categoryFilter
    const statusMatch = statusFilter === 'all' || p.status === statusFilter
    return categoryMatch && statusMatch
  })

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Development' },
  ]

  const statuses = [
    { id: 'all', label: 'All Status' },
    { id: 'completed', label: 'Completed' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'planned', label: 'Planned' },
  ]

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            A showcase of my recent web and mobile development projects. Each project includes
            detailed information, screenshots, and direct links to GitHub repositories and live demos.
          </p>
        </div>
      </section>

      {/* Filters and Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 self-center mr-2">
                Category:
              </span>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setCategoryFilter(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    categoryFilter === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Status Filters */}
            <div className="flex flex-wrap gap-3">
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 self-center mr-2">
                Status:
              </span>
              {statuses.map((status) => (
                <button
                  key={status.id}
                  onClick={() => setStatusFilter(status.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    statusFilter === status.id
                      ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  {status.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-600 dark:text-gray-400">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
                No projects found matching your filters.
              </p>
              <button
                onClick={() => {
                  setCategoryFilter('all')
                  setStatusFilter('all')
                }}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Show All Projects
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
