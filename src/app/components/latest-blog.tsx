import Image from "next/image"
export default function LatestBlog() {
    return (
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-indigo-900 mb-12">
          Leatest Blog
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Card 1 */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/picture/frame1.png"
                height={300}
                width={400}
                alt="Blog post image"
                className="w-full h-[250px] object-cover rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-4 text-sm">
                <span className="text-pink-500">SaberAli</span>
                <span className="text-gray-500">21 August/2020</span>
              </div>
              <h3 className="text-xl font-semibold text-indigo-900">
                Top essential Trends in 2021
              </h3>
              <p className="text-gray-600 line-clamp-2">
                More off this less hello samlande lied much over tightly circa horse taped mightily
              </p>
              <a href="#" className="inline-block text-indigo-900 font-medium hover:text-pink-500">
                Read More
              </a>
            </div>
          </div>
  
          {/* Blog Card 2 */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                 src="/picture/frame2.png"
                 height={300}
                 width={400}
                alt="Blog post image"
                className="w-full h-[250px] object-cover rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-4 text-sm">
                <span className="text-pink-500">SaberAli</span>
                <span className="text-gray-500">21 August/2020</span>
              </div>
              <h3 className="text-xl font-semibold text-indigo-900">
                Top essential Trends in 2021
              </h3>
              <p className="text-gray-600 line-clamp-2">
                More off this less hello samlande lied much over tightly circa horse taped mightily
              </p>
              <a href="#" className="inline-block text-indigo-900 font-medium hover:text-pink-500">
                Read More
              </a>
            </div>
          </div>
  
          {/* Blog Card 3 */}
          <div className="space-y-4">
            <div className="relative">
              <Image
                src="/picture/frame3.png"
                height={300}
                width={400}
                alt="Blog post image"
                className="w-full h-[250px] object-cover rounded-lg"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-4 text-sm">
                <span className="text-pink-500">SaberAli</span>
                <span className="text-gray-500">21 August/2020</span>
              </div>
              <h3 className="text-xl font-semibold text-indigo-900">
                Top essential Trends in 2021
              </h3>
              <p className="text-gray-600 line-clamp-2">
                More off this less hello samlande lied much over tightly circa horse taped mightily
              </p>
              <a href="#" className="inline-block text-indigo-900 font-medium hover:text-pink-500">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  