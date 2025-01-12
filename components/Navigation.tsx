'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import { Menu, ShoppingCart, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { cart } = useCart()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About Us' },
    { href: '/custom', label: 'Custom Orders' },
  ]

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">EcoStore</Link>
        
        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-4 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="hover:text-gray-300 transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/cart" className="flex items-center hover:text-gray-300 transition-colors">
              <ShoppingCart className="mr-2" />
              <span>{cart.length}</span>
            </Link>
          </li>
        </ul>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center">
          <Link href="/cart" className="mr-4 flex items-center hover:text-gray-300 transition-colors">
            <ShoppingCart className="mr-2" />
            <span>{cart.length}</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-white focus:outline-none">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-800 text-white">
              <nav className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-xl font-bold">Menu</h2>
                  <SheetTrigger asChild>
                    {/* <button className="text-white focus:outline-none">
                      <X size={24} />
                    </button> */}
                  </SheetTrigger>
                </div>
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <Link 
                        href={item.href} 
                        className="block py-2 hover:text-gray-300 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

