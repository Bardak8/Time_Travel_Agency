"use client"

import React from "react"

import { useState } from "react"
import {
  Calendar,
  Plus,
  Trash2,
  GripVertical,
  Share2,
  Save,
  Calculator,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TripStop {
  id: string
  day: number
  era: string
  destination: string
  activity: string
  cost: number
}

const defaultStops: TripStop[] = [
  {
    id: "1",
    day: 1,
    era: "2500 BC",
    destination: "Ancient Egypt",
    activity: "Arrival & Pyramid Orientation",
    cost: 3500,
  },
  {
    id: "2",
    day: 2,
    era: "2500 BC",
    destination: "Ancient Egypt",
    activity: "Nile River Cruise & Temple Visit",
    cost: 2200,
  },
  {
    id: "3",
    day: 3,
    era: "1500 AD",
    destination: "Renaissance Florence",
    activity: "Art Studio Tour with Masters",
    cost: 4800,
  },
  {
    id: "4",
    day: 4,
    era: "1500 AD",
    destination: "Renaissance Florence",
    activity: "Medici Palace Dinner Experience",
    cost: 3200,
  },
  {
    id: "5",
    day: 5,
    era: "Present",
    destination: "Return Home",
    activity: "Safe Return & Debriefing",
    cost: 0,
  },
]

const availableActivities = [
  { era: "2500 BC", destination: "Ancient Egypt", activities: ["Pyramid Tour", "Nile Cruise", "Temple Visit", "Market Exploration"] },
  { era: "1500 AD", destination: "Renaissance Florence", activities: ["Art Studio Tour", "Palace Dinner", "Cathedral Visit", "Wine Tasting"] },
  { era: "1850 AD", destination: "Victorian London", activities: ["Thames Cruise", "Theatre Show", "High Tea", "Museum Tour"] },
  { era: "1925 AD", destination: "Roaring Twenties", activities: ["Jazz Club Night", "Speakeasy Tour", "Broadway Show", "Gatsby Party"] },
  { era: "2150 AD", destination: "Future Metropolis", activities: ["Hover Car Tour", "Space Elevator", "Holographic Concert", "AI Lab Visit"] },
  { era: "150M BC", destination: "Jurassic Era", activities: ["Dome Safari", "Pterodactyl Watch", "Volcano Trek", "Fossil Hunting"] },
]

export function TripPlanner() {
  const [stops, setStops] = useState<TripStop[]>(defaultStops)
  const [draggedId, setDraggedId] = useState<string | null>(null)

  const totalCost = stops.reduce((sum, stop) => sum + stop.cost, 0)

  const addStop = () => {
    const newDay = stops.length > 0 ? Math.max(...stops.map((s) => s.day)) + 1 : 1
    const newStop: TripStop = {
      id: `new-${Date.now()}`,
      day: newDay,
      era: "Select Era",
      destination: "Choose Destination",
      activity: "Select Activity",
      cost: 0,
    }
    setStops([...stops, newStop])
  }

  const removeStop = (id: string) => {
    setStops(stops.filter((stop) => stop.id !== id))
  }

  const handleDragStart = (id: string) => {
    setDraggedId(id)
  }

  const handleDragOver = (e: React.DragEvent, targetId: string) => {
    e.preventDefault()
    if (!draggedId || draggedId === targetId) return

    const draggedIndex = stops.findIndex((s) => s.id === draggedId)
    const targetIndex = stops.findIndex((s) => s.id === targetId)

    const newStops = [...stops]
    const [removed] = newStops.splice(draggedIndex, 1)
    newStops.splice(targetIndex, 0, removed)

    // Update day numbers
    const updatedStops = newStops.map((stop, index) => ({
      ...stop,
      day: index + 1,
    }))

    setStops(updatedStops)
  }

  const handleDragEnd = () => {
    setDraggedId(null)
  }

  return (
    <section id="planner" className="py-24 px-4 relative">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Design Your Timeline
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Trip Planner
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Build your perfect multi-era adventure. Drag to reorder days, add new stops, 
            and see your costs update in real-time.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />

          {/* Timeline Items */}
          <div className="space-y-4">
            {stops.map((stop, index) => (
              <div
                key={stop.id}
                draggable
                onDragStart={() => handleDragStart(stop.id)}
                onDragOver={(e) => handleDragOver(e, stop.id)}
                onDragEnd={handleDragEnd}
                className={cn(
                  "relative pl-16 transition-all duration-200",
                  draggedId === stop.id && "opacity-50"
                )}
              >
                {/* Day Circle */}
                <div
                  className={cn(
                    "absolute left-3 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold z-10",
                    index === stops.length - 1
                      ? "bg-green-500 text-white"
                      : "bg-primary text-primary-foreground"
                  )}
                >
                  {stop.day}
                </div>

                {/* Card */}
                <div className="glass rounded-lg p-4 group">
                  <div className="flex items-start gap-4">
                    {/* Drag Handle */}
                    <button
                      className="mt-1 cursor-grab active:cursor-grabbing text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Drag to reorder"
                    >
                      <GripVertical className="w-5 h-5" />
                    </button>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                          {stop.era}
                        </span>
                        <span className="text-muted-foreground">|</span>
                        <span className="text-sm text-foreground font-medium">
                          {stop.destination}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{stop.activity}</p>
                    </div>

                    {/* Cost & Actions */}
                    <div className="flex items-center gap-3">
                      {stop.cost > 0 && (
                        <span className="text-primary font-semibold">
                          ${stop.cost.toLocaleString()}
                        </span>
                      )}
                      <button
                        onClick={() => removeStop(stop.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
                        aria-label="Remove stop"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Add Stop Button */}
          <div className="relative pl-16 mt-4">
            <div className="absolute left-3 w-7 h-7 rounded-full border-2 border-dashed border-border flex items-center justify-center">
              <Plus className="w-4 h-4 text-muted-foreground" />
            </div>
            <button
              onClick={addStop}
              className="w-full py-3 border-2 border-dashed border-border rounded-lg text-muted-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Add another day to your journey
            </button>
          </div>
        </div>

        {/* Cost Summary & Actions */}
        <div className="mt-12 glass rounded-lg p-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Cost Calculator */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Estimated Total</p>
                <p className="font-serif text-2xl font-bold text-primary">
                  ${totalCost.toLocaleString()}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button variant="outline" className="border-border hover:border-primary bg-transparent">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gold-glow">
                <Save className="w-4 h-4 mr-2" />
                Save Trip
              </Button>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-muted-foreground text-center mt-4">
            Prices are estimates and may vary based on temporal flux conditions. 
            Final pricing confirmed upon booking.
          </p>
        </div>
      </div>
    </section>
  )
}
