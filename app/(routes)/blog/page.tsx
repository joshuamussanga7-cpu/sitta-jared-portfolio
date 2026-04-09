import { BlogCard } from '@/components/ui/BlogCard'
import { getAllBlogPosts } from '@/lib/blog'

/**
 * Blog Listing Page
 */
export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text">Blog</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Insights, tutorials, and thoughts on web development, mobile development, and technology.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No blog posts published yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
