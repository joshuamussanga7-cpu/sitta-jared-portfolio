import { ExternalLink, Download, Globe, Play } from 'lucide-react'
import { Button } from './Button'

interface DownloadButtonProps {
  href: string
  type: 'github' | 'live' | 'demo' | 'apk'
  label?: string
  className?: string
}

/**
 * Download Button Component for project links with inline SVG icons
 */
export function DownloadButton({ href, type, label, className = '' }: DownloadButtonProps) {
  const getIcon = () => {
    switch (type) {
      case 'github':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
        )
      case 'apk':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
        )
      case 'live':
      case 'demo':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
        )
      default:
        return null
    }
  }

  const getDefaultLabel = () => {
    switch (type) {
      case 'github':
        return 'View Code'
      case 'live':
        return 'Live Demo'
      case 'demo':
        return 'Try Demo'
      case 'apk':
        return 'Download APK'
      default:
        return 'View Project'
    }
  }

  return (
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variant={type === 'apk' ? 'primary' : 'outline'}
      size="sm"
      className={`inline-flex items-center gap-2 ${className}`}
    >
      {getIcon()}
      {label || getDefaultLabel()}
    </Button>
  )
}