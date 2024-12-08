import Image from "next/image"
export default function BlogPage() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-2xl font-bold">Blog Page</h1>
          <nav className="flex gap-4 mt-2">
            <a href="#" className="text-gray-600">Home</a>
            <a href="#" className="text-gray-600">Pages</a>
            <a href="#" className="text-pink-500">Post Page</a>
          </nav>
        </header>
  
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Blog Post */}
            <article className="mb-12">
              <Image
                src="/picture/bruce1.png" 
                height={300}
                width={600}
                alt="Blog post image"
                className="w-full rounded-lg mb-4"
              />
              <div className="flex gap-4 text-sm text-gray-500 mb-2">
                <span>Self Admin</span>
                <span>Aug 08 2023</span>
              </div>
              <h2 className="text-xl font-bold mb-2">Mauris at orci non vulputate diam tincidunt nec.</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="text-pink-500">Read More</a>
            </article>
  
            {/* Second Blog Post */}
            <article>
              <Image
               src="/picture/bruce2.png" 
               height={300}
               width={600}
                alt="Blog post image"
                className="w-full rounded-lg mb-4"
              />
            </article>
          </div>
  
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Search</h3>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg"
                placeholder="Search..."
              />
            </div>
  
            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Categories</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-pink-500">Woman</span>
                  <span>(15)</span>
                </div>
                <div className="flex justify-between">
                  <span>Man</span>
                  <span>(17)</span>
                </div>
                <div className="flex justify-between">
                  <span>Kids</span>
                  <span>(15)</span>
                </div>
              </div>
            </div>
  
            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Recent Post</h3>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex gap-4">
                    <Image
                       src="/picture/side4.png" 
                       height={30}
                       width={60}
                      alt="Recent post thumbnail"
                      className="w-16 h-16 rounded-lg"
                    />
                    <p className="text-sm">It is a long established fact that a reader...</p>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Sale Product */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">Sale Product</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex gap-4">
                    <Image
                          src="/picture/side3.png" 
                          height={100}
                          width={100}
                      alt="Product thumbnail"
                      className="w-16 h-16 rounded-lg"
                    />
                    <div>
                      <p className="text-sm font-medium">Product Name</p>
                      <p className="text-sm text-gray-500">$99.00</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* Offer Products */}
            <div>
              <h3 className="text-lg font-bold mb-4">Offer product</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <Image
                         src="/picture/side2.png" 
                         height={60}
                         width={60}
                    alt="Offer product"
                    className="w-full rounded-lg mb-2"
                  />
                  <p className="text-sm">Black Dress</p>
                </div>
                <div className="text-center">
                  <Image
                         src="/picture/side1.png" 
                         height={60}
                         width={60}
                    alt="Offer product"
                    className="w-full rounded-lg mb-2"
                  />
                  <p className="text-sm">Red Dress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  