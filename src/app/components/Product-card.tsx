import Image from "next/image"
import { Heart, ShoppingCart, Search } from 'lucide-react'


interface ProductCardProps {
  image: string
  title: string
  code: string
  price: number
}

export function ProductCard({ image, title, code, price }: ProductCardProps) {
  return (

   
    <div className="group relative">

   
       
      <div className="relative aspect-square overflow-hidden rounded-lg bg-white p-4 transition-all duration-300 group-hover:bg-blue-600">
        {/* Product Image */}
        <div className="relative h-full w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      
        {/* Action Icons */}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-4 opacity-0 transition-opacity group-hover:opacity-100">
          <button className="rounded-full bg-white p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button className="rounded-full bg-white p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600">
            <Heart className="h-5 w-5" />
          </button>
          <button className="rounded-full bg-white p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-800 ">
          {title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Code - {code}
        </p>
        <p className="mt-1 font-medium text-gray-900">
          ${price.toFixed(2)}
        </p>
      </div>
     
    </div>
  )
}

