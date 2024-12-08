'use client'

import { useState } from "react"
  // Relative path



interface Tab {
  id: string
  label: string
}

const tabs: Tab[] = [
  { id: 'new-arrival', label: 'New Arrival' },
  { id: 'best-seller', label: 'Best Seller' },
  { id: 'featured', label: 'Featured' },
  { id: 'special-offer', label: 'Special Offer' },
]

export function ProductTabs({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState('new-arrival')

  return (
    <div className={(className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={(
            // "px-4 py-2 text-sm font-medium transition-colors duration-300",
            activeTab === tab.id
              ? "text-pink-500 border-b-2 border-pink-500"
              : "text-gray-600 hover:text-pink-500"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

