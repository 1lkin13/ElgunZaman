"use client"

import { useLanguage } from "@/hooks/use-language"
import { motion } from "framer-motion"
import DomeGallery from "./DomeGalery" // DomeGallery bileşeni import edildi

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
    <section >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
         style={{ width: '100vw', height: '100vh' }}
        >
       

          <DomeGallery
            images={localGalleryImages}
            overlayBlurColor="#1a1a1a" // Kullanıcı isteğine göre güncellendi
            imageBorderRadius="10px" // Kenar yarıçapı sıfırlandı
            openedImageBorderRadius="20px" // Açık resim kenar yarıçapı
            grayscale={true} // Resimler gri tonlamalı (siyah-beyaz) olsun
            fit={0.6} // Resimlerin dome içindeki büyüklüğü
            segments={30} // Daha fazla segment ile pürüzsüz görünüm
            dragSensitivity={15} // Sürükleme hassasiyeti
            maxVerticalRotationDeg={10} // Dikey rotasyon limitini artır
            dragDampening={0.8} // Sürükleme sonrası yavaşlama
            openedImageWidth="80vw" // Açıldığında resmin eni daha büyük olsun
            openedImageHeight="90vh" // Açıldığında resmin boyutu daha büyük olsun
          />
        </motion.div>
    </section>
  )
}
