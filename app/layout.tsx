import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from './components/Navbar'

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
        className={cn(`min-h-screen bg-background font-sans antialiased ${inter.className}`)}
      >
        {children}
      </body>
    </html>
  )
}
