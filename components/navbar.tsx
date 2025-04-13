"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/80 backdrop-blur-md py-3 shadow-lg" : "bg-transparent py-5",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="relative z-10">
          <div className="bg-white p-2 rounded-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qlYT3qzEYL2nowKyJkKZLDnjHvZ3qT.png"
              alt="WeFore Media Logo"
              width={120}
              height={50}
              className="h-10 w-auto"
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="/projects">Our Work</NavLink>
          <NavLink href="/about">About Us</NavLink>
        </nav>

        <button className="md:hidden relative z-10" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible",
          )}
        >
          <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>
            Services
          </MobileNavLink>
          <MobileNavLink href="/projects" onClick={() => setIsOpen(false)}>
            Our Work
          </MobileNavLink>
          <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>
            About Us
          </MobileNavLink>
        </div>
      </div>
    </header>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-white/80 hover:text-white font-medium transition-colors relative group">
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      className="text-white/90 hover:text-white text-2xl font-medium transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  )
}
