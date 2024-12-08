export default function Footer() {
    return (
      <footer className="bg-purple-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Newsletter Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Hekto</h2>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  className="px-4 py-2 border rounded-md flex-1"
                />
                <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
                  Sign Up
                </button>
              </div>
              <div className="text-gray-600">
                <p>Contact Info</p>
                <p className="text-sm">17 Princess Road, London, Greater London NW1 8JR, UK</p>
              </div>
            </div>
  
            {/* Categories */}
            <div className="space-y-4">
              <h3 className="font-semibold">Categories</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Laptops & Computers</li>
                <li>Cameras & Photography</li>
                <li>Smart Phones & Tablets</li>
                <li>Video Games & Consoles</li>
                <li>Waterproof Headphones</li>
              </ul>
            </div>
  
            {/* Customer Care */}
            <div className="space-y-4">
              <h3 className="font-semibold">Customer Care</h3>
              <ul className="space-y-2 text-gray-600">
                <li>My Account</li>
                <li>Discount</li>
                <li>Returns</li>
                <li>Orders History</li>
                <li>Order Tracking</li>
              </ul>
            </div>
  
            {/* Pages */}
            <div className="space-y-4">
              <h3 className="font-semibold">Pages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Blog</li>
                <li>Browse the Shop</li>
                <li>Category</li>
                <li>Pre-Built Pages</li>
                <li>Visual Composer Elements</li>
                <li>WooCommerce Pages</li>
              </ul>
            </div>
          </div>
  
          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t flex justify-between items-center text-sm text-gray-600">
            <p>©Webecy - All Rights Reserved</p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-blue-600"></div>
              <div className="w-8 h-8 rounded-full bg-blue-400"></div>
              <div className="w-8 h-8 rounded-full bg-blue-800"></div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  