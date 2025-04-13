"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingAnimationProps {
  onComplete: () => void
}

export function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1000) // GET
    const timer2 = setTimeout(() => setStep(2), 2000) // SET
    const timer3 = setTimeout(() => setStep(3), 3000) // BOOM
    const timer4 = setTimeout(() => onComplete(), 4000) // Complete

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="relative">
        <AnimatePresence>
          {step === 0 && (
            <motion.div
              key="get"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2, y: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white">GET</h1>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="set"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 2, y: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold gradient-text animate-text-shimmer">SET</h1>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="boom"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 3 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-primary animate-pulse-slow">BOOM!</h1>
            </motion.div>
          )}
        </AnimatePresence>

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 2, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 1 }}
                className="w-40 h-40 rounded-full bg-gradient-to-r from-primary via-accent to-primary"
              ></motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1.5, 3] }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-white p-2 rounded-lg">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qlYT3qzEYL2nowKyJkKZLDnjHvZ3qT.png"
                    alt="WeFore Media Logo"
                    className="h-10 w-auto"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
