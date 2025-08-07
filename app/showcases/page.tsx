import type { Metadata } from "next"
import ShowcasesPageClient from "./ShowcasesPageClient"

export const metadata: Metadata = {
  title: "Showcases",
  description: "Explore my portfolio of terrain art, map design, and environmental work across different categories",
}

export default function ShowcasesPage() {
  return <ShowcasesPageClient />
}
