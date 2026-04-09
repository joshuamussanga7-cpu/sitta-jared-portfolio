// Project types
export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  screenshots?: string[] // Multiple project images
  technologies: string[]
  category: 'web' | 'mobile' | 'other'
  status?: 'completed' | 'in-progress' | 'planned'
  timeline?: string // e.g., "3 months"
  role?: string // e.g., "Lead Developer"
  teamSize?: number
  challenges?: {
    title: string
    description: string
  }[]
  features?: string[]
  useCases?: string[]
  statusNote?: string
  monetization?: string[] // e.g., ["AdMob", "In-app Purchases"]
  links: {
    github?: string
    live?: string
    demo?: string
    apk?: string // For Android apps
    sha256?: string // SHA256 hash for APK verification
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
