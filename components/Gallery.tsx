import React from 'react'
import { GallerySection } from './gallery-section'
import { useLanguage } from '@/hooks/use-language'
import { motion } from 'framer-motion'

function Gallery() {
  const { t } = useLanguage()

  return (
    <div className="relative bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_40%,rgba(0,0,0,0)_100%)]">
      {/* GallerySection bileşeni, başlık ve altyazıyı zaten içeriyor */}
      <div className="absolute inset-0 bg-[rgb(33,33,33)] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 0%, transparent 70%)`,
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-extralight text-white/90 tracking-tight"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
          >
            {t.gallery.title}
          </h2>
          <p
            className="font-sans text-lg md:text-xl text-white/70 max-w-2xl mx-auto mt-4 leading-relaxed"
            style={{ textShadow: "0 1px 2px rgba(0,0,0,0.4)" }}
          >
            {t.gallery.subtitle}
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <GallerySection />
      </motion.div>
    </div>
  )
}

export default Gallery