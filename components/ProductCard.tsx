'use client'

import { useCart } from '../contexts/CartContext'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card'

type ProductProps = {
  id: number
  name: string
  price: number
  description: string
  image: string
}

export default function ProductCard({ id, name, price, description,image }: ProductProps) {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart({ id, name, price })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
      <img
  src={image}
  alt={name}
  className="object-cover w-full h-full mb-4"
/>
        <p>{description}</p>
        <p className="font-bold mt-2">${price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Button onClick={handleAddToCart}>Add to Cart</Button>
      </CardFooter>
    </Card>
  )
}

