"use client"

import { motion } from "framer-motion"
import { Calendar, Tag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

import Image from "next/image"

const projects = [
  {
    title: "Project Tracking and Team Coordination",
    description:
      "Coordinated projects with Asana for clear deadlines and deliverables. Used Trello to organize tasks and track progress. Automated workflows with Zapier for seamless tool integration and task efficiency.",
    image: "/mosun-asana.jpeg?height=200&width=400",
    date: "Jan 2023 - Mar 2023",
    tags: ["Asana", "Trello", "Zapier"],
    link: "#",
  },
  {
    title: "Meeting Agenda and Minutes",
    description:
      "Developed structured meeting agendas to guide focused, productive discussions and ensure team alignment. Documented clear and concise minutes capturing key decisions, action items, and next steps for client reference.",
    image: "/mosun-meeting.PNG?height=200&width=400",
    date: "Apr 2023 - Jun 2023",
    tags: ["Calendar Management", "Automation", "Minutes"],
    link: "#",
  },
  // {
  //   title: "Client Intake Process Redesign",
  //   description:
  //     "Redesigned the client onboarding process for a boutique consulting firm, reducing onboarding time from 2 weeks to 3 days while improving data accuracy and client satisfaction scores.",
  //   image: "/placeholder.svg?height=200&width=400",
  //   date: "Jul 2023 - Sep 2023",
  //   tags: ["Process Design", "Client Management", "Efficiency"],
  //   link: "#",
  // },
  // {
  //   title: "Legal Research Database",
  //   description:
  //     "Created a specialized research database for paralegals and attorneys, organizing case precedents and legal resources for quick reference. Implemented during my legal assistant certification program.",
  //   image: "/placeholder.svg?height=200&width=400",
  //   date: "Oct 2023 - Dec 2023",
  //   tags: ["Research", "Database Management", "Legal Resources"],
  //   link: "#",
  // },
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

export function Projects() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-8"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {projects.map((project, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="h-full overflow-hidden border-violet-100 dark:border-violet-800 hover:shadow-lg transition-all duration-300">
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{project.date}</span>
              </div>
              <CardTitle className="text-xl text-slate-900 dark:text-white">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {project.description}
              </CardDescription>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="outline"
                    className="bg-violet-50 text-violet-800 border-violet-200 hover:bg-violet-100 dark:bg-violet-900/20 dark:text-violet-300 dark:border-violet-800 dark:hover:bg-violet-900/30"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            {/* <CardFooter>
              <Button
                variant="outline"
                size="sm"
                className="ml-auto rounded-full border-violet-200 dark:border-violet-800 hover:bg-violet-50 dark:hover:bg-violet-900/20"
                asChild
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <span>View Project</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter> */}
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
