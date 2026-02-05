"use client"

import React from "react"

import { useState } from "react"
import { History, Zap, Hotel, Calendar, Users, Landmark, Palette, Trees, Cpu } from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { cn } from "@/lib/utils"

interface ToggleOption {
  id: string
  label: string
  icon: React.ReactNode
}

interface PreferenceCardProps {
  title: string
  icon: React.ReactNode
  options: ToggleOption[]
  selectedId: string
  onSelect: (id: string) => void
  multiSelect?: boolean
  selectedIds?: string[]
  onMultiSelect?: (ids: string[]) => void
}

function PreferenceCard({
  title,
  icon,
  options,
  selectedId,
  onSelect,
  multiSelect = false,
  selectedIds = [],
  onMultiSelect,
}: PreferenceCardProps) {
  const handleSelect = (id: string) => {
    if (multiSelect && onMultiSelect) {
      if (selectedIds.includes(id)) {
        onMultiSelect(selectedIds.filter((i) => i !== id))
      } else {
        onMultiSelect([...selectedIds, id])
      }
    } else {
      onSelect(id)
    }
  }

  return (
    <div className="glass rounded-lg p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="font-serif text-lg font-semibold text-foreground">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = multiSelect
            ? selectedIds.includes(option.id)
            : selectedId === option.id

          return (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300",
                isSelected
                  ? "bg-primary/20 border-primary text-primary"
                  : "bg-secondary/50 border-border text-muted-foreground hover:border-primary/50"
              )}
            >
              {option.icon}
              <span className="text-sm font-medium">{option.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function PersonalizationModule() {
  const [timePreference, setTimePreference] = useState([50])
  const [adventureLevel, setAdventureLevel] = useState("moderate")
  const [accommodation, setAccommodation] = useState("luxury")
  const [duration, setDuration] = useState("week")
  const [companions, setCompanions] = useState("couple")
  const [interests, setInterests] = useState<string[]>(["culture"])

  const adventureOptions: ToggleOption[] = [
    { id: "relaxed", label: "Relaxed", icon: <span className="text-sm">1</span> },
    { id: "moderate", label: "Moderate", icon: <span className="text-sm">2</span> },
    { id: "intense", label: "Intense", icon: <span className="text-sm">3</span> },
  ]

  const accommodationOptions: ToggleOption[] = [
    { id: "authentic", label: "Authentic", icon: <History className="w-4 h-4" /> },
    { id: "luxury", label: "Luxury", icon: <Hotel className="w-4 h-4" /> },
  ]

  const durationOptions: ToggleOption[] = [
    { id: "weekend", label: "Weekend", icon: <span className="text-xs">2-3</span> },
    { id: "week", label: "Week", icon: <span className="text-xs">5-7</span> },
    { id: "extended", label: "Extended", icon: <span className="text-xs">10+</span> },
  ]

  const companionOptions: ToggleOption[] = [
    { id: "solo", label: "Solo", icon: <span className="text-sm">1</span> },
    { id: "couple", label: "Couple", icon: <span className="text-sm">2</span> },
    { id: "group", label: "Group", icon: <span className="text-sm">3+</span> },
  ]

  const interestOptions: ToggleOption[] = [
    { id: "architecture", label: "Architecture", icon: <Landmark className="w-4 h-4" /> },
    { id: "culture", label: "Culture", icon: <Palette className="w-4 h-4" /> },
    { id: "nature", label: "Nature", icon: <Trees className="w-4 h-4" /> },
    { id: "technology", label: "Technology", icon: <Cpu className="w-4 h-4" /> },
  ]

  return (
    <section id="personalize" className="py-24 px-4 relative bg-secondary/20">
      {/* Background Accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            Customize Your Adventure
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Tailor Your Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Every traveler is unique. Tell us your preferences and we will craft 
            a journey that matches your dreams perfectly.
          </p>
        </div>

        {/* Time Preference Slider */}
        <div className="glass rounded-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <History className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground">
              Time Preference
            </h3>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              Past
            </span>
            <Slider
              value={timePreference}
              onValueChange={setTimePreference}
              max={100}
              step={1}
              className="flex-1"
            />
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              Future
            </span>
          </div>
          <div className="text-center mt-4 text-primary font-medium">
            {timePreference[0] < 30
              ? "Ancient History"
              : timePreference[0] < 50
              ? "Medieval Era"
              : timePreference[0] < 70
              ? "Modern History"
              : timePreference[0] < 90
              ? "Near Future"
              : "Far Future"}
          </div>
        </div>

        {/* Preference Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PreferenceCard
            title="Adventure Level"
            icon={<Zap className="w-5 h-5 text-primary" />}
            options={adventureOptions}
            selectedId={adventureLevel}
            onSelect={setAdventureLevel}
          />
          <PreferenceCard
            title="Accommodation Style"
            icon={<Hotel className="w-5 h-5 text-primary" />}
            options={accommodationOptions}
            selectedId={accommodation}
            onSelect={setAccommodation}
          />
          <PreferenceCard
            title="Travel Duration"
            icon={<Calendar className="w-5 h-5 text-primary" />}
            options={durationOptions}
            selectedId={duration}
            onSelect={setDuration}
          />
          <PreferenceCard
            title="Companion Preference"
            icon={<Users className="w-5 h-5 text-primary" />}
            options={companionOptions}
            selectedId={companions}
            onSelect={setCompanions}
          />
        </div>

        {/* Special Interests (Multi-select) */}
        <div className="mt-6">
          <PreferenceCard
            title="Special Interests"
            icon={<Palette className="w-5 h-5 text-primary" />}
            options={interestOptions}
            selectedId=""
            onSelect={() => {}}
            multiSelect
            selectedIds={interests}
            onMultiSelect={setInterests}
          />
        </div>

        {/* Summary Preview */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            Based on your preferences, we recommend exploring{" "}
            <span className="text-primary font-semibold">Renaissance Florence</span> or{" "}
            <span className="text-primary font-semibold">Future Metropolis</span>
          </p>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors gold-glow">
            Find My Perfect Journey
          </button>
        </div>
      </div>
    </section>
  )
}
