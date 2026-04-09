import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { DeveloperCard } from '@/components/ui/DeveloperCard'
import { getBlogPost, getAllBlogPosts } from '@/lib/blog'
import { formatDate, getReadingTime, cn } from '@/lib/utils'
import { portfolioInfo, skills } from '@/lib/data'

interface Props {
  params: Promise<{ slug: string }>
}

/**
 * High-Visibility Blog Post Page with Author Card (Mini CV)
 */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllBlogPosts()
  const recentPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3)
  const readingTime = getReadingTime(post.content)

  return (
    <article className="min-h-screen bg-white dark:bg-gray-950">
      {/* 1. Header Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-bold mb-8 group transition-all"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Back to Case Studies
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-8">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm md:text-base text-gray-600 dark:text-gray-400 font-bold">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>{readingTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>By {post.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* Sidebar (Appears FIRST on mobile, LEFT on desktop) */}
            <aside className="lg:col-span-4 space-y-8 order-1">
              <div className="sticky top-8 space-y-8">

                {/* 1. THE AUTHOR CARD (Mini CV) */}
                <DeveloperCard />

                {/* 2. RECENT CASE STUDIES */}
                {recentPosts.length > 0 && (
                  <div className="bg-gray-50 dark:bg-gray-900/40 rounded-[2rem] p-6 border border-gray-100 dark:border-gray-800/50">
                    <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6 px-2">More Projects</h3>
                    <div className="space-y-3">
                      {recentPosts.map(p => (
                        <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                          <div className="bg-white dark:bg-gray-900 p-4 rounded-xl border-2 border-transparent group-hover:border-blue-600/20 group-hover:shadow-lg transition-all">
                            <h5 className="font-bold text-gray-900 dark:text-white text-sm line-clamp-2">{p.title}</h5>
                            <div className="flex items-center gap-2 mt-2 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                              <span>Read Case Study</span>
                              <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>

            {/* Main Content (Appears SECOND on mobile, RIGHT on desktop) */}
            <main className="lg:col-span-8 order-2">
              <div className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 md:p-12 lg:p-16 shadow-2xl border border-gray-100 dark:border-gray-800 relative">
                <div className="space-y-12">
                  {post.content.split(/\r?\n\s*\r?\n/).map((paragraph, idx) => {
                    const trimmed = paragraph.trim()
                    if (!trimmed) return null

                    // 1. Heading Renderer
                    if (trimmed.startsWith('#')) {
                      const level = (trimmed.match(/^#+/) || ['##'])[0].length
                      const text = trimmed.replace(/^#+\s+/, '')
                      if (level === 1) return null
                      return (
                        <div key={idx} className="pt-8">
                          <h2 className={`${level === 2 ? 'text-3xl md:text-4xl' : 'text-2xl'} font-black text-gray-900 dark:text-white mb-4 leading-tight`}>
                            {text}
                          </h2>
                          <div className="h-2 w-20 bg-blue-600 rounded-full" />
                        </div>
                      )
                    }

                    // 2. SMART Image Grid Renderer
                    if (trimmed.includes('![')) {
                      const matches = Array.from(trimmed.matchAll(/!\[(.*?)\]\((.*?)\)/g))
                      if (matches.length > 0) {
                        return (
                          <div key={idx} className={cn(
                            "my-14 grid gap-8 items-end justify-center",
                            matches.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
                          )}>
                            {matches.map((match, mIdx) => {
                              const isApp = match[2].toLowerCase().includes('screenshot') ||
                                            match[2].toLowerCase().includes('app') ||
                                            match[2].toLowerCase().includes('university%20notes') ||
                                            match[2].toLowerCase().includes('uni-connect') ||
                                            match[2].toLowerCase().includes('unni-planner')

                              return (
                                <figure key={mIdx} className="flex flex-col items-center">
                                  <div className={cn(
                                    "rounded-[3rem] overflow-hidden border-[12px] border-gray-100 dark:border-gray-800 shadow-2xl bg-gray-50 dark:bg-gray-900",
                                    isApp ? "max-w-[300px]" : "w-full rounded-3xl border-4"
                                  )}>
                                    <img src={match[2]} alt={match[1]} className="w-full h-auto" />
                                  </div>
                                  {match[1] && (
                                    <figcaption className="text-center text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 mt-6 font-black px-4">
                                      {match[1]}
                                    </figcaption>
                                  )}
                                </figure>
                              )
                            })}
                          </div>
                        )
                      }
                    }

                    // 3. Code Block
                    if (trimmed.startsWith('```')) {
                      const codeMatch = trimmed.match(/```(\w+)?\n([\s\S]*?)```/)
                      if (codeMatch) {
                        return (
                          <div key={idx} className="my-10 relative">
                            <div className="absolute -top-3 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                              {codeMatch[1] || 'Code'}
                            </div>
                            <pre className="bg-gray-950 text-blue-400 p-8 rounded-[2rem] overflow-x-auto font-mono text-sm leading-relaxed border-2 border-gray-800/50">
                              <code>{codeMatch[2].trim()}</code>
                            </pre>
                          </div>
                        )
                      }
                    }

                    // 4. List
                    if (trimmed.startsWith('-') || trimmed.startsWith('✓') || /^\d+\./.test(trimmed)) {
                      const items = trimmed.split(/\r?\n/).filter(Boolean)
                      return (
                        <ul key={idx} className="space-y-6 my-10 bg-gray-50 dark:bg-gray-800/30 p-10 rounded-[2.5rem] border border-gray-100 dark:border-gray-800">
                          {items.map((item, i) => (
                            <li key={i} className="flex gap-5 items-start text-gray-900 dark:text-gray-100 text-lg font-bold">
                              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-black shadow-lg shadow-blue-500/40">
                                ✓
                              </span>
                              <span className="flex-1 pt-0.5">{item.replace(/^[✓\-\d\.]+\s*/, '')}</span>
                            </li>
                          ))}
                        </ul>
                      )
                    }

                    // 5. Quote
                    if (trimmed.startsWith('>')) {
                      return (
                        <blockquote key={idx} className="border-l-[10px] border-blue-600 bg-blue-50/50 dark:bg-blue-900/10 p-12 rounded-r-[2.5rem] italic text-2xl text-gray-900 dark:text-gray-100 my-14 font-serif relative">
                          <span className="absolute top-4 left-4 text-blue-600/20 text-8xl font-serif">"</span>
                          <span className="relative z-10">{trimmed.replace(/^>\s*/, '')}</span>
                        </blockquote>
                      )
                    }

                    // 6. Regular Paragraphs
                    return (
                      <p key={idx} className="text-gray-900 dark:text-gray-100 leading-relaxed text-lg md:text-xl font-medium">
                        {trimmed.split(/(\*\*.*?\*\*)/).map((part, i) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i} className="font-black text-blue-700 dark:text-blue-500">{part.slice(2, -2)}</strong>
                          }
                          return part
                        })}
                      </p>
                    )
                  })}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* 3. Footer Navigation */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-20 h-2 bg-blue-600 mx-auto mb-10 rounded-full" />
          <h2 className="text-4xl font-black mb-8 text-gray-900 dark:text-white italic">"Building the future, one line at a time."</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/blog"
              className="px-12 py-5 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-black hover:scale-105 transition-all shadow-xl border border-gray-200 dark:border-gray-700"
            >
              Back to Blog
            </Link>
            <Link
              href="/#contact"
              className="px-12 py-5 rounded-2xl bg-blue-600 text-white font-black hover:scale-105 shadow-2xl shadow-blue-500/40 transition-all"
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}

/**
 * Generate static paths for all blog posts
 */
export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
