import Image from "next/image"

export default function NewsletterHero() {
    return (
      <div className="relative w-full h-[400px] bg-gray-50">
        {/* Background Image */}
        <Image
          src="/picture/Rectangle 102.png" 
          height={400} 
          width={1200}
          alt="Newsletter background"
          className="w-full h-full object-cover"
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
          <div className="text-center space-y-4 px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-900">
              Get Leatest Update By Subscribe
            </h2>
            <h3 className="text-xl md:text-2xl text-indigo-900">
              Our Newsletter
            </h3>
            <button className="mt-4 px-8 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  