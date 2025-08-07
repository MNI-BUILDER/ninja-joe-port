"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useState, useEffect } from "react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <footer className="py-10 bg-background border-t-4 border-comic-yellow relative comic-stripes">
      {/* Comic book background elements */}
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-comic-yellow/10 to-transparent"></div>

      <div className="absolute top-10 left-10 text-6xl opacity-20">🏁</div>
      <div className="absolute bottom-10 right-10 text-6xl opacity-20">👋</div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <div className="text-comic-yellow font-bold text-2xl mb-2 flex items-center">
              <motion.span
                className="mr-2 text-3xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                🥷
              </motion.span>
              <span className="text-black dark:text-white comic-font-title">JOE'S</span>
              <span className="text-comic-yellow mx-2">|</span>
              <span className="text-black dark:text-white comic-font-title">PORTFOLIO</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-bold comic-font-body">
              🎯 PROFESSIONAL Terrain Artist & Map Designer! 🗺️ | Creating Epic Experiences! 🌟
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-6 justify-center mb-6 md:mb-0"
          >
            {[
              { name: "Home", href: "#home", emoji: "🏠" },
              { name: "About", href: "#about", emoji: "👤" },
              { name: "Skills", href: "#skills", emoji: "⚡" },
              { name: "Projects", href: "#projects", emoji: "🎮" },
              { name: "Showcases", href: "/showcases", emoji: "🎨" },
              { name: "Contact", href: "#contact", emoji: "📞" },
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-600 dark:text-gray-400 hover:text-comic-yellow transition-colors font-bold comic-font-body"
                whileHover={{ scale: 1.1, rotate: 2 }}
              >
                {link.emoji} {link.name}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4 items-center"
          >
            {mounted && (
              <motion.button
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                className="p-3 rounded-full bg-comic-yellow text-black hover:bg-yellow-400 transition-colors mr-2 border-2 border-black"
                aria-label="Toggle theme"
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
              >
                {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            )}

            <motion.a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-comic-yellow border-2 border-black flex items-center justify-center text-black hover:bg-yellow-400 transition-all duration-300 font-bold text-xl"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              💬
            </motion.a>

            <motion.a
              href="https://roblox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-comic-yellow border-2 border-black flex items-center justify-center text-black hover:bg-yellow-400 transition-all duration-300 font-bold text-xl"
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              🎮
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t-2 border-comic-yellow mt-8 pt-8 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 font-bold comic-font-body">
            © {currentYear} Joe Dada. All rights reserved. Made with 💛 and lots of ☕! | Epic Creations! 🌟
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
