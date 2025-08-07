"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ExternalLink, X } from "lucide-react"

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "dragonball", name: "Dragon Ball" },
    { id: "environments", name: "Environments" },
    { id: "other", name: "Other Projects" },
  ]

  const projects = [
    {
      id: 1,
      title: "Dragon Ball Online",
      category: "dragonball",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PDBCpUD8q0ntvqPK2Dp7RvCfLIMCs3.png",
      description: "Terrain and environment design for Dragon Ball Online game",
      details:
        "Created immersive landscapes inspired by the Dragon Ball universe, including mountains, forests, and alien terrains. Implemented dynamic lighting and weather effects to enhance the player experience.",
    },
    {
      id: 2,
      title: "Dragon Ball Hyper Blood",
      category: "dragonball",
      image:
        "https://static0.hardcoregamerimages.com/wordpress/wp-content/uploads/Roblox-Dragon-Ball-Hyper-Blood-Codes.png",
      description: "Map design and lighting for Dragon Ball Hyper Blood",
      details:
        "Designed battle arenas and training grounds with strategic layouts and visual effects. Created atmospheric lighting to match the intense combat focus of the game.",
    },
    {
      id: 3,
      title: "Dragon Ball RP: Ryoku",
      category: "dragonball",
      image: "https://tr.rbxcdn.com/180DAY-dda046c0c1dd79842268d25b755dff83/768/432/Image/Webp/noFilter",
      description: "Environmental detailing and terrain creation for Ryoku",
      details:
        "Developed detailed environments for roleplaying scenarios, including cities, wilderness areas, and training facilities. Added small details to enhance immersion and storytelling.",
    },
    {
      id: 4,
      title: "Dragon Ball Mortals 4",
      category: "dragonball",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NBgJi51gHndKufV8QPMqJKv9UtWShu.png",
      description: "Sky design and lighting effects for Mortals 4",
      details:
        "Created dynamic sky systems with day/night cycles and weather patterns. Implemented special effects for energy attacks and transformations that interact with the environment.",
    },
    {
      id: 5,
      title: "Dragon Ball RP Sparking",
      category: "dragonball",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wg8L5wqnCIFryxqyPPnSmOk25qr64t.png", // Updated with new Sparking image
      description: "Environment and terrain design for Spareking",
      details:
        "Designed diverse battle environments and training areas with attention to the Dragon Ball universe aesthetics. Created immersive landscapes that enhance the roleplaying experience.",
    },
    {
      id: 6,
      title: "Dragon Ball Hero Aweking",
      category: "dragonball",
      image: "https://tr.rbxcdn.com/180DAY-adfc4b6a726c8bff471623c6b9e95b89/768/432/Image/Webp/noFilter",
      description: "Map design and visual effects for Dragon Ball HA",
      details:
        "Crafted detailed maps with strategic layouts for combat and exploration. Implemented visual effects that capture the energy and intensity of Dragon Ball battles.",
    },
    {
      id: 7,
      title: "Dragon Ball Hero Aweking 2",
      category: "dragonball",
      image: "https://images-ext-1.discordapp.net/external/k-HRI0qlBE5tFTHBra6OAOJWTAEijAcJWjRGALZ8LDU/https/tr.rbxcdn.com/180DAY-306f63c32e025de07d0a51f39f6308bf/500/280/Image/Jpeg/noFilter",
      description: "Advanced terrain and lighting for the sequel",
      details:
        "Evolved the visual style with improved terrain systems and dynamic lighting. Created more detailed environments with interactive elements and weather effects.",
    },
    {
      id: 8,
      title: "Project Elfen",
      category: "other",
      image: "https://cdn.discordapp.com/icons/725113511310524486/08a672715ca9a506702511b6f0a71210.webp?size=512",
      description: "Terrain and environment design for Project Elfen",
      details:
        "Designed fantasy environments with unique architectural elements and natural formations. Created a cohesive visual style that blends magical and realistic elements.",
    },
    {
      id: 9,
      title: "Luxury Hotel Complex",
      category: "environments",
      image: "https://kappa.lol/n169hZ",
      description: "Detailed hotel and lounge environment creation",
      details:
        "Modeled and textured high-end interior spaces with attention to lighting, materials, and architectural details. Created a seamless flow between indoor and outdoor spaces.",
    },
  ]

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  const getProject = (id: number) => {
    return projects.find((project) => project.id === id)
  }

  return (
    <section id="projects" className="py-20 bg-muted/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of terrain art, map design, and environmental work
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -10 }}
                className="bg-background rounded-lg overflow-hidden shadow-lg border border-muted hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <button
                        onClick={() => setSelectedProject(project.id)}
                        className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors w-full"
                      >
                        View Details <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-background border border-primary/20 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                {selectedProject && getProject(selectedProject) && (
                  <>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 z-10 bg-primary/10 hover:bg-primary/20 p-2 rounded-full transition-colors"
                    >
                      <X size={20} />
                    </button>

                    <div className="relative h-64 md:h-80">
                      <Image
                        src={getProject(selectedProject)?.image || "/placeholder.svg"}
                        alt={getProject(selectedProject)?.title || ""}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
                      <div className="absolute bottom-0 left-0 p-6">
                        <h2 className="text-2xl md:text-3xl font-bold">{getProject(selectedProject)?.title}</h2>
                        <div className="h-1 w-20 bg-primary my-3"></div>
                        <p className="text-muted-foreground">{getProject(selectedProject)?.description}</p>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                      <p className="text-muted-foreground mb-6">{getProject(selectedProject)?.details}</p>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
