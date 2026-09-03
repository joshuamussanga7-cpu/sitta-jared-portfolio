// Project types
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  screenshots?: string[]
  technologies: string[]
  category: 'web' | 'mobile' | 'other'
  tags?: string[]
  status?: 'completed' | 'in-progress' | 'planned'
  timeline?: string
  role?: string
  teamSize?: number
  challenges?: {
    title: string
    description: string
  }[]
  features?: string[]
  useCases?: string[]
  results?: string[]
  statusNote?: string
  monetization?: string[]
  links: {
    github?: string
    live?: string
    demo?: string
    apk?: string
    sha256?: string
  }
  featured?: boolean
}

// Blog Post types
export interface BlogPost {
  id: string
  title: string
  slug: string
  description: string
  author: string
  date: string
  tags: string[]
  content: string
  image?: string
}

// Skill types
export interface Skill {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: string
  icon?: string
}

// Contact form types
export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

// Social links
export interface SocialLink {
  name: string
  url: string
  icon: string
}

// Experience type
export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  description: string[]
  achievements?: string[]
}
