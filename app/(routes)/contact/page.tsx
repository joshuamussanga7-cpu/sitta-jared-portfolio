import { ContactForm } from '@/components/sections/ContactForm'
import { portfolioInfo, socialLinks } from '@/lib/data'

/**
 * Social Icon Component to render brand-specific SVGs
 */
function SocialIcon({ icon, name }: { icon: string; name: string }) {
  switch (icon) {
    case 'whatsapp':
      return (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    case 'facebook':
      return (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    case 'instagram':
      return (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      )
    case 'telegram':
      return (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M11.944 0C5.346 0 0 5.346 0 11.944c0 6.598 5.346 11.944 11.944 11.944 6.598 0 11.944-5.346 11.944-11.944C23.888 5.346 18.542 0 11.944 0zm5.201 8.384l-1.747 8.232c-.13.576-.47.714-.951.445l-2.664-1.962-1.285 1.237c-.143.143-.262.262-.536.262l.191-2.71 4.931-4.453c.214-.191-.048-.298-.333-.107l-6.095 3.837-2.626-.821c-.571-.178-.582-.571.12-.845l10.252-3.951c.475-.173.891.113.737.946z"/>
        </svg>
      )
    case 'github':
      return (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
      )
    case 'mail':
      return (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M0 3v18h24V3H0zm6.623 7.929L2.803 5.177l1.561-1.208 4.291 5.544.512.66.512-.66 4.291-5.544 1.561 1.208-3.82 4.752L21.2 18H2.8L6.623 10.929z"/>
        </svg>
      )
    default:
      return <span className="font-bold text-lg">{name.charAt(0)}</span>
  }
}

/**
 * Contact Page
 */
export default function ContactPage() {
  const getBrandColor = (icon: string) => {
    switch (icon) {
      case 'whatsapp': return 'bg-[#25D366] hover:bg-[#128C7E]';
      case 'facebook': return 'bg-[#1877F2] hover:bg-[#0C5DC7]';
      case 'instagram': return 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]';
      case 'telegram': return 'bg-[#0088cc] hover:bg-[#0077b5]';
      case 'github': return 'bg-[#333] hover:bg-[#000]';
      case 'mail': return 'bg-[#EA4335] hover:bg-[#C5221F]';
      default: return 'bg-gradient-to-br from-blue-500 to-purple-600';
    }
  }
  return (
    <div className="w-full">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 gradient-text">Get in Touch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
            Have a project in mind or want to collaborate? Feel free to reach out. I'd love to hear
            from you!
          </p>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                {/* Email */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Email</h4>
                  <a
                    href={`mailto:${portfolioInfo.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                  >
                    {portfolioInfo.email}
                  </a>
                </div>

                {/* Phone */}
                {portfolioInfo.phone && (
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Phone</h4>
                    <a
                      href={`tel:${portfolioInfo.phone}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      {portfolioInfo.phone}
                    </a>
                  </div>
                )}

                {/* Location */}
                {portfolioInfo.location && (
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Location</h4>
                    <p className="text-gray-600 dark:text-gray-400">{portfolioInfo.location}</p>
                  </div>
                )}

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-md transition-all hover:scale-110 hover:shadow-xl ${getBrandColor(link.icon)}`}
                        title={link.name}
                      >
                        <SocialIcon icon={link.icon} name={link.name} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Response Time */}
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Response Time:</span> I typically reply within 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
