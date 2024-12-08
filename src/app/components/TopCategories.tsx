import Image from "next/image";

export default function TopCategories() {
    return (
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
          Top Categories
        </h2>
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-48 h-48 bg-purple-50 rounded-full flex items-center justify-center">
                <Image
                  src="/picture/image3.png"
                  alt="Mini LCW Chair"
                  className="w-30 h-30 object-contain"
                  width={120}
                  height={120}
                />
              </div>
              <div className="absolute top-4 left-0">
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
                  New Price
                </span>
              </div>
            </div>
            <h3 className="text-center font-medium">Mini LCW Chair</h3>
            <p className="text-center text-indigo-900">$56.00</p>
          </div>
  
          {/* Product 2 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-48 h-48 bg-purple-50 rounded-full flex items-center justify-center">
                <Image
                  src="/picture/image3.png"
                  alt="Mini LCW Chair"
                  className="w-30 h-30 object-contain"
                  width={120}
                  height={120}
                />
              </div>
            </div>
            <h3 className="text-center font-medium">Mini LCW Chair</h3>
            <p className="text-center text-indigo-900">$56.00</p>
          </div>
  
          {/* Product 3 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-48 h-48 bg-purple-50 rounded-full flex items-center justify-center">
                <Image
                  src="/picture/five1.png"
                  alt="Mini LCW Chair"
                  className="w-30 h-30 object-contain"
                  width={120}
                  height={120}
                />
              </div>
            </div>
            <h3 className="text-center font-medium">Mini LCW Chair</h3>
            <p className="text-center text-indigo-900">$56.00</p>
          </div>
  
          {/* Product 4 */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-48 h-48 bg-purple-50 rounded-full flex items-center justify-center">
                <Image
                  src="/picture/image3.png"
                  alt="Mini LCW Chair"
                  className="w-30 h-30 object-contain"
                  width={120}
                  height={120}
                />
              </div>
            </div>
            <h3 className="text-center font-medium">Mini LCW Chair</h3>
            <p className="text-center text-indigo-900">$56.00</p>
          </div>
        </div>
  
        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          <div className="w-2 h-2 rounded-full bg-pink-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        </div>
      </section>
    )
  }
  
  