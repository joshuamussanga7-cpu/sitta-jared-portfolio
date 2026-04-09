import fs from 'fs'
import path from 'path'
import { BlogPost } from './types'

const blogsDirectory = path.join(process.cwd(), 'content/blog')

/**
 * Get all blog posts
 */
export function getAllBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogsDirectory)
  const paths = fileNames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(blogsDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf-8')
      const { metadata, content } = parseMdWithMetadata(fileContent)
      return {
        id: filename.replace(/\.md$/, ''),
        ...metadata,
        content,
      } as BlogPost
    })

  // Sort by date (newest first)
  return paths.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

/**
 * Get a single blog post
 */
export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(blogsDirectory, `${slug}.md`)
  if (!fs.existsSync(filePath)) {
    return null
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { metadata, content } = parseMdWithMetadata(fileContent)

  return {
    id: slug,
    ...metadata,
    content,
  } as BlogPost
}

/**
 * Parse markdown with YAML frontmatter metadata
 */
function parseMdWithMetadata(content: string): {
  metadata: Omit<BlogPost, 'id' | 'content'>
  content: string
} {
  // Trim the content to handle leading/trailing whitespace
  const trimmedContent = content.trim()

  // Support both \n and \r\n line endings, and be more flexible with whitespace
  const frontmatterRegex = /^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n([\s\S]*)$/
  const match = trimmedContent.match(frontmatterRegex)

  if (!match) {
    throw new Error('Invalid markdown format')
  }

  const frontmatterText = match[1]
  const markdownContent = match[2]

  // Parse YAML frontmatter (simple parser)
  const metadata: any = {}
  const lines = frontmatterText.split('\n')

  for (const line of lines) {
    const [key, ...valueParts] = line.split(':')
    const value = valueParts.join(':').trim()

    if (key && value) {
      // Remove quotes if present
      metadata[key.trim()] = value.replace(/^["']|["']$/g, '')
    }

    // Parse arrays for tags
    if (key?.trim() === 'tags' && value.startsWith('[')) {
      const arrayMatch = frontmatterText.match(/tags:\s*\[([\s\S]*?)\]/)
      if (arrayMatch) {
        metadata.tags = arrayMatch[1]
          .split(',')
          .map((tag) => tag.trim().replace(/^["']|["']$/g, ''))
      }
    }
  }

  return {
    metadata: {
      title: metadata.title || '',
      slug: metadata.slug || '',
      description: metadata.description || '',
      author: metadata.author || '',
      date: metadata.date || '',
      tags: metadata.tags || [],
    },
    content: markdownContent,
  }
}
