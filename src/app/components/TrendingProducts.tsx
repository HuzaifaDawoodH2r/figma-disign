import Image from "next/image"
export default function TrendingProducts() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-center text-2xl font-bold text-[#1a237e] mb-8">
          Trending Products
        </h1>
        
        {/* Top Grid - Chairs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {/* Chair 1 */}
          <div className="text-center">
            <div className="bg-gray-50 p-4 rounded-lg mb-2">
              <Image 
                src="/picture/five1.png" 
                height={100}
                width={100}
                alt="Cantilever chair"
                className="w-32 h-32 mx-auto"
              />
            </div>
            <h3 className="text-sm font-medium">Cantilever chair</h3>
            <p className="text-sm text-blue-600">$42.00</p>
          </div>
  
          {/* Chair 2 */}
          <div className="text-center">
            <div className="bg-gray-50 p-4 rounded-lg mb-2">
              <Image 
                src="/picture/five2.png" 
                height={100}
                width={100}
                alt="Cantilever chair"
                className="w-32 h-32 mx-auto"
              />
            </div>
            <h3 className="text-sm font-medium">Cantilever chair</h3>
            <p className="text-sm text-blue-600">$42.00</p>
          </div>
  
          {/* Chair 3 */}
          <div className="text-center">
            <div className="bg-gray-50 p-4 rounded-lg mb-2">
              <Image 
                src="/picture/five3.png" 
                height={100}
                width={100}
                alt="Cantilever chair"
                className="w-32 h-32 mx-auto"
              />
            </div>
            <h3 className="text-sm font-medium">Cantilever chair</h3>
            <p className="text-sm text-blue-600">$42.00</p>
          </div>
  
          {/* Chair 4 */}
          <div className="text-center">
            <div className="bg-gray-50 p-4 rounded-lg mb-2">
              <Image 
                src="/picture/five4.png"
                height={100}
                width={100}
                alt="Cantilever chair"
                className="w-32 h-32 mx-auto"
              />
            </div>
            <h3 className="text-sm font-medium">Cantilever chair</h3>
            <p className="text-sm text-blue-600">$42.00</p>
          </div>
        </div>
  
        {/* Bottom Grid - Promotional Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Promo Section 1 */}
          <div className="bg-pink-50 p-6 rounded-lg">
            <h3 className="font-medium mb-2">25% off in all products</h3>
            <a href="#" className="text-pink-500 text-sm">Shop Now</a>
            <Image 
              src="/picture/five5.png" 
              height={100}
              width={100}
              alt="Promotional item"
              className="w-24 h-24 mt-4"
            />
          </div>
  
          {/* Promo Section 2 */}
          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="font-medium mb-2">25% off in all products</h3>
            <a href="#" className="text-pink-500 text-sm">View Collection</a>
            <div className="bg-yellow-400 h-8 w-32 mt-4"></div>
          </div>
  
          {/* Executive Chairs Section */}
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="bg-gray-50 p-2 rounded">
                  <Image 
                    src="/picture/five6.png" 
                    height={100}
                    width={100}
                    alt="Executive Seat chair"
                    className="w-16 h-16"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Executive Seat chair</h3>
                  <p className="text-sm text-blue-600">$32.00</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  