export const SITE_CONFIG = {
  name: 'OpenCode Solutions | AI & IT Optimization in Saudi Arabia',
  description: "OpenCode Solutions is a leading IT consultancy in Saudi Arabia, specializing in AI integration, Kubernetes, automation, and open-source optimization to help businesses modernize their operations.",
  url: 'https://opencode.sa',
  ogImage: '/favicon/android-chrome-512x512.png',
  links: {
    x: 'https://x.com/',
    github: 'https://github.com/',
    linkedin: 'https://www.linkedin.com/company/opencode-solutions',
  },
} as const

export const NAVIGATION_LINKS = [
  { name: 'About Us', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Products', href: '#products' },
] as const

export const CONTACT_INFO = {
  email: 'info@opencode.sa',
  phone: '+966552686835',
  address: {
    line1: '34719',
    line2: 'Eastern Province, Saudi Arabia',
  },
} as const
