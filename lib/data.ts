import { Project, Skill, SocialLink, Experience } from './types'

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Freelance Mobile App Developer',
    company: 'Self-Employed',
    location: 'Tanzania / Remote',
    period: '2024 – Present',
    description: [
      'Developed and deployed multiple Android applications from concept to release.',
      'Managed mobile app publishing, testing, monetization, and ongoing improvements.',
      'Built practical products for education, marketplaces, productivity, and digital services.',
      'Worked across Flutter, Firebase, web development, and modern deployment workflows.'
    ],
    achievements: [
      'Built multiple real-world digital products independently.',
      'Developed experience across mobile, web, and product development.',
      'Gained hands-on experience with app publishing and monetization.',
      'Turned product ideas into functional applications and live web experiences.'
    ]
  }
]

// Curated showcase of the strongest verified projects from the GitHub portfolio.
export const projects: Project[] = [
  {
    id: '1',
    title: 'University Notes – Student Learning Platform',
    description: 'A student-focused learning platform for accessing, organizing, and exploring university study materials, with AI-assisted learning features.',
    longDescription:
      'University Notes is one of my flagship education projects. It was built to make academic resources easier for university students to access and organize while creating a foundation for AI-assisted learning.\n\nThe project combines mobile development with a web experience and is designed around practical student needs such as academic content discovery, study resources, and a simple user experience.',
    image: '/projects/University Notes-1.jpg',
    screenshots: [
      '/projects/University Notes-1.jpg',
      '/projects/University Notes-2.jpg',
      '/projects/University Notes-3.jpg',
      '/projects/University Notes-4.jpg',
      '/projects/University Notes-5.jpg',
      '/projects/University Notes-6.jpg'
    ],
    technologies: ['Flutter', 'Firebase', 'Dart', 'AI', 'Next.js'],
    category: 'mobile',
    status: 'completed',
    timeline: 'Multi-stage product',
    role: 'Lead Developer',
    teamSize: 1,
    challenges: [
      {
        title: 'Large Academic Content Experience',
        description: 'Designing a clear experience for students to discover and work with a growing collection of academic materials.'
      },
      {
        title: 'AI-Assisted Learning',
        description: 'Integrating AI capabilities into a student-oriented product while keeping the experience simple and useful.'
      },
      {
        title: 'Mobile and Web Experience',
        description: 'Extending the product beyond Android into a responsive web experience for broader accessibility.'
      }
    ],
    features: [
      'Academic notes and study-resource discovery',
      'AI-assisted learning experience',
      'Student-focused organization and navigation',
      'Mobile application and web experience',
      'Firebase-powered digital services'
    ],
    useCases: [
      'University students',
      'Digital academic resource platforms',
      'AI-assisted study applications'
    ],
    statusNote: 'Active product ecosystem with Android and web versions.',
    monetization: ['AdMob'],
    links: {
      live: 'https://webuni.clastarhub.com'
    },
    featured: true
  },
  {
    id: '2',
    title: 'Uni Connect – E-commerce Marketplace',
    description: 'A marketplace application designed to connect buyers and sellers through product discovery, listings, and direct communication.',
    longDescription:
      'Uni Connect is a private e-commerce project focused on creating a practical marketplace experience for buyers and sellers. The product explores marketplace workflows, product presentation, user interaction, and scalable digital commerce experiences.',
    image: '/projects/uni-connect-1.jpg',
    screenshots: [
      '/projects/uni-connect-1.jpg',
      '/projects/uni-connect-2.jpg',
      '/projects/uni-connect-3.jpg',
      '/projects/uni-connect-4.jpg'
    ],
    technologies: ['Flutter', 'Firebase', 'Firestore', 'Dart'],
    category: 'mobile',
    status: 'completed',
    timeline: '6 months',
    role: 'Lead Developer',
    teamSize: 1,
    challenges: [
      {
        title: 'Marketplace Workflows',
        description: 'Designing a user experience that supports both product discovery and seller participation in one application.'
      },
      {
        title: 'Real-Time Communication',
        description: 'Building responsive user-to-user communication around marketplace interactions.'
      },
      {
        title: 'Product Media',
        description: 'Handling product images efficiently for a smoother marketplace experience.'
      }
    ],
    features: [
      'Product marketplace and discovery',
      'Buyer and seller experiences',
      'Product listing management',
      'User communication',
      'Firebase-backed application services'
    ],
    useCases: [
      'Local marketplace platforms',
      'Student buying and selling',
      'Small digital commerce businesses'
    ],
    statusNote: 'Functional private project with room for future commerce and delivery integrations.',
    links: {},
    featured: true
  },
  {
    id: '3',
    title: 'SAVI – Earn-to-Do Tasks Platform',
    description: 'A global digital rewards platform concept connecting users with tasks, surveys, offers, and other reward activities.',
    longDescription:
      'SAVI is a global rewards platform designed around completing eligible digital activities and receiving rewards after successful validation. The product explores task discovery, reward workflows, user accounts, eligibility, validation, withdrawals, and platform trust.',
    technologies: ['Next.js', 'React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
    category: 'web',
    status: 'in-progress',
    timeline: 'Ongoing',
    role: 'Lead Developer',
    teamSize: 1,
    challenges: [
      {
        title: 'Reward Workflow',
        description: 'Designing a clear flow from activity discovery and completion through validation and eligible withdrawal.'
      },
      {
        title: 'Trust and Fraud Prevention',
        description: 'Building a product experience that accounts for validation, eligibility, abuse prevention, and responsible reward handling.'
      },
      {
        title: 'Global Product Design',
        description: 'Designing the service for users across different countries while keeping eligibility and reward rules clear.'
      }
    ],
    features: [
      'Digital task and offer discovery',
      'Reward-oriented user experience',
      'Activity completion and validation workflow',
      'Withdrawal-focused account experience',
      'Global product positioning'
    ],
    useCases: [
      'Digital reward platforms',
      'Task and offer marketplaces',
      'Global user engagement products'
    ],
    statusNote: 'Actively evolving product with a live web presence.',
    links: {
      live: 'https://savi.clastarhub.com'
    },
    featured: true
  },
  {
    id: '4',
    title: 'UniPlanner – Student Productivity App',
    description: 'A student productivity project focused on organizing academic schedules, tasks, exams, and everyday university activities.',
    longDescription:
      'UniPlanner is a student-focused planning project built to make academic organization easier. It brings schedules, tasks, exams, reminders, and student productivity into a focused experience.',
    image: '/projects/Screenshot_20260409_163417_uni planner.jpg',
    screenshots: [
      '/projects/Screenshot_20260409_163417_uni planner.jpg',
      '/projects/Screenshot_20260409_163426_uni planner.jpg',
      '/projects/Screenshot_20260409_163432_uni planner.jpg',
      '/projects/Screenshot_20260409_163447_uni planner.jpg'
    ],
    technologies: ['Flutter', 'Firebase', 'Dart', 'Provider'],
    category: 'mobile',
    status: 'in-progress',
    timeline: 'Ongoing',
    role: 'Lead Developer',
    teamSize: 1,
    challenges: [
      {
        title: 'Academic Scheduling',
        description: 'Creating a flexible planning experience for recurring classes, exams, tasks, and changing student schedules.'
      },
      {
        title: 'Student Productivity',
        description: 'Keeping multiple academic planning features organized without making the application difficult to use.'
      }
    ],
    features: [
      'Academic timetable planning',
      'Exam and task organization',
      'Student reminders',
      'GPA and academic utilities',
      'Offline-friendly planning experience'
    ],
    useCases: [
      'University students',
      'Academic planning',
      'Personal productivity'
    ],
    statusNote: 'Under active development as part of the student-productivity portfolio.',
    links: {},
    featured: true
  },
  {
    id: '5',
    title: 'ClastarHub – Digital Project Ecosystem',
    description: 'A digital hub bringing together independent technology projects, products, and services in one professional web presence.',
    longDescription:
      'ClastarHub is the central web presence for a growing collection of digital projects and services. It represents the product and web-development side of my work and provides a foundation for connecting multiple projects into one ecosystem.',
    technologies: ['Vite', 'React', 'TypeScript', 'Web Development'],
    category: 'web',
    status: 'completed',
    timeline: 'Ongoing',
    role: 'Founder & Developer',
    teamSize: 1,
    features: [
      'Central digital project hub',
      'Professional web presence',
      'Project and product presentation',
      'Scalable foundation for future services'
    ],
    useCases: [
      'Digital product portfolios',
      'Technology project ecosystems',
      'Independent software businesses'
    ],
    statusNote: 'Actively maintained and available online.',
    links: {
      live: 'https://clastarhub.com'
    },
    featured: true
  },
  {
    id: '6',
    title: 'IQ Booster – Brain Training Game',
    description: 'An interactive game project built around thinking, problem-solving, memory, and continuous player improvement.',
    longDescription:
      'IQ Booster is a game-development project exploring accessible brain-training gameplay. It demonstrates my ability to move beyond business applications into interactive entertainment and game-oriented product design.',
    technologies: ['Game Development', 'Android', 'UI/UX'],
    category: 'other',
    status: 'in-progress',
    timeline: 'Ongoing',
    role: 'Game Developer',
    teamSize: 1,
    features: [
      'Brain-training challenges',
      'Problem-solving gameplay',
      'Memory and thinking activities',
      'Progress-oriented player experience'
    ],
    useCases: [
      'Casual gaming',
      'Brain-training experiences',
      'Interactive learning products'
    ],
    statusNote: 'Under development.',
    links: {},
    featured: false
  },
  {
    id: '7',
    title: 'Hoop Shot – Basketball Game',
    description: 'A basketball-themed game project focused on creating a simple and engaging interactive gameplay experience.',
    longDescription:
      'Hoop Shot is an independent game project demonstrating experimentation with interactive gameplay, game presentation, and mobile entertainment concepts.',
    technologies: ['Game Development', 'Android', 'UI/UX'],
    category: 'other',
    status: 'in-progress',
    timeline: 'Ongoing',
    role: 'Game Developer',
    teamSize: 1,
    features: [
      'Basketball-themed gameplay',
      'Accessible interactive experience',
      'Room for future gameplay improvements'
    ],
    useCases: [
      'Casual mobile gaming',
      'Sports-themed games',
      'Interactive entertainment'
    ],
    statusNote: 'Under development.',
    links: {},
    featured: false
  },
  {
    id: '8',
    title: 'Stack Hop – Casual Game Project',
    description: 'A casual game project exploring simple, accessible gameplay and iterative game-development concepts.',
    longDescription:
      'Stack Hop is an independent game project created to explore simple interactive gameplay, user experience, and future game feature development.',
    technologies: ['Game Development', 'Android', 'UI/UX'],
    category: 'other',
    status: 'in-progress',
    timeline: 'Ongoing',
    role: 'Game Developer',
    teamSize: 1,
    features: [
      'Simple casual gameplay',
      'Accessible user experience',
      'Iterative game development'
    ],
    useCases: [
      'Casual mobile gaming',
      'Game-development experimentation'
    ],
    statusNote: 'Under development.',
    links: {},
    featured: false
  }
]

export const skills: Skill[] = [
  { name: 'Flutter', level: 'expert', category: 'Mobile', icon: 'Flutter' },
  { name: 'Dart', level: 'expert', category: 'Language', icon: 'Dart' },
  { name: 'Android Studio', level: 'advanced', category: 'Mobile', icon: 'Android' },
  { name: 'Firebase', level: 'advanced', category: 'Backend', icon: 'Firebase' },
  { name: 'REST APIs', level: 'advanced', category: 'Backend', icon: 'API' },
  { name: 'AdMob', level: 'advanced', category: 'Monetization', icon: 'Ads' },
  { name: 'Google Play Console', level: 'advanced', category: 'Deployment', icon: 'Play' },
  { name: 'SQLite/Local Data', level: 'advanced', category: 'Backend', icon: 'Database' },
  { name: 'Git & GitHub', level: 'advanced', category: 'Tools', icon: 'Git' },
  { name: 'Debugging', level: 'advanced', category: 'Process', icon: 'Debug' },
  { name: 'Performance Optimization', level: 'advanced', category: 'Process', icon: 'Bolt' },
  { name: 'UI/UX Design', level: 'advanced', category: 'Design', icon: 'Figma' },
  { name: 'Next.js', level: 'intermediate', category: 'Web', icon: 'Next' },
  { name: 'Tailwind CSS', level: 'advanced', category: 'Web', icon: 'CSS' }
]

export const socialLinks: SocialLink[] = [
  { name: 'Email', url: 'mailto:joshuamussanga7@gmail.com', icon: 'mail' },
  { name: 'WhatsApp', url: 'https://wa.me/255786491904', icon: 'whatsapp' },
  { name: 'GitHub', url: 'https://github.com/joshuamussanga7-cpu', icon: 'github' },
  { name: 'Facebook', url: 'https://facebook.com/mussangaTech', icon: 'facebook' },
  { name: 'Telegram', url: 'https://t.me/Cryptojammer06', icon: 'telegram' }
]

export const portfolioInfo = {
  name: 'SITTA JARED MUSSANGA',
  title: 'Mobile App Developer (Flutter & Android)',
  description:
    'Innovative and results-driven developer building practical mobile and web products with Flutter, Android, Firebase, and modern web technologies.',
  email: 'joshuajaredmussanga7@gmail.com',
  phone: '+255786491904',
  location: 'Tanzania',
  resume: '/resume.pdf',
  avatar: '/me.png',
  languages: ['English (Professional)', 'Swahili (Native)'],
  strengths: [
    'Strong problem-solving skills',
    'Fast learner and adaptable',
    'User-focused development approach',
    'Ability to turn ideas into working products',
    'Independent and result-driven'
  ]
}
