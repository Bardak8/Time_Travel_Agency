"use client"

import { DestinationCard } from "./destination-card"

const destinations = [
  {
    title: "Ancient Egypt",
    era: "2500 BC",
    description: "Witness the construction of the Great Pyramids and explore the magnificent civilization of the Pharaohs.",
    image: "/destinations/egypt.jpg",
    difficulty: "Moderate" as const,
    duration: "3-7 days",
    price: "$12,500",
    rating: 5,
  },
  {
    title: "Renaissance Florence",
    era: "1500 AD",
    description: "Walk alongside Da Vinci and Michelangelo in the cradle of the Renaissance. Experience art being born.",
    image: "/destinations/florence.jpg",
    difficulty: "Easy" as const,
    duration: "2-5 days",
    price: "$8,900",
    rating: 5,
  },
  {
    title: "Victorian London",
    era: "1850 AD",
    description: "Explore the fog-laden streets of industrial London during the height of the British Empire.",
    image: "/destinations/london.jpg",
    difficulty: "Easy" as const,
    duration: "2-4 days",
    price: "$7,500",
    rating: 4,
  },
  {
    title: "Roaring Twenties",
    era: "1925 AD",
    description: "Experience the glamour and excitement of the Jazz Age in New York City's finest speakeasies.",
    image: "/destinations/twenties.jpg",
    difficulty: "Easy" as const,
    duration: "1-3 days",
    price: "$5,900",
    rating: 4,
  },
  {
    title: "Future Metropolis",
    era: "2150 AD",
    description: "Step into tomorrow. Flying cars, holographic tech, and sustainable mega-cities await.",
    image: "/destinations/future.jpg",
    difficulty: "Challenging" as const,
    duration: "3-7 days",
    price: "$18,500",
    rating: 5,
  },
  {
    title: "Jurassic Era",
    era: "150M BC",
    description: "The ultimate adventure. Observe dinosaurs in their natural habitat from our protected viewing domes.",
    image: "/destinations/jurassic.jpg",
    difficulty: "Extreme" as const,
    duration: "5-10 days",
    price: "$45,000",
    rating: 5,
  },
]

export function DestinationsGallery() {
  return (
    <section id="destinations" className="py-24 px-4 relative">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Explore Time
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Featured Destinations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            From the dawn of civilization to the distant future, choose your era and 
            create memories that transcend time itself.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination) => (
            <DestinationCard key={destination.title} {...destination} />
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            View all 50+ destinations
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
