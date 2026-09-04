import type { Metadata } from 'next'
import { CVInteractive } from '@/components/cv/CVInteractive'

export const metadata: Metadata = {
  title: 'CV & Resume',
  description: 'Interactive CV of Sitta Jared Mussanga — Mobile & Full-Stack Developer.',
}

export default function CVPage() {
  return <CVInteractive />
}
