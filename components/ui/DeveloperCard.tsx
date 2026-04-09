'use client'

import React from 'react'
import Link from 'next/link'
import { Badge } from './Badge'
import { SocialIcon } from './SocialIcon'
import { portfolioInfo, skills, socialLinks } from '@/lib/data'
import { cn } from '@/lib/utils'

interface DeveloperCardProps {
  className?: string
  showFullBio?: boolean
}

export function DeveloperCard({ className, showFullBio = false }: DeveloperCardProps) {
  return (
    <div className={cn(
      "bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 border-4 border-blue-600/10 shadow-2xl relative overflow-hidden group",
      className
    )}>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-bl-full -mr-10 -mt-10 group-hover:scale-125 transition-transform duration-700" />

      <div className="relative z-10">
        <div className="flex flex-col gap-6 mb-8">
           <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <img
                src={portfolioInfo.avatar}
                alt={portfolioInfo.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback if image doesn't exist yet
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=Sitta+Jared&background=2563eb&color=fff&size=128"
                }}
              />
           </div>
           <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-4 bg-blue-50 dark:bg-blue-900/30 w-fit px-3 py-1 rounded-full">
                The Developer
              </h3>
              <h4 className="text-3xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
                {portfolioInfo.name}
              </h4>
           </div>
        </div>

        <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mb-6 uppercase tracking-wider">
          {portfolioInfo.title}
        </p>

        <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed mb-8 font-medium">
          {portfolioInfo.description}
          {showFullBio && (
            <span className="block mt-4">
              I specialize in building high-performance applications with a focus on user experience and clean code.
              My expertise spans across mobile development with Flutter and modern web technologies like Next.js and React.
            </span>
          )}
        </p>

        <div className="space-y-6">
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 6).map(skill => (
              <Badge key={skill.name} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 border-none font-bold text-xs py-1 px-3">
                {skill.name}
              </Badge>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href={portfolioInfo.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-sm font-black transition-all shadow-xl shadow-blue-500/30 hover:-translate-y-1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" x2="12" y1="15" y2="3"/>
              </svg>
              Download My CV
            </a>
            <Link
              href="/#contact"
              className="flex items-center justify-center gap-3 py-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-2xl text-sm font-black transition-all border-2 border-transparent hover:border-blue-600/20"
            >
              Hire Me Today
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex justify-center gap-6 pt-6 border-t border-gray-100 dark:border-gray-800">
             {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all hover:scale-125"
                  title={link.name}
                >
                   <span className="sr-only">{link.name}</span>
                   <SocialIcon icon={link.icon} className="w-5 h-5" />
                </a>
             ))}
          </div>
        </div>
      </div>
    </div>
  )
}
