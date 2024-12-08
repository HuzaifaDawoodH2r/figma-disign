import Image from "next/image"


export default function ProductShowcase() {
  return (
    <div className="relative w-full min-h-[400px] bg-[#f8f5ff] overflow-hidden">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Image Section with Circle Background */}
          <div className="relative w-full md:w-1/2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-pink-100 rounded-full" />
            <div className="relative z-10">
              <Image 
                src="/picture/pagesofa.png"
                alt="B&B Italian Sofa"
                width={400}
                height={400}
                className="w-full max-w-[300px] md:max-w-[400px] mx-auto"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a237e] mb-6">
              Unique Features Of leatest & Trending Products
            </h2>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-red-400 mt-2" />
                <p className="text-gray-600">
                  All frames constructed with hardwood solids and laminates
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-400 mt-2" />
                <p className="text-gray-600">
                  Reinforced with double wood dowels, glue, screw - nails corner blocks and machine aids
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-teal-400 mt-2" />
                <p className="text-gray-600">
                  Arms, backs and seats are structurally reinforced
                </p>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-8">
                Add To Cart
              </button>
              <div className="text-left">
                <h3 className="font-semibold text-[#1a237e]">B&B Italian Sofa</h3>
                <p className="text-gray-600">$52.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

