"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToGallery = () => {
    const gallerySection = document.getElementById("gallery")
    if (gallerySection) {
      const offsetTop = gallerySection.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative min-h-[92vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-[120%] bg-cover bg-center bg-no-repeat parallax-bg"
          style={{
            backgroundImage: "url('/background2.jpg')",
            transform: "translate3d(0, 0, 0)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-3xl md:max-w-4xl mx-auto px-4 md:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-2 md:mb-4 tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-sans text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-10 text-white/85 max-w-2xl mx-auto leading-relaxed"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <Button
            onClick={scrollToGallery}
            size="lg"
            className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
          >
            {t.hero.cta}
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-5 md:bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-white/70 cursor-pointer"
          onClick={scrollToGallery}
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}
