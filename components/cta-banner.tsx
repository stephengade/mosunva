"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function CtaBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-violet-600 to-purple-600 dark:from-violet-800 dark:to-purple-900 p-8 md:p-12"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ opacity: 0.15 }}
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,192L48,176C96,160,192,128,288,122.7C384,117,480,139,576,165.3C672,192,768,224,864,213.3C960,203,1056,149,1152,117.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to elevate your business?</h3>
          <p className="text-violet-100 max-w-xl">
            Let's connect and discuss how my virtual assistant services can help you focus on what matters most.
          </p>
        </div>
        <Button size="lg" className="rounded-full bg-white text-violet-700 hover:bg-violet-50 shadow-lg" asChild>
          <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScm31-hPIZzcUgO9ky5QMvUkcbJfURHYa0yZwxwcSHB6_HTVg/viewform">
            <Mail className="mr-2 h-4 w-4" />
            Get in touch
          </a>
        </Button>
      </div>
    </motion.div>
  )
}
