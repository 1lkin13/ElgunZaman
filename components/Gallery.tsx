import React from 'react'
import { GallerySection } from './gallery-section'
import { useLanguage } from '@/hooks/use-language'
import { motion } from 'framer-motion'
import BlurText from './BlurText'

function Gallery() {
  const { t } = useLanguage()

  return (
    <div className="relative">
      {/* GallerySection bileşeni, başlık ve altyazıyı zaten içeriyor */}
      {/* Section Header */}
      <div className="text-center mb-16 px-4">
        <BlurText
          text={t.gallery.title}
          delay={150}
          animateBy="words"
          direction="top"
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4"
          animationFrom={{ filter: 'blur(12px)', opacity: 0, y: -60 }}
          animationTo={[
            { filter: 'blur(6px)', opacity: 0.6, y: -20 },
            { filter: 'blur(0px)', opacity: 1, y: 0 }
          ]}
          stepDuration={0.3}
        />
        <BlurText
          text={t.gallery.subtitle}
          delay={100}
          animateBy="words"
          direction="bottom"
          className="font-sans text-lg text-white/70 max-w-2xl mx-auto"
          animationFrom={{ filter: 'blur(10px)', opacity: 0, y: 40 }}
          animationTo={[
            { filter: 'blur(5px)', opacity: 0.5, y: 10 },
            { filter: 'blur(0px)', opacity: 1, y: 0 }
          ]}
          stepDuration={0.25}
        />
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