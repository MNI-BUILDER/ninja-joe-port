"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 relative comic-stripes">
      {/* Comic book background elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-comic-yellow/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-comic-yellow/10 to-transparent"></div>

      <div className="absolute top-10 left-10 text-8xl opacity-20">🎯</div>
      <div className="absolute bottom-10 right-10 text-8xl opacity-20">🔥</div>

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
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              👤 ABOUT THE NINJA! 🥷
            </motion.h2>
          </div>
          <div className="w-20 h-2 bg-comic-yellow mx-auto mb-6 border-2 border-black"></div>
          <div className="speech-bubble max-w-2xl mx-auto">
            <p className="text-black font-bold text-lg comic-font-body">
              Get to know more about my EPIC background and experience!
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="ninja-comic-card"
          >
            <div className="absolute -right-4 -bottom-4 text-6xl opacity-20">📖</div>

            <h3 className="text-2xl font-bold mb-6 relative inline-block text-black dark:text-white comic-font-subtitle">
              MY EPIC STORY! 📚
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-comic-yellow border border-black"></div>
            </h3>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 font-semibold comic-font-body">
              <p>
                I am Joe Dada, a PASSIONATE terrain artist and map designer with a focus on creating IMMERSIVE
                environments for games and interactive experiences! With years of experience in the field, I've
                developed a KEEN eye for detail and a deep understanding of spatial design! 🎯
              </p>
              <p>
                My journey began with Dragon Ball-themed projects, where I honed my skills in creating DETAILED
                landscapes and environments that capture the essence of the anime world! Since then, I've expanded my
                expertise to include various types of terrain art, 3D modeling, and environmental design! ⚡
              </p>
              <p>
                I'm dedicated to pushing the boundaries of what's possible in environmental design, always striving to
                create spaces that are not only VISUALLY STUNNING but also functional and engaging for users! 💥
              </p>
            </div>

            {/* Comic book corners */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-comic-yellow"></div>
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-comic-yellow"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div className="ninja-comic-card" whileHover={{ rotate: 1, scale: 1.02 }}>
              <div className="absolute -right-4 -bottom-4 text-4xl opacity-30">🏷️</div>

              <h4 className="text-xl font-bold mb-4 flex items-center text-black dark:text-white comic-font-subtitle">
                <span className="text-comic-yellow mr-2 text-2xl">🏷️</span>
                NAME
              </h4>
              <p className="text-gray-700 dark:text-gray-300 font-bold text-lg comic-font-body">
                Joe Dada (Terrain Master!)
              </p>

              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-comic-yellow"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-comic-yellow"></div>
            </motion.div>

            <motion.div className="ninja-comic-card" whileHover={{ rotate: -1, scale: 1.02 }}>
              <div className="absolute -right-4 -bottom-4 text-4xl opacity-30">🎂</div>

              <h4 className="text-xl font-bold mb-4 flex items-center text-black dark:text-white comic-font-subtitle">
                <span className="text-comic-yellow mr-2 text-2xl">🎂</span>
                AGE
              </h4>
              <p className="text-gray-700 dark:text-gray-300 font-bold text-lg comic-font-body">18 years YOUNG! 🚀</p>

              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-comic-yellow"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-comic-yellow"></div>
            </motion.div>

            <motion.div className="ninja-comic-card" whileHover={{ rotate: 1, scale: 1.02 }}>
              <div className="absolute -right-4 -bottom-4 text-4xl opacity-30">⚡</div>

              <h4 className="text-xl font-bold mb-4 flex items-center text-black dark:text-white comic-font-subtitle">
                <span className="text-comic-yellow mr-2 text-2xl">⚡</span>
                SUPER POWERS
              </h4>
              <p className="text-gray-700 dark:text-gray-300 font-bold comic-font-body">
                Terrain Artist 🏔️ • Map Designer 🗺️ • 3D Modeler 🎯 • Sky Designer ☁️ • Lighting Artist 💡 • Creative
                Innovator 🌟
              </p>

              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-comic-yellow"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-comic-yellow"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Comic book call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="speech-bubble inline-block">
            <p className="text-black font-bold text-xl mb-4 comic-font-body">
              Want to see my NINJA SKILLS in action? 🥷
            </p>
            <motion.a
              href="#skills"
              className="comic-button inline-block"
              whileHover={{ scale: 1.1, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              ⚡ CHECK MY SKILLS!
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
