

import Image from "next/image"

export default function DiscountSection() {
    return (
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-center text-3xl text-indigo-900 font-bold mb-8">
          Discount Item
        </h2>
        
        {/* Navigation Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a href="#" className="text-pink-500 hover:underline">Wood Chair</a>
          <span className="text-gray-400">•</span>
          <a href="#" className="text-gray-600 hover:text-pink-500">Plastic Chair</a>
          <span className="text-gray-400">•</span>
          <a href="#" className="text-gray-600 hover:text-pink-500">Sofa Collection</a>
        </div>
  
        {/* Main Content */}
        <div className="border-2 border-purple-400 rounded-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-4xl text-indigo-900 font-bold">
                20% Discount Of All Products
              </h3>
              <h4 className="text-pink-500 text-xl">
                Eams Sofa Compact
              </h4>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Material expose like metals</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Clear lines and geometric figures</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Simple neutral colours</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600">Material expose like metals</span>
                </div>
              </div>
              <button className="bg-pink-500 text-white px-8 py-3 rounded hover:bg-pink-600 transition-colors">
                Shop Now
              </button>
            </div>
  
            {/* Right Content - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-pink-100 rounded-full"></div>
              <Image 
                src="/picture/pagesofa6.png" 
                alt="Eams Sofa Compact" 
                className="relative z-10 mx-auto"
                width={400}
                height={400}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  