'use client'

import { useState } from 'react'
import { Button } from '../../components/ui/button'

export default function CustomOrder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., send to server, store in session storage)
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="custom-order py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Custom Order</h1>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded"
            ></textarea>
          </div>
          <Button type="submit">
            Submit Order
          </Button>
        </form>
      </div>
    </section>
  )
}

