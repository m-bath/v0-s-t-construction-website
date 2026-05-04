import type { Metadata } from 'next'
import { Inter, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MobileCTA } from '@/components/mobile-cta'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: 'S&T Builders | Calgary Construction Contractor | Basement, Roofing, HVAC',
    template: '%s | S&T Builders Calgary'
  },
  description: 'Professional construction services in Calgary, AB. Basement development, roofing, siding, HVAC, electrical, plumbing & MEP consulting. 15+ years experience. Free estimates. Serving Calgary, Airdrie, Chestermere, Okotoks.',
  keywords: ['Calgary construction', 'basement development Calgary', 'roofing Calgary', 'HVAC Calgary', 'electrical contractor Calgary', 'plumbing Calgary', 'home renovation Calgary', 'MEP consulting Alberta'],
  authors: [{ name: 'S&T Builders' }],
  creator: 'S&T Builders',
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://www.sntbuilder.com',
    siteName: 'S&T Builders',
    title: 'S&T Builders | Calgary Construction Contractor',
    description: 'Professional construction services in Calgary, AB. Basement development, roofing, HVAC, electrical, plumbing & MEP consulting. 15+ years experience.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${dmSans.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCTA />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
