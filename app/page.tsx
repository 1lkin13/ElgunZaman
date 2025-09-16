"use client"

import Gallery from "@/components/Gallery"
import dynamic from "next/dynamic"

const HeroSection = dynamic(() => import("@/components/hero-section").then((mod) => mod.HeroSection), {
  ssr: false,
})
const ScrollProgress = dynamic(() => import("@/components/scroll-progress").then((mod) => mod.ScrollProgress), {
  ssr: false,
})
const BackToTop = dynamic(() => import("@/components/back-to-top").then((mod) => mod.BackToTop), {
  ssr: false,
})

const GallerySection = dynamic(() => import("@/components/gallery-section").then((mod) => mod.GallerySection), {
  ssr: false,
})
const TestimonialsSection = dynamic(() => import("@/components/testimonials-section").then((mod) => mod.TestimonialsSection), {
  ssr: false,
})
const AboutSection = dynamic(() => import("@/components/about-section").then((mod) => mod.AboutSection), {
  ssr: false,
})
const ContactSection = dynamic(() => import("@/components/contact-section").then((mod) => mod.ContactSection), {
  ssr: false,
})

export default function HomePage() {
  return (
    <main className="min-h-screen smooth-scroll">
      <ScrollProgress />

      <div id="hero" className="section-transition" suppressHydrationWarning>
        <HeroSection />
      </div>

      <div id="gallery" className="section-transition py-20" suppressHydrationWarning>
        <Gallery/>
      </div>

      <div id="testimonials" className="section-transition py-20" suppressHydrationWarning>
        <TestimonialsSection />
      </div>

      <div id="about" className="section-transition py-20" suppressHydrationWarning>
        <AboutSection />
      </div>

      <div id="contact" className="section-transition py-20" suppressHydrationWarning>
        <ContactSection />
      </div>

      <BackToTop />
    </main>
  )
}
