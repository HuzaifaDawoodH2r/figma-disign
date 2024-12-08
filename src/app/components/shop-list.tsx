import { Star, ShoppingCart, Heart, Repeat2 } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function ShopList() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="px-4 py-4 max-w-7xl mx-auto">
        <div className="text-sm">
          <Link href="/" className="text-gray-500 hover:text-gray-700">Home</Link>
          <span className="mx-2 text-gray-400">&gt;</span>
          <Link href="/pages" className="text-gray-500 hover:text-gray-700">Pages</Link>
          <span className="mx-2 text-gray-400">&gt;</span>
          <span className="text-pink-500">Shop List</span>
        </div>
      </div>

      {/* Header */}
      <div className="px-4 py-8 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold">Shop List</h1>
      </div>

      {/* Product List Section */}
      <div className="px-4 max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Ecommerce Accesories & Fashion item</h2>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center justify-between py-4 border-b">
            <div className="flex gap-4 items-center">
              <span className="text-sm">Per Page:</span>
              <select className="border rounded px-2 py-1 text-sm">
                <option>10</option>
                <option>20</option>
                <option>30</option>
              </select>
              
              <span className="text-sm">Sort By:</span>
              <select className="border rounded px-2 py-1 text-sm">
                <option>Best Match</option>
                <option>Price Low to High</option>
                <option>Price High to Low</option>
              </select>
            </div>
            
            <div className="flex gap-2">
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button className="p-1 hover:bg-gray-100 rounded">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 mb-8">
          {/* Product Item */}
          <div className="flex flex-col md:flex-row gap-6 p-4 bg-white rounded-lg shadow-sm">
            <div className="w-full md:w-72 h-64 relative">
              <Image
                src="/picture/page12pic.png"
                alt="Product"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Accumsan tincidunt</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(22)</span>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold">$54.00</span>
                <span className="ml-2 text-gray-500 line-through">$50.00</span>
              </div>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Repeat2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Item */}
          <div className="flex flex-col md:flex-row gap-6 p-4 bg-white rounded-lg shadow-sm">
            <div className="w-full md:w-72 h-64 relative">
              <Image
                src="/picture/page13pic.png"
                alt="Product"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">In nulla</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(15)</span>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold">$50.00</span>
                <span className="ml-2 text-gray-500 line-through">$45.00</span>
              </div>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Repeat2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
             {/* Product Item */}
             <div className="flex flex-col md:flex-row gap-6 p-4 bg-white rounded-lg shadow-sm">
            <div className="w-full md:w-72 h-64 relative">
              <Image
                src="/picture/page14pic.png"
                alt="Product"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">In nulla</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(15)</span>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold">$50.00</span>
                <span className="ml-2 text-gray-500 line-through">$45.00</span>
              </div>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Repeat2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
             {/* Product Item */}
             <div className="flex flex-col md:flex-row gap-6 p-4 bg-white rounded-lg shadow-sm">
            <div className="w-full md:w-72 h-64 relative">
              <Image
                src="/picture/page15pic.png"
                alt="Product"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">In nulla</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(15)</span>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold">$50.00</span>
                <span className="ml-2 text-gray-500 line-through">$45.00</span>
              </div>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Repeat2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
             {/* Product Item */}
             <div className="flex flex-col md:flex-row gap-6 p-4 bg-white rounded-lg shadow-sm">
            <div className="w-full md:w-72 h-64 relative">
              <Image
                src="/picture/page16pic.png"
                alt="Product"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">In nulla</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(15)</span>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold">$50.00</span>
                <span className="ml-2 text-gray-500 line-through">$45.00</span>
              </div>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Repeat2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
             {/* Product Item */}
             <div className="flex flex-col md:flex-row gap-6 p-4 bg-white rounded-lg shadow-sm">
            <div className="w-full md:w-72 h-64 relative">
              <Image
                src="/picture/page17pic.png"
                alt="Product"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">In nulla</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(15)</span>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold">$50.00</span>
                <span className="ml-2 text-gray-500 line-through">$45.00</span>
              </div>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Repeat2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
             {/* Product Item */}
             <div className="flex flex-col md:flex-row gap-6 p-4 bg-white rounded-lg shadow-sm">
            <div className="w-full md:w-72 h-64 relative">
              <Image
                src="/picture/page18pic.png"
                alt="Product"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">In nulla</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(15)</span>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold">$50.00</span>
                <span className="ml-2 text-gray-500 line-through">$45.00</span>
              </div>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
              </p>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full">
                  <Repeat2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

