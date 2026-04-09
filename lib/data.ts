import { Project, Skill, SocialLink, Experience } from './types'

// Experience data
export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Freelance Mobile App Developer',
    company: 'Self-Employed',
    location: 'Tanzania / Remote',
    period: '2024 – Present',
    description: [
      'Developed and deployed multiple Android applications from scratch.',
      'Managed full app publishing lifecycle through Google Play Console.',
      'Built custom apps for clients and handled end-to-end deployment.',
      'Integrated AdMob monetization into mobile apps to generate revenue.',
      'Improved app performance and usability based on user feedback and analytics.'
    ],
    achievements: [
      'Built and deployed multiple real-world applications.',
      'Established a functional developer portfolio.',
      'Gained experience in app monetization and publishing.',
      'Delivered complete client projects independently.'
    ]
  }
]

// Sample projects data
export const projects: Project[] = [
  {
    id: '1',
    title: 'Uni Connect – E-commerce Mobile Application',
    description: 'A modern mobile marketplace that connects buyers and sellers, enabling seamless product discovery, communication, and transactions in a user-friendly environment.',
    longDescription:
      'Uni Connect is a scalable e-commerce mobile application designed to facilitate smooth interactions between buyers and sellers. The platform allows users to browse products, communicate in real-time, and manage listings efficiently.\n\nBuilt with performance and simplicity in mind, the app delivers a clean interface and reliable backend, making it suitable for startups and growing digital marketplaces.\n\nUse Cases:\n- Startup marketplace platforms\n- Student buying/selling systems\n- Local e-commerce applications',
    image: '/projects/uni-connect-1.jpg',
    screenshots: ['/projects/uni-connect-1.jpg', '/projects/uni-connect-2.jpg', '/projects/uni-connect-3.jpg', '/projects/uni-connect-4.jpg'],
    technologies: ['Flutter', 'Firebase', 'Firestore', 'Dart'],
    category: 'mobile',
    status: 'completed',
    timeline: '6 months',
    role: 'Lead Developer',
    teamSize: 1,
    challenges: [
      {
        title: 'Real-time Chat Implementation',
        description: 'Implementing a responsive and reliable chat system using Firebase Realtime Database/Firestore while ensuring low latency and message synchronization.'
      },
      {
        title: 'Scalable Marketplace Architecture',
        description: 'Designing a flexible data structure to handle diverse product categories and varying amounts of metadata without sacrificing performance.'
      },
      {
        title: 'Image Upload Optimization',
        description: 'Handling multi-image uploads efficiently by compressing images on the client-side before uploading to Firebase Storage to save bandwidth.'
      }
    ],
    features: [
      'Product Marketplace: Browse products with detailed descriptions and organized listings.',
      'User Authentication: Secure registration and login with role-based access for buyers and sellers.',
      'Real-Time Chat: Direct instant messaging between users powered by Firebase.',
      'Seller Dashboard: Comprehensive tools for sellers to add, update, and manage their product listings.',
      'Responsive UI: Clean, modern design ensuring smooth navigation across all screen sizes.'
    ],
    useCases: [
      'Startup marketplace platforms',
      'Student buying/selling systems',
      'Local e-commerce applications'
    ],
    statusNote: 'Functional and ready. Open for future upgrades (payments, delivery integration).',
    monetization: ['AdMob'],
    links: {
      github: 'https://github.com/joshuamussanga7-cpu/uni_connect',
      apk: 'https://github.com/joshuamussanga7-cpu/uni_connect/releases/download/Uni-connect/base.apk'
    },
    featured: true,
  },
  {
    id: '2',
    title: 'University Notes – Student Learning App',
    description: 'A simple and efficient mobile application that helps students access, organize, and manage academic notes anytime, anywhere.',
    longDescription:
      'University Notes is a mobile application designed to support students in organizing and accessing academic materials in a structured and convenient way. The app allows users to browse notes by subject, making it easier to study and stay organized.\n\nBuilt with a focus on simplicity and performance, the app ensures fast access to learning resources and supports offline usage, making it ideal for students with limited internet connectivity.',
    image: '/projects/University Notes-1.jpg',
    screenshots: [
      '/projects/University Notes-1.jpg',
      '/projects/University Notes-2.jpg',
      '/projects/University Notes-3.jpg',
      '/projects/University Notes-4.jpg',
      '/projects/University Notes-5.jpg',
      '/projects/University Notes-6.jpg',
      '/projects/University Notes-7.jpg',
      '/projects/University Notes-8.jpg',
      '/projects/University Notes-9.jpg',
      '/projects/University Notes-10.jpg',
      '/projects/University Notes-11.jpg',
    ],
    technologies: ['Flutter', 'Firebase', 'Dart', 'Local Storage'],
    category: 'mobile',
    status: 'completed',
    timeline: '4 months',
    role: 'Lead Developer',
    teamSize: 1,
    challenges: [
      {
        title: 'Offline Data Synchronization',
        description: 'Ensuring that notes are accessible even without an active internet connection by implementing a robust local caching mechanism with Hive/SQFlite.'
      },
      {
        title: 'Efficient Note Organization',
        description: 'Creating a nested category system that remains performant and intuitive as the volume of academic material grows.'
      }
    ],
    features: [
      'Notes Organization: Access notes categorized by subject or course with a structured layout.',
      'Offline Access: View saved notes without an internet connection with lightweight performance.',
      'User-Friendly Interface: Simple and clean dashboard for easy navigation between topics.',
      'Data Management: Secure storage using Firebase and local storage for fast retrieval.',
      'Fast Search: Quickly find specific notes or subjects using an optimized local search engine.'
    ],
    useCases: [
      'University students managing study materials',
      'Academic institutions sharing notes digitally',
      'Personal study organization tools'
    ],
    statusNote: 'Fully functional and deployed for student use. Future updates planned for community-driven note sharing.',
    monetization: ['AdMob'],
    links: {
      github: 'https://github.com/joshuamussanga7-cpu/UniversityNotes',
      apk: 'https://github.com/joshuamussanga7-cpu/UniversityNotes/releases/download/universityAPK/app-debug.apk',
    },
    featured: true,
  },
  {
    id: '3',
    title: 'Unni Planner – Student Academic Manager',
    description: 'A comprehensive academic tool helping students create timetables, manage exams, and track class tasks efficiently.',
    longDescription:
      'Unni Planner (UniMate) is an all-in-one productivity app designed for university students to streamline their academic life. It provides a centralized platform for managing class schedules, tracking exam dates, and organizing daily academic tasks.',
    image: '/projects/Screenshot_20260409_163417_uni planner.jpg',
    screenshots: [
      '/projects/Screenshot_20260409_163417_uni planner.jpg',
      '/projects/Screenshot_20260409_163426_uni planner.jpg',
      '/projects/Screenshot_20260409_163432_uni planner.jpg',
      '/projects/Screenshot_20260409_163447_uni planner.jpg'
    ],
    technologies: ['Flutter', 'Firebase', 'Dart', 'Provider'],
    category: 'mobile',
    status: 'completed',
    timeline: 'Ongoing',
    role: 'Lead Developer',
    teamSize: 1,
    challenges: [
      {
        title: 'Complex Scheduling Logic',
        description: 'Building a dynamic timetable system that handles recurring events, bi-weekly schedules, and conflicting time slots accurately.'
      },
      {
        title: 'Local Notification Management',
        description: 'Implementing a reliable reminder system that works offline to alert students before their classes or exams begin.'
      }
    ],
    features: [
      'Timetable Creator: Build and manage custom weekly schedules with a clean drag-and-drop interface.',
      'Exam & Task Tracker: Stay on top of upcoming exams, assignments, and projects with priority levels.',
      'Smart Reminders: Get automated alerts for lectures, lab sessions, and important academic deadlines.',
      'GPA Calculator: Built-in tool to track academic performance and calculate semester GPAs.',
      'Offline Support: Access your entire schedule and task list without needing an internet connection.'
    ],
    useCases: [
      'University students managing busy class schedules',
      'High school students tracking assignments and exams',
      'Academic advisors helping students stay organized'
    ],
    statusNote: 'Available on the Play Store. Continuously updated with new productivity features based on student feedback.',
    monetization: ['AdMob', 'In-app Purchases'],
    links: {
      github: 'https://github.com/joshuamussanga7-cpu/unni-planner',
      apk: 'https://play.google.com/store/apps/details?id=com.six.uniplanner'
    },
    featured: true,
  },
  {
    id: '4',
    title: 'Loan Manager – Finance Tracking App',
    description: 'A smart mobile application for tracking loans, repayments, and balances with accurate calculations and an easy-to-use interface.',
    longDescription:
      'Loan Manager is a financial tracking mobile application designed to help users manage loans efficiently. The app allows users to record borrowed amounts, monitor repayments, and automatically calculate remaining balances.',
    image: '/projects/Screenshot_20260409_163231_Loan manager app.jpg',
    screenshots: [
      '/projects/Screenshot_20260409_163231_Loan manager app.jpg',
      '/projects/Screenshot_20260409_163302_Loan manager app.jpg',
      '/projects/Screenshot_20260409_163319_Loan manager app.jpg',
      '/projects/Screenshot_20260409_163329_Loan manager app.jpg'
    ],
    technologies: ['Flutter', 'Firebase', 'Dart', 'Local Storage'],
    category: 'mobile',
    status: 'completed',
    timeline: '5 months',
    role: 'Lead Developer',
    teamSize: 1,
    challenges: [
      {
        title: 'Accurate Balance Calculations',
        description: 'Implementing precise financial logic to track multiple partial repayments and calculate interest accurately over time.'
      },
      {
        title: 'Data Persistence',
        description: 'Ensuring financial records are safely stored and accessible offline using local database solutions like SQLite or Hive.'
      }
    ],
    features: [
      'Loan Tracking: Add and manage multiple loans with detailed borrower/lender information.',
      'Repayment Management: Record individual payments, view history, and monitor real-time balances.',
      'Automatic Calculations: Instant updates of total paid vs remaining amounts across all active loans.',
      'Financial Summary: A clear dashboard providing an overview of your total lending or borrowing status.'
    ],
    useCases: [
      'Personal loan tracking between friends and family',
      'Small business financial management for credit sales',
      'Professional record keeping for micro-lending'
    ],
    statusNote: 'Stable version released. Future updates to include PDF report generation and automated SMS reminders.',
    links: {
      github: 'https://github.com/joshuamussanga7-cpu/loan-manager',
    },
    featured: true,
  },
  {
    id: '5',
    title: 'Trading Progress – Forex Performance Tracker',
    description: 'A powerful mobile app designed for traders to track performance, monitor profits and losses, and measure progress toward trading goals.',
    longDescription:
      'Trading Progress is a mobile application built to help forex traders track their trading activities with accuracy and clarity. The app allows users to record trades, monitor profit and loss, and analyze their performance over time.',
    image: '/projects/trading-progress.svg',
    screenshots: ['/projects/trading-1.svg', '/projects/trading-2.svg'],
    technologies: ['Flutter', 'Firebase', 'Dart', 'Local Storage'],
    category: 'mobile',
    status: 'in-progress',
    timeline: 'Ongoing',
    role: 'Lead Developer',
    teamSize: 1,
    challenges: [
      {
        title: 'Real-time Analytics',
        description: 'Processing trade data to provide instant performance metrics and progress visualization.'
      },
      {
        title: 'Data Visualization',
        description: 'Creating intuitive charts and graphs that represent complex trading data in a way that is easy for traders to understand.'
      }
    ],
    features: [
      'Trade Recording: Log each trade with lot size, entry/exit points, and profit or loss results.',
      'Performance Tracking: Monitor total P&L and see how close you are to your daily or monthly goals.',
      'Goal Management: Set specific targets (like lot size or profit milestones) and track completion progress.',
      'Trade History: A structured log of all past activities to help identify patterns and improve discipline.'
    ],
    useCases: [
      'Forex traders tracking daily performance and discipline',
      'Traders participating in prop firm challenges',
      'Personal trading analytics and strategy improvement'
    ],
    statusNote: 'Currently in active development. Features like cloud sync and advanced risk management tools are in progress.',
    links: {
      github: 'https://github.com/joshuamussanga7-cpu/trading-progress',
    },
    featured: true,
  },
]

