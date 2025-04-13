"use client"

import { useState, useRef, useEffect } from "react"
import { useInView } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  const ref = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const isStoryInView = useInView(storyRef, { once: true, amount: 0.2 })

  // Team members
  const teamMembers = [
    {
      id: "pranav",
      name: "Pranav Pawar",
      role: "Co-Founder",
      avatar: "/images/pranav.png",
    },
    {
      id: "shriya",
      name: "Shriya Malode",
      role: "Manager",
      avatar: "/images/shriya.jpg",
    },
    {
      id: "parth",
      name: "Parth Shinde",
      role: "Founder",
      avatar: "/images/parth.png",
    },
    {
      id: "sanyog",
      name: "Sanyog Swami",
      role: "Content Writer",
      avatar: "/images/sanyog.jpg",
    },
  ]

  // Animation state for each team member
  const [activeIndex, setActiveIndex] = useState(-1)

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

  // Cycle through team members for animation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % teamMembers.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [teamMembers.length])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="pt-24">
        <section className="relative py-16 bg-gradient-to-b from-black to-black/95 overflow-hidden min-h-screen">
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
                  Meet Our <span className="gradient-text animate-text-shimmer">Creative</span> Team
                </h1>
                <p className="text-lg text-white/70 max-w-2xl">
                  The talented individuals behind WeFore Media who bring creativity and expertise to every project.
                </p>
              </div>
            </div>

            <div className="flex justify-center mb-12">
              <button
                onClick={() => scrollToSection("our-story")}
                className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:bg-white/10 transition-all duration-300 hover-scale"
              >
                Discover Our Story
              </button>
            </div>

            <div
              ref={ref}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "translateY(0)" : "translateY(50px)",
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className={`team-card relative overflow-hidden rounded-xl glowing-border ${
                    activeIndex === index ? "active" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 0.1}s`,
                  }}
                >
                  <div
                    className={`relative aspect-square overflow-hidden ${
                      activeIndex === index ? "animate-team-active" : ""
                    }`}
                  >
                    <Image
                      src={member.avatar || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-6 ${
                        activeIndex === index ? "animate-gradient-pulse" : ""
                      }`}
                    >
                      <div className="text-center">
                        <h3 className={`text-2xl font-bold mb-1 ${activeIndex === index ? "animate-text-glitch" : ""}`}>
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium mb-2">{member.role}</p>
                        <div
                          className={`w-12 h-1 bg-primary mx-auto rounded-full ${
                            activeIndex === index ? "animate-width-expand" : ""
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Animated elements that appear when active */}
                  {activeIndex === index && (
                    <>
                      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary animate-gradient-x"></div>
                        <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-accent via-primary to-accent animate-gradient-x-reverse"></div>
                        <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-primary via-accent to-primary animate-gradient-y"></div>
                        <div className="absolute top-0 right-0 h-full w-2 bg-gradient-to-b from-accent via-primary to-accent animate-gradient-y-reverse"></div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 mix-blend-overlay animate-pulse-slow pointer-events-none"></div>
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent opacity-50 blur-sm animate-pulse-slow rounded-xl pointer-events-none"></div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div id="our-story" className="mt-24 max-w-4xl mx-auto scroll-mt-24">
              <div
                ref={storyRef}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover-card"
                style={{
                  opacity: isStoryInView ? 1 : 0,
                  transform: isStoryInView ? "translateY(0)" : "translateY(50px)",
                  transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
                }}
              >
                <h2 className="text-3xl font-bold mb-6 gradient-text animate-text-shimmer">Our Story</h2>
                <p className="text-white/80 mb-6 text-lg leading-relaxed">
                  WeFore Media was founded by four creative minds with a shared passion for digital storytelling and
                  visual communication. What started as a collaborative project quickly evolved into a full-service
                  social media marketing agency.
                </p>
                <p className="text-white/80 mb-6 text-lg leading-relaxed">
                  Our team brings together diverse skills and perspectives, allowing us to approach each project with
                  fresh ideas and innovative solutions. We believe in the power of authentic storytelling and strategic
                  content to help brands connect with their audiences in meaningful ways.
                </p>
                <p className="text-white/80 text-lg leading-relaxed">
                  At WeFore, we're not just service providers – we're creative partners invested in your success. We
                  take the time to understand your brand, your goals, and your audience to deliver content that truly
                  resonates and drives results.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
