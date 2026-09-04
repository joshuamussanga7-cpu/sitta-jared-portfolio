'use client'

import { ReactNode, useCallback, useRef } from 'react'
import { cn } from '@/lib/utils'

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

/**
 * Interactive water-glass surface.
 * The pointer creates a local light/ripple field that follows the cursor,
 * while the base glass treatment keeps content readable and layered.
 */
export function GlassmorphicCard({
  children,
  className,
  hover = true,
}: GlassmorphicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handlePointerMove = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    card.style.setProperty('--fluid-x', `${x}%`)
    card.style.setProperty('--fluid-y', `${y}%`)
    card.style.setProperty('--fluid-opacity', '1')
  }, [])

  const handlePointerLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--fluid-opacity', '0')
  }, [])

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={cn(
        'fluid-glass-card relative overflow-hidden rounded-[2rem] p-6',
        hover && 'fluid-glass-hover',
        className,
      )}
    >
      <div className="fluid-glass-ripple" aria-hidden="true" />
      <div className="fluid-glass-sheen" aria-hidden="true" />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
