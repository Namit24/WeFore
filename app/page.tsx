"use client"

import { useState, useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { LoadingAnimation } from "@/components/loading-animation"

export default function Home() {
  const [loading, setLoading] = useState(true)

  // Check if this is the first load
  useEffect(() => {
    // Check if we've already shown the animation site-wide
    const hasLoadedSite = localStorage.getItem("hasLoadedSite")
    if (hasLoadedSite) {
      setLoading(false)
    } else {
      // Set the flag for the entire site
      localStorage.setItem("hasLoadedSite", "true")
    }
  }, [])

  const handleLoadingComplete = () => {
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {loading ? (
        <LoadingAnimation onComplete={handleLoadingComplete} />
      ) : (
        <>
          <Navbar />
          <main>
            <HeroSection />
            <ServicesSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  )
}
