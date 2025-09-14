import { HeroSection } from "@/components/hero-section"
import { PresaleSection } from "@/components/presale-section"
import { MemeGallery } from "@/components/meme-gallery"
import { AboutSection } from "@/components/about-section"
import { CommunitySection } from "@/components/community-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PresaleSection />
      <MemeGallery />
      <AboutSection />
      <CommunitySection />
      <Footer />
    </main>
  )
}
