import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo, Bangers, Geist_Mono } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/components/cart-provider'

const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})
const bangers = Bangers({
  variable: '--font-bangers',
  subsets: ['latin'],
  weight: '400',
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'WEB-SLINGER AXES — Multiverse Electric Guitars',
  description:
    'Electric guitars from across the multiverse. Comic-book built, dimension-tested. Shred in any reality.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#e23b2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${bangers.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <CartProvider>{children}</CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
