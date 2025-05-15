"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Tools", href: "#tools" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
]

export function NavHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "w-[95vw] sm:w-max mx-auto fixed top-4 left-0 right-0 z-50 rounded-full transition-all duration-300",
        scrolled ? "bg-white/90 top-4 dark:bg-slate-900/90 backdrop-blur-md shadow-md" : "bg-transparent",
      )}
    >
      <div className="flex items-center justify-between px-4 py-2">
        <Link
          href="#"
          className="font-bold text-lg text-violet-800 dark:text-violet-300"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          MA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              size="sm"
              className="text-slate-700 dark:text-slate-300 hover:text-violet-700 dark:hover:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 rounded-full text-sm"
              asChild
            >
              <Link href={item.href}>{item.name}</Link>
            </Button>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <Button variant="ghost" size="icon" className="md:hidden rounded-full" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="h-5 w-5 text-slate-700 dark:text-slate-300" />
          ) : (
            <Menu className="h-5 w-5 text-slate-700 dark:text-slate-300" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden rounded-b-2xl bg-white dark:bg-slate-900 shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-slate-700 dark:text-slate-300 hover:text-violet-700 dark:hover:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-900/20"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
