"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Larry Ogheneganre",
    role: "Principal partner A.O.L. Eyabunor & Co",
    content:
      "Mosunmola is incredibly organized and dependable. Since she started managing my calendar and admin tasks, I've had more time to focus on growing my business. She always anticipates what needs to be done — it's like having a second brain!",
    initials: "LO",
  },
  {
    name: "Tunde Akinboye",
    role: "Entrepreneur",
    content:
      "I needed detailed research done in a short time, and she delivered not only quickly but with precision and clarity. The spreadsheet she created was easy to navigate and ready to use. I'll definitely work with her again!",
    initials: "TA",
  },
  {
    name: "Stephen Gbolagade",
    role: "Founder, Vendda.co",
    content:
      "Mosunmola is not just smart but she's always curious to learn more. She pays attention to details and presents valuable ideas and suggestions that consistently improve our projects. Her proactive approach has made her an invaluable virtual assistant.",
    initials: "SG",
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-violet-200 dark:text-violet-900 opacity-50">
        <Quote className="w-24 h-24" />
      </div>

      <div className="relative overflow-hidden py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-violet-100 dark:border-violet-800 bg-white dark:bg-slate-800">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <Avatar className="w-16 h-16 mx-auto border-2 border-violet-200 dark:border-violet-700">
                    <AvatarFallback className="bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200 text-lg">
                      {testimonials[currentIndex].initials}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonials[currentIndex].role}</p>
                </div>

                <p className="text-lg text-center italic text-slate-600 dark:text-slate-300 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={prevTestimonial}
          className="rounded-full border-violet-200 dark:border-violet-800 hover:bg-violet-50 dark:hover:bg-violet-900/20"
        >
          <ChevronLeft className="h-5 w-5 text-violet-600 dark:text-violet-400" />
          <span className="sr-only">Previous testimonial</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextTestimonial}
          className="rounded-full border-violet-200 dark:border-violet-800 hover:bg-violet-50 dark:hover:bg-violet-900/20"
        >
          <ChevronRight className="h-5 w-5 text-violet-600 dark:text-violet-400" />
          <span className="sr-only">Next testimonial</span>
        </Button>
      </div>

      <div className="flex justify-center mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 mx-1 rounded-full ${
              index === currentIndex ? "bg-violet-600 dark:bg-violet-400" : "bg-violet-200 dark:bg-violet-800"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
