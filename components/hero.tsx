"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted ? resolvedTheme === "dark" : false

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Comic book style particles
    class ComicParticle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
      shape: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 8 + 4
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1
        this.opacity = Math.random() * 0.8 + 0.2
        this.color = Math.random() > 0.5 ? "#FFD700" : "#000000"
        this.shape = Math.random() > 0.5 ? "star" : "circle"
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY
        }
      }

      draw() {
        if (!ctx) return

        ctx.save()
        ctx.globalAlpha = this.opacity
        ctx.fillStyle = this.color
        ctx.strokeStyle = this.color === "#FFD700" ? "#000000" : "#FFD700"
        ctx.lineWidth = 2

        if (this.shape === "star") {
          this.drawStar(this.x, this.y, this.size)
        } else {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
          ctx.stroke()
        }
        ctx.restore()
      }

      drawStar(x: number, y: number, size: number) {
        if (!ctx) return

        const spikes = 5
        const outerRadius = size
        const innerRadius = size * 0.5

        ctx.beginPath()
        for (let i = 0; i < spikes * 2; i++) {
          const radius = i % 2 === 0 ? outerRadius : innerRadius
          const angle = (i * Math.PI) / spikes
          const px = x + Math.cos(angle) * radius
          const py = y + Math.sin(angle) * radius

          if (i === 0) {
            ctx.moveTo(px, py)
          } else {
            ctx.lineTo(px, py)
          }
        }
        ctx.closePath()
        ctx.fill()
        ctx.stroke()
      }
    }

    const particles: ComicParticle[] = []
    for (let i = 0; i < 25; i++) {
      particles.push(new ComicParticle())
    }

    let animationFrame: number

    function animate() {
      if (!ctx || !canvas) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrame)
    }
  }, [mounted])

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden bg-background">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-20"></canvas>

      {/* Comic book style background elements */}
      <div className="absolute inset-0 comic-stripes opacity-30"></div>

      {/* Comic book sound effects */}
      <div className="absolute top-20 left-10 transform -rotate-12 opacity-10">
        <div className="speech-bubble text-4xl font-bold comic-font-title">BOOM!</div>
      </div>

      <div className="absolute top-40 right-20 transform rotate-12 opacity-10">
        <div className="speech-bubble text-3xl font-bold comic-font-title">POW!</div>
      </div>

      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
        >
          <div className="inline-block mb-6 relative">
            <motion.h1
              className="comic-title text-6xl md:text-8xl"
              animate={{
                textShadow: [
                  "3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 1px 1px 0px #000",
                  "5px 5px 0px #000, -2px -2px 0px #000, 2px -2px 0px #000, -2px 2px 0px #000, 2px 2px 0px #000",
                  "3px 3px 0px #000, -1px -1px 0px #000, 1px -1px 0px #000, -1px 1px 0px #000, 1px 1px 0px #000",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              JOE
            </motion.h1>
            <motion.div
              className="comic-subtitle text-2xl md:text-3xl mt-2"
              animate={{ rotate: [1, -1, 1] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              DADA
            </motion.div>
          </div>

          <motion.div
            className="bg-comic-yellow border-4 border-black p-4 rounded-lg mb-6 transform -rotate-1"
            whileHover={{ rotate: 1, scale: 1.05 }}
          >
            <h2 className="text-xl md:text-2xl font-bold text-black comic-font-subtitle">
              🥷 TERRAIN NINJA & MAP MASTER! 🗺️
            </h2>
          </motion.div>

          <div className="speech-bubble mb-8 max-w-lg mx-auto md:mx-0">
            <p className="text-black font-bold text-lg comic-font-body">
              Creating EPIC environments and AMAZING terrains for games and interactive experiences! Ready to level up
              your project? 💥
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <motion.a href="#projects" className="comic-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              🎮 VIEW PORTFOLIO
            </motion.a>

            <motion.a
              href="#contact"
              className="comic-button bg-white text-black border-comic-yellow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              📞 CONTACT ME
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Comic book style background circles */}
            <motion.div
              className="absolute inset-0 bg-comic-yellow rounded-full border-8 border-black"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-4 bg-white rounded-full border-4 border-black comic-dots"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-8 bg-comic-yellow rounded-full border-4 border-black"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            />

            {/* Comic book decorative elements */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-comic-yellow border-4 border-black rounded-full flex items-center justify-center text-2xl">
              ⭐
            </div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-comic-yellow border-4 border-black rounded-full flex items-center justify-center text-2xl">
              💥
            </div>
            <div className="absolute top-0 -right-8 w-8 h-8 bg-comic-yellow border-2 border-black rounded-full flex items-center justify-center text-lg">
              ⚡
            </div>
            <div className="absolute -bottom-8 left-0 w-8 h-8 bg-comic-yellow border-2 border-black rounded-full flex items-center justify-center text-lg">
              🔥
            </div>

            {/* Profile image with comic book frame */}
            <div className="absolute inset-12 rounded-full overflow-hidden border-6 border-black">
              <Image
                src="https://cdn.discordapp.com/avatars/1282740414054535333/e0a2a54709a3dd934dccd5e92d7f3ed8.webp?size=128"
                alt="Joe Dada - Ninja Developer"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Animated frame overlay */}
            <motion.div
              className="absolute inset-0 pointer-events-none z-10"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              <Image
                src="https://cdn.discordapp.com/avatar-decoration-presets/a_39fa45dc828d5def2ba160786f1e6a17.png?size=240&passthrough=true"
                alt="Profile frame"
                width={220}
                height={220}
                className="w-full h-full object-contain scale-150"
              />
            </motion.div>

            {/* Comic book ninja character */}
            <motion.div
              className="absolute -right-8 -bottom-8 text-6xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            >
              🥷
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        <a href="#about" className="text-foreground opacity-70 hover:opacity-100 text-4xl">
          ⬇️
        </a>
      </motion.div>
    </section>
  )
}
