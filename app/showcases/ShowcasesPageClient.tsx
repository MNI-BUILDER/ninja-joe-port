"use client"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ShowcaseGallery from "@/components/showcase-gallery"
import DynamicTitle from "@/components/dynamic-title"

export default function ShowcasesPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 text-foreground overflow-hidden paper-texture">
      <DynamicTitle />
      <Navbar />
      <div className="pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-16 relative">
            <div className="absolute -top-10 -left-10 text-8xl font-bold text-primary opacity-5 select-none">作</div>
            <div className="absolute -bottom-10 -right-10 text-8xl font-bold text-primary opacity-5 select-none">
              品
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary">Showcases</span>
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A gallery of my best work and creative projects across different categories
            </p>
          </div>

          <ShowcaseGallery />
        </div>
      </div>
      <Footer />
    </div>
  )
}
