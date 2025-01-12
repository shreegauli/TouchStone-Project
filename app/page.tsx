import Navigation from '../components/Navigation'
import Link from 'next/link'
import ProductCard from '../components/ProductCard'

const featuredProducts = [
  { id: 1, name: "Eco-Friendly Water Bottle", price: 24.99, description: "Sustainable and stylish water bottle." },
  { id: 2, name: "Organic Cotton T-Shirt", price: 29.99, description: "Comfortable, breathable organic cotton tee." },
  { id: 3, name: "Recycled Plastic Backpack", price: 59.99, description: "Durable backpack made from recycled materials." },
]

export default function Home() {
  return (
    <main>
      <Navigation />
      <section className="hero bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Eco Store</h1>
          <p className="mb-8">Discover our sustainable products and custom designs</p>
          <Link href="/gallery" className="bg-blue-500 text-white px-6 py-2 rounded">
            Shop Now
          </Link>
        </div>
      </section>
      <section className="featured-products py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

