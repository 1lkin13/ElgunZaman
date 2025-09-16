"use client"

import { useLanguage } from "@/hooks/use-language"
import { motion } from "framer-motion"
import DomeGallery from "./DomeGalery"
import BlurText from "./BlurText"

const localGalleryImages = [
  {
    src: "/romantic-wedding-couple.png",
    alt: "Wedding Photography",
  },
  {
    src: "/professional-headshot.png",
    alt: "Portrait Photography",
  },
  {
    src: "/celebration-party.png",
    alt: "Event Photography",
  },
  {
    src: "/fashion-model-studio.png",
    alt: "Fashion Photography",
  },
  {
    src: "/nature-sunset-landscape.png",
    alt: "Nature Photography",
  },
  {
    src: "/happy-children-family-photo.png",
    alt: "Family Photography",
  },
  {
    src: "/modern-building-architecture.png",
    alt: "Architecture Photography",
  },
  {
    src: "/urban-candid-street.png",
    alt: "Street Photography",
  },
]

export function GallerySection() {
  const { t } = useLanguage()

  return (
    <section>
  

      {/* Dome Gallery */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <DomeGallery
          images={localGalleryImages}
          imageBorderRadius="10px"
          openedImageBorderRadius="20px"
          grayscale={true}
          fit={0.6}
          segments={30}
          dragSensitivity={15}
          maxVerticalRotationDeg={10}
          dragDampening={0.8}
          openedImageWidth="80vw"
          openedImageHeight="90vh"
        />
      </motion.div>
    </section>
  )
}
