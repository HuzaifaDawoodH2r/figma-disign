import Image from "next/image"
import { Heart, ShoppingCart, Search } from 'lucide-react'

interface ProductCardProps {
  image: string
  title: string
  price: number
  originalPrice: number
  onSale?: boolean
}

export function ProductCard({ image, title, price, originalPrice, onSale }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      {onSale && (
        <div className="absolute top-4 left-4 z-10 bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded">
          Sale
        </div>
      )}
      
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Action Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-black/20">
          <button className="rounded-full bg-white p-2 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
            <ShoppingCart className="h-5 w-5" />
          </button>
          <button className="rounded-full bg-white p-2 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
            <Heart className="h-5 w-5" />
          </button>
          <button className="rounded-full bg-white p-2 text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="p-4 text-center">
        <h3 className="text-sm font-medium text-gray-900">{title}</h3>
        <div className="mt-1 flex justify-center gap-2">
          <span className="font-medium text-blue-600">${price.toFixed(2)}</span>
          {originalPrice > price && (
            <span className="text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  )
}

