"use client"

import { useState } from "react"
import { Menu, X, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Destinations", href: "#destinations" },
  { label: "Personalize", href: "#personalize" },
  { label: "Trip Planner", href: "#planner" },
  { label: "About", href: "#about" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <span className="font-serif text-xl font-bold text-foreground">
              Tempus <span className="text-primary">Voyager</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gold-glow">
              Book Your Journey
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-border">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
              Book Your Journey
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
