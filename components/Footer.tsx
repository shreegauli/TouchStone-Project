import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'
import NewsletterSignup from './NewsletterSignup'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EcoStore</h3>
            <p className="mb-4">Sustainable products for a better future.</p>
            <div className="flex space-x-4">
              <a href="//http:facebook.com" className="hover:text-gray-300"><Facebook size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Twitter size={24} /></a>
              <a href="#" className="hover:text-gray-300"><Instagram size={24} /></a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/gallery" className="hover:text-gray-300">Products</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
              <li><Link href="/custom" className="hover:text-gray-300">Custom Orders</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>123 Eco Street</p>
            <p>Green City, Earth 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@ecostore.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <NewsletterSignup />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; 2023 EcoStore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

