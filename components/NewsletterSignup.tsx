'use client'

import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your API
    // For this example, we'll just simulate a successful signup
    setMessage('Thank you for signing up!')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-gray-700 text-white placeholder-gray-400"
      />
      <Button type="submit" className="w-full">
        Sign Up
      </Button>
      {message && <p className="text-green-400">{message}</p>}
    </form>
  )
}

