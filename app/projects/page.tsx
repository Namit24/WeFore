"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { Play, ArrowLeft } from "lucide-react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

export default function ProjectsPage() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  // Project items with all the videos
  const projectItems = [
    {
      id: "wedding-invitation",
      title: "Wedding Invitation",
      description: "Elegant and creative wedding invitation video with beautiful animations",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=Wedding+Invitation",
      videoUrl: "https://drive.google.com/file/d/1x4xwHpj0xoO6RmhVbjBkhOKolW4a_4N-/preview",
      category: "Animation",
    },
    {
      id: "stream-waiting-screen",
      title: "Stream Waiting Screen",
      description: "Professional stream waiting screen with dynamic elements and transitions",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=Stream+Waiting+Screen",
      videoUrl: "https://drive.google.com/file/d/1cz3Y4P0VG6xC_Nlwiw18RtKjnZSJzxrg/preview",
      category: "Streaming",
    },
    {
      id: "sunrise-vista-promo",
      title: "Sunrise Vista Promo",
      description: "Captivating promotional video showcasing the beauty of Sunrise Vista",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=Sunrise+Vista+Promo",
      videoUrl: "https://drive.google.com/file/d/1HlmS5OucSZF6QgAWi2BpZTyoXCJ7uDDH/preview",
      category: "Promotion",
    },
    {
      id: "fb-brand-promo",
      title: "F&B Brand Promo",
      description: "Engaging promotional video for a food and beverage brand",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=F%26B+Brand+Promo",
      videoUrl: "https://drive.google.com/file/d/1PzWGr5q7pEfqTGpCf9KrjyHPWa3flr3H/preview",
      category: "Promotion",
    },
    {
      id: "ioit-mun-logo",
      title: "IOIT MUN Logo",
      description: "Dynamic logo animation for IOIT Model United Nations",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=IOIT+MUN+Logo",
      videoUrl: "https://drive.google.com/file/d/18-alT1y-2YKYGPxkmRBEV98i4HJMmf1X/preview",
      category: "Logo Animation",
    },
    {
      id: "student-council-logo",
      title: "Student Council Logo",
      description: "Creative logo animation for a student council organization",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=Student+Council+Logo",
      videoUrl: "https://drive.google.com/file/d/19TmAcWUc78t18JKj8bfdY0APwhvEwE77/preview",
      category: "Logo Animation",
    },
    {
      id: "aissms-polytechnic-promo",
      title: "AISSMS Polytechnic Promo",
      description: "Engaging promotional video for AISSMS Polytechnic institution",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=AISSMS+Polytechnic+Promo",
      videoUrl: "https://drive.google.com/file/d/1oA5JLn1D3up9sWYUFzPsSQ2CItG-W6Su/preview",
      category: "Education",
    },
    {
      id: "aissms-hotel-management-promo",
      title: "AISSMS Hotel Management Promo",
      description: "Professional promotional video for AISSMS Hotel Management program",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=AISSMS+Hotel+Management+Promo",
      videoUrl: "https://drive.google.com/file/d/1qXw-lyszNpVCcAfKjXJ_91Os1MztC6m0/preview",
      category: "Education",
    },
    {
      id: "amey-wagh-documentary",
      title: "Amey Wagh Documentary",
      description: "Insightful documentary featuring Amey Wagh with compelling storytelling",
      thumbnail: "/placeholder.svg?height=720&width=1280&text=Amey+Wagh+Documentary",
      videoUrl: "https://drive.google.com/file/d/1ahHD4PqrEmO2JOUFL1kt7-O2R7qx7Aks/preview",
      category: "Documentary",
    },
  ]

  // State for filtering
  const [filter, setFilter] = useState("All")
  const categories = ["All", "Animation", "Streaming", "Promotion", "Logo Animation", "Education", "Documentary"]

  // Filtered projects
  const filteredProjects = filter === "All" ? projectItems : projectItems.filter((item) => item.category === filter)

  // Smooth scroll function
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <section className="relative py-16 bg-gradient-to-b from-black to-black/95 overflow-hidden">
          <div
            className="blob top-0 left-0 opacity-20 animate-blob-float"
            style={{ background: "linear-gradient(to right, rgba(255, 0, 255, 0.1), rgba(0, 255, 255, 0.1))" }}
          ></div>
          <div
            className="blob bottom-0 right-0 opacity-20 animate-blob-float-reverse"
            style={{ background: "linear-gradient(to right, rgba(255, 255, 0, 0.1), rgba(255, 0, 0, 0.1))" }}
          ></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center text-white/70 hover:text-white mb-4 transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Our <span className="gradient-text animate-text-shimmer">Creative</span> Portfolio
                </h1>
                <p className="text-lg text-white/70 max-w-2xl">
                  Explore our diverse collection of projects showcasing our expertise in video editing, animation, and
                  digital content creation.
                </p>
              </div>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-3 mb-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover-scale ${
                    filter === category ? "bg-primary text-white" : "bg-white/5 text-white/70 hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div
              ref={ref}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(50px)",
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
              }}
            >
              {filteredProjects.map((item, index) => (
                <Dialog key={item.id}>
                  <DialogTrigger asChild>
                    <div
                      className="video-card rounded-xl overflow-hidden cursor-pointer glowing-border animate-float-staggered"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="relative aspect-video">
                        <img
                          src={item.thumbnail || "/placeholder.svg"}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center animate-pulse-slow">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </div>
                        <div className="absolute top-3 right-3 bg-primary/80 text-white text-xs px-2 py-1 rounded-full">
                          {item.category}
                        </div>
                      </div>
                      <div className="p-6 bg-white/5 backdrop-blur-sm">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-white/70">{item.description}</p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] bg-black/95 border-white/10">
                    <div className="aspect-video w-full">
                      <iframe
                        src={item.videoUrl}
                        width="100%"
                        height="100%"
                        allow="autoplay"
                        className="w-full h-full"
                      ></iframe>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-white/70 mt-2">{item.description}</p>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
