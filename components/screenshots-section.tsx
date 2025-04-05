"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Laptop } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ScreenshotsSection() {
  const screenshots = [
    {
      src: "/images/main-screen.png",
      alt: "Main Screen",
      description: "Work time countdown display",
    },
    {
      src: "/images/main-screen-working.png",
      alt: "Working Screen",
      description: "Timer display during work sessions",
    },
    {
      src: "/images/stretching-screen.png",
      alt: "Stretching Screen",
      description: "Stretching guide and timer",
    },
    {
      src: "/images/setting-screen.png",
      alt: "Settings Screen",
      description: "Work and stretching time configuration",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section id="screenshots" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 cyberpunk-grid opacity-10"></div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block rounded-full bg-muted px-3 py-1 text-sm font-medium mb-4">
            <Laptop className="w-4 h-4 inline mr-1 text-primary" />
            <span>Screenshots</span>
          </div>
          <h2 className="cyberpunk-gradient-text text-3xl md:text-4xl mb-4">APP_INTERFACE</h2>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            Manage your stretching habits with an intuitive cyberpunk-style interface.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden border-secondary/30 shadow-lg shadow-primary/20 bg-transparent">
            <div className="relative aspect-[9/16] md:aspect-[9/19] w-full max-w-xs mx-auto">
              <Image
                src={screenshots[activeIndex].src || "/placeholder.svg"}
                alt={screenshots[activeIndex].alt}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center bg-card/80 backdrop-blur-sm">
              <h3 className="font-orbitron text-lg mb-1">{screenshots[activeIndex].alt}</h3>
              <p className="text-muted-foreground">{screenshots[activeIndex].description}</p>
            </div>
          </Card>

          <div className="flex justify-center mt-6 gap-2">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full cyberpunk-button">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">이전</span>
            </Button>
            <div className="flex items-center gap-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-primary" : "bg-muted"}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="sr-only">{`스크린샷 ${index + 1}`}</span>
                </button>
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full cyberpunk-button">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">다음</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              className={`relative aspect-[9/16] rounded-lg overflow-hidden border-2 transition-all ${
                index === activeIndex
                  ? "border-primary scale-105 shadow-lg shadow-primary/20"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <Image src={screenshot.src || "/placeholder.svg"} alt={screenshot.alt} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

