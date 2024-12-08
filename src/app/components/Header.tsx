import Link from "next/link"



export function Header() {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="w-full bg-purple-600 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex items-center space-x-4 mb-2 md:mb-0">
              <span>info@hekto.com</span>
              <span>(12345)67890</span>
            </div>
            {/* <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-white hover:text-white hover:bg-purple-700">
                    English
                  </utton>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Spanish</DropdownMenuItem>
                  <DropdownMenuItem>French</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button variant="ghost" className="text-white hover:text-white hover:bg-purple-700">
                    USD
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>USD</DropdownMenuItem>
                  <DropdownMenuItem>EUR</DropdownMenuItem>
                  <DropdownMenuItem>GBP</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div> */}
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <Link href="/" className="text-2xl font-bold">
            Hekto
          </Link>

          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/" className="hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/pages" className="hover:text-purple-600 transition-colors">
              Pages
            </Link>
            <Link href="/products" className="hover:text-purple-600 transition-colors">
              Products
            </Link>
            <Link href="/blog" className="hover:text-purple-600 transition-colors">
              Blog
            </Link>
            <Link href="/shop" className="hover:text-purple-600 transition-colors">
              Shop
            </Link>
            <Link href="/contact" className="hover:text-purple-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search */}
          <div className="flex items-center w-full md:w-auto">
            <input
              type="search"
              placeholder="Search..."
              className="w-full md:w-[200px] rounded-r-none"
            />
            {/* <button size="icon" className="rounded-l-none bg-purple-600 hover:bg-purple-700">
              <Search className="h-4 w-4" />
            </button> */}
          </div>
        </div>
      </div>
    </header>
  )
}

