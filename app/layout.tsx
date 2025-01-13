import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { CartProvider } from '../contexts/CartContext'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EcoStore',
  description: 'Sustainable products for a better future',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}

