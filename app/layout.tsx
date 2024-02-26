import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { UiProvider } from './providers/NextUiProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hub Eleven - A Digital Marketing Agency',
  description: 'An agency that handles companies digital assets and manage their social media compiegns.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(`min-h-screen bg-background font-sans antialiased lg:prose-h1:text-7xl md:prose-h1:text-6xl sm:prose-h1:text-5xl prose-h1:text-4xl prose-h1:font-bold prose-h2:text-3xl sm:prose-h2:text-4xl md:prose-h2:text-5xl lg:prose-h2:text-6xl prose-h2:font-semibold prose-h3:text-2xl md:prose-h3:text-3xl lg:prose-h3:text-4xl ${inter.className}`)}
      >
        <UiProvider>
          <Navbar />
          {children}
          <Footer />
        </UiProvider>
      </body>
    </html>
  )
}
