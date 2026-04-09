import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

/**
 * Glassmorphic Card Component
 * Creates a frosted glass effect with semi-transparent background and backdrop blur
 */
export function GlassmorphicCard({
  children,
  className,
  hover = true,
}: GlassmorphicCardProps) {
  return (
    <div
      className={cn(
        'backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10',
        'rounded-2xl p-6 shadow-lg',
        hover && 'transition-all duration-300 hover:bg-white/15 dark:hover:bg-white/10 hover:border-white/30 dark:hover:border-white/20 hover:shadow-2xl',
        className,
      )}
    >
      {children}
    </div>
  )
}
