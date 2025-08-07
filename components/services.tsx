"use client"

import { motion } from "framer-motion"
import { Mountain, Building, Coffee, Gamepad2, Cloud, Swords, Brush, Globe } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Mountain className="w-12 h-12" />,
      title: "Terrain Creation",
      description: "Custom terrain design with REALISTIC texturing and natural formations",
      emoji: "🏔️",
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "Hotels & Lounges",
      description: "LUXURIOUS hotel environments with detailed interiors and exteriors",
      emoji: "🏨",
    },
    {
      icon: <Coffee className="w-12 h-12" />,
      title: "Cafes & Restaurants",
      description: "COZY and inviting food establishment designs with atmosphere",
      emoji: "☕",
    },
    {
      icon: <Gamepad2 className="w-12 h-12" />,
      title: "Obby & Mini Games",
      description: "ENGAGING obstacle courses and mini-game environments",
      emoji: "🎮",
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Sky Design",
      description: "ATMOSPHERIC sky boxes with dynamic lighting and weather effects",
      emoji: "☁️",
    },
    {
      icon: <Swords className="w-12 h-12" />,
      title: "Battlegrounds",
      description: "COMBAT-focused maps with strategic layouts and visual effects",
      emoji: "⚔️",
    },
    {
      icon: <Brush className="w-12 h-12" />,
      title: "Map Rework",
      description: "ENHANCEMENT and optimization of existing maps and environments",
      emoji: "🎨",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Portfolio Creation",
      description: "PROFESSIONAL portfolio and game website development services",
      emoji: "🌐",
    },
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background/90 to-background relative comic-halftone">
      {/* Comic book background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-comic-yellow/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-comic-yellow/10 to-transparent"></div>

      <div className="absolute top-10 left-10 text-8xl opacity-20">💼</div>
      <div className="absolute bottom-10 right-10 text-8xl opacity-20">🚀</div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <motion.h2
              className="comic-title text-4xl md:text-6xl mb-4"
              animate={{ rotate: [1, -1, 1] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              💼 NINJA SERVICES! 🥷
            </motion.h2>
          </div>
          <div className="w-20 h-2 bg-comic-yellow mx-auto mb-6 border-2 border-black"></div>
          <div className="speech-bubble max-w-2xl mx-auto">
            <p className="text-black font-bold text-lg">
              PROFESSIONAL environment design services to LEVEL UP your game or project! 🚀
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotate: Math.random() > 0.5 ? 2 : -2,
                boxShadow: "12px 12px 0px #000, 16px 16px 0px #FFD700",
              }}
              className="ninja-comic-card animate-comic-hover"
            >
              <div className="absolute -right-4 -bottom-4 text-5xl opacity-20">{service.emoji}</div>

              <motion.div
                className="bg-comic-yellow/20 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6 text-comic-yellow relative z-10 border-4 border-black"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                {service.icon}
              </motion.div>

              <h3
                className="text-xl font-bold mb-3 relative z-10 text-black dark:text-white"
                style={{ fontFamily: "Bungee, cursive" }}
              >
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 relative z-10 font-semibold">{service.description}</p>

              {/* Comic book corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-comic-yellow"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-comic-yellow"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 ninja-comic-card relative overflow-hidden"
        >
          <div className="absolute -right-10 -bottom-10 text-[120px] opacity-10">🥷</div>

          <div className="text-center mb-8 relative z-10">
            <h3
              className="text-2xl font-bold mb-4 text-black dark:text-white"
              style={{ fontFamily: "Bungee, cursive" }}
            >
              Ready to LEVEL UP your project? 🚀
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-semibold">
              I offer CUSTOM solutions tailored to your specific needs and vision. Let's create something AMAZING
              together! 💥
            </p>
          </div>

          <div className="flex justify-center relative z-10">
            <motion.a
              href="#contact"
              className="comic-button"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 GET IN TOUCH!
            </motion.a>
          </div>

          {/* Comic book corners */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-comic-yellow"></div>
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-comic-yellow"></div>
        </motion.div>
      </div>
    </section>
  )
}
