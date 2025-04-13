"use client"

import { useState, useRef, useEffect } from "react"
import { useInView } from "framer-motion"
import { Play, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"

export function WorkSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Featured work items for the landing page
  const workItems = [
    {
      id: "wedding-invitation",
      title: "Wedding Invitation",
      description: "Elegant and creative wedding invitation video with beautiful animations",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=Wedding+Invitation",
      videoUrl: "https://drive.google.com/file/d/1x4xwHpj0xoO6RmhVbjBkhOKolW4a_4N-/preview",
    },
    {
      id: "fb-brand-promo",
      title: "F&B Brand Promo",
      description: "Engaging promotional video for a food and beverage brand",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=F%26B+Brand+Promo",
      videoUrl: "https://drive.google.com/file/d/1PzWGr5q7pEfqTGpCf9KrjyHPWa3flr3H/preview",
    },
    {
      id: "sunrise-vista-promo",
      title: "Sunrise Vista Promo",
      description: "Captivating promotional video showcasing the beauty of Sunrise Vista",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=Sunrise+Vista+Promo",
      videoUrl: "https://drive.google.com/file/d/1HlmS5OucSZF6QgAWi2BpZTyoXCJ7uDDH/preview",
    },
    {
      id: "amey-wagh-documentary",
      title: "Amey Wagh Documentary",
      description: "Insightful documentary featuring Amey Wagh with compelling storytelling",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=Amey+Wagh+Documentary",
      videoUrl: "https://drive.google.com/file/d/1ahHD4PqrEmO2JOUFL1kt7-O2R7qx7Aks/preview",
    },
  ]

  // State for the featured video carousel
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState("next")

  const nextSlide = () => {
    if (isAnimating) return
    setDirection("next")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % workItems.length)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setDirection("prev")
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + workItems.length) % workItems.length)
  }

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isAnimating])

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)
    return () => clearInterval(interval)
  }, [currentIndex, isAnimating])

  const currentItem = workItems[currentIndex]

  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-black to-black/95 overflow-hidden">
      <div
        className="blob bottom-0 left-0 opacity-20 animate-blob-float-reverse"
        style={{ background: "linear-gradient(to right, rgba(255, 255, 0, 0.1), rgba(0, 255, 255, 0.1))" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text animate-text-shimmer">Creative</span> Work
            </h2>
            <p className="text-lg text-white/70">
              Check out some of our recent projects that showcase our expertise in video editing, branding, and digital
              marketing.
            </p>
          </div>
          <Link href="/projects">
            <Button
              variant="outline"
              className="mt-6 md:mt-0 border-white/20 text-white hover:bg-white/10 rounded-full px-6 hover-scale"
            >
              View All Projects
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div
          ref={ref}
          className="relative"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(50px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <div className="relative overflow-hidden rounded-xl">
            <Dialog>
              <DialogTrigger asChild>
                <div className="video-card rounded-xl overflow-hidden cursor-pointer glowing-border">
                  <div className="relative aspect-video">
                    <img
                      src={currentItem.thumbnail || "/placeholder.svg"}
                      alt={currentItem.title}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        isAnimating
                          ? direction === "next"
                            ? "translate-x-full opacity-0"
                            : "-translate-x-full opacity-0"
                          : "translate-x-0 opacity-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center animate-pulse-slow">
                        <Play className="h-10 w-10 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-8 bg-white/5 backdrop-blur-sm">
                    <h3 className="text-2xl font-semibold mb-3">{currentItem.title}</h3>
                    <p className="text-white/70 text-lg">{currentItem.description}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[900px] bg-black/95 border-white/10">
                <div className="aspect-video w-full">
                  <iframe
                    src={currentItem.videoUrl}
                    width="100%"
                    height="100%"
                    allow="autoplay"
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{currentItem.title}</h3>
                  <p className="text-white/70 mt-2">{currentItem.description}</p>
                </div>
              </DialogContent>
            </Dialog>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors z-10"
              aria-label="Next project"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {workItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? "next" : "prev")
                    setIsAnimating(true)
                    setCurrentIndex(index)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
