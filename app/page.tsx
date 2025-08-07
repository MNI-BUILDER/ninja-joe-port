"use client"

import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import IntroAnimation from "@/components/intro-animation"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import DynamicTitle from "@/components/dynamic-title"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 2500) // Shorter intro animation

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <DynamicTitle />
      <AnimatePresence>{showIntro && <IntroAnimation />}</AnimatePresence>

      {!showIntro && (
        <main className="min-h-screen bg-gradient-to-b from-background to-background/80 text-foreground overflow-hidden paper-texture">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  )
}
