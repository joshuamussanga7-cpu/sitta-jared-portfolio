'use client'

import { Button } from '@/components/ui/Button'
import { GlassmorphicCard } from '@/components/ui/GlassmorphicCard'
import { socialLinks, portfolioInfo } from '@/lib/data'

/**
 * Simplified Contact Section - Social & Direct Contact Only
 */
export function ContactForm() {
  return (
    <GlassmorphicCard className="p-8 sm:p-12 text-center">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Let's Connect
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
        Feel free to reach out through any of these platforms!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {socialLinks.map((link) => (
          <Button
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
            className="flex items-center justify-center gap-3 py-6 text-lg hover:scale-105 transition-transform"
          >
            {getIcon(link.icon)}
            <span>{link.name}</span>
          </Button>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10">
        <p className="text-gray-500 dark:text-gray-400">
          Direct Email: <a href={`mailto:${portfolioInfo.email}`} className="text-blue-500 hover:underline">{portfolioInfo.email}</a>
        </p>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          Location: {portfolioInfo.location}
        </p>
      </div>
    </GlassmorphicCard>
  )
}

/**
 * Helper to get icons without external dependencies
 */
function getIcon(name: string) {
  switch (name.toLowerCase()) {
    case 'mail':
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    case 'whatsapp':
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    case 'github':
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    case 'facebook':
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    case 'telegram':
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
    default:
      return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
  }
}