// Skills data
export const skills: Skill[] = [
  // Mobile Development - Primary focus
  { name: 'Flutter', level: 'expert', category: 'Mobile', icon: 'Flutter' },
  { name: 'Dart', level: 'expert', category: 'Language', icon: 'Dart' },
  { name: 'Android Studio', level: 'advanced', category: 'Mobile', icon: 'Android' },
  { name: 'Firebase', level: 'advanced', category: 'Backend', icon: 'Firebase' },
  { name: 'REST APIs', level: 'advanced', category: 'Backend', icon: 'API' },
  { name: 'AdMob', level: 'advanced', category: 'Monetization', icon: 'Ads' },
  { name: 'Google Play Console', level: 'advanced', category: 'Deployment', icon: 'Play' },
  { name: 'SQLite/Local Data', level: 'advanced', category: 'Backend', icon: 'Database' },

  // Tools & Workflow
  { name: 'Git & GitHub', level: 'advanced', category: 'Tools', icon: 'Git' },
  { name: 'Debugging', level: 'advanced', category: 'Process', icon: 'Debug' },
  { name: 'Performance Optimization', level: 'advanced', category: 'Process', icon: 'Bolt' },
  { name: 'UI/UX Design', level: 'advanced', category: 'Design', icon: 'Figma' },

  // Web Development (Secondary)
  { name: 'Next.js', level: 'intermediate', category: 'Web', icon: 'Next' },
  { name: 'Tailwind CSS', level: 'advanced', category: 'Web', icon: 'CSS' },
]

// Social media links
export const socialLinks: SocialLink[] = [
  {
    name: 'Email',
    url: 'mailto:joshuamussanga7@gmail.com',
    icon: 'mail',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/255786491904',
    icon: 'whatsapp',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/joshuamussanga7-cpu',
    icon: 'github',
  },
  {
    name: 'Facebook',
    url: 'https://facebook.com/mussangaTech',
    icon: 'facebook',
  },
  {
    name: 'Telegram',
    url: 'https://t.me/Cryptojammer06',
    icon: 'telegram',
  },
]

// Portfolio owner info
export const portfolioInfo = {
  name: 'SITTA JARED MUSSANGA',
  title: 'Mobile App Developer (Flutter & Android)',
  description:
    'Innovative and results-driven Mobile App Developer with strong experience in building and deploying Android applications using Flutter and Android Studio. Skilled in full-cycle development — from idea validation and UI design to deployment and optimization.',
  email: 'joshuamussanga7@gmail.com',
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
