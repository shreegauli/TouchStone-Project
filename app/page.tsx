import Navigation from '../components/Navigation'
import Banner from '../components/Banner'
import ProductCard from '../components/ProductCard'
import Link from 'next/link'

const featuredProducts = [
  { id: 1, name: "Eco-Friendly Water Bottle", price: 24.99, description: "Sustainable and stylish water bottle.", image: "/images/water-bottle.jpg" },
  { id: 2, name: "Organic Cotton T-Shirt", price: 29.99, description: "Comfortable, breathable organic cotton tee.", image: "/images/tshirt.jpg" },
  { id: 3, name: "Recycled Plastic Backpack", price: 59.99, description: "Durable backpack made from recycled materials.", image: "/images/backpack.jpg" },
]

export default function Home() {
  return (
    <>
      <Banner />
      <section className="featured-products py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

