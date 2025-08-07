"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function IntroAnimation() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [currentPhase, setCurrentPhase] = useState(0)
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })

  const phases = [
    { text: "INITIALIZING NINJA POWERS...", emoji: "🥷" },
    { text: "LOADING TERRAIN SKILLS...", emoji: "🏔️" },
    { text: "PREPARING MAP DESIGNS...", emoji: "🗺️" },
    { text: "ACTIVATING COMIC MODE...", emoji: "💥" },
    { text: "READY TO ROCK!", emoji: "🚀" },
  ]

  useEffect(() => {
    setMounted(true)

    // Set window size safely
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })

      const handleResize = () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    // Change phases
    const phaseInterval = setInterval(() => {
      setCurrentPhase((prev) => {
        if (prev >= phases.length - 1) {
          clearInterval(phaseInterval)
          return phases.length - 1
        }
        return prev + 1
      })
    }, 600)

    return () => {
      clearInterval(interval)
      clearInterval(phaseInterval)
    }
  }, [mounted, phases.length])

  const isDark = mounted ? theme === "dark" : true

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-comic-yellow via-white to-comic-yellow">
        <div className="text-9xl">🥷</div>
      </div>
    )
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-comic-yellow via-white to-comic-yellow overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 comic-dots opacity-30"></div>

      {/* Flying comic elements */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl opacity-20"
          initial={{
            x: -100,
            y: Math.random() * windowSize.height,
            rotate: 0,
          }}
          animate={{
            x: windowSize.width + 100,
            rotate: 360,
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: i * 0.3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {["💥", "⚡", "🌟", "🎯", "🔥", "💫", "⭐", "🚀"][i]}
        </motion.div>
      ))}

      {/* Main loading container */}
      <div className="relative w-full max-w-2xl mx-auto px-8">
        {/* Main logo animation */}
        <motion.div
          className="text-center mb-12"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut" }}
        >
          <motion.div
            className="relative inline-block"
            animate={{
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <div className="text-9xl md:text-[12rem] font-bold text-black relative">
              🥷
              <motion.div
                className="absolute inset-0 bg-comic-yellow rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ zIndex: -1 }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6"
          >
            <h1 className="comic-title text-4xl md:text-6xl mb-2">JOE'S PORTFOLIO</h1>
            <div className="w-32 h-2 bg-black mx-auto border-2 border-black"></div>
          </motion.div>
        </motion.div>

        {/* Loading progress section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-8"
        >
          {/* Progress bar */}
          <div className="relative w-full max-w-md mx-auto mb-6">
            <div className="w-full h-6 bg-white border-4 border-black rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-comic-yellow to-yellow-400 border-r-4 border-black"
                initial={{ width: "0%" }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="absolute -top-2 -right-2 bg-comic-yellow border-2 border-black rounded-full px-3 py-1 text-black font-bold text-sm"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY }}
            >
              {loadingProgress}%
            </motion.div>
          </div>

          {/* Loading phase text */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhase}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              className="speech-bubble inline-block"
            >
              <div className="flex items-center justify-center gap-3">
                <motion.span
                  className="text-3xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                >
                  {phases[currentPhase]?.emoji}
                </motion.span>
                <span className="text-black font-bold text-lg comic-font-body">{phases[currentPhase]?.text}</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Comic book effects */}
        <div className="absolute -top-20 -left-20 transform -rotate-12">
          <motion.div
            className="speech-bubble text-2xl font-bold comic-font-title bg-red-400 border-red-600"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [-12, -8, -12],
            }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            LOADING!
          </motion.div>
        </div>

        <div className="absolute -top-16 -right-16 transform rotate-12">
          <motion.div
            className="speech-bubble text-xl font-bold comic-font-title bg-blue-400 border-blue-600"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [12, 16, 12],
            }}
            transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
          >
            EPIC!
          </motion.div>
        </div>

        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 rotate-6">
          <motion.div
            className="speech-bubble text-lg font-bold comic-font-title bg-green-400 border-green-600"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [6, 10, 6],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
          >
            NINJA MODE!
          </motion.div>
        </div>
      </div>

      {/* Animated corner decorations */}
      <motion.div
        className="absolute top-8 left-8 text-4xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        ⭐
      </motion.div>

      <motion.div
        className="absolute top-8 right-8 text-4xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        💥
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-8 text-4xl"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      >
        🚀
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 text-4xl"
        animate={{
          rotate: -360,
          y: [0, -10, 0],
        }}
        transition={{
          rotate: { duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
          y: { duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
        }}
      >
        ⚡
      </motion.div>

      {/* Loading dots animation */}
      <motion.div
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-4 h-4 bg-black rounded-full border-2 border-comic-yellow"
            animate={{
              scale: [1, 1.5, 1],
              backgroundColor: ["#000", "#FFD700", "#000"],
            }}
            transition={{
              duration: 0.8,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  )
}
