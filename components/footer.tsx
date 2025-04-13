import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="bg-white p-2 rounded-lg inline-block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qlYT3qzEYL2nowKyJkKZLDnjHvZ3qT.png"
                  alt="WeFore Media Logo"
                  width={120}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
            </Link>
            <p className="text-white/70 mb-6">
              A dynamic social media marketing agency specializing in video editing, branding, and digital marketing.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/weforeofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-primary"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-white/70 hover:text-white transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Video Editing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Branding
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Social Media Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Content Creation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/70 hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-white/70">Shriya Malode:</p>
                  <p>+91 9371525982</p>
                </div>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="text-white/70">Pranav Pawar:</p>
                  <p>+91 9356992477</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <p>weforemedia@gmail.com</p>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <p>Pune, Maharashtra, India</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/50">© {new Date().getFullYear()} WeFore Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
