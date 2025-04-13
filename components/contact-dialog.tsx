"use client"

import type React from "react"

import { Phone, Mail, MapPin } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ContactDialogProps {
  children: React.ReactNode
}

export function ContactDialog({ children }: ContactDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-black/95 border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            <span className="gradient-text animate-text-shimmer">Contact Us</span>
          </DialogTitle>
          <DialogDescription className="text-white/70">Reach out to us through any of these channels</DialogDescription>
        </DialogHeader>
        <div className="space-y-6 mt-4">
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
      </DialogContent>
    </Dialog>
  )
}
