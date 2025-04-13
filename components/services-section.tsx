"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Video, Palette, Share2, Film, Megaphone } from "lucide-react"

export function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const services = [
    {
      icon: Video,
      title: "Video Editing",
      description:
        "Professional video editing with Adobe After Effects and Premiere Pro, from logo animations to long-form YouTube content.",
    },
    {
      icon: Palette,
      title: "Branding",
      description:
        "Create a cohesive brand identity that resonates with your audience and sets you apart from competitors.",
    },
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Strategic social media management to grow your audience and increase engagement across platforms.",
    },
    {
      icon: Film,
      title: "Content Creation",
      description: "Engaging content that tells your brand's story and connects with your target audience.",
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Data-driven digital marketing strategies to increase your online presence and drive conversions.",
    },
  ]

  return (
    <section id="services" className="relative py-24 bg-black overflow-hidden">
      <div
        className="blob top-0 right-0 opacity-20"
        style={{ background: "linear-gradient(to right, rgba(255, 0, 0, 0.1), rgba(255, 0, 255, 0.1))" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Creative</span> Services
          </h2>
          <p className="text-lg text-white/70">
            We offer a comprehensive range of services to help your brand stand out in the digital landscape.
          </p>
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
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card rounded-xl p-6 h-full hover-scale glowing-border"
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6 service-icon">
                <service.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 animate-pulse-slow">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
