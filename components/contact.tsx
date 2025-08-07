"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Send, Loader2, MessageSquare, Mail, AlertCircle } from "lucide-react"
import { sendContactMessage } from "@/app/actions"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitError(null)

    try {
      const result = await sendContactMessage(formData)

      if (result.success) {
        setSubmitted(true)
        formRef.current?.reset()

        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        setSubmitError(result.message)
      }
    } catch (error) {
      setSubmitError("Failed to send message. Please try again later.")
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 comic-dots">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="comic-title text-4xl md:text-6xl mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            📞 CONTACT THE NINJA! 🥷
          </motion.h2>
          <div className="w-20 h-2 bg-comic-yellow mx-auto mb-6 border-2 border-black"></div>
          <div className="speech-bubble max-w-2xl mx-auto">
            <p className="text-black font-bold text-lg">
              Ready to bring your vision to LIFE? Get in touch and let's create something AMAZING together! 💥
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="ninja-comic-card">
              <h3
                className="text-2xl font-bold mb-6 relative inline-block text-black dark:text-white"
                style={{ fontFamily: "Bungee, cursive" }}
              >
                LET'S TALK! 💬
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-comic-yellow border border-black"></div>
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-8 font-semibold">
                Whether you need a COMPLETE environment design, map rework, or custom terrain creation, I'm here to help
                bring your vision to life with PRECISION and CREATIVITY! 🎯
              </p>

              <div className="space-y-6">
                <motion.div className="flex items-start gap-4 group" whileHover={{ x: 10 }}>
                  <div className="bg-comic-yellow/20 p-3 rounded-full text-comic-yellow group-hover:bg-comic-yellow/30 transition-colors border-2 border-black">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4
                      className="text-lg font-bold text-black dark:text-white"
                      style={{ fontFamily: "Fredoka One, cursive" }}
                    >
                      Discord 💬
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 font-semibold">mni_rbx</p>
                  </div>
                </motion.div>

                <motion.div className="flex items-start gap-4 group" whileHover={{ x: 10 }}>
                  <div className="bg-comic-yellow/20 p-3 rounded-full text-comic-yellow group-hover:bg-comic-yellow/30 transition-colors border-2 border-black">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4
                      className="text-lg font-bold text-black dark:text-white"
                      style={{ fontFamily: "Fredoka One, cursive" }}
                    >
                      Roblox 🎮
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 font-semibold">MNI_RBLX</p>
                  </div>
                </motion.div>

                <motion.div className="mt-12 ninja-comic-card" whileHover={{ scale: 1.02 }}>
                  <h4
                    className="text-lg font-bold mb-2 text-black dark:text-white"
                    style={{ fontFamily: "Bungee, cursive" }}
                  >
                    ⏰ WORKING HOURS
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 font-semibold">
                    I'm available for EPIC projects and consultations:
                  </p>
                  <div className="space-y-2 font-bold">
                    <div className="flex justify-between text-black dark:text-white">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM ⚡</span>
                    </div>
                    <div className="flex justify-between text-black dark:text-white">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM 🎯</span>
                    </div>
                    <div className="flex justify-between text-black dark:text-white">
                      <span>Sunday:</span>
                      <span>Closed 😴</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="ninja-comic-card">
              <h3
                className="text-2xl font-bold mb-6 relative inline-block text-black dark:text-white"
                style={{ fontFamily: "Bungee, cursive" }}
              >
                SEND A MESSAGE! 📨
                <div className="absolute -bottom-2 left-0 w-12 h-1 bg-comic-yellow border border-black"></div>
              </h3>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="speech-bubble bg-green-400 border-green-600"
                >
                  <p className="text-black font-bold">
                    🎉 MESSAGE SENT SUCCESSFULLY! I'll get back to you SUPER FAST! ⚡
                  </p>
                </motion.div>
              ) : (
                <form action={handleSubmit} ref={formRef} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-black dark:text-white mb-1"
                      style={{ fontFamily: "Fredoka One, cursive" }}
                    >
                      NAME 🏷️
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-4 border-black rounded-md focus:outline-none focus:ring-4 focus:ring-comic-yellow focus:border-comic-yellow transition-colors font-semibold"
                      placeholder="Your AWESOME name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-black dark:text-white mb-1"
                      style={{ fontFamily: "Fredoka One, cursive" }}
                    >
                      EMAIL 📧
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-4 border-black rounded-md focus:outline-none focus:ring-4 focus:ring-comic-yellow focus:border-comic-yellow transition-colors font-semibold"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-bold text-black dark:text-white mb-1"
                      style={{ fontFamily: "Fredoka One, cursive" }}
                    >
                      MESSAGE 💬
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white dark:bg-gray-800 border-4 border-black rounded-md focus:outline-none focus:ring-4 focus:ring-comic-yellow focus:border-comic-yellow transition-colors font-semibold"
                      placeholder="Tell me about your EPIC project..."
                    ></textarea>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="comic-button w-full flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        SENDING... 🚀
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />📨 SEND MESSAGE!
                      </>
                    )}
                  </motion.button>
                </form>
              )}

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="speech-bubble bg-red-400 border-red-600 mt-4"
                >
                  <div className="flex items-center justify-center gap-2">
                    <AlertCircle className="w-5 h-5 text-black" />
                    <p className="text-black font-bold">❌ {submitError}</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
