"use client"

import { useState, useEffect } from "react"
import { Menu, X, Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home", emoji: "🏠" },
    { name: "About", href: "#about", emoji: "👤" },
    { name: "Skills", href: "#skills", emoji: "⚡" },
    { name: "Projects", href: "#projects", emoji: "🎮" },
    { name: "Showcases", href: "/showcases", emoji: "🎨" },
    { name: "Contact", href: "#contact", emoji: "📞" },
  ]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md py-2 shadow-lg border-b-4 border-comic-yellow"
          : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <div className="text-comic-yellow font-bold text-2xl flex items-center comic-pow">
            <motion.span
              className="mr-2 text-4xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              🥷
            </motion.span>
            <span className="text-black dark:text-white comic-font-title">JOE'S</span>
            <span className="text-comic-yellow mx-2">|</span>
            <span className="text-black dark:text-white comic-font-title">PORTFOLIO</span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-6 items-center"
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="relative text-foreground hover:text-comic-yellow transition-colors group font-bold comic-font-body"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-1">{link.emoji}</span>
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-comic-yellow transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}

          {mounted && (
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-comic-yellow text-black hover:bg-yellow-400 transition-colors border-2 border-black"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          )}
        </motion.nav>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden flex items-center gap-4">
          {mounted && (
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-comic-yellow text-black hover:bg-yellow-400 transition-colors border-2 border-black"
              aria-label="Toggle theme"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
          )}

          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-foreground focus:outline-none bg-comic-yellow p-2 rounded-lg border-2 border-black"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} color="#000" /> : <Menu size={24} color="#000" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t-4 border-comic-yellow"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-comic-yellow py-2 border-b-2 border-comic-yellow/20 flex items-center font-bold comic-font-body"
                  whileHover={{ x: 10 }}
                >
                  <span className="mr-2 text-xl">{link.emoji}</span>
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
