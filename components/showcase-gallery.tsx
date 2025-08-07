"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, ZoomIn, Download } from "lucide-react"

// This is a template structure - you can add real images later
const showcases = [
  {
    id: 1,
    title: "Dragon Ball Environments",
    category: "dragonball",
    image:
      "",
    description: "Custom terrain and environment design for Dragon Ball games",
  },
  {
    id: 2,
    title: "Battle Arena",
    category: "dragonball",
    image:
      "",
    description: "Combat-focused arena with dynamic lighting effects",
  },
  {
    id: 3,
    title: "Ryoku Landscape",
    category: "dragonball",
    image: "",
    description: "Open world environment with diverse biomes",
  },
  {
    id: 4,
    title: "Mountain Range",
    category: "terrain",
    image: "/placeholder.svg?height=600&width=800",
    description: "Detailed mountain terrain with realistic texturing",
  },
  {
    id: 5,
    title: "Luxury Interior",
    category: "interiors",
    image: "/placeholder.svg?height=600&width=800",
    description: "High-end hotel lobby with custom lighting",
  },
  {
    id: 6,
    title: "Alien Planet",
    category: "environments",
    image: "/placeholder.svg?height=600&width=800",
    description: "Otherworldly environment with unique flora",
  },
  {
    id: 7,
    title: "Training Dojo",
    category: "dragonball",
    image: "/placeholder.svg?height=600&width=800",
    description: "Traditional martial arts training facility",
  },
  {
    id: 8,
    title: "Futuristic City",
    category: "environments",
    image: "/placeholder.svg?height=600&width=800",
    description: "Sci-fi urban landscape with neon lighting",
  },
  {
    id: 9,
    title: "Waterfall Scene",
    category: "terrain",
    image: "/placeholder.svg?height=600&width=800",
    description: "Natural waterfall with realistic water effects",
  },
  {
    id: 10,
    title: "Cafe Interior",
    category: "interiors",
    image: "/placeholder.svg?height=600&width=800",
    description: "Cozy cafe environment with detailed props",
  },
  {
    id: 11,
    title: "Desert Landscape",
    category: "terrain",
    image: "/placeholder.svg?height=600&width=800",
    description: "Vast desert with dunes and rock formations",
  },
  {
    id: 12,
    title: "Tournament Arena",
    category: "dragonball",
    image: "/placeholder.svg?height=600&width=800",
    description: "World Martial Arts Tournament stage",
  },
]

// Define categories based on the showcase items
const categories = [
  { id: "all", name: "All Showcases" },
  { id: "dragonball", name: "Dragon Ball" },
  { id: "terrain", name: "Terrain" },
  { id: "environments", name: "Environments" },
  { id: "interiors", name: "Interiors" },
]

export default function ShowcaseGallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedShowcase, setSelectedShowcase] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid")

  const filteredShowcases =
    activeCategory === "all" ? showcases : showcases.filter((showcase) => showcase.category === activeCategory)

  const getShowcase = (id: number) => {
    return showcases.find((showcase) => showcase.id === id)
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted/30 text-muted-foreground hover:bg-muted/50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="flex gap-2 bg-muted/20 p-1 rounded-lg">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${viewMode === "grid" ? "bg-primary/20 text-primary" : "text-muted-foreground"}`}
              aria-label="Grid view"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>
            <button
              onClick={() => setViewMode("masonry")}
              className={`p-2 rounded ${
                viewMode === "masonry" ? "bg-primary/20 text-primary" : "text-muted-foreground"
              }`}
              aria-label="Masonry view"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="3" width="18" height="6" />
                <rect x="3" y="15" width="18" height="6" />
                <rect x="3" y="9" width="6" height="6" />
                <rect x="15" y="9" width="6" height="6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${activeCategory}-${viewMode}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          }
        >
          {filteredShowcases.map((showcase) => (
            <motion.div
              key={showcase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${
                viewMode === "masonry" ? "break-inside-avoid mb-6" : ""
              } group relative overflow-hidden rounded-lg border border-muted hover:border-primary/30 transition-all duration-300 bg-background/50 backdrop-blur-sm`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={showcase.image || "/placeholder.svg"}
                  alt={showcase.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-white font-semibold text-lg mb-1">{showcase.title}</h3>
                    <p className="text-white/80 text-sm">{showcase.description}</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedShowcase(showcase.id)}
                    className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-primary/80 transition-colors"
                    aria-label="View showcase"
                  >
                    <ZoomIn size={18} />
                  </button>
                </div>
                <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded-full text-white text-xs uppercase tracking-wider">
                    {showcase.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Showcase Detail Modal */}
      <AnimatePresence>
        {selectedShowcase !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedShowcase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedShowcase(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors text-white"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              <button
                className="absolute bottom-4 right-4 z-10 bg-primary hover:bg-primary/90 p-2 rounded-full transition-colors text-white flex items-center gap-2"
                aria-label="Download"
              >
                <Download size={20} />
              </button>

              <div className="relative w-full h-[80vh]">
                {selectedShowcase && getShowcase(selectedShowcase) && (
                  <Image
                    src={getShowcase(selectedShowcase)?.image || "/placeholder.svg"}
                    alt={getShowcase(selectedShowcase)?.title || ""}
                    fill
                    className="object-contain"
                  />
                )}
              </div>

              {selectedShowcase && getShowcase(selectedShowcase) && (
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                  <h2 className="text-2xl text-white font-bold">{getShowcase(selectedShowcase)?.title}</h2>
                  <p className="text-white/80 mt-2">{getShowcase(selectedShowcase)?.description}</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
