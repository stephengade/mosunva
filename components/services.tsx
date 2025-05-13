"use client"

import { motion } from "framer-motion"
import { Calendar, FileText, Mail, Search, FileSpreadsheet, Briefcase } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Calendar className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
    title: "Calendar Management",
    description: "Efficient scheduling, appointment setting, and calendar organization to optimize your time.",
  },
  {
    icon: <FileText className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
    title: "Document Preparation",
    description: "Professional document drafting, formatting, and proofreading with legal precision.",
  },
  {
    icon: <Mail className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
    title: "Email Management",
    description: "Inbox organization, filtering, and response drafting to keep your communications flowing.",
  },
  {
    icon: <Search className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
    title: "Research",
    description: "Thorough research services leveraging my legal background for accurate, comprehensive results.",
  },
  {
    icon: <FileSpreadsheet className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
    title: "Data Entry & Management",
    description: "Accurate data entry, organization, and management with meticulous attention to detail.",
  },
  {
    icon: <Briefcase className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
    title: "Legal Document Review",
    description: "Basic review of legal documents and contracts to identify potential issues or concerns.",
  },
  // {
  //   icon: <PenTool className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
  //   title: "Content Creation",
  //   description: "Professional content writing for blogs, newsletters, and social media with a polished tone.",
  // },
  // {
  //   icon: <BarChart className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
  //   title: "Business Process Optimization",
  //   description: "Analysis and improvement of administrative workflows to enhance efficiency.",
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

export function Services() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {services.map((service, index) => (
        <motion.div key={index} variants={itemVariants}>
          <Card className="h-full border-violet-100 dark:border-violet-800 hover:shadow-md transition-shadow duration-300">
            <CardHeader className="pb-2">
              <div className="mb-4">{service.icon}</div>
              <CardTitle className="text-xl text-slate-900 dark:text-white">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600 dark:text-slate-300 text-base">
                {service.description}
              </CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
