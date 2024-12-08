
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 relative z-10">
            {/* Pendant Lamp Image */}
            <div className="relative w-44 h-44 mb-8">
              <Image
                src="/picture/lamp.png"
                alt="Pendant Lamp"
                fill
                className="object-contain"
                
              />
            </div>
            
            <p className="text-pink-500 font-medium">
              Best Furniture For Your Castle....
            </p>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              New Furniture Collection
              <br />
              Trends in 2020
            </h1>
            
            <p className="text-gray-600 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Magna in est adipiscing in phasellus non in justo.
            </p>
            
            <button 
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-md"
            >
              Shop Now
            </button>
          </div>

          {/* Right Column - Chair Image */}
          <div className="relative">
            {/* Discount Badge */}
            <div className="absolute top-4 right-4 z-20 bg-blue-400 text-white rounded-full px-4 py-2">
              <p className="text-sm font-bold">50% off</p>
            </div>
            
            {/* Chair Image */}
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
              <Image
                src="/picture/sofa.png"
                alt="Pink Shell Chair"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-4 top-1/2 w-2 h-2 bg-pink-500 rounded-full" />
        <div className="absolute left-8 bottom-1/4 w-2 h-2 bg-pink-500 rounded-full" />
      </div>
    </div>
  )
}

