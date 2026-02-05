"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, Clock, Zap, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DestinationCardProps {
  title: string
  era: string
  description: string
  image: string
  difficulty: "Easy" | "Moderate" | "Challenging" | "Extreme"
  duration: string
  price: string
  rating: number
}

const difficultyColors = {
  Easy: "bg-green-500/20 text-green-400 border-green-500/30",
  Moderate: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  Challenging: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  Extreme: "bg-red-500/20 text-red-400 border-red-500/30",
}

export function DestinationCard({
  title,
  era,
  description,
  image,
  difficulty,
  duration,
  price,
  rating,
}: DestinationCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative rounded-lg overflow-hidden glass transition-all duration-300 hover:gold-glow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered && "scale-110"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <Badge className={cn("border", difficultyColors[difficulty])}>
            <Zap className="w-3 h-3 mr-1" />
            {difficulty}
          </Badge>
        </div>

        {/* Price Tag */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-sm font-semibold">
          {price}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Era & Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-primary font-semibold uppercase tracking-wider">
            {era}
          </span>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "w-3 h-3",
                  i < rating ? "text-primary fill-primary" : "text-muted-foreground"
                )}
              />
            ))}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-bold text-foreground mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        {/* Duration */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>

        {/* CTA Button - Appears on hover */}
        <div
          className={cn(
            "transition-all duration-300 overflow-hidden",
            isHovered ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Discover More
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
