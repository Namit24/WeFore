"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const blobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!blobRef.current) return

      const { clientX, clientY } = e
      const moveX = clientX - window.innerWidth / 2
      const moveY = clientY - window.innerHeight / 2
      const offsetFactor = 0.02

      blobRef.current.style.transform = `translate(${moveX * offsetFactor}px, ${moveY * offsetFactor}px)`
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background blobs */}
      <div
        className="blob top-0 left-0 opacity-30 animate-blob-float"
        style={{ background: "linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 0, 255, 0.1))" }}
      ></div>
      <div
        className="blob bottom-0 right-0 opacity-20 animate-blob-float-reverse"
        style={{ background: "linear-gradient(to right, rgba(255, 255, 0, 0.1), rgba(0, 255, 255, 0.1))" }}
      ></div>
      <div
        ref={blobRef}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-[120px] opacity-30 z-0"
      ></div>

      <div className="container mx-auto px-4 z-10 py-20">
        <div className="flex flex-col items-center gap-12">
          <div className="w-full space-y-6 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 mb-4">
              <p className="text-sm font-medium text-white/80">
                <span className="text-primary">Creative</span> Social Media Marketing Agency
              </p>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight relative text-center">
              <span className="animate-slide-in-left inline-block">We Create </span>
              <span className="gradient-text animate-pulse-slow inline-block">Digital </span>
              <span className="animate-slide-in-right inline-block">Experiences That </span>
              <span className="gradient-text animate-float inline-block relative">
                Stand Out
                <span className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-sm animate-pulse-slow -z-10"></span>
              </span>
            </h1>

            <p className="text-lg text-white/70 md:text-xl max-w-3xl mx-auto text-glitch text-center">
              Hello, we are WeFore, a dynamic social media marketing agency founded by Pranav Pawar, Shriya Malode,
              Parth Shinde, and Sanyog Swami. With expertise in video editing, branding, and digital marketing, we help
              businesses create engaging content that stands out. Pranav, our lead video editor, has three years of
              experience crafting high-quality videos using Adobe After Effects and Premiere Pro. From logo animations
              to long-form YouTube edits, we specialize in storytelling that captivates audiences. Let's collaborate to
              elevate your brand's online presence. Check out our portfolio and reach out to discuss how we can grow
              your digital impact!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <Link href="/projects">
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg hover-scale w-full sm:w-auto">
                  View Our Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link href="/about">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg hover-scale w-full sm:w-auto"
                >
                  About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 marquee">
          <div className="marquee-content">
            <div className="flex items-center gap-8">
              {[
                "Video Editing",
                "Branding",
                "Social Media",
                "Content Creation",
                "Digital Marketing",
                "Motion Graphics",
                "Video Editing",
                "Branding",
                "Social Media",
                "Content Creation",
              ].map((item, index) => (
                <div key={index} className="px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                  <p className="text-lg font-medium text-white/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
