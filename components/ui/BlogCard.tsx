import Link from 'next/link'
import { BlogPost } from '@/lib/types'
import { GlassmorphicCard } from './GlassmorphicCard'
import { Badge } from './Badge'
import { formatDate, getReadingTime } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPost
}

/**
 * Blog Post Card Component
 */
export function BlogCard({ post }: BlogCardProps) {
  const readingTime = getReadingTime(post.content)

  return (
    <Link href={`/blog/${post.slug}`}>
      <GlassmorphicCard className="cursor-pointer group h-full flex flex-col overflow-hidden" hover>
        {/* Meta info */}
        <div className="flex items-center justify-between mb-4">
          <time className="text-sm text-gray-600 dark:text-gray-400">{formatDate(post.date)}</time>
          <span className="text-sm text-gray-600 dark:text-gray-400">{readingTime} min read</span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 line-clamp-3">
          {post.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="default" className="text-xs">
              {tag}
            </Badge>
          ))}
          {post.tags.length > 2 && (
            <Badge variant="default" className="text-xs">
              +{post.tags.length - 2}
            </Badge>
          )}
        </div>

        {/* Author and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            By {post.author}
          </span>
          <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
            Read →
          </span>
        </div>
      </GlassmorphicCard>
    </Link>
  )
}
