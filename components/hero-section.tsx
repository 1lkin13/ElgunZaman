"use client"

import { useLanguage } from "@/hooks/use-language"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Scissors, Star, Heart, Users } from "lucide-react"
import BlurText from "./BlurText"

export function HeroSection() {
  const { t } = useLanguage()

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background removed: Particles covers globally in layout */}

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 md:px-6">
        {/* Ana Başlık */}
        <div className="mb-20 mt-8">
          <BlurText
            text={t.hero.title}
            delay={200}
            animateBy="words"
            direction="top"
            className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight mb-6 tracking-wider"
            animationFrom={{ filter: 'blur(15px)', opacity: 0, y: -80 }}
            animationTo={[
              { filter: 'blur(8px)', opacity: 0.6, y: -20 },
              { filter: 'blur(0px)', opacity: 1, y: 0 }
            ]}
            stepDuration={0.4}
          />
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "200px" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="h-0.5 w-full bg-gradient-to-r from-transparent via-white/80 to-transparent mx-auto relative overflow-hidden shadow-lg shadow-white/20"
          >
            <motion.div
              animate={{
                x: ["-100%", "100%"],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent shadow-lg shadow-white/40"
            />
          </motion.div>
        </div>

        {/* Alt Başlık */}
        <BlurText
          text={t.hero.subtitle}
          delay={150}
          animateBy="words"
          direction="bottom"
          className="font-sans text-xl text-center sm:text-2xl md:text-3xl mb-20 text-white/80 max-w-4xl mx-auto leading-relaxed font-light"
          animationFrom={{ filter: 'blur(12px)', opacity: 0, y: 50 }}
          animationTo={[
            { filter: 'blur(6px)', opacity: 0.5, y: 15 },
            { filter: 'blur(0px)', opacity: 1, y: 0 }
          ]}
          stepDuration={0.3}
        />

        {/* Minimalist CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1, delay: 1 }}
          className="space-y-8"
        >
          {/* Ana CTA Butonu */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-black hover:bg-white/90 px-12 py-6 text-xl font-medium rounded-full transition-all duration-300 shadow-2xl hover:shadow-white/20"
            >
              Əlaqə
            </Button>
          </motion.div>

          {/* İkincil Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex justify-center"
          >
          
          </motion.div>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute top-1/2 left-8 md:left-16 transform -translate-y-1/2"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-16 h-16 border mb-20 border-white/20 rounded-full flex items-center justify-center"
          >
            <Scissors className="w-6 h-6 text-white/40" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.7 }}
          className="absolute top-1/3 right-8 md:right-16 transform -translate-y-1/2"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-12 h-12 border mt-10 border-white/20 rounded-full flex items-center justify-center"
          >
            <Heart className="w-5 h-5  text-white/40" />
          </motion.div>
        </motion.div>

        {/* Extra Floating Star - yazının üzerine gelmesin, sağ üstte */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.9 }}
          className="absolute top-24 right-8"
        >
          {/* <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center"
          >
            <Star className="w-4 h-4 text-white/40" />
          </motion.div> */}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="text-white/60 cursor-pointer hover:text-white transition-colors drop-shadow-lg"
          onClick={scrollToGallery}
        >
          <ArrowDown className="h-10 w-10 mt-10 drop-shadow-lg" />
        </motion.div>
      </motion.div>
    </section>
  )
}
