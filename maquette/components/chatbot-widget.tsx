"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, Minimize2, Maximize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Message {
  id: string
  content: string
  isBot: boolean
  timestamp: Date
}

const suggestedQuestions = [
  "Best destinations for first-timers?",
  "How does time travel work?",
  "Safety guarantees?",
  "What should I pack?",
]

const botResponses: Record<string, string> = {
  "Best destinations for first-timers?":
    "For first-time temporal travelers, I highly recommend Renaissance Florence or Victorian London. Both eras offer relatively stable timelines, familiar cultural touchstones, and our most experienced guides. The Roaring Twenties is also excellent for those who prefer modern amenities while still experiencing the magic of the past.",
  "How does time travel work?":
    "Our proprietary Temporal Displacement Technology creates a quantum bridge between present and target era. You will be enclosed in a Chronos Pod during transit, which takes approximately 3.7 seconds regardless of temporal distance. The process is completely safe and reversible, with our return beacon ensuring you can come back at any moment.",
  "Safety guarantees?":
    "Your safety is our absolute priority. Every traveler is equipped with a Temporal Emergency Beacon, period-appropriate vaccinations, and a neural translation implant. Our success rate is 100% with zero incidents since our founding. Plus, all journeys are insured by Temporal Lloyd's of London.",
  "What should I pack?":
    "We provide all era-appropriate clothing and accessories! Just bring personal medications, any comfort items, and your sense of adventure. We also recommend bringing a small journal for your memories, as electronic devices will be held at our facility for safekeeping during your journey.",
}

interface ChatbotWidgetProps {
  isOpen: boolean
  onToggle: () => void
}

export function ChatbotWidget({ isOpen, onToggle }: ChatbotWidgetProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content:
        "Greetings, temporal traveler! I am Chronos, your AI guide through the ages. How may I assist you with your journey through time?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen, isMinimized])

  const sendMessage = (content: string) => {
    if (!content.trim()) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponse =
        botResponses[content] ||
        "That is an excellent question! Our travel specialists would be delighted to discuss this in more detail. Would you like me to connect you with one of our expert chrononauts, or shall I provide more information about our most popular destinations?"

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: botResponse,
        isBot: true,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    sendMessage(inputValue)
  }

  if (!isOpen) {
    return (
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center gold-glow hover:scale-110 transition-transform duration-300"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    )
  }

  return (
    <div
      className={cn(
        "fixed z-50 glass rounded-lg overflow-hidden transition-all duration-300",
        isMinimized
          ? "bottom-6 right-6 w-72 h-14"
          : "bottom-6 right-6 w-96 h-[500px] max-h-[80vh] md:w-96 md:h-[500px]",
        "max-md:inset-4 max-md:w-auto max-md:h-auto max-md:bottom-4 max-md:right-4 max-md:left-4 max-md:top-auto max-md:max-h-[70vh]"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-secondary/50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">AI</span>
            </div>
          </div>
          <div>
            <h3 className="font-serif font-semibold text-foreground">Chronos AI</h3>
            <p className="text-xs text-muted-foreground">Your temporal guide</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
          >
            {isMinimized ? (
              <Maximize2 className="w-4 h-4 text-muted-foreground" />
            ) : (
              <Minimize2 className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
          <button
            onClick={onToggle}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Close chat"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <ScrollArea className="flex-1 h-[calc(100%-180px)]" ref={scrollRef}>
            <div className="p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex",
                    message.isBot ? "justify-start" : "justify-end"
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[80%] rounded-lg px-4 py-2",
                      message.isBot
                        ? "bg-secondary text-foreground"
                        : "bg-primary text-primary-foreground"
                    )}
                  >
                    <p className="text-sm leading-relaxed">{message.content}</p>
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-secondary rounded-lg px-4 py-3 flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-primary typing-dot" />
                    <div className="w-2 h-2 rounded-full bg-primary typing-dot" />
                    <div className="w-2 h-2 rounded-full bg-primary typing-dot" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Suggested Questions */}
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => sendMessage(question)}
                  className="text-xs px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask Chronos anything..."
                className="flex-1 bg-secondary/50 border-border focus:border-primary"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                disabled={!inputValue.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </>
      )}
    </div>
  )
}
