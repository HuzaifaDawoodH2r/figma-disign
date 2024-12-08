import { ProductCard } from "./Product-card"

const products = [
  {
    image: "/picture/chair1.png",
    title: "Cantilever chair",
    code: "Y523201",
    price: 42.00
  },
  {
    image: "/picture/chair2.png",
    title: "Cantilever chair",
    code: "Y523201",
    price: 42.00
  },
  {
    image: "/picture/chair3.png",
    title: "Cantilever chair",
    code: "Y523201",
    price: 42.00
  },
  {
    image: "/picture/chair4.png",
    title: "Cantilever chair",
    code: "Y523201",
    price: 42.00
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
          Featured Products
        </h2>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              code={product.code}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

