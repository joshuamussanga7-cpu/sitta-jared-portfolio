import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info'
  className?: string
}

/**
 * Badge Component for tags, labels, and status indicators
 */
export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100',
    success: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
    warning: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100',
    error: 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100',
    info: 'bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-100',
  }

  return (
    <span
      className={cn(
        'inline-block px-3 py-1 rounded-full text-sm font-medium',
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  )
}
