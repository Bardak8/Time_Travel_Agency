"use client"

import { ChevronDown, Compass, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ParticleBackground } from "./particle-background"

interface HeroSectionProps {
  onOpenChat: () => void
}

export function HeroSection({ onOpenChat }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">Now accepting bookings for 2026</span>
        </div>

        {/* Main Heading */}
        <h1 
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in text-balance"
          style={{ animationDelay: "0.2s" }}
        >
          Your Journey Through{" "}
          <span className="text-primary">Time</span> Begins Here
        </h1>

        {/* Subheadline */}
        <p 
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in text-pretty"
          style={{ animationDelay: "0.4s" }}
        >
          Experience the impossible. Travel through millennia with the world's most luxurious 
          temporal tourism agency. Where will your timeline take you?
        </p>

        {/* CTAs */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 gold-glow px-8 py-6 text-lg font-medium"
            asChild
          >
            <a href="#destinations">
              <Compass className="w-5 h-5 mr-2" />
              Explore Destinations
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-6 text-lg font-medium bg-transparent"
            onClick={onOpenChat}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Talk to Chronos
          </Button>
        </div>

        {/* Stats */}
        <div 
          className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="text-center">
            <div className="font-serif text-3xl font-bold text-primary">150M+</div>
            <div className="text-sm text-muted-foreground">Years Span</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Destinations</div>
          </div>
          <div className="text-center">
            <div className="font-serif text-3xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Safe Return</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-bounce">
        <span className="text-sm text-muted-foreground">Scroll to explore</span>
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  )
}
