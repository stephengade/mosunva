"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const tools = [
  {
    name: "Google Workspace",
    description: "Expert in Gmail, Docs, Sheets, Slides, and Drive for seamless collaboration and document management.",
    icon: "/google.png",
    color: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800",
  },
  {
    name: "Microsoft Office",
    description: "Proficient in Word, Excel, PowerPoint, and Outlook for professional document creation and communication.",
    icon: "/microsoft.webp",
    color: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800",
  },
  {
    name: "Trello",
    description: "Skilled in creating and managing Trello boards for visual project management and task tracking.",
    icon: "/trello.png",
    color: "bg-sky-50 dark:bg-sky-900/20",
    borderColor: "border-sky-200 dark:border-sky-800",
  },
  {
    name: "Asana",
    description: "Experienced in Asana for complex project management, task assignment, and progress tracking.",
    icon: "/asana.png",
    color: "bg-pink-50 dark:bg-pink-900/20",
    borderColor: "border-pink-200 dark:border-pink-800",
  },
  {
    name: "Zapier",
    description: "Capable of creating automated workflows between apps to streamline processes and save time.",
    icon: "/zapier.webp",
    color: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800",
  },
  {
    name: "Canva",
    description: "Creative design skills using Canva for professional graphics, presentations, and visual content.",
    icon: "/canva.png",
    color: "bg-teal-50 dark:bg-teal-900/20",
    borderColor: "border-teal-200 dark:border-teal-800",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function ToolsSection() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {tools.map((tool, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card 
            className={`h-full border ${tool.borderColor} hover:shadow-md transition-shadow duration-300 overflow-hidden`}
          >
            <div className={`h-2 w-full ${tool.color.replace('bg-', 'bg-opacity-70 bg-')}`} />
            <CardContent className="!pt-0">
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0 w-12 h-12 rounded-full overflow-hidden border border-slate-200 dark:border-slate-700">
                  <Image
                    src={tool.icon || "/placeholder.svg"}
                    alt={tool.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-slate-900 dark:text-white mb-1">{tool.name}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{tool.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
