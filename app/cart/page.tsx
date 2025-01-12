'use client'

import Navigation from '../../components/Navigation'
import { useCart } from '../../contexts/CartContext'
import { Button } from '@/components/ui/button'

export default function Cart() {
  const { cart, removeFromCart } = useCart()

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <main>
      <Navigation />
      <section className="cart py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>
          {cart.length === 0 ? (
            <p className="text-center">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center border-b py-4">
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                  <Button variant="destructive" onClick={() => removeFromCart(item.id)}>Remove</Button>
                </div>
              ))}
              <div className="mt-8">
                <h3 className="text-xl font-bold">Total: ${total.toFixed(2)}</h3>
                <Button className="mt-4">Proceed to Checkout</Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

