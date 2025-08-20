import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { GallerySection } from "@/components/gallery-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"

export default function HomePage() {
  return (
    <main className="min-h-screen smooth-scroll">
      <ScrollProgress />
      <Navigation />

      <div id="hero" className="section-transition">
        <HeroSection />
      </div>

      <div id="gallery" className="section-transition">
        <GallerySection />
      </div>

      <div id="testimonials" className="section-transition">
        <TestimonialsSection />
      </div>

      <div id="about" className="section-transition">
        <AboutSection />
      </div>

      <div id="contact" className="section-transition">
        <ContactSection />
      </div>

      <BackToTop />
    </main>
  )
}
