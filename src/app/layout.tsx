import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from '@/lib/constants'
import { CONTACT_INFO } from '@/lib/constants'
import { Header, Footer } from '@/components/layout'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })


export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s - ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  icons: [
    { rel: 'icon', type: 'image/png', sizes: '96x96', url: '/favicon/favicon-96x96.png' },
    { rel: 'icon', type: 'image/svg+xml', url: '/favicon/favicon.svg' },
    { rel: 'shortcut icon', url: '/favicon/favicon.ico' }, 
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/favicon/apple-touch-icon.png' },
  ],
  manifest: '/favicon/site.webmanifest',
  keywords: [
    'OpenCode',
    'IT optimization',
    'automation',
    'cloud infrastructure',
    'Kubernetes',
    'AI solutions Saudi Arabia',
    'AI integration KSA',
    'enterprise AI services Saudi',
    'custom AI development Saudi Arabia',
    'intelligent automation KSA',
    'IT optimization Saudi Arabia',
    'workflow automation KSA',
    'business process automation Saudi',
    'AI consulting Saudi Arabia',
    'full-stack AI solutions KSA',
    'AI model deployment Saudi Arabia',
    'open-source IT optimization KSA',
    'digital transformation Saudi Arabia',
    'AI-powered business solutions KSA',
    'enterprise AI integration Saudi Arabia',
    'smart enterprise solutions KSA',
    'AI hardware solutions Saudi Arabia',
    'intelligent systems implementation KSA',
    'automation consulting Saudi Arabia',
    'AI experts Saudi Arabia',
    'Kubernetes consulting Saudi Arabia',
    'OpenShift deployment KSA',
    'Red Hat OpenShift experts Saudi',
    'OpenShift AI integration KSA',
    'containerization solutions Saudi Arabia',
    'Red Hat Enterprise Linux KSA',
    'Ansible automation Saudi Arabia',
    'VMware virtualization KSA',
    'enterprise container management Saudi',
    'Kubernetes and OpenShift Saudi Arabia',
    'OpenShift consulting KSA',
    'Red Hat certified experts Saudi',
    'container orchestration Saudi Arabia',
    'DevOps automation KSA',
    'OpenShift cluster management Saudi Arabia',
    'AI-powered container solutions KSA',
    'virtual machine management Saudi Arabia',
    'infrastructure automation Saudi Arabia',
    'Red Hat automation solutions KSA',
    'enterprise IT containerization Saudi Arabia'
  ],
  authors: [{ name: 'OpenCode Team' }],
  creator: 'OpenCode',
  metadataBase: new URL(SITE_CONFIG.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: '@opencodesa',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YxgRi8MMPe8NGqfGwGItvXyI2VjWSx9sozrbPZBODPI',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} h-full font-sans`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "OpenCode Solutions",
              "image": SITE_CONFIG.ogImage,
              "@id": SITE_CONFIG.url,
              "url": SITE_CONFIG.url,
              "alternateName": "opencode.sa",
              "logo": `${SITE_CONFIG.url}/favicon/favicon-32x32.png`,
              "telephone": CONTACT_INFO.phone,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "King Fahd Road",
                "addressLocality": "Dhahran",
                "postalCode": "34464",
                "addressCountry": "SA"
              },
              "description": "OpenCode Solutions is a leading IT consultancy in Saudi Arabia, specializing in AI integration, Kubernetes, automation, and open-source optimization to help businesses modernize their operations.",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Sunday",
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday"
                ],
                "opens": "09:00",
                "closes": "17:00"
              },
              "sameAs": [
        "https://www.linkedin.com/company/opencode-solutions",
        // "https://twitter.com/opencodesa",
        // "https://github.com/your-github-org"
      ]
            })
          }}
        />

      </body>
    </html>
  )
}