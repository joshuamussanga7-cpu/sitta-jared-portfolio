/**
 * Utility functions for the portfolio
 */

/**
 * Classname utility (simple version - can replace with clsx if needed)
 */
export function cn(...classes: (string | boolean | undefined)[]): string {
  return classes.filter((c) => typeof c === 'string').join(' ')
}

/**
 * Format date to readable format
 */
export function formatDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  return new Date(date).toLocaleDateString('en-US', options)
}

/**
 * Slugify text for URLs
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

/**
 * Get reading time in minutes
 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 200
  const wordCount = content.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}
