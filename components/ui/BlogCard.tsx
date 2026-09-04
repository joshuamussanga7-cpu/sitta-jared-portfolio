import Link from 'next/link'
import { BlogPost } from '@/lib/types'
import { GlassmorphicCard } from './GlassmorphicCard'
import { Badge } from './Badge'
import { formatDate, getReadingTime } from '@/lib/utils'

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

function getCategory(tags: string[]) {
  const value = tags.map((tag) => tag.toLowerCase())
  if (value.some((tag) => tag.includes('game') || tag.includes('hoop') || tag.includes('iq booster') || tag.includes('stack hop'))) return 'Games'
  if (value.some((tag) => tag.includes('mobile') || tag.includes('flutter') || tag.includes('android'))) return 'Apps'
  if (value.some((tag) => tag.includes('next.js') || tag.includes('react') || tag.includes('web') || tag.includes('vercel'))) return 'Web'
  if (value.some((tag) => tag.includes('ai'))) return 'AI'
  return 'Development'
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const readingTime = getReadingTime(post.content)
  const category = getCategory(post.tags)

  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <GlassmorphicCard className={`group relative h-full overflow-hidden ${featured ? 'min-h-[330px] p-7 sm:p-8' : 'p-6'}`} hover>
        <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-300/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-violet-300/15 blur-3xl transition-transform duration-700 group-hover:scale-125" />

        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="rounded-full border border-white/80 bg-white/45 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-slate-600 shadow-sm backdrop-blur-xl">
              {category}
            </span>
            <span className="text-xs font-semibold text-slate-500">{readingTime} min read</span>
          </div>

          <time className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
            {formatDate(post.date)}
          </time>

          <h3 className={`${featured ? 'text-2xl sm:text-3xl' : 'text-xl'} mb-3 font-black leading-tight text-slate-950 transition-colors group-hover:text-blue-700`}>
            {post.title}
          </h3>

          <p className={`${featured ? 'text-base sm:text-lg' : 'text-sm'} mb-6 flex-1 leading-7 text-slate-600`}>
            {post.description}
          </p>

          <div className="mb-5 flex flex-wrap gap-2">
            {post.tags.slice(0, featured ? 4 : 3).map((tag) => (
              <Badge key={tag} variant="default" className="border-white/70 bg-white/35 text-[11px] text-slate-600 backdrop-blur-xl">
                {tag}
              </Badge>
            ))}
            {post.tags.length > (featured ? 4 : 3) && (
              <Badge variant="default" className="border-white/70 bg-white/35 text-[11px] text-slate-500 backdrop-blur-xl">
                +{post.tags.length - (featured ? 4 : 3)}
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-white/70 pt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">By {post.author}</span>
            <span className="text-sm font-black text-blue-700 transition-transform group-hover:translate-x-1">Read article →</span>
          </div>
        </div>
      </GlassmorphicCard>
    </Link>
  )
}
