"use client"

import { useEffect } from "react"

export function getGreeting(): string {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return "おはよう" // Good morning
  } else if (hour >= 12 && hour < 17) {
    return "こんにちは" // Good afternoon
  } else if (hour >= 17 && hour < 22) {
    return "こんばんは" // Good evening
  } else {
    return "おやすみ" // Good night
  }
}

export default function DynamicTitle() {
  useEffect(() => {
    const updateTitle = () => {
      const greeting = getGreeting()
      document.title = `${greeting} - Joe Dada's Portfolio | Terrain Artist & Map Designer | Epic Creations`
    }

    // Update title on mount
    updateTitle()

    // Update title every minute
    const interval = setInterval(updateTitle, 60000)

    return () => clearInterval(interval)
  }, [])

  return null
}
