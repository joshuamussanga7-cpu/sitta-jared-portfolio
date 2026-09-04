import Link from 'next/link'
import { BlogCard } from '@/components/ui/BlogCard'
import { getAllBlogPosts } from '@/lib/blog'

interface Props {
  searchParams: Promise<{ category?: string }>
}

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Games', value: 'games' },
  { label: 'Apps', value: 'apps' },
  { label: 'Web', value: 'web' },
  { label: 'AI', value: 'ai' },
]

function getCategory(tags: string[]) {
  const value = tags.map((tag) => tag.toLowerCase())
  if (value.some((tag) => tag.includes('game') || tag.includes('hoop') || tag.includes('iq booster') || tag.includes('stack hop'))) return 'games'
  if (value.some((tag) => tag.includes('mobile') || tag.includes('flutter') || tag.includes('android'))) return 'apps'
  if (value.some((tag) => tag.includes('next.js') || tag.includes('react') || tag.includes('web') || tag.includes('vercel'))) return 'web'
  if (value.some((tag) => tag.includes('ai'))) return 'ai'
  return 'development'
}

function LiquidBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="liquid-blob one" />
      <div className="liquid-blob two" />
      <div className="liquid-blob three" />
      <div className="liquid-blob four" />
      <div className="liquid-orb large" style={{ top: '12%', right: '8%' }} />
      <div className="liquid-orb small" style={{ top: '33%', left: '5%', animationDelay: '-2s' }} />
      <div className="liquid-orb" style={{ bottom: '9%', right: '16%', animationDelay: '-4s' }} />
      <div className="liquid-grid absolute inset-0 opacity-40" />
    </div>
  )
}

export default async function BlogPage({ searchParams }: Props) {
  const { category = 'all' } = await searchParams
  const posts = getAllBlogPosts()
  const filteredPosts = category === 'all' ? posts : posts.filter((post) => getCategory(post.tags) === category)
  const featuredPosts = filteredPosts.slice(0, 3)
  const remainingPosts = filteredPosts.slice(3)

  return (
    <main className="liquid-scene relative min-h-screen overflow-hidden">
      <LiquidBackground />

      <section className="relative z-10 px-5 pb-12 pt-20 sm:px-8 lg:px-10 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="glass-surface overflow-hidden rounded-[2.75rem] p-8 shadow-[0_30px_90px_rgba(72,98,140,.12)] sm:p-12 lg:p-16">
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-white/80 bg-white/45 px-4 py-2 text-[10px] font-black uppercase tracking-[0.22em] text-slate-600 shadow-sm backdrop-blur-xl">
                Developer Journal
              </span>
              <h1 className="mt-6 text-5xl font-black tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
                Building games, apps & web products.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 sm:text-xl">
                Case studies, practical engineering notes, product decisions, and lessons from turning ideas into working digital experiences.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {categories.map((item) => {
                const active = category === item.value
                return (
                  <Link
                    key={item.value}
                    href={item.value === 'all' ? '/blog' : `/blog?category=${item.value}`}
                    className={`rounded-full border px-5 py-2.5 text-sm font-bold transition-all ${
                      active
                        ? 'border-blue-300/70 bg-white/75 text-blue-700 shadow-lg shadow-blue-500/10'
                        : 'border-white/70 bg-white/35 text-slate-600 hover:bg-white/65 hover:text-slate-950'
                    } backdrop-blur-xl`}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {featuredPosts.length > 0 ? (
            <>
              <div className="mb-7 flex items-end justify-between gap-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-600">Featured</p>
                  <h2 className="mt-2 text-3xl font-black text-slate-950 sm:text-4xl">Start with these.</h2>
                </div>
                <span className="hidden rounded-full border border-white/70 bg-white/35 px-4 py-2 text-xs font-bold text-slate-500 backdrop-blur-xl sm:inline-flex">
                  {filteredPosts.length} article{filteredPosts.length === 1 ? '' : 's'}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                {featuredPosts.map((post, index) => (
                  <BlogCard key={post.slug} post={post} featured={index === 0} />
                ))}
              </div>

              {remainingPosts.length > 0 && (
                <div className="mt-14">
                  <div className="mb-7">
                    <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">More from the journal</p>
                    <h2 className="mt-2 text-3xl font-black text-slate-950">Explore the rest.</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {remainingPosts.map((post) => (
                      <BlogCard key={post.slug} post={post} />
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="glass-surface rounded-[2.5rem] p-12 text-center shadow-xl">
              <h2 className="text-3xl font-black text-slate-950">Nothing here yet.</h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-600">Try another category. New case studies and development notes are added as the portfolio grows.</p>
              <Link href="/blog" className="mt-7 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg">
                View all articles
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="relative z-10 px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="glass-surface rounded-[2.5rem] p-10 text-center shadow-[0_30px_90px_rgba(72,98,140,.1)] sm:p-14">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-blue-600">Have a product idea?</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-slate-950">Let's turn the idea into something real.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">Explore the projects behind these articles, then start a conversation about what you want to build next.</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/projects" className="rounded-2xl bg-slate-950 px-7 py-4 text-sm font-black text-white shadow-xl transition-transform hover:-translate-y-0.5">Explore Projects</Link>
              <Link href="/contact" className="rounded-2xl border border-white/80 bg-white/55 px-7 py-4 text-sm font-black text-slate-800 shadow-lg backdrop-blur-xl transition-transform hover:-translate-y-0.5">Start a Conversation</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
