import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { CartProvider } from '../contexts/CartContext'

const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Touchstone Project',
  description: 'A web development project for the Touchstone assignment',
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
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

