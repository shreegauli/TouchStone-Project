import Navigation from '../../components/Navigation'
import ProductCard from '../../components/ProductCard'

const products = [
  { id: 1, name: "Eco-Friendly Water Bottle", price: 24.99, description: "Sustainable and stylish water bottle." },
  { id: 2, name: "Organic Cotton T-Shirt", price: 29.99, description: "Comfortable, breathable organic cotton tee." },
  { id: 3, name: "Recycled Plastic Backpack", price: 59.99, description: "Durable backpack made from recycled materials." },
  { id: 4, name: "Bamboo Utensil Set", price: 19.99, description: "Portable and eco-friendly utensil set." },
  { id: 5, name: "Solar-Powered Charger", price: 39.99, description: "Charge your devices using solar energy." },
  { id: 6, name: "Reusable Produce Bags", price: 14.99, description: "Set of mesh bags for grocery shopping." },
]

export default function Gallery() {
  return (
    <main>
      <Navigation />
      <section className="gallery py-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

