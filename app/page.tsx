"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  Mail,
  Calendar,
  FileText,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";
import { Testimonials } from "@/components/testimonials";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { CtaBanner } from "@/components/cta-banner";
import { ToolsSection } from "@/components/tools-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-50 to-white dark:from-slate-950 dark:to-slate-900 z-0" />
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-300 via-purple-500 to-violet-300 dark:from-violet-600 dark:via-purple-700 dark:to-violet-600" />

        <AnimatedSection className="container relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-6 mx-auto relative w-36 h-36 md:w-40 md:h-40">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-300 to-purple-400 dark:from-violet-600 dark:to-purple-700 animate-pulse"
              style={{ opacity: 0.8 }}
            />
            <Image
              src="/mosunmola02.png?height=200&width=200"
              alt="Mosunmola Ajayi"
              width={210}
              height={210}
              className="rounded-full w-36 h-36 md:w-40 md:h-40 object-cover border-4 border-white dark:border-slate-800 relative z-10"
            />
          </div>

          <h1 className="text-2xl md:text-6xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-800 to-purple-900 dark:from-violet-300 dark:to-purple-400">
            Mosunmola Ajayi
          </h1>

          <h2 className="text-base md:text-2xl font-medium text-slate-700 dark:text-slate-300 mb-6">
            Virtual Assistant | Legal Background
          </h2>

          <p className="max-w-2xl mx-auto text-sm md:text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Elevating your business with precision and professionalism. I bring
            legal expertise to administrative excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-violet-600 hover:bg-violet-700 text-white"
            >
              <Link href="#projects">
                See my work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-violet-300 dark:border-violet-700 hover:bg-violet-50 dark:hover:bg-violet-900/20"
            >
              <Link href="#services">Explore services</Link>
            </Button>
          </div>
        </AnimatedSection>

        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full animate-bounce"
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <ChevronDown className="h-6 w-6 text-slate-500 dark:text-slate-400" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <AnimatedSection className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                About Me
              </h2>
              <div className="space-y-4 text-slate-600 text-sm dark:text-slate-300">
                <p>
                  Hello! I'm Mosunmola Ajayi, a dedicated virtual assistant with
                  a unique background in law. My journey began in the legal
                  field, where I honed my attention to detail, research skills,
                  and ability to manage complex information.
                </p>
                <p>
                  After earning my law degree, I discovered my passion for
                  helping professionals and businesses thrive by taking
                  administrative burdens off their plates. I've since obtained
                  specialized certifications in virtual assistance to complement
                  my legal expertise.
                </p>
                <p>
                  My approach combines legal precision with administrative
                  efficiency, allowing me to offer a unique perspective that
                  helps your business maintain compliance while focusing on
                  growth.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 text-sm font-medium">
                  Law Degree
                </span>
                <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 text-sm font-medium">
                  Certified VA
                </span>
                <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 text-sm font-medium">
                  Administrative Support
                </span>
                <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 text-sm font-medium">
                  Research
                </span>
                <span className="px-4 py-2 rounded-full bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300 text-sm font-medium">
                  Document Preparation
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-200 to-purple-200 dark:from-violet-800 dark:to-purple-900 transform rotate-3" />
              <div className="relative bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-violet-100 dark:border-violet-800">
                <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                  Credentials
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-violet-600 dark:text-violet-400 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        LLB
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Ekiti State University.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-violet-600 dark:text-violet-400 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        Certified Virtual Assistant
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Millionaires Squad (2025)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Star className="h-5 w-5 text-violet-600 dark:text-violet-400 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium text-slate-900 dark:text-white">
                        Business Email & Presenting Data
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        HP Life
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
                    Availability
                  </h3>
                  <div className="flex items-center text-slate-600 dark:text-slate-300">
                    <Calendar className="h-5 w-5 text-violet-600 dark:text-violet-400 mr-3" />
                    <p>Monday - Friday, 9am - 5pm GMT</p>
                  </div>
                  <div className="flex items-center mt-2 text-slate-600 dark:text-slate-300">
                    <Mail className="h-5 w-5 text-violet-600 dark:text-violet-400 mr-3" />
                    <p>ajayimosunmola2000@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20 bg-violet-50 dark:bg-slate-800">
        <AnimatedSection className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Tools & Technologies
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
              I'm proficient with a variety of tools to streamline your business
              operations and enhance productivity.
            </p>
          </div>

          <ToolsSection />
        </AnimatedSection>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white dark:bg-slate-800">
        <AnimatedSection className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              My Services
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
              Comprehensive virtual assistance with a legal edge. Here's how I
              can help elevate your business.
            </p>
          </div>

          <Services />
        </AnimatedSection>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-violet-50 dark:bg-slate-800">
        <AnimatedSection className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Previous Projects
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
              A showcase of my work during training and internships. These
              projects demonstrate my skills and experience.
            </p>
          </div>

          <Projects />
        </AnimatedSection>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white dark:bg-slate-900">
        <AnimatedSection className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Client Testimonials
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
              Don't just take my word for it. Here's what clients have to say
              about working with me.
            </p>
          </div>

          <Testimonials />
        </AnimatedSection>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container max-w-5xl mx-auto px-4">
          <CtaBanner />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-slate-300">
        <div className="container max-w-5xl mx-auto px-4 text-center">
          <p>
            © {new Date().getFullYear()} Mosunmola Ajayi. All rights reserved.
          </p>
          <p className="mt-2 text-sm text-slate-400 mb-5">
            Virtual Assistant with Legal Expertise
          </p>

          <Link
            target="_blank"
            className="text-xs underline"
            href="https://stephengade.com"
          >
            Crafted by Stephengade ⚡
          </Link>
        </div>
      </footer>
    </div>
  );
}
