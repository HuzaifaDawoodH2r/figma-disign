'use client'
import Image from "next/image"
export default function ShopGrid() {
    return (
      <div className="bg-purple-50 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-indigo-900">Shop Grid Default</h1>
            <div className="flex gap-2 text-sm mt-2">
              <span className="text-gray-600">Home.</span>
              <span className="text-gray-600">Pages.</span>
              <span className="text-pink-500">Shop Grid Default</span>
            </div>
          </div>
  
          {/* Product Filter Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg text-indigo-900">Ecommerce Acceories & Fashion item</h2>
            <div className="text-sm text-gray-600">Per Page: 12</div>
          </div>
  
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Product Card 1 */}
            <div className="bg-white p-4 rounded-lg group hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <Image
                  src="/picture/page101.png"
                  height={200}
                  width={200}
                  alt="Product"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-indigo-900 font-semibold mb-2">Vel elit euismod</h3>
                <div className="flex justify-center gap-1 mb-2">
                  {"★★★★☆".split("").map((star, i) => (
                    <span key={i} className="text-yellow-400">{star}</span>
                  ))}
                </div>
                <div className="text-pink-500 font-semibold">$26.00</div>
              </div>
            </div>
  
            {/* Product Card 2 */}
            <div className="bg-white p-4 rounded-lg group hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <Image
                 src="/picture/page102.png"
                  height={200}
                  width={200}
                  alt="Product"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-indigo-900 font-semibold mb-2">Ultricies condimentum imperdiet</h3>
                <div className="flex justify-center gap-1 mb-2">
                  {"★★★★☆".split("").map((star, i) => (
                    <span key={i} className="text-yellow-400">{star}</span>
                  ))}
                </div>
                <div className="text-pink-500 font-semibold">$42.00</div>
              </div>
            </div>
  
            {/* Product Card 3 */}
            <div className="bg-white p-4 rounded-lg group hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <Image
                   src="/picture/page103.png"
                   height={200}
                   width={200}
                  alt="Product"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-indigo-900 font-semibold mb-2">Vitae suspendisse sed</h3>
                <div className="flex justify-center gap-1 mb-2">
                  {"★★★★☆".split("").map((star, i) => (
                    <span key={i} className="text-yellow-400">{star}</span>
                  ))}
                </div>
                <div className="text-pink-500 font-semibold">$52.00</div>
              </div>
            </div>
  
            {/* Product Card 4 */}
            <div className="bg-white p-4 rounded-lg group hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <Image
                   src="/picture/bagepage.png"
                   height={200}
                   width={200}
                  alt="Product"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-indigo-900 font-semibold mb-2">Sed at fermentum</h3>
                <div className="flex justify-center gap-1 mb-2">
                  {"★★★★☆".split("").map((star, i) => (
                    <span key={i} className="text-yellow-400">{star}</span>
                  ))}
                </div>
                <div className="text-pink-500 font-semibold">$32.00</div>
              </div>
            </div>
  
            {/* Additional Product Cards (5-12) - Same structure repeated */}
            {/* Product Card 5 */}
            <div className="bg-white p-4 rounded-lg group hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <Image
                     src="/picture/digital.png"
                     height={100}
                     width={100}
                  alt="Product"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-indigo-900 font-semibold mb-2">Smart Watch</h3>
                <div className="flex justify-center gap-1 mb-2">
                  {"★★★★☆".split("").map((star, i) => (
                    <span key={i} className="text-yellow-400">{star}</span>
                  ))}
                </div>
                <div className="text-pink-500 font-semibold">$32.00</div>
              </div>
            </div>
            {/* product card 6 */}
            <div className="bg-white p-4 rounded-lg group hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <Image
                     src="/picture/watch.png"
                     height={100}
                     width={100}
                  alt="Product"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-indigo-900 font-semibold mb-2">Smart Watch</h3>
                <div className="flex justify-center gap-1 mb-2">
                  {"★★★★☆".split("").map((star, i) => (
                    <span key={i} className="text-yellow-400">{star}</span>
                  ))}
                </div>
                <div className="text-pink-500 font-semibold">$32.00</div>
              </div>
            </div>
               {/* product card 7 */}
           
               <div className="bg-white p-4 rounded-lg group hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <Image
                     src="/picture/purepng 1.png"
                     height={100}
                     width={100}
                  alt="Product"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-indigo-900 font-semibold mb-2">Smart Watch</h3>
                <div className="flex justify-center gap-1 mb-2">
                  {"★★★★☆".split("").map((star, i) => (
                    <span key={i} className="text-yellow-400">{star}</span>
                  ))}
                </div>
                <div className="text-pink-500 font-semibold">$32.00</div>
              </div>
            </div>
  {/* product card 8 */}
  <div className="bg-white p-4 rounded-lg group hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <Image
                     src="/picture/image 1164.png"
                     height={100}
                     width={100}
                  alt="Product"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-indigo-900 font-semibold mb-2">Smart Watch</h3>
                <div className="flex justify-center gap-1 mb-2">
                  {"★★★★☆".split("").map((star, i) => (
                    <span key={i} className="text-yellow-400">{star}</span>
                  ))}
                </div>
                <div className="text-pink-500 font-semibold">$32.00</div>
              </div>
            </div>




  {/* product card 9 */}
  <div className="bg-white p-4 rounded-lg group hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <Image
                     src="/picture/ladiswatch.png"
                     height={100}
                     width={100}
                  alt="Product"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-indigo-900 font-semibold mb-2">Smart Watch</h3>
                <div className="flex justify-center gap-1 mb-2">
                  {"★★★★☆".split("").map((star, i) => (
                    <span key={i} className="text-yellow-400">{star}</span>
                  ))}
                </div>
                <div className="text-pink-500 font-semibold">$32.00</div>
              </div>
            </div>
  {/* product card 10 */}
  <div className="bg-white p-4 rounded-lg group hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <Image
                     src="/picture/cam 2.png"
                     height={100}
                     width={100}
                  alt="Product"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-indigo-900 font-semibold mb-2">Smart Watch</h3>
                <div className="flex justify-center gap-1 mb-2">
                  {"★★★★☆".split("").map((star, i) => (
                    <span key={i} className="text-yellow-400">{star}</span>
                  ))}
                </div>
                <div className="text-pink-500 font-semibold">$32.00</div>
              </div>
            </div>
  {/* product card11 */}
  <div className="bg-white p-4 rounded-lg group hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <Image
                     src="/picture/headfon.png"
                     height={150}
                     width={100}
                  alt="Product"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-indigo-900 font-semibold mb-2">Smart Watch</h3>
                <div className="flex justify-center gap-1 mb-2">
                  {"★★★★☆".split("").map((star, i) => (
                    <span key={i} className="text-yellow-400">{star}</span>
                  ))}
                </div>
                <div className="text-pink-500 font-semibold">$32.00</div>
              </div>
            </div>
  {/* product card 12 */}
  <div className="bg-white p-4 rounded-lg group hover:shadow-lg transition-shadow">
              <div className="relative mb-4">
                <Image
                     src="/picture/bagepage.png"
                     height={200}
                     width={200}
                  alt="Product"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              </div>
              <div className="text-center">
                <h3 className="text-indigo-900 font-semibold mb-2">Smart Watch</h3>
                <div className="flex justify-center gap-1 mb-2">
                  {"★★★★☆".split("").map((star, i) => (
                    <span key={i} className="text-yellow-400">{star}</span>
                  ))}
                </div>
                <div className="text-pink-500 font-semibold">$32.00</div>
              </div>
            </div>
            {/* Repeat similar structure for remaining products */}
            {/* Products 6-12 would follow the same pattern */}
          </div>
        </div>
      </div>
    )
  }
  
  