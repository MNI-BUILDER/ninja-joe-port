"use client"

import { motion } from "framer-motion"
import { Mountain, Map, Palette, Lightbulb, Cloud, Shirt, Film, Layers } from "lucide-react"

export default function Skills() {
  const skills = [
    {
      icon: <Mountain className="w-10 h-10" />,
      title: "Terrain Artist",
      description: "Creating EPIC terrains for immersive environments",
      emoji: "🏔️",
    },
    {
      icon: <Map className="w-10 h-10" />,
      title: "Map Designer",
      description: "Designing AWESOME maps for games and experiences",
      emoji: "🗺️",
    },
    {
      icon: <Layers className="w-10 h-10" />,
      title: "3D Modeler",
      description: "Building DETAILED 3D models and objects",
      emoji: "🎯",
    },
    {
      icon: <Palette className="w-10 h-10" />,
      title: "GFX Artist",
      description: "Creating STUNNING visual effects and graphics",
      emoji: "🎨",
    },
    {
      icon: <Cloud className="w-10 h-10" />,
      title: "Sky Designer",
      description: "Crafting AMAZING atmospheric skies and weather",
      emoji: "☁️",
    },
    {
      icon: <Lightbulb className="w-10 h-10" />,
      title: "Lighting Artist",
      description: "Implementing DYNAMIC lighting for mood and atmosphere",
      emoji: "💡",
    },
    {
      icon: <Shirt className="w-10 h-10" />,
      title: "Cloth Designer",
      description: "Designing REALISTIC cloth physics and textures",
      emoji: "👕",
    },
    {
      icon: <Film className="w-10 h-10" />,
      title: "Animator",
      description: "Creating FLUID animations to bring worlds to life",
      emoji: "🎬",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 relative comic-dots">
      {/* Comic book background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-comic-yellow/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-comic-yellow/10 to-transparent"></div>

      <div className="absolute top-10 right-10 text-8xl opacity-20">💥</div>
      <div className="absolute bottom-10 left-10 text-8xl opacity-20">⚡</div>

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
              animate={{ rotate: [-1, 1, -1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              🥷 NINJA SKILLS! ⚡
            </motion.h2>
          </div>
          <div className="w-20 h-2 bg-comic-yellow mx-auto mb-6 border-2 border-black"></div>
          <div className="speech-bubble max-w-2xl mx-auto">
            <p className="text-black font-bold text-lg">
              Mastering the art of digital environment creation with PRECISION and CREATIVITY! 💪
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="ninja-comic-card group animate-comic-hover"
              whileHover={{
                rotate: Math.random() > 0.5 ? 2 : -2,
                scale: 1.05,
                boxShadow: "12px 12px 0px #000, 16px 16px 0px #FFD700",
              }}
            >
              <div className="absolute -right-4 -bottom-4 text-4xl opacity-30">{skill.emoji}</div>

              <motion.div
                className="text-comic-yellow mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {skill.icon}
              </motion.div>

              <h3
                className="text-xl font-bold mb-2 relative z-10 text-black dark:text-white"
                style={{ fontFamily: "Bungee, cursive" }}
              >
                {skill.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 relative z-10 font-semibold">{skill.description}</p>

              {/* Comic book corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-comic-yellow"></div>
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-comic-yellow"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Comic book call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="speech-bubble inline-block">
            <p className="text-black font-bold text-xl mb-4">Ready to see these skills in ACTION? 🚀</p>
            <motion.a
              href="#projects"
              className="comic-button inline-block"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              🎮 CHECK OUT MY PROJECTS!
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
