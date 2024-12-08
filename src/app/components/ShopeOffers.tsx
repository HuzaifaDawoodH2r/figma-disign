import { Truck, Coins, MessageCircle, PhoneCall, } from 'lucide-react'


const offers = [
  {
    icon: Truck,
    title: "24/7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
  },
  {
    icon: Coins,
    title: "24/7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
  },
  {
    icon: MessageCircle,
    title: "24/7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
  },
  {
    icon: PhoneCall,
    title: "24/7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida."
  }
]

export function ShopeOffers() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">
          What Shopex Offer!
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => {
            const Icon = offer.icon
            return (
              <div 
                key={index}
                className="group flex flex-col items-center text-center p-8 bg-white rounded-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="mb-6 p-4 rounded-full bg-purple-50 text-purple-600 transition-colors duration-300 group-hover:bg-purple-600 group-hover:text-white">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">
                  {offer.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {offer.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

