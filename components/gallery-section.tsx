"use client"

import { useLanguage } from "@/hooks/use-language"
import { galleryCategories } from "@/lib/data"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react"

type CategoryKey = keyof typeof galleryCategories["en"]

const galleryImages: Array<{ id: number; src: string; alt: string; category: CategoryKey }> = [
  {
    id: 1,
    src: "/romantic-wedding-couple.png",
    alt: "Wedding Photography",
    category: "wedding",
  },
  {
    id: 2,
    src: "/professional-headshot.png",
    alt: "Portrait Photography",
    category: "portrait",
  },
  {
    id: 3,
    src: "/celebration-party.png",
    alt: "Event Photography",
    category: "event",
  },
  {
    id: 4,
    src: "/fashion-model-studio.png",
    alt: "Fashion Photography",
    category: "fashion",
  },
  {
    id: 5,
    src: "/nature-sunset-landscape.png",
    alt: "Nature Photography",
    category: "nature",
  },
  {
    id: 6,
    src: "/happy-children-family-photo.png",
    alt: "Family Photography",
    category: "family",
  },
  {
    id: 7,
    src: "/modern-building-architecture.png",
    alt: "Architecture Photography",
    category: "architecture",
  },
  {
    id: 8,
    src: "/urban-candid-street.png",
    alt: "Street Photography",
    category: "street",
  },
]

export function GallerySection() {
  const { t, currentLanguage } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all")

  const categoryKeys: CategoryKey[] = [
    "all",
    ...Array.from(new Set(galleryImages.map((img) => img.category))),
  ]
  const categories = galleryCategories[currentLanguage] || galleryCategories.en

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage)
      const nextIndex = (currentIndex + 1) % galleryImages.length
      setSelectedImage(galleryImages[nextIndex].id)
    }
  }

  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = galleryImages.findIndex((img) => img.id === selectedImage)
      const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length
      setSelectedImage(galleryImages[prevIndex].id)
    }
  }

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage)

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            {t.gallery.title}
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">{t.gallery.subtitle}</p>
        </motion.div>

        {/* Featured Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative mb-16 max-w-4xl mx-auto"
        >
          <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-muted">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide}
                src={galleryImages[currentSlide].src}
                alt={galleryImages[currentSlide].alt}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openLightbox(galleryImages[currentSlide].id)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            {/* Carousel Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 border border-blue-500/40 bg-blue-600/30 hover:bg-blue-600/40 text-blue-100 p-2 rounded-full transition-all duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 border border-blue-500/40 bg-blue-600/30 hover:bg-blue-600/40 text-blue-100 p-2 rounded-full transition-all duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${
                    index === currentSlide ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Category Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categoryKeys.map((categoryKey) => (
            <button
              key={categoryKey}
              onClick={() => setActiveCategory(categoryKey)}
              className={`px-6 py-3 rounded-full border-2 font-medium transition-all duration-300 hover:scale-105 ${
                activeCategory === categoryKey
                  ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/25"
                  : "bg-white/10 border-blue-400 text-blue-600 hover:bg-blue-50 hover:border-blue-500 backdrop-blur-sm"
              }`}
            >
              {categories[categoryKey]}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12"
        >
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square group cursor-pointer overflow-hidden rounded-lg bg-muted"
              onClick={() => openLightbox(image.id)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white border border-blue-500 shadow-sm">
                  {categories[image.category]}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2 px-8 py-4 text-lg border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            onClick={() => window.open("https://instagram.com", "_blank")}
          >
            <ExternalLink className="h-5 w-5" />
            {t.gallery.viewMore}
          </Button>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && selectedImageData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.alt}
                className="absolute inset-0 w-full h-full object-contain rounded-lg"
              />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 border border-blue-500/40 bg-blue-600/30 hover:bg-blue-600/40 text-blue-100 p-2 rounded-full transition-all duration-200"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 border border-blue-500/40 bg-blue-600/30 hover:bg-blue-600/40 text-blue-100 p-3 rounded-full transition-all duration-200"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 border border-blue-500/40 bg-blue-600/30 hover:bg-blue-600/40 text-blue-100 p-3 rounded-full transition-all duration-200"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-sm rounded-lg border border-blue-500/30 px-4 py-3 w-[88%] max-w-md text-center">
                <h3 className="text-blue-400 font-medium text-base">{selectedImageData.alt}</h3>
                <p className="text-blue-300 text-xs mt-1">{categories[selectedImageData.category]}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
