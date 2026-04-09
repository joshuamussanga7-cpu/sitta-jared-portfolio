import { ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  href?: string
  target?: string
  rel?: string
}

/**
 * Reusable Button Component
 */
export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  href,
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 inline-flex items-center justify-center text-center'

  const variants = {
    primary:
      'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 shadow-lg hover:shadow-xl focus:ring-blue-500',
    secondary:
      'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring-gray-500',
    outline:
      'border-2 border-blue-500 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950 focus:ring-blue-500',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = cn(baseStyles, variants[variant], sizes[size], fullWidth && 'w-full', className)

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={target || "_blank"}
          rel={rel || "noopener noreferrer"}
          {...(props as any)}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes} {...(props as any)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
