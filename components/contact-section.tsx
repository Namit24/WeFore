"use client"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      <div
        className="blob top-0 right-0 opacity-20 animate-blob-float"
        style={{ background: "linear-gradient(to right, rgba(255, 0, 255, 0.1), rgba(255, 255, 0, 0.1))" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text animate-text-shimmer">Connect</span>
          </h2>
          <p className="text-lg text-white/70">
            Ready to elevate your brand's online presence? Get in touch with our team to discuss how we can help you
            achieve your goals.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover-card">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 animate-pulse-slow">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/70 mb-1">Call Us</p>
                  <p className="font-medium">Shriya Malode: +91 9371525982</p>
                  <p className="font-medium">Pranav Pawar: +91 9356992477</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 animate-pulse-slow">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/70 mb-1">Email Us</p>
                  <p className="font-medium">weforemedia@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 animate-pulse-slow">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-white/70 mb-1">Visit Us</p>
                  <p className="font-medium">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover-card mt-8">
            <h3 className="text-2xl font-semibold mb-6">Follow Us</h3>
            <p className="text-white/70 mb-6">
              Stay connected with us on social media for the latest updates and creative inspiration.
            </p>

            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/weforeofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors hover-scale"
              >
                <Instagram className="h-5 w-5 text-white" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
