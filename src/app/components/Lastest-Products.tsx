import { ProductCard } from "./Product1-card"
import { ProductTabs } from "./product-tabs"

const products = [
  {
    image: "/picture/image1.png",
    title: "Comfort Handy Craft",
    price: 42.00,
    originalPrice: 65.00,
    onSale: true
  },
  {
    image: "/picture/image2.png",
    title: "Comfort Handy Craft",
    price: 42.00,
    originalPrice: 65.00,
    onSale: false
  },
  {
    image: "/picture/image3.png",
    title: "Comfort Handy Craft",
    price: 42.00,
    originalPrice: 65.00,
    onSale: false
  },
  {
    image: "/picture/image2.png",
    title: "Comfort Handy Craft",
    price: 42.00,
    originalPrice: 65.00,
    onSale: true
  },
  {
    image: "/picture/image5.png",
    title: "Comfort Handy Craft",
    price: 42.00,
    originalPrice: 65.00,
    onSale: false
  },
  {
    image: "/picture/image6.png",
    title: "Comfort Handy Craft",
    price: 42.00,
    originalPrice: 65.00,
    onSale: false
  },
]

export function LatestProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-8">
          Latest Products
        </h2>
        
        <ProductTabs className="mb-12" />
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              onSale={product.onSale}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

